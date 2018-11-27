<template>
    <c-block class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <c-heading-bar
            slot="title"
            class="mb-0"
            :name="title"
            :showArrows="showArrowsState(products, maxPerView)"
            :showBackground="true"
            @prevClick="pr_slider.slidePrev()"
            @nextClick="pr_slider.slideNext()"
        />

        <c-swiper :options="sliderOptions" ref="pr_slider">
            <slot />
        </c-swiper>
    </c-block>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'product-slider',
        components:{
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
        },
        props: {
            products: Array,
            title: String,
            maxPerView: Number,
            dynamic:{
                type: Boolean,
                default: true
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

<style lang="scss" scoped>
    .block__content{
        padding: 0;
    }
    .swiper-container{
        padding: 20px 15px;
        margin: -15px;
    }
    .swiper-slide{
        height: auto;
    }
    .product-grid__item{
        height: 100%;
    }
</style>
