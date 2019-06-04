<template>
    <c-layout navigationKey="store">
        <c-infinite-content :list="list" />
    </c-layout>
</template>

<script>
export default {
    computed: {
        list() {
            const result = []

            result.push({
                type: 'collectionsList',
                data: {
                    collectionsList: this.$store.getters['collections/list'],
                    ref: 'collectionsSlider',
                    swiper: this.$refs.collectionsSlider && this.$refs.collectionsSlider.swiper,
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    }
                }
            })

            return result
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
