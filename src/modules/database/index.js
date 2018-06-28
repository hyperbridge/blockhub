import { normalize } from 'normalizr'
import * as db from '@/db'

const rawData = {
}

export let state = normalize(rawData, {
})

state = { ...state, ...state.result }

export const getters = {}

export const actions = {
    clean(store, payload) {
        console.log('[BlockHub] Cleaning database...')

        db.clean()
    },
    reload(store, payload) {
        console.log('[BlockHub] Reloading database...')

        db.reload()
    }
}

export const mutations = {}