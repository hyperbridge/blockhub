<template>
    <div
        class="product-grid__item"
        @mouseover="show_preview(true)"
        @mouseout="show_preview(false)">
        <div class="position-relative">
            <div
                v-if="productPrice"
                class="product-grid__item-price">
                <strong>{{ productPrice | convertCurrency }}</strong>
            </div>
            <c-button
                status="none"
                :to="`/product/${productId}`"
                class="card-img-top">
                <transition name="fade">
                    <c-img
                        v-if="!displayPreview"
                        class="card-img-top"
                        :src="productImagesMediumTile" />
                    <template v-else>
                        <video
                            v-if="productVideo && autoplay"
                            class="card-img-top"
                            width="100%"
                            autoplay>
                            <source
                                :src="productVideo"
                                type="video/mp4">
                        </video>
                        <transition-group
                            v-else
                            tag="div"
                            name="slide-left">
                            <c-img
                                v-for="(image, index) in productImagesPreview"
                                v-if="index === currentImage"
                                :key="image"
                                :src="productImagesPreview[index]"
                                class="card-img-top" />
                        </transition-group>
                    </template>
                </transition>
            </c-button>
        </div>
        <h4>
            <c-button
                status="none"
                :to="`/product/${productId}`">
                {{ productName }}
            </c-button>
        </h4>
        <p
            class="card-text"
            hidden>
            {{ productShortDescription }}
        </p>
        <c-tags v-if="productDeveloperTags" :tags="productDeveloperTags.slice(0,3)" />
    </div>
</template>

<script>
import { debounce } from '@/mixins'

export default {
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m)
    },
    mixins: [debounce],
    props: {
        productId: Number,
        productPrice: String,
        productImagesMediumTile: String,
        productVideo: String,
        productShortDescription: String,
        productImagesPreview: {
            type: Array,
            default: () => []
        },
        productDeveloperTags: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            displayPreview: false,
            interval: null,
            currentImage: 0
        }
    },
    computed: {
        autoplay() {
            return this.$store.state.application.settings.client.autoplay
        }
    },
    methods: {
        show_preview(status) {
            clearTimeout(this.timeout)
            this.debounce(() => {
                if (!status) clearInterval(this.interval)
                if (status && !this.displayPreview && (!this.productVideo || !this.autoplay)) this.slider()
                this.displayPreview = status
            }, status ? 250 : 0)
        },
        slider() {
            this.interval = setInterval(() => {
                const { currentImage, product: { images } } = this
                this.currentImage = currentImage === images.preview.length - 1 ? 0 : currentImage + 1
            }, 1600)
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-grid__item {
        transition: transform .3s ease;
        flex: 0 0 calc(33% - 20px);
        margin: 10px;
        box-sizing: border-box;
        padding: 7px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        &:hover {
            transform: scale(1.1);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform .25s ease;
        }
        a {
            color: #fff;
            text-decoration: none;
            &.card-img-top {
                position: relative;
                display: block;
            }
        }
        h4 {
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
        }
        .product-tags {
            margin-top: auto;
            margin-bottom: 10px;
        }
    }
    .product-grid__item-price {
        position: absolute;
        width: auto;
        bottom: 20px;
        padding: 4px 7px;
        background: rgba(0, 0, 0, .8);
        font-size: 11px;
        right: 0px;
        border-radius: 5px 0 0 5px;
        z-index: 9;
        strong {
            font-size: 16px;
        }
    }

    .slide-left-enter-active, .slide-left-leave-active {
        transition: opacity .8s ease, transform .8s ease;
    }

    .slide-left-leave-active {
        position: absolute;
    }

    .slide-left-enter, .slide-left-leave-to {
        opacity: 0;
        transform: rotate(10deg) scale(.9);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s ease;
    }

    .fade-leave-active {
        position: absolute;
        width: 100%;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
