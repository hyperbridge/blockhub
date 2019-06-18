import feathersClient from '../framework/feathers-client'
import feathersVuex, { initAuth } from 'feathers-vuex'
import Vue from 'vue'
import * as Bridge from '../framework/desktop-bridge'

export const strict = false

let service = null
let auth = null

const isDecentralizedMode = () => {
    if (!process.client) return

    // Decentralized mode if we're not on GameDelta
    return window.location.hostname.toLowerCase().indexOf('gamedelta') !== -1
}

const decentralizedMode = isDecentralizedMode()

// const feathers = feathersVuex(feathersClient, {
//     idField: 'id',
//     auth: {
//         userService: 'accounts' // TODO: can this be removed?
//     }
// })

export let plugins = []

export const state = () => ({
    initialized: false
})

if (decentralizedMode) {
    service = () => { // eslint-disable-line arrow-body-style
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
        // service('application', { paginate: true }),
        auth({
            userService: 'accounts'
        })
    ]
}

export const actions = {
    async nuxtServerInit({ commit, dispatch }, { app, req, store }) {
        const origin = process.env.NODE_ENV !== 'production' ? `http://localhost:9001` : 'https://api.blockhub.gg' // eslint-disable-line no-negated-condition

        const storage = {
            getItem() {
                return store.state.auth ? store.state.auth.accessToken : ''
            },
            setItem(key, value) {
                store.state.auth.accessToken = value
            },
            removeItem() {
                store.state.auth.accessToken = null
            }
        }

        const client = feathersClient(origin, storage)
        const feathers = feathersVuex(client, { idField: 'id', enableEvents: false })

        service = feathers.service
        auth = feathers.auth

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
        // service('application', { paginate: true })(store)

        auth({
            userService: 'accounts'
        })(store)

        const cookieToken = app.$cookies.get('feathers-jwt')

        if (cookieToken) {
            try {
                const { accessToken } = await store.dispatch('auth/authenticate', {
                    strategy: 'jwt',
                    accessToken: cookieToken
                })
            } catch (error) {
                app.$cookies.remove('feathers-jwt')
                return
            }
        }

        return initAuth({
            commit,
            dispatch,
            req,
            moduleName: 'auth',
            cookieName: 'feathers-jwt'
        })
            .catch(e => { console.log('Feathers exception', e) })
    },
    init({ commit }, payload) {
        commit('init', payload)
    },
    update({ rootState }, [path, data]) {
        const [module, target] = path.split('/')
        if (data !== null && typeof data === 'object') {
            rootState[module][target] = {
                ...rootState[module][target],
                ...data
            }
        } else {
            console.log(arguments)
            // rootState[module][target] = data
            Vue.set(rootState[module], target, data)
        }
    }
}

export const mutations = {
    init(state, payload) {
        if (state.initialized) return

        for (const x in payload) {
            Vue.set(state, x, payload[x])
        }

        state.initialized = true
    }
}

// export const getters = {}
