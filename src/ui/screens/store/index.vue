<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row justify-content-center frontpage-product" v-if="frontpage_product">
                    <div class="col-12 col-lg-6 frontpage-product__slider" v-if="frontpage_product.images">
                        <img :src="frontpage_product.images.medium_tile" />
                    </div>
                    <div class="col-12 col-lg-6 frontpage-product__info">
                        <h2><a :href="`/#/product/${frontpage_product.id}`">{{ frontpage_product.name }}</a></h2>
                        <p>{{ frontpage_product.short_description }}</p>
                        <c-tags :tags="frontpage_product.author_tags"></c-tags>
                        <div class="frontpage-product__footer">
                            <div class="price-list">
                                <div class="price old_price" v-if="frontpage_product.old_price">
                                    {{ frontpage_product.old_price }}
                                    <span>usd</span>
                                </div>
                                <div class="price">
                                    {{ frontpage_product.price }}
                                    <span>usd</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-success"><i class="fas fa-cart-plus"></i> add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="row product-grid">
                    <div class="col-12">
                        <h3>New Releases</h3>
                        <div class="sl_nav">
                            <a href="#3" class="nav-prev">
                                <i class="fas fa-arrow-left"></i>
                            </a>
                            <a href="#3" class="nav-next">
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="col-12 col-lg-4" v-for="(item, index) in new_products" v-bind:key="index">
                        <div class="card invert product-grid__item">
                            <div class="card-body padding-0" v-if="frontpage_product.images">
                                <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text" hidden>{{ item.short_description }} </p>

                                <c-tags :tags="item.author_tags"></c-tags>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row product-grid">
                    <div class="col-12">
                        <h3 class="with_bg">Summer Sale</h3>
                        <div class="sl_nav">
                            <a href="#3" class="nav-prev">
                                <i class="fas fa-arrow-left"></i>
                            </a>
                            <a href="#3" class="nav-next">
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="col-12 col-lg-4" v-for="(item, index) in sale_products" v-bind:key="index">
                        <div class="card invert product-grid__item">
                            <div class="card-body padding-0" v-if="frontpage_product.images">
                                <a :href="`#/product/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text" hidden>{{ item.short_description }} </p>

                                <c-tags :tags="item.author_tags"></c-tags>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default'),
        'c-tags': () => import('@/ui/components/product-tags')
    },
    computed: {
        products() {
            if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products)
                return this.$store.state.cache.screens['/store'].products

            return this.$store.state.marketplace.products
        },
        new_products() {
            return this.$store.state.marketplace.new_products
        },
        sale_products() {
            return this.$store.state.marketplace.sale_products
        },
        frontpage_product() {
            return this.$store.state.marketplace.frontpage_product
        }
    },
    methods: {
        filterTag(tagName) {
            alert(tagName)
        }
    }
}
</script>

<style lang="scss" scoped>
    .frontpage-product{
        margin-bottom: 30px;
    }
    .frontpage-product__slider{
        img{
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
    }
    .frontpage-product__info{
        h2{
            font-size: 26px;
            font-weight: bold;
            margin: 0;

            a {
                color: #fff;
            }
        }
        p{
            margin: 15px 0;
        }
    }
    .frontpage-product__footer{
        .price-list{
            margin-right: 15px;
            display: inline-block;
            float: left;
            .price{
                display: inline-block;
                float: left;
                margin-right: 15px;
                font-size: 18px;
                font-weight: bold;
                text-transform: uppercase;
                line-height: 32px;
                position: relative;
                overflow: hidden;
                span{
                    font-size: 13px;
                }
                &.old_price{
                    &:before{
                        position: absolute;
                        height: 2px;
                        left: 0;
                        right: 0;
                        top: 50%;
                        width: 100%;
                        background: red;
                        content: "";
                        display: inline-block;
                        transform: rotate(30deg)
                    }
                    &:after{
                        position: absolute;
                        height: 2px;
                        left: 0;
                        right: 0;
                        top: 50%;
                        width: 100%;
                        background: red;
                        content: "";
                        display: inline-block;
                        transform: rotate(-30deg)
                    }
                }
            }
        }
        a{
            padding: 5px 10px;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: bold;
            i{
                margin-right: 5px;
            }
        }
    }

    .product-grid{
        margin-top: 60px;

        h3{
            color: #fff;
            border-bottom: 5px solid #fff;
            padding: 0 5px 0 0;
            margin: 0;
            display: inline-block;
            font-size: 21px;
            font-weight: bold;
            line-height: 36px;
            float: left;
            max-width: calc( 100% - 95px );
            position: relative;
            &:after{
                content: "";
                position: absolute;
                bottom: -6px;
                right: -5px;
                height: 5px;
                border: 3px solid transparent;
                border-bottom: 3px solid #fff;
                border-left: 3px solid #fff;
            }
            &.with_bg{
                background: #fff;
                color: #30304B;
                border-radius: 5px 10px 0 0;
                border: none;
                padding: 0 15px;
                line-height: 40px;
                font-weight: normal;
                &:after{
                    height: 36px;
                    bottom: 0;
                    right: -34px;
                    border: 18px solid transparent;
                    border-bottom: 18px solid #fff;
                    border-left: 18px solid #fff;
                }
            }
        }
        .sl_nav{
            display: inline-block;
            width: 60px;
            float: right;
            text-align: right;
            a{
                display: inline-block;
                width: 30px;
                color: #fff;
                float: left;
                line-height: 40px;
                font-size: 20px;
            }
        }
        .line{
            display: inline-block;
            width: 100%;
            height: 2px;
            background: #fff;
            float: left;
            margin-bottom: 20px;
        }
    }
    .product-grid__item{
        padding: 8px 6px;
        border-radius: 5px;
        h4{
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
        .product-tags {
            margin-top: 10px;
            margin-bottom: 0;
        }
    }
</style>
