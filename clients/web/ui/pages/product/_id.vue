<template>
    <Layout
        navigationKey="product"
        :showRightPanel="false"
        navigationTitle="GAME OVERVIEW"
        :breadcrumbLinks="breadcrumbLinks"
        :showBreadcrumbs="!editing"
        class="product-single-page">
        <Loading
            v-if="!product && loading"
            :enabled="loading"
            size="lg" />
        <div
            v-else-if="!product"
            class="row">
            <div class="col-12">
                Product not found
            </div>
        </div>
        <div
            v-else
            class="row">
            <div class="col-12 col-md-12">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="editor-container">
                            <div
                                v-if="editing"
                                class="editor">
                                <button
                                    v-if="!activeElement['name']"
                                    class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('name')">
                                    Change
                                    Product Name <span class="fa fa-edit" />
                                </button>

                                <div
                                    v-if="activeElement['name']"
                                    class="form-group">
                                    <div class="form-control-element form-control-element--right">
                                        <input
                                            ref="name"
                                            v-model="product.name"
                                            name="name"
                                            type="text"
                                            class="form-control"
                                            placeholder="Product name...">
                                        <div
                                            class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                            @click="deactivateElement('name')">
                                            <span class="fa fa-check" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h1 class="title margin-top-10 margin-bottom-15">
                                {{ product.name }}
                            </h1>
                        </div>

                        <div class="editor-container">
                            <div
                                v-if="editing"
                                class="">
                                <div class="form-group tag-editor">
                                    <Multiselect
                                        v-model="product.developerTags"
                                        class="dark-mode"
                                        :multiple="true"
                                        :taggable="true"
                                        :options="tagOptions" />
                                    <!--<select id="tag-editor" class="form-control" multiple="multiple">-->
                                        <!--<option v-for="(tag, index) in tagOptions" :key="index"-->
                                    <!--:selected="product.developerTags.includes(tag)">{{ tag }}-->
                                        <!--</option>-->
                                    <!--</select>-->
                                </div>
                            </div>
                            <Tags
                                v-if="!editing && product.developerTags"
                                :tags="product.developerTags" />
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div
                            v-if="editing"
                            class="editor">
                            <button
                                v-if="!activeElement['backgroundImage']"
                                class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                @click="activateElement('backgroundImage')">
                                Change Background Image <span
                                    class="fa fa-edit" />
                            </button>

                            <div
                                v-if="activeElement['backgroundImage']"
                                class="form-group">
                                <div class="form-control-element form-control-element--right">
                                    <input
                                        ref="backgroundImage"
                                        v-model="product.images.header"
                                        name="backgroundImage"
                                        type="text"
                                        class="form-control"
                                        placeholder="Background image URL...">
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        @click="deactivateElement('backgroundImage')">
                                        <span class="fa fa-check" />
                                    </div>
                                </div>
                            </div>

                            <br>
                            <label>RECOMMENDED SIZE: 1120 x 524px</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <Button
                            status="dark"
                            class="w-100 d-flex d-md-none justify-content-center my-4"
                            size="lg"
                            data-toggle="collapse"
                            data-target="#product_nav"
                            aria-expanded="false"
                            aria-controls="product_nav">
                            Menu
                        </Button>
                        <div
                            id="product_nav"
                            class="collapse show product_nav">
                            <ul class="nav nav-tabs margin-bottom-30 justify-content-between">
                                <li
                                    class="nav-item"
                                    @click="section='overview'">
                                    <nuxt-link
                                        :to="`/product/${id}`"
                                        class="nav-link"
                                        :class="{ 'active': section === 'overview' }">
                                        Overview
                                    </nuxt-link>
                                </li>
                                <li
                                    v-access="'community'"
                                    class="nav-item"
                                    @click="section='community'">
                                    <nuxt-link
                                        :to="`/product/${id}/community`"
                                        class="nav-link"
                                        :class="{ 'active': section === 'community' }">
                                        Community
                                    </nuxt-link>
                                </li>
                                <li
                                    class="nav-item"
                                    @click="section='projects'">
                                    <nuxt-link
                                        :to="`/product/${id}/projects`"
                                        class="nav-link"
                                        :class="{ 'active': section === 'projects' }">
                                        Crowdfunding
                                    </nuxt-link>
                                </li>
                                <li
                                    class="nav-item"
                                    @click="section='assets'">
                                    <nuxt-link
                                        :to="`/product/${id}/assets`"
                                        class="nav-link"
                                        :class="{ 'active': section === 'assets' }">
                                        Inventory
                                    </nuxt-link>
                                </li>
                                <li
                                    v-if="editing"
                                    class="nav-item">
                                    <a
                                        class="nav-link"
                                        :class="{ 'active': section === 'configure' }"
                                        @click="section='configure'">Configure</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        v-if="section === 'configure'"
                        class="col-12"
                        :editing="editing">
                        <Block title="Product">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label class="switch switch-sm col-sm-3">
                                            <label>Price</label>
                                        </label>
                                        <div class="col-sm-9">
                                            <input
                                                v-model="product.price"
                                                type="text"
                                                class="form-control"
                                                placeholder="Example: 10">
                                            <span class="form-text" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="switch switch-sm col-sm-3">
                                            <label>Old Price</label>
                                        </label>
                                        <div class="col-sm-9">
                                            <input
                                                v-model="product.oldPrice"
                                                type="text"
                                                class="form-control"
                                                placeholder="Example: 20">
                                            <span class="form-text" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-3">
                                            <label>Genre</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input
                                                v-model="product.genre"
                                                type="text"
                                                class="form-control"
                                                placeholder="Example: RPG">
                                            <span class="form-text" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-3">
                                            <label>Release Date</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input
                                                v-model="product.releaseDate"
                                                type="text"
                                                class="form-control"
                                                placeholder="Example: 12/30/2020">
                                            <span class="form-text" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-3">
                                            <label>Publisher</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input
                                                v-model="product.publisher"
                                                type="text"
                                                class="form-control"
                                                placeholder="Example: Actilizard Entertainment">
                                            <span class="form-text" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-3">
                                            <label>Developer</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <input
                                                v-model="product.developer"
                                                type="text"
                                                class="form-control"
                                                placeholder="Example: Northcap Studios">
                                            <span class="form-text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6" />
                            </div>
                        </Block>
                    </div>

                    <div class="col-12">
                        <nuxt-child :product="product" :editing="editing" />
                    </div>
                </div>
            </div>
        </div>

        <CustomModal
            v-if="firstProduct && editing && !$store.state.application.settings.client.hideProductIntroModal && false"
            title="Help Center"
            @close="closeModal">
            <div
                slot="body"
                class="help-modal__content"
                style="max-width: 500px">
                <h4 class="h2 mb-3">
                    Creating your first product?
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam elementum ac ligula nec viverra. Nunc molestie augue a erat ultrices fermentum.
                </p>
                <p>
                    Curabitur non bibendum erat. Praesent nec vestibulum odio, vel euismod enim. Sed at tincidunt risus.
                    Mauris ac facilisis metus. Proin venenatis neque posuere urna sagittis ultricies.
                </p>
                <p>
                    <Button
                        to="/help"
                        target="_blank">
                        Learn more about creating products
                    </Button>
                </p>
            </div>
            <div
                slot="footer"
                class="text-right w-100">
                <Button
                    size="md"
                    @click="closeModal">
                    Got it
                </Button>
            </div>
        </CustomModal>

        <BasicPopup
            :activated="$store.state.application.activeModal === 'syncBlockchain'"
            @close="$store.commit('application/activeModal', null)">
            <div
                slot="header"
                class="h4"
                style="text-align: left">
                Sync Blockchain
            </div>
            <template slot="body">
                <div v-if="syncStep === 1">
                    <h3 class="margin-auto">
                        <strong>Status:</strong> unsynced
                    </h3>
                    Contract Address: 0xasdadas<br>

                    <Button
                        class="Button--lg outline-white margin-top-20 margin-auto"
                        @click="startSync">
                        Start
                    </Button>
                </div>
                <div v-if="syncStep === 2" />
                <br>
                <div
                    v-if="syncing"
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
                <Button
                    status="dark"
                    to="/help">
                    Need help? Check the Help Center
                </Button>
            </p>
        </BasicPopup>

        <BasicPopup
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
                            <TopicItem
                                size="lg"
                                icon="users"
                                class="padding-10"
                                @click="nextImportStep">
                                BlockHub
                            </TopicItem>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <TopicItem
                                icon="users"
                                size="lg"
                                class="padding-10"
                                @click="nextImportStep">
                                GOG
                            </TopicItem>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <TopicItem
                                icon="users"
                                size="lg"
                                class="padding-10"
                                @click="nextImportStep">
                                Itch
                            </TopicItem>
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

                    <Button
                        class="Button--lg outline-white margin-top-20 margin-auto"
                        @click="startImport">
                        GO
                    </Button>
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
                <Button
                    status="dark"
                    to="/help">
                    Need help? Check the Help Center
                </Button>
            </p>
        </BasicPopup>
    </Layout>
