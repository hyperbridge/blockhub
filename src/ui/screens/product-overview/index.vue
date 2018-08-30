<template>
    <c-layout navigationKey="product-navigation">
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
                                                <option v-for="(tag, index) in author_tag_options" :key="index" :selected="product.author_tags.includes(tag)">{{ tag }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <c-tags-list :tags="product.author_tags" v-if="!editing"></c-tags-list>
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
                                <a class="nav-link active" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>

                        <div class="row">
                            <div class="col-7">
                                <c-screen-gallery :main="product.images.main" :items="product.images.preview" />

                                <c-sale-box
                                    :sale_box="product.sale_box"
                                    v-if="product.sale_box"
                                />

                                <c-plan-list :items="product.plans" />

                                <div class="main-content" v-html="product.content" v-if="!editing">
                                    {{ product.content }}
                                </div>

                                <div class="content-editor" v-if="editing">
                                    <div id="summernote" v-html="product.content">{{ product.content }}</div>
                                </div>
                            </div>
                            <div class="col-5">
                                <c-rating-block :items="product.rating" :parent_url="`/#/product/${product.id}`" />

                                <c-frequently-traded-assets :items="product.frequently_traded_assets" :assets_url="`/#/product/${product.id}/assets`" />

                                <c-community-spotlight :discussions="product.community.discussions" :community_url="`/#/product/${product.id}/community`" />

                                <div class="card invert system-requirements" v-if="product.system_requirements">
                                    <div class="card-body">
                                        <h2 class="title">System Requirements <i class="fas fa-laptop title-icon"></i>
                                        </h2>
                                        <div class="system-requirements__item"
                                             v-for="(item, index) in product.system_requirements" :key="index">
                                            <h6>{{ item.system }} <i :class="item.icon"></i></h6>
                                            <p>{{ item.requirements }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card transparent languages-blk" v-if="product.language_support">
                                    <div class="card-body">
                                        <h2 class="title">Languages <i class="fas fa-laptop title-icon"></i></h2>
                                        <ul class="languages-list">
                                            <li class="languages-list__item"
                                                v-for="(item, index) in product.language_support"
                                                :key="index">
                                                <span class="languages-list__name">{{ item.name }}</span>
                                                <span class="languages-list__icon">
                                                    <i class="fas fa-closed-captioning"
                                                       v-if="item.closed_captioning"></i>
                                                    <i class="fas fa-audio-description"
                                                       v-if="item.audio_description"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </c-layout>
</template>

<script>
    import Vue from 'vue'

    const updateProduct = function () {
        let product = null
        
        if (this.id === 'new') {
            product = this.$store.state.marketplace.default_product
        }

        if (this.$store.state.marketplace.products && this.$store.state.marketplace.products[this.id]) {
            product = this.$store.state.marketplace.products[this.id]
        }
    
        if (product && product.images && product.images.header) {
            window.document.body.style['background-image'] = 'url(' + product.images.header + ')'
        }

        if (!product.community)
            product.community = {
                discussions: []
            }

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-plan-list': () => import('@/ui/components/game-plans/list'),
            'c-screen-gallery': () => import('@/ui/components/screen-gallery/gallery'),
            'c-sale-box': () => import('@/ui/components/sale-box/box'),
            'c-tags-list': () => import('@/ui/components/product-tags'),
            'c-rating-block': () => import('@/ui/components/rating-block'),
            'c-frequently-traded-assets': () => import('@/ui/components/frequently-traded-assets'),
            'c-community-spotlight': () => import('@/ui/components/community-spotlight')
        },
        data() {
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
                ]
            }
        },
        methods: {
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
                    this.$store.commit('marketplace/createProduct', this.product)
                } else {
                    this.$store.dispatch('marketplace/updateProduct', this.product)
                }
            }
        },
        computed: {
            product: updateProduct,
            editing() {
                if (!this.$store.state.marketplace.editor_mode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }

                return this.$store.state.marketplace.editor_mode === 'editing'
            }
        },
        mounted: updateProduct,
        created: updateProduct,
        beforeDestroy() {
            window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
        },
        updated() {
            $('#tag-editor').select2()
                .on('select2:select', (e) => {
                    let data = e.params.data
                    
                    if (!this.product.author_tags.includes(data.text)) {
                        this.product.author_tags.push(data.text)
                    }

                    Vue.set(this.product, 'author_tags', this.product.author_tags)
                })
                .on('select2:unselect', (e) => {
                    let data = e.params.data

                    this.product.author_tags = this.product.author_tags.filter(e => e !== data.text)

                    Vue.set(this.product, 'author_tags', this.product.author_tags)
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
        padding: 15px;
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

    .system-requirements__item {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        padding: 5px;
        position: relative;
        &:last-child {
            margin-bottom: 0;
        }
        h6 {
            font-weight: bold;
            font-size: 14px;
            padding-bottom: 0;
            i {
                float: right;
            }
        }
        p {
            margin: 0;
        }
    }

    .languages-list {
        padding: 0;
    }
    .languages-list__item {
        list-style: none;
        display: block;
        margin: 5px 0;
        width: 100%;
        overflow: hidden;
    }
    .languages-list__name {
        float: left;
        max-width: 80%;
        font-size: 14px;
        font-weight: bold;
    }
    .languages-list__icon {
        float: right;
        max-width: 20%;
        text-align: right;
        i {
            margin-right: 5px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
