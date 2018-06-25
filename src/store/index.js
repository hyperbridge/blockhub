import Vue from 'vue'
import Vuex from 'vuex'

import * as marketplace from '../modules/marketplace'
import funding from '../modules/funding'
import news from '../modules/news'
import network from '../modules/network'

Vue.use(Vuex)

// const state = {
//     marketplace: marketplace.state,
//     funding: funding.state
// }

// const getters = {
//     evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
//     getProduct: state => state.marketplace.entities.articles['post1']
// }

// const mutations = {
//     increment(state) {
//         state.count++
//     },
//     decrement(state) {
//         state.count--
//     }
// }


// const actions = {
//     increment: ({ commit }) => commit('increment'),
//     decrement: ({ commit }) => commit('decrement'),
//     incrementIfOdd({ commit, state }) {
//         if ((state.count + 1) % 2 === 0) {
//             commit('increment')
//         }
//     },
//     incrementAsync({ commit }) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 commit('increment')
//                 resolve()
//             }, 1000)
//         })
//     }
// }

const store = new Vuex.Store({
    modules: {
        marketplace: {
            namespaced: true,
            state: marketplace.state,
            getters: marketplace.getters,
            actions: marketplace.actions,
            mutations: marketplace.mutations
        },
        funding: {
            namespaced: true,
            state: funding.state,
            getters: funding.getters,
            actions: funding.actions,
            mutations: funding.mutations
        },
        news: {
            namespaced: true,
            state: news.state,
            getters: news.getters,
            actions: news.actions,
            mutations: news.mutations
        },
        network: {
            namespaced: true,
            state: network.state,
            getters: network.getters,
            actions: network.actions,
            mutations: network.mutations
        }
    }
})

marketplace.init(() => {
    console.log('[BlockHub] Marketplace initialized. Updating store state.')

    store.state.marketplace = marketplace.state

    console.log(store.state.marketplace)
})


export default store