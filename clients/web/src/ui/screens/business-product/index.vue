<template>
    <!--<c-business-layout title="Product Creation">-->
        <div>

            <div class="container-fluid">

                <div class="row">

                    <div class="col-md-12" v-if="successfulCreationMessage">
                        <p class="alert alert-info">{{ successfulCreationMessage }}</p>
                        <br /><br />
                    </div>
                    <div class="col-md-6">
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Change Status</label>
                            </label>
                            <div class="col-sm-9">
                                <select name="change_status" class="form-control" v-model="product.status" @change="updateStatus">
                                    <option value="" selected>Choose Status</option>
                                    <option value="0">Inactive</option>
                                    <option value="1">Draft</option>
                                    <option value="2">Pending</option>
                                    <option value="3">Published</option>
                                    <option value="4">Rejected</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Title</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.name">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Type</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.type">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Description</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.description">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Content</label>
                            </label>
                            <div class="col-sm-9">
                                <textarea class="form-control" v-model="product.content">

                                </textarea>

                                <span class="form-text"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">

          <!-- "name": "My Product Name",
          "images": {
            "header": "https://picsum.photos/2000/300/?random",
            "medium_tile": "https://picsum.photos/200/300/?random",
            "main": "https://picsum.photos/200/300/?image=3",
            "preview": [
              "https://picsum.photos/200/300/?image=0",
              "https://picsum.photos/200/300/?image=1",
              "https://picsum.photos/200/300/?image=2"
            ]
          },
          "type": "game",
          "downloads": 20,
          "price": 0,
          "old_price": 0,
          "system_tags": [ "game", "new" ],
          "author": "0x0",
          "developer_tags": [ "adventure" ],
          "plans": [
            { "title": "Play Now", "link": "#3" },
            { "title": "3 Month Subscription", "price": "12.95", "link": "" },
            { "title": "1 Year Subscription", "price": "120.95", "link": "" }
          ],
          "meta": { "revision": 0, "created": 1542265778146, "version": 0 },
          "content": "<h2>An adventure of a lifetime...</h2>\n<p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p><p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p> IMAGE LIST",
          "frequently_traded_assets": [],
          "rating": [
            { "name": "Game", "number": 0 },
            { "name": "Developer", "number": 0 },
            { "name": "Market", "number": 0 }
          ],
          "assets": [],
          "community": { "discussions": [ { "name": "Example Discussion", "count": "0", "link": "" } ] },
          "system_requirements": [
            {
              "system": "Microsoft Windows",
              "requirements": "8GB storage space,\n4GB RAM, GTX 1050, or equivalent",
              "icon": "fab fa-windows"
            },
            {
              "system": "Linux/Debian",
              "requirements": "8GB storage space,\n4GB RAM, GTX 1050, or equivalent",
              "icon": "fab fa-linux"
            },
            {
              "system": "MacOS",
              "requirements": "macOS Hight Sierra,\n8GB storage space,\n8GB RAM, GTX 1050, or equivalent",
              "icon": "fab fa-apple"
            }
          ],
          "language_support": [ { "name": "English", "closed_captioning": true, "audio_description": true } ],
          "$loki": 1,
          "id": 8 -->
                    </div>
                </div>

                <div class="row" v-if="product.id">
                    <div class="col-6">
                        Ownership
                    </div>
                    <div class="col-6">
                        Owned by address: {{ product.developer }}<br />
                        Created by Developer ID: {{ product.developerId }}
                    </div>
                    <div class="col-12">
                        <h3>Transfer Ownership</h3>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Developer Address</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.developer">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Developer ID</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.developer_id">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        
                        <c-button @click="transferOwnership">Transfer</c-button>

                    </div>
                </div>

                <div class="row">
                    <div class="col-12 text-right" v-if="product.id">
                        <c-button status="success" @click.prevent="save" icon="save">
                            Save
                        </c-button>
                    </div>
                    <div class="col-12 text-right" v-if="!product.id">
                        <c-button status="success" @click.prevent="create" icon="plus">
                            Create
                        </c-button>
                    </div>
                </div>
            </div>
        </div>
    <!--</c-business-layout>-->
