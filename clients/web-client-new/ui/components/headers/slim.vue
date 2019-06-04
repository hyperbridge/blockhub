<template>
    <div class="app-header slim-header">
        <div class="app-header__top-bar draggable" />
        <div class="app-header__bar-left draggable">
            {{ title }}
        </div>
        <div class="app-header__bar-right">
            <button
                type="button"
                aria-label="Close"
                @click.prevent="closeWindow">
                <i class="fas fa-times" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlimHeader',
    props: {
        title: {
            type: String,
            default: 'BlockHub'
        }
    },
    methods: {
        closeWindow() {
            const { BrowserWindow } = window.require('electron').remote
            const browserWindow = BrowserWindow.getFocusedWindow()
            browserWindow.close()
        }
    }
}
</script>

<style>
    .draggable {
        -webkit-app-region: drag;
    }

    .undraggable {
        -webkit-app-region: no-drag;
    }
</style>

<style lang="scss" scoped>
    .app-header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: none;
        padding: 0;
        z-index: 100;
        filter: drop-shadow(0 0px 15px rgba(48, 49, 76, 1));
    }
    .app-header__top-bar {
        max-height: 60px;
        min-height: 11px;
        padding-bottom: 10px;
        height: auto;
        width: 100vw;
        display: block;
        background: #fff;
        position: relative;
        z-index: 13;
        top: 0;
        left: 0;
        right: 0;
    }
    .app-header__bar-left {
        position: absolute;
        top: 0px;
        left: 0;
        height: 30px;
        line-height: 30px;
        min-width: 60px;
        padding: 0 10px 0 35px;
        font-size: 17px;
        color: #3D3E5D;
        z-index: 13;
        background: url("../../assets/img/slim-logo.png") no-repeat #fff;
        background-size: 22px;
        background-position: 5px 5px;
        border-radius: 0 0 13px 0;
        user-select: none;
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
    .app-header__bar-right {
        position: absolute;
        top: 0;
        right: 0;
        height: 30px;
        min-width: 35px;
        background: #fff;
        text-align: right;
        z-index: 13;
        padding: 4px 5px;
        border-radius: 0 0 0 13px;
        display: flex;
        align-items: center;
        /*justify-content: center;*/
        &:before {
            content: "";
            border-style: solid;
            border-width: 0 26px 26px 0;
            border-color: transparent #ffffff transparent transparent;
            position: absolute;
            left: -22px;
            top: 0px;
        }
        button {
            color: #F75D5D;
            border: none;
            background: transparent;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            &:active,
            &:visited,
            &:focus {
                box-shadow: none;
                outline: none;
            }
        }
    }
</style>
