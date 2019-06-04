<template>
    <c-layout navigationKey="account">
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-tabs margin-bottom-10">
                    <li class="nav-item">
                        <c-button status="none"
                                  class="nav-link"
                                  to="/account/wallets">
                            Overview
                        </c-button>
                    </li>
                    <li class="nav-item">
                        <c-button status="none"
                                  class="nav-link active"
                                  to="/account/transactions">
                            Transactions
                        </c-button>
                    </li>
                </ul>
                <div class="filter-line margin-bottom-50">
                    <div class="filter-line__search">
                        <input type="text"
                               class="form-control"
                               placeholder="Term Search">
                    </div>
                    <div class="filter-line__filter">
                        Filter by:
                        <div class="dropdown">
                            <a id="filtering_type"
                               class="btn dropdown-toggle"
                               href="#"
                               role="button"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false">
                                Type
                            </a>
                            <div class="dropdown-menu"
                                 aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item"
                                   href="#">Action</a>
                                <a class="dropdown-item"
                                   href="#">Another action</a>
                                <a class="dropdown-item"
                                   href="#">Something else here</a>
                            </div>
                        </div>
                        <a href="#"
                           class="btn btn-sm btn-danger">clear <i class="fas fa-times" /></a>
                        <a href="#"
                           class="btn btn-sm btn-info">more filters</a>
                    </div>
                    <div class="filter-line__sorting">
                        Sort by:
                        <div class="dropdown">
                            <a id="sorting_value"
                               class="btn dropdown-toggle"
                               href="#"
                               role="button"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false">
                                Value
                            </a>
                            <div class="dropdown-menu"
                                 aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item"
                                   href="#">Action</a>
                                <a class="dropdown-item"
                                   href="#">Another action</a>
                                <a class="dropdown-item"
                                   href="#">Something else here</a>
                            </div>
                        </div>
                        <a href="#"
                           class="btn btn-link">
                            <i class="fas fa-sort-numeric-up" />
                        </a>
                        <a href="#"
                           class="btn btn-link">
                            <i class="fas fa-sort-amount-up" />
                        </a>
                    </div>
                </div>

                <div class="transaction-list">
                    <div class="transaction-list__item">
                        <div class="date">
                            17 nov
                        </div>
                        <div class="direction up">
                            <i class="fas fa-angle-double-up" />
                        </div>
                        <div class="company">
                            <c-img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Walmart_Spark.svg/963px-Walmart_Spark.svg.png" />
                            Wallmart
                        </div>
                        <div class="purpose">
                            Made a purchase on Online Store
                        </div>
                        <div class="currency">
                            Bitcoin
                        </div>
                        <div class="amount">
                            $ 0.05
                        </div>
                    </div>
                    <div class="transaction-list__item">
                        <div class="date">
                            17 nov
                        </div>
                        <div class="direction down">
                            <i class="fas fa-angle-double-down" />
                        </div>
                        <div class="company">
                            <c-img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Walmart_Spark.svg/963px-Walmart_Spark.svg.png" />
                            Wallmart
                        </div>
                        <div class="purpose">
                            Made a purchase on Online Store
                        </div>
                        <div class="currency">
                            Bitcoin
                        </div>
                        <div class="amount">
                            $ 0.05
                        </div>
                    </div>
                    <div class="transaction-list__item">
                        <div class="date">
                            17 nov
                        </div>
                        <div class="direction up">
                            <i class="fas fa-angle-double-up" />
                        </div>
                        <div class="company">
                            <c-img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Walmart_Spark.svg/963px-Walmart_Spark.svg.png" />
                            Wallmart
                        </div>
                        <div class="purpose">
                            Made a purchase on Online Store
                        </div>
                        <div class="currency">
                            Bitcoin
                        </div>
                        <div class="amount">
                            $ 0.05
                        </div>
                    </div>
                    <div class="transaction-list__item">
                        <div class="date">
                            17 nov
                        </div>
                        <div class="direction up">
                            <i class="fas fa-angle-double-up" />
                        </div>
                        <div class="company">
                            <c-img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Walmart_Spark.svg/963px-Walmart_Spark.svg.png" />
                            Wallmart
                        </div>
                        <div class="purpose">
                            Made a purchase on Online Store
                        </div>
                        <div class="currency">
                            Bitcoin
                        </div>
                        <div class="amount">
                            $ 0.05
                        </div>
                    </div>
                    <div class="transaction-list__item">
                        <div class="date">
                            17 nov
                        </div>
                        <div class="direction up">
                            <i class="fas fa-angle-double-up" />
                        </div>
                        <div class="company">
                            <c-img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Walmart_Spark.svg/963px-Walmart_Spark.svg.png" />
                            Wallmart
                        </div>
                        <div class="purpose">
                            Made a purchase on Online Store
                        </div>
                        <div class="currency">
                            Bitcoin
                        </div>
                        <div class="amount">
                            $ 0.05
                        </div>
                    </div>
                    <div class="transaction-list__item">
                        <div class="date">
                            17 nov
                        </div>
                        <div class="direction up">
                            <i class="fas fa-angle-double-up" />
                        </div>
                        <div class="company">
                            <c-img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Walmart_Spark.svg/963px-Walmart_Spark.svg.png" />
                            Wallmart
                        </div>
                        <div class="purpose">
                            Made a purchase on Online Store
                        </div>
                        <div class="currency">
                            Bitcoin
                        </div>
                        <div class="amount">
                            $ 0.05
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
    },
    props: ['id'],
    data() {
        return {
            msg: ''
        }
    },
    created() {
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
                border: 1px solid rgba(0, 0, 0, .5);
            }
        }
        .btn {
            text-transform: uppercase;
            font-weight: bold;
        }
    }
    .filter-line__search {
        input {
            color: rgba(255, 255, 255, .7);
            border: 1px solid rgba(0, 0, 0, .3);
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
                border: 1px solid rgba(0, 0, 0, .5);
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

    .transaction-list{
        display: inline-block;
        width: 100%;
    }
    .transaction-list__item{
        display: flex;
        width: 100%;
        padding: 8px 10px;
        border-radius: 5px;
        background: #1C2032;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        font-size: 14px;
        margin-bottom: 15px;
        .date{
            width: 30px;
            text-align: center;
            font-weight: bold;
            line-height: 14px;
            text-transform: uppercase;
        }
        .direction{
            width: 80px;
            text-align: center;
            &.up{
                color: #F75D5D;
            }
            &.down{
                color: #43C981;
            }
        }
        .company{
            width: 160px;
            font-weight: bold;
            img{
                height: 25px;
                width: auto;
                margin-right: 10px;
            }
        }
        .purpose{
            width: calc( 100% - 450px )
        }
        .currency{
            width: 100px;
            text-align: center;
            font-weight: bold;
        }
        .amount{
            width: 80px;
            text-align: left;
        }
    }
</style>
