<template>
    <c-block class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <c-heading-bar
            slot="title"
            class="mb-0"
            :name="title"
            :showArrows="showArrowsState(products, maxPerView)"
            :showBackground="true"
            @prevClick="slider.slidePrev()"
            @nextClick="slider.slideNext()"
            v-if="products"
        />

        <c-swiper :options="sliderOptions" ref="slider" v-if="products">
            <c-swiper-slide v-for="(product, index) in products" :key="index">
                <c-product-card-dynamic class="m-0" :product="product" v-if="dynamic" />
                <c-product-card class="m-0" :product="product" v-else />
            </c-swiper-slide>
        </c-swiper>

    </c-block>
</template>

<script>
import 'swiper/dist/css/swiper.css'


export default {
    name: 'product-slider',
    components: {
        'c-product-card': () => import('~/components/store/product-card').then(m => m.default || m),
        'c-product-card-dynamic': () => import('~/components/store/product-card-dynamic').then(m => m.default || m),
    },
    props: {
        products: Array,
        title: String,
        maxPerView: {
            type: Number,
            default: 3
        },
        dynamic: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            sliderOptions: {
                slidesPerView: this.maxPerView,
                spaceBetween: 15,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                }
            },
        }
    },
    methods: {
        showArrowsState(el, count) {
            if ( el.length > count) {
                return true
            } else {
                return false
            }
        },
    },
    computed: {
        slider() {
            return this.$refs.slider.swiper
        },
    }
}
</script>

<style lang="scss" scoped>
    .block__content {
        padding: 0;
    }
    .swiper-container {
        padding: 20px 15px;
        margin: -15px;
    }
    .swiper-slide {
        height: auto;
    }
    .product-grid__item {
        height: 100%;
    }
    @media (max-width: 768px) {
        .swiper-container {
            margin: 0;
            padding: 0;
        }
    }
</style>
