import Vue from 'vue'
import { normalize } from 'normalizr'
import schema from './schema'
import * as DB from '@/db'
import * as Bridge from '@/framework/desktop-bridge'


let rawData = {}

export let state = null

const updateState = (savedData, updatedState = {}) => {
    rawData = {
        ...rawData,
        ...savedData,
        ...updatedState,
        projects: DB.funding ? DB.funding.projects.find({ 'status': { '$eq': 'approved' } }) : [],
        trending_projects: DB.funding ? DB.funding.projects.find({ 'system_tags': { '$contains': ['trending'] }, 'status': { '$eq': 'approved' } }) : [],
        top_game_ideas: DB.funding ? DB.funding.projects.find({ 'system_tags': { '$contains': ['top', 'game'] } }) : [],
        top_content_suggestions: DB.funding ? DB.funding.projects.find({ 'system_tags': { '$contains': ['top', 'content', 'suggestion'] } }) : [],
        top_item_suggestions: DB.funding ? DB.funding.projects.find({ 'system_tags': { '$contains': ['top', 'item', 'suggestion'] } }) : [],
        most_popular_games: DB.funding ? DB.funding.projects.find({ 'system_tags': { '$contains': ['popular', 'game'] } }) : []
    }

    const normalizedData = normalize(rawData, {
        projects: [schema.project],
    })

    state = { ...rawData, ...normalizedData.entities }
};


export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Funding] Initializing...')

        updateState(DB.funding.config.data[0], store.state)

        store.commit('updateState', state)
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

        store.commit('updateState', state)
    },
    viewProject(id) {
        console.log('viewProject', id)
    },
    createProject(store, payload) {
        return new Promise((resolve, reject) => {
            Bridge
                .createFundingProject({ title: payload.name, description: payload.description, about: payload.content })
                .then((project) => {
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
                .then((project) => {
                    store.state.projects[payload.id] = project
                    store.dispatch('updateState')

                    resolve(project)
                })
        })
    }
}

export const mutations = {
    updateState(s, payload) {
        for (let x in payload) {
            Vue.set(s, x, payload[x])
        }

        DB.funding.config.update(s)
        DB.save()
    }
}

