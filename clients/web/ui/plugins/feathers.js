import Vue from 'vue'
import feathersVuex, { initAuth } from 'feathers-vuex'
import axios from 'axios'
import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import socketio from '@feathersjs/socketio-client'
import authicationClient from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'
import serviceHandlers from '../services'

const useSockets = process.env.API_WEBSOCKETS_ENABLED === 'true' || false

export default async ({ app, store }) => {
    const { dispatch, commit } = store

    let serviceUrl = null
    let storage = null

    if (process.server) {
        serviceUrl = process.env.NODE_ENV !== 'production' ? process.env.LOCAL_SERVICE_URL : process.env.PRODUCTION_SERVICE_URL // eslint-disable-line no-negated-condition

        storage = {
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
    } else {
        if (window.location.hostname === 'localhost' || window.location.hostname === process.env.LOCAL_HOSTNAME) {
            serviceUrl = process.env.LOCAL_SERVICE_URL
        } else {
            serviceUrl = process.env.PRODUCTION_SERVICE_URL
        }

        storage = new CookieStorage()
    }

    const feathersClient = feathers().configure(authicationClient({ storage }))

    if (useSockets) {
        const socket = io(serviceUrl, process.client ? { transports: ['websocket'] } : {})
        feathersClient.configure(socketio(socket, { timeout: 15000 }))
    } else {
        feathersClient.configure(rest(serviceUrl).axios(axios))
    }

    const { auth, service, FeathersVuex } = feathersVuex(feathersClient, {
        idField: 'id',
        enableEvents: true
    })

    Vue.use(FeathersVuex)

    for (const serviceHandler of serviceHandlers) {
        service(serviceHandler.path, serviceHandler.config(store))(store)
    }

    auth({
        userService: 'accounts'
    })(store)

    const cookieToken = app.$cookies.get('feathers-jwt')

    if (cookieToken) {
        try {
            const { accessToken } = await dispatch('auth/authenticate', {
                strategy: 'jwt',
                accessToken: cookieToken
            })

            dispatch('login', {
                token: accessToken,
                user: store.state.auth.user
            })

            // const { payload } = jwt.decode(accessToken, { complete: true })

            // commit('accounts/setCurrent', payload.userId)
            // commit('auth/setAccessToken', accessToken)
            // commit('auth/setPayload', payload)
            // commit('auth/setUser', store.getters['accounts/current'])

            //await dispatch('application/authenticate')
        } catch (error) {
            console.log('[BlockHub] Error logging in', error)
            dispatch('logout')
            return
        }
    } else {
        dispatch('logout')
    }

    if (process.server) {
        await initAuth({
            commit,
            dispatch,
            req: { headers: { cookie: `feathers-jwt=${app.$cookies.get('feathers-jwt')}` } },
            moduleName: 'auth',
            cookieName: 'feathers-jwt'
        }).catch(e => { console.log('Feathers exception', e) })
    }

    let api = null

    if (store.state.application.decentralizedMode) {
        api = {
            service: serviceKey => {
                // if (blockhub.bridge.isConnected()) { // && blockhub.bridge.canFulfillRequest(endpoint
                //     console.log('if')
                //     return {
                //         find: params => {
                //             blockhub.bridge.sendCommand('service', {
                //                 serviceKey,
                //                 type: 'find',
                //                 params
                //             })
                //         }
                //     }
                // }
                console.log('servicekey', serviceKey)
                return app.feathers.service(serviceKey)
            }
        }
    } else {
        api = feathersClient
    }

    // Set feathers instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.$api = store.$api = api

    const feathersPlugin = {
        install(Vue, options) {
            Vue.mixin({
                created() {
                    this.$api = api
                }
            })
        }
    }

    Vue.use(feathersPlugin)
}
