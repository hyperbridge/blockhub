<template>
    <span class="tooltips">
        <span
            v-if="type == 'hover'"
            @mouseover="showToolTip=true"
            @mouseleave="showToolTip=false">{{ name }}</span>
        <span
            v-if="type == 'click'"
            @click="clickHandler">{{ name }}</span>
        <transition name="fade">
            <div
                v-if="showToolTip"
                class="tooltips__content"
                :class="{
                    'left-position' : position == 'left',
                    'right-position' : position == 'right',
                    'center-position' : position == 'center',
                    'light-style' : lightStyle == true
                }"
                style="animation-duration: 0.25s">
                <div class="tooltips__content-default">
                    <slot />
                </div>
            </div>
        </transition>
    </span>
</template>

<script>
export default {
    props: {
        name: [String, Number],
        position: {
            type: String,
            default: 'left'
        },
        type: {
            type: String,
            default: 'hover',
            validator(val) {
                return ['hover', 'click'].includes(val)
            }
        },
        lightStyle: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showToolTip: false
        }
    },
    methods: {
        clickHandler() {
            this.showToolTip = !this.showToolTip
        }
    }
}
</script>

<style lang="scss" scoped>
    .tooltips{
        display: inline-block;
        position: relative;
        color: #fff;
        cursor: pointer;
    }
    .tooltips__content{
        position: absolute;
        max-width: 360px;
        min-width: 50px;
        width: auto;
        border-radius: 5px;
        background: #1C2032;
        box-shadow: 0 0 5px rgba(0, 0, 0, .7);
        padding: 5px 10px;
        top: -12px;
        text-align: left;
        z-index: 999;
        &:before{
            width: 16px;
            height: 16px;
            position: absolute;
            bottom: -8px;
            content: "";
            display: inline-block;
            background: #1C2032;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        &.left-position{
            left: 0;
            transform: translateY(-100%);
            &:before{
                left: 15px;
            }
        }
        &.right-position{
            right: 0;
            transform: translateY(-100%);
            &:before{
                left: unset;
                right: 15px;
            }
        }
        &.center-position{
            left: 50%;
            transform: translate3d(-50%, -100%, 0);
            &:before{
                left: calc( 50% - 8px );
            }
        }
        h4{
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
            color: #fff;
        }
        p{
            &:last-child{
                margin: 0;
            }
        }
        &.light-style{
            background: #5D75F7;
            &:before{
                background: #5D75F7;
            }
        }
        .tooltips__content-default{
            z-index: 1000;
            position: relative;
        }
    }
</style>
