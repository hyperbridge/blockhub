<template>
    <c-layout navigationKey="account">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <ul class="nav nav-tabs justify-content-between">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Overview</a>
                            </li>
                        </ul>
                        <div class="filter-line">
                            <div class="filter-line__search">
                                <input type="text" class="form-control" placeholder="Term Search">
                            </div>
                            <div class="filter-line__filter">
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
                                <a href="#" class="btn btn-sm btn-danger text-uppercase font-weight-bold">clear <i class="fas fa-times"></i></a>
                                <a href="#" class="btn btn-sm btn-info text-uppercase font-weight-bold">more filters</a>
                            </div>
                            <div class="filter-line__sorting">
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
                                <a href="#" class="btn btn-link">
                                    <i class="fas fa-sort-numeric-up"></i>
                                </a>
                                <a href="#" class="btn btn-link">
                                    <i class="fas fa-sort-amount-up"></i>
                                </a>
                            </div>
                        </div>
                        <div class="wallets-list">
                            <div class="wallet-item" v-for="(wallet, index) in wallets" :key="index">
                                <c-button status="none" class="wallet-item__info" :to='`/wallet/${wallet.id}`'>
                                    <div class="wallet-item__head">
                                        <div class="wallet-item__name" :class="{ preferred: wallet.preferredSwitcher }">
                                            <i class="fab fa-bitcoin"></i>
                                            {{ wallet.name }}
                                        </div>
                                        <div class="wallet-item__count">
                                            <span>
                                                {{ wallet.shortName }}
                                            </span>
                                            <span>
                                                {{ wallet.count }}
                                            </span>
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
                                        <div class="wallet-item__wallet_address" @click="copyWalletNumber(wallet.walletNumber)">
                                            <span>{{ wallet.walletNumber }}</span>
                                            <i class="fas fa-copy"></i>
                                        </div>
                                    </div>
                                </c-button>
                                <div class="wallet-item__footer">
                                    <div class="wallet-item__preferredSwitcher">
                                        <label class="switch switch-sm">
                                            <input type="checkbox" name="preeferred" checked="" v-model="wallet.preferredSwitcher" value="0">
                                            <span>Preferred</span>
                                        </label>
                                    </div>
                                    <div class="wallet-item__action">
                                        <a class="btn btn-sm btn-info">
                                            Send
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!--Add New Wallet Block Empty div-->
                            <div class="wallet-item empty-item new-wallet" @click="addNewWallet" v-if="!set_new_wallets">
                                <div class="empty-overlay">
                                    <i class="fas fa-plus"></i>
                                    New Wallet
                                </div>
                            </div>

                            <!--Add New Wallet Block Empty Model-->
                            <div class="wallet-item" v-if="set_new_wallets">

                                <!--Search block(currency list) off-->
                                <div class="wallet-item__info" v-if="!search_blk">
                                    <div class="wallet-item__head" v-if="set_new_wallets_step_1">
                                        <div class="wallet-item__name">
                                            <a href="#" class="btn btn-sm wallet-item__toggle-search" @click="showCurrencyList">
                                                <i class="fas fa-angle-down"></i>
                                            </a>
                                            {{ new_wallets.name }}
                                        </div>
                                        <div class="wallet-item__count">
                                            <span>
                                                {{ new_wallets.shortName }}
                                            </span>
                                            <span>
                                                {{ new_wallets.count }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="wallet-item__head" v-if="set_new_wallets_step_2">
                                        <div class="wallet-item__name" :class="{ preferred: new_wallets.preferredSwitcher }">
                                            <i class="fab fa-bitcoin"></i>
                                            {{ new_wallets.name }}
                                        </div>
                                        <div class="wallet-item__count">
                                            <span>
                                                {{ new_wallets.shortName }}
                                            </span>
                                            <span>
                                                {{ new_wallets.count }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="wallet-item__body">
                                        <div class="wallet-item__graph">
                                        </div>
                                        <div class="wallet-item__history">
                                            <ul>
                                                <li v-for="(item, index) in new_wallets.history" :class="item.direction" :key="index">
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
                                        <div class="wallet-item__wallet_address">
                                            <span id="new_walletNumber">{{ new_wallets.walletNumber }}</span>
                                            <i class="fas fa-redo" style="color: #c25a5c" v-if="set_new_wallets_step_1" @click="generateNewWalletNumber"></i>
                                            <i class="fas fa-copy" v-else  @click="copyWalletNumber(new_wallets.walletNumber)"></i>
                                        </div>
                                    </div>
                                </div>

                                <!--Search block(currency list) on-->
                                <div class="wallet-item__search-block" v-if="search_blk">
                                    <div class="input-group input-group-sm">
                                        <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <i class="fas fa-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li v-for="(currency, index) in currency_choices" :key="index" @click="choseCurrency(currency.name, currency.shortName)">
                                            <div class="float-left">
                                                <i class="fab fa-btc"></i>
                                                {{ currency.shortName }}
                                            </div>
                                            <div class="float-right">
                                                {{ currency.name }}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="wallet-item__footer">
                                    <div class="wallet-item__preferredSwitcher">
                                        <label class="switch switch-sm">
                                            <input type="checkbox" name="preeferred" checked="" v-model="new_wallets.preferredSwitcher" value="0">
                                            <span>Preferred</span>
                                        </label>
                                    </div>
                                    <div class="wallet-item__action" v-if="set_new_wallets_step_1">
                                        <a class="btn btn-sm btn-success" @click="nextStep">
                                            Done
                                            <i class="fas fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="wallet-item__action" v-else>
                                        <a class="btn btn-sm btn-info">
                                            <i class="fas fa-list ml-0"></i>
                                        </a>
                                        <a class="btn btn-sm btn-info">
                                            <i class="fas fa-cog ml-0"></i>
                                        </a>
                                        <a class="btn btn-sm btn-info">
                                            Send
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
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
        data: function(){
          return{
              new_wallets:{
                  "id": "",
                  "name": "--",
                  "icon": "",
                  "shortName": "--",
                  "count": "--",
                  "history": [
                      {
                          "time": "00:00",
                          "percent": "0.00",
                          "direction": "up"
                      },
                      {
                          "time": "00:00",
                          "percent": "0.00",
                          "direction": "up"
                      },
                      {
                          "time": "00:00",
                          "percent": "0.00",
                          "direction": "up"
                      }
                  ],
                  "walletNumber": "xxxxxxxxxxxxxxxxxxxx",
                  "preferredSwitcher": true
              },
              set_new_wallets: false,
              set_new_wallets_step_1: false,
              set_new_wallets_step_2: false,
              search_blk: false,
              currency_choices:[
                  {
                      name: 'Bitcoin',
                      shortName: 'BTC'
                  },
                  {
                      name: 'Ethereum',
                      shortName: 'ETH'
                  },
                  {
                      name: 'Ripple',
                      shortName: 'XRP'
                  },
                  {
                      name: 'Cardano',
                      shortName: 'CDA'
                  },
                  {
                      name: 'Thron',
                      shortName: 'TRX'
                  },
                  {
                      name: 'Bitcoin Cash',
                      shortName: 'BCH'
                  }
              ]
          }
        },
        components: {
            'c-layout': () => import('~/components/front-layout').then(m => m.default || m)
        },
        computed: {
            wallets() {
                return this.$store.state.application.wallets
            }
        },
        methods: {
            copyWalletNumber: function (number) {
                alert('You have copy wallet number - ' + number )
            },
            addNewWallet: function () {
                this.set_new_wallets = true;
                this.set_new_wallets_step_1 = true;
            },
            nextStep: function () {
                this.set_new_wallets_step_1 = false;
                this.set_new_wallets_step_2 = true;
            },
            generateNewWalletNumber: function () {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < 25; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                this.new_wallets['walletNumber'] = text;
            },
            showCurrencyList: function () {
                this.search_blk = true;
            },
            choseCurrency: function (name, shortName) {
                this.search_blk = false;
                this.new_wallets['name'] = name;
                this.new_wallets['shortName'] = shortName;
                this.generateNewWalletNumber();
            }
        }
    }
</script>


<style lang="scss" scoped>
    .filter-line {
        display: inline-block;
        width: 100%;
        float: left;
        margin: 15px 0 25px;
    }
    .filter-line__search,
    .filter-line__filter,
    .filter-line__sorting {
        display: inline-block;
        float: left;
        line-height: 30px;
    }
    .filter-line__search,
    .filter-line__sorting {
        width: 26%;
    }
    .filter-line__filter {
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
    .filter-line__search {
        input {
            color: rgba(255, 255, 255, .7);
            border: 1px solid rgba(255, 255, 255, .5);
            width: 70%;
            line-height: 30px;
            padding: 0 10px;
        }
    }
    .filter-line__sorting {
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
        flex-wrap: wrap;
        width: 100%;
    }

    .wallet-item {
        width: 31%;
        display: inline-block;
        margin: 0 1% 45px;
        background: rgba(0, 0, 0, .23);
        border: 1px solid rgba(70, 70, 70, 0.5);
        padding: 10px;
        border-radius: 5px;
        color: #fff;
        position: relative;
        min-height: 162px;
        &.empty-item{
            position: relative;
            overflow: hidden;
            height: 162px!important;
            .empty-overlay{
                content: "\f067";
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                line-height: 40px;
                top: calc(50% - 20px);
                left: 0;
                right: 0;
                text-align: center;
                i{
                    color: #6d87ff;
                    font-size: 30px;
                    margin-right: 10px;
                }
            }
        }
        .wallet-item__footer{
            position: absolute;
            left: 0;
            right: 0;
            padding: 0 10px;
            display: none;
            bottom: 20px;
            height: 22px;
        }
        &:not(.empty-item):hover{
            padding-bottom: 35px;
            margin-bottom: 10px;
            .wallet-item__footer{
                display: inline-block;
            }
        }
        &.new-wallet {
            cursor: pointer;
        }
    }
    .wallet-item__info {
        border-radius: 5px;
        background: #3d3f5a;
        padding: 10px;
        overflow: hidden;
        display: block;
        text-decoration: none;
        color: #fff;
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
        width: calc(100% - 105px);
        text-align: left;
        i {
            font-size: 20px;
            margin-right: 5px;
            vertical-align: middle;
        }
        &.preferred{
            i{
                color: #7cc27d;
            }
        }
    }
    .wallet-item__count {
        text-align: right;
        font-size: 16px;
        font-weight: normal;
        width: 100px;
        display: flex;
        justify-content: space-between;
    }
    .wallet-item__history {
        display: inline-block;
        float: right;
        width: 100px;
        ul {
            padding: 0;
            li {
                list-style: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: right;
                margin: 0;
                float: left;
                overflow: hidden;
                width: 100%;
                font-size: 13px;
                span {
                    display: inline-block;
                    width: auto;
                    float: unset!important;
                }
                .icon{
                    margin: 0;
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

    .wallet-item__preferredSwitcher{
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
            text-transform: uppercase;
            i{
                margin-left: 3px;
            }
        }
    }
    .wallet-item__toggle-search{
        padding: 0px 5px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        background: rgba(0, 0, 0, .2);
        border: 1px solid rgba(0, 0, 0, .5);
        margin-right: 5px;
        i{
            margin: 0;
            font-size: 14px;
        }
    }
    .wallet-item__search-block{
        border-radius: 5px;
        background: #3d3f5a;
        padding: 10px;
        overflow: hidden;
        display: block;
        text-decoration: none;
        color: #fff;
        width: 100%;
        height: 140px;
        .input-group {
            background: rgba(37, 38, 59, .1);
            border: 1px solid rgba(37, 38, 59, .8);
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
                &:active,
                &:focus {
                    border: unset;
                    box-shadow: none;
                }
            }
        }
        ul{
            padding: 0;
            margin: 0;
            height: calc( 100% - 40px );
            overflow-y: auto;
            li{
                list-style: none;
                display: block;
                padding: 2px 4px;
                overflow: hidden;
                div{
                    display: inline-block;
                    i{
                        width: 15px;
                    }
                }
                &:hover{
                    background: rgba(0, 0, 0, .1);
                    cursor: pointer;
                }
            }
        }
    }

</style>
