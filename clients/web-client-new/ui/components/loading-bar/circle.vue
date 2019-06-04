<template>
    <div class="loader-block"
         :class="{'loader-block--bg' : showBg }">
        <div class="loading-spinner"
             :class="['loading-spinner-size--' + size ]" />
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'md'
        },
        showBg: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .loader-block{
        color: #1C2032;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        &.loader-block--bg{
            background: rgba(28, 32, 50, .7);
        }
        .loading-spinner{
            margin: auto;
            position: relative;
            left: 0px;
            top: 0px;
            width: 20px;
            height: 20px;
            animation: rotate 500ms infinite linear !important;
            &.loading-spinner-size--sm{
                zoom: 2;
            }
            &.loading-spinner-size--md{
                zoom: 4;
            }
            &.loading-spinner-size--lg{
                zoom: 6;
            }
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
