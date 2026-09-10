import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { createServer } from 'node:net'
import { setTimeout as delay } from 'node:timers/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const args = process.argv.slice(2)
let server
let url = args[0] || 'http://127.0.0.1:43117/blockhub/'
if (args[0] === '--serve') {
    url = 'http://127.0.0.1:43117/blockhub/'
    const demoDirectory = path.dirname(fileURLToPath(import.meta.url))
    const expectedHtml = await fs.readFile(path.resolve(demoDirectory, '../dist-pages/index.html'), 'utf8')
    // Refuse an existing preview instead of accidentally proving another process's output.
    const portCheck = createServer()
    await new Promise((resolve, reject) => {
        portCheck.once('error', reject)
        portCheck.listen(43117, '127.0.0.1', resolve)
    })
    await new Promise((resolve, reject) => portCheck.close(error => error ? reject(error) : resolve()))
    server = spawn(process.execPath, ['node_modules/nuxt/bin/nuxt.js', 'start', '..', '--config-file', 'demo/nuxt.config.js', '--hostname', '127.0.0.1', '--port', '43117'], {
        cwd: demoDirectory, stdio: ['ignore', 'pipe', 'pipe']
    })
    let log = ''
    let startupError
    server.once('error', error => { startupError = error })
    const read = chunk => { log = (log + chunk.toString()).slice(-10000) }
    server.stdout.on('data', read)
    server.stderr.on('data', read)
    try {
        const deadline = Date.now() + 15000
        let lastFailure = 'No response'
        while (true) {
            if (startupError) throw startupError
            if (server.exitCode !== null || server.signalCode !== null) {
                throw new Error(`Preview exited ${server.exitCode ?? server.signalCode}: ${log}`)
            }
            let response
            try {
                response = await fetch(url, { signal: AbortSignal.timeout(1000) })
            } catch (error) {
                lastFailure = error.message
            }
            if (response?.ok) {
                assert.equal(await response.text(), expectedHtml, 'Preview must serve the exact generated page')
                break
            }
            if (response) lastFailure = `HTTP ${response.status}`
            if (Date.now() >= deadline) throw new Error(`Preview startup timed out: ${lastFailure}\n${log}`)
            await delay(100)
        }
    } catch (error) {
        server.kill('SIGTERM')
        throw error
    }
}
const output = path.resolve(args[1] || '../../../.tmp/pages-proof')
await fs.mkdir(output, { recursive: true })
let browser
const errors = []
const requests = []
const results = []
try {
    browser = await chromium.launch({
        executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true
    })
    const page = await browser.newPage({ viewport: { width: 2500, height: 1400 }, deviceScaleFactor: 1 })
    page.on('pageerror', error => errors.push(error.stack))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
    page.on('request', request => requests.push(request.url()))
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForSelector('[data-demo-notice]', { timeout: 15000 })
    for (const [name, route] of [['store', '/'], ['game', '/product/1'], ['games', '/games'], ['collections', '/collections'], ['collection', '/collection/1']]) {
        if (route !== '/') {
            const link = page.locator(`a[href$="#${route}"]`).first()
            await link.click()
            await page.waitForFunction(expected => window.$nuxt.$route.path === expected, route)
            await page.waitForLoadState('networkidle')
        }
        const state = await page.evaluate(() => ({
            route: window.$nuxt.$route.path,
            error: window.$nuxt.nuxt.err,
            products: window.$nuxt.$store.state.products.ids.length,
            text: document.querySelector('#page-content')?.innerText.slice(0, 500),
            brokenImages: [...document.images].filter(img => img.offsetWidth && !img.naturalWidth).map(img => img.src)
        }))
        results.push({ name, ...state })
        await page.screenshot({ path: path.join(output, `${name}.png`) })
        assert.equal(state.error, null)
        assert.equal(state.products, 6)
        assert.deepEqual(state.brokenImages, [])
        if (route === '/games') {
            const contained = await page.locator('.game-card__item').evaluateAll(cards => cards.every(card => {
                const link = card.querySelector('a')
                const description = card.querySelector('.description')
                return link.getBoundingClientRect().right <= card.getBoundingClientRect().right + 1 && description.scrollWidth <= description.clientWidth + 1
            }))
            assert.equal(contained, true, 'Game artwork and descriptions must fit their cards')
        }
        if (route === '/product/1') assert.match(state.text, /Might & Magic/)
        await page.locator('[data-demo-notice] a[href$="#/"]').click()
        await page.waitForFunction(() => window.$nuxt.$route.path === '/')
    }
    await page.goto(`${url}#/product/3`, { waitUntil: 'networkidle' })
    await page.reload({ waitUntil: 'networkidle' })
    assert.equal(await page.evaluate(() => window.$nuxt.$route.path), '/product/3')
    assert.match(await page.locator('#page-content').innerText(), /DOOM/)
    for (const id of [2, 5, 10, 22]) {
        await page.goto(`${url}#/product/${id}`, { waitUntil: 'networkidle' })
        await page.waitForFunction(expected => {
            const image = document.querySelector('.screen-gallery__main-img img')
            return window.$nuxt.$route.path === `/product/${expected}` && image?.src.includes(`/demo/games/${expected}/`) && [...document.images].filter(img => img.offsetWidth).every(img => img.complete)
        }, id)
        assert.equal(await page.evaluate(() => window.$nuxt.nuxt.err), null)
        const brokenImages = await page.evaluate(() => [...document.images].filter(img => img.offsetWidth && !img.naturalWidth).map(img => ({ src: img.src, complete: img.complete, html: img.outerHTML })))
        results.push({ route: `/product/${id}`, brokenImages })
        if (brokenImages.length) await page.screenshot({ path: path.join(output, `product-${id}-failure.png`) })
        assert.deepEqual(brokenImages, [])
    }
    const readOnly = await page.evaluate(async () => {
        try {
            await window.$nuxt.$api.service('products').create({ id: 999, name: 'Unexpected mutation' })
            return false
        } catch (error) {
            return error.message.includes('Changes are not saved') && window.$nuxt.$store.state.products.ids.length === 6
        }
    })
    assert.equal(readOnly, true, 'The demo must reject backend writes')
    assert.deepEqual(errors, [])
    assert.deepEqual(requests.filter(request => /^https?:/.test(request) && new URL(request).origin !== new URL(url).origin), [])
    console.log(JSON.stringify({ passed: true, routes: results.map(result => result.route), errors, requestCount: requests.length }))
} finally {
    await fs.writeFile(path.join(output, 'results.json'), JSON.stringify({ results, errors, requests }, null, 2))
    await browser?.close()
    if (server) server.kill('SIGTERM')
}
