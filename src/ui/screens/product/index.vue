<template>
    <c-layout navigationKey="product" :showRightPanel="false" navigationTitle="GAME OVERVIEW"
              :breadcrumbLinks="editing ? [] : breadcrumbLinks">
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
                                <div class="form-group">
                                    <select id="tag-editor" class="form-control" multiple="multiple">
                                        <option v-for="(tag, index) in developer_tag_options" :key="index"
                                                :selected="product.developer_tags.includes(tag)">{{ tag }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <c-tags-list :tags="product.developer_tags" v-if="!editing"></c-tags-list>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="editor" v-if="editing">
                            <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right"
                                    @click="activateElement('background_image')"
                                    v-if="!activeElement['background_image']">Change Background Image <span
                                class="fa fa-edit"></span></button>

                            <div class="form-group" v-if="activeElement['background_image']">
                                <div class="form-control-element form-control-element--right">
                                    <input ref="background_image" name="background_image" type="text"
                                            class="form-control" placeholder="Background image URL..."
                                            v-model="product.images.header"/>
                                    <div
                                        class="form-control-element__box form-control-element__box--pretify bg-secondary"
                                        @click="deactivateElement('background_image')">
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
                                <li class="nav-item" @click="section='community'">
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
                                                <input type="text" class="form-control" placeholder="Example: 20" v-model="product.old_price">
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
                                                <input type="text" class="form-control" placeholder="Example: 12/30/2020" v-model="product.release_date">
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
                        <c-product-overview :product="product" v-if="section === 'overview'" :editing="editing" />
                        <c-product-assets :product="product" v-if="section === 'assets'" :editing="editing" />
                        <c-product-community :product="product" v-if="section === 'community'" :editing="editing" />
                        <c-product-projects :product="product" v-if="section === 'projects'" :editing="editing" />

                    </div>
                </div>
            </div>
        </div>
        <c-custom-modal title="Help Center" v-if="first_product && editing && !$store.state.application.account.settings.client.hide_product_intro_modal" @close="closeModal">
            <div class="help-modal__content" slot="modal_body" style="max-width: 500px">
                <h4 class="h2 mb-3">Creating your first product?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam elementum ac ligula nec viverra. Nunc molestie augue a erat ultrices fermentum.</p>
                <p>Curabitur non bibendum erat. Praesent nec vestibulum odio, vel euismod enim. Sed at tincidunt risus.
                    Mauris ac facilisis metus. Proin venenatis neque posuere urna sagittis ultricies.</p>
                <p><a href="/#/help" target="_blank">Learn more about creating products</a></p>
            </div>
            <div slot="modal_footer" class="text-right w-100">
                <c-button size="md" @click="closeModal">Got it</c-button>
            </div>
        </c-custom-modal>


        <c-basic-popup 
            :activated="$store.state.application.active_modal === 'import-product'"
            @close="$store.commit('application/activateModal', null)"
        >
            <div class="h4" slot="header">Propose Idea</div>
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
                    
                    <c-button class="c-btn-lg outline-white margin-top-20 margin-auto" @click="startImport">GO</c-button>
                </div>
                <br />
                <div class="padding-40 loading-process" style="position: relative" v-if="importing">
                    <div class="loading loading--w-spinner"><div><div class="loading-spinner"></div></div></div>
                </div>
            </template>
            <p slot="footer" class="margin-top-20">
                Need help? <c-button status="plain" href="/#/help">Check the Help Center</c-button>
            </p>
        </c-basic-popup>
        
    </c-layout>
</template>

<script>
    import Vue from 'vue'
    import * as Brdge from '@/framework/desktop-bridge'
    import * as DB from '@/db'

    const groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            if (!x[key]) return rv;
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {}) || null;
    };

    export default {
        props: ['id', 'section'],
        components: {
            'c-product-overview': (resolve) => require(['@/ui/screens/product-overview'], resolve),
            'c-product-projects': (resolve) => require(['@/ui/screens/product-projects'], resolve),
            'c-product-assets': (resolve) => require(['@/ui/screens/product-assets'], resolve),
            'c-product-community': (resolve) => require(['@/ui/screens/product-community'], resolve),
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic.vue'], resolve),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-custom-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve)
        },
        data() {
            return {
                activeElement: {
                    name: false,
                    background_image: false,
                    tags: false
                },
                developer_tag_options: [
                    'rpg',
                    'adventure',
                    'racing',
                    'action'
                ],
                importing: false,
                importStep: 1,
                savedState: false
            }
        },
        computed: {
            marketplace() {
                return this.$store.state.marketplace;
            },
            product() {
                return this.id === 'new' ? this.marketplace.default_product : this.marketplace.products[this.id];
            },
            editor_mode() {
                return this.$store.state.application.editor_mode
            },
            nextImportStep() {
                if (this.importStep === 1) {
                    this.importStep = 2
                } else if (this.importStep === 2) {

                }
            },
            editing() {
                if (!this.$store.state.application.editor_mode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }
                return this.$store.state.application.editor_mode === 'editing'
            },
            first_product() {
                return this.$store.state.marketplace.first_product
            },
            breadcrumbLinks() {
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
            const { product } = this;

            if (this.id === 'new') {
                this.$store.dispatch('application/setEditorMode', 'editing')
            }
        
            if (!product.community) {
                product.community = {
                    discussions: []
                }
            }

            if (!product.developer_tags) {
                product.developer_tags = []
            }

            if (product.promotions) {
                this.promotionSections = groupBy(product.promotions, 'section');
            }

            if (product && product.images.preview && product.images.preview.length) {
                const header = window.document.getElementById('header-bg');
                const randomImage = Math.floor(Math.random() * product.images.preview.length);
                header.style['background-image'] = 'url(' + product.images.preview[randomImage] + ')';
                header.style['background-size'] = 'cover';
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

                    Brdge.sendCommand('createMarketplaceProductRequest', { profile: this.$store.state.application.account.current_identity, product: this.product }).then((data) => {
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
                if (this.savedState === false && this.$store.state.application.editor_mode === 'editing')
                    return true
            },
            closeModal() {
                this.$store.state.marketplace.first_product = false
                this.$store.commit('application/UPDATE_CLIENT_SETTINGS', 'hide_product_intro_modal', true)
            },
            // showImporter() {
            //     this.importing = true
            // },
            startImport() {
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
                                            releaseDate: $('.release_date .date').text().trim(),
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
                
                Brdge.sendCommand('fetchPageDataRequest', {
                    url: this.$refs.importUrl.value,
                    script: onWindowLoad
                }).then((data) => {
                    if (data.error) {
                        return console.log(data.message)
                    }

                    console.log('Import response: ', data)

                    this.product.type = 'game'
                    //this.product.rating.overall = 0
                    this.product.system_tags = ['imported']
                    this.product.developer_tags = data.tags
                    this.product.name = data.title
                    this.product.release_date = data.releaseDate
                    this.product.description = data.description
                    this.product.content = data.about
                    this.product.genre = ''
                    this.product.developer = data.developers && data.developers[0]
                    this.product.publisher = data.publishers && data.publishers[0]
                })
            },
        },
        updated() {
            $('#tag-editor').select2()
                .on('select2:select', (e) => {
                    let data = e.params.data

                    if (!this.product.developer_tags.includes(data.text)) {
                        this.product.developer_tags.push(data.text)
                    }

                    Vue.set(this.product, 'developer_tags', this.product.developer_tags)
                })
                .on('select2:unselect', (e) => {
                    let data = e.params.data

                    this.product.developer_tags = this.product.developer_tags.filter(e => e !== data.text)

                    Vue.set(this.product, 'developer_tags', this.product.developer_tags)
                })

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
            editor_mode (newMode, oldMode) {
                if (oldMode === 'editing' && newMode === 'publishing') {
                    this.save()

                    this.$store.dispatch('application/setEditorMode', 'viewing')
                } else if (newMode === 'removing') {
                    Brdge.sendCommand('removeProduct', {
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
