<template>
    <transition name="fade">
        <div class="c-popup" v-if="mutableActived" @click.self.prevent="hidePopup">
            <span class="c-popup__close" @click="hidePopup">
                <img
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDMsNi4wNThjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEw2LjA1OCw0NzYuNjkzYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDkgICAgQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNiAgICBDNTE0LjAxOSwyNy4yMyw1MTQuMDE5LDE0LjEzNSw1MDUuOTQzLDYuMDU4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNiAgICBjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNC02LjA1N0M1MTQuMDE4LDQ5Ny44NjYsNTE0LjAxOCw0ODQuNzcxLDUwNS45NDIsNDc2LjY5NHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/>
            </span>
            <div class="c-popup__item" v-if=" type != 'custom'">
                <h3 v-if="title">{{ title }}</h3>
                <div class="c-popup__content">
                    <div class="c-popup__content-header" :class="[ 'c-popup-type-' + type ]" v-if="sub_title">
                        <div class="popup-icon">
                            <i class="fas fa-exclamation-triangle" v-if=" type == ['warning', 'danger'] "></i>
                            <i class="fas fa-check" v-if=" type == 'success' "></i>
                            <i class="fas fa-info-circle" v-else></i>
                        </div>
                        <div class="sub_title">
                            {{ sub_title }}
                        </div>
                    </div>
                    <div class="c-popup__content-body">
                        <p class="m-0">
                            <slot />
                        </p>
                        <slot name="body"></slot>
                    </div>
                    <div class="c-popup__content-footer" v-if="this.$slots.footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
            <div class="c-popup__item" v-if="type == 'custom'" :style="{ 'width': + width + 'px'}">
                <h3 v-if="title">{{ title }}</h3>
                <slot name="custom_content"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            type: {
                default: 'default'
            },
            title: {
                type: String
            },
            sub_title: {
                type: String
            },
            activated: {
                type: Boolean
            },
            width: {
                default: '400'
            }
        },
        data() {
            return {
                mutableActived: false,
            }
        },
        created(){
            console.log(this.mutableActived)
        },
        methods: {
            hidePopup: function () {
                this.mutableActived = !this.mutableActived;
            }
        },
        watch: {
            activated(oldVal, newVal) {
                if (oldVal !== newVal) {
                    this.mutableActived = !this.mutableActived;
                    this.$el.tabIndex = 1;
                    this.$nextTick(function () {
                        this.$el.focus();
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-popup {
        display: flex;
        width: 100%;
        height: 100vh;
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background: rgba(48, 48, 75, .9);
    }

    .c-popup__close {
        position: absolute;
        top: 25px;
        right: 25px;
        opacity: .4;
        -webkit-transition: 0.6s ease-out;
        -moz-transition:  0.6s ease-out;
        transition:  0.6s ease-out;
        img {
            width: 24px;
        }
        &:hover {
            opacity: .6;
            cursor: pointer;
            -webkit-transform: rotateZ(180deg);
            -moz-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
        }
    }

    .c-popup__item {
        display: flex;
        position: relative;
        z-index: 30;
        flex-direction: column;
        width: 400px;
        max-width: 90%;
        h3 {
            color: #C6C6D6;
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;
            padding: 0;
            text-transform: uppercase;
        }
    }

    .c-popup__content {
        background: #1C2032;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }

    .c-popup__content-header {
        display: flex;
        width: 100%;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 10px;
        border-radius: 5px;
        &.c-popup-type-warning {
            background: #FADC72;
            color: #3D3E5D;
        }
        &.c-popup-type-danger {
            background: #F75D5D;
        }
        &.c-popup-type-info {
            background: #5D75F7;
        }
        &.c-popup-type-success {
            background: #43C981;
        }
        &.c-popup-type-default {
            background: rgba(255, 255, 255, .3)
        }
        .popup-icon {
            width: 45px;
            font-size: 40px;
        }
        .sub_title {
            width: calc(100% - 55px);
            font-size: 18px;
            font-weight: bold;
            line-height: 22px;
        }
    }

    .c-popup__content-body {
        color: #fff;
        padding: 10px 0;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        width: 100%;
    }

    .c-popup__content-footer {
        margin-top: 15px;
        display: flex;
        width: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }
</style>
