<template>
    <div class="asset-preview-basic" :class="size">
        <h5 class="asset-preview-basic__text">
            {{ asset.name }}
        </h5>
        <c-img
            class="asset-preview-basic__image"
            :src="asset.image"
        />
        <p class="asset-preview-basic__text">
            {{ asset.product_name }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'asset-preview-basic',
        props: {
            asset: {
                type: Object,
                required: true
            },
            size: {
                type: String,
                default: 'lg',
                validator(val) {
                    return ['sm', 'md', 'lg'].includes(val);
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
            margin: 5px 0;
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
        &.md {}
        &.lg {
            .asset-preview-basic__image {
                width: 140px;
                height: 140px;
            }
        }
    }
</style>

