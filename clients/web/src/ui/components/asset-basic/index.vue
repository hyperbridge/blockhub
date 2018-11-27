<template>
    <div>
        <div>
            <span>{{ asset.name }}</span>
            <span>{{ asset.productName }}</span>
        </div>
        <c-img :src="asset.image"/>
    </div>
</template>

<script>
    export default {
        name: 'asset-basic',
        props: {
            asset: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
