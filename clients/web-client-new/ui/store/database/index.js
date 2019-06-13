import { normalize } from 'normalizr'
import * as DB from '../../db'

let rawData = {
    initialized: true
}

let localState = null

export const state = () => localState

const updateState = () => {
    rawData = {
        ...rawData
        // db stuff
    }

    const normalizedData = normalize(rawData, {
        // schema stuff
    })

    localState = { ...rawData, ...normalizedData.entities }
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
