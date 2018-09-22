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
                                <router-link :to="`/product/${product.id}`" class="nav-link">Overview</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/community`" class="nav-link">Community</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/projects`" class="nav-link">Projects</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="`/product/${product.id}/assets`" class="nav-link active">Assets</router-link>
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

        if (product.images.preview && product.images.preview.length) {
            const header = window.document.getElementById('header-bg');
            header.style['background-image'] = 'url(' + product.images.preview[0] + ')';
            header.style['background-size'] = 'cover';
        }

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
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-tags-list': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-assets-grid': (resolve) => require(['@/ui/components/assets-grid'], resolve),
            'c-assets-list-item': (resolve) => require(['@/ui/components/assets-list-item'], resolve)
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
            product: updateProduct,
            editing() {
                if (!this.$store.state.marketplace.editor_mode) {
                    for (let key in this.activeElement) {
                        this.activeElement[key] = false
                    }
                }
                return this.$store.state.marketplace.editor_mode === 'editing'
            },
        },
        mounted: updateProduct,
        created: updateProduct,
        beforeDestroy() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)'
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

