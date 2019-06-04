<template>
    <div
        class="asset-preview-basic"
        :class="[{ 'horizontal': horizontal }, size]">
        <h5 class="asset-preview-basic__text">
            <router-link :to="`/asset/${asset.id}`">
                {{ asset.name }}
            </router-link>
        </h5>
        <c-img
            class="asset-preview-basic__image"
            :src="asset.image" />
        <p v-if="!hideGame"
           class="asset-preview-basic__text">
            {{ asset.productName }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'AssetPreviewBasic',
    props: {
        asset: {
            type: Object,
            required: true
        },
        horizontal: Boolean,
        hideGame: Boolean,
        size: {
            type: String,
            default: 'lg',
            validator(val) {
                return ['sm', 'md', 'lg'].includes(val)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .asset-preview-basic {
        display: flex;
        align-items: center;
        flex-direction: column;
        .asset-preview-basic__image {
            padding: 5px;
            background-color: rgba(255,255,255,.05);
            border-radius: 4px;
        }
        .asset-preview-basic__text {
            text-align: center;
            margin: 5px;
        }
        &.asset-preview-basic--row {
            flex-direction: row;
            .asset-preview-basic__image {
                order: -1;
            }
        }
        &.sm {
            .asset-preview-basic__image {
                width: 40px;
                height: 40px;
            }
            .asset-preview-basic__text {
                font-size: 12px;
            }
        }
        &.md {
            .asset-preview-basic__image {
                width: 60px;
                height: 60px;
                min-width: 60px;
                min-height: 60px;
            }
            .asset-preview-basic__text {
                font-size: 13px;
            }
        }
        &.lg {
            .asset-preview-basic__image {
                width: 140px;
                height: 140px;
            }
        }
        &.horizontal {
            flex-direction: row;
            .asset-preview-basic__image {
                order: -1;
            }
            .asset-preview-basic__text {
                margin: 10px;
            }
        }
    }
</style>

