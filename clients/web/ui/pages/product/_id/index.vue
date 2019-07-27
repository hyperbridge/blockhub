<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <c-screen-gallery
                v-if="product.meta.images"
                :items="[product.meta.images.mediumTile, ...product.meta.images.preview]"
                :videoUrl="product.meta.video" />

            <div
                v-for="(promotions, section) in promotionSections"
                v-if="promotionSections"
                :key="section">
                <h3
                    v-if="section"
                    style="margin-top: 20px;">
                    {{ section }}
                </h3>
                <c-promotion-box
                    v-for="(promotion, index) in promotions"
                    v-if="product.meta.promotions"
                    :key="index"
                    :title="promotion.title"
                    :price="promotion.price" />
            </div>

            <div class="overflow-hidden">
                <c-game-plan
                    v-for="(plan, index) in product.meta.plans"
                    :key="index"
                    :plan="plan" />
            </div>

            <div
                v-if="!editing"
                class="main-content"
                v-html="product.meta.content">
                {{ product.meta.content }}
            </div>

            <div
                v-if="editing"
                class="content-editor">
                <div
                    id="summernote"
                    v-html="product.meta.content">
                    {{ product.meta.content }}
                </div>
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
                @addToCollection="addToCollection"
                @addToWishlist="$store.dispatch(
                    'community/updateWishlist',
                    ['product', product.id]
                )"
                @addToShortcut="$store.commit(
                    'application/updateShortcut',
                    { id: 'product' + product.id, type: 'product', text: product.name, to: '/product/' + product.id, image: product.meta.images.mediumTile }
                )" />
            <c-button
                iconHide
                hidden
                @click="showInstaller = !showInstaller">
                Open installer
            </c-button>

            <c-rating-block
                v-access="'rating.read'"
                class="margin-bottom-20"
                :items="product.meta.rating"
                :parentPath="`/product/${product.id}`"
                @goto="scrollToReviews" />

            <c-frequently-traded-assets
                v-access="'asset.read'"
                class="margin-bottom-20"
                :items="product.meta.frequentlyTradedAssets"
                :assetsPath="`/product/${product.id}/assets`" />

            <c-community-spotlight
                v-access="'community.read'"
                class="margin-bottom-20"
                :discussions="product.meta.community.discussions"
                :communityPath="`/product/${product.id}/community`" />

            <c-block
                :title="`Official`"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true"
                :showBackground="true"
                class="margin-top-30 margin-bottom-20">
                <div>
                    <c-button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in Discord
                    </c-button>
                    <c-button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in Twitch
                    </c-button>
                    <c-button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in YouTube
                    </c-button>
                    <c-button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in BlockHub
                    </c-button>
                </div>
            </c-block>

            <c-system-requirements
                class="margin-bottom-20"
                :requirements="product.meta.systemRequirements" />

            <c-language-support :languages="product.meta.languageSupport" />
        </div>
        <div class="col-12">
            <c-block
                ref="streamsSlider"
                :title="`Updates`"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true"
                :showArrows="true"
                :showBackground="true"
                class="margin-top-30 margin-bottom-20"
                @prevClick="streamsSlider.slidePrev()"
                @nextClick="streamsSlider.slideNext()">
                <div class="h5">
                    Updates were not found.
                </div>
            </c-block>
        </div>
        <div class="col-12">
            <c-block
                ref="streamsSlider"
                :title="`Streams`"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true"
                :showArrows="true"
                :showBackground="true"
                class="margin-top-30 margin-bottom-20"
                @prevClick="streamsSlider.slidePrev()"
                @nextClick="streamsSlider.slideNext()">
                <c-swiper
                    v-if="streams"
                    :options="sliderOptions">
                    <c-swiper-slide
                        v-for="(stream, index) in streams"
                        :key="index">
                        <!--<c-stream-item />-->
                        <c-stream-item
                            :streamGame="product.name"
                            :streamName="stream.userName"
                            :streamAvatar="stream.userAvatar"
                            :streamImg="stream.previews"
                            :streamLink="stream.src"
                            :streamViews="stream.views" />
                    </c-swiper-slide>
                </c-swiper>
                <div
                    v-else
                    class="h5">
                    Twitch streams were not found.
                </div>
            </c-block>
        </div>
        <div class="col-12">
            <c-block
                ref="streamsSlider"
                :title="`World Records`"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true"
                :showArrows="true"
                :showBackground="true"
                class="margin-top-30 margin-bottom-20"
                @prevClick="streamsSlider.slidePrev()"
                @nextClick="streamsSlider.slideNext()">
                <div class="h5">
                    World records were not found.
                </div>
            </c-block>
        </div>
        <div
            v-access="'tournament.read'"
            class="col-12">
            <c-block
                ref="streamsSlider"
                :title="`Upcoming tournaments`"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true"
                :showArrows="true"
                :showBackground="true"
                class="margin-top-30 margin-bottom-20"
                @prevClick="streamsSlider.slidePrev()"
                @nextClick="streamsSlider.slideNext()">
                <div class="h5">
                    Tournaments not found.
                </div>
            </c-block>
        </div>
        <div
            ref="reviews"
            class="col-12">
            <c-block
                ref="streamsSlider"
                :title="`Reviews`"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true"
                :showArrows="true"
                :showBackground="true"
                class="margin-top-30 margin-bottom-20"
                @prevClick="streamsSlider.slidePrev()"
                @nextClick="streamsSlider.slideNext()">
                <div
                    v-if="helpfulReviews.length"
                    class="col-md-6 col-12">
                    <h3 class="margin-vertical-20">
                        Most helpful
                    </h3>
                    <c-review
                        v-for="(review, index) in helpfulReviews"
                        :key="index"
                        :review="review" />
                </div>
                <div
                    v-else-if="recentReviews.length"
                    class="col-md-6 col-12">
                    <h3 class="margin-vertical-20">
                        Most recent
                    </h3>
                    <c-review
                        v-for="(review, index) in recentReviews"
                        :key="index"
                        :review="review" />
                </div>
                <div
                    v-else
                    class="h5">
                    <template v-if="!reviewForm">
                        No reviews yet. <c-button
                            status="plain"
                            size="md"
                            class="p-0"
                            @click="reviewForm=true">
                            Be the first?
                        </c-button>
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
            @close="showInstaller = false">
            <c-game-installer
                slot="body"
                :productImagesMediumTile="product.images.mediumTile"
                :productName="product.name"
                :productSystemRequirements="product.systemRequirements"
                @cancel="showInstaller = false" />
        </c-modal>
        <div v-if="showVote" class="row m-0 p-3">
            <c-vote-modal id="voteModal" title="Please vote our product" @close="showVote = false">
                <template slot="body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label> Product quality:</label>
                                <div>
                                    <c-pure-range-slider v-model.number="quality" :min="0" :max="10" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label> Pick your emotion :</label>
                                <div>
                                    <no-ssr placeholder="loading...">
                                        <c-vote-emoji />
                                    </no-ssr>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label> Like or Dislike:</label>
                                <div>
                                    <c-vote :votes="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template slot="footer">
                    <c-checkbox
                        id="vote">
                        Don't show it again.
                    </c-checkbox>
                </template>
            </c-vote-modal>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-pure-range-slider': () => import('~/components/range-slider/pure').then(m => m.default || m),
        'c-vote-emoji': () => import('~/components/emoji/vote').then(m => m.default || m),
        'c-vote': () => import('~/components/vote').then(m => m.default || m),
        'c-game-plan': () => import('~/components/game-plans/plan').then(m => m.default || m),
        'c-screen-gallery': () => import('~/components/screen-gallery/gallery').then(m => m.default || m),
        'c-promotion-box': () => import('~/components/promotion-box/item').then(m => m.default || m),
        'c-rating-block': () => import('~/components/rating-block').then(m => m.default || m),
        'c-purchase-block': () => import('~/components/purchase-block').then(m => m.default || m),
        'c-frequently-traded-assets': () => import('~/components/frequently-traded-assets').then(m => m.default || m),
        'c-community-spotlight': () => import('~/components/community-spotlight').then(m => m.default || m),
        'c-review': () => import('~/components/review').then(m => m.default || m),
        'c-system-requirements': () => import('~/components/product-overview/system-requirements').then(m => m.default || m),
        'c-language-support': () => import('~/components/product-overview/language-support').then(m => m.default || m),
        'c-stream-item': () => import('~/components/stream').then(m => m.default || m),
        'c-modal': () => import('~/components/modal').then(m => m.default || m),
        'c-vote-modal': () => import('~/components/modal/vote').then(m => m.default || m),
        'c-game-installer': () => import('~/components/game-installer').then(m => m.default || m),
        'c-review-form': () => import('~/components/review/create').then(m => m.default || m)
    },
    props: {
        product: {
            type: Object
        },
        editing: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            quality: 0,
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
                    }
                }
            },
            streamersList: 8,
            showInstaller: false,
            reviewForm: false,
            showVote: false
        }
    },
    computed: {
        streamsSlider() {
            return this.$refs.streamsSlider.swiper
        },
        wishlist() {
            return (this.$store.state.application.activeProfile && this.$store.state.application.activeProfile.productWishlist) || {}
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

            const arr = []

            this.reviews.forEach(el => {
                if (el.helpful) { arr.push(el) }
            })
            return arr
        },
        recentReviews() {
            if (!this.reviews) return []

            const arr = []
            this.reviews.forEach(el => {
                if (el.recent) { arr.push(el) }
            })

            return arr
        }
    },
    mounted() {
        // this.$store.commit('application/activeModal', 'please-vote');
    },
    methods: {
        showPurchaseModal() {
            this.$store.dispatch('application/activeModal', 'purchase')
        },
        showArrowsState(el, count) {
            if (el.length > count) {
                return true
            }
            return false
        },
        scrollToReviews() {
            this.$refs.reviews.scrollIntoView()
        },
        addToCollection() {
            this.$store.dispatch('marketplace/addToCollection', {
                // collections: [
                //     {
                //         name: 'My Top 100',
                //         id: 22
                //     },
                //     {
                //         name: 'Nintendo TOP',
                //         id: 22
                //     },
                //     {
                //         name: 'Game for PS4',
                //         id: 22
                //     },
                //     {
                //         name: 'Something other',
                //         id: 22
                //     }
                // ],
                image: this.product.meta.images.mediumTile,
                name: this.product.name,
                description: this.product.meta.shortDescription,
                resourceType: 'Product',
                resourceId: this.product.id
            })
        }
    }
}
</script>

<style lang="scss">
    .note-toolbar {
        z-index: 95 !important;
    }
</style>
