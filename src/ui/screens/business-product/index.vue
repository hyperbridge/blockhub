<template>
    <c-business-layout>
        <div>
            <!-- PAGE HEADING -->
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Product Creation</h1>
                    <p class="caption"></p>
                </div>

                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/#/business">Dashboard</a></li>
                        <li class="breadcrumb-item active">Product</li>
                    </ol>
                </nav>
            </div>
            <!-- //END PAGE HEADING -->

            <div class="container-fluid">

                <div class="row">

                    <div class="col-2 offset-10" v-if="product.id">
                        <a :href="`/#/product/${product.id}`" class="btn btn-primary">PREVIEW</a>
                    </div>

                    <div class="col-md-12" v-if="successfulCreationMessage">
                        <p class="alert alert-info">{{ successfulCreationMessage }}</p>
                        <br /><br />
                    </div>
                    <div class="col-md-6">
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
                                <label>Title</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.name">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
                                <label>Type</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.type">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
                                <label>Description</label>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="" v-model="product.description">
                                <span class="form-text"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="switch switch-sm col-sm-3">
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
                </div>

                <div class="row">
                    <div class="col-2 offset-10" v-if="product.id">
                        <a href="#" target="_blank" class="btn btn-primary" @click.prevent="save">SAVE</a>
                    </div>
                    <div class="col-2 offset-10" v-if="!product.id">
                        <a href="#" target="_blank" class="btn btn-primary" @click.prevent="create">CREATE</a>
                    </div>
                </div>
            </div>
        </div>
    </c-business-layout>
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
                return this.id === 'new' ? this.marketplace.default_product : this.marketplace.products[this.id]
            },
        },
        methods: {
            create() {

                const run = function(
                    local, 
                    DB, 
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

                            console.log('Product created')

                            resolve(product)
                        })

                        // product.name = 'test'
                        // product.type = 'game'
                        // product.content = 'test'

                        await productRegistrationContract.createProduct(
                            product.name,
                            product.type,
                            product.content,
                            { from: profile.public_address }
                        )

                        watcher.stopWatching(() => {
                            // Must be async or tries to launch nasty process
                        })
                    })
                }

                const cmd = {
                    code: run.toString(),
                    params: {
                        profile: this.$store.state.application.account.current_identity,
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
