<template>
    <c-light>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="main-block__item"
                         style="background-image: url('https://ak3.picdn.net/shutterstock/videos/24705143/thumb/1.jpg')">
                        <div class="row">
                            <div class="col-12 col-lg-7">
                                <h1 class="text-white mb-5">
                                    Lorem<br>
                                    sit amet
                                </h1>
                                <div class="d-flex flex-column align-items-start">
                                    <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                                        Sed eget felis ut magna
                                    </c-button>
                                    <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                                        Donec porttitor magna in felis
                                    </c-button>
                                    <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                                        Morbi malesuada
                                    </c-button>
                                    <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                                        Phasellus ut ante eu mi laoreet eleifend
                                    </c-button>
                                    <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                                        Maecenas dui turpis, imperdiet a consequat
                                    </c-button>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5">
                                <div class="coin-stats">
                                    <img src="../../../../static/img/icons/token-icon.png"/>
                                    <div class="h2 font-weight-bold">
                                        CoinName
                                    </div>
                                    Stats
                                    <ul>
                                        <li>
                                            <strong>
                                                Released:
                                            </strong>
                                            2015
                                        </li>
                                        <li>
                                            <strong>
                                                Ledger:
                                            </strong>
                                            blockchain
                                        </li>
                                        <li>
                                            <strong>
                                                Architecture:
                                            </strong>
                                            bitcoin
                                        </li>
                                        <li>
                                            <strong>
                                                Type:
                                            </strong>
                                            currency
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="top-slider">
                            <div class="row">
                                <div class="col-12 col-lg-3">
                                    <img src="https://via.placeholder.com/240x60" class="img-fluid"/>
                                </div>
                                <div class="col-12 col-lg-9">
                                    <c-swiper :options="sliderOptions">
                                        <c-slide v-for="i in 12" class="text-center">
                                            <img src="https://via.placeholder.com/100x60" class="img-fluid"/>
                                        </c-slide>
                                    </c-swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-block__item">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-8">
                                <div class="h3 font-weight-bold text-center">
                                    Nullam ultricies
                                </div>
                                <p class="text-center">
                                    Nunc nec diam nibh. Cras id est vehicula, tempus eros vitae, sodales tellus. In euismod sem
                                    tempor, sagittis purus vitae, rutrum arcu. Morbi placerat imperdiet ultricies. In
                                    sollicitudin, arcu in auctor molestie, nisl ante finibus leo, ac sollicitudin quam sem eget
                                    sapien. Nunc quis aliquet mi. Maecenas nec tristique sapien. Maecenas lobortis mi id libero
                                    rutrum accumsan. Vestibulum dapibus urna non eleifend efficitur. Etiam eleifend velit at
                                    mauris aliquam congue. Aliquam fringilla, nisi gravida iaculis tincidunt, felis lacus
                                    molestie lacus, eget placerat massa massa ac urna. Curabitur nec varius erat, id scelerisque
                                    nibh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-light>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        components: {
            'c-light': (resolve) => require(['@/ui/layouts/light'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
        },
        data() {
            return {
                sliderOptions: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                    }
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-block__item {
        padding: 30px;
        background-color: #fff;
        box-shadow: 0 0 15px rgba(0, 0, 0, .5);
        margin-bottom: 30px;
        border-radius: 4px;
        background-size: cover;
        background-repeat: no-repeat;
        h1,
        .h1 {
            font-size: 5.2em;
            font-weight: 600;
        }
    }

    .coin-stats {
        background: #fff;
        padding: 50px 50px 50px 60px;
        border-radius: 0 20px 20px 0;
        display: inline-block;
        width: auto;
        float: right;
        min-width: 300px;
        position: relative;
        img {
            position: absolute;
            width: 60px;
            height: 60px;
            top: 50px;
            left: -30px;
        }
        ul {
            margin-top: 40px;
            padding: 0;
            li {
                list-style: none;
                line-height: 34px;
            }
        }
    }

    .top-slider {
        margin: 100px -30px -30px;
        padding: 20px;
        background: linear-gradient(to right, rgba(249, 183, 7, 1) 0%, rgba(216, 179, 131, 0.6) 100%);
    }
</style>
