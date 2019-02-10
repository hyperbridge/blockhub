<template>
    <c-block class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <c-heading-bar
            slot="title"
            class="mb-0"
            :name="title"
            :showArrows="showArrowsState(streams, maxPerView)"
            :showBackground="true"
            @prevClick="slider.slidePrev()"
            @nextClick="slider.slideNext()"
            v-if="streams"
        />

        <c-swiper :options="sliderOptions" ref="slider" v-if="streams">
            <c-slide v-for="(stream, index) in streams" :key="index">
                <c-stream-item
                    :streamName="stream.userName"
                    :streamAvatar="stream.userAvatar"
                    :streamImg="stream.previews"
                    :streamSrc="stream.src"
                    :streamViews="stream.views"
                />
            </c-slide>
        </c-swiper>

    </c-block>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'product-slider',
        components: {
            'c-stream-item': (resolve) => require(['@/ui/components/stream'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
        },
        props: {
            streams: Array,
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
