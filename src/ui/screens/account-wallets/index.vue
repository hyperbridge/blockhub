<template>
    <c-layout navigationKey="account-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <ul class="nav nav-tabs justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Overview</a>
                            </li>
                        </ul>
                        <div class="action-wallets">
                            <div class="action-wallets__search">
                                <input type="text" class="form-control" placeholder="Term Search">
                            </div>
                            <div class="action-wallets__filter">
                                Filter by:
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="filtering_type"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Type
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <a href="#3" class="btn btn-clear">clear <i class="fas fa-times"></i></a>
                                <a href="#3" class="btn btn-link">more filters</a>
                            </div>
                            <div class="action-wallets__sorting">
                                Sort by:
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="sorting_value"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Value
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <a href="#3" class="btn btn-link">
                                    <i class="fas fa-sort-numeric-up"></i>
                                </a>
                                <a href="#3" class="btn btn-link">
                                    <i class="fas fa-sort-amount-up"></i>
                                </a>
                            </div>
                        </div>
                        <div class="wallets-list">
                            <div class="wallet-item" v-for="(wallet, index) in wallets" :key="index">
                                <a class="wallet-item__info" :href='`/#/wallet/${wallet.id}`'>
                                    <div class="wallet-item__head">
                                        <div class="wallet-item__name">
                                            <i class="fab fa-bitcoin"></i>
                                            {{ wallet.name }}
                                        </div>
                                        <div class="wallet-item__count">
                                            {{ wallet.short_name }} {{ wallet.count }}
                                        </div>
                                    </div>
                                    <div class="wallet-item__body">
                                        <div class="wallet-item__graph">
                                        </div>
                                        <div class="wallet-item__history">
                                            <ul>
                                                <li v-for="(item, index) in wallet.history" :class="item.direction" :key="index">
                                                    <span class="time">
                                                        {{ item.time }}
                                                    </span>
                                                    <span class="percent">
                                                        {{ item.percent }}%
                                                    </span>
                                                    <span class="icon">
                                                        <i class="fas fa-arrow-up" v-if="item.direction === 'up'"></i>
                                                        <i class="fas fa-arrow-down" v-else></i>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="wallet-item__wallet_address" @click="copyWalletNumber(wallet.wallet_number)">
                                            <span>{{ wallet.wallet_number }}</span>
                                            <i class="fas fa-copy"></i>
                                        </div>
                                    </div>
                                </a>
                                <div class="wallet-item__footer">
                                    <div class="wallet-item__preferred_switcher">
                                        <label class="switch switch-sm">
                                            <input type="checkbox" name="preeferred" checked="" v-model="wallet.preferred_switcher" value="0">
                                            <span>Preferred</span>
                                        </label>
                                    </div>
                                    <div class="wallet-item__action">
                                        <a class="btn btn-light btn--icon btn--icon-right">
                                            SEND
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
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
        name: 'wallets',
        components: {
            'c-layout': () => import('@/ui/layouts/default')
        },
        computed: {
            // wallets() {
            //   return this.$store.state.network.wallets
            // }
        },
        data: () => ({
            wallets: [
                {
                    id: '1',
                    name: 'Bitcoin',
                    icon: '',
                    short_name: 'BTC',
                    count: '0.00827',
                    history:[
                        {
                            time: '14:00',
                            percent: '0.93',
                            direction: 'up'
                        },
                        {
                            time: '14:30',
                            percent: '0.53',
                            direction: 'down'
                        },
                        {
                            time: '15:00',
                            percent: '0.67',
                            direction: 'up'
                        }
                    ],
                    wallet_number: 'QMdp32odsoN45insPS91ninZPEld9',
                    preferred_switcher: true
                },
                {
                    id: '2',
                    name: 'Ethereum',
                    icon: '',
                    short_name: 'ETH',
                    count: '0.00015',
                    history:[
                        {
                            time: '11:00',
                            percent: '0.03',
                            direction: 'up'
                        },
                        {
                            time: '12:30',
                            percent: '0.027',
                            direction: 'down'
                        },
                        {
                            time: '13:00',
                            percent: '0.031',
                            direction: 'up'
                        }
                    ],
                    wallet_number: 'kKJV798BIUFvu6ibkvVV7',
                    preferred_switcher: false
                },
                {
                    id: '3',
                    name: 'Viacoin',
                    icon: '',
                    short_name: 'VIA',
                    count: '0.00045',
                    history:[
                        {
                            time: '11:00',
                            percent: '0.03',
                            direction: 'up'
                        },
                        {
                            time: '12:30',
                            percent: '0.027',
                            direction: 'down'
                        },
                        {
                            time: '13:00',
                            percent: '0.031',
                            direction: 'up'
                        }
                    ],
                    wallet_number: 'kKJV798BIUFvu6ibkvVV7',
                    preferred_switcher: false
                },
                {
                    id: '4',
                    name: 'Monero',
                    icon: '',
                    short_name: 'XMR',
                    count: '0.00045',
                    history:[
                        {
                            time: '11:00',
                            percent: '0.03',
                            direction: 'up'
                        },
                        {
                            time: '12:30',
                            percent: '0.027',
                            direction: 'down'
                        },
                        {
                            time: '13:00',
                            percent: '0.031',
                            direction: 'up'
                        }
                    ],
                    wallet_number: 'kKJV798BIUFvu6ibkvVV7',
                    preferred_switcher: true
                }
            ]
        }),
        created() {
        },
        methods: {
            copyWalletNumber: function (number) {
                alert('You have copy wallet number - ' + number )
            }
        }
    }
