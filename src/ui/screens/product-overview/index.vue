<template>
    <c-layout navigationKey="product" :showRightPanel="false" navigationTitle="GAME OVERVIEW">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <div class="row">
                            <div class="col-8">
                                <div class="editor-container">
                                    <div class="editor" v-if="editing">
                                        <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right" @click="activateElement('name')" v-if="!activeElement['name']">Change Product Name <span class="fa fa-edit"></span></button>

                                        <div class="form-group" v-if="activeElement['name']">
                                            <div class="form-control-element form-control-element--right">
                                                <input ref="name" name="name" type="text" class="form-control" placeholder="Product name..." v-model="product.name" />
                                                <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                                    <span class="fa fa-check" @click="deactivateElement('name')"></span>
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
                                                <option v-for="(tag, index) in author_tag_options" :key="index" :selected="product.developer_tags.includes(tag)">{{ tag }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <c-tags-list :tags="product.developer_tags" v-if="!editing"></c-tags-list>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="editor" v-if="editing">
                                    <button class="btn btn-secondary btn--icon btn--icon-stacked btn--icon-right" @click="activateElement('background_image')" v-if="!activeElement['background_image']">Change Background Image <span class="fa fa-edit"></span></button>

                                    <div class="form-group" v-if="activeElement['background_image']">
                                        <div class="form-control-element form-control-element--right">
                                            <input ref="background_image" name="background_image" type="text" class="form-control" placeholder="Background image URL..." v-model="product.images.header" />
                                            <div class="form-control-element__box form-control-element__box--pretify bg-secondary">
                                                <span class="fa fa-check" @click="deactivateElement('background_image')"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <br />
                                    <label>RECOMMENDED SIZE: 1120 x 524px</label>
                                </div>
                            </div>
                        </div>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}`" class="nav-link active">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/community`" class="nav-link">Community</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/projects`" class="nav-link">Crowdfunding</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/assets`" class="nav-link">Inventory</router-link>
                            </li>
                        </ul>

                        <div class="row">
                            <div class="col-8">
                                <c-screen-gallery
                                    :items="[product.images.medium_tile, ...product.images.preview]"
                                    :video_url="product.video"
                                />

                                <div v-for="(promotions, section) in promotionSections" :key="section" v-if="promotionSections">
                                    <h3 style="margin-top: 20px;" v-if="section">{{ section }}</h3>
                                    <c-promotion-box
                                        :title="promotion.title"
                                        :price="promotion.price"
                                        v-if="product.promotions"
                                        v-for="(promotion, index) in promotions" :key="index"
                                    />
                                </div>

                                <div class="overflow-hidden">
                                    <c-game-plan
                                        v-for="(plan, index) in product.plans"
                                        :key="index"
                                        :plan="plan"
                                    />
                                </div>

                                <div class="main-content" v-html="product.content" v-if="!editing">
                                    {{ product.content }}
                                </div>

                                <div class="content-editor" v-if="editing">
                                    <div id="summernote" v-html="product.content">{{ product.content }}</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <c-purchase-block
                                    :isReleased="true"
                                    :price="product.price"
                                    :tags="['New']"
                                    :onClickPurchase="showPurchaseModal"
                                    class="margin-bottom-15"
                                />
                                
                                <c-rating-block class="margin-bottom-20" :items="product.rating" :parent_url="`/#/product/${product.id}`" />

                                <c-frequently-traded-assets class="margin-bottom-20" :items="product.frequently_traded_assets" :assetsUrl="`/#/product/${product.id}/assets`" />

                                <c-community-spotlight class="margin-bottom-20" :discussions="product.community.discussions" :communityUrl="`/#/product/${product.id}/community`" />

                                <c-system-requirements class="margin-bottom-20" :requirements="product.system_requirements"/>

                                <c-language-support :languages="product.language_support"/>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <c-heading-bar name="Reviews" :showArrows="true" :showBackground="false" />
                            </div>

                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <h3 class="margin-vertical-20">Most helpful</h3>
                                    <c-review
                                        v-for="(review, index) in reviews.helpful"
                                        :key="index"
                                        :review="review"
                                    />
                                </div>
                                <div class="col-md-6 col-12">
                                    <h3 class="margin-vertical-20">Most recent</h3>
                                    <c-review
                                        v-for="(review, index) in reviews.recent"
                                        :key="index"
                                        :review="review"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <c-custom-modal title="Help Center" v-if="first_product && editing" @close="closeModal">
            <div class="help-modal__content" slot="modal_body" style="width: 500px">
                <h4 class="h2 mb-3">Creating your first product?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam elementum ac ligula nec viverra. Nunc molestie augue a erat ultrices fermentum.</p>
                <p>Curabitur non bibendum erat. Praesent nec vestibulum odio, vel euismod enim. Sed at tincidunt risus.
                    Mauris ac facilisis metus. Proin venenatis neque posuere urna sagittis ultricies.</p>
                <p><a href="/#/help" target="_blank">Learn more about creating products</a></p>
            </div>
            <div slot="modal_footer" class="text-right w-100" >
                <c-button size="md" @click="closeModal">Got it</c-button>
            </div>
        </c-custom-modal>
    </c-layout>
