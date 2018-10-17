<template>
    <div class="block-icon">
        <div class="block-icon__icon">
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .block-icon{
        display: inline-flex;
        align-items: center;
    }
    .block-icon__icon{
        font-size: 23px;
        width: auto;
        text-align: left;
        margin-right: 15px;
    }
</style>
