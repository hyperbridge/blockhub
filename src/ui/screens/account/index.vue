<template>
    <c-layout navigationKey="account-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 margin-bottom-30">
                        <c-block title="Campaign">
                            <form>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="form-group row">
                                            <label class="switch switch-sm col-sm-3">
                                                <label>Email Address</label>
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Email" :value="account.email" readonly>
                                                <span class="form-text">Your email address cannot be changed at this time.</span>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="switch switch-sm col-sm-3">
                                                <label>Public Address</label>
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" placeholder="Public address" :value="account.public_address" readonly>
                                                <span class="form-text">Your account is an Ethereum wallet, and can be <a :href="`https://etherscan.io/address/${account.public_address}`">found on the blockchain using the Public Address</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </c-block>
                        
                        <div class="stat-card-container">
                            <c-heading-bar name="Account" :showArrows="false" :showBackground="false"></c-heading-bar>
                            <div class="stat-card-list">
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <div class="stat">
                                            <div>
                                                12 on your account
                                            </div>
                                        </div>
                                        <p>
                                            Viev and Manage Identities on this account.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-question-circle"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Support Tickets</h4>
                                        <div class="stat">
                                            <div>
                                                <i class="fa fa-clock"></i>
                                                35
                                            </div>
                                            <div>
                                                <i class="fas fa-exclamation-triangle" style="color: #FADC72"></i>
                                                12
                                            </div>
                                            <div>
                                                <i class="fas fa-check" style="color: #43C981"></i>
                                                5
                                            </div>
                                        </div>
                                        <p>
                                            Viev and Manage Identities on this account.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Open Payments</h4>
                                        <div class="stat">
                                            <div>
                                                $ 2,345,00 om 6 Payments
                                            </div>
                                        </div>
                                        <p>
                                            Viev and Manage Identities on this account.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div class="info">
                                        <h4>User Activity</h4>
                                        <div class="stat">
                                            <div>
                                                <i class="fas fa-circle" style="color: #43C981"></i>
                                                3
                                            </div>
                                            <div>
                                                <i class="fas fa-circle" style="color: #FADC72"></i>
                                                1
                                            </div>
                                            <div>
                                                <i class="fas fa-circle" style="color: #F75D5D"></i>
                                                0
                                            </div>
                                            <div>
                                                <i class="fas fa-circle" style="color: #A2A3BE"></i>
                                                5
                                            </div>
                                        </div>
                                        <p>
                                            Viev and Manage Identities on this account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 margin-bottom-30">
                        <div class="stat-card-container">
                            <c-heading-bar name="Section" :showArrows="false" :showBackground="false"></c-heading-bar>
                            <div class="stat-card-list">
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
                                <div class="stat-card">
                                    <div class="icon">
                                        <i class="fas fa-id-card"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Identities</h4>
                                        <p>
                                            Control panel item description should be written inside this space.
                                        </p>
                                    </div>
                                </div>
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
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-custom-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve)
        },
        computed: {
            identityCount() {
                return Object.keys(this.$store.state.network.identities).length
            },
            account() {
                return this.$store.state.network.account
            }
        },
        data: () => ({
            wallets: [],
            expert_mode: false
        }),
    }
</script>

<style lang="scss">
    .send-money-modal {
        display: inline-block;
        width: auto !important;
        position: relative;
        min-width: 300px;
        .card {
            background: rgba(0, 0, 0, .13);
            border-radius: 5px;
            padding: 8px;
            input,
            select {
                height: 30px;
                line-height: 30px;
                padding: 0 8px;
            }
            label {
                margin: 0;
                padding: 0;
                text-align: left;
            }
            .custom-col {
                width: auto;
                margin-right: 10px;
                min-width: 40px;
            }
        }
        .modal-action {
            color: #C6C6D6;
            font-size: 12px;
            .btn {
                font-weight: bold;
                color: #fff;
            }
        }
        .money-info {
            width: 300px;
            &.expert {
                width: 250px;
                .card {
                    .custom-col {
                        width: 70px;
                    }
                }
            }
        }
    }
    .login-modal{
        display: inline-block;
        width: auto !important;
        position: relative;
        min-width: 250px;
        .modal-title{
            text-align: left;
            margin: 0 0 15px 0;
            h3{
                padding: 0;
                margin: 0 0 8px;
                font-size: 21px;
            }
            h5{
                font-size: 14px;
                font-weight: bold;
            }
        }
        .card {
            background: rgba(0, 0, 0, .13);
            border-radius: 5px;
            padding: 8px;
            margin: 0;
            text-align: left;
            input,
            select {
                height: 30px;
                line-height: 30px;
                padding: 0 8px;
            }
            label {
                margin: 0 0 5px;
                font-weight: bold;
                padding: 0;
                text-align: left;
            }
            .form-group{
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
        .modal-action{
            .btn{
                &.btn-link{
                    display: inline-block;
                    line-height: 14px;
                    padding: 0;
                    color: #FFFFFF;
                    float: left;
                    font-size: 11px;
                    border: none;
                    margin: 0;
                    text-align: left;
                }
            }
        }
    }
</style>

<style lang="scss" scoped>
    .stat-card-container {
        position: relative;
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        overflow: hidden;
        padding: 20px 20px 5px;
        .stat-card-list {
            display: flex;
            margin: 0 -1%;
            width: 102%;
            flex-wrap: wrap;
            .stat-card {
                width: 31%;
                margin: 0 1% 2%;
                border-radius: 5px;
                background: rgba(28, 32, 59, .5);
                padding: 10px;
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                .icon {
                    font-size: 48px;
                    color: #5D75F7;
                    width: 60px;
                }
                .info {
                    width: calc(100% - 60px);
                    padding-left: 10px;
                    color: #fff;
                    h4 {
                        font-size: 18px;
                        margin: 0;
                        padding: 0;
                        font-weight: bold;
                    }
                    p {
                        color: #C6C6D6;
                        line-height: 16px;
                    }
                    .stat {
                        font-size: 14px;
                        font-weight: bold;
                        margin: 5px 0;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: nowrap;
                        div {
                            width: 100%;
                            line-height: 20px;
                            i {
                                margin-right: 5px;
                                color: #5D75F7;
                                &.fa-circle {
                                    font-size: 8px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
