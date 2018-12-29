<template>
    <div class="loader-block">
        <div class="loading-spinner">
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .loader-block{
        background: rgba(28, 32, 50, .7);
        color: #1C2032;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        .loading-spinner{
            margin: auto;
            position: relative;
            zoom: 4;
            left: 0px;
            top: 0px;
            width: 20px;
            height: 20px;
            animation: rotate 500ms infinite linear !important;
            &:before{
                position: absolute;
                left: 3px;
                top: 3px;
                content: " ";
                width: 14px;
                height: 14px;
                border: 2px solid #fff;
                border-radius: 7px;
                border-right-color: transparent;
            }
        }
    }
</style>
