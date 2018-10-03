<template>
    <div>
        <template v-for="(item, index) in sliced" v-if="sliced">
            <transition-group name="slideUp" :key="index">
                <div class="row justify-content-center frontpage-product" v-if="item.type === 'frontpage_product'" :key="`level-1-${index}`">
                    <div class="col-12 col-lg-6 frontpage-product__slider" v-if="item.data.images">
                        <c-img :src="item.data.images.medium_tile" />
                    </div>
                    <div class="col-12 col-lg-6 frontpage-product__info">
                        <h2><a :href="`/#/product/${item.data.id}`">{{ item.data.name }}</a></h2>
                        <p>{{ item.data.short_description }}</p>
                        <c-tags :tags="item.data.author_tags"></c-tags>
                        <div class="frontpage-product__footer">
                            <div class="price-list">
                                <div class="price old_price" v-if="item.data.old_price">
                                    {{ item.data.old_price }}
                                    <span>usd</span>
                                </div>
                                <div class="price">
                                    {{ item.data.price }}
                                    <span>usd</span>
                                </div>
                            </div>
                            <c-button status="success">Proceed to Purchase</c-button>
                        </div>
                    </div>
                </div>

                <div class="row" v-if="item.type === 'product_slider'" :key="`level-1-${index}`">
                    <div class="col-12">
                        <c-product-slider :products="item.data.products" :title="item.data.title" :maxPerView="item.data.slidesPerView" v-if="item.data.products.length" />

                        <c-block class="margin-bottom-30" :title="item.data.title" :noGutter="true" :onlyContentBg="true" :bgGradient="true" v-else>
                            <p v-if="!item.data.products.length">Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?</p>
                        </c-block>
                    </div>
                </div>

                <div class="row align-items-stretch" v-if="item.type === 'banners'" :key="`level-1-${index}`">
                    <div class="col-12 col-md-4 margin-bottom-30">
                        <c-banner :imgSrc="'/static/img/banners/banner-1.png'" link="/#/home">
                            <h4 class="text-yellow">summer block</h4>
                            <h3>Championship</h3>
                            <p>You won't believe the prize!</p>
                        </c-banner>
                    </div>
                    <div class="col-12 col-md-8 margin-bottom-30">
                        <c-banner :imgSrc="'/static/img/banners/banner-2.png'" link="/#/curators">
                            <div class="align-items-start">
                                <h3 class="text-yellow margin-bottom-5">top<br>curators</h3>
                                <h4 class="text-capitalize">What are they<br>playing?</h4>
                            </div>
                        </c-banner>
                    </div>
                </div>

                <c-games-explorer v-if="item.type === 'games_explorer'" :key="`level-1-${index}`" />
                <c-assets-explorer v-if="item.type === 'asset_grid'" :key="`level-1-${index}`" :assets="assets"/>

                <div class="row margin-bottom-30" v-if="item.type === 'product_news'" :key="`level-1-${index}`">
                    <div class="col-12">

                        <div class="home-tabs">
                            <c-news-list-navigation
                                :news="item.data.news"
                            />
                            <div class="tab-content">
                                <c-news-list-articles
                                    v-for="(news, index) in item.data.news"
                                    :key="index"
                                    :news="news"
                                    :index="index"
                                />
                            </div>
                            <p v-if="!item.data.news.length">Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?</p>
                        </div>
                    </div>
                </div>

                <div class="row margin-bottom-50 margin-top-20 align-items-stretch" v-if="item.type === 'banners'" :key="index">
                    <div class="col-12 col-md-8">
                        <c-banner :imgSrc="'/static/img/banners/banner-3.png'" link="/#/marketplace">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="text-yellow">Item Marketplace</h3>
                                    <p>All-in-one spot for games assets</p>
                                </div>
                                <div class="banner-action">
                                    <c-button status="info" icon_hide size="lg">VISIT NOW</c-button>
                                </div>
                            </div>
                        </c-banner>
                    </div>
                    <div class="col-12 col-md-4">
                        <c-banner :imgSrc="'/static/img/banners/banner-4.png'" link="/#/collections">
                            <h3 class="text-yellow margin-bottom-5">Top Collections</h3>
                            <p>Our community has curated the best ones for you</p>
                        </c-banner>
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'curator_reviews'" :key="`level-1-${index}`">
                    <div class="col-12">
                        <c-block title="From Our Curators" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <c-curator-reviews
                                :reviews="item.data.reviews"
                            />
                        </c-block>
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'trending_projects_row'" :key="`level-1-${index}`">
                    <div class="col-12">
                        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <c-heading-bar
                                slot="title"
                                class="mb-0"
                                :name="item.data.title"
                                :showArrows="showArrowsState(item.data.projects, 3)"
                                :prevClick="() => this.$refs['swiper-' + index].swiper.slidePrev()"
                                :nextClick="() => this.$refs['swiper-' + index].swiper.slideNext()"
                            />
                            <c-swiper :options="item.data.options" :ref="`swiper-${index}`">
                                <c-slide v-for="(project, index) in item.data.projects" :key="index">
                                    <c-projects-card :project="project" />
                                </c-slide>
                            </c-swiper>
                        </c-block>
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'game_series'" :key="`level-1-${index}`">
                    <div class="col-12">
                        <c-game-series>
                            <c-game-description />
                            <c-game-includes-list :list="item.data.series_list" :showNumber="5" />
                        </c-game-series>
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'collections_list'" :key="`level-1-${index}`">
                    <div class="col-12">
                        <c-collection-list title="Get Started"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Integer sit amet tellus in neque porttitor consequat."
                        >
                            <c-swiper :options="item.data.options" class="padding-10">
                                <c-slide v-for="(collection, index) in item.data.collections_list" :key="index">
                                    <c-collection-item :item="collection" />
                                </c-slide>
                            </c-swiper>
                        </c-collection-list>
                    </div>
                </div>


                <div class="row margin-bottom-30" v-if="item.type === 'main_banner'" :key="`level-1-${index}`">
                    <div class="col-12">
                        <c-main-banner class="margin-bottom-30" :image="main_banner.img" :logo="main_banner.logo" />
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'new_releases_grid'" :key="`level-1-${index}`">
                    <div class="col-md-12 col-lg-6 margin-bottom-30">
                        <c-block title="New Releases" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <template slot="additional-action">
                                <c-heading-bar-fields name="Reviews" icon="star" @clickUp=""  @clickDown="" />
                                <c-heading-bar-fields name="Date" icon="calendar" @clickUp=""  @clickDown="" />
                            </template>

                            <c-game-grid
                                :itemInRow="2"
                                :showRating="true"
                                :showDate="false"
                                :showLink="true"
                                :items="new_products.slice(0,5)"
                                itemBg="transparent"
                                pricePosition="right"
                            />
                        </c-block>
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'top_items_grid'" :key="`level-1-${index}`">
                    <div class="col-md-12 col-lg-6 margin-bottom-30">
                        <c-block title="Top 20 Items" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <template slot="additional-action">
                                <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown="" />
                                <c-heading-bar-fields name="Trading" icon="star" @clickUp=""  @clickDown="" />
                            </template>

                            <c-assets-list
                                :items="assets"
                                itemInRow="2"
                                v-if="assets.length"
                            />

                            <p v-if="!assets.length">Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?</p>

                            <c-content-navigation v-if="assets.length" />
                        </c-block>
                    </div>
                </div>

            </transition-group>
        </template>

        <transition name="fade-slow">
            <div class="" v-if="end">
                <h3></h3>
            </div>
            <div class="no-updates" v-if="!sliced">
                <h3>
                    There is no content yet.
                </h3>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

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
    props: {
        list: {
            type: Array,
            required: true
        }
    },
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
        'c-product-cards': (resolve) => require(['@/ui/components/store/product-cards'], resolve),
        'c-product-slider': (resolve) => require(['@/ui/components/store/product-slider'], resolve),
        'c-projects-card': (resolve) => require(['@/ui/components/project/card'], resolve),
        'c-curator-reviews': (resolve) => require(['@/ui/components/store/curator-reviews'], resolve),
        'c-game-grid': (resolve) => require(['@/ui/components/game-grid/with-description'], resolve),
        'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-2'], resolve),
        'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
        'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
        'c-assets-list-item': (resolve) => require(['@/ui/components/assets-list-item/item'], resolve),
        'c-news-list-navigation': (resolve) => require(['@/ui/components/news-list/navigation'], resolve),
        'c-news-list-articles': (resolve) => require(['@/ui/components/news-list/articles'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        'c-banner': (resolve) => require(['@/ui/components/banner/simple'], resolve),
        'c-games-explorer': (resolve) => require(['@/ui/components/store/games-explorer'], resolve),
        'c-assets-explorer': (resolve) => require(['@/ui/components/store/assets-explorer'], resolve),
        'c-assets-list': (resolve) => require(['@/ui/components/assets-list-item'], resolve),
        'c-project-card': (resolve) => require(['@/ui/components/project/card'], resolve),
        'c-download-block': (resolve) => require(['@/ui/components/download-block'], resolve),
        'c-main-banner': (resolve) => require(['@/ui/components/banner'], resolve),
        'c-swiper': swiper,
        'c-slide': swiperSlide,
        'c-game-series': (resolve) => require(['@/ui/components/game-series'], resolve),
        'c-game-description': (resolve) => require(['@/ui/components/game-series/game-description'], resolve),
        'c-game-includes-list': (resolve) => require(['@/ui/components/game-series/game-includes-list'], resolve),
        'c-collection-list': (resolve) => require(['@/ui/components/collection/list'], resolve),
        'c-collection-item': (resolve) => require(['@/ui/components/collection/item'], resolve),
    },
    data() {
        return {
            show   : false, // display content after API request
            offset : 1,     // items to display after scroll
            display: 3,     // initial items
            trigger: 50,   // how far from the bottom to trigger infinite scroll
            end    : false, // no more updates
        }
    },
    computed: {
        ...mapGetters({
            assets: 'marketplace/assetsArray'
        }),
        projects() {
            return this.$store.state.funding.projects
        },
        products() {
            if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products)
                return this.$store.state.cache.screens['/store'].products

            return this.$store.state.marketplace.products
        },
        sliced() {
            updateLandingImage.bind(this)()

            return this.list.slice(0, this.display);
        },
        // trending_projects() {
        //     return this.$store.state.marketplace.trending_projects;
        // },
        new_products() {
            return this.$store.state.marketplace.new_products;
        },
        product_news() {
            return this.$store.state.marketplace.product_news;
        },
        main_banner() {
            return this.$store.state.marketplace.main_banner;
        },
        signed_in() {
            return this.$store.state.network.signed_in;
        },
        simulator_mode() {
            return this.$store.state.marketplace.simulator_mode;
        },
        desktop_mode() {
            return this.$store.state.marketplace.desktop_mode;
        },
        developer_mode() {
            return this.$store.state.marketplace.developer_mode;
        }
    },
    methods: {
        showArrowsState(el, count) {
            if ( el.length > count) {
                return true
            } else {
                return false
            }
        },
        scroll() {
            window.onscroll = ev => {
                if (
                    window.innerHeight + window.scrollY >=
                    (document.body.offsetHeight - this.trigger)
                ) {
                    if (this.display < this.list.length) {
                        this.display = this.display + this.offset;
                    }
                    else {
                        this.end = true;
                    }
                }
            };
            console.log('done scroll')
        }
    },
    mounted() {
        $(this.$refs.trendingSlider).ionRangeSlider();

        updateLandingImage.call(this)

        this.scroll();
    },
    created() {
        updateLandingImage.call(this)
    },
    beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/backgrounds/1.jpg)'
    }
}
</script>


