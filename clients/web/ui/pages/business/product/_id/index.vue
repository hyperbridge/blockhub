<template>
    <c-layout>
        <div class="row">
            <div
                v-if="successfulCreationMessage"
                class="col-md-12">
                <p class="alert alert-info">
                    {{ successfulCreationMessage }}
                </p>
                <br><br>
            </div>
            <div class="col-md-6">
                <div
                    v-if="product.id"
                    class="form-group row align-items-center">
                    <label class="col-sm-3">
                        <label>Change Status</label>
                    </label>
                    <div class="col-sm-9">
                        <select
                            v-model="product.status"
                            name="change_status"
                            class="form-control"
                            @change="updateStatus">
                            <option
                                value=""
                                selected>
                                Choose Status
                            </option>
                            <option value="0">
                                Inactive
                            </option>
                            <option value="1">
                                Draft
                            </option>
                            <option value="2">
                                Pending
                            </option>
                            <option value="3">
                                Published
                            </option>
                            <option value="4">
                                Rejected
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <label class="col-sm-3">
                        <label>Title</label>
                    </label>
                    <div class="col-sm-9">
                        <input
                            v-model="product.name"
                            type="text"
                            class="form-control"
                            placeholder="">
                        <span class="form-text" />
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <label class="col-sm-3">
                        <label>Type</label>
                    </label>
                    <div class="col-sm-9">
                        <select
                            v-model="product.type"
                            class="form-control actionWithSelected"
                            tabindex="-1"
                            aria-hidden="true">
                            <option />
                            <option value="game">
                                Game
                            </option>
                            <option value="app">
                                App
                            </option>
                            <option value="tool">
                                Tool
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <label class="col-sm-3">
                        <label>Description</label>
                    </label>
                    <div class="col-sm-9">
                        <input
                            v-model="product.description"
                            type="text"
                            class="form-control"
                            placeholder="">
                        <span class="form-text" />
                    </div>
                </div>
                <div class="form-group row align-items-center">
                    <label class="col-sm-3">
                        <label>Content</label>
                    </label>
                    <div class="col-sm-9">
                        <textarea
                            v-model="product.content"
                            class="form-control" />

                        <span class="form-text" />
                    </div>
                </div>
            </div>
            <div class="col-md-6" />
            <div class="col-12">
                <div
                    v-if="product.id"
                    class="row">
                    <div class="col-6">
                        Ownership
                    </div>
                    <div class="col-6">
                        Owned by address: {{ product.developer }}<br>
                        Created by Developer ID: {{ product.developerId }}
                    </div>
                    <div class="col-12">
                        <h3>Transfer Ownership</h3>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Developer Address</label>
                            </label>
                            <div class="col-sm-9">
                                <input
                                    v-model="product.developer"
                                    type="text"
                                    class="form-control"
                                    placeholder="">
                                <span class="form-text" />
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <label class="col-sm-3">
                                <label>Developer ID</label>
                            </label>
                            <div class="col-sm-9">
                                <input
                                    v-model="product.developerId"
                                    type="text"
                                    class="form-control"
                                    placeholder="">
                                <span class="form-text" />
                            </div>
                        </div>

                        <c-button @click="transferOwnership">
                            Transfer
                        </c-button>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <c-heading-bar-color
                    class="mt-4 mb-4"
                    colorCode="#444"
                    textAlign="center"
                    hidden>
                    Advanced Options
                </c-heading-bar-color>

                <div @click="toggleAdvanced">
                    <i
                        class="mr-2 fas"
                        :class="advanced ? 'fa-angle-up' : 'fa-angle-down'" />
                    {{ advanced ? 'Hide' : 'Show' }} Advanced
                </div>
            </div>

            <div
                v-if="advanced"
                class="col-md-12">
                <div
                    class="form-group row"
                    style="text-align: center">
                    <br>
                    <h3 style="width: 100%">
                        Raw Data Editor
                    </h3>
                    <br><br>
                    <textarea
                        :value="JSON.stringify(product)"
                        rows="10"
                        cols="50"
                        @input="updateProductRaw($event.target.value)" />
                    <br><br>
                    <span class="form-text" />
                    <c-json-editor
                        v-model="product"
                        :objData="product"
                        style="margin: 0 auto" />
                </div>
            </div>

            <div class="col-md-12 margin-top-20">
                <c-button
                    status="second-info"
                    size="lg"
                    class="mb-4"
                    @click="$store.commit('application/activeModal', 'import-product')">
                    Import
                </c-button>
            </div>
        </div>

        <template slot="menu">
            <div class="row">
                <div
                    v-if="product.id && $can('editProducts')"
                    class="col-12 text-right">
                    <c-button
                        status="success"
                        size="lg"
                        icon="save"
                        @click="save">
                        Save
                    </c-button>
                </div>
                <div
                    v-if="!product.id"
                    class="col-12 text-right">
                    <c-button
                        status="success"
                        size="lg"
                        icon="plus"
                        @click="create">
                        Create
                    </c-button>
                </div>
            </div>
        </template>

        <c-basic-popup
            :activated="$store.state.application.activeModal === 'import-product'"
            @close="$store.commit('application/activeModal', null)">
            <div
                slot="header"
                class="h4"
                style="text-align: left">
                Import Product
            </div>
            <template slot="body">
                <div v-if="importStep === 1">
                    <h3 class="margin-auto">
                        Choose source:
                    </h3>
                    <br>
                    <div class="row justify-content-center margin-bottom-50">
                        <div class="col-12 col-md-4 col-lg-3">
                            <c-topic-item
                                size="lg"
                                icon="users"
                                class="padding-10"
                                @click="nextImportStep">
                                BlockHub
                            </c-topic-item>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <c-topic-item
                                icon="users"
                                size="lg"
                                class="padding-10"
                                @click="nextImportStep">
                                GOG
                            </c-topic-item>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <c-topic-item
                                icon="users"
                                size="lg"
                                class="padding-10"
                                @click="nextImportStep">
                                Itch
                            </c-topic-item>
                        </div>
                    </div>
                    <br>
                </div>
                <div v-if="importStep === 2">
                    <h3 class="margin-auto">
                        Enter URL:
                    </h3>
                    <br>
                    <div class="form-group row">
                        <div class="col-12">
                            <input
                                ref="importUrl"
                                class="form-control"
                                type="text"
                                value="https://store.steampowered.com/app/441830/I_am_Setsuna/">
                            <span class="form-text">Example: https://store.steampowered.com/app/441830/I_am_Setsuna/</span>
                        </div>
                    </div>

                    <c-button
                        class="c-button--lg outline-white margin-top-20 margin-auto"
                        @click="startImport">
                        GO
                    </c-button>
                </div>
                <br>
                <div
                    v-if="importing"
                    class="padding-40 loading-process"
                    style="position: relative">
                    <div class="loading loading--w-spinner">
                        <div><div class="loading-spinner" /></div>
                    </div>
                </div>
            </template>
            <p
                slot="footer"
                class="margin-top-20">
                <c-button
                    status="dark"
                    to="/help">
                    Need help? Check the Help Center
                </c-button>
            </p>
        </c-basic-popup>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/business-layout').then(m => m.default || m),
        'c-html-editor': () => import('~/components/html-editor').then(m => m.default || m),
        'c-json-editor': () => import('~/components/json-editor').then(m => m.default || m),
        'c-basic-popup': () => import('~/components/popups/basic').then(m => m.default || m),
        'c-multiselect': () => import('vue-multiselect').then(m => m.default || m)
    },
    props: {
        id: [String, Number]
    },
    data() {
        let product = this.id === 'new' ? this.$store.state.marketplace.defaultProduct : this.$store.getters['products/get'](this.id)

        if (!product) {
            product = this.$store.state.marketplace.defaultProduct
        }

        return {
            product,
            loadingState: true,
            importStep: 1,
            notice: '',
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
        }
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
                    $eager: 'tags'
                }
            })
        }
    },
    mounted() {
    },
    methods: {
        nextImportStep() {
            if (this.importStep === 1) {
                this.importStep = 2
            } else if (this.importStep === 2) {

            }
        },
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

            this.$desktop.sendCommand('eval', cmd).then(productResult => {
                if (productResult.id) {
                    this.successfulCreationMessage = 'Product ownership has been changed'
                }
            })
        },
        async startImport() {
            if (!this.$store.state.application.desktopMode) {
                this.$blockhub.Notification.error('Desktop app required', 'Error')
                return
            }

            const onWindowLoad = `function onWindowLoad(requestId) {
                    const script = document.createElement('script');
                    script.src = 'https://code.jquery.com/jquery-2.2.4.min.js';
                    script.type = 'text/javascript';

                    script.onload = script.onreadystatechange = function () {
                        const monitor = function() {
                            try {
                                if (!$('.game_area_description').length) return setTimeout(monitor, 500);

                                const fetchers = {
                                    steam: () => {
                                        return {
                                            title: $('.apphub_AppName').text().trim(),
                                            description: $('.game_description_snippet').text().trim(),
                                            about: $('#game_area_description').html().trim(),
                                            developers: Object.values($('#developers_list a').map((i, el) => $(el).text().trim()).get()),
                                            publishers: Object.values($('#developers_list').parent().next().find('a').map((i, el) => $(el).text().trim()).get()),
                                            tags: Object.values($('.popular_tags a').map((i, el) => $(el).text().trim()).get()),
                                            releaseDate: $('.releaseDate .date').text().trim(),
                                            images: {
                                                preview: Object.values($('.highlight_strip_item.highlight_strip_screenshot').map((i, el) => $(el).find('img').attr('src')).get())
                                            },
                                            videos: Object.values($('.highlight_strip_item.highlight_strip_movie').map((i, el) => ({
                                                preview: $(el).find('img').attr('src'),
                                                url: 'https://cdn.hyperbridge.org/blockhub/videos/products/doom-20087/trailer.mp4'
                                            })).get())
                                        }
                                    },
                                    gog: () => {

                                    },
                                    itch: () => {

                                    }
                                };

                                let fetcherType = null;

                                if (window.location.hostname.indexOf('steampowered.com'))
                                    fetcherType = 'steam';
                                else if (window.location.hostname.indexOf('gog.com'))
                                    fetcherType = 'gog';
                                else if (window.location.hostname.indexOf('itch.io'))
                                    fetcherType = 'itch';
                                else {
                                    // fail
                                }

                                const fetcher = fetchers[fetcherType];

                                const cmd = {
                                    key: 'resolveCallback',
                                    responseId: requestId,
                                    data: fetcher()
                                };

                                window.ipcRenderer.send('command', JSON.stringify(cmd));
                            }
                            catch (e) {
                                const cmd = {
                                    key: 'resolveCallback',
                                    responseId: requestId,
                                    data: {
                                        error: true,
                                        message: 'Error in script: ' + e
                                    }
                                };

                                window.ipcRenderer.send('command', JSON.stringify(cmd));
                            }
                        }

                        monitor();
                    };

                    document.body.appendChild(script);
                }`

            const data = await this.$desktop.sendCommand('fetchPageDataRequest', {
                url: this.$refs.importUrl.value,
                script: onWindowLoad
            })

            if (data.error) {
                console.log(data.message)
                return
            }

            console.log('Import response: ', data)

            this.product.name = data.title
            this.product.value = data.value
            this.product.tags = [{ key: 'imported', value: 'Imported' }]
            this.product.meta = {}
            this.product.meta.type = 'game'
            // this.product.meta.rating.overall = 0
            this.product.meta.developerTags = data.tags
            this.product.meta.releaseDate = data.releaseDate
            this.product.meta.description = data.description
            this.product.meta.genre = ''
            this.product.meta.developer = data.developers && data.developers[0]
            this.product.meta.publisher = data.publishers && data.publishers[0]

            this.$store.commit('application/activeModal', null)
        },
        async updateStatus() {
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

            const productResult = await this.$desktop.sendCommand('eval', cmd)
            if (productResult.id) {
                this.successfulCreationMessage = 'Product status has been updated'
            }
        },
        async create() {
            this.product.type = 'game'
            this.product.ownerId = this.$store.state.application.activeProfile.id

            const res = await this.$store.dispatch('products/create', this.product)
        
            this.product.id = res.id
            this.notice = 'Congratulations, your product has been created!'

            this.$router.push(`/business/product/${this.product.id}`)
        },
        async save() {
            this.product.type = 'game'
            this.product.ownerId = this.$store.state.application.activeProfile.id

            await this.$store.dispatch('products/update', [this.product.id, this.product, {
                query: {
                    $eager: 'tags'
                }
            }])

            this.notice = 'Product has been saved.'
            // this.product.id = productResult.id
            // this.successfulCreationMessage = "Congratulations, your product has been created!"

            // this.$router.push('/business/product/' + this.product.id)
        }
    }
}
</script>

<style lang="scss">
.note-editor.note-frame .note-editing-area .note-editable {
    background: #30314d !important;
    color: #fff;
}
</style>
