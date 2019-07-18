<template>
    <c-block
        class="margin-bottom-30"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <c-heading-bar
            v-if="products"
            slot="title"
            class="mb-0"
            :name="title"
            :showArrows="showArrowsState(products, maxPerView)"
            :showBackground="true"
            @prevClick="slider.slidePrev()"
            @nextClick="slider.slideNext()" />

        <c-swiper
            ref="slider"
            :options="sliderOptions">
            <slot />
        </c-swiper>
    </c-block>
</template>

<script>
export default {
    components: {
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: null
        },
        maxPerView: {
            type: String,
            default: null
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
