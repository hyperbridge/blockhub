import Vue from 'vue'
import Vuex from 'vuex'

import marketplace from '../modules/marketplace'
import news from '../modules/news'

Vue.use(Vuex)

const state = {
    count: 0,
    marketplace: marketplace.state
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    getProduct: state => state.marketplace.entities.articles['post1']
}

const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}


const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

export default new Vuex.Store({
    modules: {
        marketplace: {
            namespaced: true,
            state: marketplace.state,
            getters: marketplace.getters,
            actions: marketplace.actions,
            mutations: marketplace.mutations
        },
        news: {
            namespaced: true,
            state: news.state,
            getters: news.getters,
            actions: news.actions,
            mutations: news.mutations
        }
    }
})