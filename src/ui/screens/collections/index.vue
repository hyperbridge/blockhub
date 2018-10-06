<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <c-infinite-content :list="list" />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-infinite-content': (resolve) => require(['@/ui/components/infinite-content'], resolve),
    },
    computed: {
        list() {
            const result = []

            result.push({
                type: 'collections_list',
                data: {
                    collections_list: this.$store.state.marketplace.collections,
                    ref: 'collections_sl',
                    swiper: this.$refs.collections_sl && this.$refs.collections_sl.swiper,
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
