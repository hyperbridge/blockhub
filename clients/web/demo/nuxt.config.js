const path = require('path')
const fs = require('fs')
const base = process.env.PAGES_BASE || '/blockhub/'
const demo = name => path.resolve(__dirname, name)

module.exports = {
    ssr: false,
    target: 'static',
    srcDir: 'ui/',
    buildDir: '.nuxt-pages',
    modulesDir: [demo('node_modules')],
    telemetry: false,
    env: { PAGES_DEMO: true, PAGES_BASE: base },
    head: {
        title: 'BlockHub · UI Demo',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        link: [{ rel: 'icon', href: `${base}img/icons/favicon-32x32.png` }]
    },
    plugins: [
        demo('plugin.js'),
        '~/plugins/components', '~/plugins/filters', '~/plugins/directives',
        '~/plugins/vue-i18n', '~/plugins/vue-currency', '~/plugins/vue-awesome-swiper',
        '~/plugins/vue-country-flag', '~/plugins/vue-snotify', '~/plugins/vue-numerals',
        '~/plugins/vue-popover', '~/plugins/vue-draggable', '~/plugins/vue-emoji-mart',
        '~/plugins/vue-inputmask', '~/plugins/vue2-editor', '~/plugins/vue-upload-component',
        '~/plugins/vue-datepicker', '~/plugins/autosize', '~/plugins/jquery', '~/plugins/moment'
    ],
    modules: ['cookie-universal-nuxt'],
    router: {
        base,
        mode: 'hash',
        extendRoutes(routes) {
            // Browse the original storefront, catalog, collections and detail screens.
            const included = ['/', '/games', '/product/:id', '/collections', '/collection/:id', '/search', '/marketplace', '/help', '/about']
            routes.splice(0, routes.length, ...routes.filter(route => included.includes(route.path.replace(/\?$/, ''))))
            routes.push({ path: '*', redirect: '/' })
        }
    },
    generate: { dir: 'dist-pages', crawler: false, routes: ['/'], fallback: '404.html' },
    hooks: {
        'generate:done'(generator) {
            fs.cpSync(path.resolve(__dirname, '../ui/assets/fonts/barlow'), path.join(generator.distPath, 'fonts/barlow'), { recursive: true })
            fs.writeFileSync(path.join(generator.distPath, '.nojekyll'), '')
        }
    },
    build: {
        stats: 'errors-warnings',
        extractCSS: true,
        loaders: { scss: { implementation: require('sass') } },
        extend(config) {
            config.resolve.modules.unshift(demo('node_modules'))
            config.resolveLoader.modules.unshift(demo('node_modules'))
            config.module.rules.unshift({
                enforce: 'pre', test: /\.(vue|js|scss|css)$/,
                exclude: /node_modules/,
                use: [{ loader: demo('asset-base-loader.cjs'), options: { base } }]
            })
            config.node = { fs: 'empty', child_process: 'empty' }
        }
    }
}
