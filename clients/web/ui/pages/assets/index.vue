<template>
    <Layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 margin-bottom-30">
                    <MainBanner
                        v-if="mainBanner"
                        class="margin-bottom-30"
                        :image="mainBanner.img"
                        :logo="mainBanner.logo" />

                    <Block>
                        <HeadingBar
                            name="Item LookUp"
                            :showArrows="false"
                            :showBackground="false"
                            :showActions="true">
                            <template slot="additional-action">
                                <div
                                    slot="pagination"
                                    class="assets-swiper-pagination swiper-pagination" />
                            </template>
                        </HeadingBar>
                        <Swiper :options="assetsSlider">
                            <SwiperSlide
                                v-for="(item, index) in assets"
                                :key="index">
                                <AssetsItem :item="item" />
                            </SwiperSlide>
                        </Swiper>
                    </Block>
                </div>
                <div class="col-12 col-lg-6 margin-bottom-30">
                    <Block>
                        <div class="img-slider position-relative">
                            <Swiper
                                :options="imgSlider"
                                style="border-radius: 5px">
                                <SwiperSlide>
                                    <Img
                                        src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg"
                                        class="img-fluid" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Img
                                        src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg"
                                        class="img-fluid" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Img
                                        src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg"
                                        class="img-fluid" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Img
                                        src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg"
                                        class="img-fluid" />
                                </SwiperSlide>
                            </Swiper>
                            <div class="slider-dots">
                                <div
                                    slot="pagination"
                                    class="img-slider-paginetion swiper-pagination" />
                            </div>
                        </div>
                        <div class="text-left my-4">
                            <h3 class="p-0 h1 font-weight-bold">
                                MMO Weekend
                            </h3>
                            <div class="description h3">
                                Get the best offers on your favorite MMOs until
                                march 21st, up to 90% OFF on selected game assets
                            </div>
                        </div>
                        <div
                            class="d-flex flex-wrap"
                            style="margin: 0 -5px">
                            <div
                                v-for="(item, index) in assets"
                                v-if="index < 7"
                                :key="index"
                                class="assets-item__container padding-5">
                                <AssetsItem :item="item" />
                            </div>
                        </div>
                    </Block>
                </div>
                <div class="col-12 col-lg-6 margin-bottom-30 d-flex flex-column">
                    <Block class="margin-bottom-30">
                        <HeadingBar
                            name="Featured"
                            :showActions="true">
                            <template slot="additional-action">
                                <HeadingBarFields
                                    name="Rarity"
                                    icon="fas fa-trophy" />
                                <HeadingBarFields
                                    name="Price"
                                    icon="fas fa-dollar-sign" />
                            </template>
                        </HeadingBar>
                        <div class="collection-list">
                            <div
                                v-for="(item, index) in collectionItems"
                                v-if="index < 4"
                                :key="index"
                                class="collection-list__item-container"
                                style="width: 50%">
                                <CollectionItem
                                    :id="item.id"
                                    :name="item.name"
                                    :author="item.author"
                                    :assets="item.assets"
                                    :background="item.background" />
                            </div>
                        </div>
                    </Block>

                    <Banner
                        :imgSrc="'/img/banners/banner-1.png'"
                        to="/">
                        <div
                            class="align-items-start"
                            style="margin-top: auto">
                            <h3 class="text-white h1 font-weight-bold p-0 m-0">
                                Very Fiery Contest
                            </h3>
                            <p class="text-capitalize h3 my-3">
                                What are they playing?
                            </p>
                            <Button
                                status="info"
                                size="lg"
                                class="mt-4"
                                iconHide>
                                Call To action
                            </Button>
                        </div>
                    </Banner>
                </div>
                <div class="col-12">
                    <Block class="margin-bottom-30">
                        <HeadingBar
                            name="Get Started"
                            :showArrows="false"
                            :showBackground="false"
                            :showActions="true">
                            <template slot="additional-action">
                                <div
                                    slot="pagination"
                                    class="assets-swiper-pagination swiper-pagination" />
                            </template>
                        </HeadingBar>
                        <Swiper :options="assetsSlider">
                            <SwiperSlide
                                v-for="(item, index) in assets"
                                :key="index">
                                <AssetsItem :item="item" />
                            </SwiperSlide>
                        </Swiper>
                    </Block>

                    <Block class="margin-bottom-30">
                        <HeadingBar
                            name="Yours"
                            :showArrows="false"
                            :showBackground="false"
                            :showActions="true">
                            <template slot="additional-action">
                                <HeadingBarFields
                                    name="Rarity"
                                    icon="fas fa-trophy" />
                                <HeadingBarFields
                                    name="Price"
                                    icon="fas fa-dollar-sign" />
                            </template>
                        </HeadingBar>
                        <div class="filter_blk form-inline">
                            <div class="form-group">
                                <label>
                                    Filter by
                                </label>
                                <select
                                    id="exampleFormControlSelect1"
                                    class="form-control">
                                    <option>Type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>
                                    Game
                                </label>
                                <input
                                    type="text"
                                    class="form-control">
                            </div>
                            <div class="form-group">
                                <label>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control">
                            </div>
                            <div class="form-group">
                                <a
                                    href="#"
                                    class="btn btn-sm btn-link">clear</a>
                                <a
                                    href="#"
                                    class="btn btn-sm btn-link">More Filters</a>
                            </div>
                        </div>
                        <AsssetsGrid :list="28" />
                        <Pagination :pages="5" />
                    </Block>

                    <Block
                        class="margin-bottom-30"
                        title="Collections">
                        <div class="collection-list">
                            <div
                                v-for="(item, index) in collectionItems"
                                :key="index"
                                class="collection-list__item-container"
                                style="width: 33.3%">
                                <CollectionItem
                                    :id="item.id"
                                    :name="item.name"
                                    :author="item.author"
                                    :assets="item.assets"
                                    :background="item.background" />
                            </div>
                        </div>
                        <Pagination :pages="5" />
                    </Block>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Assets | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub assets` },
                { hid: 'keywords', name: 'keywords', content: 'assets, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'AsssetsGrid': () => import('@ericmuyser/hyper-ui').then(m => m.AsssetsGrid),
        'AssetsItem': () => import('@ericmuyser/hyper-ui').then(m => m.AssetsItem),
        'HeadingBar': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar),
        'HeadingBarFields': () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBarFields),
        'Pagination': () => import('@ericmuyser/hyper-ui').then(m => m.Pagination),
        'CollectionItem': () => import('@ericmuyser/hyper-ui').then(m => m.CollectionItem),
        'Banner': () => import('@ericmuyser/hyper-ui').then(m => m.Banner),
        'MainBanner': () => import('@ericmuyser/hyper-ui').then(m => m.MainBanner)
    },
    data: () => ({
        collectionItems: [
            {
                id: 234,
                name: 'Collection name',
                author: 'John Doel',
                background: 'https://via.placeholder.com/630x350',
                assets: [
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                ]
            },
            {
                id: 564,
                name: 'Collection name',
                author: 'John Doel',
                background: 'https://via.placeholder.com/630x350',
                assets: [
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                ]
            },
            {
                id: 2354,
                name: 'Collection name',
                author: 'John Doel',
                background: 'https://via.placeholder.com/630x350',
                assets: [
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                ]
            },
            {
                id: 867,
                name: 'Collection name',
                author: 'John Doel',
                background: 'https://via.placeholder.com/630x350',
                assets: [
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                ]
            },
            {
                id: 646,
                name: 'Collection name',
                author: 'John Doel',
                background: 'https://via.placeholder.com/630x350',
                assets: [
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                ]
            },
            {
                id: 145,
                name: 'Collection name',
                author: 'John Doel',
                background: 'https://via.placeholder.com/630x350',
                assets: [
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                ]
            },
            {
                id: 456,
                name: 'Collection name',
                author: 'John Doel',
                background: 'https://via.placeholder.com/630x350',
                assets: [
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                ]
            }
        ],
        imgSlider: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.img-slider-paginetion',
                clickable: true
            }
        },
        assetsSlider: {
            slidesPerView: 4,
            spaceBetween: 15,
            pagination: {
                el: '.assets-swiper-pagination',
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        },
        mainBanner: {
            img: {
                src: 'https://d2q63o9r0h0ohi.cloudfront.net/images/kobolds-and-catacombs/header-bg-backup-337031b146d6540bc3d2513f0fb11daa966398f512db7163c7e819120a62b2b17c2abaa893cfcef5c14e1f4a696ce45fa8d2e4d36a987029e563b449b402a115.jpg',
                position: 'center'
            },
            logo: {
                src: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/5/57/Kobolds_and_Catacombs.png',
                position: 'left bottom',
                size: 'lg'
            }
        }
    }),
    computed: {
        assets() {
            return this.$store.getters['assets/assets']
        }
    },
    updated() {

    }
}
</script>

<style lang="scss">
    .swiper-pagination{
        width: auto;
        position: relative;
        display: inline-block;
        height: 28px;
        line-height: 28px;
        span{
            margin: 0 4px;
            line-height: 32px;
            background: #fff;
            width: 10px;
            height: 10px;
            outline: none;
            &.active{
                span{
                    width: 10px;
                }
            }
        }
    }
</style>

<style lang="scss" scoped>
    .slider-dots{
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        bottom: 0px;
        display: inline-block!important;
        overflow: hidden;
        height: 28px;
        .swiper-pagination{
            background: #2a2c43;
            border-radius: 12px 12px 0 0;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
            &:after {
                position: absolute;
                content: "";
                height: 28px;
                bottom: -5px;
                right: -26px;
                border-style: solid;
                border-width: 28px 0 0 28px;
                border-color: transparent transparent transparent #2a2c43;
            }
            &:before {
                position: absolute;
                content: "";
                height: 28px;
                bottom: -5px;
                left: -26px;
                border-style: solid;
                border-width: 0 0 28px 28px;
                border-color: transparent transparent #2a2c43 transparent
            }
        }
    }
    .collection-list{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -5px;
    }
    .collection-list__item-container{
        padding: 5px;
    }
    .filter_blk{
        display: flex;
        width: 100%;
        margin: 0 0 25px 0;
        justify-content: flex-end;
        align-items: center;
        .form-group{
            margin-left: 20px;
            label{
                margin-right: 10px;
            }
        }
        .btn-link{
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            &:last-child{
                padding-right: 0;
            }
        }
        .form-control{
            width: 80px;
            padding: 0 5px;
            line-height: 28px;
            height: 28px!important;
        }
    }
    .assets-item__container{
        width: 50%;
        @media (max-width: 767px) {
            width: 100%;
        }
    }
</style>
