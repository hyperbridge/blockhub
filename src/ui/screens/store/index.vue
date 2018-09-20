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
                            <c-button status="success" icon="cart-plus">Add To Cart</c-button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <c-block class="margin-bottom-30" :onlyContentBg="true" :noGutter="true">
                            <c-heading-bar
                                slot="title"
                                class="mb-0"
                                name="New Releases"
                                :showArrows="showArrowsState(new_products, 3)"
                                :showBackground="true"
                                @prevClick="demo_products_sl.slidePrev()"
                                @nextClick="demo_products_sl.slideNext()"
                            />

                            <c-swiper :options="demoSlider" ref="demo_products_sl" style="margin: 0 -10px">
                                <c-slide v-for="product in new_products" :key="product.id">
                                    <c-product-card-dynamic :product="product"/>
                                </c-slide>
                            </c-swiper>

                        </c-block>

                        <c-block class="margin-bottom-30" :onlyContentBg="true" :noGutter="true">
                            <c-heading-bar
                                slot="title"
                                class="mb-0"
                                name="Summer Sale"
                                :showArrows="showArrowsState(sale_products, 3)"
                                :showBackground="true"
                                @prevClick="summer_sale_sl.slidePrev()"
                                @nextClick="summer_sale_sl.slideNext()"
                            />

                            <c-swiper :options="saleSlider" ref="summer_sale_sl" style="margin: 0 -10px" v-if="sale_products.length>0">
                                <c-slide v-for="(product, index) in sale_products" :key="index">
                                    <c-product-card-dynamic :product="product" />
                                </c-slide>
                            </c-swiper>

                        </c-block>
                    </div>
                </div>

                <div class="row align-items-stretch">
                    <div class="col-12 col-md-4 margin-bottom-30">
                        <c-banner :imgSrc="'/static/img/banners/banner-1.png'" link="/#/home">
                            <h4 class="text-yellow">summer block</h4>
                            <h3>Championship</h3>
                            <p>You won't believe the prize!</p>
                        </c-banner>
                    </div>
                    <div class="col-12 col-md-8 margin-bottom-30">
                        <c-banner :imgSrc="'/static/img/banners/banner-2.png'" link="/#/home">
                            <div class="align-items-start">
                                <h3 class="text-yellow margin-bottom-5">top<br>curators</h3>
                                <h4 class="text-capitalize">What are they<br>playing?</h4>
                            </div>
                        </c-banner>
                    </div>

                    <div class="col-12 margin-bottom-30">
                        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <c-heading-bar
                                slot="title"
                                class="mb-0"
                                :headingTabs="[
                                { title: 'Top Selling', category: 'top_selling_products' },
                                { title: 'New Releases', category: 'new_products' },
                                { title: 'Upcoming', category: 'upcoming_products' }
                            ]"
                                @changeTab="itemsCategory = $event"
                            >
                                <template slot="additional-action">
                                    <span class="font-weight-bold">Sort by</span>
                                    <c-heading-bar-fields name="Date" icon="calendar" @clickUp=""  @clickDown="" />
                                    <c-heading-bar-fields name="Best Reviews" icon="star" @clickUp=""  @clickDown="" />
                                    <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown="" />
                                </template>
                            </c-heading-bar>
                            <div class="filter-blk">
                                <div class="d-flex align-items-center">
                                    <c-dropdown id="test" name="Filter by Genre" :showBg="true">
                                        <a href="#3">RPG</a>
                                        <a href="#3">ACTION</a>
                                        <a href="#3">Cars</a>
                                    </c-dropdown>
                                    <c-searcher customClass="mb-0" />
                                </div>
                                <c-button status="info" icon_hide>All New Releases</c-button>
                            </div>
                            <c-game-grid
                                :itemInRow=2
                                :showRating=false
                                :showTime=true
                                :items="marketplace[itemsCategory]"
                                itemBg="transparent"
                            />
                            <c-content-navigation />
                        </c-block>
                    </div>
                </div>

                <div class="row margin-bottom-50 margin-top-20 align-items-stretch">
                    <div class="col-12 col-md-8">
                        <c-banner :imgSrc="'/static/img/banners/banner-3.png'" link="/#/home">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="text-yellow">Item Marketplace</h3>
                                    <p>You all in one spot for games assets</p>
                                </div>
                                <div class="banner-action">
                                    <c-button status="info" icon_hide size="lg">VISIT NOW</c-button>
                                </div>
                            </div>
                        </c-banner>
                    </div>
                    <div class="col-12 col-md-4">
                        <c-banner :imgSrc="'/static/img/banners/banner-4.png'" link="/#/home">
                            <h3 class="text-yellow margin-bottom-5">Top Collections</h3>
                            <p>We curated the best ones for you</p>
                        </c-banner>
                    </div>
                </div>

                <div class="row margin-bottom-30">
                    <div class="col-12">
                        <c-block :noGutter="true" :onlyContentBg="true" class="margin-bottom-30">
                            <c-heading-bar
                                slot="title"
                                class="mb-0"
                                :headingTabs="['Top 10 Items', 'Most Wanted', 'Top 10 Prices']"
                            >
                                <template slot="additional-action">
                                    <c-heading-bar-fields name="Trending" @clickUp=""  @clickDown=""/>
                                    <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown=""/>
                                </template>
                            </c-heading-bar>
                            <div class="filter-blk">
                                <div class="d-flex align-items-center">
                                    <c-dropdown id="test2" name="Filter by Genre" :showBg="true">
                                        <a href="#3">RPG</a>
                                        <a href="#3">ACTION</a>
                                        <a href="#3">Cars</a>
                                    </c-dropdown>
                                    <c-searcher customClass="mb-0" />
                                </div>
                                <c-button status="info"  :icon_hide="true">All New Releases</c-button>
                            </div>
                            <div class="d-flex justify-content-between flex-wrap">
                                <div class="w-50" v-for="(item, index) in assets" :key="index">
                                    <c-assets-list-item
                                        :item="item"
                                        :isTransparent="true"
                                    >
                                        <span class="mr-3">
                                            <c-icon name="box"/>{{ item.count }}
                                        </span>
                                        <span class="mr-3">
                                            <c-icon name="dollar-sign"/>{{ item.price }}
                                        </span>
                                        <span class="mr-3">
                                            <c-icon name="dollar-sign"/>3.45
                                        </span>
                                    </c-assets-list-item>
                                </div>
                            </div>
                        </c-block>

                        <c-block :noGutter="true" :bgColor="false" title="What's up with your content">

                        <div class="home-tabs">
                            <c-news-list-navigation
                                :content_news="content_news"
                            />
                            <div class="tab-content">
                                <c-news-list-articles
                                    v-for="(news, index) in content_news"
                                    :key="index"
                                    :news="news"
                                    :index="index"
                                />
                            </div>
                        </div>
                        </c-block>
                    </div>
                </div>

                <c-curators-reviews
                    :reviews="curators_reviews"
                />
            </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

