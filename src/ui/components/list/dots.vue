<template>
    <ul class="doted-list-container">
        <slot />
    </ul>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .doted-list-container{
        padding: 0;
        margin: 0;
        overflow: hidden;
        li{
            padding-left: 17px;
            position: relative;
            margin-bottom: 5px;
            color: #fff;
            &:before{
                content: "";
                position: absolute;
                height: 7px;
                width: 7px;
                display: inline-block;
                top: 5px;
                left: 0;
                border-radius: 100%;
                background: rgba(255, 255, 255, .2);
            }
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
</style>
