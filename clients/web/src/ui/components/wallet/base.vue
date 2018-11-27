<template>
    <div class="wallet">
        <div class="wallet-header slim-header">
            <div class="wallet-header__top-bar"></div>
            <div class="wallet-header__bar-left">
                BlockHub
            </div>
            <div class="wallet-header__bar-right">
                <!--<button type="button">-->
                <c-dropdown position="right">
                    <div slot="title" class="account_btn">
                        <i class="fas fa-user"></i>
                    </div>
                    <ul class="p-0 m-0">
                        <li>
                            <a href="#">
                                Account 1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Account 2
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <ul class="p-0 m-0">
                        <li>
                            <a href="#">
                                Add account
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Import account
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Info & Help
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Logout
                            </a>
                        </li>
                    </ul>
                </c-dropdown>
                <!--</button>-->
            </div>
        </div>
        <div class="wallet__body">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'wallet-popup',
        props:{},
        components:{
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-4'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .wallet{
        position: relative;
        border: 1px solid rgba(0, 0, 0, .5);
        background: #3D3E5D;
        width: 350px;
        padding: 30px 20px 20px;
        height: 500px;
    }
    .wallet-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: none;
        padding: 0;
        z-index: 100;
        filter: drop-shadow(0 0px 15px rgba(48, 49, 76, 1));
    }
    .wallet-header__top-bar {
        max-height: 60px;
        min-height: 11px;
        padding-bottom: 10px;
        height: auto;
        width: 100%;
        display: block;
        background: #fff;
        position: relative;
        z-index: 13;
        top: 0;
        left: 0;
        right: 0;
    }
    .wallet-header__bar-left {
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
        background: url("../../../assets/img/slim-logo.png") no-repeat #fff;
        background-size: 22px;
        background-position: 5px 5px;
        border-radius: 0 0 13px 0;
        user-select: none;
        font-weight: bold;
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
    .wallet-header__bar-right {
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
        justify-content: center;
        &:before {
            content: "";
            border-style: solid;
            border-width: 0 26px 26px 0;
            border-color: transparent #ffffff transparent transparent;
            position: absolute;
            left: -22px;
            top: 0px;
        }
        .account_btn {
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
    .wallet__body{
        display: flex;
        flex-direction: column;
        height: 100%;
        /*overflow-y: auto;*/
        /*overflow-x: hidden;*/
    }
    .dropdown-menu{
        li{
            list-style: none;
            a{
                color: #000;
                opacity: .7;
                line-height: 24px;
                text-decoration: none;
                i{
                    font-size: 12px;
                    margin-right: 5px;
                }
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
</style>
