<template>
    <header class="simpal">
        <div class="header">
            <div class="container white-bg" :style="{ 'max-width': '1200px', 'border-radius': '5px 5px 0 0' }">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo">
                            <a href="/"><img class="img-fluid" :src="props.logo" alt="" /></a>
                            <br />
                            <div class="header-org">By <a href="https://readyblock.one"><img class="price-main-img" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/rbo-logo-with-title.png" alt="" /></a></div>
                        </div>
                        <nav>
                            <a id="resp-menu" class="responsive-menu" href="/"><i class="fa fa-reorder"></i> Menu</a>
                            <ul class="menu text-right">
                                <li><a href="javascript:void(0)">Home</a>
                                    <ul class="sub-menu">
                                        <li><a href="/#intro">Intro</a></li>
                                        <li><a href="/#history">History</a></li>
                                        <li><a href="/#quick">Quick Links</a></li>
                                        <li><a href="/#compare">Compare</a></li>
                                        <li><a href="/#media">Media Centre</a></li>
                                        <li><a href="/#education">Education Centre</a></li>
                                        <li><a href="/#exchanges">Exchanges</a></li>
                                        <li><a href="/#wallets">Wallets</a></li>
                                        <li><a href="/#market">Market</a></li>
                                        <li><a href="/#faq">FAQ</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">Network</a>
                                    <ul class="sub-menu">
                                        <li><a href="javascript:void(0)">Reviews <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                            <ul>
                                                <li><a href="https://readyblock.one/review/btc">Bitcoin (BTC)</a></li>
                                                <li><a href="https://readyblock.one/review/eth">Ethereum (ETH)</a></li>
                                                <li><a href="https://readyblock.one/review/xrp">Ripple (XRP)</a></li>
                                                <li><a href="https://readyblock.one/review/bch">Bitcoin Cash (BCH)</a></li>
                                                <li><a href="https://readyblock.one/review/ltc">Litecoin (LTC)</a></li>
                                                <li><a href="https://readyblock.one/network/#reviews">More</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://readyblock.one/go/dictionary">Crypto Dictionary</a></li>
                                        <li><a href="https://readyblock.one/go/faucet">Crypto Faucet</a></li>
                                        <li><a href="https://readyblock.one/go/in5mins">Crypto In 5 Mins</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">Company</a>
                                    <ul class="sub-menu">
                                        <li><a href="https://readyblock.one/about">About Us</a></li>
                                        <li><a href="https://readyblock.one/contact">Contact Us</a></li>
                                        <li><a href="https://readyblock.one/login">Client Area</a></li>
                                    </ul>
                                </li>
                                <li :style="{ display: 'none' }">
                                    <div class="search"> <a class="search-btn not_click" href="javascript:void(0);"> <span>Search Button</span></a>
                                        <div class="search-box not-click">
                                            <input type="email" class="form-control not-click" id="exampleInputEmail1" placeholder="Search" />
                                            <i class="ti-search"></i> </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>