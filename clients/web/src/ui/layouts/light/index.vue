<template>
    <div class="main-block">
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            showLeftPanel: {
                type: Boolean,
                default: true
            },
            showRightPanel: {
                type: Boolean,
                default: false
            },
            title: String
        },
        mounted() {
            document.getElementById('startup-loader').style.display = 'none'
            document.body.classList.add('light')
        },
    }
</script>

<style lang="scss" scoped>
    .main-block{
        background: url("https://bitcoin-btc.review/Apps/Site/Projects/cryptoreviews/Assets/Other/images/banner-header.png") top center no-repeat #e0e6ea;
        background-size: 100% auto;
        padding: 180px 30px 50px;
        margin: -30px;
        min-height: 100vh;
    }
</style>
