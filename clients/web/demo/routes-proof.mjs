import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const url = process.argv[2] || 'http://127.0.0.1:43117/blockhub/'
const output = path.resolve(process.argv[3] || '../../../.tmp/routes-proof')
await fs.mkdir(output, { recursive: true })
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true })
const results = []
try {
    const discovery = await browser.newPage()
    await discovery.goto(url, { waitUntil: 'networkidle' })
    const routes = await discovery.evaluate(() => {
        const result = []
        const walk = (routes, parent = '') => routes.forEach(route => {
            const full = (route.path.startsWith('/') ? route.path : `${parent}/${route.path}`).replace(/\/$/, '') || '/'
            if (!route.redirect && !route.children?.length) result.push(full)
            if (route.children) walk(route.children, full)
        })
        walk(window.$nuxt.$router.options.routes)
        return [...new Set(result.map(route => route.replace(/:slug\??/g, 'welcome').replace(/:[A-Za-z]+\??/g, '1')))]
    })
    await discovery.close()
    const excluded = /^\/(error|not-found|unknown|denied|account\/verification|unlock|quick-import)(\/|$)/
    const queue = routes.filter(route => !excluded.test(route))
    const selected = process.env.DEMO_ROUTES?.split(',')
    if (selected) queue.splice(0, queue.length, ...selected)
    async function worker() {
        while (queue.length) {
            const route = queue.shift()
            const errors = []
            const external = []
            const page = await browser.newPage({ viewport: { width: 2500, height: 1400 }, deviceScaleFactor: 1 })
            const cpuRate = Number(process.env.DEMO_CPU_RATE || 1)
            if (cpuRate > 1) {
                const session = await page.context().newCDPSession(page)
                await session.send('Emulation.setCPUThrottlingRate', { rate: cpuRate })
            }
            page.on('pageerror', error => errors.push(error.message))
            page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
            page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
            await page.route('**/*', request => {
                const target = request.request().url()
                if (/^https?:/.test(target) && new URL(target).origin !== new URL(url).origin) {
                    external.push(target)
                    return request.abort()
                }
                return request.continue()
            })
            const result = { route, errors, external }
            try {
                await page.goto(`${url}#${route}`, { waitUntil: 'networkidle', timeout: 15000 })
                // Nuxt can reveal async children after network idle. Require the painted
                // content and visible image set to settle together, without changing the page.
                await page.evaluate(async expected => {
                    const deadline = performance.now() + 10000
                    let signature = ''
                    let stableSince = performance.now()
                    while (performance.now() < deadline) {
                        await new Promise(resolve => requestAnimationFrame(resolve))
                        const text = (document.querySelector('#page-content') || document.body).innerText
                        const images = [...document.images].filter(image => image.offsetWidth)
                        const transitioning = document.getAnimations().some(animation => animation.playState === 'running' && animation.effect?.getTiming().iterations !== Infinity)
                        const ready = window.$nuxt?.$route.path === expected && document.querySelector('[data-demo-notice]') && text.length > 30 && !transitioning && images.every(image => image.complete && image.naturalWidth)
                        const next = JSON.stringify([text, images.map(image => image.currentSrc)])
                        if (!ready || next !== signature) {
                            signature = next
                            stableSince = performance.now()
                        } else if (performance.now() - stableSince >= 300) return
                    }
                    throw new Error('Route content, transitions, and images did not become ready within 10 seconds')
                }, route)
                Object.assign(result, await page.evaluate(() => ({
                    actualRoute: window.$nuxt.$route.path,
                    nuxtError: window.$nuxt.nuxt.err,
                    text: (document.querySelector('#page-content') || document.body).innerText.slice(0, 350),
                    brokenImages: [...document.images].filter(image => image.offsetWidth && !image.naturalWidth).map(image => image.src),
                    notice: !!document.querySelector('[data-demo-notice]')
                })))
                result.passed = !errors.length && !external.length && !result.nuxtError && !result.brokenImages.length && result.notice && result.text.length > 30
            } catch (error) {
                errors.push(error.message)
                result.passed = false
            }
            if (!result.passed || ['/account/signup', '/download', '/assets', '/realms', '/community/forums', '/projects', '/profile/1', '/sitemap'].includes(route)) {
                await page.screenshot({ path: path.join(output, `${route.replace(/[^a-z0-9]+/gi, '-') || 'home'}.png`) })
            }
            results.push(result)
            console.log(JSON.stringify(result.passed ? { route, passed: true, errors, external: external.length, brokenImages: 0 } : result))
            await page.close()
        }
    }
    await Promise.all([worker(), worker(), worker(), worker()])
    await fs.writeFile(path.join(output, 'results.json'), JSON.stringify(results, null, 2))
    const failures = results.filter(result => !result.passed)
    console.log(JSON.stringify({ checked: results.length, passed: results.length - failures.length, failed: failures.map(result => result.route) }))
    assert.equal(failures.length, 0, 'Every included route must render without broken resources or runtime errors')
} finally {
    await browser.close()
}
