<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <c-screen-gallery
                :items="[product.images.mediumTile, ...product.images.preview]"
                :video_url="product.video"
            />

            <div v-for="(promotions, section) in promotionSections" :key="section" v-if="promotionSections">
                <h3 style="margin-top: 20px;" v-if="section">{{ section }}</h3>
                <c-promotion-box
                    :title="promotion.title"
                    :price="promotion.price"
                    v-if="product.promotions"
                    v-for="(promotion, index) in promotions" :key="index"
                />
            </div>

            <div class="overflow-hidden">
                <c-game-plan
                    v-for="(plan, index) in product.plans"
                    :key="index"
                    :plan="plan"
                />
            </div>

            <div class="main-content" v-html="product.content" v-if="!editing">
                {{ product.content }}
            </div>

            <div class="content-editor" v-if="editing">
                <div id="summernote" v-html="product.content">{{ product.content }}</div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-xl-4">
            <c-purchase-block
                :isUnavailable="!currentRelease"
                :price="product.price"
                :tags="['New']"
                :onClickPurchase="showPurchaseModal"
                class="margin-bottom-15"
                :inWishlist="!!wishlist[product.id]"
                :inShortcut="$store.state.application.shortcuts.find(s => s.id == ('product' + product.id))"
                :releaseDate="product.releaseDate"
                :playLink="currentRelease && currentRelease.play_link"
                @addToWishlist="$store.dispatch(
                    'community/updateWishlist',
                    ['product', product.id]
                )"
                @addToShortcut="$store.commit(
                    'application/updateShortcut',
                    { id: 'product' + product.id, type: 'product', text: product.name, link: '#/product/' + product.id, image: product.images.mediumTile }
                )"
            />
            <c-button iconHide @click="showInstaller = !showInstaller" hidden>Open installer</c-button>

            <c-rating-block class="margin-bottom-20" :items="product.rating"
                            :parentUrl="`#/product/${product.id}`" v-darklaunch="'RATINGS'" @goto="scrollToReviews" />

            <c-frequently-traded-assets class="margin-bottom-20" :items="product.frequentlyTradedAssets"
                                        :assetsUrl="`#/product/${product.id}/assets`" v-darklaunch="'ASSETS'" />

            <c-community-spotlight class="margin-bottom-20" :discussions="product.community.discussions"
                                    :communityUrl="`#/product/${product.id}/community`" v-darklaunch="'COMMUNITY'" />

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

            <c-system-requirements class="margin-bottom-20" :requirements="product.systemRequirements" />

            <c-language-support :languages="product.languageSupport" />
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
                            :streamSrc="stream.src"
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
                    No reviews yet. Be the first?
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
                showInstaller: false
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
                return this.$store.state.application.activeProfile && this.$store.state.application.activeProfile.productWishlist || {}
            },
            streams() {
                return this.product.streams
            },
            reviews() {
                return this.product.reviews
            },
            currentRelease() {
                return this.product.releases && this.product.releases.find(p => this.product.currentVersion === p.version)
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
