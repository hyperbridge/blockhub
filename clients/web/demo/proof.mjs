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
let page
const errors = []
const requests = []
const results = []
try {
    browser = await chromium.launch({
        executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true
    })
    page = await browser.newPage({ viewport: { width: 2500, height: 1400 }, deviceScaleFactor: 1 })
    page.setDefaultTimeout(15000)
    page.setDefaultNavigationTimeout(30000)
    page.on('pageerror', error => errors.push(error.stack))
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
    page.on('request', request => requests.push(request.url()))
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForSelector('[data-demo-notice]', { timeout: 15000 })
    if (!process.env.DEMO_INTERACTIONS_ONLY) {
    for (const [name, route] of [['store', '/'], ['game', '/product/1'], ['games', '/games'], ['collections', '/collections'], ['collection', '/collection/1']]) {
        console.log(JSON.stringify({ checking: name, route }))
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
        console.log(JSON.stringify({ checking: 'product', id }))
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
    console.log(JSON.stringify({ checking: 'signup' }))
    await page.goto(`${url}#/`, { waitUntil: 'networkidle' })
    assert.match(await page.locator('[data-demo-header-signup]').getAttribute('href'), /#\/account\/signup$/)
    await page.locator('[data-demo-header-signup]').click()
    await page.waitForSelector('[data-demo-signup-notice]')
    assert.equal(await page.locator('input[name="email"]').inputValue(), 'player@example.com')
    await page.screenshot({ path: path.join(output, 'signup.png') })
    await page.locator('[data-demo-signup-next]').click()
    await page.waitForSelector('[data-demo-signup-finish]')
    await page.waitForFunction(() => {
        let element = document.querySelector('[data-demo-signup-finish]')
        if (!element) return false
        for (; element; element = element.parentElement) {
            if (Number(getComputedStyle(element).opacity) < 0.99) return false
        }
        return true
    })
    assert.equal(await page.evaluate(() => window.$nuxt.$store.state.application.signedIn), true)
    await page.screenshot({ path: path.join(output, 'signup-success.png') })
    await page.locator('[data-demo-signup-finish]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/profile/1')
    console.log(JSON.stringify({ checking: 'download' }))
    assert.match(await page.locator('[data-demo-header-download]').getAttribute('href'), /#\/download$/)
    await page.locator('[data-demo-header-download]').click()
    await page.waitForSelector('[data-demo-download]')
    await page.locator('[data-demo-download]').click()
    await page.waitForSelector('[data-demo-download-result]')
    assert.equal(await page.evaluate(() => window.$nuxt.$route.path), '/download')
    await page.screenshot({ path: path.join(output, 'download.png') })
    console.log(JSON.stringify({ checking: 'item catalog' }))
    await page.goto(`${url}#/assets`, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => document.querySelectorAll('[data-demo-catalog-asset]').length === 14)
    assert.equal(await page.locator('[data-demo-catalog-asset]').count(), 14)
    assert.match(await page.locator('[data-demo-catalog-asset="1"]').innerText(), /Magic Plate Armor/)
    await page.locator('[data-demo-catalog-asset="1"]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/asset/1')
    console.log(JSON.stringify({ checking: 'collection item' }))
    await page.goto(`${url}#/collection/1`, { waitUntil: 'networkidle' })
    await page.locator('[data-demo-asset="1"]').first().click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/asset/1')
    await page.waitForLoadState('networkidle')
    console.log(JSON.stringify({ checking: 'search' }))
    await page.goto(`${url}#/search`, { waitUntil: 'networkidle' })
    await page.locator('[data-demo-search]').fill('DOOM')
    await page.waitForFunction(() => document.querySelectorAll('[data-demo-search-result]').length === 1 && document.querySelector('[data-demo-search-result="3"]'))
    await page.locator('[data-demo-search-result="3"] [data-game-card-open="3"]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/product/3')
    console.log(JSON.stringify({ checking: 'marketplace navigation' }))
    await page.goto(`${url}#/marketplace/home`, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => document.querySelectorAll('[data-demo-marketplace-pick]').length === 3)
    await page.waitForFunction(() => document.querySelector('[data-demo-marketplace-pick="1"]')?.innerText.includes('Magic Plate Armor'))
    assert.notEqual(await page.evaluate(() => window.$nuxt.$store.state.application.activeModal), 'comingSoon')
    assert.deepEqual(await page.locator('[data-demo-marketplace-pick]').evaluateAll(items => items.map(item => item.dataset.demoMarketplacePick)), ['1', '2', '3'])
    assert.match(await page.locator('[data-demo-marketplace-pick="1"]').innerText(), /Magic Plate Armor/)
    await page.locator('[data-demo-marketplace-nav="trade"]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/marketplace/trade/home')
    await page.locator('[data-demo-marketplace-nav="inventory"]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/marketplace/marketplace-inventory/main')
    console.log(JSON.stringify({ checking: 'people and wallet previews' }))
    await page.goto(`${url}#/curators`, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => document.querySelectorAll('[data-demo-person]').length === 5)
    await page.locator('[data-demo-person-open="1"]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/profile/1')
    await page.goto(`${url}#/wallet/1`, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => document.querySelector('#page-content')?.innerText.includes('Sample Bitcoin Wallet'))
    console.log(JSON.stringify({ checking: 'sign out and sign in' }))
    await page.goto(`${url}#/account/signout`, { waitUntil: 'networkidle' })
    await page.locator('[data-demo-signout]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/' && !window.$nuxt.$store.state.application.signedIn)
    await page.locator('[data-demo-header-signin]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/account/signin')
    await page.locator('[data-demo-signin]').click()
    await page.waitForFunction(() => window.$nuxt.$route.path === '/' && window.$nuxt.$store.state.application.signedIn)
    await page.waitForLoadState('networkidle')
    for (const [route, target] of [['/republic/citizenship', '/profiles'], ['/republic/district', '/communities'], ['/transaction-overview', '/marketplace/trade/history']]) {
        await page.goto(`${url}#${route}`, { waitUntil: 'networkidle' })
        await page.waitForFunction(expected => window.$nuxt.$route.path === expected && document.querySelector('#page-content')?.innerText.length > 30, target)
        results.push({ route, redirect: target })
    }
    const revision = await page.evaluate(() => window.$nuxt.$demo.version)
    if (process.env.DEMO_EXPECT_REVISION) assert.equal(revision, process.env.DEMO_EXPECT_REVISION)
    assert.deepEqual(errors, [])
    assert.deepEqual(requests.filter(request => /^https?:/.test(request) && new URL(request).origin !== new URL(url).origin), [])
    console.log(JSON.stringify({ passed: true, revision, routes: results.map(result => result.route), errors, requestCount: requests.length }))
    await page.close()
    await browser.close()
    browser = null
    await new Promise((resolve, reject) => {
        const sweep = spawn(process.execPath, [path.join(path.dirname(fileURLToPath(import.meta.url)), 'routes-proof.mjs'), url, path.join(output, 'routes')], { stdio: 'inherit' })
        sweep.once('error', reject)
        sweep.once('exit', code => code === 0 ? resolve() : reject(new Error(`Route sweep exited ${code}`)))
    })
} catch (error) {
    console.error(error.stack)
    if (page && !page.isClosed()) {
        try { await page.screenshot({ path: path.join(output, 'interaction-failure.png'), timeout: 5000 }) }
        catch (captureError) { console.error(`Failure capture: ${captureError.message}`) }
    }
    throw error
} finally {
    await fs.writeFile(path.join(output, 'results.json'), JSON.stringify({ results, errors, requests }, null, 2))
    if (page && !page.isClosed()) await page.close()
    await browser?.close()
    if (server) server.kill('SIGTERM')
}
