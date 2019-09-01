<template>
    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8">
            <ScreenGallery
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
                <PromotionBox
                    v-for="(promotion, index) in promotions"
                    v-if="product.meta.promotions"
                    :key="index"
                    :title="promotion.title"
                    :price="promotion.price" />
            </div>

            <div class="overflow-hidden">
                <GamePlan
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
            <PurchaseBlock
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
            <Button
                iconHide
                hidden
                @click="showInstaller = !showInstaller">
                Open installer
            </Button>

            <RatingBlock
                v-access="'rating.read'"
                class="margin-bottom-20"
                :items="product.meta.rating"
                :parentPath="`/product/${product.id}`"
                @goto="scrollToReviews" />

            <FrequentlyTradedAssets
                v-access="'asset.read'"
                class="margin-bottom-20"
                :items="product.meta.frequentlyTradedAssets"
                :assetsPath="`/product/${product.id}/assets`" />

            <CommunitySpotlight
                v-access="'community.read'"
                class="margin-bottom-20"
                :discussions="product.meta.community.discussions"
                :communityPath="`/product/${product.id}/community`" />

            <Block
                :title="`Official`"
                :noGutter="true"
                :bgGradient="true"
                :onlyContentBg="true"
                :showBackground="true"
                class="margin-top-30 margin-bottom-20">
                <div>
                    <Button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in Discord
                    </Button>
                    <Button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in Twitch
                    </Button>
                    <Button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in YouTube
                    </Button>
                    <Button
                        class="mb-1 text-align-center"
                        status="dark"
                        size="md"
                        full
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Open in BlockHub
                    </Button>
                </div>
            </Block>

            <SystemRequirements
                class="margin-bottom-20"
                :requirements="product.meta.systemRequirements" />

            <LanguageSupport :languages="product.meta.languageSupport" />
        </div>
        <div class="col-12">
            <Block
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
            </Block>
        </div>
        <div class="col-12">
            <Block
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
                <Swiper
                    v-if="streams"
                    :options="sliderOptions">
                    <SwiperSlide
                        v-for="(stream, index) in streams"
                        :key="index">
                        <!--<StreamItem />-->
                        <StreamItem
                            :streamGame="product.name"
                            :streamName="stream.userName"
                            :streamAvatar="stream.userAvatar"
                            :streamImg="stream.previews"
                            :streamLink="stream.src"
                            :streamViews="stream.views" />
                    </SwiperSlide>
                </Swiper>
                <div
                    v-else
                    class="h5">
                    Twitch streams were not found.
                </div>
            </Block>
        </div>
        <div class="col-12">
            <Block
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
            </Block>
        </div>
        <div
            v-access="'tournament.read'"
            class="col-12">
            <Block
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
            </Block>
        </div>
        <div
            ref="reviews"
            class="col-12">
            <Block
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
                    <Review
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
                    <Review
                        v-for="(review, index) in recentReviews"
                        :key="index"
                        :review="review" />
                </div>
                <div
                    v-else
                    class="h5">
                    <template v-if="!reviewForm">
                        No reviews yet. <Button
                            status="plain"
                            size="md"
                            class="p-0"
                            @click="reviewForm=true">
                            Be the first?
                        </Button>
                    </template>
                    <template v-if="reviewForm">
                        <ReviewForm @cancel="reviewForm=!reviewForm" />
                    </template>
                </div>
            </Block>
        </div>
        <Modal
            v-if="showInstaller"
            :title="product.name"
            @close="showInstaller = false">
            <GameInstaller
                slot="body"
                :productImagesMediumTile="product.images.mediumTile"
                :productName="product.name"
                :productSystemRequirements="product.systemRequirements"
                @cancel="showInstaller = false" />
        </Modal>
        <div v-if="showVote" class="row m-0 p-3">
            <Vote-modal id="voteModal" title="Please vote our product" @close="showVote = false">
                <template slot="body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label> Product quality:</label>
                                <div>
                                    <PureRangeSlider v-model.number="quality" :min="0" :max="10" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label> Pick your emotion :</label>
                                <div>
                                    <no-ssr placeholder="loading...">
                                        <Vote-emoji />
                                    </no-ssr>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label> Like or Dislike:</label>
                                <div>
                                    <Vote :votes="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template slot="footer">
                    <Checkbox
                        id="vote">
                        Don't show it again.
                    </Checkbox>
                </template>
            </Vote-modal>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'PureRangeSlider': () => import('@ericmuyser/hyper-ui').then(m => m.PureRangeSlider),
        'Vote-emoji': () => import('@ericmuyser/hyper-ui').then(m => m.Vote-emoji),
        'Vote': () => import('@ericmuyser/hyper-ui').then(m => m.Vote),
        'GamePlan': () => import('@ericmuyser/hyper-ui').then(m => m.GamePlan),
        'ScreenGallery': () => import('@ericmuyser/hyper-ui').then(m => m.ScreenGallery),
        'PromotionBox': () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBox),
        'RatingBlock': () => import('@ericmuyser/hyper-ui').then(m => m.RatingBlock),
        'PurchaseBlock': () => import('@ericmuyser/hyper-ui').then(m => m.PurchaseBlock),
        'FrequentlyTradedAssets': () => import('@ericmuyser/hyper-ui').then(m => m.FrequentlyTradedAssets),
        'CommunitySpotlight': () => import('@ericmuyser/hyper-ui').then(m => m.CommunitySpotlight),
        'Review': () => import('@ericmuyser/hyper-ui').then(m => m.Review),
        'SystemRequirements': () => import('@ericmuyser/hyper-ui').then(m => m.SystemRequirements),
        'LanguageSupport': () => import('@ericmuyser/hyper-ui').then(m => m.LanguageSupport),
        'StreamItem': () => import('@ericmuyser/hyper-ui').then(m => m.StreamItem),
        'Modal': () => import('@ericmuyser/hyper-ui').then(m => m.Modal),
        'Vote-modal': () => import('@ericmuyser/hyper-ui').then(m => m.Vote-modal),
        'GameInstaller': () => import('@ericmuyser/hyper-ui').then(m => m.GameInstaller),
        'ReviewForm': () => import('@ericmuyser/hyper-ui').then(m => m.ReviewForm)
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
