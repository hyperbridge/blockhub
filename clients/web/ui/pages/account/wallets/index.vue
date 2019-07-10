<template>
    <c-layout navigationKey="account">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <ul class="nav nav-tabs justify-content-between">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                href="#">Overview</a>
                        </li>
                    </ul>
                    <div class="filter-line">
                        <div class="filter-line__search">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Term Search">
                        </div>
                        <div class="filter-line__filter">
                            Filter by:
                            <div class="dropdown">
                                <a
                                    id="filtering_type"
                                    class="btn dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Type
                                </a>
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink">
                                    <a
                                        class="dropdown-item"
                                        href="#">Action</a>
                                    <a
                                        class="dropdown-item"
                                        href="#">Another action</a>
                                    <a
                                        class="dropdown-item"
                                        href="#">Something else here</a>
                                </div>
                            </div>
                            <a
                                href="#"
                                class="btn btn-sm btn-danger text-uppercase font-weight-bold">clear <i class="fas fa-times" /></a>
                            <a
                                href="#"
                                class="btn btn-sm btn-info text-uppercase font-weight-bold">more filters</a>
                        </div>
                        <div class="filter-line__sorting">
                            Sort by:
                            <div class="dropdown">
                                <a
                                    id="sorting_value"
                                    class="btn dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Value
                                </a>
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink">
                                    <a
                                        class="dropdown-item"
                                        href="#">Action</a>
                                    <a
                                        class="dropdown-item"
                                        href="#">Another action</a>
                                    <a
                                        class="dropdown-item"
                                        href="#">Something else here</a>
                                </div>
                            </div>
                            <a
                                href="#"
                                class="btn btn-link">
                                <i class="fas fa-sort-numeric-up" />
                            </a>
                            <a
                                href="#"
                                class="btn btn-link">
                                <i class="fas fa-sort-amount-up" />
                            </a>
                        </div>
                    </div>
                    <div class="wallets-list">
                        <div
                            v-for="(wallet, index) in wallets"
                            :key="index"
                            class="wallet-item">
                            <c-button
                                status="none"
                                class="wallet-item__info"
                                :to="`/wallet/${wallet.id}`">
                                <div class="wallet-item__head">
                                    <div
                                        class="wallet-item__name"
                                        :class="{ preferred: wallet.preferredSwitcher }">
                                        <i class="fab fa-bitcoin" />
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
                                    <div class="wallet-item__graph" />
                                    <div class="wallet-item__history">
                                        <ul>
                                            <li
                                                v-for="(item, index) in wallet.history"
                                                :key="index"
                                                :class="item.direction">
                                                <span class="time">
                                                    {{ item.time }}
                                                </span>
                                                <span class="percent">
                                                    {{ item.percent }}%
                                                </span>
                                                <span class="icon">
                                                    <i
                                                        v-if="item.direction === 'up'"
                                                        class="fas fa-arrow-up" />
                                                    <i
                                                        v-else
                                                        class="fas fa-arrow-down" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        class="wallet-item__wallet_address"
                                        @click="copyWalletNumber(wallet.walletNumber)">
                                        <span>{{ wallet.walletNumber }}</span>
                                        <i class="fas fa-copy" />
                                    </div>
                                </div>
                            </c-button>
                            <div class="wallet-item__footer">
                                <div class="wallet-item__preferredSwitcher">
                                    <label class="switch switch-sm">
                                        <input
                                            v-model="wallet.preferredSwitcher"
                                            type="checkbox"
                                            name="preeferred"
                                            checked=""
                                            value="0">
                                        <span>Preferred</span>
                                    </label>
                                </div>
                                <div class="wallet-item__action">
                                    <a class="btn btn-sm btn-info">
                                        Send
                                        <i class="fas fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            v-if="!setNewWallets"
                            class="wallet-item empty-item new-wallet"
                            @click="addNewWallet">
                            <div class="empty-overlay">
                                <i class="fas fa-plus" />
                                New Wallet
                            </div>
                        </div>

                        <div
                            v-if="setNewWallets"
                            class="wallet-item">
                            <div
                                v-if="!searchBlock"
                                class="wallet-item__info">
                                <div
                                    v-if="setNewWalletsStep1"
                                    class="wallet-item__head">
                                    <div class="wallet-item__name">
                                        <a
                                            href="#"
                                            class="btn btn-sm wallet-item__toggle-search"
                                            @click="showCurrencyList">
                                            <i class="fas fa-angle-down" />
                                        </a>
                                        {{ newWallets.name }}
                                    </div>
                                    <div class="wallet-item__count">
                                        <span>
                                            {{ newWallets.shortName }}
                                        </span>
                                        <span>
                                            {{ newWallets.count }}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    v-if="setNewWalletsStep2"
                                    class="wallet-item__head">
                                    <div
                                        class="wallet-item__name"
                                        :class="{ preferred: newWallets.preferredSwitcher }">
                                        <i class="fab fa-bitcoin" />
                                        {{ newWallets.name }}
                                    </div>
                                    <div class="wallet-item__count">
                                        <span>
                                            {{ newWallets.shortName }}
                                        </span>
                                        <span>
                                            {{ newWallets.count }}
                                        </span>
                                    </div>
                                </div>
                                <div class="wallet-item__body">
                                    <div class="wallet-item__graph" />
                                    <div class="wallet-item__history">
                                        <ul>
                                            <li
                                                v-for="(item, index) in newWallets.history"
                                                :key="index"
                                                :class="item.direction">
                                                <span class="time">
                                                    {{ item.time }}
                                                </span>
                                                <span class="percent">
                                                    {{ item.percent }}%
                                                </span>
                                                <span class="icon">
                                                    <i
                                                        v-if="item.direction === 'up'"
                                                        class="fas fa-arrow-up" />
                                                    <i
                                                        v-else
                                                        class="fas fa-arrow-down" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="wallet-item__wallet_address">
                                        <span id="new_walletNumber">{{ newWallets.walletNumber }}</span>
                                        <i
                                            v-if="setNewWalletsStep1"
                                            class="fas fa-redo"
                                            style="color: #c25a5c"
                                            @click="generateNewWalletNumber" />
                                        <i
                                            v-else
                                            class="fas fa-copy"
                                            @click="copyWalletNumber(newWallets.walletNumber)" />
                                    </div>
                                </div>
                            </div>

                            <div
                                v-if="searchBlock"
                                class="wallet-item__search-block">
                                <div class="input-group input-group-sm">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Search"
                                        aria-label="Search">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fas fa-search" />
                                        </span>
                                    </div>
                                </div>
                                <ul>
                                    <li
                                        v-for="(currency, index) in currencyChoices"
                                        :key="index"
                                        @click="choseCurrency(currency.name, currency.shortName)">
                                        <div class="float-left">
                                            <i class="fab fa-btc" />
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
                                        <input
                                            v-model="newWallets.preferredSwitcher"
                                            type="checkbox"
                                            name="preeferred"
                                            checked=""
                                            value="0">
                                        <span>Preferred</span>
                                    </label>
                                </div>
                                <div
                                    v-if="setNewWalletsStep1"
                                    class="wallet-item__action">
                                    <a
                                        class="btn btn-sm btn-success"
                                        @click="nextStep">
                                        Done
                                        <i class="fas fa-check" />
                                    </a>
                                </div>
                                <div
                                    v-else
                                    class="wallet-item__action">
                                    <a class="btn btn-sm btn-info">
                                        <i class="fas fa-list ml-0" />
                                    </a>
                                    <a class="btn btn-sm btn-info">
                                        <i class="fas fa-cog ml-0" />
                                    </a>
                                    <a class="btn btn-sm btn-info">
                                        Send
                                        <i class="fas fa-arrow-right" />
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
    data() {
        return {
            newWallets: {
                'id': '',
                'name': '--',
                'icon': '',
                'shortName': '--',
                'count': '--',
                'history': [
                    {
                        'time': '00:00',
                        'percent': '0.00',
                        'direction': 'up'
                    },
                    {
                        'time': '00:00',
                        'percent': '0.00',
                        'direction': 'up'
                    },
                    {
                        'time': '00:00',
                        'percent': '0.00',
                        'direction': 'up'
                    }
                ],
                'walletNumber': 'xxxxxxxxxxxxxxxxxxxx',
                'preferredSwitcher': true
            },
            setNewWallets: false,
            setNewWalletsStep1: false,
            setNewWalletsStep2: false,
            searchBlock: false,
            currencyChoices: [
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
    computed: {
        wallets() {
            return this.$store.state.application.wallets
        }
    },
    methods: {
        copyWalletNumber(number) {
            alert(`You have copy wallet number - ${number}`)
        },
        addNewWallet() {
            this.setNewWallets = true
            this.setNewWalletsStep1 = true
        },
        nextStep() {
            this.setNewWalletsStep1 = false
            this.setNewWalletsStep2 = true
        },
        generateNewWalletNumber() {
            let text = ''
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i = 0; i < 25; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }
            this.newWallets.walletNumber = text
        },
        showCurrencyList() {
            this.searchBlock = true
        },
        choseCurrency(name, shortName) {
            this.searchBlock = false
            this.newWallets.name = name
            this.newWallets.shortName = shortName
            this.generateNewWalletNumber()
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
