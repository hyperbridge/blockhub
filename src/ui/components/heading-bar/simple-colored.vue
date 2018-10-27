<template>
    <div class="heading-bar-colored" :class="['text-position-' + textAlign]">
        <span class="heading-bar-colored__left-line" :style="{'background-color': colorCode}" v-if="textAlign != 'left'"></span>
        <div class="h3 heading-bar-colored__title" :style="{color: colorCode}">
            <slot />
        </div>
        <span class="heading-bar-colored__right-line" :style="{'background-color': colorCode}" v-if="textAlign != 'right'"></span>
    </div>
</template>

<script>
    export default {
        name: 'heading-bar-colored',
        props: {
            colorCode: {
                type: String,
                default: 'fff'
            },
            textAlign: {
                type: String,
                default: 'left'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .heading-bar-colored{
        color: #fff;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;
        &.text-position-left{
            .heading-bar-colored__title{
                padding-right: 25px;
            }
        }
        &.text-position-right{
            .heading-bar-colored__title{
                padding-left: 25px;
            }
        }
        &.text-position-center{
            .heading-bar-colored__title{
                padding: 0 25px;
            }
        }
    }
    .heading-bar-colored__title{
        position: relative;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        width: auto;
        font-size: 16px;
    }
    .heading-bar-colored__left-line,
    .heading-bar-colored__right-line{
        width: 100%;
        height: 1px;
        display: inline-block;
    }
</style>
