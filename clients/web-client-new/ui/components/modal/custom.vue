<template>
    <div class="modal-light" @click.self="$emit('close')">
        <div class="modal-light__content">
            <div :class="modalClass">
                <div class="custom-modal-header">
                    <div class="name">
                        {{ title }}
                    </div>
                    <div class="action">
                        <button type="button" @click="$emit('close')" aria-label="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="modal-body padding-0">
                    <div class="custom-modal-body">
                        <slot name="modalBody">

                        </slot>
                    </div>
                    <div class="modal-action d-flex w-100 justify-content-between align-items-center flex-nowrap">
                        <slot name="modalFooter">

                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        props: ['id', 'title', 'modalClass']
    }
</script>

<style lang="scss" scoped>
    .modal-light {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100vw;
        height: 100vh;
        background: rgba(33, 33, 51, 0.6);
        animation: opacity .5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-light__content {
        animation: slide-in .8s ease;
        position: relative;
        background: #3e3e5c;
        color: #fff;
        border-radius: 0 0 5px 5px;
        max-width: 1000px;
        min-width: 200px;
    }

    @keyframes opacity {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(100vh) scale(0.8);
        }
        60% {
            transform: translateY(-5vh);
        }
        100% {
            transform: translateY(0) scale(1);
        }
    }

    .custom-modal-header {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        overflow: hidden;
        line-height: 30px;
        border-radius: 5px 5px 0 0;
        z-index: 30;
        &:before {
            position: absolute;
            background: #fff;
            height: 8px;
            content: "";
            left: 0;
            right: 0;
            top: 0;
            z-index: 2;
        }
        .name {
            padding: 0px 10px 0px 20px;
            background: #fff;
            color: #3D3E5D;
            position: relative;
            z-index: 5;
            display: inline-block;
            float: left;
            font-size: 18px;
            border-radius: 0 0 13px 0;
            &:after {
                content: "";
                border-style: solid;
                border-width: 26px 26px 0 0;
                border-color: #ffffff transparent transparent transparent;
                position: absolute;
                right: -22px;
                top: 0px;
            }
        }
        .action {
            display: inline-block;
            float: right;
            padding: 0;
            background: #fff;
            position: relative;
            border-radius: 0 0 0 13px;
            width: 30px;
            text-align: center;
            button {
                color: #F75D5D;
                border: none;
                background: transparent;
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                &:active,
                &:visited,
                &:focus {
                    box-shadow: none;
                    outline: none;
                }
            }
            &:before {
                content: "";
                border-style: solid;
                border-width: 0 26px 26px 0;
                border-color: transparent #ffffff transparent transparent;
                position: absolute;
                left: -24px;
                top: 0px;
            }
        }
    }
    .modal-action{
        padding: 0 15px 15px;
    }
    .custom-modal-body{
        display: flex;
        width: 100%;
        padding: 20px 15px 15px;
        text-align: left;
        border-radius: 0 0 5px 5px;
        margin-top: 30px;
    }
</style>
