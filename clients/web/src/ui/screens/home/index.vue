<template>
    <c-layout navigationKey="store">
            <div class="row">
                <div class="col-12 mb-4">
                    <c-banner :imgSrc="'/static/img/banners/banner-3.png'" link="#/token">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 class="text-yellow">Launch Sale</h3>
                                <p>BlockHub has launched and the token sale is now live!</p>
                            </div>
                            <div class="banner-action">
                                <c-button tag="div" tatus="info" icon_hide size="lg" href="#/token">JOIN NOW</c-button>
                            </div>
                        </div>
                    </c-banner>
                </div>
            </div>

            <div class="row">
                <div class="col-12 mb-4" v-if="!$store.state.application.desktopMode">
                    <c-welcome-box />
                </div>
            </div>

            <c-infinite-content :list="list" />

            <c-custom-modal title="BlockHub Preview" v-if="showWelcomeModal" @close="closeModal">
                <div class="help-modal__content" slot="modal_body" style="max-width: 500px">
                    <h4 class="h2 mb-3">Welcome</h4>
                    <p>Welcome to the the BlockHub Preview Build. All features are enabled, with or without bugs. Gotta catch 'em all! 🐛</p>
                    <p>These features are still in active development, and may not functional properly and may not make it into production.</p>
                    <p>We believe in transparency and community-driven development, so why don't you let us know what you think!<p>
                    <p>To make things simple, hold ALT and click anywhere to send us feedback/bug reports!<p>
                    <p>Thanks for visiting and joining us on the journey to a decentralized future.</p>
                    <p hidden>We're a platform built by the community, for the community.</p>
                    <p hidden><a href="#/help" target="_blank">Check out the BlockHub crowdfund</a></p>
                </div>
                <div slot="modal_footer" class="text-right w-100">
                    <c-button size="md" @click="closeModal">Got it</c-button>
                </div>
            </c-custom-modal>
    </c-layout>
</template>


<script>
import { mapGetters } from 'vuex'

const updateLandingImage = function() {
    const frontpageProduct = this.$store.state.marketplace.frontpageProduct

    if (frontpageProduct && frontpageProduct.images) {
        const header = window.document.getElementById('header-bg');
        const randomImage = Math.floor(Math.random() * frontpageProduct.images.preview.length);
        header.style['background-image'] = 'url(' + frontpageProduct.images.preview[randomImage] + ')';
        header.style['background-size'] = 'cover';
    }
}

function isVisible(availableFlags, userFlags, code, variant, data) {
    return availableFlags.map(flag => flag.code).includes(code) && userFlags.map(flag => flag.enabled ? flag.code : null).includes(code)
}

