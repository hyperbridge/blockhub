import { normalize } from 'normalizr'
import Vue from 'vue'
import schema from './schema'
//import FundingProtocol from 'funding-protocol'
import * as ethereum from '@/framework/ethereum'
import FundingProtocol from 'funding-protocol'
import * as db from '@/db'

let rawData = {}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData,
        ...db.funding.config.data[0],
        projects: db.funding ? db.funding.projects.data : []
    }

    const normalizedData = normalize(rawData, {
        projects: [schema.project],
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
    initEthereum(store, payload) {
        FundingProtocol.ethereum.modules.funding.init(
            store.state.ethereum[store.state.current_ethereum_network].user_from_address,
            store.state.ethereum[store.state.current_ethereum_network].user_to_address
        )

        FundingProtocol.ethereum.modules.project.init(
            store.state.ethereum[store.state.current_ethereum_network].user_from_address,
            store.state.ethereum[store.state.current_ethereum_network].user_to_address
        )

        FundingProtocol.ethereum.modules.funding.setContractAddress('FundingStorage', store.state.ethereum[store.state.current_ethereum_network].contracts.FundingStorage.address)
        FundingProtocol.ethereum.modules.funding.setContractAddress('FundingVault', store.state.ethereum[store.state.current_ethereum_network].contracts.FundingVault.address)
        FundingProtocol.ethereum.modules.project.setContractAddress('ProjectRegistration', store.state.ethereum[store.state.current_ethereum_network].contracts.ProjectRegistration.address)
        FundingProtocol.ethereum.modules.project.setContractAddress('ProjectTimeline', store.state.ethereum[store.state.current_ethereum_network].contracts.ProjectTimeline.address)
    
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
    createProject(store, payload) {
        FundingProtocol.ethereum.modules.project.call('ProjectRegistration', 'createProject', [
            payload.name,
            payload.description,
            payload.content,
            10,
            false,
            false
        ]).then((res) => {
            console.log(res)

            payload.id = '20'

            db.funding.projects.insert(payload)
        })
    },
    deployContract(state, payload) {
        if (!state.ethereum[state.current_ethereum_network].contracts[payload.contractName]) {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName] = {
                created_at: null,
                address: null
            }
        }

        let params = []

        if (payload.contractName !== 'FundingStorage') {
            params = [
                state.ethereum[state.current_ethereum_network].contracts.FundingStorage.address
            ]
        }

        FundingProtocol.ethereum.modules.project.deployContract(payload.contractName, params).then((res) => {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].created_at = Date.now()
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].address = res._address

            db.funding.config.update(state)
            db.save()
        })

    }
}

