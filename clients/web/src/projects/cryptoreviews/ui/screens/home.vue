<template>
    <c-default-layout>
        <div class="col-12">
            <!-- <div id="intro" class="container">
                <div class="banner-text">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-5 col-md-12">
                            <div class="banner-form">
                                <div class="form-icon background-gradient-3"><img class="img-fluid" src="https://bitcoin-btc.review/Apps/Site/Projects/cryptoreviews/Assets/Other/images/icon.png" alt="#"></div>
                                <h2 class="tw-6">
                                    Bitcoin <small>Stats</small>
                                </h2>
                                <p></p>
                                <ul class="listing-hand mt-15 tw-5">
                                    <li class="mt-20" style="width:100%">
                                        <strong>Released:</strong> 2009
                                    </li>
                                    <li class="mt-20" style="width:100%">
                                        <strong>Ledger:</strong> blockchain
                                    </li>
                                    <li class="mt-20" style="width:100%">
                                        <strong>Architecture:</strong> bitcoin
                                    </li>
                                    <li class="mt-20" style="width:100%">
                                        <strong>Type:</strong> currency
                                    </li>
                                </ul>
                                <br><a hidden="" href="#media" class="button dark mt-10">Media Centre</a><a hidden="" href="#education" class="button dark mt-10">Education Centre</a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 align-self-center">
                            <h1 class="font-white tw-6 mb-10">
                                What is 
                                <span class="font-yellow">
                                    Bitcoin ?
                                </span>
                            </h1>
                            <a href="/#history" class="button white mt-15"><strong>History:</strong> how it all began</a><br><a href="/#quick" class="button white mt-15"><strong>Quick Links:</strong> find things quickly</a><br><a href="/#exchanges" class="button white mt-15"><strong>Exchanges:</strong> where to buy and sell</a><br><a href="/#wallets" class="button white mt-15"><strong>Wallets:</strong> how to hold it</a><br><a href="/#media" class="button white mt-15"><strong>Media &amp; Education Centre:</strong> learn more through videos, books, etc.</a><br><a href="/#faq" class="button white mt-15"><strong>FAQ:</strong> frequently asked questions</a>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="section section--main">
                <div class="container">
                    <div class="about">
                        <div class="row">
                            <div class="col-lg-7 col-md-12 align-self-center">
                                <h1 class="text-white mb-5">
                                    What is <br>
                                    <span class="text-orange" style="font-weight: inherit;">{{ data.name }}?</span>
                                </h1>
                                <div class="d-flex flex-column align-items-start">
                                    <c-button to="#/history" size="lg" class="mb-4 mr-auto">
                                        <strong>History:</strong> how it all began
                                    </c-button>
                                    <c-button href="#/quick" size="lg" class="mb-4 mr-auto">
                                        <strong>Quick Links:</strong> find things quickly
                                    </c-button>
                                    <c-button href="#/exchanges" size="lg" class="mb-4 mr-auto">
                                        <strong>Exchanges:</strong> where to buy and sell
                                    </c-button>
                                    <c-button href="#/wallets" size="lg" class="mb-4 mr-auto">
                                        <strong>Wallets:</strong> how to hold it
                                    </c-button>
                                    <c-button href="#/media" size="lg" class="mb-4 mr-auto">
                                        <strong>Media &amp; Education Centre:</strong> learn more through videos, books, etc.
                                    </c-button>
                                    <c-button href="#/faq" size="lg" class="mb-4 mr-auto">
                                        <strong>FAQ:</strong> frequently asked questions
                                    </c-button>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-12">
                                <div class="coin-stats">
                                    <div class="coin-stats__icon" v-if="showIcon">
                                        <img src="../../../../../static/img/icons/token-icon.png"/>
                                    </div>
                                    <div class="h2 font-weight-bold">
                                        {{ data.name }}
                                    </div>
                                    Stats
                                    <ul>
                                        <li>
                                            <i class="fas fa-info-circle"></i>
                                            <strong>
                                                Released:
                                            </strong>
                                            {{ data.highlight.stats.released }}
                                        </li>
                                        <li>
                                            <i class="fas fa-info-circle"></i>
                                            <strong>
                                                Ledger:
                                            </strong>
                                            {{ data.highlight.stats.ledger }}
                                        </li>
                                        <li>
                                            <i class="fas fa-info-circle"></i>
                                            <strong>
                                                Architecture:
                                            </strong>
                                            {{ data.highlight.stats.architecture }}
                                        </li>
                                        <li>
                                            <i class="fas fa-info-circle"></i>
                                            <strong>
                                                Type:
                                            </strong>
                                            {{ data.highlight.stats.type }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="price-silder">
                    <div class="price-title">
                        <h6>
                            <img class="price-main-img" src="https://bitcoin-btc.review/Apps/Site/Projects/cryptoreviews/Assets/Other/images/rbo-logo-with-title.png" alt=""><br>
                            <div class="price-main-title">Review Network</div>
                        </h6>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="owl-carousel owl-theme owl-loaded" data-nav-dots="false" data-nav-arrow="false" data-items="6" data-sm-items="4" data-lg-items="6" data-md-items="5" data-autoplay="true" style="margin-top:10px">
                                <div class="owl-stage-outer">
                                    <div class="owl-stage" style="transform: translate3d(-2400px, 0px, 0px); transition: all 0.25s ease 0s; width: 3800px;">
                                        <div class="owl-item cloned" style="width: 170px; margin-right: 30px;">
                                            <div class="item">
                                            <div class="media">
                                                <div class="media-body"><span class="font-white "></span></div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="owl-item cloned" style="width: 170px; margin-right: 30px;">
                                            <div class="item">
                                            <a class="media" href="https://readyblock.one/review/btc">
                                                <img class="mr-2" src="https://bitcoin-btc.review/Apps/Site/Core/Assets/Tokens/btc.png" style="width:40px">
                                                <div class="media-body">
                                                    <span class="font-white ">
                                                        <small>
                                                        RANK 1
                                                        </small>
                                                        Bitcoin
                                                    </span>
                                                </div>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-controls">
                                    <div class="owl-nav">
                                        <div class="owl-prev" style="display: none;"><i class="ion-ios-arrow-left"></i></div>
                                        <div class="owl-next" style="display: none;"><i class="ion-ios-arrow-right"></i></div>
                                    </div>
                                    <div class="owl-dots" style="display: none;"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="price-silder">
                    <div class="row">
                        <div class="col-12 col-lg-3">
                            <img src="https://via.placeholder.com/240x60" class="img-fluid"/>
                        </div>
                        <div class="col-12 col-lg-9">
                            <c-swiper :options="sliderOptions">
                                <c-slide v-for="i in 12" class="text-center">
                                    <img src="https://via.placeholder.com/100x60" class="img-fluid"/>
                                </c-slide>
                            </c-swiper>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="section section--overview">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-8">
                            <div class="heading-title mb-0">
                                <h3 class="title tw-5 mb-20"><a href="#history">History</a></h3>
                                <p class="mb-30 text-center" v-html="data.history.content">
                                    {{ data.history.content }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="nav nav-tabs mb-4 mt-4" id="myTab" role="tablist">
                                <li class="nav-item mr-10"><a class="nav-link active" id="eventone-tab" data-toggle="tab" href="#eventone" role="tab" aria-controls="eventone" aria-selected="true">2008-2009</a></li>
                                <li class="nav-item mr-10"><a class="nav-link" id="eventwo-tab" data-toggle="tab" href="#eventwo" role="tab" aria-controls="eventwo" aria-selected="false">2010-2012</a></li>
                                <li class="nav-item mr-10"><a class="nav-link" id="eventhree-tab" data-toggle="tab" href="#eventhree" role="tab" aria-controls="eventhree" aria-selected="false">2013</a></li>
                                <li class="nav-item mr-10"><a class="nav-link" id="eventfour-tab" data-toggle="tab" href="#eventfour" role="tab" aria-controls="eventfour" aria-selected="false">2014-2016</a></li>
                                <li class="nav-item mr-10"><a class="nav-link" id="evenfive-tab" data-toggle="tab" href="#evenfive" role="tab" aria-controls="evenfive" aria-selected="false">2017</a></li>
                                <li class="nav-item mr-10"><a class="nav-link" id="evensix-tab" data-toggle="tab" href="#evensix" role="tab" aria-controls="evensix" aria-selected="false">2018</a></li>
                            </ul>
                            <div class="tab-content mt-30" id="myTabContent">
                                <div class="tab-pane fade show active" id="eventone" role="tabpanel" aria-labelledby="eventone-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <h3>2008: The Year It All Began</h3>
                                            <br>
                                            <p><strong>August 2008</strong><br>Neil Kin, Vladimir Oksman and Charles Bry apply for an encryption patent application. Not only did they deny any connection to Satoshi Nakamoto, the alleged mastermind behind Bitcoin, but they also registered the site Bitcoin.org in the same month itself, buying the domain name anonymously over anonymousspeech.com</p>
                                            <br>
                                            <p><strong>October 2008</strong><br>Despite Kin, Oksman and Bry trying to sabotage Bitcoin, Nakamoto went ahead to release his white paper which depicted his idea for a purely peer-to peer version of electronic cash. He provided the basic fundamental solution to the problem of virtual money being copied, giving electronic cash like Bitcoin the indispensable foundation to grow legitimately.</p>
                                            <br><br>
                                            <h3>2009: The Rise of Mining</h3>
                                            <br>
                                            <p><strong>January 2009</strong><br>The initial mining of Bitcoins began with the first block â€˜Genesisâ€™ being launched. Later in the month, the first transaction took place between Satoshi and Hal Finney who is a developer and a cryptographic artist.</p>
                                            <br>
                                            <p><strong>October 2009</strong><br>BTC received its traditional equivalent of currencies. The New Liberty Standard established the value as 1$ = 1309 BTC. The equation took into consideration the cost of electricity that was required to run the computer that was used to create the bitcoins in the first place.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="eventwo" role="tabpanel" aria-labelledby="eventwo-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <h3>2010: The Chaos Theory</h3>
                                            <br>
                                            <p><strong>May 2010</strong><br>Laslo Hanyecz, a programmer from Florida sent 10,000 Bitcoins to a volunteer in England who spent about 25$ to order Hanycez a pizza from Papa Johnâ€™s. One of the most major milestones in the history of Bitcoin, that pizza is valued at 1,961,034 pounds today.</p>
                                            <br>
                                            <p><strong>August 2010</strong><br>A vulnerability in how the system verifies the value of Bitcoin is discovered and the organization gets hacked out of 184 Billion Bitcoins. The value of the currency that had risen to $1 in June, drops through the floor.</p>
                                            <br>
                                            <p><strong>October 2010</strong><br>Bitcoin is thrown under the negative spotlight with inter-governmental group publishing a report on money laundering using new payment methods. The report was published right after discovering other vulnerabilities in the blockchain in September after the hack in August.</p>
                                            <br>
                                            <p><strong>November 2010</strong><br>BTC reaches the 1 Mil$ mark. Based on the number of Bitcoins in circulation at the time, the valuation leads to a surge in the BTC value to $0.50/BTC.</p>
                                            <br>
                                            <p><strong>January 2011</strong><br>The Silk Road, an illicit drugs marketplace which used Bitcoin as an untraceable way to buy and sell drugs online, is established.</p>
                                            <br>
                                            <p><strong>February 2011</strong><br>Bitcoin reaches parity with the US Dollar, for the first time in its history. By June 2011, 1 BTC = $31, giving the currency a market cap of almost 206$ million.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="eventhree" role="tabpanel" aria-labelledby="eventhree-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <h3>2013: "Bitcoins Accepted Here"</h3>
                                            <br><br>
                                            <p><strong>June 2013</strong><br>After BTC market capitalization reached an all-time high of $1bn, Bitcoin Forum Founder Allinvain reports having 25,000 BTC stolen from his digital wallet. This marked the first major BTC theft, with a dollar equivalent of $375,000 being stolen at that time.</p>
                                            <br>
                                            <p><strong>August 2013</strong><br>Federal Judge Mazzant backed Bitcoin by saying â€œIt is clear that Bitcoin can be used as money to purchase goods and servicesâ€ in a case against Trendon Shavers, the so-called â€˜Bernie Madoffâ€™ of Bitcoin.</p>
                                            <br>
                                            <p><strong>November 2013</strong><br>With the US Senate holding its first hearing on the digital currency, the price of BTC escalated to 700$ along with Bitcoin receiving the blessing of Ben Bernanke, the chairman of the Federal Reserve.</p>
                                            <br>
                                            <p><strong>December 2013</strong><br>Peopleâ€™s Bank of China derides the usage of Bitcoin as currency be saying it has no â€˜real meaningâ€™ and should not be given the same status as of fiat cash, and subsequently bars Chinese financial institutions from handling BTC transactions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show" id="eventfour" role="tabpanel" aria-labelledby="eventfour-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <h3>2014: Increments in Storage</h3>
                                            <br>
                                            <p><strong>June 2014</strong><br>Bitcoin can no longer be considered as a â€œCurrency for Criminalsâ€ with the US Govt auctioning off more than 29,000 bitcoins seized from The Silk Road. The use of Bitcoin often means that the identity of the user can be established.</p>
                                            <br>
                                            <p><strong>August 2014</strong><br>George Osborne, the Chancellor of Exchequer, along with HM Treasury established their positive outlook on the BTC with a purchase of 20 pounds worth of Bitcoin and announced HM Treasuryâ€™s Call for Information on digital currencies. This offered digital currency businesses the chance to draw attention to the risks, benefits and give them the chance to potentially influence future Government policy.</p>
                                            <br>
                                            <p><strong>December 2014</strong><br>Technology powerhouse Microsoft began accepting Bitcoins as payment. They could be used to buy games and videos on the X-Box, add apps and services to Windows phones or to buy Microsoft software.</p>
                                            <br><br>
                                            <p><strong>Early 2015 - Mid 2016: The Slow and Steady Rise of BTC</strong></p>
                                            <br>
                                            <p>In this one and a half year, BTC slowly scaled up the charts to reach a value close 770$ by the June 2016, where it started with a lowly value 177$ in January 2015. The number of miners, developers associated with Bitcoin grew exponentially in this one and a half year</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="evenfive" role="tabpanel" aria-labelledby="evenfive-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <h3>2017: The Bitcoin Boom</h3>
                                            <br>
                                            <p>Come 2017 and Bitcoin starts breaking through the glass ceiling. It hit a high of almost 2900$ in the first half of 2017 itself. With Japan introducing new rules for digital currency and China letting down its guard a little, the worldwide demand for digital currency soared, leading to hype-cycle which in turn meant a bigger boom for the Bitcoin industry!</p>
                                            <br><br>
                                            <h3>The birth of Bitcoin Cash</h3>
                                            <br>
                                            <p>August 1 saw the birth of a brand-new cryptocurrency: â€œBitcoin Cash,â€ sometimes referred to as â€œBcashâ€ and using the currency tickers â€œBCHâ€ or â€œBCC.â€</p>
                                            <br>
                                            <p>Bitcoin Cash, initially defined by the Bitcoin ABC software implementation, was set to fork on August 1 at 12:20 p.m. UTC. Though, because of how Bitcoin nodes measure time, the actual fork happened a little bit later.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="evensix" role="tabpanel" aria-labelledby="evensix-tab">
                                    <div class="row">
                                        <h3>2018: The Correction</h3>
                                        <br clear="both"><br>
                                        <p>2019 has been the year of correcting after major ethusiasm.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-default-layout>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import bitcoinData from '../../data/token/bitcoin'
    import * as DB from '@/db'
    import allData from '../../data'

    const tokenName = 'bitcoin'



    export default {
        components: {
            'c-default-layout': (resolve) => require(['@/projects/cryptoreviews/ui/layouts/token/' + tokenName + '/index.vue'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
        },
        data() {
            const data = allData(DB)

            DB.tokens = DB.instance().addCollection('tokens')
            DB.tokens.insert(data.tokens)

            DB.books = DB.instance().addCollection('books')
            DB.books.insert(data.books)

            DB.sites = DB.instance().addCollection('sites')
            DB.sites.insert(data.sites)

            DB.courses = DB.instance().addCollection('courses')
            DB.courses.insert(data.courses)

            DB.exchanges = DB.instance().addCollection('exchanges')
            DB.exchanges.insert(data.exchanges)

            DB.faq = DB.instance().addCollection('faq')
            DB.faq.insert(data.faq)

            DB.hardwareWallets = DB.instance().addCollection('hardwareWallets')
            DB.hardwareWallets.insert(data.hardwareWallets)

            DB.softwareWallets = DB.instance().addCollection('softwareWallets')
            DB.softwareWallets.insert(data.softwareWallets)

            DB.videos = DB.instance().addCollection('videos')
            DB.videos.insert(data.videos)

            DB.notifications = DB.instance().addCollection('notifications')
            DB.notifications.insert(data.notifications)
            
            return {
                data: bitcoinData(DB),
                showIcon: true,
                sliderOptions: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                    }
                }
            }
        }
    }
</script>

<style>
    body {
        font-family: 'sofia-pro', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        color: #666666;
        overflow-x: hidden;
        background: #e0e6ea !important;
    }
    #left-bg, #right-bg, #header-bg {
        display: none;
    }
</style>

<style lang="scss" scoped>
    .section {
        position: relative;
        width: 100%;
        display: block;
        margin: 0 auto;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-bottom: 20px;
        background: #fff;
        h1,
        .h1 {
            font-size: 5.2em;
            font-weight: 600;
        }
    }

    .section--main {
        margin-top: 180px;
        padding: 80px 0 0;
        background: url(https://ak3.picdn.net/shutterstock/videos/24705143/thumb/1.jpg);
        background-size: cover;
    }

    .section--overview {
        padding: 80px 0;
    }

    .about {
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

    /* Price Silder */
    .price-silder {
        font-family: 'PT Sans', sans-serif;
        height: 94px;
        bottom: 0;
        background: rgba(216, 179, 131, 0.6);
        padding: 15px 0;
        position: relative;
        overflow: hidden;
    }
    .price-silder .media img {
        width: 64px;
    }
    .price-silder .media-body {
        line-height: 14px;
    }
    .price-silder .media-body span {
        font-size: 18px;
        line-height: 20px;
    }
    .price-silder .media-body small {
        font-size: 12px;
        display: inline-block;
        width: 100%;
    }
    .price-silder .price-title {
        position: absolute;
        z-index: 9;
        padding: 20px 200px 15px 60px;
        top: 0;
        background: linear-gradient(270deg, rgba(249, 183, 7, 0) 0%, rgba(249, 183, 7, 1) 51%, rgba(249, 183, 7, 1) 100%);
    }
    .price-silder .price-main-img {
        width: 240px;
        clear: both;
    }
    .price-silder .price-main-title {
        padding-left: 65px;
        font-weight: bold;
        color: #222;
    }

    .heading-title {
        margin-bottom: 60px;
        text-align: center;
    }
    .heading-title .title {
        position: relative;
        padding-bottom: 15px;
        font-size: 40px;
        line-height: 50px;
    }
    .heading-title .title a {
        outline: medium none !important;
        color: #666;
    }
    .heading-title .title:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -40px;
        width: 80px;
        height: 3px;
        background: #f9b707;
        display: inline-block;
    }





    // Colors
    .heading-title .title:before, .heading-left .title:before {
        background: #f9b707;
    }
</style>
