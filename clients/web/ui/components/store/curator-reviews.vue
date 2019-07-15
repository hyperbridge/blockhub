<template>
    <div class="curator-reviews-wrapper">
        <c-swiper
            v-if="reviews.length"
            :options="sliderOptions">
            <c-swiper-slide
                v-for="(review, index) in reviews"
                :key="index"
                ref="slider">
                <c-curator-review :review="review" />
            </c-swiper-slide>
        </c-swiper>
        <p v-if="!reviews.length">
            Nothing could be found. Want to <c-button
                status="plain"
                @click="$store.commit('application/activeModal', 'coming-soon')">
                Check for updates
            </c-button>?
        </p>
    </div>
</template>

<script>
    export default {
        components: {
            'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
            'c-curator-review': () => import('~/components/store/curator-review').then(m => m.default || m)
        },
        props: {
            reviews: {
                type: Array,
                require: true
            },
            maxPerView: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                sliderOptions: {
                    slidesPerView: this.maxPerView,
                    spaceBetween: 15
                }
            }
        },
        computed: {
            slider() {
                return this.$refs.slider.swiper
            }
        },
        methods: {
            showArrowsState(el, count) {
                if (el.length > count) {
                    return true
                }
                return false
            }
        }
    }
</script>

