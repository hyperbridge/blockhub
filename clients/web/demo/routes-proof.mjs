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
                await page.waitForFunction(expected => window.$nuxt?.$route.path === expected, route, { timeout: 5000 })
                await page.waitForFunction(() => [...document.images].filter(image => image.offsetWidth).every(image => image.complete), null, { timeout: 5000 })
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
            console.log(JSON.stringify({ route, passed: result.passed, errors: errors.slice(0, 2), external: external.length, brokenImages: result.brokenImages?.length }))
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
