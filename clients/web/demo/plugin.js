import Vue from 'vue'
import feathers from '@feathersjs/feathers'
import feathersVuex from 'feathers-vuex'
import handlers from '../ui/services'
import seed from './seed-products.json'
import { createWorld } from './world'
import { serviceModels } from './service-models'

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
    result.images = result.meta.images
    result.languageSupport = result.meta.languageSupport || []
    result.systemRequirements = result.meta.systemRequirements || []
    result.rating = { overall: 4.5 }
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

const world = createWorld(products)

function service(records) {
    return {
        async find({ query = {} } = {}) {
            let data = records.filter(item => {
                if (query.id != null && String(item.id) !== String(query.id)) return false
                if (query.type && item.type !== query.type) return false
                if (query['internalTags.name'] && !(item.internalTags || []).some(tag => tag.name === query['internalTags.name'])) return false
                const search = query.$search || query.search || (query.name && (query.name.$like || query.name.$eq))
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
        api.use(handler.path, service(world[handler.path.slice(1)] || []))
        register(handler.path, serviceModels(handler.path.slice(1), handler.config(store), world))(store)
    }
    store.registerModule('auth', { namespaced: true, state: { user: copy(world.profiles[0]), accessToken: null }, getters: { isAuthenticated: () => false } })
    inject('api', api)
    const access = permission => !String(permission).startsWith('admin')
    inject('access', access)
    Vue.directive('access', { bind(el, binding) { el.hidden = !access(binding.value) } })
    inject('desktop', {
        on() { return () => {} },
        async updateState() { return { demo: true } },
        async sendCommand() { throw new Error('Desktop actions are unavailable in the browser demo.') }
    })
    inject('demo', {
        version: 'r8', productCount: products.length,
        world,
        signIn() {
            store.state.application.signedIn = true
            store.state.auth.user = copy(world.profiles[0])
        },
        signOut() {
            store.state.application.signedIn = false
            store.state.auth.user = copy(world.profiles[0])
        }
    })
    const application = store.state.application
    application.activeBrand = 'blockhub'
    application.version = 'Demo r8'
    application.initialized = true
    application.desktopMode = false
    application.developerMode = false
    application.signedIn = false
    application.loading = false
    application.settings.client.cookiePolicyAccepted = true
    application.settings.client.autoplay = false
    application.connection = { auto: false, internet: true, datasource: true, operator: false, ethereum: false, status: { code: null, message: 'Local demo data' } }
    application.activeProfile = copy(world.profiles[0])
    application.wallets = { 1: { id: 1, name: 'Sample Bitcoin Wallet', shortName: 'BTC', count: '0.00', walletNumber: 'Demo wallet — no funds or transfers', preferredSwitcher: true, history: [] } }
    application.account = { ...application.account, firstName: 'Sample', lastName: 'Player', email: 'player@example.com', birthday: '1990-01-01', profiles: copy(world.profiles), wallets: [], notifications: [] }
    application.account.darklaunchFlags = []
    application.darklaunchFlags = [{ code: 'community', description: 'Community screens' }, { code: 'marketplace', description: 'Marketplace screens' }]
    application.updates = world.updates.map(update => ({ title: update.title, description: 'From the original BlockHub preview.', content: '<p>Game catalog, collection, and community interface improvements.</p>' }))
    store.state.marketplace.products = Object.fromEntries(products.map(product => [product.id, product]))
    store.state.funding.projects = Object.fromEntries(world.projects.map(project => [project.id, project]))
    store.state.funding.defaultProject = copy(world.projects[0])
    store.state.funding.defaultModel = { id: null, name: 'New Community', tags: [], meta: { description: '', images: {} } }
    store.state.marketplace.help.articles = Object.fromEntries(world.discussions.map(discussion => [discussion.id, { id: discussion.id, title: discussion.name, slug: discussion.slug, content: discussion.value }]))
    Object.values(store.state.marketplace.help.topics).forEach(topic => { topic.articles = [1, 2, 3] })
    store.state.initialized = true
    for (const handler of handlers) {
        const name = handler.path.slice(1)
        if (world[name]) store.commit(`${name}/addItems`, copy(world[name]))
    }
    for (const key of ['newReleases', 'featuredProducts', 'saleProducts', 'frontpageProducts', 'topSellingProducts', 'upcomingProducts']) {
        store.commit(`products/${key}`, copy(products))
    }
    app.router.afterEach(() => { application.activeModal = null })
}
