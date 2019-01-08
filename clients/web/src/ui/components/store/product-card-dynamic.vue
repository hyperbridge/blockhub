<template>
    <div
        class="product-grid__item"
        @mouseover="show_preview(true)"
        @mouseout="show_preview(false)"
    >
        <div class="position-relative">
            <div v-if="product.price" class="product-grid__item-price">
                <strong>{{ product.price | convertCurrency }}</strong>
            </div>
            <c-button status="none" :to="`/product/${product.id}`" class="card-img-top">
                <transition name="fade">
                    <c-img v-if="!displayPreview" class="card-img-top" :src="product.images.mediumTile"/>
                    <template v-else>
                        <video v-if="product.video && autoplay" class="card-img-top" width="100%" autoplay>
                            <source :src="product.video" type="video/mp4">
                        </video>
                        <transition-group tag="div" name="slide-left" v-else>
                            <c-img
                                v-for="(image, index) in product.images.preview"
                                v-if="index === currentImage"
                                :key="image"
                                :src="product.images.preview[index]"
                                class="card-img-top"
                            />
                        </transition-group>
                    </template>
                </transition>
            </c-button>
        </div>
        <h4><c-button status="none" :to="`/product/${product.id}`">{{ product.name }}</c-button></h4>
        <p class="card-text" hidden>{{ product.shortDescription }} </p>
        <c-tags :tags="product.developerTags.slice(0,3)"/>
    </div>
</template>

<script>
    import { debouncer } from '@/mixins';

    export default {
        name: 'product-card-dynamic',
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        components: {
            'c-tags': (resolve) => require(['@/ui/components/tags'], resolve)
        },
        mixins: [debouncer],
        data() {
            return {
                displayPreview: false,
                interval: null,
                currentImage: 0
            }
        },
        methods: {
            show_preview(status) {
                clearTimeout(this.timeout);
                this.debounce(() => {
                    if (!status) clearInterval(this.interval);
                    if (status && !this.displayPreview && (!this.product.video || !this.autoplay)) this.slider();
                    this.displayPreview = status;
                }, status ? 250 : 0);
            },
            slider() {
                this.interval = setInterval(() => {
                    const { currentImage, product: { images }} = this;
                    this.currentImage = currentImage === images.preview.length - 1 ? 0 : currentImage + 1;
                }, 1600);
            }
        },
        computed: {
            autoplay() {
                return this.$store.state.application.settings.client.autoplay;
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
