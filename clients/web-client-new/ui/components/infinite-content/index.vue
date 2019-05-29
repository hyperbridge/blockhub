<template>
    <div>
        <template v-for="(item, index) in sliced" v-if="sliced">
            <transition-group name="slideUp" :key="`level-1-${index}`">
                <div @mouseover="activeElementIndex = index" :key="`level-2-${index}`">
                <div class="row justify-content-center" v-if="item.type === 'frontpageProduct'">
                    <div class="col-12">
                        <div class="frontpage-product">
                            <c-simple-vote :rating="item.rating" v-if="activeElementIndex === index" v-darklaunch="'RATINGS'" />
                            <div class="row">
                                <div class="col-12 col-lg-6 frontpage-product__slider" v-if="item.data.images">
                                    <c-img :src="item.data.images.mediumTile" :data-link="`/product/${item.data.id}`" />
                                </div>
                                <div class="col-12 col-lg-6 frontpage-product__info">
                                    <h2><router-link :to="`/product/${item.data.id}`">{{ item.data.name }}</router-link></h2>
                                    <p>{{ item.data.shortDescription }}</p>
                                    <c-tags :tags="item.data.developerTags"></c-tags>
                                    <div class="frontpage-product__footer">
                                        <div class="price-list" v-if="item.data.price">
                                            <div class="price oldPrice" v-if="item.data.oldPrice">
                                                {{ item.data.oldPrice | convertCurrency }}
                                                <!--<span>usd</span>-->
                                            </div>
                                            <div class="price">
                                                {{ item.data.price | convertCurrency }}
                                                <!--<span>usd</span>-->
                                            </div>
                                        </div>
                                        <c-button status="success" v-if="item.data.price">
                                            Proceed to Purchase
                                        </c-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'featuredProductGallery'">
                    <div class="col-12">
                        <c-banner class="margin-bottom-30" :slides="item.data.slides" v-if="item.data.slides" />

                        <c-block class="margin-bottom-30" :title="item.data.title" :noGutter="true" :onlyContentBg="true" :bgGradient="true" v-else>
                            <p v-if="!item.data.products.length">Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?</p>
                        </c-block>
                    </div>
                </div>

                <div class="row" v-if="item.type === 'productSlider'">
                    <div class="col-12">
                        <c-product-slider :dynamic="false" :products="item.data.products" :title="item.data.title" :maxPerView="item.data.slidesPerView" v-if="item.data.products.length" />

                        <c-block class="margin-bottom-30" :title="item.data.title" :noGutter="true" :onlyContentBg="true" :bgGradient="true" v-else>
                            <p v-if="!item.data.products.length">Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?</p>
                        </c-block>
                    </div>
                </div>

                <div class="row margin-bottom-30" v-if="item.type === 'collectionsList'">
                    <div class="col-12">
                        <c-collection-list
                            :title="`Get Started` | translate"
                            :description="`Start building your collection today, share it and save it!` | translate"
                            :collections="item.data.collectionsList"
                        />
                    </div>
                </div>

                <div class="row align-items-stretch" v-if="item.type === 'banners'">
                    <div class="col-12 col-md-5 col-lg-4 margin-bottom-30">
                        <c-simple-banner imgSrc="/img/banners/banner-1.png" to="/battlepass/1">
                            <h4 class="text-yellow">summer block</h4>
                            <h3>Championship</h3>
                            <p>You won't believe the prize!</p>
                        </c-simple-banner>
                    </div>
                    <div class="col-12 col-md-7 col-lg-8 margin-bottom-30">
                        <c-simple-banner imgSrc="/img/banners/banner-2.png" to="/curators">
                            <div class="align-items-start">
                                <h3 class="text-yellow margin-bottom-5">top<br>curators</h3>
                                <h4 class="text-capitalize">What are they<br>playing?</h4>
                            </div>
                        </c-simple-banner>
                    </div>
                </div>

                <div class="row margin-bottom-50 margin-top-20 align-items-stretch" v-if="item.type === 'banners'">
                    <div :class="banner.class" v-for="(banner, index) in item.data.banners" :key="index">
                        <c-simple-banner :imgSrc="banner.image" :link="banner.link" v-if="item.type == 3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="text-yellow">{{ banner.title }}</h3>
                                    <p>{{ banner.subtitle }}</p>
                                </div>
                                <div class="banner-action">
                                    <c-button status="info" iconHide size="lg">{{ banner.buttonText }}</c-button>
                                </div>
                            </div>
                        </c-simple-banner>
                        <c-simple-banner :imgSrc="banner.imagee" :link="banner.link" v-if="item.type == 4">
                            <h3 class="text-yellow margin-bottom-5">{{ banner.title }}</h3>
                            <p>{{ banner.subtitle }}</p>
                        </c-simple-banner>
                    </div>
                </div>


                <div class="row margin-bottom-30" v-if="item.type === 'productNews'">
                    <div class="col-12">

                        <div class="home-tabs">
                            <c-news-list-navigation
                                :list="item.data.headings"
                            />
                            <div class="tab-content">
                                <c-news-list-articles
                                    v-for="(list, index) in item.data.lists"
                                    :key="index"
                                    :articles="list"
                                    :index="index"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row margin-bottom-30" v-if="item.type === 'curatorReviews'">
                    <div class="col-12">
                        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <c-heading-bar
                                slot="title"
                                class="mb-0"
                                :name="item.data.title"
                                showArrows
                                showActions
                                :activeIndex="curatorsIndex"
                                :itemsLength="item.data.reviews.length"
                                @prevClick="swiperCurators.slidePrev(); updateIndex('curatorsIndex', -1, item.data.reviews.length)"
                                @nextClick="swiperCurators.slideNext(); updateIndex('curatorsIndex', 1, item.data.reviews.length)"
                            />
                            <c-swiper :options="item.data.options" ref="swiper">
                                <c-swiper-slide v-for="(review, index) in item.data.reviews" :key="index">
                                    <c-curator-review :review="review" />
                                </c-swiper-slide>
                            </c-swiper>
                            <p v-if="!item.data.reviews.length">Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?</p>
                        </c-block>
                    </div>
                </div>


                <c-games-explorer v-if="item.type === 'gamesExplorer'" />


                <c-assets-explorer v-if="item.type === 'assetGrid'" :assets="assets" />


                <div class="row margin-bottom-30" v-if="item.type === 'trendingProjectsRow'">
                    <div class="col-12">
                        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                            <c-heading-bar
                                slot="title"
                                class="mb-0"
                                :name="item.data.title"
                                :showArrows="item.data.projects.length > 4"
                                showActions
                                @prevClick="swiperProjects.slidePrev()"
                                @nextClick="swiperProjects.slideNext()"
                            />
                            <c-swiper :options="item.data.options" ref="swiper">
                                <c-swiper-slide v-for="(project, index) in item.data.projects" :key="index">
                                    <c-project-card
                                        class="p-2"
                                        :image="project.images.mediumTile" 
                                        :description="project.description" 
                                        :funds="project.funds" 
                                        :parentName="project.product && project.product.name" 
                                        :parentDeveloper="project.product && project.product.developer" 
                                        :parentImage="project.product && project.product.images.mediumTile"
                                        :id="project.id"
                                    />
                                </c-swiper-slide>
                            </c-swiper>
                            <p v-if="!item.data.projects.length">Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?</p>
                        </c-block>
                    </div>
                </div>


                <div v-if="item.type === 'realmsRow'">
                    <c-swiper :options="item.data.options" class="padding-10">
                        <c-swiper-slide v-for="(realm, index) in item.data.realms" :key="index">
                            <c-collection-item :item="realm" />
                        </c-swiper-slide>
                    </c-swiper>

                    <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        <c-heading-bar
                            slot="title"
                            class="mb-0"
                            :name="item.data.title"
                            :showArrows="true"
                            :showActions="true"
                            @prevClick="swiperRealms.slidePrev()"
                            @nextClick="swiperRealms.slideNext()"
                        />
                        <c-swiper :options="item.data.options" :ref="swiper">
                            <c-swiper-slide v-for="(realm, index) in item.data.realms" :key="index">
                                <c-button :to="`/realm/${realm.id}`">{{ realm.name }}</c-button>
                            </c-swiper-slide>
                        </c-swiper>
                        <p v-if="!item.data.realms.length">Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?</p>
                    </c-block>
                </div>


                <div class="row margin-bottom-30" v-if="item.type === 'gameSeries'">
                    <div class="col-12">
                        <c-game-series v-for="(game, index) in item.data.list" :key="index">
                            <c-game-description :game="game" />
                            <c-game-includes-list :list="game.products" :showNumber="item.data.showNumber" />
                        </c-game-series>
                    </div>
                </div>


                <div class="row margin-bottom-30" v-if="item.type === 'newReleasesGrid'">
                    <div class="col-md-12 col-lg-6 margin-bottom-30">
                        <c-block title="New Releases" :noGutter="true" :bgGradient="true" :onlyContentBg="true" showActions>
                            <template slot="additional-action">
                                <c-heading-bar-fields name="Reviews" icon="star" @clickUp=""  @clickDown="" />
                                <c-heading-bar-fields name="Date" icon="calendar" @clickUp=""  @clickDown="" />
                            </template>

                            <c-game-grid
                                :itemInRow="2"
                                :showRating="true"
                                :showDate="false"
                                :showLink="true"
                                :items="newProducts.slice(0,5)"
                                itemBg="transparent"
                                pricePosition="right"
                            />
                        </c-block>
                    </div>
                </div>


                <div class="row margin-bottom-30" v-if="item.type === 'topItemsGrid'">
                    <div class="col-md-12 col-lg-6 margin-bottom-30">
                        <c-block title="Top 20 Items" :noGutter="true" :bgGradient="true" :onlyContentBg="true" showActions>
                            <template slot="additional-action">
                                <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown="" />
                                <c-heading-bar-fields name="Trading" icon="star" @clickUp=""  @clickDown="" />
                            </template>

                            <c-assets-list
                                :items="assets"
                                itemInRow="2"
                                v-if="assets.length"/>

                            <p v-if="!assets.length">Nothing could be found. Want to <c-button status="plain" @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>?</p>

                            <c-content-navigation v-if="assets.length" />
                        </c-block>
                    </div>
                </div>
                </div>
            </transition-group>
        </template>

        <transition name="fade-slow" v-if="showSignIn">
            <div class="row" v-if="end && !$store.state.application.signedIn">
                <div class="col-12 mb-4 mt-4">
                    <c-recommendation-block />
                </div>
            </div>
            <div class="no-updates" v-if="!sliced">
                <h3>
                    There is no more content.
                </h3>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        list: {
            type: Array,
            required: true
        },
        showSignIn: Boolean
    },
    components: {
        'c-button': () => import('~/components/buttons/index.vue').then(m => m.default || m),
        'c-tags': () => import('~/components/tags').then(m => m.default || m),
        'c-tab': () => import('~/components/tab/tab').then(m => m.default || m),
        'c-tabs': () => import('~/components/tab/tabs').then(m => m.default || m),
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-heading-bar-fields' : () => import('~/components/heading-bar/additional-action').then(m => m.default || m),
        'c-product-card': () => import('~/components/store/product-card').then(m => m.default || m),
        'c-product-card-dynamic': () => import('~/components/store/product-card-dynamic').then(m => m.default || m),
        'c-product-cards': () => import('~/components/store/product-cards').then(m => m.default || m),
        'c-product-slider': () => import('~/components/store/product-slider').then(m => m.default || m),
        'c-project-card': () => import('~/components/project/card').then(m => m.default || m),
        'c-curator-review': () => import('~/components/store/curator-review').then(m => m.default || m),
        'c-game-grid': () => import('~/components/game-grid/with-description').then(m => m.default || m),
        'c-dropdown': () => import('~/components/dropdown-menu/type-2').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m),
        'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        'c-assets-list-item': () => import('~/components/assets-list-item/item').then(m => m.default || m),
        'c-news-list-navigation': () => import('~/components/news-list/navigation').then(m => m.default || m),
        'c-news-list-articles': () => import('~/components/news-list/articles').then(m => m.default || m),
        'c-block': () => import('~/components/block').then(m => m.default || m),
        'c-simple-banner': () => import('~/components/banner/simple').then(m => m.default || m),
        'c-games-explorer': () => import('~/components/store/games-explorer').then(m => m.default || m),
        'c-assets-explorer': () => import('~/components/store/assets-explorer').then(m => m.default || m),
        'c-assets-list': () => import('~/components/assets-list-item').then(m => m.default || m),
        'c-download-block': () => import('~/components/download-block').then(m => m.default || m),
        'c-banner': () => import('~/components/banner').then(m => m.default || m),
        'c-game-series': () => import('~/components/game-series').then(m => m.default || m),
        'c-game-description': () => import('~/components/game-series/game-description').then(m => m.default || m),
        'c-game-includes-list': () => import('~/components/game-series/game-includes-list').then(m => m.default || m),
        'c-collection-list': () => import('~/components/collection/list').then(m => m.default || m),
        'c-collection-item': () => import('~/components/collection/item').then(m => m.default || m),
        'c-recommendation-block': () => import('~/components/infinite-content/recommendation-block').then(m => m.default || m),
    },
    data() {
        return {
            activeElementIndex: null,
            show   : false, // display content after API request
            offset : 1,     // items to display after scroll
            display: 3,     // initial items
            trigger: 300,   // how far from the bottom to trigger infinite scroll
            end    : false, // no more updates,
            curatorsIndex: 0
        }
    },
    computed: {
        ...mapGetters({
            assets: 'marketplace/assetsArray'
        }),
        sliced() {
            return this.list.slice(0, this.display);
        },
        swiperCurators() {
            return this.$refs.swiper[0].swiper;
        },
        swiperProjects() {
            return this.$refs.swiper[1].swiper;
        },
        swiperRealms() {
            return this.$refs.swiper[2].swiper;
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
        updateIndex(targetProp, dir, itemsLength) {
            const target = this[targetProp];
            if (dir && target + 1 <= itemsLength -3) this[targetProp]++;
            else if (!dir && target -1 >= 0) this[targetProp]--;
        },
        slidePrev() {
            const sl = this.$refs.swiperProjects[0].swiper
            console.log(sl)
            window.swiper = sl;
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
        }
    },
    mounted() {
        //$(this.$refs.trendingSlider).ionRangeSlider();

        this.scroll();
    },
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
                background: linear-gradient(to right, rgba(48,49,76,1) 1%,rgba(48,49,76,1) 24%,rgba(48,49,76,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
                background: linear-gradient(to right, rgba(48,49,76,0) 1%, rgba(48,49,76,1) 76%, rgba(48,49,76,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
        background: rgba(0, 0, 0, 0.13);
        border-radius: 5px;
        width: 100%;
        position: relative;
    }
    .frontpage-product__slider{
        img{
            margin: 10px;
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
    }
    .frontpage-product__info{
        h2{
            font-size: 26px;
            font-weight: bold;
            margin: 10px 0;

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
                &.oldPrice{
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
            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
