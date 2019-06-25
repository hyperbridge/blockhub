<template>
    <div class="main-banner text-white">
        <c-swiper :options="sliderOptions">
            <c-swiper-slide
                v-for="(slide, index) in slides"
                :key="index">
                <div class="main-banner__content">
                    <div
                        class="image-bg"
                        :style="bannerImg(slide.image)" />
                    <div
                        class="main-banner__content--logo"
                        :class="[ slide.logo['size'] ? 'logo-size-' + slide.logo['size'] : 'logo-size-md', slide.logo['position'] ]"
                        :style="logoPosition(slide.logo)">
                        <c-img
                            :src="slide.logo.src"
                            :alt="slide.title" />
                    </div>
                    <c-image-overlay
                        v-if="slide.overlay"
                        :title="slide.overlay.title"
                        :subtitle="slide.overlay.subtitle"
                        :text="slide.overlay.text" />
                </div>
                <div class="main-banner__footer">
                    <h4>
                        {{ slide.title }}
                    </h4>
                    <div class="main-banner__footer-actions">
                        <div
                            v-if="slides.length > 1"
                            ref="sliderDots"
                            class="slider-dots">
                            <div
                                slot="pagination"
                                class="main-banner-swiper-pagination swiper-pagination" />
                        </div>
                        <c-button
                            status="lightpurple"
                            size="md"
                            iconHide
                            :to="`/product/${slide.id}`">
                            {{ slide.buttonText }}
                        </c-button>
                    </div>
                </div>
            </c-swiper-slide>
        </c-swiper>
    </div>
</template>

<script>
export default {
    name: 'MainBanner',
    components: {
        'c-button': () => import('~/components/buttons').then(m => m.default || m),
        'c-image-overlay': () => import('~/components/image-overlay').then(m => m.default || m)

    },
    props: {
        slides: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            sliderOptions: {
                slidesPerView: 1,
                spaceBetween: 15,
                pagination: {
                    el: '.main-banner-swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    methods: {
        bannerImg(image) {
            return {
                'background-image': `url(${image.src})`,
                'background-position': image.position
            }
        },
        logoPosition(logo) {
            switch (logo.position) {
            // Top position
            case 'left top':
                return 'margin: 0 auto auto 0'
            case 'center top':
                return 'margin: 0 auto'
            case 'right top':
                return 'margin: 0 0 auto auto'
                // Center position
            case 'left center':
                return 'margin: auto auto auto 0'
            case 'center center':
                return 'margin: auto'
            case 'right center':
                return 'margin: auto 0 auto auto'
                // Bottom position
            case 'left bottom':
                return 'margin: auto auto 0 0'
            case 'center bottom':
                return 'margin: auto auto 0'
            case 'right bottom':
                return 'margin: auto 0 0 auto'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-banner{
        background: rgba(0, 0, 0, .13);
        padding: 10px;
        border-radius: 5px;
        width: 100%;
    }
    .main-banner__content{
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        min-height: 300px;
        display: flex;
        .image-bg{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background-size: cover;
            z-index: 6;
        }
        .video-bg{
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: 4;
            transform: translateX(-50%) translateY(-50%);
            background-size: cover;
        }
    }
    .main-banner__content--logo{
        padding: 25px;
        position: relative;
        z-index: 10;
        &.logo-size-xs{
            img{
                max-height: 50px;
                max-width: 100%;
            }
        }
        &.logo-size-sm{
            img{
                max-height: 100px;
                max-width: 100%;
            }
        }
        &.logo-size-md{
            img{
                max-height: 150px;
                max-width: 100%;
            }
        }
        &.logo-size-lg{
            img{
                max-height: 200px;
                max-width: 100%;
            }
        }
        &.logo-size-xl{
            img{
                max-height: 250px;
                max-width: 100%;
            }
        }
    }
    .main-banner__footer{
        display: flex;
        padding: 12px 0 7px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        h4{
            color: #fff;
            font-size: 22px;
            font-weight: bold;
            margin: 0;
        }
    }
    .main-banner__footer-actions{
        display: flex;
        align-items: center;
        .slider-dots{
            margin: 0 25px 0 0;
        }
    }
</style>
