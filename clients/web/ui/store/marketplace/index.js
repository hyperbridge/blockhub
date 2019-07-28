import Vue from 'vue'
import * as DB from '../../db'

export const state = () => ({
    currentEthereumNetwork: 'local',
    selectedProduct: null,
    firstProduct: true,
    frontpageProduct: {},
    productNews: [],
    newProducts: [],
    saleProducts: [],
    upcomingProducts: [],
    topSellingProducts: [],
    specialProducts: [],
    assets: [],
    products: [],
    posts: [],
    gameSeries: [],
    collections: [],
    curatorReviews: [],
    featuredProducts: [],
    trendingProducts: [],
    topFree: [],
    top5: [],
    defaultRealm: {},
    defaultIdea: {},
    defaultProduct: {},
    help: {
        topics: [
            {
                id: 0,
                slug: 'general',
                label: 'General Platform Features',
                icon: 'cogs',
                subTopics: [
                    {
                        id: 0,
                        slug: 'common-runtime',
                        label: 'Common runtime',
                        icon: 'lock'
                    },
                    {
                        id: 1,
                        slug: 'add-ons',
                        label: 'Add-ons',
                        icon: 'desktop'
                    },
                    {
                        id: 2,
                        slug: 'builds',
                        label: 'Builds',
                        icon: 'cubes'
                    },
                    {
                        id: 3,
                        slug: 'limits',
                        label: 'Limits',
                        icon: 'sliders-h'
                    }
                ],
                articles: [
                ]
            },
            {
                id: 1,
                slug: 'running-applications',
                label: 'Running applications',
                icon: 'play',
                articles: [
                    '1',
                    '6'
                ]
            },
            {
                id: 2,
                slug: 'account-management',
                label: 'Account Management',
                icon: 'user',
                articles: [
                    '1',
                    '2',
                    '6',
                    '5'
                ]
            },
            {
                id: 3,
                slug: 'security',
                label: 'Security',
                icon: 'lock'
            },
            {
                id: 4,
                slug: 'billing-and-payments',
                label: 'Billing & Payments',
                icon: 'credit-card'
            },
            {
                id: 5,
                slug: 'connect',
                label: 'Connect',
                icon: 'globe'
            },
            {
                id: 6,
                slug: 'tools',
                label: 'Tools',
                icon: 'window-restore'
            }
        ],
        articles: [
        ]
    },
    community: []
})

const sortDir = (dir, asc) => asc ? dir : dir * -1

export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Marketplace] Initializing...')
    },
    updateState(store, payload) {
        // console.log("[BlockHub][Marketplace] Updating store...")

        store.commit('updateState', payload)
    },
    submitProductForReviewRequest(store, payload) {
        // payload = name, version, category, files, checksum, permissions

        // MarketplaceProtocol.Ethereum.Models.Marketplace.submitAppForReview(payload).then(res => {
        //     const product = DB.marketplace.products.findOne({ 'value': product.name })
        //     product.id = res[0]
        //     // TODO: assign rest of props

        //     store.commit('submitProductForReviewResponse', product)
        // })
    },
    addToCollection({ commit }, payload) {
        commit('activeCollectionModal', payload)
        commit('application/activeModal', 'addCollection', { root: true })
    }
}

export const mutations = {
    updateState(state, payload) {
        for (const x in payload) {
            Vue.set(state, x, payload[x])
        }
    },
    update(state, { prop = 'products', id, data }) {
        state[prop][id] = { ...state[prop][id], ...data }
    },
    activeCollectionModal(state, payload) {
        state.activeCollectionModal = payload
    },
    syncProductBlockchain(store, payload) {
        if (payload.meta.blockchainId) {
            const run = function(
                local,
                DB,
                Bridge,
                FundingAPI,
                MarketplaceAPI,
                TokenAPI,
                ReserveAPI,
                BABEL_PROMISE,
                BABEL_GENERATOR,
                BABEL_REGENERATOR,
                params
            ) {
                const { product, profile } = params

                return new Promise(async (resolve, reject) => {
                    const productRegistrationContract = MarketplaceAPI.api.ethereum.state.contracts.ProductRegistration.deployed

                    await productRegistrationContract.editProductInfo(
                        product.id,
                        product.name,
                        product.type,
                        product.content,
                        { from: profile.address }
                    )

                    resolve(product)
                })
            }

            const cmd = {
                code: run.toString(),
                params: {
                    profile: BlockHub.store.state.application.activeProfile,
                    product: this.product
                }
            }

            this.$desktop.sendCommand('eval', cmd).then(productResult => {
                if (productResult.id) {
                    // this.successfulCreationMessage = "Product has been saved"
                }
            })
        } else {
            const run = function(
                local,
                DB,
                Bridge,
                FundingAPI,
                MarketplaceAPI,
                TokenAPI,
                ReserveAPI,
                BABEL_PROMISE,
                BABEL_GENERATOR,
                BABEL_REGENERATOR,
                params
            ) {
                const { product, profile } = params

                return new Promise(async (resolve, reject) => {
                    const productRegistrationContract = MarketplaceAPI.api.ethereum.state.contracts.ProductRegistration.deployed

                    if (!productRegistrationContract) { return reject('Contract not setup') }

                    let created = false

                    const watcher = productRegistrationContract.ProductCreated().watch((err, res) => {
                        if (created) return

                        created = true

                        if (err) {
                            console.warn('[BlockHub][Marketplace] Error', err)

                            return reject(err)
                        }

                        console.log('Product created')

                        resolve(product)
                    })

                    await productRegistrationContract.createProduct(
                        product.name,
                        product.type,
                        product.content,
                        { from: profile.address }
                    )

                    watcher.stopWatching(() => {
                        // Must be async or tries to launch nasty process
                    })
                })
            }

            const cmd = {
                code: run.toString(),
                params: {
                    profile: BlockHub.store.state.application.activeProfile,
                    product: payload
                }
            }

            this.$desktop.sendCommand('eval', cmd).then(productResult => {
                if (productResult.id) {
                    // payload.meta.blockchainId = productResult.id
                    // this.successfulCreationMessage = "Congratulations, your product has been synced!"

                    // store.state.products[this.product.id] = payload
                    BlockHub.store.state.products.keyedById[payload.id].meta.blockchainId = productResult.id

                    // BlockHub.router.push('/business/product/' + this.product.id)
                }
            })
        }
    }
}
