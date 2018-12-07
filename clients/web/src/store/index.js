import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../api/feathers-client'

import router from '../router'
import * as DB from '../db'
import * as ChaosMonkey from '../framework/chaos-monkey'
import * as ReputationEngine from '../framework/reputation-engine'
import * as Bridge from '../framework/desktop-bridge'
import * as funding from '../modules/funding'
import * as news from '../modules/news'
import * as marketplace from '../modules/marketplace'
import * as application from '../modules/application'
import * as database from '../modules/database'
import * as cache from '../modules/cache'
import { saveDB } from './plugins'
import assets from '@/modules/assets'
import community from '@/modules/community'
import rootStore from '@/modules/root'
import seed from '../db/seed'

Vue.use(Vuex)


if (!window.BlockHub)
    window.BlockHub = {}

BlockHub.feathersClient = feathersClient

// Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)
ChaosMonkey.config.ENABLED = false

/* Usage:
- mode1 - Navigate to http://localhost:8000#/mode1
    - Best used to mode a well-behaved peer relayer
- mode2 - Navigate to http://localhost:8000#/mode2
    - Best used to mode a non-Web3 enabled user can receive data from peer network
    - Clean database
    - No relaying, ie. no responding to peer data requests
- mode3 - Navigate to http://localhost:8000#/mode3
    - Best used to mode fault-tolerance, ie. does this thing behave appropriately when problems occur
    - Permanent chaos monkey
*/
const CheckDevConfig = () => {
    let hash = document.location.hash.replace('#/', '')

    if (hash.slice(0, 5) !== 'conf=') return false

    let conf = hash.replace('conf=', '')

    if (conf === 'relayOn') {
        //PeerService.config.RELAY = true
    }

    if (conf === 'relayOff') {
        //PeerService.config.RELAY = false
    }

    if (conf === 'chaosForced') {
        ChaosMonkey.config.FORCED = true
    }

    return conf
}

const devConfig = CheckDevConfig()


let service = null
let auth = null

const IsDecentralizedMode = () => {
    // Decentralized mode if we're not on GameDelta
    return window.location.hostname.toLowerCase().indexOf('gamedelta') !== -1
}

const decentralizedMode = IsDecentralizedMode()

const feathers = feathersVuex(feathersClient, {
    idField: 'id',
    auth: {
        userService: 'accounts' // TODO: can this be removed?
    }
})

if (decentralizedMode) {
    service = (module) => {
        return {
            'profiles': {
                create() {
                    Bridge.sendCommand('createProfileRequest', newProfile).then((profile) => {
                        newProfile.id = profile.id
                        newProfile.address = profile.address

                        if (!newProfile.name)
                            newProfile.name = 'Default'

                        this.profiles.push({ ...newProfile, edit: true })

                        this.editedProfile = newProfile

                        this.saveProfiles()
                    })
                },
                save() {
                    Bridge.sendCommand('saveProfileRequest', profile).then((profile) => {
                        this.saveProfiles()
                    })
                },
                remove() {
                    Bridge.sendCommand('removeProfileRequest', this.removeProfile).then(() => {
                        const index = this.profiles.indexOf(this.removeProfile)
                        this.profiles.splice(index, 1)
                        this.removeProfile.edit = false
                        this.removeProfile = null

                        this.saveProfiles()
                    })
                },
                convert() {
                    Bridge.sendCommand('createDeveloperRequest', this.chosenProfile).then((data) => {
                        this.chosenProfile.meta.contractDeveloperId = data
                        this.$store.state.application.developerMode = true

                        // TODO: just redirect here?
                    })
                }
            }
        }
    }

    auth = () => {
        console.log("TODO")
    }
} else {
    service = feathers.service
    auth = feathers.auth
}


const store = new Vuex.Store({
    ...rootStore,
    plugins: [
        saveDB,
        service('accounts'),
        service('messages'),
        service('profiles'),
        service('products'),
        service('achievements'),
        service('assets'),
        service('badges'),
        service('battlepasses'),
        service('bounties'),
        service('collections'),
        service('communities'),
        service('discussions'),
        service('events'),
        service('files'),
        service('leaderboards'),
        service('licenses'),
        service('logs'),
        service('offers'),
        service('ratings'),
        service('reviews'),
        service('realms'),
        service('servers'),
        service('suggestions'),
        service('tournaments'),
        service('projects'),
        service('ideas'),
        service('tags'),
        service('search'),

        auth({
            userService: 'accounts'
        })
    ],
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
        application: {
            namespaced: true,
            state: application.state,
            getters: application.getters,
            actions: application.actions,
            mutations: application.mutations
        },
        assets,
        community
    }
});

window.BlockHub.Bridge = Bridge
window.BlockHub.ChaosMonkey = ChaosMonkey
window.BlockHub.ReputationEngine = ReputationEngine
window.BlockHub.store = store
window.BlockHub.router = router // doesnt work?
window.BlockHub.DB = DB
window.BlockHub.seed = seed

window.BlockHub.importSeedData = () => {
    // We dont want to mess with the important signed in account data
    if (!DB.application.config.data[0].account.address) {
        DB.application.config.data[0].account.wallets = seed.wallets
        DB.application.config.data[0].account.profiles = seed.profiles
        DB.application.config.data[0].activeProfile = {
            id: seed.profiles[0].id
        }
    }

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

window.BlockHub.resetSeedData = () => {
    // We dont want to mess with the important signed in account data
    if (!DB.application.config.data[0].account.address) {
        DB.application.config.data[0].account.wallets = []
        DB.application.config.data[0].account.profiles = []
        DB.application.config.data[0].activeProfile = { id: null }
    }

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
        for(let i in item) {
            item[i]['$loki'] = undefined
        }
    } else {
        item['$loki'] = undefined
    }

    container.insert(item)
}

