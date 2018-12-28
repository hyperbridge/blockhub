require('@babel/register')

global.document = {
    createElement() {
        return {
            getAttribute() {
                return ''
            }
        }
    },
    getElementsByTagName() {
        return {
            getAttribute() {
                return ''
            }
        }
    },
    querySelector() {
        return {
            getAttribute() {
                return ''
            }
        }
    }
}

global.addEventListener = function () {
}

global.navigator = {
    language: 'en',
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) BlockHub/0.8.0 Chrome/61.0.3163.100 Electron/2.0.14 Safari/537.36"
}

global.history = {
    replaceState() {

    }
}

global.location = {
    hostname: 'blockhub.gg',
    hash: '#'
}

global.document.location = global.location

global.BlockHub = {}

global.window = global



const VueRouterSitemap = require('vue-router-sitemap').default
const path = require('path')
const router = require('./router').default

const staticSitemap = path.resolve('./dist', 'sitemap.xml')
const filterConfig = {
    isValid: false,
    rules: [
    /\/example-page/,
    /\*/,
    ],
}

new VueRouterSitemap(router).filterPaths(filterConfig).build('https://blockhub.gg').save(staticSitemap)

process.exit()