import Vue from 'vue'

let localState = {
    initial: true,
    screens: {}
}

export const state = () => localState

const updateState = () => {
    localState = {
        ...localState
    }
}

updateState()

export const getters = {
}

export const actions = {
    updateScreenState(store, payload) {
        store.commit('updateScreenState', payload)
    }
}

export const mutations = {
    updateScreenState(state, payload) {
        Vue.set(state.screens, payload.path, payload.state)
    }
}

