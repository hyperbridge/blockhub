import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import * as db from '../db'
import * as ChaosMonkey from '../framework/chaos-monkey'
import * as PeerService from '../framework/peer-service'
import * as DesktopBridge from '../framework/desktop-bridge'
import * as Ethereum from '../framework/ethereum'
import * as funding from '../modules/funding'
import * as news from '../modules/news'
import * as marketplace from '../modules/marketplace'
import * as network from '../modules/network'
import * as database from '../modules/database'
import * as cache from '../modules/cache'
import user from '@/modules/user'
import { saveDB } from './plugins'
import seed from '../db/seed'

Vue.use(Vuex);

// Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)
PeerService.config.RELAY = false
ChaosMonkey.config.ENABLED = false

/* Usage:
- mode1 - Navigate to http://localhost:8000/#/mode1
    - Best used to mode a well-behaved peer relayer
- mode2 - Navigate to http://localhost:8000/#/mode2
    - Best used to mode a non-Web3 enabled user can receive data from peer network
    - Clean database
    - No relaying, ie. no responding to peer data requests
- mode3 - Navigate to http://localhost:8000/#/mode3
    - Best used to mode fault-tolerance, ie. does this thing behave appropriately when problems occur
    - Permanent chaos monkey
*/
const CheckDevelopmentMode = () => {
    let hash = document.location.hash.replace('#/', '')

    if (hash.slice(0, 3) !== 'mode') return false

    if (hash === 'mode1') {
        PeerService.config.RELAY = true
    } else if (hash === 'mode2') {
        PeerService.config.RELAY = false
    } else if (hash === 'mode3') {
        ChaosMonkey.config.FORCED = true
    }

    window.location = '#/'

    return hash
}

const developmentMode = CheckDevelopmentMode()

const store = new Vuex.Store({
    plugins: [saveDB],
    modules: {
        cache: {
            namespaced: true,
            state: cache.state,
            getters: cache.getters,
            actions: cache.actions,
            mutations: cache.mutations
        },
        marketplace: {
            namespaced: true,
            state: marketplace.state,
            getters: marketplace.getters,
            actions: marketplace.actions,
            mutations: marketplace.mutations
        },
        database: {
            namespaced: true,
            state: database.state,
            getters: database.getters,
            actions: database.actions,
            mutations: database.mutations
        },
        funding: {
            namespaced: true,
            state: funding.state,
            getters: funding.getters,
            actions: funding.actions,
            mutations: funding.mutations
        },
        news: {
            namespaced: true,
            state: news.state,
            getters: news.getters,
            actions: news.actions,
            mutations: news.mutations
        },
        network: {
            namespaced: true,
            state: network.state,
            getters: network.getters,
            actions: network.actions,
            mutations: network.mutations
        },
        user
    }
});

