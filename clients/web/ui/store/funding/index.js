import Vue from 'vue'
import * as DB from '../../db'

export const state = () => ({
    currentEthereumNetwork: 'local',
    ethereum: {
        local: {
            contracts: {}
        }
    },
    defaultProject: {},
    projects: [],
    trendingProjects: [],
    topGameIdeas: [],
    topContentIdeas: [],
    topItemIdeas: [],
    mostPopularGames: []
})

export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Funding] Initializing...')

    },
    updateState(store, payload) {
        console.log('[BlockHub][Funding] Updating store...')

        store.commit('updateState', payload)
    }
}

export const mutations = {
    updateState(s, payload) {
        for (const x in payload) {
            Vue.set(s, x, payload[x])
        }
    }
}
