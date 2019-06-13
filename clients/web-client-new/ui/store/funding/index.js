import Vue from 'vue'
import { normalize } from 'normalizr'
import * as DB from '../../db'
import * as Bridge from '../../framework/desktop-bridge'


let localState = {}

export const state = () => localState

const updateState = (savedData, updatedState = {}) => {
    localState = {
        ...localState,
        ...savedData,
        ...updatedState,
        projects: DB.funding ? DB.funding.projects.find({ 'status': { '$eq': 'approved' } }) : [],
        trendingProjects: DB.funding ? DB.funding.projects.find({ 'systemTags': { '$contains': ['trending'] }, 'status': { '$eq': 'approved' } }) : [],
        topGameIdeas: DB.funding ? DB.funding.projects.find({ 'systemTags': { '$contains': ['top', 'game'] } }) : [],
        topContentIdeas: DB.funding ? DB.funding.projects.find({ 'systemTags': { '$contains': ['top', 'content', 'suggestion'] } }) : [],
        topItemIdeas: DB.funding ? DB.funding.projects.find({ 'systemTags': { '$contains': ['top', 'item', 'suggestion'] } }) : [],
        most_popular_games: DB.funding ? DB.funding.projects.find({ 'systemTags': { '$contains': ['popular', 'game'] } }) : []
    }
}


export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Funding] Initializing...')

        updateState(DB.funding.config.data[0], store.state)

        store.commit('updateState', localState)
    },
    initEthereum(store, payload) {
        // Bridge
        //     .initProtocol({ protocolName: 'funding' })
        //     .then((config) => {
        //         store.state.ethereum[store.state.currentEthereumNetwork] = config
        //         store.dispatch('updateState')
        //     })
    },
    updateState(store, payload) {
        console.log('[BlockHub][Funding] Updating store...')

        updateState()

        store.commit('updateState', localState)
    },
    viewProject(id) {
        console.log('viewProject', id)
    },
    createProject(store, payload) {
        return new Promise((resolve, reject) => {
            Bridge
                .createFundingProject({ title: payload.name, description: payload.description, about: payload.content })
                .then(project => {
                    store.state.projects[project.id] = project

                    store.dispatch('updateState')

                    resolve(project)
                })
        })
    },
    updateProject(store, payload) {
        return new Promise((resolve, reject) => {
            const project = DB.funding.projects.findOne({ 'id': payload.id })

            Bridge
                .updateFundingProject({ id: project.id, data: payload })
                .then(project => {
                    store.state.projects[payload.id] = project
                    store.dispatch('updateState')

                    resolve(project)
                })
        })
    }
}

export const mutations = {
    updateState(s, payload) {
        for (const x in payload) {
            Vue.set(s, x, payload[x])
        }

        DB.funding.config.update(s)
        DB.save()
    }
}

