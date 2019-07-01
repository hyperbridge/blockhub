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
            v-if="products"
            ref="slider"
            :options="sliderOptions">
            <c-swiper-slide
                v-for="(product, index) in products"
                :key="index">
                <c-product-card-dynamic
                    v-if="dynamic"
                    class="m-0"
                    :productId="product.id"
                    :productPrice="product.price"
                    :productImagesMediumTile="product.images.mediumTile"
                    :productVideo="product.video"
                    :productShortDescription="product.shortDescription"
                    :productImagesPreview="product.images.review"
                    :productDeveloperTags="product.developerTags" />
                <c-product-card
                    v-else
                    class="m-0"
                    :productId="product.id"
                    :productMetaImagesMediumTile="product.meta.images.mediumTile"
                    :productName="product.name"
                    :productMetaShortDescription="product.meta.shortDescription"
                    :productMetaDeveloperTags="product.meta.developerTags" />
            </c-swiper-slide>
        </c-swiper>
    </c-block>
</template>

<script>
export default {
    components: {
        'c-product-card': () => import('~/components/store/product-card').then(m => m.default || m),
        'c-product-card-dynamic': () => import('~/components/store/product-card-dynamic').then(m => m.default || m)
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
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
                    }
                }
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
