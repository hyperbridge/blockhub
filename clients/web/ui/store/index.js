/* eslint-disable no-console */
import feathersClient from '../framework/feathers-client'
import feathersVuex, { initAuth } from 'feathers-vuex'
import Vue from 'vue'
import * as Bridge from '../framework/desktop-bridge'

export const strict = false

let app = null
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

let feathers = null

if (decentralizedMode) {
    service = () => { // eslint-disable-line arrow-body-style
        return {
            'profiles': {
                async create(newProfile) {
                    const profile = await Bridge.sendCommand('createProfileRequest', newProfile)
                    newProfile.id = profile.id
                    newProfile.address = profile.address

                    if (!newProfile.name) newProfile.name = 'Default'
                    this.profiles.push({ ...newProfile, edit: true })
                    this.editedProfile = newProfile
                    this.saveProfiles()
                },
                async save(profile) {
                    await Bridge.sendCommand('saveProfileRequest', profile)
                    this.saveProfiles()
                },
                async remove() {
                    await Bridge.sendCommand('removeProfileRequest', this.removeProfile)
                    const index = this.profiles.indexOf(this.removeProfile)
                    this.profiles.splice(index, 1)
                    this.removeProfile.edit = false
                    this.removeProfile = null

                    this.saveProfiles()
                },
                async convert() {
                    const data = await Bridge.sendCommand('createDeveloperRequest', this.activeProfile)
                    this.activeProfile.meta.contractDeveloperId = data
                    this.$store.state.application.developerMode = true

                    // TODO: just redirect here?
                }
            }
        }
    }

    auth = () => {
        console.log('[auth] TODO')
    }
} else if (process.client) {
    console.log('zzzzzzzzzzzzz')
}

export let plugins = []

export const state = () => ({
    initialized: false,
    feathers
})

export const actions = {
    async nuxtServerInit({ commit, dispatch }, context) {
        const { req, store, $sentry } = context

        app = context.app

        app.req = req

    },

    async nuxtClientInit({ commit, dispatch }, context) {
        app = context.app

        // const cookieToken = app.$cookies.get('feathers-jwt')

        // if (cookieToken) {
        //     try {
        //         const { accessToken } = await dispatch('auth/authenticate', {
        //             strategy: 'jwt',
        //             accessToken: cookieToken
        //         })

        //         dispatch('login', {
        //             token: accessToken,
        //             user: state.auth.user
        //         })
                
        //         // const { payload } = jwt.decode(accessToken, { complete: true })

        //         // commit('accounts/setCurrent', payload.userId)
        //         // commit('auth/setAccessToken', accessToken)
        //         // commit('auth/setPayload', payload)
        //         // commit('auth/setUser', getters['accounts/current'])

        //         await dispatch('application/authenticate')
        //     } catch (error) {
        //         console.log('[BlockHub] Error logging in', error)
        //         dispatch('logout')
        //         return
        //     }
        // } else {
        //     dispatch('logout')
        // }
        
        if (context.store.state.user) {
            // await dispatch('application/authenticate')
            
            const { userId, meta } = context.store.state.user
            this.$access.setUserId(userId)
            this.$access.setUserPermissions(userId, meta.permissions)
        }
    },

    login({ dispatch, commit }, { token, user }) {
        console.log('[BlockHub] Logging in: ', user)
        this.$axios.setToken(token, 'bearer')
        // this.$cookies.set('token', token)
        this.$access.setUserId(user.userId)
        this.$access.setUserPermissions(user.userId, user.meta.permissions)

        dispatch('application/authenticate')

        commit('token', token)
        commit('user', user)
        commit('loggedIn', true)
    },

    logout({ dispatch, commit }) {
        console.log('[BlockHub] Logging out')
        dispatch('auth/logout')
        dispatch('application/logout')
        this.$axios.setToken(false)
        // this.$cookies.remove('token')
        commit('loggedIn', false)
        commit('user', null)
        commit('token', null)
        this.$cookies.remove('feathers-jwt')
        // this.$router.push('/login')
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
            // console.log(arguments)
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
    },
    user(state, payload) {
        state.user = payload
    },
    token(state, payload) {
        state.token = payload
    },
    loggedIn(state, payload) {
        state.loggedIn = payload
    }
}

// export const getters = {}
