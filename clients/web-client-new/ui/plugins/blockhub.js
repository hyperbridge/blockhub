import Vue from 'vue'
import * as DB from '../db'
import * as ChaosMonkey from '../framework/chaos-monkey'
import * as ReputationEngine from '../framework/reputation-engine'
import * as Bridge from '../framework/desktop-bridge'
import seed from '../db/seed'

export default ({ app, store }) => {
    Vue.config.productionTip = false

    // Set blockhub instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.blockhub = {}

    app.blockhub.getMode = () => {
        const { hostname } = window.location
        const hash = document.location.hash.replace('#/', '')

        if (hash.slice(0, 5) === 'mode=') {
            return hash.replace('mode=', '')
        }

        if (hostname === 'blockhub.gg' || hostname === 'gamedelta.net') {
            return 'production'
        } else if (hostname === 'staging.blockhub.gg' || hostname === 'staging.gamedelta.net') {
            return 'staging'
        } else if (hostname === 'beta.blockhub.gg' || hostname === 'beta.gamedelta.net') {
            return 'beta'
        } else if (hostname === 'preview.blockhub.gg' || hostname === 'preview.gamedelta.net') {
            return 'preview'
        }
        return 'local'
    }

    app.blockhub.bridge = Bridge
    app.blockhub.chaosMonkey = ChaosMonkey
    app.blockhub.reputationEngine = ReputationEngine
    app.blockhub.db = DB
    app.blockhub.store = store
    app.blockhub.seed = seed
    // app.blockhub.router = router // doesnt work?

    app.blockhub.importStarterData = () => {
        console.log('[BlockHub] Import starter data')

        DB.marketplace.config.data[0].realms = seed.realms
        DB.marketplace.assets.data = seed.assets
        DB.marketplace.config.data[0].collections = seed.collections
        DB.marketplace.config.data[0].gameSeries = seed.gameSeries
        DB.marketplace.products.data = seed.products
        DB.marketplace.config.data[0].ideas = seed.ideas
        DB.funding.projects.data = seed.projects

        store.dispatch('marketplace/updateState')
        store.dispatch('funding/updateState')
        store.dispatch('application/updateState')
    }

    app.blockhub.importSeedData = () => {
        console.log('[BlockHub] Import seed data')
        // We dont want to mess with the important signed in account data
        // if (!DB.application.config.data[0].account.address) {
        //     DB.application.config.data[0].account.wallets = seed.wallets
        //     DB.application.config.data[0].account.profiles = seed.profiles
        //     DB.application.config.data[0].activeProfile = {
        //         id: seed.profiles[0].id
        //     }
        // }

        DB.application.config.data[0].account.notifications = seed.notifications
        DB.application.config.data[0].updates = seed.updates
        DB.marketplace.config.data[0].curatorReviews = seed.curatorReviews
        DB.marketplace.config.data[0].realms = seed.realms
        DB.marketplace.config.data[0].collections = seed.collections
        DB.marketplace.config.data[0].gameSeries = seed.gameSeries
        DB.marketplace.config.data[0].bounties = seed.bounties
        DB.marketplace.config.data[0].ideas = seed.ideas

        DB.marketplace.assets.data = seed.assets
        DB.marketplace.products.data = seed.products
        DB.marketplace.posts.data = seed.posts

        DB.funding.projects.data = seed.projects

        store.dispatch('marketplace/updateState')
        store.dispatch('funding/updateState')
        store.dispatch('application/updateState')
    }

    app.blockhub.resetSeedData = () => {
        // We dont want to mess with the important signed in account data
        // if (!DB.application.config.data[0].account.address) {
        //     DB.application.config.data[0].account.wallets = []
        //     DB.application.config.data[0].account.profiles = []
        //     DB.application.config.data[0].activeProfile = { id: null }
        // }

        DB.application.config.data[0].account.notifications = []
        DB.marketplace.config.data[0].updates = []
        DB.marketplace.config.data[0].curatorReviews = []
        DB.marketplace.config.data[0].productNews = []
        DB.marketplace.config.data[0].realms = []
        DB.marketplace.config.data[0].collections = []
        DB.marketplace.config.data[0].gameSeries = []
        DB.marketplace.config.data[0].bounties = []
        DB.marketplace.config.data[0].ideas = []

        DB.marketplace.products.data = []
        DB.marketplace.assets.data = []
        DB.marketplace.posts.data = []

        DB.funding.config.data[0].trendingProjects = []
        DB.funding.projects.data = []

        store.dispatch('marketplace/updateState')
        store.dispatch('funding/updateState')
        store.dispatch('application/updateState')
    }

    const updateContainer = (container, item) => {
        if (Array.isArray(item)) {
            for (const i in item) { // eslint-disable-line guard-for-in
                item[i].$loki = undefined
            }
        } else {
            item.$loki = undefined
        }

        container.insert(item)
    }

    app.blockhub.saveDatabase = () => {
        DB.clean()

        updateContainer(DB.application.config, store.state.application)
        updateContainer(DB.marketplace.products, Object.values(store.state.marketplace.products))
        updateContainer(DB.marketplace.assets, Object.values(store.state.marketplace.assets))
        updateContainer(DB.marketplace.config, store.state.marketplace)
        updateContainer(DB.funding.config, store.state.funding)
        updateContainer(DB.funding.projects, Object.values(store.state.funding.projects))

        DB.save()
    }

    app.blockhub.api = {
        service: serviceKey => {
            console.log(`[BlockHub] Service: ${serviceKey}`)

            if (app.blockhub.bridge.isConnected()) { // && app.blockhub.bridge.canFulfillRequest(endpoint
                return {
                    find: params => {
                        app.blockhub.bridge.sendCommand('service', {
                            serviceKey,
                            type: 'find',
                            params
                        })
                    }
                }
            }
            return app.feathers.service(serviceKey)
        }
    }

    const plugin = {
        install(Vue, options) {
            Vue.mixin({
                created() {
                    // access to blockhub anywhere
                    this.$blockhub = app.blockhub
                    this.$desktop = app.blockhub.bridge
                    this.$db = app.blockhub.db
                    this.$api = app.blockhub.api
                }
            })
        }
    }

    Vue.use(plugin)

    if (process.client) window.BlockHub = app.blockhub

    DB.setInitCallback(async () => {
        console.log('DB init callback')
        // TODO: is this a race condition?
        // TODO: PeerService.init()

        ReputationEngine.init(store) // , router)
        Bridge.init(store) // , router)

        store.dispatch('database/init')
        store.dispatch('application/init')
        store.dispatch('marketplace/init')
        store.dispatch('funding/init')

        app.blockhub.environmentMode = store.state.application.environmentMode
        console.log(`Environment mode: ${store.state.application.environmentMode}`)

        if (store.state.application.environmentMode === 'preview' ||
            store.state.application.environmentMode === 'beta' ||
            store.state.application.environmentMode === 'production') {
            setTimeout(() => {
                app.blockhub.importStarterData()
            }, 1000)
        }

        if (store.state.application.environmentMode === 'preview') {
            store.state.application.desktopMode = true
            store.state.application.signedIn = true

            // ENABLE ALL DARKLAUNCHES
            store.state.application.darklaunchOverride = true

            // ENABLE SIMULATOR MODE
            // store.state.application.simulatorMode = true
        }

        try { // TODO: we dont need this do we?
            store.dispatch('application/initEthereum')
            store.dispatch('funding/initEthereum')
            store.dispatch('marketplace/initEthereum')
        } catch (err) {
            console.log(err)
        }

        // initSubscribers()
        // monitorSimulatorMode()
        // monitorPathState()

        ReputationEngine.monitor()

        console.log('BlockHub initialized.')

        setInterval(() => {
            if (store.state.application.connection.auto) {
                store.dispatch('application/checkInternetConnection')
            }
        }, 4000)
    })

    DB.init()
}
