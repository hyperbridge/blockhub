<template>
    <Layout
        :breadcrumbLinks="breadcrumbLinks"
        navigationKey="store">

        <div class="row">
            <div class="col-12 mb-4">
                <SimpleBanner
                    :imgSrc="'/img/banners/banner-3.png'"
                    to="/token">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 class="text-yellow">
                                Launch Sale
                            </h3>
                            <p>BlockHub has launched and the token sale is now live!</p>
                        </div>
                    </div>
                </SimpleBanner>
            </div>
        </div>

        <div class="row">
            <div
                v-if="!$store.state.application.desktopMode"
                class="col-12 mb-4">
                <WelcomeBox />
            </div>
        </div>

<!--        {{ list }}-->

        <InfiniteContent
            :list="list"
            :showSignIn="true" />

        <CustomModal
            v-if="showWelcomeModal"
            title="BlockHub Preview"
            @close="closeModal">
            <div
                slot="body"
                class="help-modal__content"
                style="max-width: 500px">
                <h4 class="h2 mb-3">
                    Welcome
                </h4>
                <div>Welcome to the the BlockHub Preview Build. All features are enabled, with or without bugs. Gotta catch 'em all! 🐛</div>
                <div>These features are still in active development, and may not functional properly and may not make it into production.</div>
                <div>We believe in transparency and community-driven development, so why don't you let us know what you think!</div>
                <div>To make things simple, hold ALT and click anywhere to send us feedback/bug reports!</div>
                <div>Thanks for visiting and joining us on the journey to a decentralized future.</div>
                <p hidden>
                    We're a platform built by the community, for the community.
                </p>
                <div hidden>
                    <Button
                        to="/help"
                        target="_blank">
                        Check out the BlockHub crowdfund
                    </Button>
                </div>
            </div>
            <div
                slot="footer"
                class="text-right w-100">
                <Button
                    size="md"
                    @click="closeModal">
                    Got it
                </Button>
            </div>
        </CustomModal>
    </Layout>
</template>


