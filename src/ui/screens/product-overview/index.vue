<template>
    <c-layout navigationKey="productNavigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12" v-if="!product">
                        Product not found
                    </div>
                    <div class="col-12" v-if="product">
                        <h1 class="title margin-top-10">{{ product.name }}</h1>
                        
                        <div class="product__tag" v-for="(tag, index) in product.authorTags" v-bind:key="index">
                            <a href="#" class="card-link" @click="filterTag(tag)">{{ tag }}</a>
                        </div>

                        <ul class="nav nav-tabs margin-bottom-50">
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
                                SCREENSHOT GALLERY

                                SALE PRICE BOX

                                <plan-list></plan-list>

                                <h2>An adventure of a lifetime...</h2>

                                <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>

                                <p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>


                                IMAGE LIST
                            </div>
                            <div class="col-5">
                                <div class="card invert">
                                    <h2 class="title">Rating</h2>
                                </div>

                                <div class="card invert">
                                    <h2 class="title">Frequently Traded Assets</h2>
                                </div>

                                <div class="card invert">
                                    <h2 class="title">Community Spotlight</h2>
                                </div>

                                <div class="card invert">
                                    <h2 class="title">System Requirements</h2>
                                    <div class="form-group margin-bottom-10">
                                        <div class="form-row">
                                            <div class="col-7">
                                                Microsoft Windows
                                                <br />
                                                8GB storage space, 4GB RAM, GTX 1050, or equivalent
                                            </div>
                                            <div class="col-5 text-right">
                                                <div class="icon-box icon-box--sm margin-right-5"><span class="fa fa-clock-o"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 class="title">Languages</h2>
                                <div class="form-group margin-bottom-10">
                                    <div class="form-row">
                                        <div class="col-7">
                                            English
                                        </div>
                                        <div class="col-5 text-right">
                                            <div class="icon-box icon-box--sm margin-right-5"><span class="fa fa-clock-o"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        {{ product.author }}
                        {{ product.images }}

                        <div v-html="product.content"></div>




                        
                        <input type="text" name="name" v-model.lazy="product.name" />

                        <button class="btn" @click="save()">Save</button>
                        view: https://user-images.githubusercontent.com/156768/41747362-8f17d1e8-7562-11e8-8c42-72a78233f921.png
                        create: https://user-images.githubusercontent.com/156768/41747248-230a0142-7562-11e8-919f-41d8dd97cea6.png
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
const updateProduct = function() {
    if (!this.$store.state.marketplace.entities.products)
        return

    const product = this.$store.state.marketplace.entities.products[this.id]

    if (!product)
        return

    if (product.images && product.images.headerUrl)
        window.document.body.style['background-image'] = 'url(' + product.images.headerUrl + ')'
        
    return product
}

export default {
    props: ['id'],
    components: {
        'c-layout': () => import('@/ui/layouts/default'),
        'plan-list': () => import('@/ui/components/game-plans/list.vue')
    },
    data() {
        return {
        }
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

</style>
