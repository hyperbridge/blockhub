<template>
    <div class="collection-list">
        <div class="collection-list__header">
            <h3>{{ title }}</h3>
            <div>{{ description }}</div>
            <div class="slider-dots">
                <div class="collection-swiper-pagination swiper-pagination" ref="sliderDots" slot="pagination"></div>
            </div>
        </div>
        <div class="collection-list__container">
            <c-swiper :options="options" class="padding-10" v-if="collections.length">
                <c-slide v-for="(collection, index) in collections" :key="index">
                    <c-collection-item :item="collection" />
                </c-slide>
            </c-swiper>
            <p v-if="!collections.length" style="padding: 20px; text-align: center;">
                No collections yet. <c-button status="plain" href="#">Create one</c-button>?
            </p>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        name: 'collection-list',
        props:['title', 'description', 'collections'],
        components:{
            'c-swiper': swiper,
            'c-slide': swiperSlide,
            'c-collection-item': (resolve) => require(['@/ui/components/collection/item'], resolve),
        },
        data(){
            return{
                options: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    pagination: {
                        el: '.collection-swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .collection-list{
        padding: 10px;
        border-radius: 5px;
        background: rgba(255, 255, 255, .1);
        position: relative;
        backdrop-filter: blur(2px);
    }
    .collection-list__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        width: 100%;
        h3{
            color: #fff;
            padding: 0;
            margin-bottom: 0;
            white-space: nowrap;
            font-size: 30px;
            margin-right: 20px;
        }
    }
    .collection-list__container{
        margin: 0px -10px -10px;
    }
    @media (max-width: 768px) {
        .collection-list__header{
            margin: 0;
            padding: 0;
            flex-direction: column;
            text-align: center;
            .slider-dots{
                margin: 10px 0 0;
            }
        }
    }
</style>

<style lang="scss">

    .slider-dots{
        position: relative;
        display: flex;
        width: auto;
        margin-left: 20px;
        .swiper-pagination{
            display: flex;
            position: relative;
            span{
                margin: 1px 4px;
                height: 9px;
                width: 9px;
                background: #fff;
                opacity: .5;
                &:active,
                &:focus{
                    outline: none;
                    box-shadow: none;
                }
                &.swiper-pagination-bullet-active{
                    opacity: 1;
                }
            }
        }
    }
</style>
