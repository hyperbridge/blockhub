import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)


const sites = {
    'default': { routes: require('../sites/blockhub/routes').default },
    'localhost': { routes: require('../sites/blockhub/routes').default },
    'blockhub.gg': { routes: require('../sites/blockhub/routes').default }, // rebrand game platform
    'thor.gg': { routes: require('../sites/thor/routes').default }, // rebrand game platform
    'gamedelta.net': { routes: require('../sites/thor/routes').default }, // rebrand game platform
    'realmofdiablo.com': { routes: require('../sites/realmofdiablo/routes').default }, // defaults to realm screen with Diablo realm - game series landing
    'skyward.gg': { routes: require('../sites/skyward/routes').default }, // defaults to realm screen with Skyward realm - game studio landing
    'hackatron.rocks': { routes: require('../sites/hackatron/routes').default }, // defaults to play screen for Hackatron game - game landing
    'gamemask.io': { routes: require('../sites/gamemask/routes').default }, // defaults to token wallet functionality
    'gethbx.com': { routes: require('../sites/gethbx/routes').default }, // defaults to airdrop claim screen
    'hyperbridge.xyz': { routes: require('../sites/hyperbridge/routes').default }, // defaults to profile screen with profile ID
    'dataforce.io': { routes: require('../sites/dataforce/routes').default }, // defaults to data network info
    'readyblock.one': { routes: require('../sites/readyblockone/routes').default }, // other
    'in5mins.com': { routes: require('../sites/in5mins/routes').default }, // other
    'crypto.in5mins.com': { routes: require('../sites/in5mins/routes').default }, // other
    'gaming.in5mins.com': { routes: require('../sites/in5mins/routes').default }, // other
    'health.in5mins.com': { routes: require('../sites/in5mins/routes').default }, // other
    'shopping.in5mins.com': { routes: require('../sites/in5mins/routes').default }, // other
    'tech.in5mins.com': { routes: require('../sites/in5mins/routes').default }, // other
    'bitcoin-btc.review': { routes: require('../sites/cryptoreviews/routes').default }, // other
    'ethereum-eth.review': { routes: require('../sites/cryptoreviews/routes').default }, // other
    'ripple-xrp.review': { routes: require('../sites/cryptoreviews/routes').default }, // other
    'litecoin-ltc.review': { routes: require('../sites/cryptoreviews/routes').default }, // other
    'aelf-elf.review': { routes: require('../sites/cryptoreviews/routes').default }, // other
    'aion-token.review': { routes: require('../sites/cryptoreviews/routes').default }, // other
    'coding.coach': { routes: require('../sites/codingcoach/routes').default }, // other
    'yoranna.com': { routes: require('../sites/yoranna/routes').default }, // other
    'tokentaku.com': { routes: require('../sites/tokentaku/routes').default }, // other
    'brickbrotherhood.com': { routes: require('../sites/brickbrotherhood/routes').default }, // other
    // TODO: if not found, render realm screen and assume its in realm DB with a host
}


const getRoutes = (uri) => {
    // Sanitize the host
    const host = uri.replace('www.', '').replace('.local', '').split(':')[0]
    const config = (host in sites) ? sites[host] : sites['default']

    console.log('Matched site: ' + host)

    return config.routes
}

const getRouterMode = (host) => {
    if (host.indexOf('staging') !== -1
    || host.indexOf('preview') !== -1
    || host.indexOf('beta') !== -1)
        return 'hash'

    return 'history'
}

const router = new Router({
    mode: getRouterMode(window.location.hostname),
    fallback: false,
    //mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
        if (
            (to.name === 'Marketplace Asset Offers' && from.name === 'Marketplace Asset Offer') ||
            (to.name === 'Marketplace Asset Offer' && from.name === 'Marketplace Asset Offers')
        ) return savedPosition

        if (to.name === 'Search' && from.name === 'Search') return savedPosition

        return ({ y: 0 })
    },
    linkActiveClass: 'is-active',
    routes: getRoutes(window.location.hostname)
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    $('body').removeClass('screen-loading')

    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
})

export const Auth = {
    loggedIn() {
        return store.state.application.signedIn
    },
    accessGate(permission = false) {
        const privileges = store.getters['application/privileges']
        if (!permission) {
            return true
        }
        return !!privileges && !!privileges.find(p => {
            return p === permission
        })
    }
}


router.beforeEach((to, from, next) => {
    $('body').addClass('screen-loading')

    document.title = to.name + ' | BlockHub'

    if (Auth.loggedIn() && to.meta.auth === false) {
        next({
            path: '/',
            query: { redirect: to.fullPath }
        })
        return
    }

    if (!Auth.loggedIn() && !!to.meta.auth) {
        store.state.application.signedIn = false

        next({
            path: '/account/signin',
            query: { redirect: to.fullPath }
        })
        return
    }

    // if (!Auth.accessGate(to.meta.permission)) {
    //     next('/')
    //     throw new Error("Oops! You don't seem to have access to that page.")
    // }

    next()
})

// router.beforeEach((to, from, next) => {
//   get_data_from_server(to.fullPath).then(component => {
//     if (to.matched.length === 0) {
//       // the target route doesn't exist yet
//       router.addRoutes({ path: to.path, component: component })
//       next(to.fullPath)
//       return
//     } else {
//       // the route and component are known and data is available
//       next()
//     }
//   })
// })

export default router
