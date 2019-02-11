<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <c-screen-gallery
                :items="[product.meta.images.mediumTile, ...product.meta.images.preview]"
                :video_url="product.meta.video"
            />

            <div v-for="(promotions, section) in promotionSections" :key="section" v-if="promotionSections">
                <h3 style="margin-top: 20px;" v-if="section">{{ section }}</h3>
                <c-promotion-box
                    :title="promotion.title"
                    :price="promotion.price"
                    v-if="product.meta.promotions"
                    v-for="(promotion, index) in promotions" :key="index"
                />
            </div>

            <div class="overflow-hidden">
                <c-game-plan
                    v-for="(plan, index) in product.meta.plans"
                    :key="index"
                    :plan="plan"
                />
            </div>

            <div class="main-content" v-html="product.meta.content" v-if="!editing">
                {{ product.meta.content }}
            </div>

            <div class="content-editor" v-if="editing">
                <div id="summernote" v-html="product.meta.content">{{ product.meta.content }}</div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-xl-4">
            <c-purchase-block
                class="margin-bottom-15"
                :isUnavailable="!currentRelease"
                :price="product.meta.price"
                :tags="['New']"
                :onClickPurchase="showPurchaseModal"
                :inWishlist="!!wishlist[product.id]"
                :inShortcut="$store.state.application.shortcuts.find(s => s.id == ('product' + product.id))"
                :releaseDate="product.meta.releaseDate"
                :playLink="currentRelease && currentRelease.playLink"
                @addToWishlist="$store.dispatch(
                    'community/updateWishlist',
                    ['product', product.id]
                )"
                @addToShortcut="$store.commit(
                    'application/updateShortcut',
                    { id: 'product' + product.id, type: 'product', text: product.name, to: '/product/' + product.id, image: product.meta.images.mediumTile }
                )"
            />
            <c-button iconHide @click="showInstaller = !showInstaller" hidden>Open installer</c-button>

            <c-rating-block class="margin-bottom-20" :items="product.meta.rating"
                            :parentPath="`/product/${product.id}`" v-darklaunch="'RATINGS'" @goto="scrollToReviews" />

            <c-frequently-traded-assets class="margin-bottom-20" :items="product.meta.frequentlyTradedAssets"
                                        :assetsPath="`/product/${product.id}/assets`" v-darklaunch="'ASSETS'" />

            <c-community-spotlight class="margin-bottom-20" :discussions="product.meta.community.discussions"
                                    :communityPath="`/product/${product.id}/community`" v-darklaunch="'COMMUNITY'" />

            <c-block :title="`Official`"
                     :noGutter="true"
                     :bgGradient="true"
                     :onlyContentBg="true"
                     :showBackground="true"
                     class="margin-top-30 margin-bottom-20">
                <div>
                    <c-button class="mb-1 text-align-center" status="dark" size="md" full @click="$store.commit('application/activateModal', 'coming-soon')">Open in Discord</c-button>
                    <c-button class="mb-1 text-align-center" status="dark" size="md" full @click="$store.commit('application/activateModal', 'coming-soon')">Open in Twitch</c-button>
                    <c-button class="mb-1 text-align-center" status="dark" size="md" full @click="$store.commit('application/activateModal', 'coming-soon')">Open in YouTube</c-button>
                    <c-button class="mb-1 text-align-center" status="dark" size="md" full @click="$store.commit('application/activateModal', 'coming-soon')">Open in Steam</c-button>
                </div>
            </c-block>

            <c-system-requirements class="margin-bottom-20" :requirements="product.meta.systemRequirements" />

            <c-language-support :languages="product.meta.languageSupport" />
        </div>
        <div class="col-12">
            <c-block :title="`Updates`"
                     :noGutter="true"
                     :bgGradient="true"
                     :onlyContentBg="true"
                     :showArrows="true"
                     :showBackground="true"
                     ref="streamsSlider"
                     @prevClick="streamsSlider.slidePrev()"
                     @nextClick="streamsSlider.slideNext()"
                     class="margin-top-30 margin-bottom-20">
                <div class="h5">
                    Updates were not found.
                </div>
            </c-block>
        </div>
        <div class="col-12">
            <c-block :title="`Streams`"
                     :noGutter="true"
                     :bgGradient="true"
                     :onlyContentBg="true"
                     :showArrows="true"
                     :showBackground="true"
                     ref="streamsSlider"
                     @prevClick="streamsSlider.slidePrev()"
                     @nextClick="streamsSlider.slideNext()"
                     class="margin-top-30 margin-bottom-20">
                <c-swiper :options="sliderOptions" v-if="streams">
                    <c-slide v-for="(stream, index) in streams" :key="index">
                        <!--<c-stream-item />-->
                        <c-stream-item
                            :streamGame="product.name"
                            :streamName="stream.userName"
                            :streamAvatar="stream.userAvatar"
                            :streamImg="stream.previews"
                            :streamLink="stream.src"
                            :streamViews="stream.views"
                        />
                    </c-slide>
                </c-swiper>
                <div class="h5" v-else>
                    Twitch streams were not found.
                </div>
            </c-block>
        </div>
        <div class="col-12">
            <c-block :title="`World Records`"
                     :noGutter="true"
                     :bgGradient="true"
                     :onlyContentBg="true"
                     :showArrows="true"
                     :showBackground="true"
                     ref="streamsSlider"
                     @prevClick="streamsSlider.slidePrev()"
                     @nextClick="streamsSlider.slideNext()"
                     class="margin-top-30 margin-bottom-20">
                <div class="h5">
                    World records were not found.
                </div>
            </c-block>
        </div>
        <div class="col-12" v-darklaunch="'TOURNAMENTS'">
            <c-block :title="`Upcoming tournaments`"
                     :noGutter="true"
                     :bgGradient="true"
                     :onlyContentBg="true"
                     :showArrows="true"
                     :showBackground="true"
                     ref="streamsSlider"
                     @prevClick="streamsSlider.slidePrev()"
                     @nextClick="streamsSlider.slideNext()"
                     class="margin-top-30 margin-bottom-20">
                <div class="h5">
                    Tournaments not found.
                </div>
            </c-block>
        </div>
        <div class="col-12" ref="reviews">
            <c-block :title="`Reviews`"
                     :noGutter="true"
                     :bgGradient="true"
                     :onlyContentBg="true"
                     :showArrows="true"
                     :showBackground="true"
                     ref="streamsSlider"
                     @prevClick="streamsSlider.slidePrev()"
                     @nextClick="streamsSlider.slideNext()"
                     class="margin-top-30 margin-bottom-20">
                <div class="col-md-6 col-12" v-if="helpfulReviews.length">
                    <h3 class="margin-vertical-20">Most helpful</h3>
                    <c-review
                        v-for="(review, index) in helpfulReviews"
                        :key="index"
                        :review="review"
                    />
                </div>
                <div class="col-md-6 col-12" v-else-if="recentReviews.length">
                    <h3 class="margin-vertical-20">Most recent</h3>
                    <c-review
                        v-for="(review, index) in recentReviews"
                        :key="index"
                        :review="review"
                    />
                </div>
                <div class="h5" v-else>
                    <template v-if="!reviewForm">
                        No reviews yet. <c-button status="plain" size="md" @click="reviewForm=true" class="p-0">Be the first?</c-button>
                    </template>
                    <template v-if="reviewForm">
                        <c-review-form @cancel="reviewForm=!reviewForm" />
                    </template>
                </div>
            </c-block>
        </div>
        <c-modal
            v-if="showInstaller"
            :title="product.name"
            @close="showInstaller = false"
        >
            <c-game-installer
                slot="body"
                :product="product"
                @cancel="showInstaller = false"
            />
        </c-modal>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        props: ['product', 'editing'],
        components: {
            'c-game-plan': (resolve) => require(['@/ui/components/game-plans/plan'], resolve),
            'c-screen-gallery': (resolve) => require(['@/ui/components/screen-gallery/gallery'], resolve),
            'c-promotion-box': (resolve) => require(['@/ui/components/promotion-box/item'], resolve),
            'c-rating-block': (resolve) => require(['@/ui/components/rating-block'], resolve),
            'c-purchase-block': (resolve) => require(['@/ui/components/purchase-block'], resolve),
            'c-frequently-traded-assets': (resolve) => require(['@/ui/components/frequently-traded-assets'], resolve),
            'c-community-spotlight': (resolve) => require(['@/ui/components/community-spotlight'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-review': (resolve) => require(['@/ui/components/review'], resolve),
            'c-system-requirements': (resolve) => require(['@/ui/components/product-overview/system-requirements'], resolve),
            'c-language-support': (resolve) => require(['@/ui/components/product-overview/language-support'], resolve),
            'c-stream-item': (resolve) => require(['@/ui/components/stream'], resolve),
            'c-modal': (resolve) => require(['@/ui/components/modal'], resolve),
            'c-game-installer': (resolve) => require(['@/ui/components/game-installer'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
            'c-review-form': (resolve) => require(['@/ui/components/review/create'], resolve),
        },
        data() {
            return {
                promotionSections: null,
                sliderOptions: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    breakpoints: {
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                    }
                },
                streamersList: 8,
                showInstaller: false,
                reviewForm: false
            }
        },
        methods: {
            showPurchaseModal() {
                this.$store.dispatch('application/activateModal', 'purchase')
            },
            showArrowsState(el, count) {
                if ( el.length > count) {
                    return true
                } else {
                    return false
                }
            },
            scrollToReviews() {
                this.$refs.reviews.scrollIntoView()
            }
        },
        computed: {
            streamsSlider() {
                return this.$refs.streamsSlider.swiper
            },
            wishlist() {
                if (!this.$store.state.community.profiles[this.$store.state.application.activeProfile.id]) {
                    this.$store.state.community.profiles[this.$store.state.application.activeProfile.id] = {
                        productWishlist: {}
                    }
                }

                return this.$store.state.community.profiles[this.$store.state.application.activeProfile.id].productWishlist
            },
            streams() {
                return this.product.meta.streams
            },
            reviews() {
                return this.product.meta.reviews
            },
            currentRelease() {
                return this.product.meta.releases && this.product.meta.releases.find(p => this.product.meta.currentVersion === p.version)
            },
            helpfulReviews() {
                if (!this.reviews) return []

                let arr = []
                
                this.reviews.forEach( (el) => {
                    if (el.helpful)
                        arr.push(el)
                })
                return arr
            },
            recentReviews() {
                if (!this.reviews) return []

                let arr = []
                this.reviews.forEach( (el) => {
                    if (el.recent)
                        arr.push(el)
                })

                return arr
            },
        }
    }
</script>

<style lang="scss">
    .note-toolbar {
        z-index: 95 !important;
    }
</style>