<script>
export default {
    scrollToTop: true,
    head() {
        return {
            title: `BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub is a next-generation decentralized digital distribution platform' },
                { hid: 'keywords', name: 'keywords', content: 'blockhub, hyperbridge, blockchain, cryptocurrency, game, indie, developer' }
            ]
        }
    },
    components: {
        'InfiniteContent': () => import('@ericmuyser/hyper-ui').then(m => m.InfiniteContent),
        'SimpleBanner': () => import('@ericmuyser/hyper-ui').then(m => m.SimpleBanner),
        'CustomModal': () => import('@ericmuyser/hyper-ui').then(m => m.CustomModal),
        'WelcomeBox': () => import('@ericmuyser/hyper-ui').then(m => m.WelcomeBox)
    },
    data() {
        return {
            breadcrumbLinks: false,
            showWelcomeModal: false, // ['preview', 'staging', 'local'].includes(this.$store.state.application.environmentMode) && !this.$store.state.application.settings.client.hideWelcomeModal,
            collections: []
        }
    },
    computed: {
        list() {
            const result = []

            if (this.$store.state.products.frontpageProducts.length) {
                result.push({
                    type: 'frontpageProduct',
                    data: this.$store.state.products.frontpageProducts[0]
                })
            }

            if (this.$store.state.products.featuredProducts.length) {
                result.push({
                    type: 'featuredProductGallery',
                    data: {
                        title: 'Featured',
                        ref: 'featuredProductGallerySlider',
                        swiper: this.$refs.featuredProductGallerySlider && this.$refs.featuredProductGallerySlider.swiper,
                        products: this.$store.state.products.featuredProducts,
                        slides: [
                            {
                                image: {
                                    src: this.$store.state.products.featuredProducts[0].meta.images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src: this.$store.state.products.featuredProducts[0].meta.images.icon,
                                    position: 'left bottom',
                                    size: 'lg'
                                },
                                title: this.$store.state.products.featuredProducts[0].name,
                                buttonText: 'Check it out',
                                id: this.$store.state.products.featuredProducts[0].id
                            },
                            {
                                image: {
                                    src: this.$store.state.products.featuredProducts[1].meta.images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src: this.$store.state.products.featuredProducts[1].meta.images.icon,
                                    position: 'left bottom',
                                    size: 'lg'
                                },
                                title: this.$store.state.products.featuredProducts[1].name,
                                buttonText: 'Check it out',
                                id: this.$store.state.products.featuredProducts[1].id
                            },
                            {
                                image: {
                                    src: this.$store.state.products.featuredProducts[2].meta.images.preview[0],
                                    position: 'center'
                                },
                                logo: {
                                    src: this.$store.state.products.featuredProducts[2].meta.images.icon,
                                    position: 'left bottom',
                                    size: 'lg'
                                },
                                title: this.$store.state.products.featuredProducts[2].name,
                                buttonText: 'Check it out',
                                id: this.$store.state.products.featuredProducts[2].id
                            }
                        ]
                    }
                })
            }

            result.push({
                type: 'collectionsList',
                data: {
                    collectionsList: this.collections,
                    ref: 'collectionsSlider',
                    swiper: this.$refs.collectionsSlider && this.$refs.collectionsSlider.swiper
                }
            })

            result.push({
                type: 'productSlider',
                data: {
                    title: 'New Releases',
                    slidesPerView: 3,
                    products: this.$store.state.products.newReleases
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
                        }
                    ]
                }
            })

            result.push({
                type: 'gamesExplorer',
                data: {
                    products: {
                        topSelling: this.$store.state.products.topSellingProducts,
                        newReleases: this.$store.state.products.newReleases,
                        upcoming: this.$store.state.products.upcomingProducts
                    }
                }
            })

            result.push({
                type: 'productSlider',
                data: {
                    title: 'Summer Sale',
                    slidesPerView: 3,
                    products: this.$store.state.products.saleProducts
                }
            })

            result.push({
                type: 'assetGrid',
                data: {
                    assets: [] // this.$store.getters['marketplace/assetsArray']
                }
            })

            if (this.$access('curator.read')) {
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
                                }
                            }
                        },
                        reviews: [] // this.curatorReviews
                    }
                })
            }

            const groupBy = function(xs, key) {
                return xs.reduce((rv, x) => {
                    if (!x[key]) return rv;
                    (rv[x[key]] = rv[x[key]] || []).push(x)
                    return rv
                }, {}) || null
            }

            if (false) { // this.productNews.length) {
                result.push({
                    type: 'productNews',
                    data: {
                        headings: Object.values(groupBy(this.productNews, 'targetId')).map(post => {
                            if (post[0].targetType === 'product') {
                                const target = this.$store.state.products.keyedById[post[0].targetId]

                                return {
                                    image: target.meta.images.mediumTile,
                                    title: target.meta.name,
                                    developer: target.meta.developer
                                }
                            }
                            return undefined
                        }),
                        lists: Object.values(groupBy(this.productNews, 'targetId'))
                    }
                })
            }

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
                            }
                        }
                    },
                    projects: [] // this.trendingProjects
                }
            })

            result.push({
                type: 'gameSeries',
                data: {
                    list: [], // this.gameSeries,
                    showNumber: 3
                }
            })

            return result
        }
    },
    async asyncData({ store }) {
        if (process.client) {
            store.dispatch('products/newReleases')
            store.dispatch('products/featuredProducts')
            store.dispatch('products/saleProducts')
            store.dispatch('products/frontpageProducts')
            store.dispatch('products/topSellingProducts')
            store.dispatch('products/upcomingProducts')

            return {}
        }
            return {
                newReleases: await store.dispatch('products/newReleases'),
                featuredProducts: await store.dispatch('products/featuredProducts'),
                saleProducts: await store.dispatch('products/saleProducts'),
                frontpageProducts: await store.dispatch('products/frontpageProducts'),
                topSellingProducts: await store.dispatch('products/topSellingProducts'),
                upcomingProducts: await store.dispatch('products/upcomingProducts')
            }

    },
    async mounted() {
        this.collections = (await this.$store.dispatch('collections/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })).data

        this.updateLandingImage()
    },
    created() {
        this.updateLandingImage()
    },
    beforeDestroy() {
        if (!process.client) return
        window.document.getElementById('header-bg').style['background-image'] = 'url(/img/backgrounds/1.jpg)'
    },
    methods: {
        updateLandingImage() {
            if (!process.client) return

            const { frontpageProducts } = this.$store.state.products

            if (frontpageProducts.length && frontpageProducts[0].meta.images) {
                const header = window.document.getElementById('header-bg')
                const randomImage = Math.floor(Math.random() * frontpageProducts[0].meta.images.preview.length)
                header.style['background-image'] = `url(${frontpageProducts[0].meta.images.preview[randomImage]})`
                header.style['background-size'] = 'cover'
            }
        },
        closeModal() {
            this.showWelcomeModal = false
            this.$store.commit('application/updateClientSettings', { key: 'hideWelcomeModal', value: true })
        }
    }
}
</script>


<style lang="scss">
    .page__content > .content {
        width: calc(100% - 500px);
    }
    .main-banner {
        padding: 10px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .1);
    }

</style>
