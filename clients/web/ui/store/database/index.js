import * as DB from '../../db'

export const state = () => ({
    initialized: true
})

export const getters = {}

export const actions = {
    init(store, payload) {
        console.info('[BlockHub] Initializing database...')

        store.commit('initialized')
    },
    clean(store, payload) {
        console.info('[BlockHub] Cleaning database...')

        DB.clean()

        store.commit('updateState', payload)
    },
    reload(store, payload) {
        console.info('[BlockHub] Reloading database...')

        DB.reload()

        store.commit('updateState', payload)
    }
}

export const mutations = {
    initialized(state) {
        state.initialized = true
    },
    updateState(s, payload) {
        for (const x in payload) {
            s[x] = payload[x]
        }
    }
}
