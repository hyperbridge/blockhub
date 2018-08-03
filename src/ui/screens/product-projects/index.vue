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
                        
                        <c-tags-list :tags="product.author_tags" v-if="!editing"></c-tags-list>

                        <ul class="nav nav-tabs margin-bottom-50 justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>

                        <div class="card invert" v-if="!product.projects.length">
                            No projects
                        </div>

                        <div class="row" v-if="product.projects.length">
                            <div class="col-12 col-lg-4" v-for="(item, index) in product.projects" :key="index">
                                <div class="card invert game-grid__item">
                                    <div class="card-body padding-0">
                                        <a :href="`/#/project/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                                        <h4><a :href="`/#/project/${item.id}`">{{ item.name }}</a></h4>
                                        <p class="card-text">{{ item.short_description }} </p>

                                        <c-tags :tags="item.author_tags"></c-tags>
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
const updateProduct = function() {
    if (!this.$store.state.marketplace.products)
        return

    const product = this.$store.state.marketplace.products[this.id]

    if (!product)
        return

    if (product.images && product.images.header)
        window.document.body.style['background-image'] = 'url(' + product.images.header + ')'

    if (!product.projects)
        product.projects = []
        
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

