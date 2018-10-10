<template>
    <div>
        <c-asset-comparison :assets="assets.slice(0, 2)"/>
    </div>
</template>

<script>
    import assets from '@/db/seed/assets';

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve),
            'c-asset-comparison': (resolve) => require(['@/ui/components/asset-comparison'], resolve),
        },
        data() {
            return {
                yoursOffer: [],
                assets: assets.map(asset => ({ ...asset, selected: false }))
            }
        }
    }
</script>

<style>

</style>
