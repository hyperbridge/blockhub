<template>
    <c-layout navigationKey="storeNavigation">
        <div class="content" id="content">
            <div class="container-fluid">
                        <div class="row justify-content-center top-product">
                            <div class="col-12 col-lg-6 top-product__slider">
                                <img :src="top_game.images['0']" />
                            </div>
                            <div class="col-12 col-lg-6 top-product__info">
                                <h2>{{ top_game.title}}</h2>
                                <p>{{ top_game.description }}</p>
                                <tags-list :tags="top_game.tags"></tags-list>
                                <div class="top-product__footer">
                                    <div class="price-list">
                                        <div class="price old_price" v-if="top_game.old_price">
                                            {{ top_game.old_price }}
                                            <span>usd</span>
                                        </div>
                                        <div class="price">
                                            {{ top_game.price }}
                                            <span>usd</span>
                                        </div>
                                    </div>
                                    <a href="#3" class="btn btn-success"><i class="fas fa-cart-plus"></i> add to cart</a>
                                </div>
                            </div>
                        </div>
                <div class="row game-grid">
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
                    <div class="col-12 col-lg-4" v-for="(item, index) in products" v-bind:key="index">
                        <div class="card invert game-grid__item">
                            <div class="card-body padding-0">
                                <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.mediumTileUrl" /></a>
                                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text">{{ item.shortDescription }} </p>

                                <tags-list :tags="item.authorTags"></tags-list>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row game-grid">
                    <div class="col-12">
                        <h3 class="with_bg">75% Off Week</h3>
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
                    <div class="col-12 col-lg-4" v-for="(item, index) in products" v-bind:key="index">
                        <div class="card invert game-grid__item">
                            <div class="card-body padding-0">
                                <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.mediumTileUrl" /></a>
                                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text">{{ item.shortDescription }} </p>

                                <tags-list :tags="item.authorTags"></tags-list>
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
        'tags-list': () => import('@/ui/components/product-tags/index')
    },
    data() {
        return {
            top_game:{
                images:[
                    'https://3dnews.ru/assets/external/illustrations/2018/05/28/970351/da-inquisition-1.jpg',
                    'https://orig00.deviantart.net/2a38/f/2012/272/8/1/swamp_dragon_by_schur-d5g96rw.jpg'
                ],
                title: 'Dragon Age: Origins Ultimate Edition',
                description: 'Dragon Age: Origins is a role-playing game developed by BioWare ' +
                'and published by Electronic Arts. It is the first game in the Dragon ' +
                'Age franchise, and was released for Microsoft Windows, PlayStation 3, ' +
                'and Xbox 360 in November 2009',
                tags:['top', 'adventure', 'rpg', 'popular'],
                old_price: '59',
                price: '29.99'
            }
        }
    },
    computed: {
        products() {
            const products = this.$store.state.marketplace.entities.products

            return products
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
    .top-product{
        margin-bottom: 30px;
    }
    .top-product__slider{
        img{
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
    }
    .top-product__info{
        h2{
            font-size: 26px;
            font-weight: bold;
            margin: 0;
        }
        p{
            margin: 15px 0;
        }
    }
    .top-product__footer{
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

    .game-grid{
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
    .game-grid__item{
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
        .product__tag {
            margin-top: 10px;
            margin-bottom: 0;
            a{
                background: red;
                color: green;
            }
        }
    }
</style>
