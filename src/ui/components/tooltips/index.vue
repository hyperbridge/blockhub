<template>
    <span class="c-tooltips">
        <span v-on:mouseover="showToolTip=true" v-on:mouseleave="showToolTip=false" v-if="type == 'hover'">{{ name }}</span>
        <span @click="clickHandler" v-if="type == 'click'">{{ name }}</span>
        <transition name="fade">
            <div class="c-tooltips__content" v-if="showToolTip"
                 :class="{
                 'left-position' : position == 'left',
                 'right-position' : position == 'right',
                 'center-position' : position == 'center',
                 'light-style' : lightStyle == true
                 }"
                 style="animation-duration: 0.25s"
            >
                <div class="c-tooltips__content-default">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </span>
</template>

<script>
    export default {
        name: 'tooltip',
        props: {
            name: [String, Number],
            position: {
                type: String,
                default: 'left'
            },
            type: {
                type: String,
                default : 'hover',
                validator(val) {
                    return ['hover', 'click'].includes(val);
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
            };
        },
        methods: {
            clickHandler() {
                this.showToolTip = !this.showToolTip;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-tooltips{
        display: inline-block;
        position: relative;
        color: #fff;
        cursor: pointer;
    }
    .c-tooltips__content{
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
        .c-tooltips__content-default{
            z-index: 1000;
            position: relative;
        }
    }
</style>
