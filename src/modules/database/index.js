import { normalize } from 'normalizr'
import * as db from '@/db'

let rawData = {
    initialized: true
}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData
        // db stuff
    }

    const normalizedData = normalize(rawData, {
        // schema stuff
    })

    state = { ...rawData, ...normalizedData.entities }
}

updateState()

export const getters = {}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub] Database initializing...')

        store.commit('initialized')

        updateState()

        store.commit('updateState', state)
    },
    clean(store, payload) {
        console.log('[BlockHub] Cleaning database...')

        db.clean()

        store.commit('updateState', state)
    },
    reload(store, payload) {
        console.log('[BlockHub] Reloading database...')

        db.reload()

        store.commit('updateState', state)
    }
}

export const mutations = {
    initialized(state) {
        state.initialized = true
    },
    updateState(s, payload) {
        for (let x in payload) {
            s[x] = payload[x]
        }
    },
}