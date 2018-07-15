<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10 margin-bottom-15">{{ product.name }}</h1>

                        <c-tags-list :tags="product.author_tags"></c-tags-list>

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

                                <div class="main-content" v-html="product.content">
                                    {{ product.content }}
                                </div>
                            </div>
                            <div class="col-5">
                                <c-rating-block :items="product.rating" :parent_url="`/#/product/${product.id}`" />

                                <c-frequently-traded-assets :items="product.frequently_traded_assets" :assets_url="`/#/product/${product.id}`" />

                                <c-community-spotlight :discussions="product.community.discussions" :community_url="`/#/product/${product.id}`" />

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

                        <input type="text" name="name" v-model.lazy="product.name"/>

                        <button class="btn" @click="save()">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    const updateProduct = function () {
        if (!this.$store.state.marketplace.products)
            return

        const product = this.$store.state.marketplace.products[this.id]

        if (!product)
            return

        if (product.images && product.images.header)
            window.document.body.style['background-image'] = 'url(' + product.images.header + ')'

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
        methods: {
            save() {
                this.$store.dispatch('marketplace/updateProduct', this.product)
            }
        },
        computed: {
            product: updateProduct
        },
        mounted: updateProduct,
        created: updateProduct,
        beforeDestroy() {
            window.document.body.style['background-image'] = 'url(/static/img/products/default.png)'
        }
    }
</script>

<style lang="scss" scoped>
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
