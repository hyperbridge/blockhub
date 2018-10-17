<template>
    <c-layout navigationKey="store">
        <div class="content" id="content">
            <div class="container-fluid">
                <c-infinite-content :list="list" />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    computed: {
        list() {
            const result = []

            result.push({
                type: 'realms_row',
                data: {
                    title: 'Realms',
                    ref: 'realms_sl',
                    swiper: this.$refs.realms_sl && this.$refs.realms_sl.swiper,
                    options: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    },
                    realms: this.$store.state.marketplace.realms
                }
            })

            return result
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
