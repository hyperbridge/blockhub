<template>
    <div class="main-block">
        <div class="main-block__item" style="background-image: url('https://ak3.picdn.net/shutterstock/videos/24705143/thumb/1.jpg')">
            <div class="row">
                <div class="col-12 col-lg-7">
                    <h1 class="text-white mb-5">
                        Lorem<br>
                        sit amet
                    </h1>
                    <div class="d-flex flex-column align-items-start">
                        <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                            Sed eget felis ut magna
                        </c-button>
                        <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                            Donec porttitor magna in felis
                        </c-button>
                        <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                            Morbi malesuada
                        </c-button>
                        <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                            Phasellus ut ante eu mi laoreet eleifend
                        </c-button>
                        <c-button status="second-danger" size="md" class="mb-4 mr-auto">
                            Maecenas dui turpis, imperdiet a consequat
                        </c-button>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="coin-stats">
                        <img src="../../../../static/img/icons/token-icon.png" />
                        <div class="h2 font-weight-bold">
                            CoinName
                        </div>
                        Stats
                        <ul>
                            <li>
                                <strong>
                                    Released:
                                </strong>
                                2015
                            </li>
                            <li>
                                <strong>
                                    Ledger:
                                </strong>
                                blockchain
                            </li>
                            <li>
                                <strong>
                                    Architecture:
                                </strong>
                                bitcoin
                            </li>
                            <li>
                                <strong>
                                    Type:
                                </strong>
                                currency
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-block{
        background: url("https://bitcoin-btc.review/Apps/Site/Projects/cryptoreviews/Assets/Other/images/banner-header.png") top center no-repeat #e0e6ea;
        background-size: 100% auto;
        padding: 180px 30px 50px;
        margin: -30px;
    }
    .main-block__item{
        padding: 30px;
        background-color: #fff;
        box-shadow: 0 0 15px rgba(0, 0, 0, .5);
        margin-bottom: 30px;
        border-radius: 4px;
        background-size: cover;
        background-repeat: no-repeat;
        h1,
        .h1{
            font-size: 5.2em;
            font-weight: 600;
        }
    }
    .coin-stats{
        background: #fff;
        padding: 50px 50px 50px 60px;
        border-radius: 0 20px 20px 0;
        display: inline-block;
        width: auto;
        float: right;
        min-width: 300px;
        position: relative;
        img{
            position: absolute;
            width: 60px;
            height: 60px;
            top: 50px;
            left: -30px;
        }
        ul{
            margin-top: 40px;
            padding: 0;
            li{
                list-style: none;
                line-height: 34px;
            }
        }
    }
</style>
