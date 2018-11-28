<template>
    <div class="wallet">
        <div class="wallet-header slim-header">
            <div class="wallet-header__top-bar">
                <div class="network-status">
                    <c-dropdown-second name="Ethereum" style="float: unset">
                        <ul class="p-0 m-0">
                            <li>
                                <a href="#">
                                    Menu link 1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Menu link 2
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Menu link 3
                                </a>
                            </li>
                        </ul>
                    </c-dropdown-second>
                </div>
            </div>
            <div class="wallet-header__bar-left">
                BlockHub
            </div>
            <div class="wallet-header__bar-right">
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
            </div>
        </div>
        <div class="wallet__account-info">
            <div class="account-menu text-left">
                <c-dropdown>
                    <div slot="title" class="account-menu_btn">
                        <i class="fas fa-bars"></i>
                    </div>
                    <ul class="p-0 m-0">
                        <li>
                            <a href="#">
                                Menu link 1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Menu link 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Menu link 3
                            </a>
                        </li>
                    </ul>
                </c-dropdown>
            </div>
            <div class="account-number">
                <div>
                    <strong>Account 1</strong>
                    <span>0x82ur9h29r823r9823r9823982392h3</span>
                </div>
            </div>
            <div class="account-options text-right">
                <c-dropdown position="right">
                    <div slot="title" class="account-options_btn">
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                    <ul class="p-0 m-0">
                        <li>
                            <a href="#">
                                Menu link 1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Menu link 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Menu link 3
                            </a>
                        </li>
                    </ul>
                </c-dropdown>
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
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-4'], resolve),
            'c-dropdown-second': (resolve) => require(['@/ui/components/dropdown-menu/type-2'], resolve)
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
        height: 540px;
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
        .network-status{
            position: absolute;
            top: 15px;
            left: 140px;
            right: 50px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            i{
                margin-left: 15px;
            }
        }
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
    .wallet__account-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .account-menu,
        .account-options{
            width: 40px;
            i{
                color: #fff;
                opacity: .7;
                font-size: 16px;
            }
            &:hover{
                i{
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }
        .account-number{
            width: calc( 100% - 80px );
            padding: 0 10px;
            display: flex;
            justify-content: center;
            div{
                width: auto;
                padding: 5px 10px;
                border-radius: 4px;
                text-align: center;
                color: #fff;
                span{
                    max-width: 130px;
                    overflow: hidden;
                    display: block;
                }
                &:hover{
                    background: rgba(255, 255, 255, .1);
                    cursor: pointer;
                }
            }
        }
    }
    .wallet__body{
        display: flex;
        flex-direction: column;
        height: calc( 100% - 85px );
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