<style lang="scss">
    /*Crutch to work OWL fine*/
    /*Fixing content and OWL width*/
    .page__content > .content {
        width: calc(100% - 500px);
    }

    /**/
    /**/
    .main-banner {
        padding: 10px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .1);
    }

    .img_slider {
        margin-bottom: 15px;
        position: relative;
        display: inline-block;
        width: 100%;
        overflow: hidden;
        img {
            width: 100%;
            height: 285px;
            object-fit: cover;
            border-radius: 5px;
        }
        .owl-controls{
            display: inline-block!important;
            float: left;
            .owl-prev{
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 15%;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#30314c+1,30314c+100&1+24,0+100 */
                background: -moz-linear-gradient(left, rgba(48,49,76,1) 1%, rgba(48,49,76,1) 24%, rgba(48,49,76,0) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(left, rgba(48,49,76,1) 1%,rgba(48,49,76,1) 24%,rgba(48,49,76,0) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to right, rgba(48,49,76,1) 1%,rgba(48,49,76,1) 24%,rgba(48,49,76,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#30314c', endColorstr='#0030314c',GradientType=1 ); /* IE6-9 */
                &:before{
                    content: "\f104";
                    font-family: 'Font Awesome 5 Free';
                    font-size: 60px;
                    color: #fff;
                    opacity: .6;
                    position: absolute;
                    text-align: center;
                    left: 0;
                    right: 0;
                    top: calc( 50% - 30px );
                }
                &:hover{
                    &:before{
                        opacity: 1;
                    }
                }
            }
            .owl-next{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                width: 15%;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#30314c+1,30314c+100&1+24,0+100 */
                background: -moz-linear-gradient(left, rgba(48,49,76,0) 1%, rgba(48,49,76,1) 76%, rgba(48,49,76,1) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(left, rgba(48,49,76,0) 1%, rgba(48,49,76,1) 76%, rgba(48,49,76,1) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to right, rgba(48,49,76,0) 1%, rgba(48,49,76,1) 76%, rgba(48,49,76,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0030314c', endColorstr='#30314c',GradientType=1 ); /* IE6-9 */
                &:before{
                    content: "\f105";
                    font-family: 'Font Awesome 5 Free';
                    font-size: 60px;
                    color: #fff;
                    opacity: .6;
                    position: absolute;
                    text-align: center;
                    left: 0;
                    right: 0;
                    top: calc( 50% - 30px );
                }
                &:hover{
                    &:before{
                        opacity: 1;
                    }
                }
            }
        }
    }

    .project-card__item {
        margin-bottom: 30px;
    }

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
