<template>
    <div class="network-slider">
        <div class="network-slider__heading">
            <h6>
                <img class="network-slider__img" src="/projects/cryptoreviews/img/rbo-logo-with-title.png" alt=""><br>
                <div class="network-slider__title">
                    Review Network
                </div>
            </h6>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-3">
                    <img src="https://via.placeholder.com/240x60" class="img-fluid">
                </div>
                <div class="col-12 col-lg-9">
                    <c-swiper :options="sliderOptions">
                        <c-swiper-slide v-for="(item, index) in items" :key="index" class="text-center">
                            <a class="network-slider__item" :href="'https://readyblock.one/review/' + item.symbol">
                                <img class="mr-2" :src="'/projects/cryptoreviews/img/tokens/' + item.symbol + '.png'" style="width: 40px">
                                <div class="network-slider__item-body">
                                    <span class="font-white">
                                        <small>RANK {{ item.rank }}</small>{{ item.name }}
                                    </span>
                                </div>
                            </a>
                        </c-swiper-slide>
                    </c-swiper>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-sm-12">
                    <div class="owl-carousel owl-theme owl-loaded" data-nav-dots="false" data-nav-arrow="false" data-items="6" data-sm-items="4" data-lg-items="6" data-md-items="5" data-autoplay="true" style="margin-top:10px">
                    <div class="owl-stage-outer">
                        <div class="owl-stage" style="transform: translate3d(-2400px, 0px, 0px); transition: all 0.25s ease 0s; width: 3800px;">
                            <div class="owl-item cloned" style="width: 170px; margin-right: 30px;">
                                <div class="item">
                                    <div class="network-slider__item">
                                        <div class="network-slider__item-body"><span class="font-white "></span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 170px; margin-right: 30px;">
                                <div class="item">
                                <a class="network-slider__item" href="https://readyblock.one/review/btc">
                                    <img class="mr-2" src="/projects/cryptoreviews/img/tokens/btc.png" style="width:40px">
                                    <div class="network-slider__item-body">
                                        <span class="font-white ">
                                            <small>
                                            RANK 1
                                            </small>
                                            Bitcoin
                                        </span>
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-controls">
                        <div class="owl-nav">
                            <div class="owl-prev" style="display: none;"><i class="ion-ios-arrow-left"></i></div>
                            <div class="owl-next" style="display: none;"><i class="ion-ios-arrow-right"></i></div>
                        </div>
                        <div class="owl-dots" style="display: none;"></div>
                    </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>


<script>
export default {
    components: {},
    props: ['content', 'items'],
    data() {
        return {
            sliderOptions: {
                slidesPerView: 4,
                spaceBetween: 15,
                loop: true,
                autoplay: {
                    delay: 3000
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    /* Network slider */
    .network-slider {
        font-family: 'PT Sans', sans-serif;
        height: 94px;
        bottom: 0;
        background: rgba(216, 179, 131, 0.6);
        padding: 15px 0;
        position: relative;
        overflow: hidden;
    }
    .network-slider .network-slider__item img {
        width: 64px;
    }
    .network-slider .network-slider__item-body {
        line-height: 14px;
    }
    .network-slider .network-slider__item-body span {
        font-size: 18px;
        line-height: 20px;
    }
    .network-slider .network-slider__item-body small {
        font-size: 12px;
        display: inline-block;
        width: 100%;
    }
    .network-slider .network-slider__heading {
        position: absolute;
        z-index: 9;
        padding: 20px 200px 15px 60px;
        top: 0;
        background: linear-gradient(270deg, rgba(249, 183, 7, 0) 0%, rgba(249, 183, 7, 1) 51%, rgba(249, 183, 7, 1) 100%);
    }
    .network-slider .network-slider__img {
        width: 240px;
        clear: both;
    }
    .network-slider .network-slider__title {
        padding-left: 65px;
        font-weight: bold;
        color: #222;
    }
</style>
