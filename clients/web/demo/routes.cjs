const path = require('path')

module.exports = function configureRoutes(routes) {
    const excluded = /^\/(admin|tests|meta|monitor|go|account\/verification-callback)(\/|$)/
    routes.splice(0, routes.length, ...routes.filter(route => !excluded.test(route.path)))
    routes.forEach(route => { route.path = route.path.replace(/\?/g, ''); route.props = true })
    const transaction = routes.find(route => route.path === '/marketplace/marketplace-trade-transaction')
    if (transaction) transaction.redirect = '/marketplace/trade/1/offer'

    // These original pages render their own tab components and pass their loaded record.
    for (const kind of ['project', 'idea']) {
        const parent = routes.find(route => route.path === `/${kind}/:id`)
        for (const route of routes.filter(route => route.path.startsWith(`/${kind}/:id/`))) {
            route.component = parent.component
            route.meta = { ...route.meta, demoSection: route.path.split('/')[3] }
        }
    }

    // Other original page shells use router-view, so restore their child-route hierarchy.
    const groups = [
        ['/marketplace/asset/:assetId', 'offers'],
        ['/marketplace/trade/:id', 'offer'],
        ['/marketplace/marketplace-inventory', 'main'],
        ['/marketplace/trade', 'home'],
        ['/marketplace', 'home']
    ]
    for (const [prefix, defaultChild] of groups) {
        const parent = routes.find(route => route.path === prefix)
        if (!parent) continue
        const children = routes.filter(route => route.path.startsWith(`${prefix}/`))
        routes.splice(0, routes.length, ...routes.filter(route => !children.includes(route)))
        children.forEach(route => { route.path = route.path.slice(prefix.length + 1); route.props = true })
        parent.props = true
        parent.children = children
        const initial = children.find(route => route.path === defaultChild)
        if (initial) parent.children.push({ ...initial, path: '', name: `${parent.name}-demo-index` })
    }

    for (const route of routes) {
        if (['/curators', '/contacts'].includes(route.path)) route.component = path.resolve(__dirname, 'pages/people-preview.vue')
        if (route.path === '/transaction-overview') route.redirect = '/marketplace/trade/history'
        if (route.path === '/login') route.component = path.resolve(__dirname, '../ui/pages/account/signin/index.vue')
        if (route.path === '/profiles') route.component = path.resolve(__dirname, '../ui/pages/account/profiles/index.vue')
        if (route.path === '/curator/:id') route.component = path.resolve(__dirname, '../ui/pages/profile/_id/index.vue')
        if (route.path === '/settings/debug') route.component = path.resolve(__dirname, '../ui/pages/settings/activity/index.vue')
        if (route.path === '/store/checkout') route.component = path.resolve(__dirname, 'pages/checkout-preview.vue')
        if (route.path === '/republic/citizenship') route.redirect = '/profiles'
        if (route.path === '/republic/district') route.redirect = '/communities'
        if (route.path === '/sitemap') route.component = path.resolve(__dirname, 'pages/route-directory.vue')
        if (route.path === '/post/:id') route.component = path.resolve(__dirname, 'pages/news-article.vue')
        if (/^\/profile\/:id\/(assets|contacts|bounties|projects)$/.test(route.path)) route.component = path.resolve(__dirname, 'pages/profile-items.vue')
        if (route.path === '/chat') route.component = path.resolve(__dirname, '../ui/pages/community/chat/index.vue')
    }
    routes.push({ path: '/download/desktop/:platform', redirect: to => `/download?platform=${to.params.platform}` })
    routes.push({ path: '*', redirect: '/sitemap' })
}
