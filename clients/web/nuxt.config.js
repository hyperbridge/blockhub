import path from 'path'
import dotenv from 'dotenv/config'
import autoprefixer from 'autoprefixer'
import sites from './ui/sites'

export default {
    server: {
        port: process.env.PORT,
        host: '0.0.0.0'
    },
    srcDir: 'ui/',
    dev: process.env.NODE_ENV !== 'production',
    head: {
        title: this.pageTitle || 'BlockHub',
        env: {
            version: process.env.npm_package_version,
            baseUrl: process.env.BASE_URL || `http://localhost:${process.env.PORT}`,
            isDevelopment: process.env.NODE_ENV !== 'production'
        },
        titleTemplate: '%s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui' },
            { hid: 'theme-color', name: 'theme-color', content: '#4DBA87' },
            // { hid: 'description', name: 'description', content: 'BlockHub is a next-generation decentralized digital distribution platform' },
            // { hid: 'keywords', name: 'keywords', content: 'blockhub, hyperbridge, blockchain, cryptocurrency, game, indie, developer' },

            { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
            { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
            { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },

            { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'BlockHub' },
            { hid: 'application-name', name: 'application-name', content: 'BlockHub' },
            { hid: 'msapplication-config', name: 'msapplication-config', content: '/images/icons/browserconfig.xml' },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:site', name: 'twitter:site', content: '@' },
            { hid: 'twitter:creator', name: 'twitter:creator', content: '@' },
            { hid: 'twitter:title', name: 'twitter:title', content: `Page title` },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Page description' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://full-public-path-to-image.jpg' },

            { hid: 'og:url', property: 'og:url', content: 'https://blockhub.gg' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: `BlockHub | Page title` },
            { hid: 'og:description', property: 'og:description', content: 'BlockHub' },
            { hid: 'og:image', property: 'og:image', content: 'https://blockhub.gg/static/img/logo.png' },
            { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://blockhub.gg/static/img/logo.png' },
            { hid: 'og:image:width', property: 'og:image:width', content: '470' },
            { hid: 'og:image:height', property: 'og:image:height', content: '246' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'BlockHub' }
        ],
        link: [
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600,700' },
            { type: 'application/json+oembed', href: 'https://full-url/oembed.json' },
            { rel: 'icon', type: 'image/png', href: '/static/img/icons/favicon-32x32.png' }
        ],
        script: [
            { src: 'https://js.stripe.com/v3/', defer: true }
        ]
    },
    css: [],
    plugins: [
        { src: '~/plugins/persist' },
        { src: '~/plugins/auth', ssr: false },
        { src: '~/plugins/components' },
        { src: '~/plugins/filters' },
        { src: '~/plugins/directives' },
        { src: '~/plugins/feathers' },
        { src: '~/plugins/permissions' },
        { src: '~/plugins/vue-i18n' },
        { src: '~/plugins/vue-currency' },
        { src: '~/plugins/vue-analytics', ssr: false },
        { src: '~/plugins/vue-awesome-swiper' },
        { src: '~/plugins/vue-country-flag', ssr: false },
        { src: '~/plugins/vue-snotify', ssr: false },
        { src: '~/plugins/vue-numerals', ssr: false },
        { src: '~/plugins/vue-popover', ssr: false },
        { src: '~/plugins/vue-draggable', ssr: false },
        { src: '~/plugins/vue-emoji-mart', ssr: false },
        { src: '~/plugins/vue-inputmask', ssr: false },
        { src: '~/plugins/vue2-editor', ssr: false },
        { src: '~/plugins/vue-upload-component', ssr: false },
        { src: '~/plugins/vue-datepicker', ssr: false },
        { src: '~/plugins/autosize', ssr: false },
        { src: '~/plugins/jquery', ssr: false },
        { src: '~/plugins/summernote', ssr: false },
        { src: '~/plugins/moment', ssr: false },
        { src: '~/plugins/blockhub' }
    ],
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/moment',
        '@nuxtjs/sitemap',
        'cookie-universal-nuxt',
        '@nuxtjs/sentry'
        // './modules/init'
    ],
    router: {
        extendRoutes(routes) {
            routes.push({
                path: '*',
                component: path.resolve(__dirname, 'ui/pages/not-found/index.vue')
            })

            const mapHostToRouteKey = {
                'default': 'blockhub',
                'localhost': 'blockhub',
                'blockhub.gg': 'blockhub', // rebrand game platform
                'thor.gg': 'thor', // rebrand game platform
                'gamedelta.net': 'thor', // rebrand game platform
                'realmofdiablo.com': 'realmofdiablo', // defaults to realm screen with Diablo realm - game series landing
                'skyward.gg': 'skyward', // defaults to realm screen with Skyward realm - game studio landing
                'hackatron.rocks': 'hackatron', // defaults to play screen for Hackatron game - game landing
                'gamemask.io': 'gamemask', // defaults to token wallet functionality
                'gethbx.com': 'gethbx', // defaults to airdrop claim screen
                'hyperbridge.xyz': 'hyperbridge', // defaults to profile screen with profile ID
                'dataforce.io': 'dataforce', // defaults to data network info
                'readyblock.one': 'readyblockone', // other
                'in5mins.com': 'in5mins', // other
                'crypto.in5mins.com': 'in5mins', // other
                'gaming.in5mins.com': 'in5mins', // other
                'health.in5mins.com': 'in5mins', // other
                'shopping.in5mins.com': 'in5mins', // other
                'tech.in5mins.com': 'in5mins', // other
                'bitcoin-btc.review': 'cryptoreviews', // other
                'ethereum-eth.review': 'cryptoreviews', // other
                'ripple-xrp.review': 'cryptoreviews', // other
                'litecoin-ltc.review': 'cryptoreviews', // other
                'aelf-elf.review': 'cryptoreviews', // other
                'aion-token.review': 'cryptoreviews', // other
                'coding.coach': 'codingcoach', // other
                'tokentaku.com': 'tokentaku', // other
                'brickbrotherhood.com': 'brickbrotherhood' // other
                // TODO: if not found, render realm screen and assume its in realm DB with a host
            }

            // Sanitize the host
            const uri = process.client ? window.location.hostname : 'blockhub.gg'
            const host = uri.replace('www.', '').replace('.local', '').split(':')[0]
            const routeKey = mapHostToRouteKey[host]

            console.log(`Matched site: ${host}`)

            const activeSite = sites[routeKey]

            activeSite.routes.forEach(route => {
                routes.push(route)
            })
        }
    },
    sitemap: {
        hostname: 'https://blockhub.gg',
        gzip: true,
        exclude: [
            '/business/**'
        ],
        routes: [
            '/about',
            {
                url: '/about',
                changefreq: 'monthly',
                priority: 1,
                lastmodISO: '2018-06-30T13:30:00.000Z'
            }
        ]
    },
    build: {
        extractCSS: true,
        postcss: {
            preset: {
                autoprefixer
            }
        },
        extend(config, { isDev, isClient }) {
            if (isDev) {
                config.output.globalObject = 'this'
                if (isClient) config.devtool = '#source-map'
            }

            config.node = {
                fs: 'empty',
                child_process: 'empty'
            }
        }
    },
    sentry: {
        dsn: 'https://2728639f44194aea9c5ba79abfe34c42@sentry.io/1489980',
        disabled: process.env.NODE_ENV !== 'production',
        config: {
            environment: process.env.NODE_ENV
        }
    }
}
