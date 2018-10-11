<template>
    <div class="asset-preview-basic">
        <h5 class="">{{ asset.name }}</h5>
        <c-img
            class="asset-preview-basic__image"
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
                default: 'md',
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
            width: 140px;
            height: 140px;
        }
        h5 {
            margin: 5px 0;
        }
        &.sm {

        }
        &.md {

        }
        &.lg {

        }
        &.asset-preview-basic--row {
            flex-direction: row;
            .asset-preview-basic__image {
                order: -1;
            }
        }
    }
</style>

