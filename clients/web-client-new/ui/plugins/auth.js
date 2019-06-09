import { CookieStorage, parseCookies } from 'cookie-storage'
import jwt from 'jsonwebtoken'

const cookieStorage = new CookieStorage()

const getHashParam = param => {
    const params = {}
    window.location.hash.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
        params[$1] = $3
    })
    return params[param]
}

// https://github.com/feathersjs/feathers/issues/892
let isInitialised = false

export default async ({ store, redirect, route, req }) => {
    if (store.state.auth.payload && isInitialised) {

    }

    isInitialised = true

    // Get token from lock login
    if (process.client) {
        const hashToken = getHashParam('id_token')
        if (hashToken) {
            cookieStorage.setItem('feathers-jwt', hashToken)
        }
    }

    let cookieToken

    if (process.client) {
        cookieToken = cookieStorage.getItem('feathers-jwt')
    }
    if (process.server && req.headers.cookie) {
        cookieToken = parseCookies(req.headers.cookie)['feathers-jwt']
    }

    if (cookieToken) {
        try {
            const { accessToken } = await store.dispatch('auth/authenticate', {
                strategy: 'jwt',
                accessToken: cookieToken
            })

            const { payload } = jwt.decode(accessToken, { complete: true })

            store.commit('accounts/setCurrent', payload.userId)
            store.commit('auth/setAccessToken', accessToken)
            store.commit('auth/setPayload', payload)
            store.commit('auth/setUser', store.getters['accounts/current'])

            await store.dispatch('application/authenticate')
        } catch (error) {
            if (process.client) {
                cookieStorage.removeItem('feathers-jwt')
            }
            return redirect(`/login?error=${error.name}`)
        }
    }

    // If it's a private page and there's no payload, redirect.
    // if (!store.state.auth.publicPages.includes(route.name) && !store.state.auth.payload) {
    //     return redirect('/login?error=NotAuthenticated')
    // }
}
