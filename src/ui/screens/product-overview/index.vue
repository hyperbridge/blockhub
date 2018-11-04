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
                :isUnavailable="!Number(product.price)"
                :price="product.price"
                :tags="['New']"
                :onClickPurchase="showPurchaseModal"
                class="margin-bottom-15"
                :inWishlist="!!wishlist[product.id]"
                @addToWishlist="addToWishlist"
            />
            <c-button icon_hide @click="showInstaller = !showInstaller" hidden>Open installer</c-button>

            <c-rating-block class="margin-bottom-20" :items="product.rating"
                            :parent_url="`/#/product/${product.id}`" v-darklaunch="'RATINGS'" />

            <c-frequently-traded-assets class="margin-bottom-20" :items="product.frequently_traded_assets"
                                        :assetsUrl="`/#/product/${product.id}/assets`" v-darklaunch="'ASSETS'" />

            <c-community-spotlight class="margin-bottom-20" :discussions="product.community.discussions"
                                    :communityUrl="`/#/product/${product.id}/community`" v-darklaunch="'COMMUNITY'" />

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
                <c-swiper :options="sliderOptions">
                    <c-slide v-for="(el, index) in streamersList" :key="index">
                        <c-stream-item />
                    </c-slide>
                </c-swiper>
            </c-block>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <c-heading-bar name="Reviews" :showArrows="true" :showBackground="false"/>
                </div>
                <div class="col-md-6 col-12">
                    <h3 class="margin-vertical-20">Most helpful</h3>
                    <c-review
                        v-for="(review, index) in reviews.helpful"
                        :key="index"
                        :review="review"
                    />
                </div>
                <div class="col-md-6 col-12">
                    <h3 class="margin-vertical-20">Most recent</h3>
                    <c-review
                        v-for="(review, index) in reviews.recent"
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
            const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.';
            const title = 'Good game with very nice graphics made by very smart people.';
            const setup = {
                system: 'Windows 10',
                gpu: 'GTX 1080',
                cpu: 'Core i7 7980x',
                ram: '8 GB',
                storage: 'HyperX 1TB SSD'
            };
            const author = {
                name: 'Nakatochi',
                img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'
            };
            return {
                reviews: {
                    helpful: [
                        {
                            author,
                            title: title,
                            text,
                            date: '2018-08-19T04:09:00.000Z',
                            rating: 4.5,
                            minutes_played: 1938,
                            setup
                        },
                        {
                            author,
                            title: title,
                            text,
                            date: '2018-08-16T04:09:00.000Z',
                            rating: 1.5,
                            minutes_played: 414,
                            setup
                        },
                        {
                            author,
                            title: title,
                            text,
                            date: '2018-08-18T04:09:00.000Z',
                            rating: 3.5,
                            minutes_played: 71,
                            setup
                        }
                    ],
                    recent: [
                        {
                            author,
                            title: title,
                            text,
                            date: '2018-08-20T04:09:00.000Z',
                            rating: 1.5,
                            minutes_played: 13,
                            setup
                        },
                        {
                            author,
                            title: title,
                            text,
                            date: '2018-03-21T04:09:00.000Z',
                            rating: 5,
                            minutes_played: 241,
                            setup
                        },
                        {
                            author,
                            title: title,
                            text,
                            date: '2018-08-11T04:09:00.000Z',
                            rating: 3,
                            minutes_played: 2941,
                            setup
                        }
                    ]
                },
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
            addToWishlist() {
                const { id } = this.product;
                this.$store.commit('application/updateFavorites', { id })
                this.$snotify.success(
                    `Product has been ${this.wishlist[id] ? 'added to' : 'removed from'} your wishlist`,
                    `Product ${this.wishlist[id] ? 'added' : 'removed'}`
                );
            }
        },
        computed:{
            streams_slider() {
                return this.$refs.streams_slider.swiper;
            },
            wishlist() {
                return this.$store.state.application.account.product_wishlist || {};
            }
        }
    }
</script>

<style lang="scss">
    .note-toolbar {
        z-index: 95 !important;
    }
</style>
