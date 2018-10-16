<template>
    <div>
        <c-content-navigation :items="assets" class="assets-block">
            <c-asset-list
                slot-scope="props"
                :assets="props.items"
            />
        </c-content-navigation>
        <!-- <c-block
            title="Recently Sold"
            noGutter
            onlyContentBg
            bgGradient
        >
            <c-content-navigation :items="assets" class="assets-block">
                <c-asset-list
                    slot-scope="props"
                    :assets="props.items"
                />
            </c-content-navigation>
        </c-block> -->
    </div>
</template>

<script>
export default {
    components: {
        'c-asset-preview': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
        'c-asset-list': (resolve) => require(['@/ui/components/asset/list'], resolve),
        'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
    },
    computed: {
        assets() {
            return this.$store.getters['assets/assetsArray'];
        }
    }
}
</script>

<style lang="scss" scoped>
    .assets-block {
        min-height: 706px;
    }
</style>
