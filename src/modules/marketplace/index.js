import { normalize } from 'normalizr'
import schema from './schema'
import MarketplaceProtocol from 'marketplace-protocol'
import * as ethereum from '@/framework/ethereum'
import * as db from '@/db'

let rawData = {}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData,
        ...db.marketplace.config.data[0],
        assets: db.marketplace ? db.marketplace.assets.data : [],
        products: db.marketplace ? db.marketplace.products.data : [],
        frontpage_product: db.marketplace ? db.marketplace.products.findOne({ 'system_tags': { '$contains': ['frontpage'] } }) : {},
        sale_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['sale'] } }) : [],
        new_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['new'] } }) : [],
        featured_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['featured'] } }) : [],
        upcoming_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['upcoming'] } }) : [],
        trending_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['trending'] } }) : [],
        top_selling_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['top_seller'] } }) : [],
        special_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['specials'] } }) : []
    }

    const normalizedData = normalize(rawData, {
        assets: [schema.asset],
        products: [schema.product],
        frontpage_product: schema.product,
        new_products: [schema.product],
        sale_products: [schema.product],
        upcoming_products: [schema.product],
        trending_products: [schema.product],
        top_selling_products: [schema.product],
        special_products: [schema.product]
    })

    state = { ...rawData, ...normalizedData.entities }
}

updateState()

export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log("[BlockHub][Marketplace] Initializing...")

        updateState()

        store.commit('updateState', state)
    },
    initEthereum(store, payload) {
        MarketplaceProtocol.Ethereum.Models.Marketplace.init(
            MarketplaceProtocol.Ethereum.Contracts.Marketplace,
            store.state.network[store.state.current_network].contracts.Marketplace.address,
            store.state.network[store.state.current_network].user_from_address,
            store.state.network[store.state.current_network].user_to_address
        )
    },
    updateState(store, payload) {
        console.log("[BlockHub][Marketplace] Updating store...")

        updateState()

        store.commit('updateState', state)
    },
    setDeveloperMode(store, payload) {
        store.commit('setDeveloperMode', payload)
    },
    viewProduct(id) {
        console.log('viewProduct', id)
    },
    updateProduct(store, payload) {
        // ethereum.getUserBalance().then((balance) => {
        //     payload.name = payload.name + ' ' + balance // Test

        //     store.commit('updateProduct', payload)
        // })

        const success = () => {
            const product = db.marketplace.products.findOne({ 'id': id })

            Object.assign(product, payload)

            db.marketplace.products.update(product)
            db.save()

            store.commit('updateProduct', { id, data: product })
        }

        MarketplaceProtocol.Ethereum.Models.Marketplace.updateProduct({
            id: payload.id,
            name: payload.name,
            version: '2',
            category: '1',
            files: '1',
            checksum: '1',
            permissions: '1'
        }).then((res) => {
            success()
        })
    },
    submitProductForReviewRequest(store, payload) {
        // payload = name, version, category, files, checksum, permissions

        MarketplaceProtocol.Ethereum.Models.Marketplace.submitAppForReview(payload).then((res) => {
            const product = db.marketplace.products.findOne({ 'name': product.name })
            product.id = res[0]
            // TODO: assign rest of props

            store.commit('submitProductForReviewResponse', product)
        })
    }
}

export const mutations = {
    updateState(s, payload) {
        for (let x in payload) {
            s[x] = payload[x]
        }
    },
    setDeveloperMode(state, payload) {
        state.developer_mode = payload
    },
    updateProduct(state, payload) {
        Vue.set(state.products, payload.id, payload.data)
    },
    createProduct(state, payload) {
        const success = (id) => {
            const product = db.marketplace.products.insert({ id, ...payload })

            Object.assign(product, payload)

            db.marketplace.products.update(product)
            db.save()

            Vue.set(state.products, id, product)
        }

        MarketplaceProtocol.Ethereum.Models.Marketplace.createProduct({
            name: payload.name,
            version: '1',
            category: '1',
            files: '1',
            checksum: '1',
            permissions: '1'
        }).then((res) => {
            success(res[0])
        })
    },
    submitProductForReviewResponse(state, product) {
        db.marketplace.products.update(product)
    },
    deployContract(state, payload) {
        const meta = MarketplaceProtocol.Ethereum.Contracts[payload.contractName]
        const contract = new window.web3.eth.Contract(meta.abi)

        contract.deploy({
            data: meta.bytecode
        }).send({
            from: state.network[state.current_network].user_from_address,
            gas: 4500000
        }).then((res) => {
            state.network[state.current_network].contracts[payload.contractName].created_at = Date.now()
            state.network[state.current_network].contracts[payload.contractName].address = res._address

            db.marketplace.config.update(state)
            db.save()
        })
    }
}

