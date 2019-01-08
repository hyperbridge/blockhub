<template>
    <transition name="fade" :duration="100">
        <div class="c-popup" v-if="activated" @click.self.prevent="$emit('close')">
            <div class="c-popup__item" :style="{ 'width': + width + dimension}">
                <h3 v-if="title">{{ title }}</h3>
                <div class="position-relative">
                    <div class="c-popup__close" @click="$emit('close')" v-if="!customClose">
                        <i class="fas fa-times"></i>
                    </div>
                    <slot name="customClose" v-else></slot>
                    <div class="c-popup__content" v-if="!this.$slots.customContent">
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

                    <slot name="customContent" v-else></slot>
                </div>
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
            },
            dimension:{
                type: String,
                default: 'px'
            }
        },
        computed:{
          customClose() {
              return this.$slots.customClose
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
        z-index: 99;
        background: rgba(0, 0, 0, 0.7);
    }

    .c-popup__close {
        position: absolute;
        top: -25px;
        right: 0px;
        opacity: .5;
        -webkit-transition: 0.1s ease-out;
        -moz-transition:  0.1s ease-out;
        transition:  0.1s ease-out;
        font-size: 22px;
        z-index: 999;
        color: #fff;
        img {
            width: 24px;
        }
        &:hover {
            opacity: 1;
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
        @media (max-width: 768px) {
            max-width: 80%!important;
            max-height: 70vh;
        }
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
        text-align: left;
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
        transition: opacity .1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }
</style>
