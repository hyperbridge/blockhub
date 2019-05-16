<template>
    <div class="block-icon">
        <div class="block-icon__icon" :class="['icon-size-' + size]">
            <i :class="[iconType + ' fa-' + icon ]"></i>
        </div>
        <div class="block-icon__text">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'block-icon',
        props: {
            icon: {
                type: String,
                default: 'info'
            },
            iconType: {
                type: String,
                default: 'fas'
            },
            size:{
                type: String,
                default: 'sm'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .block-icon{
        display: inline-flex;
        align-items: center;
        position: relative;
    }
    .block-icon__icon{
        width: auto;
        text-align: left;
        margin-right: 15px;
        &.icon-size-sm{
            font-size: 23px;
        }
        &.icon-size-md{
            font-size: 32px;
        }
        &.icon-size-lg{
            font-size: 46px;
        }
    }
    .block-icon__text{
        position: relative;
        z-index: 2;
    }
</style>
