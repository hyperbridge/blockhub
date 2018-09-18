<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid" v-if="is_connected">
                <div class="row">
                    <div class="col-12">
                        <c-main-banner class="margin-bottom-30" :image="main_banner.img" :logo="main_banner.logo" />
                    </div>
                    <div class="col-md-12 col-lg-6 margin-bottom-30">
                        <c-block>
                            <c-heading-bar name="New Releases" :showArrows="false" :showBackground="false">
                                <template slot="additional-action">
                                    <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @click_down="" />
                                    <c-heading-bar-fields name="Reviews" icon="star" @clickUp=""  @clickDown="" />
                                    <c-heading-bar-fields name="Date" icon="calendar" @clickUp=""  @clickDown="" />
                                </template>
                            </c-heading-bar>

                            <c-game-grid
                                :itemInRow="1"
                                :showRating="false"
                                :showTime="true"
                                :items="marketplace.new_products.slice(0,5)"
                                itemBg="transparent"
                            />

                                <c-game-grid
                                    :itemInRow=1
                                    :showRating=false
                                    :showTime=true
                                    v-bind:items="new_games"
                                    itemBg="transparent"
                                ></c-game-grid>
                        </c-block>
                    </div>
                    <div class="col-md-12 col-lg-6 margin-bottom-30">
                        <c-block>
                            <c-heading-bar name="Top 20 Items" :showArrows="false" :showBackground="false">
                                <template slot="additional-action">
                                    <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown="" />
                                    <c-heading-bar-fields name="Trading" icon="star" @clickUp=""  @clickDown="" />
                                </template>
                            </c-heading-bar>

                            <c-assets-list-item
                                :items="assets"
                                itemInRow="2"
                            />
                            <c-content-navigation/>

                                <c-assets-list-item
                                    :items="assets"
                                    itemInRow="2"
                                />
                                <c-content-navigation/>
                        </c-block>
                    </div>
                    <div class="col-12 margin-bottom-30">
                        <c-heading-bar name="What's up with your content" :showArrows="false" :showBackground="false">
                            <template slot="additional-action">
                                <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown="" />
                                <c-heading-bar-fields name="Reviews" icon="star" @clickUp=""  @clickDown="" />
                                <c-heading-bar-fields name="Date" icon="calendar" @clickUp=""  @clickDown="" />
                            </template>
                        </c-heading-bar>


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
                    </div>
                    <div class="col-12 margin-bottom-30 d-none">
                        <c-heading-bar
                            name="Trending Projects"
                            :showArrows="false"
                            :showBackground="false"
                        />
                        <div class="img_slider w-100">
                            <div
                                class="owl-carousel"
                                ref="rangeSlider"
                                data-nav-dots="false"
                                data-nav-arrow="true"
                                data-items="4"
                                data-sm-items="1"
                                data-md-items="3"
                                data-lg-items="4"
                                data-loop="true"
                                data-autoplay="false"
                            >
                                <c-projects-card
                                    v-for="(project, index) in trending_projects"
                                    :key="index"
                                    :project="project"
                                />

                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <a href="/#/sitemap">Sitemap</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid" v-if="!is_connected">
                <div class="row">
                    <div class="col-12">
                        <h3>Oops, something went wrong! ((</h3>
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
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-heading-bar-fields' : () => import('@/ui/components/heading-bar/additional-action'),
            'c-assets-list-item': () => import('@/ui/components/assets-list-item'),
            'c-game-list-item': () => import('@/ui/components/assets-list-item'),
            'c-game-grid': () => import('@/ui/components/games-grid/with-description'),
            'c-projects-card': () => import('@/ui/components/projects/card'),
            'c-news-list-navigation': () => import('@/ui/components/news-list/navigation'),
            'c-news-list-articles': () => import('@/ui/components/news-list/articles'),
            'c-content-navigation': () => import('@/ui/components/content-navigation'),
            'c-block': () => import('@/ui/components/block'),
            'c-main-banner': () => import('@/ui/components/banner/index'),
        },
        data: () => ({
            assets: [
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                }
            ],
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
            trending_projects: [
                {
                    game: {
                        title: 'Diablo III',
                        developer: 'Blizzard Entertainment',
                        img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                    },
                    description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                    img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                    funds: {
                        currency: 'USD',
                        obtained: 2834,
                        goal: 5000
                    }
                },
                {
                    game: {
                        title: 'World of Warcraft',
                        developer: 'Blizzard Entertainment',
                        img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                    },
                    description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                    img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                    funds: {
                        currency: 'GBP',
                        obtained: 7613,
                        goal: 8500
                    }
                },
                {
                    game: {
                        title: 'Diablo III',
                        developer: 'Blizzard Entertainment',
                        img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                    },
                    description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                    img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                    funds: {
                        currency: 'USD',
                        obtained: 2834,
                        goal: 5000
                    }
                },
                {
                    game: {
                        title: 'Diablo III',
                        developer: 'Blizzard Entertainment',
                        img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                    },
                    description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                    img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                    funds: {
                        currency: 'USD',
                        obtained: 2834,
                        goal: 5000
                    }
                },
            ],
            main_banner:{
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
            is_connected() {
                return this.$store.state.network.connection.datasource;
            },
            marketplace() {
                return this.$store.state.marketplace;
            },
            assets() {
                return this.$store.state.marketplace.assets;
            }
        },
        mounted: function () {
            $(this.$refs.trendingSlider).ionRangeSlider();
        },
        updated() {
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
</style>
