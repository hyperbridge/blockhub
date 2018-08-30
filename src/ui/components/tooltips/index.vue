<template>
    <span class="c-tooltips">
        <span v-on:mouseover="showToolTip=true" v-on:mouseleave="showToolTip=false" v-if="type == 'hover'">{{ name }}</span>
        <span @click="clickHandler" v-if="type == 'click'">{{ name }}</span>
        <div class="c-tooltips__content" v-if="showToolTip" :class="{ 'left-position' : position == 'left', 'right-position' : position == 'right', 'center-position' : position == 'center', 'light-style' : lightStyle == true }">
            <div class="c-tooltips__content-default">
                <h4 v-if="title">{{ title }}</h4>
                <p v-if="title">{{ text }}</p>
                <slot></slot>
            </div>
        </div>
    </span>
</template>

<script>
    export default {
        props: {
            name: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String,
                default: 'NOTES'
            },
            text: {
                required: true,
                type: String
            },
            position:{
                default: 'left'
            },
            type: {
                default : 'hover'
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
            clickHandler: function () {
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
        width: 360px;
        border-radius: 5px;
        background: #1C2032;
        box-shadow: 0 0 5px rgba(0, 0, 0, .7);
        padding: 15px 25px;
        margin-top: 10px;
        text-align: left;
        z-index: 999;
        &:before{
            width: 16px;
            height: 16px;
            position: absolute;
            top: -8px;
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
            &:before{
                left: 15px;
            }
        }
        &.right-position{
            right: 0;
            &:before{
                left: unset;
                right: 15px;
            }
        }
        &.center-position{
            left: 50%;
            transform: translateX(-50%);
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
    }
</style>
