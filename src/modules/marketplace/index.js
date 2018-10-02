import { normalize } from 'normalizr'
import Vue from 'vue'
import schema from './schema'
import MarketplaceProtocol from 'marketplace-protocol'
import * as ethereum from '@/framework/ethereum'
import * as db from '@/db'

let rawData = {};

export let state = {};

const updateState = (savedData, updatedState = {}) => {
    rawData = {
        ...rawData,
        ...savedData,
        ...updatedState,
        assets: db.marketplace ? db.marketplace.assets.data : [],
        products: db.marketplace ? db.marketplace.products.data : [],
        collections: db.marketplace.config.data[0].collections, // TODO
        frontpage_product: db.marketplace ? db.marketplace.products.findOne({ 'system_tags': { '$contains': ['frontpage'] } }) : {},
        sale_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['sale'] } }) : [],
        new_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['new'] } }) : [],
        featured_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['featured'] } }) : [],
        upcoming_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['upcoming'] } }) : [],
        trending_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['trending'] } }) : [],
        top_selling_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['top_seller'] } }) : [],
        special_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['specials'] } }) : []
    }

    if (rawData.desktop_mode == null)
        rawData.desktop_mode = window.isElectron

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

    state = { ...rawData, ...normalizedData.entities } // ...normalizedData.result,
}

const sortDir = (dir, asc) => asc ? dir : dir * -1;

export const getters = {
    assetsArray: state => Array.isArray(state.assets) ? state.assets : Object.values(state.assets),
    productsArray: state => Array.isArray(state.products) ? state.products : Object.values(state.products),
    getProductsQuery: state => query => db.marketplace.products.find(query),
    productsTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.developer_tags
                .filter(tag =>
                    !tags.includes(tag)
                )
        ], []).sort()
    ,
    systemTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.system_tags
                .filter(tag =>
                    !tags.includes(tag)
                )
        ], []).sort()
    ,
    productsLanguages: (state, getters) => getters.productsArray
        .reduce((languages, product) => [
            ...languages,
            ...product.language_support
                .filter(lang =>
                    !languages.includes(lang.name)
                )
                .map(lang => lang.name)
        ], []).sort()
    ,
    getProductsByName: (state, getters) => name => getters.productsArray.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
    ),
    getProductsFiltered: (state, getters) => ({ name, tags, sortBy }) => getters.productsArray
        .filter(product => name && name.length
            ? product.name.toLowerCase().includes(name.toLowerCase())
            : true
        )
        .filter(product => tags && tags.length
            ? product.developer_tags.some(genre => this.selectedGenres.includes(genre))
            : true
        )
        .sort((a, b) => sortBy
            ? a[sortBy.property] > b[sortBy.property]
                ? sortDir(1, sortBy.asc)
                : a[sortBy.property] < b[sortBy.property] ? sortDir(-1, sortBy.asc) : 0
            : 0
        )
};

export const actions = {
    init(store, payload) {
        console.log("[BlockHub][Marketplace] Initializing...")

        updateState(db.marketplace.config.data[0], store.state)

        store.commit('updateState', state)
    },
    async initEthereum(store, payload) {
        if (store.state.ethereum[store.state.current_ethereum_network].contracts.Marketplace
            && store.state.ethereum[store.state.current_ethereum_network].contracts.Marketplace.address) {
            MarketplaceProtocol.Ethereum.Models.Marketplace.init(
                MarketplaceProtocol.Ethereum.Contracts.Marketplace,
                store.state.ethereum[store.state.current_ethereum_network].contracts.Marketplace.address,
                store.state.ethereum[store.state.current_ethereum_network].user_from_address,
                store.state.ethereum[store.state.current_ethereum_network].user_to_address
            )
        }
    },
    updateState(store, payload) {
        //console.log("[BlockHub][Marketplace] Updating store...")

        updateState(store.state)

        store.commit('updateState', state)
    },
    setEditorMode(store, payload) {
        store.commit('setEditorMode', payload)
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
    updateState(state, payload) {
        for (let x in payload) {
            Vue.set(state, x, payload[x])
        }
    },
    setEditorMode(state, payload) {
        state.editor_mode = payload
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

        MarketplaceProtocol.ethereum.modules.marketplace.createProduct({
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
    setSimulatorMode(state, payload) {
        state.simulator_mode = payload
    },
    async deployContract(state, payload) {
        if (!state.ethereum[state.current_ethereum_network].contracts[payload.contractName]) {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName] = {
                created_at: null,
                address: null
            }
        }

        MarketplaceProtocol.ethereum.modules.marketplace.deployContract(payload.contractName, state.ethereum[state.current_ethereum_network].user_from_address).then((res) => {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].created_at = Date.now()
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].address = res._address

            db.marketplace.config.update(state)
            db.save()
        })

    }
}