</template>

<script>
import Vue from 'vue'

const groupBy = function(xs, key) {
    return xs.reduce((rv, x) => {
        if (!x[key]) return rv;
        (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
    }, {}) || null
}

export default {
    scrollToTop: true,
    components: {
        'BasicPopup': () => import('@ericmuyser/hyper-ui').then(m => m.BasicPopup),
        'TopicItem': () => import('@ericmuyser/hyper-ui').then(m => m.TopicItem),
        'Tags': () => import('@ericmuyser/hyper-ui').then(m => m.Tags),
        'CustomModal': () => import('@ericmuyser/hyper-ui').then(m => m.CustomModal),
        'Multiselect': () => import('vue-multiselect').then(m => m.default)
    },
    data() {
        return {
            section: 'overview',
            activeElement: {
                name: false,
                backgroundImage: false,
                tags: false
            },
            tagOptions: [
                'rpg',
                'adventure',
                'racing',
                'action'
            ],
            loading: true,
            syncing: false,
            syncStep: 1,
            importing: false,
            importStep: 1,
            savedState: false,
            value: null
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        // product() {
        //     let product = null

        //     if (this.id === 'new') {
        //         product = { ...this.$store.state.marketplace.defaultProduct }

        //         this.$store.state.application.developerMode = true
        //         this.$store.dispatch('application/setEditorMode', 'editing')
        //     }

        //     if (!product) {
        //         product = this.$store.getters['products/get'](this.id)
        //     }

        //     if (!product) {
        //         product = DB.marketplace.products.findOne({ 'id': Number(this.id) })
        //     }

        //     if (!product) {
        //         return
        //     }

        //     if (!product.tags) {
        //         product.tags = []
        //     }

        //     if (!product.developerTags) {
        //         product.developerTags = []
        //     }

        //     if (!product.meta) {
        //         product.meta = {}
        //     }

        //     if (!product.meta.community) {
        //         product.meta.community = {
        //             discussions: []
        //         }
        //     }

        //     if (product.meta.images && product.meta.images.preview && product.meta.images.preview.length) {
        //         /*
        //         TODO: Make header-bg accesible by $refs

        //         const header = window.document.getElementById('header-bg');
        //         const randomImage = Math.floor(Math.random() * product.meta.images.preview.length);
        //         header.style['background-image'] = 'url(' + product.meta.images.preview[randomImage] + ')';
        //         header.style['background-size'] = 'cover';
        //         */
        //     }

        //     if (product.meta.promotions) {
        //         this.promotionSections = groupBy(product.meta.promotions, 'section')
        //     }

        //     return product
        // },
        editorMode() {
            return this.$store.state.application.editorMode
        },
        nextImportStep() {
            if (this.importStep === 1) {
                this.importStep = 2
            } else if (this.importStep === 2) {

            }
        },
        editing() {
            if (!this.$store.state.application.editorMode) {
                for (const key in this.activeElement) {
                    this.activeElement[key] = false
                }
            }
            return this.$store.state.application.editorMode === 'editing'
        },
        firstProduct() {
            return this.$store.state.marketplace.firstProduct
        }
    },
    watch: {
        '$route'() {
            this.updateSection()
        },
        editorMode(newMode, oldMode) {
            if (oldMode === 'editing' && newMode === 'publishing') {
                this.save()

                this.$store.dispatch('application/setEditorMode', 'viewing')
            } else if (newMode === 'removing') {
                this.$desktop.sendCommand('removeProduct', {
                    id: this.product.id
                }).then(data => {
                    if (data.error) {
                        return console.log(data.message)
                    }
                })
            }
        }
    },
    async asyncData({ params, store, error }) {
        await store.dispatch('products/find', {
            query: {
                id: Number(params.id)
            }
        })

        const product = store.getters['products/get'](params.id)

        if (!product) return error({ statusCode: 404, message: 'Product not found' })

        // if (this.section === 'community') {
        //     links.push({ to: { path: '' }, title: 'Community' })
        // } else if (this.section === 'projects') {
        //     links.push({ to: { path: '' }, title: 'Crowdfunding' })
        // } else if (this.section === 'assets') {
        //     links.push({ to: { path: '' }, title: 'Inventory' })
        // }

        return {
            product,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: `/products/${product.id}` }, title: product.name }
            ]
        }
    },
    mounted() {
        if (this.id === 'new') {
            this.$store.dispatch('application/setEditorMode', 'editing')
        }

        this.updateLandingImage()
    },
    async created() {
        if (process.client) window.onbeforeunload = this.unsaved

        this.updateSection()

        if (this.id !== 'new') {
            await this.$store.dispatch('products/find', {
                query: {
                    id: this.id
                }
            })

            this.loading = false
        }
    },
    beforeDestroy() {
        if (!process.client) return
        window.document.getElementById('header-bg').style['background-image'] = 'url(/img/backgrounds/1.jpg)'
    },
    updated() {
        if (!process.client) return
        this.$('#summernote').summernote({
            placeholder: 'Type in your text',
            tabsize: 2,
            height: 300,
            callbacks: {
                onBlur: () => {
                    Vue.set(this.product, 'content', this.$('#summernote').summernote('code'))
                }
            }
        })
    },
    methods: {
        updateLandingImage() {
            if (!process.client) return
            if (this.product.meta.images && this.product.meta.images.preview && this.product.meta.images.preview.length) {
                /*
                TODO: Make header-bg accesible by $refs
                */
                const header = window.document.getElementById('header-bg')
                const randomImage = Math.floor(Math.random() * this.product.meta.images.preview.length)
                header.style['background-image'] = `url(${this.product.meta.images.preview[randomImage]})`
                header.style['background-size'] = 'cover'
            }
        },
        updateSection() {
            return
            if (!this.section) {
                this.section = this.$route.meta.section
            }
        },
        deactivateElement(key) {
            this.activeElement[key] = false
        },
        activateElement(key) {
            for (const key in this.activeElement) {
                this.activeElement[key] = false
            }

            this.activeElement[key] = true

            setTimeout(() => {
                if (this.$refs[key]) { this.$refs[key].focus() }
            }, 10)
        },
        create() {
            this.project.ownerId = this.$store.state.application.activeProfile.id

            this.$store.dispatch('projects/create', this.project).then(res => {
                this.project.id = res.id
                this.notice = 'Congratulations, your project has been created!'

                this.$router.push(`/business/project/${this.project.id}`)
            })
        },
        async save() {
            if (this.id === 'new') {
                this.product.type = 'game'
                this.product.ownerId = this.$store.state.application.activeProfile.id

                const res = await this.$store.dispatch('products/create', this.product)

                this.product.id = res.id
                this.notice = 'Congratulations, your product has been created!'

                this.$router.push(`/business/project/${this.project.id}`)

                // this.$desktop.sendCommand('createMarketplaceProductRequest', { profile: this.$store.state.application.activeProfile, product: this.product }).then((data) => {
                //     const product = DB.marketplace.products.insert(data)
                //     DB.save()

                //     Vue.set(this.$store.state.marketplace.products, product.id, product)

                //     this.savedState = true
                // })
            } else {
                await this.$store.dispatch('products/update', [this.product.id, this.product, {
                    query: {
                        $eager: 'tags'
                    }
                }])

                // this.notice = "Product has been saved."
                // this.product.id = productResult.id
                // this.successfulCreationMessage = "Congratulations, your project has been created!"

                // this.$router.push('/business/project/' + this.project.id)

                this.savedState = true
            }
        },
        // save() {
        //     if (this.id === 'new') {
        //         this.product.type = 'game'

        //         this.$desktop.sendCommand('createMarketplaceProductRequest', { profile: this.$store.state.application.activeProfile, product: this.product }).then((data) => {
        //             const product = DB.marketplace.products.insert(data)
        //             DB.save()

        //             Vue.set(this.$store.state.marketplace.products, product.id, product)

        //             this.savedState = true
        //         })
        //     } else {
        //         const product = this.product

        //         this.$store.commit('marketplace/updateProduct', product)
        //         Vue.set(this.$store.state.marketplace.products, product.id, product)

        //         DB.marketplace.products.update(product)
        //         DB.save()

        //         this.savedState = true
        //     }
        // },
        unsaved() {
            if (this.savedState === false && this.$store.state.application.editorMode === 'editing') { return true }
        },
        closeModal() {
            this.$store.state.marketplace.firstProduct = false
            this.$store.commit('application/updateClientSettings', { key: 'hideProductIntroModal', value: true })
        },
        startSync() {
            this.$store.commit('marketplace/syncProductBlockchain', this.product)
        },
        async startImport() {
            if (!this.$store.state.application.desktopMode) {
                return this.$blockhub.Notification.error('Desktop app required', 'Error')
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
                return console.log(data.message)
            }

            console.log('Import response: ', data)

            this.product.name = data.title
            this.product.tags = [{ key: 'imported', value: 'Imported' }]
            this.product.meta = {}
            this.product.meta.type = 'game'
            // this.product.meta.rating.overall = 0
            this.product.meta.description = data.value
            this.product.meta.developerTags = data.tags
            this.product.meta.releaseDate = data.releaseDate
            this.product.meta.description = data.description
            this.product.meta.genre = ''
            this.product.meta.developer = data.developers && data.developers[0]
            this.product.meta.publisher = data.publishers && data.publishers[0]

            this.$store.commit('application/activeModal', null)
        }
    }
}
</script>

