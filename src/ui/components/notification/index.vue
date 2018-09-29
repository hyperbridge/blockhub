<template>
    <transition name="custom-classes-transition"
                mode="out-in"
                leave-active-class="animated bounceOutRight">
        <div
            class="notif"
            :class="notification.type"
            v-if="show"
        >
            <div class="title">
                <h5 class="text-left" @click="$emit('showPopup')">
                    <i :class="`fas fa-${notif_icon}`"></i>
                    {{ notification.title }}
                    <div class="close" @click="actionOnClose()">
                        <i class="fas fa-times"></i>
                    </div>
                </h5>
            </div>
            <div class="text">
                {{ notification.text }}
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'notification',
        props: {
            notification: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                show: true,
            }
        },
        methods: {
            actionOnClose() {
                this.show = false;
            },
        },
        computed: {
            notif_icon() {
                switch (this.notification.type) {
                    case 'info':
                        return 'info';
                    case 'success':
                        return 'check-circle';
                    case 'warning':
                        return 'exclamation-triangle';
                    case 'danger':
                        return 'times-circle';
                    default:
                        return 'cog';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .notif {
        padding: 0;
        border: 1px solid #C6C6D6;
        background: #C6C6D6;
        border-radius: 5px;
        margin-bottom: 15px;
        color: #3D3E5D;
        overflow: hidden;
        height: auto;
        display: inline-block;
        transition: all 500ms ease-in-out;
        .title {
            width: 100%;
            display: inline-block;
            padding: 3px 20px 3px 8px;
            background: rgba(39, 40, 62, .9);
            border-radius: 5px 5px 0 0;
            position: relative;
            color: #fff;
            margin-bottom: 0;
            font-size: 13px;
            font-weight: bold;
            h5 {
                padding: 0;
                margin: 0;
                line-height: 17px;
                color: #fff;
                i {
                    margin-right: 10px;
                    color: #C6C6D6;
                }
            }
            .close {
                text-shadow: unset;
                opacity: 1;
                float: right;
                position: absolute;
                top: 4px;
                right: 7px;
                font-size: 16px;
                i {
                    margin: 0;
                    color: #fff !important;
                }
            }
        }
        .text {
            display: inline-block;
            width: 100%;
            padding: 5px 8px;
            text-align: left;
            line-height: 16px;
        }
    }

    $statusList: ('info', #5D75F7) ('success', #428c01) ('warning', #FADC72) ('danger', #E55555);
    @each $status in $statusList {
        $name: nth($status, 1);
        $color: nth($status, 2);
        &.#{$name} {
            background: $color;
            border-color: $color;
            @if $name == warning {
                color: #000;
            } @else {
                color: #fff;
            }
            .title i {
                color: $color;
            }
        }
    }

    .animated{
        -webkit-animation-duration:1s;
        animation-duration:1s;
        -webkit-animation-fill-mode:both;
        animation-fill-mode:both
    }

    .bounceOutRight {
        -webkit-animation-name: bounceOutRight;
        animation-name: bounceOutRight
    }

    @-webkit-keyframes bounceOutRight {
        20% {
            opacity: 1;
            -webkit-transform: translate3d(-20px, 0, 0);
            transform: translate3d(-20px, 0, 0)
        }
        to {
            opacity: 0;
            -webkit-transform: translate3d(200px, 0, 0);
            transform: translate3d(200px, 0, 0)
        }
    }

    @keyframes bounceOutRight {
        20% {
            opacity: 1;
            -webkit-transform: translate3d(-20px, 0, 0);
            transform: translate3d(-20px, 0, 0)
        }
        to {
            opacity: 0;
            -webkit-transform: translate3d(200px, 0, 0);
            transform: translate3d(200px, 0, 0)
        }
    }
</style>
