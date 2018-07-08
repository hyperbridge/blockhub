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
                <div class="row">
                    <div class="col-12">
                        <h3>New Releases</h3>
                    </div>
                    <div class="col-12 col-lg-4" v-for="(item, index) in products" v-bind:key="index">
                        <div class="card invert">
                            <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.mediumTileUrl" /></a>
                            <div class="card-body">
                                <h4 class="card-title"><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text">{{ item.shortDescription }} </p>

                                <div class="product__tag" v-for="(tag, index) in item.authorTags" v-bind:key="index">
                                    <a href="#" class="card-link" @click="filterTag(tag)">{{ tag }}</a>
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
            height: 220px;
            object-fit: cover;
        }
    }
    .top-product__info{
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
                span{
                    font-size: 13px;
                }
                &.old_price{

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
</style>
