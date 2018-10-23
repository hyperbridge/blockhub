<template>
    <div>
        <c-block title="">
            <c-asset-list :assets="assets" :transition="true"/>
        </c-block>
    </div>
</template>

<script>
export default {
    components: {
        'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
        'c-asset-list': (resolve) => require(['@/ui/components/asset/list'], resolve),
    },
    computed: {
        assets() {
            return this.$store.getters['assets/assets'];
        }
    }
}
</script>

<style>

</style>
