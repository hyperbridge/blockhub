<template>
    <div class="asset-preview-small">
        <c-img
            class="asset-preview-small__image"
            :src="assetImage" />
        <span>{{ assetName }}</span>
        <span
            v-if="showPrice"
            class="asset-preview-small__price"> - {{ assetPriceCurrent | convertCurrency }}</span>
    </div>
</template>

<script>
export default {
    name: 'AssetPreviewSmall',
    props: {
        asset: {
            type: Object,
            required: true
        },
        assetName: String,
        assetImage: String,
        showPrice: Boolean,
        assetPriceCurrent: String
    }
}
</script>

<style lang="scss" scoped>
    .asset-preview-small {
        display: flex;
        align-items: center;
    }
    .asset-preview-small__image {
        padding: 5px;
        background: rgba(255,255,255,.05);
        border: 1px solid rgba(255,255,255,.2);
        border-radius: 2px;
        min-width: 30px;
        height: 30px;
        min-height: 30px;
        margin-right: 5px;
    }
    .asset-preview-small__price {
        font-size: 11px;
        color: rgba(255,255,255,.7);
    }
</style>
