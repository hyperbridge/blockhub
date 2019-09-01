<template>
    <div>
        <template
            v-for="(item, index) in sliced"
            v-if="sliced">
            <transition-group
                :key="`level-1-${index}`"
                name="slideUp">
                <div
                    :key="`level-2-${index}`"
                    @mouseover="activeElementIndex = index">
                    <div
                        v-if="item.type === 'frontpageProduct'"
                        class="row justify-content-center">
                        <div class="col-12">
                            <div class="frontpage-product">
                                <Vote
                                    v-if="activeElementIndex === index"
                                    v-access="'rating.read'"
                                    :votes="item.data.meta.rating" />
                                <div class="row">
                                    <div
                                        v-if="item.data.meta.images"
                                        class="col-12 col-lg-6 frontpage-product__slider">
                                        <Img
                                            :src="item.data.meta.images.mediumTile"
                                            :data-link="`/product/${item.data.id}`" />
                                    </div>
                                    <div class="col-12 col-lg-6 frontpage-product__info">
                                        <h2>
                                            <nuxt-link :to="`/product/${item.data.id}`">
                                                {{ item.data.name }}
                                            </nuxt-link>
                                        </h2>
                                        <p>{{ item.data.meta.shortDescription }}</p>
                                        <Tags v-if="item.data.meta.developerTags" :tags="item.data.meta.developerTags" />
                                        <div class="frontpage-product__footer">
                                            <div
                                                v-if="item.data.meta.price"
                                                class="price-list">
                                                <div
                                                    v-if="item.data.meta.oldPrice"
                                                    class="price oldPrice">
                                                    {{ item.data.meta.oldPrice | convertCurrency }}
                                                </div>
                                                <div class="price">
                                                    {{ item.data.meta.price | convertCurrency }}
                                                </div>
                                            </div>
                                            <Button
                                                v-if="item.data.meta.price"
                                                status="success">
                                                Proceed to Purchase
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'featuredProductGallery'"
                        class="row margin-bottom-30">
                        <div class="col-12">
                            <Banner
                                v-if="item.data.slides"
                                class="margin-bottom-30"
                                :slides="item.data.slides" />

                            <Block
                                v-else
                                class="margin-bottom-30"
                                :title="item.data.title"
                                :noGutter="true"
                                :onlyContentBg="true"
                                :bgGradient="true">
                                <div v-if="!item.data.products.length">
                                    Nothing could be found. Want to <Button
                                        status="plain"
                                        @click="$store.commit('application/activeModal', 'comingSoon')">
                                        Check for updates
                                    </Button>?
                                </div>
                            </Block>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'productSlider'"
                        class="row">
                        <div class="col-12">
                            <ProductSlider
                                v-if="item.data.products.length"
                                :dynamic="true"
                                :products="item.data.products"
                                :title="item.data.title"
                                :maxPerView="item.data.slidesPerView" />

                            <Block
                                v-else
                                class="margin-bottom-30"
                                :title="item.data.title"
                                :noGutter="true"
                                :onlyContentBg="true"
                                :bgGradient="true">
                                <div v-if="!item.data.products.length">
                                    Nothing could be found. Want to <Button
                                        status="plain"
                                        @click="$store.commit('application/activeModal', 'comingSoon')">
                                        Check for updates
                                    </Button>?
                                </div>
                            </Block>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'collectionsList'"
                        class="row margin-bottom-30">
                        <div class="col-12">
                            <CollectionList
                                :title="`Get Started` | translate"
                                :description="`Start building your collection today, share it and save it!` | translate"
                                :collections="item.data.collectionsList" />
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'banners'"
                        class="row align-items-stretch">
                        <div class="col-12 col-md-5 col-lg-4 margin-bottom-30">
                            <SimpleBanner
                                imgSrc="/img/banners/banner-1.png"
                                to="/battlepass/1">
                                <h4 class="text-yellow">
                                    summer block
                                </h4>
                                <h3>Championship</h3>
                                <p>You won't believe the prize!</p>
                            </SimpleBanner>
                        </div>
                        <div class="col-12 col-md-7 col-lg-8 margin-bottom-30">
                            <SimpleBanner
                                imgSrc="/img/banners/banner-2.png"
                                to="/curators">
                                <div class="align-items-start">
                                    <h3 class="text-yellow margin-bottom-5">
                                        top<br>curators
                                    </h3>
                                    <h4 class="text-capitalize">
                                        What are they<br>playing?
                                    </h4>
                                </div>
                            </SimpleBanner>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'banners'"
                        class="row margin-bottom-50 margin-top-20 align-items-stretch">
                        <div
                            v-for="(banner, index) in item.data.banners"
                            :key="index"
                            :class="banner.class">
                            <SimpleBanner
                                v-if="item.type == 3"
                                :imgSrc="banner.image"
                                :link="banner.link">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 class="text-yellow">
                                            {{ banner.title }}
                                        </h3>
                                        <p>{{ banner.subtitle }}</p>
                                    </div>
                                    <div class="banner-action">
                                        <Button
                                            status="info"
                                            iconHide
                                            size="lg">
                                            {{ banner.buttonText }}
                                        </Button>
                                    </div>
                                </div>
                            </SimpleBanner>
                            <SimpleBanner
                                v-if="item.type == 4"
                                :imgSrc="banner.imagee"
                                :link="banner.link">
                                <h3 class="text-yellow margin-bottom-5">
                                    {{ banner.title }}
                                </h3>
                                <p>{{ banner.subtitle }}</p>
                            </SimpleBanner>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'productNews'"
                        class="row margin-bottom-30">
                        <div class="col-12">
                            <div class="home-tabs">
                                <NewsListNavigation
                                    :list="item.data.headings" />
                                <div class="tab-content">
                                    <NewsListArticles
                                        v-for="(list, index) in item.data.lists"
                                        :key="index"
                                        :articles="list"
                                        :index="index" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'curatorReviews'"
                        class="row margin-bottom-30">
                        <div class="col-12">
                            <Block
                                :noGutter="true"
                                :bgGradient="true"
                                :onlyContentBg="true">
                                <HeadingBar
                                    slot="title"
                                    class="mb-0"
                                    :name="item.data.title"
                                    showArrows
                                    showActions
                                    :activeIndex="curatorsIndex"
                                    :itemsLength="item.data.reviews.length"
                                    @prevClick="swiperCurators.slidePrev(); updateIndex('curatorsIndex', -1, item.data.reviews.length)"
                                    @nextClick="swiperCurators.slideNext(); updateIndex('curatorsIndex', 1, item.data.reviews.length)" />
                                <Swiper
                                    ref="swiper"
                                    :options="item.data.options">
                                    <SwiperSlide
                                        v-for="(review, index) in item.data.reviews"
                                        :key="index">
                                        <CuratorReview :review="review" />
                                    </SwiperSlide>
                                </Swiper>
                                <div v-if="!item.data.reviews.length">
                                    Nothing could be found. Want to <Button
                                        status="plain"
                                        @click="$store.commit('application/activeModal', 'comingSoon')">
                                        Check for updates
                                    </Button>?
                                </div>
                            </Block>
                        </div>
                    </div>

                    <GamesExplorer
                        v-if="item.type === 'gamesExplorer'"
                        :products="item.data.products" />

                    <AssetsExplorer
                        v-if="item.type === 'assetGrid'"
                        :assets="assets" />

                    <div
                        v-if="item.type === 'trendingProjectsRow'"
                        class="row margin-bottom-30">
                        <div class="col-12">
                            <Block
                                :noGutter="true"
                                :bgGradient="true"
                                :onlyContentBg="true">
                                <HeadingBar
                                    slot="title"
                                    class="mb-0"
                                    :name="item.data.title"
                                    :showArrows="item.data.projects.length > 4"
                                    showActions
                                    @prevClick="swiperProjects.slidePrev()"
                                    @nextClick="swiperProjects.slideNext()" />
                                <Swiper
                                    ref="swiper"
                                    :options="item.data.options">
                                    <SwiperSlide
                                        v-for="(project, index) in item.data.projects"
                                        :key="index">
                                        <ProjectCard
                                            :id="project.id"
                                            class="p-2"
                                            :image="project.images.mediumTile"
                                            :description="project.description"
                                            :funds="project.funds"
                                            :parentName="project.product && project.product.name"
                                            :parentDeveloper="project.product && project.product.developer"
                                            :parentImage="project.product && project.product.images.mediumTile" />
                                    </SwiperSlide>
                                </Swiper>
                                <div v-if="!item.data.projects.length">
                                    Nothing could be found. Want to <Button
                                        status="plain"
                                        @click="$store.commit('application/activeModal', 'comingSoon')">
                                        Check for updates
                                    </Button>?
                                </div>
                            </Block>
                        </div>
                    </div>

                    <div v-if="item.type === 'realmsRow'">
                        <Swiper
                            :options="item.data.options"
                            class="padding-10">
                            <SwiperSlide
                                v-for="(realm, index) in item.data.realms"
                                :key="index">
                                <CollectionItem :item="realm" />
                            </SwiperSlide>
                        </Swiper>

                        <Block
                            :noGutter="true"
                            :bgGradient="true"
                            :onlyContentBg="true">
                            <HeadingBar
                                slot="title"
                                class="mb-0"
                                :name="item.data.title"
                                :showArrows="true"
                                :showActions="true"
                                @prevClick="swiperRealms.slidePrev()"
                                @nextClick="swiperRealms.slideNext()" />
                            <Swiper
                                :ref="swiper"
                                :options="item.data.options">
                                <SwiperSlide
                                    v-for="(realm, index) in item.data.realms"
                                    :key="index">
                                    <Button :to="`/realm/${realm.id}`">
                                        {{ realm.name }}
                                    </Button>
                                </SwiperSlide>
                            </Swiper>
                            <p v-if="!item.data.realms.length">
                                Nothing could be found. Want to <Button
                                    status="plain"
                                    @click="$store.commit('application/activeModal', 'comingSoon')">
                                    Check for updates
                                </Button>?
                            </p>
                        </Block>
                    </div>

                    <div
                        v-if="item.type === 'gameSeries'"
                        class="row margin-bottom-30">
                        <div class="col-12">
                            <GameSeries
                                v-for="(game, index) in item.data.list"
                                :key="index">
                                <GameDescription :game="game" />
                                <GameIncludesList
                                    :list="game.products"
                                    :showNumber="item.data.showNumber" />
                            </GameSeries>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'newReleasesGrid'"
                        class="row margin-bottom-30">
                        <div class="col-md-12 col-lg-6 margin-bottom-30">
                            <Block
                                title="New Releases"
                                :noGutter="true"
                                :bgGradient="true"
                                :onlyContentBg="true"
                                showActions>
                                <template slot="additional-action">
                                    <HeadingBarFields
                                        name="Reviews"
                                        icon="star"
                                        @clickUp=""
                                        @clickDown="" />
                                    <HeadingBarFields
                                        name="Date"
                                        icon="calendar"
                                        @clickUp=""
                                        @clickDown="" />
                                </template>

                                <GameGrid
                                    :itemInRow="2"
                                    :showRating="true"
                                    :showDate="false"
                                    :showLink="true"
                                    :items="item.products.slice(0,5)"
                                    itemBg="transparent"
                                    pricePosition="right" />
                            </Block>
                        </div>
                    </div>

                    <div
                        v-if="item.type === 'topItemsGrid'"
                        class="row margin-bottom-30">
                        <div class="col-md-12 col-lg-6 margin-bottom-30">
                            <Block
                                title="Top 20 Items"
                                :noGutter="true"
                                :bgGradient="true"
                                :onlyContentBg="true"
                                showActions>
                                <template slot="additional-action">
                                    <HeadingBarFields
                                        name="Price"
                                        icon="dollar-sign"
                                        @clickUp=""
                                        @clickDown="" />
                                    <HeadingBarFields
                                        name="Trading"
                                        icon="star"
                                        @clickUp=""
                                        @clickDown="" />
                                </template>

                                <AssetsList
                                    v-if="assets.length"
                                    :items="assets"
                                    itemInRow="2" />

                                <div v-if="!assets.length">
                                    Nothing could be found. Want to <Button
                                        status="plain"
                                        @click="$store.commit('application/activeModal', 'comingSoon')">
                                        Check for updates
                                    </Button>?
                                </div>

                                <ContentNavigation v-if="assets.length" />
                            </Block>
                        </div>
                    </div>
                </div>
            </transition-group>
        </template>

        <transition
            v-if="showSignIn"
            name="fade-slow">
            <div
                v-if="end && !$store.state.application.signedIn"
                class="row">
                <div class="col-12 mb-4 mt-4">
                    <RecommendationBlock />
                </div>
            </div>
            <div
                v-if="!sliced"
                class="no-updates">
                <h3>
                    There is no more content.
                </h3>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('@ericmuyser/hyper-ui').then(m => m.Button),
        'HeadingBar': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar),
        'HeadingBarFields': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBarFields),
        'ProductSlider': () => import('@ericmuyser/hyper-ui').then(m => m.ProductSlider),
        'ProjectCard': () => import('@ericmuyser/hyper-ui').then(m => m.ProjectCard),
        'CuratorReview': () => import('@ericmuyser/hyper-ui').then(m => m.CuratorReview),
        'GameGrid': () => import('@ericmuyser/hyper-ui').then(m => m.GameGrid),
        'ContentNavigation': () => import('@ericmuyser/hyper-ui').then(m => m.ContentNavigation),
        'NewsListNavigation': () => import('@ericmuyser/hyper-ui').then(m => m.NewsListNavigation),
        'NewsListArticles': () => import('@ericmuyser/hyper-ui').then(m => m.NewsListArticles),
        'Block': () => import('@ericmuyser/hyper-ui').then(m => m.Block),
        'SimpleBanner': () => import('@ericmuyser/hyper-ui').then(m => m.SimpleBanner),
        'GamesExplorer': () => import('@ericmuyser/hyper-ui').then(m => m.GamesExplorer),
        'AssetsExplorer': () => import('@ericmuyser/hyper-ui').then(m => m.AssetsExplorer),
        'AssetsList': () => import('@ericmuyser/hyper-ui').then(m => m.AssetsList),
        'Banner': () => import('@ericmuyser/hyper-ui').then(m => m.Banner),
        'GameSeries': () => import('@ericmuyser/hyper-ui').then(m => m.GameSeries),
        'GameDescription': () => import('@ericmuyser/hyper-ui').then(m => m.GameDescription),
        'GameIncludesList': () => import('@ericmuyser/hyper-ui').then(m => m.GameIncludesList),
        'CollectionList': () => import('@ericmuyser/hyper-ui').then(m => m.CollectionList),
        'CollectionItem': () => import('@ericmuyser/hyper-ui').then(m => m.CollectionItem),
        'RecommendationBlock': () => import('@ericmuyser/hyper-ui').then(m => m.RecommendationBlock)
    },
    props: {
        list: {
            type: Array,
            required: true
        },
        showSignIn: Boolean
    },
    data() {
        return {
            activeElementIndex: null,
            show: false, // display content after API request
            offset: 1,     // items to display after scroll
            display: 3,     // initial items
            trigger: 300,   // how far from the bottom to trigger infinite scroll
            end: false, // no more updates,
            curatorsIndex: 0
        }
    },
    computed: {
        assets() {
            return []
        },
        sliced() {
            return this.list.slice(0, this.display)
        },
        swiperCurators() {
            return this.$refs.swiper[0].swiper
        },
        swiperProjects() {
            return this.$refs.swiper[1].swiper
        },
        swiperRealms() {
            return this.$refs.swiper[2].swiper
        }
    },
    mounted() {
        // $(this.$refs.trendingSlider).ionRangeSlider();

        // this.scroll()
    },
    methods: {
        showArrowsState(el, count) {
            if (el.length > count) {
                return true
            }
            return false
        },
        updateIndex(targetProp, dir, itemsLength) {
            const target = this[targetProp]
            if (dir && target + 1 <= itemsLength - 3) this[targetProp]++
            else if (!dir && target - 1 >= 0) this[targetProp]--
        },
        slidePrev() {
            const sl = this.$refs.swiperProjects[0].swiper
            console.log(sl)
            window.swiper = sl
        },
        scroll() {
            window.onscroll = ev => {
                if (
                    window.innerHeight + window.scrollY >=
                    (document.body.offsetHeight - this.trigger)
                ) {
                    if (this.display < this.list.length) {
                        this.display = this.display + this.offset
                    } else {
                        this.end = true
                    }
                }
            }
        }
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
