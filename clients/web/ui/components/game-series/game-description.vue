<template>
    <div class="game-description">
        <div class="game-description__carousel">
            <div class="slider-dots">
                <div
                    slot="pagination"
                    class="swiper-pagination" />
            </div>
            <c-swiper
                v-if="images"
                :options="sliderOptions"
                class="custom-dots-top carousel-full-height">
                <c-swiper-slide
                    v-for="(img, index) in images"
                    :key="index">
                    <c-button
                        status="none"
                        :to="`/product/${id}`">
                        <c-img :src="img" />
                    </c-button>
                </c-swiper-slide>
            </c-swiper>
        </div>
        <div class="game-description__info">
            <c-button
                status="plain"
                class="h2 p-0"
                :to="`/product/${id}`">
                {{ title }}
            </c-button>
            <p>{{ description }}</p>
            <c-tags :tags="tags || []" />
            <div
                v-if="price"
                class="game-description__info--bottom">
                <div class="text">
                    <h4>Get all for only</h4>
                    <small>Expires {{ expires_date }}</small>
                </div>
                <div>
                    <a
                        href="#"
                        class="btn-price">
                        <span class="price">{{ price }}</span>
                        <span class="name">BUY NOW</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m),
        'c-swiper': swiper,
        'c-swiper-slide': swiperSlide
    },
    props: {
        id: Number,
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        tags: {
            type: Array,
            default: () => []
        },
        images: {
            type: Array,
            default: () => []
        },
        price: Number,
        expires: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            sliderOptions: {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    computed: {
        expires_date() {
            return moment(this.expires).format('Do MMM YYYY')
        }
    }
}
</script>

<style lang="scss" scoped>
    .game-description{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: stretch;
        color: #fff;
    }
    .game-description__carousel{
        width: 47%;
        position: relative;
        .swiper-container{
            height: 100%;
            .swiper-slide{
                height: auto;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 5px;
                }
            }
        }
        .slider-dots{
            position: absolute;
            top: 15px;
            right: 15px;
        }
    }
    .game-description__info{
        width: 53%;
        display: flex;
        flex-direction: column;
        padding: 5px 0 5px 20px;
        h3 a {
            color: #fff;
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 10px;
            padding: 0;
        }
        p{
            font-weight: 500;
            line-height: 17px;
            font-size: 14px;
            margin-bottom: 15px;
        }
    }
    .game-description__info--bottom{
        display: flex;
        width: 100%;
        align-items: center;
        .text{
            margin-right: 20px;
            h4{
                margin-bottom: 0;
                font-weight: bold;
                font-size: 21px;
                color: #fff;
            }
        }
    }
    .btn-price{
        border-radius: 3px;
        overflow: hidden;
        display: inline-flex;
        span{
            padding: 10px 20px;
            background: #43C981;
            color: #30304B;
            font-size: 17px;
            &.price{
                background: #36A369;
                color: #fff;
            }
        }
    }
    @media (max-width: 768px) {
        .game-description{
            flex-direction: column;
        }
        .game-description__carousel{
            width: 100%;
            margin-bottom: 15px;
        }
        .game-description__info{
            width: 100%;
        }
        .btn-price{
            span{
                padding: 10px;
            }
        }
    }
</style>


<!--Change carousel dots position-->
<style lang="scss">
    .VueCarousel{
        &.custom-dots-top{
            .VueCarousel-dot-container{
                position: absolute;
                top: 10px;
                right: 10px;
                li{
                    margin: 0 3px!important;
                    padding: 2px!important;
                    button{
                        width: 12px!important;
                        height: 12px!important;
                        opacity: .5!important;
                        &:hover,
                        &:active,
                        &:focus{
                            opacity: .7!important;
                            outline: none;
                            box-shadow: none;
                        }
                    }
                    &.VueCarousel-dot--active{
                        button{
                            opacity: 1!important;
                            background: #fff!important;
                        }
                    }
                }
            }
        }
        &.carousel-full-height{
            .VueCarousel-wrapper{
                height: 100%;
                .VueCarousel-inner{
                    height: 100%;
                }
            }
        }
    }
</style>
