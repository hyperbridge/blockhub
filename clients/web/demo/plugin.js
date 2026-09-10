import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import feathersVuex from 'feathers-vuex'
import handlers from '../ui/services'
import seed from './seed-products.json'

const copy = value => JSON.parse(JSON.stringify(value))
const asset = path => `${process.env.PAGES_BASE}${path}`
const products = seed.map(product => {
    const result = copy(product)
    result.type = 'game'
    result.price = result.meta.price || 0
    result.description = result.meta.description || ''
    result.tags = (result.meta.developerTags || []).map((name, index) => ({ id: index + 1, name }))
    result.developerTags = result.meta.developerTags || []
    result.internalTags = ['Released', 'Featured', 'Frontpage', 'Top Seller', 'Upcoming'].map(name => ({ name }))
    result.meta.images = {
        icon: asset(`demo/games/${result.id}/header.jpg`),
        mediumTile: asset(`demo/games/${result.id}/header.jpg`),
        main: asset(`demo/games/${result.id}/header.jpg`),
        header: asset(`demo/games/${result.id}/preview.jpg`),
        preview: [asset(`demo/games/${result.id}/preview.jpg`)]
    }
    result.meta.description = result.meta.description || result.meta.content.replace(/<[^>]+>/g, ' ').slice(0, 220)
    result.meta.content = result.meta.content.replace(/src="\//g, `src="${process.env.PAGES_BASE}`)
    result.meta.ratings = result.meta.ratings || []
    result.meta.video = null
    result.meta.releases = []
    result.meta.plans = []
    result.meta.streams = null
    result.meta.reviews = []
    result.meta.community = { discussions: [] }
    result.meta.frequentlyTradedAssets = []
    result.reviews = []
    return result
})

const collections = [
    { id: 1, name: 'Adventure Awaits', meta: { author: 'BlockHub', assets: [], background: products[0].meta.images.preview[0] } },
    { id: 2, name: 'Indie Discoveries', meta: { author: 'BlockHub', assets: [], background: products[1].meta.images.preview[0] } },
    { id: 3, name: 'Action Essentials', meta: { author: 'BlockHub', assets: [], background: products[2].meta.images.preview[0] } }
]

function service(records) {
    return {
        async find({ query = {} } = {}) {
            let data = records.filter(item => {
                if (query.id != null && String(item.id) !== String(query.id)) return false
                if (query.type && item.type !== query.type) return false
                if (query['internalTags.name'] && !item.internalTags.some(tag => tag.name === query['internalTags.name'])) return false
                const search = query.$search || query.search || (query.name && query.name.$like)
                return !search || item.name.toLowerCase().includes(String(search).replace(/%/g, '').toLowerCase())
            })
            const total = data.length
            const skip = Number(query.$skip || 0)
            const limit = Number(query.$limit == null ? 25 : query.$limit)
            data = data.slice(skip, skip + limit)
            return copy({ total, skip, limit, data })
        },
        async get(id) {
            const item = records.find(record => String(record.id) === String(id))
            if (!item) throw new Error('This item is not included in the demo.')
            return copy(item)
        },
        async create() { throw new Error('This is a browsing demo. Changes are not saved.') },
        async update() { throw new Error('This is a browsing demo. Changes are not saved.') },
        async patch() { throw new Error('This is a browsing demo. Changes are not saved.') },
        async remove() { throw new Error('This is a browsing demo. Changes are not saved.') }
    }
}

export default ({ app, store }, inject) => {
    const api = feathers()
    const { service: register, FeathersVuex } = feathersVuex(api, { idField: 'id', enableEvents: false })
    Vue.use(FeathersVuex)
    for (const handler of handlers) {
        api.use(handler.path, service(handler.path === '/products' ? products : handler.path === '/collections' ? collections : []))
        register(handler.path, handler.config(store))(store)
    }
    store.registerModule('auth', { namespaced: true, state: { user: null, accessToken: null }, getters: { isAuthenticated: () => false } })
    inject('api', api)
    const access = permission => /(?:read|view|browse|list)$/.test(permission)
    inject('access', access)
    Vue.directive('access', { bind(el, binding) { el.hidden = !access(binding.value) } })
    inject('desktop', {
        on() { return () => {} },
        async updateState() { return { demo: true } },
        async sendCommand() { throw new Error('Desktop actions are unavailable in the browser demo.') }
    })
    inject('demo', { version: 'r1', productCount: products.length })
    const application = store.state.application
    application.activeBrand = 'blockhub'
    application.version = 'Demo r1'
    application.initialized = true
    application.desktopMode = false
    application.developerMode = false
    application.signedIn = false
    application.loading = false
    application.settings.client.cookiePolicyAccepted = true
    application.settings.client.autoplay = false
    application.connection = { auto: false, internet: true, datasource: true, operator: false, ethereum: false, status: { code: null, message: 'Local demo data' } }
    store.state.initialized = true
    store.commit('products/addItems', copy(products))
    store.commit('collections/addItems', copy(collections))
    for (const key of ['newReleases', 'featuredProducts', 'saleProducts', 'frontpageProducts', 'topSellingProducts', 'upcomingProducts']) {
        store.commit(`products/${key}`, copy(products))
    }
    app.router.beforeEach((to, from, next) => {
        // Account, payment and desktop controls have no service on GitHub Pages.
        if (/^\/(account|checkout|pay|wallet|business|token)(\/|$)/.test(to.path)) {
            window.alert('BlockHub UI demo: accounts, payments and desktop actions are disabled.')
            next(false)
        } else next()
    })
}
