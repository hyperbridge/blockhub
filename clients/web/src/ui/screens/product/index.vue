<template>
    <c-layout navigationKey="product" :showRightPanel="false" navigationTitle="GAME OVERVIEW"
              :breadcrumbLinks="breadcrumbLinks" :showBreadcrumbs="!editing" class="product-single-page">

        <div class="row" v-if="!product">
            <div class="col-12">
                Product not found
            </div>
        </div>
        <div class="row" v-if="product">
            <div class="col-12 col-md-12">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="editor-container">
                            <div class="editor" v-if="editing">
                                <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                        @click="activateElement('name')" v-if="!activeElement['name']">Change
                                    Product Name <span class="fa fa-edit"></span></button>

                                <div class="form-group" v-if="activeElement['name']">
                                    <div class="form-control-element form-control-element--right">
                                        <input ref="name" name="name" type="text" class="form-control"
                                                placeholder="Product name..." v-model="product.name"/>
                                        <div
                                            class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                            @click="deactivateElement('name')">
                                            <span class="fa fa-check"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h1 class="title margin-top-10 margin-bottom-15">{{ product.name }}</h1>
                        </div>

                        <div class="editor-container">
                            <div class="" v-if="editing">
                                <div class="form-group tag-editor">
                                    <multiselect v-model="product.developerTags"
                                                 class="dark-mode"
                                                 :multiple="true"
                                                 :taggable="true"
                                                 :options="tagOptions">

                                    </multiselect>
                                    <!--<select id="tag-editor" class="form-control" multiple="multiple">-->
                                        <!--<option v-for="(tag, index) in tagOptions" :key="index"-->
                                                <!--:selected="product.developerTags.includes(tag)">{{ tag }}-->
                                        <!--</option>-->
                                    <!--</select>-->
                                </div>
                            </div>
                            <c-tags :tags="product.developerTags" v-if="!editing"></c-tags>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="editor" v-if="editing">
                            <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('backgroundImage')"
                                    v-if="!activeElement['backgroundImage']">Change Background Image <span
                                class="fa fa-edit"></span></button>

                            <div class="form-group" v-if="activeElement['backgroundImage']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="backgroundImage" name="backgroundImage" type="text"
                                            class="form-control" placeholder="Background image URL..."
                                            v-model="product.images.header"/>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        @click="deactivateElement('backgroundImage')">
                                        <span class="fa fa-check"></span>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <label>RECOMMENDED SIZE: 1120 x 524px</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <c-button status="dark" class="w-100 d-flex d-md-none justify-content-center my-4" size="lg" data-toggle="collapse" data-target="#product_nav" aria-expanded="false" aria-controls="product_nav">
                            Menu
                        </c-button>
                        <div class="collapse show product_nav" id="product_nav">
                            <ul class="nav nav-tabs margin-bottom-30 justify-content-between">
                                <li class="nav-item" @click="section='overview'">
                                    <router-link :to="`/product/${id}`" class="nav-link" :class="{ 'active': section === 'overview' }">Overview</router-link>
                                </li>
                                <li class="nav-item" @click="section='community'" v-darklaunch="'COMMUNITY'">
                                    <router-link :to="`/product/${id}/community`" class="nav-link" :class="{ 'active': section === 'community' }">Community
                                    </router-link>
                                </li>
                                <li class="nav-item" @click="section='projects'">
                                    <router-link :to="`/product/${id}/projects`" class="nav-link" :class="{ 'active': section === 'projects' }">Crowdfunding
                                    </router-link>
                                </li>
                                <li class="nav-item" @click="section='assets'">
                                    <router-link :to="`/product/${id}/assets`" class="nav-link" :class="{ 'active': section === 'assets' }">Inventory</router-link>
                                </li>
                                <li class="nav-item" v-if="editing">
                                    <a class="nav-link" :class="{ 'active': section === 'configure' }" @click="section='configure'">Configure</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                        <div class="col-12" v-if="section === 'configure'" :editing="editing">
                            <c-block title="Product">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group row">
                                            <label class="switch switch-sm col-sm-3">
                                                <label>Price</label>
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Example: 10" v-model="product.price">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="switch switch-sm col-sm-3">
                                                <label>Old Price</label>
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Example: 20" v-model="product.oldPrice">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-sm-3">
                                                <label>Genre</label>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Example: RPG" v-model="product.genre">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3">
                                                <label>Release Date</label>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Example: 12/30/2020" v-model="product.releaseDate">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3">
                                                <label>Publisher</label>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Example: Actilizard Entertainment" v-model="product.publisher">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3">
                                                <label>Developer</label>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Example: Northcap Studios" v-model="product.developer">
                                                <span class="form-text"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">

                                    </div>
                                </div>
                            </c-block>
                        </div>

                    <div class="col-12">
                        <transition name="page" mode="out-in">
                            <c-product-overview :product="product" v-if="section === 'overview'" :editing="editing" />
                            <c-product-assets :product="product" v-if="section === 'assets'" :editing="editing" />
                            <c-product-community :product="product" v-if="section === 'community'" :editing="editing" />
                            <c-product-projects :product="product" v-if="section === 'projects'" :editing="editing" />
                        </transition>
                    </div>
                </div>
            </div>
        </div>

        
        <c-custom-modal title="Help Center" v-if="firstProduct && editing && !$store.state.application.settings.client.hide_product_intro_modal && false" @close="closeModal">
            <div class="help-modal__content" slot="modal_body" style="max-width: 500px">
                <h4 class="h2 mb-3">Creating your first product?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam elementum ac ligula nec viverra. Nunc molestie augue a erat ultrices fermentum.</p>
                <p>Curabitur non bibendum erat. Praesent nec vestibulum odio, vel euismod enim. Sed at tincidunt risus.
                    Mauris ac facilisis metus. Proin venenatis neque posuere urna sagittis ultricies.</p>
                <p><c-button to="/help" target="_blank">Learn more about creating products</c-button></p>
            </div>
            <div slot="modal_footer" class="text-right w-100">
                <c-button size="md" @click="closeModal">Got it</c-button>
            </div>
        </c-custom-modal>


        <c-basic-popup
            :activated="$store.state.application.activeModal === 'import-product'"
            @close="$store.commit('application/activateModal', null)"
        >
            <div class="h4" slot="header" style="text-align: left">Import Product</div>
            <template slot="body">
                <div v-if="importStep === 1">
                    <h3 class="margin-auto">Choose source: </h3>
                    <br />
                    <div class="row justify-content-center margin-bottom-50">
                        <div class="col-12 col-md-4 col-lg-3">
                            <c-topic-item
                                @click="nextImportStep"
                                size="lg"
                                icon="users"
                                class="padding-10">
                                Steam
                            </c-topic-item>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <c-topic-item
                                @click="nextImportStep"
                                icon="users"
                                size="lg"
                                class="padding-10">
                                GOG
                            </c-topic-item>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <c-topic-item
                                @click="nextImportStep"
                                icon="users"
                                size="lg"
                                class="padding-10">
                                Itch
                            </c-topic-item>
                        </div>
                    </div>
                    <br />
                </div>
                <div v-if="importStep === 2">
                    <h3 class="margin-auto">Enter URL: </h3>
                    <br />
                    <div class="form-group row">
                        <div class="col-12">
                            <input class="form-control" ref="importUrl" type="text" value="https://store.steampowered.com/app/441830/I_am_Setsuna/" />
                            <span class="form-text">Example: https://store.steampowered.com/app/441830/I_am_Setsuna/</span>
                        </div>
                    </div>

                    <c-button class="c-button--lg outline-white margin-top-20 margin-auto" @click="startImport">GO</c-button>
                </div>
                <br />
                <div class="padding-40 loading-process" style="position: relative" v-if="importing">
                    <div class="loading loading--w-spinner"><div><div class="loading-spinner"></div></div></div>
                </div>
            </template>
            <p slot="footer" class="margin-top-20">
                <c-button status="dark" to="/help">Need help? Check the Help Center</c-button>
            </p>
        </c-basic-popup>

    </c-layout>
