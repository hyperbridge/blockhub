<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" :aria-labelledby="id"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content justify-content-center">
                <div class="text-center">
                    <div :class="modal_class">
                        <div class="custom-modal-header">
                            <div class="name">
                                {{ title }}
                            </div>
                            <div class="action">
                                <button type="button" data-dismiss="modal" aria-label="Close">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="modal-body padding-0">
                            <div class="custom-modal-body">
                                <slot name="modal_body">

                                </slot>
                            </div>
                            <div class="modal-action d-flex w-100 justify-content-between align-items-center flex-nowrap">
                                <slot name="modal_footer">

                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
    export default {
        name: 'modal',
        props:['id', 'title', 'modal_class']
    }
</script>

<style lang="scss" scoped>
    .modal-content {
        background: transparent;
        color: #fff;
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
