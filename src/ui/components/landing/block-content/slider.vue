<template>
    <div class="landing-slider">
        <div class="landing-slider__main">
            <video :poster="currentSlide.poster" preload="true" controls v-if="currentSlide.type === 'video'" :autoplay="playVideo">
                <source type="video/webm" :src="currentSlide.src">
            </video>
        </div>
        <div class="landing-slider__thumbs">
            <c-swiper :options="options" ref="landingSlider">
                <template v-for="slide in items">
                    <c-slide @click.native="checkSlide(slide)">
                        <c-img :src="slide.poster" />
                    </c-slide>
                </template>
            </c-swiper>
            <div class="swiper-button-next swiper-button-white" @click.native="slider.slidePrev()"></div>
            <div class="swiper-button-prev swiper-button-white" @click.native="slider.slideNext()"></div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'


    export default {
        name: 'landing-slider',
        props: {
            items: [Object, Array]
        },
        components:{
            'c-swiper': swiper,
            'c-slide': swiperSlide,
        },
        data(){
            return{
                options: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                    centeredSlides: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                currentSlide: {},
                playVideo: false
            }
        },
        created(){
            this.currentSlide = this.items[0]
        },
        computed:{
            slider() {
                return this.$refs.landingSlider.swiper;
            },
        },
        methods:{
            checkSlide(sl){
                this.playVideo = false
                this.currentSlide = sl
            }
        },
        watch:{
            currentSlide(){
                this.playVideo = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing-slider__main{
        margin-bottom: 15px;
        video, img{
            width: 100%;
            height: auto;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
        }
    }
    .landing-slider__thumbs{
        padding: 0 50px;
        position: relative;
        width: 90%;
        margin: 0 5%;
        .swiper-slide{
            padding: 3px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .swiper-button-white{
            transform: scale(.7);
        }
    }
</style>