export let initializer = () => {
    return new Promise((resolve, reject) => {
        let initialized = false

        PeerService.init()
        DesktopBridge.init()

        db.setInitCallback(async () => {
            // TODO: is this a race condition?
            store.dispatch('database/init')
            await store.dispatch('network/initEthereum')
            await store.dispatch('funding/initEthereum')
            await store.dispatch('marketplace/initEthereum')
        })

        store.dispatch('network/init')
        store.dispatch('marketplace/init')
        store.dispatch('funding/init')

        store.subscribe((mutation, state) => {
            console.info('[BlockHub] Mutation: ' + mutation.type, state)

            if (mutation.type === 'database/initialized') {
                if (ChaosMonkey.random()) {
                    // Hey devs, lets have some fun
                    // Bye bye data
                    // Things still workie?
                    store.dispatch('database/clean')
                }

                if (developmentMode === 'mode2') {
                    store.dispatch('database/clean')
                }
            } else if (mutation.type === 'database/updateState') {
                PeerService.setResolver((cmd) => {
                    if (cmd.key = 'pageContentHashRequest' || cmd.key === 'pageContentDataRequest') {
                        const computedState = {}

                        try {
                            if (router.matcher.match(cmd.data.path).matched.length && router.matcher.match(cmd.data.path).matched[0].components.default.computed) {
                                for (let x in router.matcher.match(cmd.data.path).matched[0].components.default.computed) {
                                    computedState[x] = router.matcher.match(cmd.data.path).matched[0].components.default.computed[x].bind(new function FakeStore() { this.$store = store; })()
                                }
                            }
                        } catch (e) {
                            console.log("Problem encountered computing vue state", e)
                        }

                        console.log('[BlockHub] Computed vue state', computedState)

                        return computedState
                    }

                    return {}
                })

                store.dispatch('marketplace/updateState')
                store.dispatch('funding/updateState')
                store.dispatch('network/updateState')

                if (!initialized) {
                    initialized = true

                    console.log('BlockHub initialized.')

                    setInterval(() => {
                        if (store.state.network.connection.auto) {
                            store.dispatch('network/checkInternetConnection')
                        }
                    }, 4000)

                    resolve()
                }
            }
        })

        const actions = [
            'add',
            'remove',
            'nothing'
        ]

        const chooseRandom = (list) => {
            if (Array.isArray(list)) {
                return list[Math.floor(Math.random() * list.length)]
            } else {
                const keys = Object.keys(list)
                const randomKey = keys[Math.floor(Math.random() * keys.length)]
                return list[randomKey]
            }
        }

        const removeRandom = (list) => {
            if (Array.isArray(list)) {
                list.splice(Math.floor(Math.random() * list.length), 1)
            }
            else {
                const keys = Object.keys(list)
                const randomKey = keys[Math.floor(Math.random() * keys.length)]
                delete list[randomKey]
            }

            return list
        }

        const randomAction = () => {
            return actions[Math.floor(Math.random() * actions.length)]
        }

        let simulatorInitialized = false

        const monitorSimulatorMode = () => {
            if (!store.state.marketplace.simulator_mode) {
                simulatorInitialized = false
                return setTimeout(monitorSimulatorMode, 1000)
            }

            // Start out with some decent amount of content
            if (!simulatorInitialized) {
                store.state.marketplace.trending_projects = seed.trending_projects
                store.state.marketplace.curator_reviews = seed.curator_reviews.slice(seed.curator_reviews.length / 2)
                store.state.marketplace.product_news = seed.product_news.slice(seed.product_news.length / 2)
                store.state.marketplace.products = seed.products.slice(seed.products.length / 2)
                store.state.marketplace.assets = seed.assets.slice(seed.assets.length / 2)
                store.state.marketplace.collections = seed.collections.slice(seed.collections.length / 2)
                store.state.funding.projects = seed.projects.slice(seed.projects.length / 2)

                // TODO: figure out unique constraint
                // db.marketplace.products.insert(store.state.marketplace.products)
                // db.marketplace.assets.insert(store.state.marketplace.assets)

                store.dispatch('marketplace/updateState')

                simulatorInitialized = true
            }

            const action = randomAction()
            const targets = [
                [store.state.network.account.notifications, seed.notifications],
                [store.state.network.account.wallets, seed.wallets],
                [store.state.marketplace.trending_projects, seed.trending_projects],
                [store.state.marketplace.curator_reviews, seed.curator_reviews],
                [store.state.marketplace.product_news, seed.product_news],
                [store.state.marketplace.assets, seed.assets],
                [store.state.marketplace.products, seed.products],
                [store.state.marketplace.collections, seed.collections],
                [store.state.funding.projects, seed.projects],
            ]

            if (action === 'add') {
                const target = chooseRandom(targets)

                if (target[1].length > 0) {
                    const random = chooseRandom(target[1])

                    if (Array.isArray(target[0]))
                        target[0].push(random)
                    else 
                        target[0][random ? random.id : random] = random
                }
            } else if (action === 'remove') {
                const target = chooseRandom(targets)

                removeRandom(target[0])
            }

            // TODO: figure out unique constraint
            // db.marketplace.products.insert(store.state.marketplace.products)
            // db.marketplace.assets.insert(store.state.marketplace.assets)

            // store.dispatch('marketplace/updateState') //, store.state.marketplace)

            setTimeout(monitorSimulatorMode, 100)
        }

        const monitorPathState = async () => {
            if (!store.state.network.connection.operator) {
                return
            }

            const path = document.location.hash.replace('#', '')

            console.log("[BlockHub] Checking peers for state changes on path", path)

            // Send request for latest hash of current pages data
            // TODO: compare timestamp
            const state = await PeerService.getPathState(path)

            console.log('[BlockHub] Received peer state', state)

            if (state) {
                store.dispatch('cache/updateScreenState', { path, state })
            }

            // Do it all over again
            await new Promise(r => setTimeout(r, 5000))

            monitorPathState()
        }

        monitorSimulatorMode()
        monitorPathState()

        if (!window.BlockHub)
            window.BlockHub = {}

        window.BlockHub.store = store
        window.BlockHub.db = db
        window.BlockHub.ChaosMonkey = ChaosMonkey
        window.BlockHub.Ethereum = Ethereum
        window.BlockHub.PeerService = PeerService
    })
}

export default store
