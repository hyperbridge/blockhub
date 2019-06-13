import { normalize } from 'normalizr'
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
        console.log('[BlockHub][Database] Initializing...')

        store.commit('initialized')

        updateState()

        store.commit('updateState', localState)
    },
    clean(store, payload) {
        console.log('[BlockHub] Cleaning database...')

        DB.clean()

        store.commit('updateState', localState)
    },
    reload(store, payload) {
        console.log('[BlockHub] Reloading database...')

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
