import Vue from 'vue'
import * as DB from '../../db'

let localState = {}

export const state = () => localState

const updateState = (savedData, updatedState = {}) => {
    localState = {
        ...localState,
        ...savedData,
        ...updatedState
    }
}

const sortDir = (dir, asc) => asc ? dir : dir * -1

export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Marketplace] Initializing...')

        updateState(DB.store.data[0].marketplace, store.state)

        store.commit('updateState', localState)
    },
    updateState(store, payload) {
        // console.log("[BlockHub][Marketplace] Updating store...")

        updateState(store.state, payload)

        store.commit('updateState', localState)
    },
    initEthereum(store, payload) {
        // Bridge.initProtocol({ protocolName: 'marketplace' }).then((config) => {
        //     store.state.ethereum[store.state.currentEthereumNetwork] = config
        //     store.dispatch('updateState')
        // })
    },
    submitProductForReviewRequest(store, payload) {
        // payload = name, version, category, files, checksum, permissions

        // MarketplaceProtocol.Ethereum.Models.Marketplace.submitAppForReview(payload).then(res => {
        //     const product = DB.marketplace.products.findOne({ 'name': product.name })
        //     product.id = res[0]
        //     // TODO: assign rest of props

        //     store.commit('submitProductForReviewResponse', product)
        // })
    },
    addToCollection({ commit }, payload) {
        commit('activeCollectionModal', payload)
        commit('application/activateModal', 'collection-add', { root: true })
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

                        // TODO: feathers stuff
                        // product.$loki = undefined
                        // product.id = res.args.productId.toNumber()

                        // try {
                        //     DB.marketplace.products.insert(product)
                        //     console.log('after', product.id)
                        // } catch (e) {
                        //     try {
                        //         DB.marketplace.products.update(product)
                        //     } catch (e) {
                        //         reject(e)
                        //     }
                        // }

                        // DB.save()

                        // Bridge.sendCommand('updateState', {
                        //     module: 'marketplace',
                        //     state: {
                        //         products: DB.marketplace.products.data
                        //     }
                        // })

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