<style lang="scss">
    .content-editor .note-editor.note-frame .note-editing-area .note-editable {
        background-color: transparent;
        color: inherit;
    }

    .content-editor .card {
        background: rgba(0, 0, 0, 0.13);
        color: #dfdfe9;
        border: 1px solid rgba(70, 70, 70, 0.5);
    }

    .content-editor .note-editor.note-frame .note-statusbar {
        background: transparent;
        border: 0 none;
    }
</style>

<style lang="scss" scoped>
    .main-content {
        margin-top: 15px;
        padding: 0;
        border-radius: 5px;
        overflow: hidden;
        color: #C6C6D6;
        font-size: 14px;
        h2 {
            font-size: 21px;
            margin-bottom: 30px;
        }
        p {
            margin-bottom: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        &.with_bg {
            color: #1C2032;
            background: #FEEBCE;
        }
    }
    .editor {
        position: absolute;
        top: -45px;
        left: -5px;
        z-index: 10;

        .btn, input {
            border-color: #1b1c2b;
            background: #1B1C2B;
            border-radius: 6px;
            box-shadow: 1px 1px 0px #101010;
            font-size: 17px;
            padding-top: 8px;

            span {
                font-size: 17px;
            }
        }
        .form-control-element .form-control-element__box--pretify {
            line-height: 11px;
        }
    }

    .editor-container {
        position: relative;
    }

    @media (min-width: 768px){
        .product_nav{
            display: block!important;
        }
    }
    @media (max-width: 767px) {
        .product_nav{
            ul{
                flex-direction: column;
                li{
                    margin-right: auto;
                }
            }
        }
        .nav-tabs {
            border-bottom: 0 none;
        }
    }

</style>
