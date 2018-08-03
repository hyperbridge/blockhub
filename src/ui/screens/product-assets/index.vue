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
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                        <div class="assets-list__item">
                            <div class="thumb">
                                <img src="https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png" />
                            </div>
                            <div class="info">
                                <h5>Magic Plate Armor</h5>
                                <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    1.99
                                </span>
                                <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    350. 000
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <c-assets-grid></c-assets-grid>
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

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-tags-list': () => import('@/ui/components/product-tags'),
            'c-assets-grid': () => import('@/ui/components/assets-grid')
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
    .assets-list__item{
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: #1C2032;
        padding: 10px;
        margin: 0 0 15px;
        width: calc( 33% - 8px );
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media only screen and (min-width: 1400px){
            width: calc( 25% - 8px );
        }
        .thumb{
            display: inline-block;
            float: left;
            width: 25%;
            img{
                width: 100%;
                height: auto;
            }
        }
        .info{
            display: inline-block;
            width: 70%;
            float: right;
            span{
                i{
                    margin-right: 5px;
                }
            }
        }
    }
</style>

