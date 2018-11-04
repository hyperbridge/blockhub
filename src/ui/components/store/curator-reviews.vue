<template>
    <div class="curator-reviews-wrapper">
        <c-swiper v-if="reviews.length" :options="sliderOptions">
            <c-slide v-for="(review, index) in reviews" :key="index">
                <c-curator-review :review="review" />
            </c-slide>
        </c-swiper>
        <p v-if="!reviews.length">Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?</p>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'curator-reviews',
        components: {
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-curator-review': (resolve) => require(['@/ui/components/store/curator-review'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide
        },
        props: {
            reviews: {
                type: Array,
                require: true
            },
            maxPerView:{
                type: Number,
                default: 3
            }
        },
        data(){
            return{
                sliderOptions: {
                    slidesPerView: this.maxPerView,
                    spaceBetween: 15,
                },
            }
        },
        methods:{
            showArrowsState(el, count) {
                if ( el.length > count) {
                    return true
                } else {
                    return false
                }
            },
        },
        computed:{
            pr_slider() {
                return this.$refs.pr_slider.swiper;
            },
        }
    }
</script>

