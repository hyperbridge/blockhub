<template>
    <div class="assets-grid">
        <c-asset
            v-for="(asset, index) in assets"
            v-if="assets.length"
            :key="index"
            :asset="asset"
            @click="$emit('click', $event)" />
    </div>
</template>

<script>
export default {
    name: 'AssetsGridInventory',
    components: {
        'c-asset': () => import('~/components/assets-grid-inventory/asset').then(m => m.default || m)
    },
    props: ['assets']
}
</script>

<style lang="scss" scoped>
    .assets-grid {
        background: rgba(1,1,1,.1);
        box-shadow: 0 0 20px 0 rgba(1,1,1,.25);
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 4px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        padding: 5px;
        min-height: 118px;
    }
</style>
