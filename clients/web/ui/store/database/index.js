import * as DB from '../../db'

let localState = {
    initialized: true
}

export const state = () => localState

const updateState = () => {
    localState = {
        ...localState
        // db stuff
    }
}

updateState()

export const getters = {}

export const actions = {
    init(store, payload) {
        console.info('[BlockHub] Initializing database...')

        store.commit('initialized')

        updateState()

        store.commit('updateState', localState)
    },
    clean(store, payload) {
        console.info('[BlockHub] Cleaning database...')

        DB.clean()

        store.commit('updateState', localState)
    },
    reload(store, payload) {
        console.info('[BlockHub] Reloading database...')

        DB.reload()

        store.commit('updateState', localState)
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