</template>

<script>
    import Vue from 'vue'
    import * as Bridge from '@/framework/desktop-bridge'
    import * as DB from '@/db'

    import 'vue-multiselect/dist/vue-multiselect.min.css'

    const groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            if (!x[key]) return rv;
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {}) || null;
    };

    export default {
        props: {
            id: [String, Number],
            section: {
                type: String,
                default: 'overview'
            }
        },
        components: {
            'c-product-overview': (resolve) => require(['@/ui/screens/product-overview'], resolve),
            'c-product-projects': (resolve) => require(['@/ui/screens/product-projects'], resolve),
            'c-product-assets': (resolve) => require(['@/ui/screens/product-assets'], resolve),
            'c-product-community': (resolve) => require(['@/ui/screens/product-community'], resolve),
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic.vue'], resolve),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
            'c-tags': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-custom-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
            'multiselect': (resolve) => require(['vue-multiselect'], resolve),
        },
        data() {
            return {
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
                importing: false,
                importStep: 1,
                savedState: false,
                value: null
            }
        },
        computed: {
            marketplace() {
                return this.$store.state.marketplace
            },
            product() {
                let product = null

                if (this.id === 'new') {
                    product = { ...this.$store.state.marketplace.defaultProduct }
debugger
                    this.$store.state.application.developerMode = true
                    this.$store.dispatch('application/setEditorMode', 'editing')
                }

                if (!product) {
                    product = this.$store.getters['products/get'](this.id)
                }

                if (!product) {
                    product = DB.marketplace.products.findOne({ 'id': Number(this.id) })
                }

                if (!product) {
                    return
                }
                

                if (!product.community) {
                    product.community = {
                        discussions: []
                    }
                }

                if (!product.tags) {
                    product.tags = []
                }

                if (!product.meta) {
                    product.meta = {}
                }

                if (product.meta.images && product.meta.images.preview && product.meta.images.preview.length) {
                    const header = window.document.getElementById('header-bg');
                    const randomImage = Math.floor(Math.random() * product.meta.images.preview.length);
                    header.style['background-image'] = 'url(' + product.meta.images.preview[randomImage] + ')';
                    header.style['background-size'] = 'cover';
                }

                if (product.meta.promotions) {
                    this.promotionSections = groupBy(product.meta.promotions, 'section');
                }

                return product
            },
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
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }
                return this.$store.state.application.editorMode === 'editing'
            },
            firstProduct() {
                return this.$store.state.marketplace.firstProduct
            },
            breadcrumbLinks() {
                if (!this.product) {
                    return []
                }

                const links = [
                    { to: { path: '/' }, title: 'Store' },
                    { to: { path: '/product/' + this.id }, title: this.product.name }
                ]

                if (this.section === 'community') {
                    links.push({ to: { path: '' }, title: 'Community' })
                } else if (this.section === 'projects') {
                    links.push({ to: { path: '' }, title: 'Crowdfunding' })
                } else if (this.section === 'assets') {
                    links.push({ to: { path: '' }, title: 'Inventory' })
                }

                return links
            }
        },
        mounted() {
            if (this.id === 'new') {debugger
                this.$store.dispatch('application/setEditorMode', 'editing')
            }
        },
        created() {
            window.onbeforeunload = this.unsaved

            this.updateSection()
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
        },
        methods: {
            updateSection() {
                if (!this.section) {
                    this.section = this.$route.meta.section
                }
            },
            deactivateElement(key) {
                this.activeElement[key] = false
            },
            activateElement(key) {
                for (let key in this.activeElement) {
                    this.activeElement[key] = false
                }

                this.activeElement[key] = true

                setTimeout(() => {
                    if (this.$refs[key])
                        this.$refs[key].focus()
                }, 10)
            },
            save() {
                if (this.id === 'new') {
                    this.product.type = 'game'

                    Bridge.sendCommand('createMarketplaceProductRequest', { profile: this.$store.state.application.activeProfile, product: this.product }).then((data) => {
                        const product = DB.marketplace.products.insert(data)
                        DB.save()

                        Vue.set(this.$store.state.marketplace.products, product.id, product)

                        this.savedState = true
                    })
                } else {
                    const product = this.product

                    Vue.set(this.$store.state.marketplace.products, product.id, product)

                    DB.marketplace.products.update(product)
                    DB.save()

                    this.savedState = true
                }
            },
            unsaved() {
                if (this.savedState === false && this.$store.state.application.editorMode === 'editing')
                    return true
            },
            closeModal() {
                this.$store.state.marketplace.firstProduct = false
                this.$store.commit('application/updateClientSettings', { key: 'hide_product_intro_modal', value: true })
            },
            startImport() {
                if (!this.$store.state.application.desktopMode) {
                    return window.BlockHub.Notification.error('Desktop app required', 'Error')
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

                                window.desktopBridge.send('command', JSON.stringify(cmd));
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

                                window.desktopBridge.send('command', JSON.stringify(cmd));
                            }
                        }

                        monitor();
                    };

                    document.body.appendChild(script);
                }`

                Bridge.sendCommand('fetchPageDataRequest', {
                    url: this.$refs.importUrl.value,
                    script: onWindowLoad
                }).then((data) => {
                    if (data.error) {
                        return console.log(data.message)
                    }

                    console.log('Import response: ', data)

                    this.product.type = 'game'
                    //this.product.rating.overall = 0
                    this.product.tags = [{key: 'imported', value: 'Imported'}]
                    this.product.developerTags = data.tags
                    this.product.name = data.title
                    this.product.releaseDate = data.releaseDate
                    this.product.description = data.description
                    this.product.content = data.value
                    this.product.genre = ''
                    this.product.developer = data.developers && data.developers[0]
                    this.product.publisher = data.publishers && data.publishers[0]

                    this.$store.commit('application/activateModal', null)
                })
            },
        },
        updated() {
            $('#summernote').summernote({
                placeholder: 'Type in your text',
                tabsize: 2,
                height: 300,
                callbacks: {
                    onBlur: () => {
                        Vue.set(this.product, 'content', $('#summernote').summernote('code'))
                    }
                }
            });

        },
        watch: {
            '$route'() {
                this.updateSection()
            },
            editorMode (newMode, oldMode) {
                if (oldMode === 'editing' && newMode === 'publishing') {
                    this.save()

                    this.$store.dispatch('application/setEditorMode', 'viewing')
                } else if (newMode === 'removing') {
                    Bridge.sendCommand('removeProduct', {
                        id: this.product.id
                    }).then((data) => {
                        if (data.error) {
                            return console.log(data.message)
                        }
                    })

                }
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

