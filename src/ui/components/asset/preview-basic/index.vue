<template>
    <div class="asset-preview-basic">
        <h5 class="">{{ asset.name }}</h5>
        <c-img
            class="asset-preview-basic__image"
            :class="size"
            :src="asset.image"
        />
        <h5>{{ asset.product_name }}</h5>
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
            &.sm {
                width: 40px;
                height: 40px;
            }
            &.lg {
                width: 140px;
                height: 140px;
            }
        }
        h5 {
            margin: 5px 0;
        }
        &.sm {

        }
        &.md {

        }
        &.asset-preview-basic--row {
            flex-direction: row;
            .asset-preview-basic__image {
                order: -1;
            }
        }
    }
</style>

