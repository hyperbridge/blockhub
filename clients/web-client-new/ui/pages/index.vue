<template>
    <c-layout navigationKey="store" :breadcrumbLinks="breadcrumbLinks">
        <div class="row" hidden>
            <div class="col-12 mb-4">
                <c-banner :imgSrc="'/img/banners/banner-3.png'" to="/token">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 class="text-yellow">Launch Sale</h3>
                            <p>BlockHub has launched and the token sale is now live!</p>
                        </div>
                        <div class="banner-action">
                            <c-button tag="div" tatus="info" iconHide size="lg" to="/token">JOIN NOW</c-button>
                        </div>
                    </div>
                </c-banner>
            </div>
        </div>

        <div class="row" hidden>
            <div class="col-12 mb-4" v-if="!$store.state.application.desktopMode">
                <c-welcome-box />
            </div>
        </div>

        <c-infinite-content :list="list" :showSignIn="true" />

        <c-custom-modal title="BlockHub Preview" v-if="showWelcomeModal" @close="closeModal">
            <div class="help-modal__content" slot="modalBody" style="max-width: 500px">
                <h4 class="h2 mb-3">Welcome</h4>
                <p>Welcome to the the BlockHub Preview Build. All features are enabled, with or without bugs. Gotta catch 'em all! 🐛</p>
                <p>These features are still in active development, and may not functional properly and may not make it into production.</p>
                <p>We believe in transparency and community-driven development, so why don't you let us know what you think!<p>
                <p>To make things simple, hold ALT and click anywhere to send us feedback/bug reports!<p>
                <p>Thanks for visiting and joining us on the journey to a decentralized future.</p>
                <p hidden>We're a platform built by the community, for the community.</p>
                <p hidden><c-button to="/help" target="_blank">Check out the BlockHub crowdfund</c-button></p>
            </div>
            <div slot="modalFooter" class="text-right w-100">
                <c-button size="md" @click="closeModal">Got it</c-button>
            </div>
        </c-custom-modal>
    </c-layout>
</template>


<script>
import { mapGetters } from 'vuex'

