<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <c-screen-gallery
                :items="[product.images.medium_tile, ...product.images.preview]"
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
                :releaseDate="product.release_date"
                :playLink="currentRelease && currentRelease.play_link"
                @addToWishlist="$store.dispatch(
                    'community/updateWishlist',
                    ['product', product.id]
                )"
                @addToShortcut="$store.commit(
                    'application/updateShortcut',
                    { id: 'product' + product.id, type: 'product', text: product.name, link: '#/product/' + product.id, image: product.images.medium_tile }
                )"
            />
            <c-button icon_hide @click="showInstaller = !showInstaller" hidden>Open installer</c-button>

            <c-rating-block class="margin-bottom-20" :items="product.rating"
                            :parent_url="`#/product/${product.id}`" v-darklaunch="'RATINGS'" />

            <c-frequently-traded-assets class="margin-bottom-20" :items="product.frequentlyTradedAssets"
                                        :assetsUrl="`#/product/${product.id}/assets`" v-darklaunch="'ASSETS'" />

            <c-community-spotlight class="margin-bottom-20" :discussions="product.community.discussions"
                                    :communityUrl="`#/product/${product.id}/community`" v-darklaunch="'COMMUNITY'" />

            <c-system-requirements class="margin-bottom-20" :requirements="product.system_requirements" />

            <c-language-support :languages="product.language_support" />
        </div>
        <div class="col-12">
            <c-block :title="`TWITCH STREAMS - ${product.name}`"
                     :noGutter="true"
                     :bgGradient="true"
                     :onlyContentBg="true"
                     :showArrows="true"
                     :showBackground="true"
                     ref="streams_slider"
                     @prevClick="streams_slider.slidePrev()"
                     @nextClick="streams_slider.slideNext()"
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
            <div class="row">
                <div class="col-12">
                    <c-heading-bar name="Reviews" :showArrows="true" :showBackground="false"/>
                </div>
                <div class="col-12 h5" v-if="!helpfulReviews.length && !recentReviews.length">
                    No reviews found.
                </div>
                <div class="col-md-6 col-12" v-if="helpfulReviews.length">
                    <h3 class="margin-vertical-20">Most helpful</h3>
                    <c-review
                        v-for="(review, index) in helpfulReviews"
                        :key="index"
                        :review="review"
                    />
                </div>
                <div class="col-md-6 col-12" v-if="recentReviews.length">
                    <h3 class="margin-vertical-20">Most recent</h3>
                    <c-review
                        v-for="(review, index) in recentReviews"
                        :key="index"
                        :review="review"
                    />
                </div>
            </div>
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
            }
        },
        computed:{
            streams_slider() {
                return this.$refs.streams_slider.swiper;
            },
            wishlist() {
                return this.$store.getters['application/profile'].productWishlist || {};
            },
            streams(){
                return this.product.streams
            },
            reviews(){
                return this.product.reviews
            },
            currentRelease() {
                return this.product.releases && this.product.releases.find(p => this.product.current_version === p.version)
            },
            helpfulReviews(){
                if (!this.reviews) return []

                let arr = [];
                
                this.reviews.forEach( (el) => {
                    if (el.helpful)
                        arr.push(el)
                })
                return arr;
            },
            recentReviews(){
                if (!this.reviews) return []

                let arr = [];
                this.reviews.forEach( (el) => {
                    if (el.recent)
                        arr.push(el)
                })
                return arr;
            },
        }
    }
</script>

<style lang="scss">
    .note-toolbar {
        z-index: 95 !important;
    }
</style>
