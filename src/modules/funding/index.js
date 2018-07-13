import { normalize } from 'normalizr'
import schema from './schema'
//import FundingProtocol from 'funding-protocol'
import * as ethereum from '@/framework/ethereum'
import * as db from '@/db'

let rawData = {
    contractMeta: null,
    contractAddress: null,
    projects: []
}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData,
        projects: db.funding ? db.funding.projects.data : []
    }

    const normalizedData = normalize(rawData, {
        projects: [schema.project]
    })

    state = { ...rawData, ...normalizedData.entities }
}

updateState()

export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log("[BlockHub][Funding] Initializing...")

        updateState()

        store.commit('updateState', state)
    },
    updateState(store, payload) {
        console.log("[BlockHub][Funding] Updating store...")

        updateState()

        store.commit('updateState', state)
    },
    viewProject(id) {
        console.log('viewProject', id)
    },
    updateProject(store, payload) {
        ethereum.getUserBalance().then((balance) => {
            payload.name = payload.name + ' ' + balance // Test

            store.commit('updateProject', payload)
        })

        store.commit('updateProject', payload)
    },
    submitProjectForReviewRequest(store, payload) {
        // payload = name, version, category, files, checksum, permissions

        // FundingProtocol.Ethereum.Models.Funding.submitAppForReview(payload).then((res) => {
        //     const project = db.funding.projects.findOne({ 'name': project.name })
        //     project.id = res[0]
        //     // TODO: assign rest of props

        //     store.commit('submitProjectForReviewResponse', project)
        // })
    }
}

export const mutations = {
    updateState(s, payload) {
        for (let x in payload) {
            s[x] = payload[x]
        }
    },
    updateProject(state, payload) {
        const project = db.funding.projects.findOne({ 'id': payload.id })

        project.name = payload.name
        state.projects[payload.id].name = payload.name

        db.save()
    },
    submitProjectForReviewResponse(state, project) {
        db.funding.projects.update(project)
    }
}

