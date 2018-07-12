<template>
    <c-layout navigationKey="product-navigation">
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
                                <a class="nav-link" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
const updateProduct = function() {
    if (!this.$store.state.marketplace.products)
        return

    const product = this.$store.state.marketplace.products[this.id]

    if (!product)
        return

    if (product.images && product.images.headerUrl)
        window.document.body.style['background-image'] = 'url(' + product.images.headerUrl + ')'
        
    return product
}

export default {
    props: ['id'],
    components: {
        'c-layout': () => import('@/ui/layouts/default')
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