</template>

<script>
    export default {
        props: {
            id: [String, Number]
        },
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve)
        },
        data() {
            return {
                loadingState: true,
                creating: this.id === 'new',
                successfulCreationMessage: false
            }
        },
        computed: {
            marketplace() {
                return this.$store.state.marketplace
            },
            product() {
                return this.id === 'new' ? this.marketplace.default_product : this.marketplace.products.find(p => p.id == this.id)
            },
        },
        methods: {
            transferOwnership() {

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
                        const marketplaceStorageContract = MarketplaceAPI.api.ethereum.state.contracts.MarketplaceStorage.deployed

                        await marketplaceStorage.setDeveloperOwnsProduct(product.developer_id, product.id, true, { from: profile.address })
                        await marketplaceStorage.pushDeveloperOwnedProduct(product.developer_id, product.id, { from: profile.address })

                        await marketplaceStorage.setProductDeveloper(product.id, product.developer, { from: profile.address })
                        await marketplaceStorage.setProductDeveloperId(product.id, product.developer_id, { from: profile.address })

                        resolve(product)
                    })
                }

                const cmd = {
                    code: run.toString(),
                    params: {
                        profile: this.$store.state.application.account.activeProfile,
                        product: this.product
                    }
                }

                BlockHub.Bridge.sendCommand('eval', cmd).then((productResult) => {
                    if (productResult.id) {
                        this.successfulCreationMessage = "Product ownership has been changed"
                    }
                })
            },
            updateStatus() {

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
                        const marketplaceStorageContract = MarketplaceAPI.api.ethereum.state.contracts.MarketplaceStorage.deployed

                        await marketplaceStorageContract.setProductStatus(
                            productId, 
                            Number(product.status),
                            { from: profile.address }
                        )

                        resolve(product)
                    })
                }

                const cmd = {
                    code: run.toString(),
                    params: {
                        profile: this.$store.state.application.account.activeProfile,
                        product: this.product
                    }
                }

                BlockHub.Bridge.sendCommand('eval', cmd).then((productResult) => {
                    if (productResult.id) {
                        this.successfulCreationMessage = "Product status has been updated"
                    }
                })
            },
            create() {

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

                        let created = false

                        const watcher = productRegistrationContract.ProductCreated().watch((err, res) => {
                            if (created) return

                            created = true

                            if (err) {
                                console.warn('[BlockHub][Marketplace] Error', err)

                                return reject(err)
                            }

                            product.$loki = undefined
                            product.id = res.args.productId.toNumber()

                            try {
                                DB.marketplace.products.insert(product)
                                console.log('after', product.id)
                            } catch (e) {
                                try {
                                    DB.marketplace.products.update(product)
                                } catch (e) {
                                    reject(e)
                                }
                            }

                            DB.save()

                            Bridge.sendCommand('updateState', {
                                module: 'marketplace',
                                state: {
                                    products: DB.marketplace.products.data
                                }
                            })

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
                        profile: this.$store.state.application.account.activeProfile,
                        product: this.product
                    }
                }

                BlockHub.Bridge.sendCommand('eval', cmd).then((productResult) => {
                    if (productResult.id) {
                        this.product.id = productResult.id
                        this.successfulCreationMessage = "Congratulations, your product has been created!"

                        this.marketplace.products[this.product.id] = this.product

                        this.$router.push('/business/product/' + this.product.id)
                    }
                })

            },
            save() {
                
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
                        profile: this.$store.state.application.account.activeProfile,
                        product: this.product
                    }
                }

                BlockHub.Bridge.sendCommand('eval', cmd).then((productResult) => {
                    if (productResult.id) {
                        this.successfulCreationMessage = "Product has been saved"
                    }
                })

            }
        },
        mounted() {
            this.$nextTick(() => {
                this.loadingState = false
                document.getElementById('startup-loader').style.display = 'none'
            })
        },
    }
</script>

<style lang="scss" scoped>
</style>
