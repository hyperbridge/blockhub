import feathersClient from '../framework/feathers-client'
import feathersVuex, { initAuth } from 'feathers-vuex'
import url from 'url'
import Vue from 'vue'

import * as DB from '../db'
import * as ChaosMonkey from '../framework/chaos-monkey'
import * as ReputationEngine from '../framework/reputation-engine'
import * as Bridge from '../framework/desktop-bridge'
import * as API from '../framework/api'
import seed from '../db/seed'

export const strict = false

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

/*
TODO: Implement this in the future
const CheckDevConfig = () => {
    if (!process.client) {
        return ''
    }

    const hash = document.location.hash.replace('#/', '')
    if (hash.slice(0, 5) !== 'conf=') return false

    const conf = hash.replace('conf=', '')
    if (conf === 'relayOn') {
        // PeerService.config.RELAY = true
    }
    if (conf === 'relayOff') {
        // PeerService.config.RELAY = false
    }
    if (conf === 'chaosForced') {
        ChaosMonkey.config.FORCED = true
    }

    return conf
}

CheckDevConfig()
*/
let service = null
let auth = null

const IsDecentralizedMode = () => {
    if (!process.client) return

    // Decentralized mode if we're not on GameDelta
    return window.location.hostname.toLowerCase().indexOf('gamedelta') !== -1
}

const decentralizedMode = IsDecentralizedMode()

// const feathers = feathersVuex(feathersClient, {
//     idField: 'id',
//     auth: {
//         userService: 'accounts' // TODO: can this be removed?
//     }
// })

export let plugins = []
export const state = () => ({})
export const mutations = {}

const initSubscribers = store => {
    return /* eslint-disable no-unreachable */
    store.subscribeAction((action, state) => {
        console.info(`[BlockHub] Store Action: ${action.type}`, action.payload, state)
    })

    store.subscribe((mutation, state) => {
        if (mutation.type !== 'application/setInternetConnection') {
            console.info(`[BlockHub] Store Mutation: ${mutation.type}`, mutation.payload, state)
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

if (decentralizedMode) {
    service = module => { // eslint-disable-line arrow-body-style
        return {
            'profiles': {
                create(newProfile) {
                    Bridge.sendCommand('createProfileRequest', newProfile).then(profile => {
                        newProfile.id = profile.id
                        newProfile.address = profile.address

                        if (!newProfile.name) newProfile.name = 'Default'
                        this.profiles.push({ ...newProfile, edit: true })
                        this.editedProfile = newProfile

                        this.saveProfiles()
                    })
                },
                save(profile) {
                    Bridge.sendCommand('saveProfileRequest', profile).then(profile => {
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
                    Bridge.sendCommand('createDeveloperRequest', this.activeProfile).then(data => {
                        this.activeProfile.meta.contractDeveloperId = data
                        this.$store.state.application.developerMode = true

                        // TODO: just redirect here?
                    })
                }
            }
        }
    }

    auth = () => {
        console.log('[auth] TODO')
    }
} else if (process.client) {
    const feathers = feathersVuex(feathersClient(), { idField: 'id', enableEvents: false })

    Vue.use(feathers.FeathersVuex)

    service = feathers.service
    auth = feathers.auth

    plugins = [
        service('accounts', { paginate: true }),
        service('messages', { paginate: true }),
        service('profiles', { paginate: true }),
        service('products', { paginate: true }),
        service('achievements', { paginate: true }),
        service('assets', { paginate: true }),
        service('badges', { paginate: true }),
        service('battlepasses', { paginate: true }),
        service('bounties', { paginate: true }),
        service('collections', { paginate: true }),
        service('communities', { paginate: true }),
        service('discussions', { paginate: true }),
        service('events', { paginate: true }),
        service('files', { paginate: true }),
        service('leaderboards', { paginate: true }),
        service('licenses', { paginate: true }),
        service('logs', { paginate: true }),
        service('offers', { paginate: true }),
        service('ratings', { paginate: true }),
        service('reviews', { paginate: true }),
        service('realms', { paginate: true }),
        service('servers', { paginate: true }),
        service('suggestions', { paginate: true }),
        service('tournaments', { paginate: true }),
        service('projects', { paginate: true }),
        service('ideas', { paginate: true }),
        service('tags', { paginate: true }),
        service('votes', { paginate: true }),
        service('search', { paginate: true }),
        service('application', { paginate: true }),
        auth({
            userService: 'accounts'
        })
    ]
}

export const actions = {
    async nuxtServerInit({ commit, dispatch, state }, { app, req, store }) {
        const origin = process.env.NODE_ENV !== 'production' ? `http://localhost:9001` : 'https://api.blockhub.gg' // eslint-disable-line no-negated-condition

        const storage = {
            getItem() { },
            setItem() { },
            removeItem() { }
        }

        const client = feathersClient(origin, storage)
        const { service, auth } = feathersVuex(client, { idField: 'id', enableEvents: false })

        service('accounts', { paginate: true })(store)
        service('messages', { paginate: true })(store)
        service('profiles', { paginate: true })(store)
        service('products', { paginate: true })(store)
        service('achievements', { paginate: true })(store)
        service('assets', { paginate: true })(store)
        service('badges', { paginate: true })(store)
        service('battlepasses', { paginate: true })(store)
        service('bounties', { paginate: true })(store)
        service('collections', { paginate: true })(store)
        service('communities', { paginate: true })(store)
        service('discussions', { paginate: true })(store)
        service('events', { paginate: true })(store)
        service('files', { paginate: true })(store)
        service('leaderboards', { paginate: true })(store)
        service('licenses', { paginate: true })(store)
        service('logs', { paginate: true })(store)
        service('offers', { paginate: true })(store)
        service('ratings', { paginate: true })(store)
        service('reviews', { paginate: true })(store)
        service('realms', { paginate: true })(store)
        service('servers', { paginate: true })(store)
        service('suggestions', { paginate: true })(store)
        service('tournaments', { paginate: true })(store)
        service('projects', { paginate: true })(store)
        service('ideas', { paginate: true })(store)
        service('tags', { paginate: true })(store)
        service('votes', { paginate: true })(store)
        service('search', { paginate: true })(store)
        service('application', { paginate: true })(store)

        auth({
            userService: 'accounts'
        })(store)

        let cookieToken

        if (req.headers.cookie) {
            cookieToken = app.$cookies.get('feathers-jwt')
        }
        const { accessToken } = await store.dispatch('auth/authenticate', {
            strategy: 'jwt',
            accessToken: cookieToken,
        })
        console.log(cookieToken, accessToken)
        var l = await initAuth({
            commit,
            dispatch,
            req,
            moduleName: 'auth',
            cookieName: 'feathers-jwt'
        })
            .catch(e => { console.log('Feathers exception', e) })
console.log(l)
            return l
    }
}

//export const getters = {}