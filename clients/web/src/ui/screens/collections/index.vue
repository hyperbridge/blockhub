<template>
    <c-layout navigationKey="store">
            <div class="container-fluid">
                <c-infinite-content :list="list" />
            </div>
    </c-layout>
</template>

<script>
export default {
    computed: {
        list() {
            const result = []

            result.push({
                type: 'collections_list',
                data: {
                    collections_list: this.$store.state.marketplace.collections,
                    ref: 'collectionsSlider',
                    swiper: this.$refs.collectionsSlider && this.$refs.collectionsSlider.swiper,
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    },
                }
            })

            return result
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
