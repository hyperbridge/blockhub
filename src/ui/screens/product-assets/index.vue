<template>
    <c-layout navigationKey="product-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row" v-if="!product">
                    <div class="col-12">
                        Product not found
                    </div>
                </div>



                <div class="row" v-if="product">
                    <div class="col-12">
                        <h1 class="title margin-top-10 margin-bottom-15">{{ product.name }}</h1>
                        <c-tags-list :tags="product.author_tags"></c-tags-list>
                        <ul class="nav nav-tabs justify-content-between margin-bottom-30">
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}`">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/community`">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="`/#/product/${product.id}/projects`">Projects</a>
                            </li>
                            <li class="nav-item mr-0">
                                <a class="nav-link active" :href="`/#/product/${product.id}/assets`">Assets</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 d-flex justify-content-between flex-wrap assets-list margin-bottom-30">
                        <div class="assets-list__item-container">
                            <c-assets-list-item></c-assets-list-item>
                        </div>
                    </div>
                    <div class="col-12">
                        <c-assets-grid :list="product.assets" />
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

        product.assets = [
            {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'},
            {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'},
            {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}, {name: 'Magic Plate Armor'}
        ]

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-tags-list': () => import('@/ui/components/product-tags'),
            'c-assets-grid': () => import('@/ui/components/assets-grid'),
            'c-assets-list-item': () => import('@/ui/components/assets-list-item')
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
    .assets-list__item-container{
        width: calc( 100%/3 );
        padding: 5px;
        @media only screen and (min-width: 1400px){
            width: 25%;
        }
    }
</style>