</template>

<script>
    import Vue from 'vue'
    
    const groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
            if (!x[key]) return rv;
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {}) || null;
    };

    const updateProduct = function () {
        let product = null

        if (this.id === 'new') {
            product = this.$store.state.marketplace.default_product
        }

        if (this.$store.state.marketplace.products && this.$store.state.marketplace.products[this.id]) {
            product = this.$store.state.marketplace.products[this.id]
        }

        if (product.images.preview && product.images.preview.length) {
            const header = window.document.getElementById('header-bg');
            const randomImage = Math.floor(Math.random() * product.images.preview.length);
            header.style['background-image'] = 'url(' + product.images.preview[randomImage] + ')';
            header.style['background-size'] = 'cover';
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
            this.promotionSections = groupBy(product.promotions, 'section')
        }

        return product
    };

    export default {
        props: ['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-game-plan': (resolve) => require(['@/ui/components/game-plans/plan'], resolve),
            'c-screen-gallery': (resolve) => require(['@/ui/components/screen-gallery/gallery'], resolve),
            'c-promotion-box': (resolve) => require(['@/ui/components/promotion-box'], resolve),
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
            'c-purchase-block': (resolve) => require(['@/ui/components/purchase-block'], resolve),
            'c-frequently-traded-assets': (resolve) => require(['@/ui/components/frequently-traded-assets'], resolve),
            'c-community-spotlight': (resolve) => require(['@/ui/components/community-spotlight'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-review': (resolve) => require(['@/ui/components/review'], resolve),
            'c-system-requirements': (resolve) => require(['@/ui/components/product-overview/system-requirements'], resolve),
            'c-language-support': (resolve) => require(['@/ui/components/product-overview/language-support'], resolve),
            'c-custom-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve)
        },
        data() {
            const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.';
            const title = 'Good game with very nice graphics made by very smart people.';
            const setup = { system: 'Windows 10', gpu: 'GTX 1080', cpu: 'Core i7 7980x', ram: '8 GB', storage: 'HyperX 1TB SSD' };
            const author = { name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' };
            return {
                activeElement: {
                    name: false,
                    background_image: false,
                    tags: false
                },
                author_tag_options: [
                    'rpg',
                    'adventure',
                    'racing',
                    'action'
                ],
                reviews: {
                    helpful: [
                        { author, title: title, text, date: '2018-08-19T04:09:00.000Z', rating: 4.5, minutes_played: 1938, setup },
                        { author, title: title, text, date: '2018-08-16T04:09:00.000Z', rating: 1.5, minutes_played: 414, setup },
                        { author, title: title, text, date: '2018-08-18T04:09:00.000Z', rating: 3.5, minutes_played: 71, setup }
                    ],
                    recent: [
                        { author, title: title, text, date: '2018-08-20T04:09:00.000Z', rating: 1.5, minutes_played: 13, setup },
                        { author, title: title, text, date: '2018-03-21T04:09:00.000Z', rating: 5, minutes_played: 241, setup },
                        { author, title: title, text, date: '2018-08-11T04:09:00.000Z', rating: 3, minutes_played: 2941, setup }
                    ]
                },
                promotionSections: null,
                savedState: false
            }
        },
        methods: {
            showPurchaseModal() {
                this.$store.dispatch('application/activateModal', 'purchase')
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
                this.savedState = true;
                if (this.id === 'new') {
                    this.$store.commit('marketplace/createProduct', this.product)
                } else {
                    this.$store.dispatch('marketplace/updateProduct', this.product)
                }
            },
            closeModal(){
                console.log('close')
                this.$store.state.marketplace.first_product = false
            },
            unsaved(){
                if (this.savedState === false && this.$store.state.application.editor_mode === 'editing')
                    return 'ololololo'
            }
        },
        computed: {
            product: updateProduct,
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
            }
        },
        mounted: updateProduct,
        created(){
            updateProduct;
            window.onbeforeunload = this.unsaved;
        },
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
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
        img{
            max-width: 100%;
            height: auto;
        }
        &.with_bg{
            color: #1C2032;
            background: #FEEBCE;
        }
    }

    .page__content > .content {
        width: calc(100% - 250px);
        padding-top: 0;
        margin: 0 0 0 auto;
    }
</style>
