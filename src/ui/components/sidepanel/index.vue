<template>
    <div class="page-sidepanel invert text-right" id="page-sidepanel">
        <div class="page-sidepanel__content">
            <slot />
        </div>
        <div class="page-sidepanel__button page-sidepanel__button--lower" data-action="sidepanel-hide"><div></div></div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'sidepanel',
        components:{
            'c-swiper': swiper,
            'c-slide': swiperSlide
        }
    }
</script>

<style lang="scss" scoped>

</style>
