import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import * as ChaosMonkey from '../framework/chaos-monkey'
import * as PeerService from '../framework/peer-service'
import funding from '../modules/funding'
import news from '../modules/news'
import * as marketplace from '../modules/marketplace'
import * as network from '../modules/network'
import * as database from '../modules/database'
import * as cache from '../modules/cache'

Vue.use(Vuex)

// Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)
PeerService.config.RELAY = false
ChaosMonkey.config.ENABLED = false

/* Usage:
    - dev1 - Navigate to http://localhost:8000/template.html#/dev1
        - Best used to test a well-behaved peer relayer
    - dev2 - Navigate to http://localhost:8000/template.html#/dev2
        - Best used to test a non-Web3 enabled user can receive data from peer network
        - Clean database
        - No relaying, ie. no responding to peer data requests
    - dev3 - Navigate to http://localhost:8000/template.html#/dev3
        - Best used to test fault-tolerance, ie. does this thing behave appropriately when problems occur
        - Permanent chaos monkey
*/
const CheckDevelopmentMode = () => {
    let hash = document.location.hash.replace('#/', '')

    if (hash.slice(0, 3) !== 'dev') return false

    if (hash === 'dev1') {
        PeerService.config.RELAY = true
    } else if (hash === 'dev2') {
        PeerService.config.RELAY = false
    } else if (hash === 'dev3') {
        ChaosMonkey.config.FORCED = true
    }

    window.location = '#/store'

    return hash
}

const developmentMode = CheckDevelopmentMode()


let initializer = (store) => {
    store.dispatch('database/init')
    store.dispatch('marketplace/init')

    store.subscribe((mutation, state) => {
        console.log('[BlockHub] Mutation', mutation, state)
        
        if (mutation.type === 'database/initialized') {
            if (ChaosMonkey.random()) {
                // Hey devs, lets have some fun
                // Bye bye data
                // Things still workie?
                //store.dispatch('database/clean')
            }

            if (developmentMode === 'dev2') {
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
        }
    })

    const monitorData = async () => {
        const path = document.location.hash.replace('#', '')

        console.log("[BlockHub] Checking peers for state changes on path", path)

        // Send request for latest hash of current pages data
        // TODO: compare timestamp
        const state = await PeerService.getPathState(path)

        console.log('[BlockHub] Received peer state', state)

        if (state) {
            store.dispatch('cache/updateScreenState', {path, state})
        }

        // Do it all over again
        await new Promise(r => setTimeout(r, 5000))

        monitorData()
    }

    monitorData()

    window.BlockStore = store
}

const store = new Vuex.Store({
    plugins: [initializer],
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
        }
    }
})


// marketplace.init(() => {
//     console.log('[BlockHub] Marketplace initialized. Updating store state.')

//     store.state.marketplace = marketplace.state
// })


export default store