const updateLandingImage = function() {
    if (!process.client) { return }
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
        'c-layout': () => import('~/components/front-layout').then(m => m.default || m),
        'c-banner': () => import('~/components/banner/simple').then(m => m.default || m),
        'c-custom-modal': () => import('~/components/modal/custom').then(m => m.default || m),
        'c-download-block': () => import('~/components/download-block').then(m => m.default || m),
        'c-welcome-box': () => import('~/components/welcome-box').then(m => m.default || m)
    },
    async asyncData(context) {
        context.store.state.application.navigationComponent = 'store'

        //return new Promise((resolve, reject) => {
            // feathersClient.authenticate({
                
            // }).then((response) => {
                // feathersClient.service('collections').find({
                //     query: {
                //         $sort: {
                //             createdAt: -1
                //         },
                //         $limit: 25
                //     }
                // }).then(() => {console.log(arguments)
                //     resolve()
                // })
            // }, (error) => {
            //     return reject(error) //Promise.reject(error)
            // })

            return await context.store.dispatch('collections/find', {
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
        //})
    },
    data() {
        return {
            breadcrumbLinks: false,
            showWelcomeModal: false //['preview', 'staging', 'local'].includes(this.$store.state.application.environmentMode) && !this.$store.state.application.settings.client.hideWelcomeModal,
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
            
            if (this.$store.state.marketplace.featuredProducts.length ) {
                result.push({
                    type: 'featuredProductGallery',
                    data: {
                        title: 'Featured',
                        ref: 'featuredProductGallerySlider',
                        swiper: this.$refs.featuredProductGallerySlider && this.$refs.featuredProductGallerySlider.swiper,
                        products: this.$store.state.marketplace.featuredProducts,
                        slides: [
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featuredProducts[0].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featuredProducts[0].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featuredProducts[0].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featuredProducts[0].id
                            },
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featuredProducts[1].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featuredProducts[1].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featuredProducts[1].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featuredProducts[1].id
                            },
                            {
                                image:  {
                                    src:  this.$store.state.marketplace.featuredProducts[2].images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src:  this.$store.state.marketplace.featuredProducts[2].images.icon,
                                    position: 'left bottom',
                                    size: 'lg',
                                },
                                title:  this.$store.state.marketplace.featuredProducts[2].name,
                                buttonText: 'Check it out',
                                id:  this.$store.state.marketplace.featuredProducts[2].id
                            }
                        ]
                    }
                })
            }

            result.push({
                type: 'collectionsList',
                data: {
                    collectionsList: this.$store.getters['collections/list'],
                    ref: 'collectionsSlider',
                    swiper: this.$refs.collectionsSlider && this.$refs.collectionsSlider.swiper,
                }
            })

            result.push({
                type: 'productSlider',
                data: {
                    title: 'New Releases',
                    slidesPerView: 3,
                    products: this.$store.state.marketplace.newProducts.slice(0, 12)
                }
            })

            result.push({
                type: 'banners',
                data: {
                    banners: [
                        {
                            type: 3,
                            class: 'col-12 col-md-7 col-lg-8',
                            image: '/img/banners/banner-3.png',
                            title: 'Item Marketplace',
                            subtitle: 'All-in-one spot for games assets',
                            buttonText: 'GAME ON',
                            to: '/marketplace'
                        },
                        {
                            type: 4,
                            class: 'col-12 col-md-5 col-lg-7',
                            image: '/img/banners/banner-4.png',
                            title: 'Top Collections',
                            subtitle: 'Our community has curated the best ones for you',
                            to: '/collections'
                        },
                    ]
                }
            })

            result.push({
                type: 'gamesExplorer',
                data: {}
            })

            result.push({
                type: 'productSlider',
                data: {
                    title: 'Summer Sale',
                    slidesPerView: 3,
                    products: this.$store.state.marketplace.saleProducts
                }
            })

            result.push({
                type: 'assetGrid',
                data: {
                    assets: this.assets
                }
            })

            if (this.$store.state.application.darklaunchFlags
            && this.$store.state.application.account.darklaunchFlags
            && isVisible(this.$store.state.application.darklaunchFlags, this.$store.state.application.account.darklaunchFlags, 'CURATORS')) {
                result.push({
                    type: 'curatorReviews',
                    data: {
                        title: 'From our curators',
                        ref: 'curatorReviewsSlider',
                        swiper: this.$refs.curatorReviewsSlider && this.$refs.curatorReviewsSlider.swiper,
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
                        reviews: this.$store.state.marketplace.curatorReviews
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
                    headings: Object.values(groupBy(this.$store.state.marketplace.posts, 'targetId')).map(post => {
                        if (post[0].targetType === 'product') {
                            const target = this.$store.state.marketplace.products[post[0].targetId]

                            return {
                                image: target.images.mediumTile,
                                title: target.name,
                                developer: target.developer
                            }
                        } else {
                            return undefined
                        }
                    }),
                    lists: Object.values(groupBy(this.$store.state.marketplace.posts, 'targetId'))
                }
            })

            result.push({
                type: 'trendingProjectsRow',
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
                    projects: this.$store.state.funding.trendingProjects
                }
            })

            result.push({
                type: 'gameSeries',
                data: {
                    list: this.$store.state.marketplace.gameSeries,
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
            this.$store.commit('application/updateClientSettings', { key: 'hideWelcomeModal', value: true })
        }
    },
    watch: {
    },
    mounted() {
        updateLandingImage.call(this)
    },
    created() {
        updateLandingImage.call(this)
    },
    beforeDestroy() {
        if (!process.client) { return }
        window.document.getElementById('header-bg').style['background-image'] = 'url(/img/backgrounds/1.jpg)'
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
