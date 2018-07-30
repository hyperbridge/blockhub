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
                    <div class="col-12 grid">
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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
                        </div>
                        <div class="item_container">
                            <div class="item">
                                <div class="item_info">
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

        return product
    }

    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-tags-list': () => import('@/ui/components/product-tags')
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
    .grid{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .item_container{
            padding: 4px;
            width: calc(100%/9);
            @media only screen and (min-width: 1400px){
                width: calc(100%/12);
            }
            @media only screen and (min-width: 1600px){
                width: calc(100%/14);
            }
            .item{
                border: 1px solid rgba(255, 255, 255, .8);
                border-radius: 5px;
                width: 100%;
                position: relative;
                display: inline-block;
                float: left;
                &:before{
                    content: "";
                    padding-top: 100%;
                    float: left;
                }
                .item_info{
                    border-radius: 5px;
                    background: #3D3E5D;
                    padding: 10px;
                    box-shadow: 0 0 25px rgba(0, 0, 0, .6);
                    justify-content: space-between;
                    align-items: center;
                    position: absolute;
                    width: 230px;
                    left: calc( 50% + 15px );
                    z-index: 100;
                    height: 80px;
                    top: calc( 50% - 40px );
                    display: none;
                    &:before{
                        display: flex;
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        left: -15px;
                        top: calc( 50% - 15px );
                        content: "";
                        background: #3D3E5D;
                        transform: rotate(45deg);
                        box-shadow: -7px 7px 14px rgba(0, 0, 0, .2);
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
                &:hover{
                    .item_info{
                        display: flex;
                    }
                }
            }
        }
    }
</style>

