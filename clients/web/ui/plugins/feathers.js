import Vue from 'vue'
import url from 'url'
import feathersClient from '~/framework/feathers-client'
import feathersVuex, { initAuth } from 'feathers-vuex'
import serviceHandlers from '../services'

export default async ({ app, store }) => {
    const { dispatch, commit } = store

    let feathers = null

    if (process.server) {
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

        feathers = feathersClient(origin, storage)
    } else {
        feathers = feathersClient()
    }

    let { service, auth, FeathersVuex } = feathersVuex(feathers, {
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
            // commit('auth/setUser', getters['accounts/current'])

            await dispatch('application/authenticate')
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

    if (store.state.application.decentralizedMode) {
        service = serviceKey => {
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

    const api = {
        service
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
