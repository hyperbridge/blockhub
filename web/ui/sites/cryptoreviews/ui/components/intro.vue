<template>
    <div class="container">
        <div class="intro">
            <div class="row">
                <div class="col-lg-7 col-md-12 align-self-center">
                    <h1 class="text-white mb-5">
                        What is <br>
                        <span class="text-orange" style="font-weight: inherit;">{{ name }}?</span>
                    </h1>
                    <div class="d-flex flex-column align-items-start">
                        <c-button href="#history" size="lg" class="mb-4 mr-auto">
                            <strong>History:</strong> how it all began
                        </c-button>
                        <c-button href="#quick" size="lg" class="mb-4 mr-auto">
                            <strong>Quick Links:</strong> find things quickly
                        </c-button>
                        <c-button href="#exchanges" size="lg" class="mb-4 mr-auto">
                            <strong>Exchanges:</strong> where to buy and sell
                        </c-button>
                        <c-button href="#wallets" size="lg" class="mb-4 mr-auto">
                            <strong>Wallets:</strong> how to hold it
                        </c-button>
                        <c-button href="#media" size="lg" class="mb-4 mr-auto">
                            <strong>Media &amp; Education Centre:</strong> learn more through videos, books, etc.
                        </c-button>
                        <c-button href="#faq" size="lg" class="mb-4 mr-auto">
                            <strong>FAQ:</strong> frequently asked questions
                        </c-button>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="coin-stats">
                        <div class="coin-stats__icon" v-if="showIcon">
                            <img src="../../../static/img/icons/token-icon.png"/>
                        </div>
                        <div class="h2 font-weight-bold">
                            {{ name }}
                        </div>
                        Stats
                        <ul>
                            <li>
                                <i class="fas fa-info-circle"></i>
                                <strong>
                                    Released:
                                </strong>
                                {{ stats.released }}
                            </li>
                            <li>
                                <i class="fas fa-info-circle"></i>
                                <strong>
                                    Ledger:
                                </strong>
                                {{ stats.ledger }}
                            </li>
                            <li>
                                <i class="fas fa-info-circle"></i>
                                <strong>
                                    Architecture:
                                </strong>
                                {{ stats.architecture }}
                            </li>
                            <li>
                                <i class="fas fa-info-circle"></i>
                                <strong>
                                    Type:
                                </strong>
                                {{ stats.type }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['showIcon', 'name', 'stats']
    }
</script>

<style lang="scss" scoped>

    .intro {
        margin: 13% 0;
        padding: 0 20px;

        .c-button {
            font-weight: normal;

            strong {
                margin-right: 10px;
            }
        }
    }

    .coin-stats {
        background: #fff;
        display: inline-block;
        float: right;
        width: 80%;
        padding: 30px 30px 40px 50px;
        position: relative;
        border-top-right-radius: 20px;
        img {
            width: 100%;
            height: 100%;
            padding: 10px;
        }
        ul {
            margin-top: 40px;
            padding: 0;
            li {
                list-style: none;
                line-height: 34px;
                .fas {
                    color: #f9b707;
                    margin-right: 5px;
                }
            }
        }
    }

    .coin-stats__icon {
        border-radius: 12px;
        background: #f9b707;
        display: inline-block;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        position: absolute;
        top: 30px;
        right: 89%;
        box-shadow: -8px 6px 10px 0px rgba(0, 0, 0, 0.15);
    }
</style>