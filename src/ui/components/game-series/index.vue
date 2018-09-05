<template>
    <div>
        ddddd
        <c-heading-bar name="Full Game Series" />
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'game-description',
        props:{},
        components: {
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-carousel': Carousel,
            'c-slide': Slide
        },
    }
</script>

<style lang="scss" scoped>

</style>
