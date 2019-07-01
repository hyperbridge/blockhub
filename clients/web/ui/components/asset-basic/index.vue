<template>
    <div>
        <div>
            <span>{{ assetName }}</span>
            <span>{{ assetProductName }}</span>
        </div>
        <c-img :src="assetImage" />
    </div>
</template>

<script>
export default {
    props: {
        assetName: String,
        assetProductName: String,
        assetImage: String,
    }
}
</script>

<style lang="scss" scoped>

</style>
