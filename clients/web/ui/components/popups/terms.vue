<template>
    <transition
        name="fade"
        :duration="100">
        <div
            v-if="activated"
            class="c-terms-popup"
            @click.self.prevent="$emit('close')">
            <div
                class="c-terms-popup__item"
                :style="{ 'width': + width + 'px'}">
                <div class="position-relative">
                    <div class="c-terms-popup__content">
                        <div
                            class="c-terms-popup__close"
                            @click="$emit('close')">
                            <i class="fas fa-times" />
                        </div>
                        <div class="c-terms-popup__header">
                            <slot name="header" />
                        </div>
                        <div
                            id="terms-popup__body"
                            class="c-terms-popup__body"
                            @scroll="checkReadState">
                            <slot name="body" />
                        </div>
                        <div class="c-terms-popup__footer">
                            <c-button
                                status="plain"
                                class="color-red">
                                Cancel
                            </c-button>
                            <c-button
                                status="gradient-info"
                                class="ml-3"
                                :class="{'not-accept' : !isRead}">
                                I Agree
                            </c-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        activated: {
            type: Boolean,
            default: false
        },
        width: String
    },
    data() {
        return {
            isRead: false
        }
    },
    methods: {
        checkReadState() {
            if (($('#terms-popup__body').scrollTop() + $('#terms-popup__body').innerHeight()) >= $('#terms-popup__body')[0].scrollHeight) {
                console.log('1')
                this.isRead = true
            } else {
                this.isRead = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-terms-popup {
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
        @media (max-width: 768px) {
            max-width: 80%!important;
            max-height: 70vh;
        }
    }

    .c-terms-popup__close {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: .7;
        -webkit-transition: 0.2s ease-out;
        -moz-transition:  0.2s ease-out;
        transition:  0.2s ease-out;
        font-size: 22px;
        z-index: 999;
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

    .c-terms-popup__item {
        display: flex;
        position: relative;
        z-index: 30;
        flex-direction: column;
        width: 400px;
        max-width: 90%;
        color: #fff;
    }

    .c-terms-popup__content {
        background: #1C2032;
        padding: 20px;
        border-radius: 5px;
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }

    .c-terms-popup__header{
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        width: 100%;
        padding-right: 100px;
        display: block;
        color: #fff;
        h2,h3,h4,h5,
        .h2,.h3,.h4,.h5{
            color: #fff;
            padding: 0;
            margin: 0;
        }
    }
    .c-terms-popup__body{
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: auto;
        color: #fff;
        max-height: 60vh;
        margin: 20px 0;
        background: rgba(255, 255, 255, .03);
        padding: 10px;
    }
    .c-terms-popup__footer{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 30px;
        .c-button{
            &.color-red{
                color: #F75D5D;
                &:hover{
                    color: #cb4d4d;
                }
            }
        }
        .not-accept{
            pointer-events: none;
            opacity: .5;
        }
    }
</style>
