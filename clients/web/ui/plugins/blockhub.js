import Vue from 'vue'
import * as DB from '../db'
import * as ChaosMonkey from '../framework/chaos-monkey'
import * as ReputationEngine from '../framework/reputation-engine'
import * as Bridge from '../framework/desktop-bridge'
import seed from '../db/seed'

export default ({ app, store }) => {
    Vue.config.productionTip = false

    const initSubscribers = () => {
        store.subscribeAction((action, state) => {
            console.info(`[BlockHub] Store Action: ${action.type}`) // , action.payload)
        })

        store.subscribe((mutation, state) => {
            if (mutation.type !== 'application/setInternetConnection') {
                console.info(`[BlockHub] Store Mutation: ${mutation.type}`) // , mutation.payload)
            }

            if (mutation.type === 'database/updateState') {
                // TODO: hook up to desktop
                // PeerService.setResolver((cmd) => {
                //     if (cmd.key = 'pageContentHashRequest' || cmd.key === 'pageContentDataRequest') {
                //         const computedState = {}

                //         try {
                //             if (router.matcher.match(cmd.data.path).matched.length && router.matcher.match(cmd.data.path).matched[0].components.default.computed) {
                //                 for (let x in router.matcher.match(cmd.data.path).matched[0].components.default.computed) {
                //                     computedState[x] = router.matcher.match(cmd.data.path).matched[0].components.default.computed[x].bind(new function FakeStore() { this.$store = store; })()
                //                 }
                //             }
                //         } catch (e) {
                //             console.log("Problem encountered computing vue state", e)
                //         }

                //         console.log('[BlockHub] Computed vue state', computedState)

                //         return computedState
                //     }

                //     return {}
                // })

                // store.dispatch('marketplace/updateState')
                // store.dispatch('funding/updateState')
                // store.dispatch('application/updateState')
            }
        })
    }

    initSubscribers()


    // Set blockhub instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    const blockhub = {}

    blockhub.getMode = () => {
        const { hostname } = window.location
        const hash = document.location.hash.replace('#/', '')

        if (hash.slice(0, 5) === 'mode=') {
            return hash.replace('mode=', '')
        }

        if (hostname === 'localhost' || hostname.indexOf('.local') !== -1) {
            return 'local'
        } else if (hostname.startsWith('staging')) {
            return 'staging'
        } else if (hostname.startsWith('beta')) {
            return 'beta'
        } else if (hostname.startsWith('preview')) {
            return 'preview'
        }

        return 'production'
    }

    blockhub.bridge = Bridge
    blockhub.chaosMonkey = ChaosMonkey
    blockhub.reputationEngine = ReputationEngine
    blockhub.db = DB
    blockhub.store = store
    blockhub.seed = seed
    // blockhub.router = router // doesnt work?

    blockhub.importStarterData = () => {
        console.log('[BlockHub] Import starter data')

        store.state.marketplace.realms = seed.realms
        store.state.marketplace.assets = seed.assets
        store.state.marketplace.collections = seed.collections
        store.state.marketplace.gameSeries = seed.gameSeries
        store.state.marketplace.products = seed.products
        store.state.marketplace.ideas = seed.ideas
        store.state.funding.projects = seed.projects

        store.dispatch('marketplace/updateState')
        store.dispatch('funding/updateState')
        store.dispatch('application/updateState')
    }

    blockhub.importSeedData = () => {
        console.log('[BlockHub] Import seed data')
        // We dont want to mess with the important signed in account data
        // if (!DB.application.config.data[0].account.address) {
        //     DB.application.config.data[0].account.wallets = seed.wallets
        //     DB.application.config.data[0].account.profiles = seed.profiles
        //     DB.application.config.data[0].activeProfile = {
        //         id: seed.profiles[0].id
        //     }
        // }

        store.state.application.account.notifications = seed.notifications
        store.state.application.updates = seed.updates
        store.state.marketplace.curatorReviews = seed.curatorReviews
        store.state.marketplace.realms = seed.realms
        store.state.marketplace.collections = seed.collections
        store.state.marketplace.gameSeries = seed.gameSeries
        store.state.marketplace.bounties = seed.bounties
        store.state.marketplace.ideas = seed.ideas

        store.state.marketplace.assets = seed.assets
        store.state.marketplace.products = seed.products
        store.state.marketplace.posts = seed.posts

        store.state.funding.projects = seed.projects

        store.dispatch('marketplace/updateState')
        store.dispatch('funding/updateState')
        store.dispatch('application/updateState')
    }

    blockhub.resetSeedData = () => {
        // We dont want to mess with the important signed in account data
        // if (!store.state.application.account.address) {
        //     store.state.application.account.wallets = []
        //     store.state.application.account.profiles = []
        //     store.state.application.activeProfile = { id: null }
        // }

        store.state.application.account.notifications = []
        store.state.marketplace.updates = []
        store.state.marketplace.curatorReviews = []
        store.state.marketplace.productNews = []
        store.state.marketplace.realms = []
        store.state.marketplace.collections = []
        store.state.marketplace.gameSeries = []
        store.state.marketplace.bounties = []
        store.state.marketplace.ideas = []

        store.state.marketplace.products = []
        store.state.marketplace.assets = []
        store.state.marketplace.posts = []

        store.state.funding.trendingProjects = []
        store.state.funding.projects = []

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

    blockhub.saveDatabase = () => {
        DB.clean()

        updateContainer(DB.store, store.state)

        DB.save()
    }

    blockhub.api = {
        service: serviceKey => {
            console.log(`[BlockHub] Service: ${serviceKey}`)

            if (blockhub.bridge.isConnected()) { // && blockhub.bridge.canFulfillRequest(endpoint
                return {
                    find: params => {
                        blockhub.bridge.sendCommand('service', {
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
                    this.$blockhub = blockhub
                    this.$desktop = blockhub.bridge
                    this.$db = blockhub.db
                    this.$api = blockhub.api
                }
            })
        }
    }

    Vue.use(plugin)

    app.$blockhub = blockhub

    if (process.client) window.BlockHub = blockhub

    DB.setInitCallback(async () => {
        console.log('DB init callback')
        // TODO: is this a race condition?
        // TODO: PeerService.init()

        blockhub.reputationEngine.init(store) // , router)
        blockhub.bridge.init(store) // , router)

        store.dispatch('init', DB.store.data[0])
        store.dispatch('database/init')
        store.dispatch('application/init')
        store.dispatch('marketplace/init')
        store.dispatch('funding/init')

        console.log(`Environment mode: ${store.state.application.environmentMode}`)

        if (store.state.application.environmentMode === 'preview' ||
            store.state.application.environmentMode === 'beta' ||
            store.state.application.environmentMode === 'production') {
            setTimeout(() => {
                blockhub.importStarterData()
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
