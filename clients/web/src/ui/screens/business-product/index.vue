<template>
    <c-business-layout>
        <div class="row">

            <div class="col-md-12" v-if="successfulCreationMessage">
                <p class="alert alert-info">{{ successfulCreationMessage }}</p>
                <br /><br />
            </div>
            <div class="col-md-6">
                <div class="form-group row align-items-center" v-if="product.id">
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
                        <select class="form-control actionWithSelected" tabindex="-1" aria-hidden="true" v-model="product.type">
                            <option></option>
                            <option value="game">Game</option>
                            <option value="app">App</option>
                            <option value="tool">Tool</option>
                        </select>
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

            </div>
            <div class="col-12">
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
                                <input type="text" class="form-control" placeholder="" v-model="product.developerId">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        
                        <c-button @click="transferOwnership">Transfer</c-button>

                    </div>
                </div>
            </div>
                
            <div class="col-12">
                <c-heading-bar-color class="mt-4 mb-4" colorCode="#444" textAlign="center" hidden>Advanced Options</c-heading-bar-color>

                <div @click="toggleAdvanced">
                    <i class="mr-2 fas" :class="advanced ? 'fa-angle-up' : 'fa-angle-down'"></i>
                    {{ advanced ? 'Hide' : 'Show' }} Advanced
                </div>
            </div>
            
            <div class="col-md-12" v-if="advanced">
                <div class="form-group row" style="text-align: center">
                    <br />
                    <h3 style="width: 100%">Raw Data Editor</h3>
                    <br /><br />
                    <textarea :value="JSON.stringify(product)" @input="updateProductRaw($event.target.value)" rows="10" cols="50"></textarea>
                    <br /><br />
                    <span class="form-text"></span>
                    <c-json-editor :objData="product" v-model="product" style="margin: 0 auto"></c-json-editor>
                </div>
            </div>

        </div>

        <template slot="menu">
            <div class="row">
                <div class="col-12 text-right" v-if="product.id">
                    <c-button status="success" @click="save" icon="save">
                        Save
                    </c-button>
                </div>
                <div class="col-12 text-right" v-if="!product.id">
                    <c-button status="success" size="md" @click="create" icon="plus">
                        Create
                    </c-button>
                </div>
            </div>
        </template>
    </c-business-layout>
</template>

<script>
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    export default {
        props: {
            id: [String, Number]
        },
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve),
            'c-html-editor': (resolve) => require(['@/ui/components/html-editor'], resolve),
            'c-json-editor': (resolve) => require(['@/ui/components/json-editor'], resolve),
            'c-multiselect': (resolve) => require(['vue-multiselect'], resolve),
        },
        data() {
            let product = this.id === 'new' ? this.$store.state.marketplace.defaultProduct : this.$store.getters['products/get'](this.id)

            if (!product) {
                product = this.$store.state.marketplace.defaultProduct
            }

            return {
                product: product,
                loadingState: true,
                notice: "",
                advanced: false,
                blockchain: false,
                tagOptions: [],
                creating: this.id === 'new',
                successfulCreationMessage: false
            }
        },
        computed: {
            originalProduct() {
                return this.id === 'new' ? this.$store.state.marketplace.defaultProduct : this.$store.getters['products/get'](this.id)
            },
        },
        watch: {
            originalProduct() {
                this.product = { ...this.product, ...this.originalProduct }
            }
        },
        created() {
            if (this.id !== 'new') {
                this.$store.dispatch('products/find', {
                    query: {
                        id: Number(this.id),
                        $eager: 'tags',
                    }
                })
            }
        },
        methods: {
            updateProductRaw(product) {
                this.product = JSON.parse(product)
            },
            toggleAdvanced() {
                this.advanced = !this.advanced
            },
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

                        await marketplaceStorage.setDeveloperOwnsProduct(product.developerId, product.id, true, { from: profile.address })
                        await marketplaceStorage.pushDeveloperOwnedProduct(product.developerId, product.id, { from: profile.address })

                        await marketplaceStorage.setProductDeveloper(product.id, product.developer, { from: profile.address })
                        await marketplaceStorage.setProductDeveloperId(product.id, product.developerId, { from: profile.address })

                        resolve(product)
                    })
                }

                const cmd = {
                    code: run.toString(),
                    params: {
                        profile: this.$store.state.application.activeProfile,
                        product: this.product
                    }
                }

                window.BlockHub.Bridge.sendCommand('eval', cmd).then((productResult) => {
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
                        profile: this.$store.state.application.activeProfile,
                        product: this.product
                    }
                }

                window.BlockHub.Bridge.sendCommand('eval', cmd).then((productResult) => {
                    if (productResult.id) {
                        this.successfulCreationMessage = "Product status has been updated"
                    }
                })
            },
            create() {
                this.product.ownerId = this.$store.state.application.activeProfile.id

                this.$store.dispatch('products/create', this.product).then((res) => {
                    this.product.id = res.id
                    this.notice = "Congratulations, your product has been created!"

                    this.$router.push('/business/product/' + this.product.id)
                })

            },
            save() {
                this.$store.dispatch('products/update', [this.product.id, this.product, {
                    query: {
                        $eager: 'tags'
                    }
                }]).then(() => {
                    this.notice = "Product has been saved."
                    //this.product.id = productResult.id
                    //this.successfulCreationMessage = "Congratulations, your product has been created!"

                    //this.$router.push('/business/product/' + this.product.id)
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

<style lang="scss">
.note-editor.note-frame .note-editing-area .note-editable {
    background: #30314d !important;
    color: #fff;
}
</style>