</script>

<style lang="scss" scoped>
    .action-wallets {
        display: inline-block;
        width: 100%;
        float: left;
        margin: 15px 0 25px;
    }
    .action-wallets__search,
    .action-wallets__filter,
    .action-wallets__sorting {
        display: inline-block;
        float: left;
        line-height: 30px;
    }
    .action-wallets__search,
    .action-wallets__sorting {
        width: 26%;
    }
    .action-wallets__filter {
        width: 48%;
        border-right: 2px solid rgba(255, 255, 255, .1);
        border-left: 2px solid rgba(255, 255, 255, .1);
        text-align: center;
        .dropdown {
            display: inline-block;
            margin: 0 15px 0 5px;
            .dropdown-toggle {
                background: rgba(0, 0, 0, .16);
                color: #fff;
                padding: 4px 10px;
                border: 1px solid rgba(255, 255, 255, .5);
            }
        }
        .btn-clear {
            background: #fff;
            color: #000;
            padding: 4px 10px;
            text-transform: uppercase;
            font-weight: bold;
            i {
                margin-left: 5px;
            }
        }
        .btn-link {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            padding: 4px 10px;
        }
    }
    .action-wallets__search {
        input {
            color: rgba(255, 255, 255, .7);
            border: 1px solid rgba(255, 255, 255, .5);
            width: 70%;
            line-height: 30px;
            padding: 0 10px;
        }
    }
    .action-wallets__sorting {
        text-align: right;
        .dropdown {
            display: inline-block;
            margin: 0 15px 0 5px;
            .dropdown-toggle {
                background: rgba(0, 0, 0, .16);
                color: #fff;
                padding: 4px 10px;
                border: 1px solid rgba(255, 255, 255, .5);
            }
        }
        .btn-link {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            padding: 2px;
            font-size: 16px;

        }
    }

    .wallets-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .wallet-item {
        width: 32%;
        display: inline-block;
        margin-bottom: 2%;
        background: rgba(0, 0, 0, .23);
        border: 1px solid rgba(70, 70, 70, 0.5);
        padding: 10px;
        border-radius: 5px;
        color: #fff;
    }
    .wallet-item__info {
        border-radius: 5px;
        background: rgba(255, 255, 255, .2);
        padding: 10px;
        overflow: hidden;
        display: block;
        text-decoration: none;
    }
    .wallet-item__head {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
        margin-bottom: 10px;
    }
    .wallet-item__name {
        width: calc(100% - 95px);
        text-align: left;
        i {
            font-size: 20px;
            margin-right: 5px;
            vertical-align: middle;
        }
    }
    .wallet-item__count {
        text-align: right;
        font-size: 16px;
        font-weight: normal;
        width: 90px;
    }
    .wallet-item__history {
        display: inline-block;
        float: right;
        width: 88px;
        ul {
            padding: 0;
            li {
                list-style: none;
                display: block;
                text-align: right;
                margin: 0;
                float: left;
                overflow: hidden;
                width: 100%;
                font-size: 13px;
                span {
                    &:first-child {
                        float: left;
                    }
                }
                &.up {
                    color: #7cc27d;
                }
                &.down {
                    color: #c25a5c;
                }
            }
        }
    }
    .wallet-item__wallet_address {
        display: inline-block;
        width: 100%;
        float: left;
        overflow: hidden;
        margin-top: 10px;
        font-size: 14px;
        line-height: 18px;
        cursor: pointer;
        span {
            width: 90%;
            overflow: hidden;
            display: inline-block;
            float: left;
            text-overflow: ellipsis;
        }
        i {
            float: right;
        }
    }

    .wallet-item__preferred_switcher{
        display: inline-block;
        float: left;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        .switch{
            margin-bottom: 0;
            margin-right: 10px;
            span{
                text-indent: 45px;
            }
        }
    }
    .wallet-item__action{
        float: right;
        display: inline-block;
        margin-top: 8px;
        .btn{
            padding: 0px 5px;
            color: #fff;
            font-weight: bold;
            background: #6d87ff;
            i{
                margin-left: 5px;
            }
            &:hover{
                background: #5a71d4;
            }
        }
    }
</style>
