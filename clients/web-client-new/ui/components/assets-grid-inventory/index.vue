<template>
    <div class="assets-grid">
        <c-asset
            v-if="assets.length"
            v-for="(asset, index) in assets"
            :key="index"
            :asset="asset"
            @click="$emit('click', $event)"
        />
    </div>
</template>

<script>
export default {
    name: 'assets-grid-inventory',
    props: ['assets'],
    components: {
        'c-asset': (resolve) => require(['@/components/assets-grid-inventory/asset'], resolve),
    }
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
