<template>
    <transition
        name="custom-classes-transition"
        mode="out-in"
        leave-active-class="animated bounceOutRight">
        <div
            v-if="show"
            class="notif"
            :class="notification.type">
            <div class="title">
                <h5
                    class="text-left"
                    @click.self="$emit('showPopup')">
                    <c-img
                        v-if="icon"
                        :src="icon" />
                    <i
                        v-else
                        :class="`fas fa-${notif_icon}`" />
                    {{ notification.title }}
                    <div
                        class="close"
                        @click="actionOnClose()">
                        <i class="fas fa-times" />
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
    name: 'Notification',
    props: {
        notification: {
            type: Object,
            required: true
        },
        icon: {
            type: String,
            default: null,
            require: false
        }
    },
    data() {
        return {
            show: true
        }
    },
    computed: {
        notif_icon() {
            switch (this.notification.type) {
            case 'info':
                return 'info-circle'
            case 'success':
                return 'check-circle'
            case 'warning':
                return 'exclamation-triangle'
            case 'danger':
                return 'times-circle'
            default:
                return 'cog'
            }
        }
    },
    methods: {
        actionOnClose() {
            this.show = false
            setTimeout(() => this.$emit('close'), 150)
        }
    }
}
</script>

<style lang="scss" scoped>

    .notif {
        padding: 0;
        margin-bottom: 15px;
        overflow: hidden;
        height: auto;
        display: inline-block;
        transition: all 100ms ease-in-out;
        color: #fff;

        .title {
            width: 100%;
            display: inline-block;
            padding: 0 15px 6px 0;
            position: relative;
            color: #fff;
            margin-bottom: 5px;
            font-size: 13px;
            font-weight: bold;
            border-bottom: 2px solid #fff;
            cursor: pointer;

            h5 {
                padding: 0;
                margin: 0;
                line-height: 17px;
                color: #fff;
                font-weight: bold;
                font-size: 14px;
                i {
                    width: 15px;
                    font-size: 15px;
                    text-align: center;
                    margin-right: 5px;
                }
                img{
                    width: 15px;
                    height: 15px;
                    object-fit: cover;
                }
            }
            .close {
                text-shadow: unset;
                opacity: 1;
                float: right;
                position: absolute;
                top: 4px;
                right: 0;
                font-size: 16px;
                transition: 0.1s ease-out;
                i {
                    margin: 0;
                    color: #fff !important;
                }
                &:hover {
                    cursor: pointer;
                    -webkit-transform: rotateZ(180deg);
                    -moz-transform: rotateZ(180deg);
                    transform: rotateZ(180deg);
                }
            }
        }
        .text {
            display: inline-block;
            width: 100%;
            padding: 5px 3px;
            text-align: left;
            line-height: 16px;
        }
    }

    $statusList: ('info', #5D75F7) ('success', #428c01) ('warning', #FADC72) ('danger', #E55555);
    @each $status in $statusList {
        $name: nth($status, 1);
        $color: nth($status, 2);
        &.#{$name} {
            .title{
                border-color: $color;
                i {
                    color: $color;
                }
            }
        }
    }

    .animated{
        -webkit-animation-duration:1s;
        animation-duration:1s;
        -webkit-animation-fill-mode:both;
        animation-fill-mode: both;
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
