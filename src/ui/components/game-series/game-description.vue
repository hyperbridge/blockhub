<template>
    <div class="game-description">
        <div class="game-description__carousel">
            <div class="slider-dots">
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
            <c-swiper :options="sliderOptions" class="custom-dots-top carousel-full-height">
                <c-slide>
                    <img src="https://images-2.gog.com/78485317312e881a175c686eaab8a988202b208942623acba641f35384f8dc12.jpg" />
                </c-slide>
                <c-slide>
                    <img src="http://www.rpgnuke.ru/wp-content/uploads/2017/10/6546356687567478-678x381.jpg" />
                </c-slide>
                <c-slide>
                    <img src="https://cdn.igromania.ru/mnt/articles/5/8/0/6/0/6/25812/html/img/57b2557c741ba33b.jpg" />
                </c-slide>
            </c-swiper>
        </div>
        <div class="game-description__info">
            <h3>Dragon Age: Ultimate Edition + Dragon Age: Full Series Collection</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
                gravida odio eget consectetur. Vestibulum mattis ut dui sit amet maximus.
                Cras nec enim auctor, eleifend urna congue</p>
            <c-tags :tags="author_tags"></c-tags>
            <div class="game-description__info--bottom">
                <div class="text">
                    <h4>Get all for only</h4>
                    <small>Expires Jan 1st 2019</small>
                </div>
                <div>
                    <a href="#3" class="btn-price">
                        <span class="price">$32</span>
                        <span class="name">BUY NOW</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'game-description',
        props:{},
        components: {

            'c-tags': () => import('@/ui/components/tags'),
            'c-swiper': swiper,
            'c-slide': swiperSlide
        },
        data(){
            return{
                author_tags: ['RPG', 'ACTION', 'FULL Series'],
                sliderOptions:{
                    slidesPerView: 1,
                    spaceBetween: 0,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                }
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
        h3{
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