export default {
    components: {
        'c-banner': (resolve) => require(['@/ui/components/banner/simple'], resolve),
        'c-custom-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
        'c-download-block': (resolve) => require(['@/ui/components/download-block'], resolve),
        'c-welcome-box': (resolve) => require(['@/ui/components/welcome-box'], resolve)
    },
    data() {
        return {
            showWelcomeModal: ['preview', 'staging', 'local'].includes(this.$store.state.application.environmentMode) && !this.$store.state.application.account.settings.client.hideWelcomeModal,
        }
    },
    computed: {
        ...mapGetters({
            assets: 'marketplace/assetsArray'
        }),
        list() {
            const result = []

            if (this.$store.state.marketplace.frontpageProduct && this.$store.state.marketplace.frontpageProduct.id) {
                result.push({
                    type: 'frontpageProduct',
                    data: this.$store.state.marketplace.frontpageProduct
                })
            }
            if ( this.$store.state.marketplace.featured_products.length ) {
                result.push({
                    type: 'featured_product_gallery',
                    data: {
                        title: 'Featured',
                        ref: 'featured_product_gallery_sl',
                        swiper: this.$refs.featured_product_gallery_sl && this.$refs.featured_product_gallery_sl.swiper,
                        products: this.$store.state.marketplace.featured_products,
                        slides:[
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featured_products[0].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featured_products[0].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featured_products[0].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featured_products[0].id
                            },
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featured_products[1].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featured_products[1].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featured_products[1].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featured_products[1].id
                            },
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featured_products[2].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featured_products[2].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featured_products[2].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featured_products[2].id
                            }
                        ]
                    }
                })
            }

            result.push({
                type: 'collections_list',
                data: {
                    collections_list: Array.isArray(this.$store.state.marketplace.collections) ? this.$store.state.marketplace.collections : Object.values(this.$store.state.marketplace.collections),
                    ref: 'collections_sl',
                    swiper: this.$refs.collections_sl && this.$refs.collections_sl.swiper,
                }
            })

            result.push({
                type: 'product_slider',
                data: {
                    title: 'New Releases',
                    slidesPerView: 3,
                    products: this.$store.state.marketplace.newProducts
                }
            })

            result.push({
                type: 'banners',
                data: {
                    banners: [
                        {
                            type: 3,
                            class: 'col-12 col-md-7 col-lg-8',
                            image: '/static/img/banners/banner-3.png',
                            title: 'Item Marketplace',
                            subtitle: 'All-in-one spot for games assets',
                            buttonText: 'GAME ON',
                            link: '#/marketplace'
                        },
                        {
                            type: 4,
                            class: 'col-12 col-md-5 col-lg-7',
                            image: '/static/img/banners/banner-4.png',
                            title: 'Top Collections',
                            subtitle: 'Our community has curated the best ones for you',
                            link: '#/collections'
                        },
                    ]
                }
            })

            result.push({
                type: 'games_explorer',
                data: {}
            })

            result.push({
                type: 'product_slider',
                data: {
                    title: 'Summer Sale',
                    slidesPerView: 3,
                    products: this.$store.state.marketplace.saleProducts
                }
            })

            result.push({
                type: 'asset_grid',
                data: {
                    assets: this.assets
                }
            })

            if (isVisible(this.$store.state.application.darklaunchFlags, this.$store.state.application.account.darklaunchFlags, 'CURATORS')) {
                result.push({
                    type: 'curator_reviews',
                    data: {
                        title: 'From our curators',
                        ref: 'curator_reviews_sl',
                        swiper: this.$refs.curator_reviews_sl && this.$refs.curator_reviews_sl.swiper,
                        options: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                            breakpoints: {
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                            }
                        },
                        reviews: this.$store.state.marketplace.curator_reviews
                    }
                })
            }

            const groupBy = function(xs, key) {
                return xs.reduce(function(rv, x) {
                    if (!x[key]) return rv;
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {}) || null;
            };
            
            result.push({
                type: 'productNews',
                data: {
                    headings: Object.values(groupBy(this.$store.state.marketplace.posts, 'target_id')).map(post => {
                        if (post[0].target_type === 'product') {
                            const target = this.$store.state.marketplace.products[post[0].target_id]

                            return {
                                image: target.images.medium_tile,
                                title: target.name,
                                developer: target.developer
                            }
                        } else {
                            return undefined
                        }
                    }),
                    lists: Object.values(groupBy(this.$store.state.marketplace.posts, 'target_id'))
                }
            })

            result.push({
                type: 'trending_projects_row',
                data: {
                    title: 'Trending Crowdfunds',
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                        }
                    },
                    projects: this.$store.state.funding.trending_projects
                }
            })

            result.push({
                type: 'game_series',
                data: {
                    list: this.$store.state.marketplace.game_series,
                    showNumber: 3
                }
            })

            return result
        },
        // products() {
        //     if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products)
        //         return this.$store.state.cache.screens['/store'].products

        //     return this.$store.state.marketplace.products
        // },
    },
    methods: {
        closeModal() {
            this.showWelcomeModal = false
            this.$store.commit('application/UPDATE_CLIENT_SETTINGS', 'hideWelcomeModal', true)
        }
    },
    mounted() {
        updateLandingImage.call(this)
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

</style>
