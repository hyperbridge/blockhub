<template>
    <c-layout navigationKey="account-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-heading-bar name="My identity" :showArrows="false" :showBackground="false">
                        </c-heading-bar>
                    </div>
                    <div class="col-12 margin-bottom-40 my_identity">
                        <c-user-card
                            :user="user"
                            icon_color="green"
                            icon_class="fas fa-check"
                        />
                        <div class="user-info">
                            <h3>Mr. Satoshi Nakamoto</h3>
                            <h4>Osaka, Japan</h4>
                        </div>
                        <div>
                            <div class="verification-blk">
                                <h3>Verify Your Identity</h3>
                                <div class="status">
                                    <i class="fas fa-check"></i>
                                    Approved
                                </div>
                                <div class="date">
                                    Valid Until
                                    Jul 2021
                                </div>
                            </div>
                            <div class="verification-blk">
                                <h3>Verify Your Location</h3>
                                <div class="status">
                                    <i class="fas fa-check"></i>
                                    Approved
                                </div>
                                <div class="date">
                                    Valid Until
                                    Jul 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <c-heading-bar name="Profile Picker" :showArrows="false" :showBackground="false">
                            <div class="additional-action margin-left-20" slot="additional-action">
                                <div class="text">
                                    Value
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="arrow_container">
                                    <i class="fas fa-sort-up"></i>
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </div>
                            <div class="additional-action margin-left-20" slot="additional-action">
                                <div class="text">
                                    Rating
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <div class="arrow_container">
                                    <i class="fas fa-sort-up"></i>
                                    <i class="fas fa-sort-down"></i>
                                </div>
                            </div>
                            <div class="additional-action margin-left-20" slot="additional-action">
                                <div class="form-group mb-0">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search"
                                               aria-label="Search">
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <i class="fas fa-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="additional-action" slot="additional-action">
                                <a href="#3" class="btn btn-sm btn-info">
                                    <i class="fas fa-user-plus"></i>
                                    Add new
                                </a>
                            </div>
                        </c-heading-bar>
                    </div>
                    <div class="col-12 profile-picker">
                        <div class="default">
                            <div class="div_label">
                                <i class="fas fa-check-square"></i>
                                <span>
                                    Default
                                </span>
                            </div>
                            <c-user-card
                                :user="user"
                                status="finish"
                                icon_color="green"
                                icon_class="fas fa-check">
                            </c-user-card>
                        </div>
                        <div class="wt_action">
                            <c-user-card
                                :user="user"
                                class="defaults"
                                status="finish"
                                icon_color="green"
                                icon_class="fas fa-check">
                            </c-user-card>
                            <div class="action">
                                <a href="#3">
                                    <i class="fas fa-check" style="color: #43C981"></i>
                                    Set Default
                                </a>
                                <a href="#3">
                                    <i class="fas fa-pen" style="color: #FADC72"></i>
                                    Edit
                                </a>
                                <a href="#3">
                                    <i class="fas fa-times" style="color: #F75D5D"></i>
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-user-card': () => import('@/ui/components/user-card')
        },
        data() {
            return {
                wallets: [],
                user: {}
            }
        },
        computed: {
            identities() {
                return this.$store.state.network.identities;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .additional-action {
        float: right;
        display: flex;
        width: auto;
        align-items: center;
        font-size: 14px;
        margin-top: 6px;
        .text {
            margin-right: 5px;
            i {
                font-size: 16px;
                margin-left: 5px;
            }
        }
        .arrow_container {
            width: 20px;
            position: relative;
            display: inline-block;
            text-align: center;
            height: 25px;
            i {
                font-size: 18px;
                position: absolute;
                opacity: .7;
                left: 0;
                right: 0;
                &:first-child {
                    top: 0;
                    height: 50%;
                    z-index: 3;
                }
                &:last-child {
                    bottom: 0px;
                    height: 18px;
                    z-index: 1;
                }
                &:hover {
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }
        .input-group {
            border-color: rgba(0, 0, 0, .7);
            border-radius: 5px;
            overflow: hidden;
            .input-group-append {
                margin: 0;
                .input-group-text {
                    border: none;
                }
            }
            input {
                border: none;
                padding: 4px 8px;
                width: 90px;
                &:active,
                &:focus {
                    border: unset;
                    box-shadow: none;
                }
            }
        }
        .btn{
            padding: 0 10px;
            line-height: 26px;
            font-weight: bold;
            font-size: 14px;
        }
    }

    .identity-block {
        width: 300px !important;
        float: left!important;
    }

    .verification-blk {
        width: 220px;
        color: #C6C6D6;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 5px 15px 10px;
        border: 1px solid #707070;
        background: rgba(0, 0, 0, .2);
        border-radius: 5px;
        margin-bottom: 10px;
        &:last-child {
            margin: 0;
        }
        h3 {
            font-size: 17px;
            width: 100%;
            margin-bottom: 5px;
            color: #C6C6D6;
        }
        .status {
            width: 110px;
            text-align: center;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #43C981;
            font-size: 14px;
            i {
                color: #43C981;
                margin-right: 5px;
            }
        }
        .date {
            width: 70px;
        }

    }

    .my_identity {
        display: flex;
        width: 100%;
        justify-content: space-between;
        h3 {
            font-size: 21px;
            padding-bottom: 5px;
            margin-bottom: 0;
        }
        .user-info {
            width: calc(100% - 540px);
            padding: 0 10px;
        }
    }

    .profile-picker{
        display: flex;
        align-items: center;
        .default{
            overflow: auto;
            border: 1px solid #43C981;
            border-radius: 5px;
            background: #43C981;
            padding-left: 25px;
            width: 327px;
            position: relative;
            margin-right: 40px;
            .div_label{
                position: absolute;
                top: 5px;
                left: 5px;
                font-size: 16px;
                color: #1C2032;
                span{
                    display: inline-block;
                    position: absolute;
                    white-space: nowrap;
                    left: -21px;
                    width: 150px;
                    text-align: right;
                    top: 173px;
                    text-transform: uppercase;
                    font-weight: bold;
                    /* this is for shity "non IE" browsers
                       that dosn't support writing-mode */
                    -webkit-transform: translate(1.1em,0) rotate(-90deg);
                    -moz-transform: translate(1.1em,0) rotate(-90deg);
                    -o-transform: translate(1.1em,0) rotate(-90deg);
                    transform: translate(1.1em,0) rotate(-90deg);
                    -webkit-transform-origin: 0 0;
                    -moz-transform-origin: 0 0;
                    -o-transform-origin: 0 0;
                    transform-origin: 0 0;
                    /* IE9+ */
                    -ms-transform: none;
                    -ms-transform-origin: none;
                    /* IE8+ */
                    -ms-writing-mode: tb-rl;
                    /* IE7 and below */
                    *writing-mode: tb-rl;
                }
            }
        }
        .wt_action{
            position: relative;
            overflow: visible;
            .action{
                display: none;
                justify-content: space-around;
                align-items: center;
                position: absolute;
                bottom: -20px;
                width: 100%;
                a{
                    background: #151827;
                    border-radius: 5px;
                    color: #A2A3BE;
                    padding: 5px 8px;
                    font-weight: bold;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
                    i{
                        margin-right: 5px;
                        font-size: 14px;
                    }
                }
            }
            &:hover{
                .action{
                    display: flex;
                }
            }
        }
    }

    .defaults {
        $defColor: #43C981;
        background: $defColor;
        border-color: $defColor !important;
        &:before {
            content: "";
            width: 26px;
            position: absolute;
            border-radius: 5px 0 0 5px;
            left: -22px;
            bottom: -1px;
            height: calc(100% + 2px);
            background: $defColor;
        }
        &:after {
            font-family: 'Font Awesome 5 Free', 'Barlow', sans-serif;
            content: "DEFAULT \F14A";
            color: #1C2032;
            font-weight: bold;
            font-size: 16px;
            position: absolute;
            transform: rotate(-90deg);
            top: 40px;
            left: -50px;
        }
    }
</style>
