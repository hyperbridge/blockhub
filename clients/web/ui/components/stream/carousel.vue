<template>
    <c-block
        v-if="streams"
        class="margin-bottom-30"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <c-heading-bar
            slot="title"
            class="mb-0"
            :name="title"
            :showActions="showArrowsState(streams, maxPerView)"
            :showArrows="showArrowsState(streams, maxPerView)"
            :showBackground="showBackground"
            @prevClick="slider.slidePrev()"
            @nextClick="slider.slideNext()" />

        <c-swiper
            ref="slider"
            :options="sliderOptions">
            <c-swiper-slide
                v-for="(stream, index) in streams"
                :key="index">
                <c-stream-item
                    :streamName="stream.userName"
                    :streamAvatar="stream.userAvatar"
                    :streamImg="stream.previews"
                    :streamLink="stream.src"
                    :streamViews="stream.views"
                    :streamId="stream.id" />
            </c-swiper-slide>
        </c-swiper>
    </c-block>
</template>

<script>
export default {
    name: 'ProductSlider',
    components: {
        'c-stream-item': () => import('~/components/stream').then(m => m.default || m)
    },
    props: {
        streams: {
            type: Array,
            default: () => []
        },
        title: String,
        maxPerView: {
            type: Number,
            default: 3
        },
        showBackground: Boolean
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
