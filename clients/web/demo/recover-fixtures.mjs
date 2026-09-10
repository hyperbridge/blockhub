import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'

const directory = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(directory, '../../..')
const revision = 'f2479a43b6519f831224e4c9a7c4fa29e1e88aae'
const names = ['assets', 'collections', 'ideas', 'projects', 'realms', 'profiles', 'posts', 'messages', 'bounties', 'offers', 'updates', 'asset-transactions', 'prospectors']
const fixtures = {}
const manifest = { blockhubRevision: revision, sources: [] }
const hash = bytes => createHash('sha256').update(bytes).digest('hex')

function sanitize(value, key = '') {
    if (Array.isArray(value)) return value.map(item => sanitize(item, key))
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).filter(([name]) => !/password|passphrase|privateKey|secret|token|email/i.test(name)).map(([name, item]) => [name, sanitize(item, name)]))
    }
    if (typeof value !== 'string') return value
    if (key === 'address') return '0x0000000000000000000000000000000000000000'
    if (/^https?:\/\//.test(value)) return /img|image|logo|background|avatar/i.test(key) ? '/img/no_img.jpg' : '#'
    return value.replace(/https?:\/\/[^\s"'<>]+/g, '/img/no_img.jpg')
}

for (const name of names) {
    const source = `clients/web/ui/db/seed/${name}.json`
    const bytes = execFileSync('git', ['show', `${revision}:${source}`], { cwd: root })
    fixtures[name] = sanitize(JSON.parse(bytes))
    manifest.sources.push({ path: source, bytes: bytes.length, sha256: hash(bytes), count: fixtures[name].length })
}
fs.writeFileSync(path.join(directory, 'seed-world.json'), JSON.stringify(fixtures, null, 2) + '\n')

const portal = process.argv[2]
if (portal) {
    const portalRevision = '9e5f49a76d27122f896ad6d8e636aebd75229f2d'
    manifest.portal = { uiRevision: portalRevision, assets: [] }
    for (const name of ['blur_light_bg.png', 'left-fade.png', 'monitor_temp.png', 'realm_bg.jpg', 'realm_bg_1.png', 'scroll-icon-1.png', 'scroll-icon-2.png', 'scroll-icon-3.png', 'scroll-icon-4.png', 'scroll-icon-5.png', 'slim-logo.png']) {
        const source = `src/assets/img/${name}`
        const bytes = execFileSync('git', ['show', `${portalRevision}:${source}`], { cwd: path.join(portal, 'ui') })
        fs.writeFileSync(path.resolve(directory, '../ui/static/img', name), bytes)
        manifest.portal.assets.push({ path: source, destination: `img/${name}`, bytes: bytes.length, sha256: hash(bytes) })
    }
}
fs.writeFileSync(path.join(directory, 'recovery-manifest.json'), JSON.stringify(manifest, null, 2) + '\n')
console.log(JSON.stringify({ datasets: manifest.sources.map(({ path, count }) => ({ path, count })), portalAssets: manifest.portal?.assets.length || 0 }))