window.BlockHub.saveDatabase = () => {
    DB.clean()

    updateContainer(DB.application.config, store.state.application)
    updateContainer(DB.marketplace.products, Object.values(store.state.marketplace.products))
    updateContainer(DB.marketplace.assets, Object.values(store.state.marketplace.assets))
    updateContainer(DB.marketplace.config, store.state.marketplace)
    updateContainer(DB.funding.config, store.state.funding)
    updateContainer(DB.funding.projects, Object.values(store.state.funding.projects))

    DB.save()
}


const initSubscribers = () => {
    store.subscribe((mutation, state) => {
        if (mutation.type !== 'application/setInternetConnection') {
            console.info('[BlockHub] Mutation: ' + mutation.type, mutation.payload, state)
        }

        if (mutation.type === 'database/initialized') {
            if (ChaosMonkey.random()) {
                // Hey devs, lets have some fun
                // Bye bye data
                // Things still workie?
                store.dispatch('database/clean')
            }

            if (devConfig === 'clean') {
                store.dispatch('database/clean')
            }
        } else if (mutation.type === 'database/updateState') {
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

            store.dispatch('marketplace/updateState')
            store.dispatch('funding/updateState')
            store.dispatch('application/updateState')

        }
    })
}

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
    if (!store.state.application.simulatorMode) {
        simulatorInitialized = false
        return setTimeout(monitorSimulatorMode, 1000)
    }

    // Start out with some decent amount of content
    if (!simulatorInitialized) {
        store.state.marketplace.trendingProjects = seed.trendingProjects
        store.state.marketplace.curatorReviews = seed.curatorReviews.slice(seed.curatorReviews.length / 2)
        store.state.marketplace.posts = seed.posts.slice(seed.posts.length / 2)
        store.state.marketplace.products = seed.products.slice(seed.products.length / 2)
        store.state.marketplace.assets = seed.assets.slice(seed.assets.length / 2)
        store.state.marketplace.collections = seed.collections.slice(seed.collections.length / 2)
        store.state.funding.projects = seed.projects.slice(seed.projects.length / 2)

        // TODO: figure out unique constraint
        // DB.marketplace.products.insert(store.state.marketplace.products)
        // DB.marketplace.assets.insert(store.state.marketplace.assets)

        store.dispatch('marketplace/updateState')

        simulatorInitialized = true
    }

    const action = randomAction()
    const targets = [
        [store.state.application.account.notifications, seed.notifications],
        [store.state.application.account.wallets, seed.wallets],
        [store.state.marketplace.trendingProjects, seed.trendingProjects],
        [store.state.marketplace.curatorReviews, seed.curatorReviews],
        [store.state.marketplace.productNews, seed.productNews],
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
    // DB.marketplace.products.insert(store.state.marketplace.products)
    // DB.marketplace.assets.insert(store.state.marketplace.assets)

    // store.dispatch('marketplace/updateState') //, store.state.marketplace)

    setTimeout(monitorSimulatorMode, 100)
}

// TODO
// const monitorPathState = async () => {
//     if (!store.state.application.connection.operator) {
//         return
//     }

//     const path = document.location.hash.replace('#', '')

//     console.log("[BlockHub] Checking peers for state changes on path", path)

//     // Send request for latest hash of current pages data
//     // TODO: compare timestamp
//     const state = await PeerService.getPathState(path)

//     console.log('[BlockHub] Received peer state', state)

//     if (state) {
//         store.dispatch('cache/updateScreenState', { path, state })
//     }

//     // Do it all over again
//     await new Promise(r => setTimeout(r, 5000))

//     monitorPathState()
// }


BlockHub.GetMode = () => {
    const hostname = window.location.hostname
    let hash = document.location.hash.replace('#/', '')

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
    } else {
        return 'local'
    }
}

export let initializer = () => {
    return new Promise((resolve, reject) => {
        //let initialized = false

        DB.setInitCallback(async () => {
            console.log('DB init callback')
            // TODO: is this a race condition?
            //TODO: PeerService.init()

            ReputationEngine.init(store, router)
            Bridge.init(store, router)

            store.dispatch('database/init')
            store.dispatch('application/init')
            store.dispatch('marketplace/init')
            store.dispatch('funding/init')

            BlockHub.environmentMode = store.state.application.environmentMode

            if (store.state.application.environmentMode === 'preview'
                || store.state.application.environmentMode === 'beta'
                /*|| store.state.application.environmentMode === 'production'*/) {
                BlockHub.importSeedData()
            }

            if (store.state.application.environmentMode === 'preview') {
                store.state.application.desktopMode = true
                store.state.application.signedIn = true

                // ENABLE ALL DARKLAUNCHES
                store.state.application.darklaunchOverride = true

                // ENABLE SIMULATOR MODE
                //store.state.application.simulatorMode = true
            }

            try { // TODO: we dont need this do we?
                store.dispatch('application/initEthereum')
                store.dispatch('funding/initEthereum')
                store.dispatch('marketplace/initEthereum')
            } catch(err) {
                console.log(err)
            }

            initSubscribers()
            monitorSimulatorMode()
            //monitorPathState()

            console.log('BlockHub initialized.')

            setInterval(() => {
                if (store.state.application.connection.auto) {
                    store.dispatch('application/checkInternetConnection')
                }
            }, 4000)

            resolve()
        })
    })
}

export default store