const updateLandingImage = function() {
    const frontpage_product = this.$store.state.marketplace.frontpage_product

    if (frontpage_product && frontpage_product.images) {
        const header = window.document.getElementById('header-bg');
        const randomImage = Math.floor(Math.random() * frontpage_product.images.preview.length);
        header.style['background-image'] = 'url(' + frontpage_product.images.preview[randomImage] + ')';
        header.style['background-size'] = 'cover';
    }
}

export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-button': (resolve) => require(['@/ui/components/buttons/index.vue'], resolve),
        'c-tags': (resolve) => require(['@/ui/components/tags'], resolve),
        'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
        'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
        'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
        'c-heading-bar-fields' : (resolve) => require(['@/ui/components/heading-bar/additional-action'], resolve),
        'c-product-card': (resolve) => require(['@/ui/components/store/product-card'], resolve),
        'c-product-card-dynamic': (resolve) => require(['@/ui/components/store/product-card-dynamic'], resolve),
        'c-products-cards': (resolve) => require(['@/ui/components/store/products-cards'], resolve),
        'c-curators-reviews': (resolve) => require(['@/ui/components/store/curators-reviews'], resolve),
        'c-game-grid': (resolve) => require(['@/ui/components/games-grid/with-description'], resolve),
        'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-2'], resolve),
        'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
        'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
        'c-assets-list-item': (resolve) => require(['@/ui/components/assets-list-item/item'], resolve),
        'c-news-list-navigation': (resolve) => require(['@/ui/components/news-list/navigation'], resolve),
        'c-news-list-articles': (resolve) => require(['@/ui/components/news-list/articles'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        'c-banner': (resolve) => require(['@/ui/components/banner/simple'], resolve),
        'c-swiper': swiper,
        'c-slide': swiperSlide
    },
    data() {
        const curator_review = {
            author: { name: 'SatoSan', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' },
            rate: 4.5,
            game: { img: 'http://www.pixels-association.ch/wp-content/uploads/2017/11/no1.jpg' },
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi arcu, viverra et efficitur luctus, tincidunt vel lacus. Morbi erat augue, posuere et sodales venenatis, tincidunt eu arcu. In sollicitudin purus quis sodales ornare. Cras tempus vestibulum elementum. Sed placerat, turpis id cursus cursus, augue enim molestie dui, elementum luctus lectus est vitae dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vehicula mi a nunc cursus, id volutpat purus commodo. Duis consequat elementum varius. Suspendisse dui enim, rhoncus a molestie at, tristique ut urna. Praesent et consectetur dui. Pellentesque ut volutpat nunc, ut viverra nulla. Duis ultricies, sem sit amet laoreet lobortis, mauris est mollis orci, non eleifend urna leo quis lectus. Vestibulum sit amet volutpat est.',
            more_reviews: [
                {
                    rate: 3.5,
                    game: {
                        title: 'Volgar the Viking',
                        img: 'https://images-1.gog.com/54e9b9504af871d5a6ed67f9a9c439fc3a889ecd4e84d24173b10e49971db9c7.jpg'
                    }
                },
                {
                    rate: 5,
                    game: {
                        title: 'The Witcher 3: Wild Hunt',
                        img: 'http://getwallpapers.com/wallpaper/full/6/f/7/22250.jpg'
                    }
                }
            ]
        }
        return {
            itemsCategory: 'top_selling_products',
            curators_reviews: [curator_review, curator_review, curator_review],
            content_news: [
                {
                    game: {
                        title: 'Diablo III',
                        developer: 'Blizzard Entertainment',
                        img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                    },
                    articles: [
                        {
                            heading: 'New class and event coming next week!',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                            url: 'article-url',
                            date: '2018-07-24T04:09:00.000Z'
                        }
                    ]
                },
                {
                    game: {
                        title: 'Diablo I',
                        developer: 'Blizzard Entertainment',
                        img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                    },
                    articles: [
                        {
                            heading: 'New class and event coming next week!',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                            url: 'article-url',
                            date: '2016-09-24T04:09:00.000Z'
                        },
                        {
                            heading: 'New class and event coming next week!',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                            url: 'article-url',
                            date: '2014-03-24T04:09:00.000Z'
                        }
                    ]
                },
                {
                    game: {
                        title: 'Diablo II',
                        developer: 'Blizzard Entertainment',
                        img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                    },
                    articles: [
                        {
                            heading: 'New class and event coming next week!',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                            url: 'article-url',
                            date: '2017-12-24T04:09:00.000Z'
                        }
                    ]
                }
            ],
            // Slider options
            demoSlider: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            saleSlider: {
                slidesPerView: 3,
                spaceBetween: 0
            },
        }
    },
    computed: {
        projects() {
            return this.$store.state.funding.projects
        },
        products() {
            if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products)
                return this.$store.state.cache.screens['/store'].products

            return this.$store.state.marketplace.products
        },
        marketplace() {
            return this.$store.state.marketplace;
        },
        new_products() {
            return this.$store.state.marketplace.new_products
        },
        sale_products() {
            return this.$store.state.marketplace.sale_products
        },
        frontpage_product() {
            updateLandingImage.bind(this)()

            return this.$store.state.marketplace.frontpage_product
        },
        summer_sale_sl() {
            return this.$refs.summer_sale_sl.swiper;
        },
        demo_products_sl() {
            return this.$refs.demo_products_sl.swiper;
        },
        assets: function () {
            return this.$store.state.marketplace.assets
        }
    },
    methods: {
        filterTag(tagName) {
            alert(tagName)
        },
        prevClick(carousel){
            carousel.slidePrev();
        },
        nextClick(carousel){
            carousel.slideNext();
        },
        showArrowsState(el, count){
            if ( el.length > count){
                return true
            } else {
                return false
            }
        }
    },
    mounted: updateLandingImage,
    created: updateLandingImage,
    beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)'
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
        p {
            margin: 15px 0;
        }
    }
    .frontpage-product__footer{
        .price-list{
            margin-right: 15px;
            float: left;
            .price{
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
                        transform: rotate(20deg);
                        opacity: 0.7;
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
                        transform: rotate(-20deg);
                        opacity: 0.7;
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

    .block-bg{
        background: rgba(0, 0, 0, .2);
        margin: -20px 0 0;
        width: 100%;
        padding: 15px;
        &.block-gradient{
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+88,000000+100&0.65+91,0+100 */
            background: -moz-linear-gradient(top, rgba(0,0,0,0.2) 88%, rgba(0,0,0,0.2) 91%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
        }
    }

    .filter-blk{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .banner{
        .text-yellow{
            color: #FADC72;
        }
        h3{
            font-size: 2.5em;
            text-transform: uppercase;
            padding: 0;
            margin: 5px 0;
            font-weight: bold;
        }
        h4{
            font-size: 1.5em;
            text-transform: uppercase;
            padding: 0;
            margin: 0;
            font-weight: bold;
            line-height: 24px;
        }
        p{
            font-size: 16px;
            padding: 0;
            margin: 0;
        }
    }
</style>

