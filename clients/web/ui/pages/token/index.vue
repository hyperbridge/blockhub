<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12 margin-bottom-30">
                <!-- <c-token-sale
                    class="margin-bottom-30"
                    :hardCap="18500000"
                    :softCap="400000"
                    :volume="350000000"
                    :soldDollars="soldDollars"
                    :soldTokens="soldTokens"
                    @purchase="scrollMeTo('purchase')"
                /> -->
                <c-block
                    class="margin-bottom-30"
                    hidden>
                    <div class="d-flex justify-content-between align-items-center padding-10">
                        <div>
                            <div class="h3 font-weight-bold p-0 m-0">
                                Do you hold over 20k HBX?
                            </div>
                            <div class="h4 font-weight-light p-0 m-0">
                                Don't miss exclusive splash sale on nov 15, 16, 17! Only for 20k+ HBX holders!
                            </div>
                        </div>
                        <c-button
                            size="lg"
                            status="success"
                            iconHide>
                            Purchase 20k+ HBX
                        </c-button>
                    </div>
                </c-block>

                <c-block>
                    <div class="d-flex justify-content-between align-items-center padding-10">
                        <div>
                            <c-img
                                src="../../static/img/hyperbridge-logo_brand-color-h.png"
                                style="height: 50px"
                                alt="Hyperbridge" />
                        </div>
                        <div class="h4 px-4 m-0 w-auto font-weight-light">
                            BlockHub and HBX are brought to you by Hyperbridge Technology. We build technology for a crowdfunded world.
                        </div>
                        <c-button
                            href="https://hyperbridge.org/"
                            size="lg"
                            status="info"
                            iconHide
                            target="_blank"
                            hidden>
                            Learn more
                        </c-button>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-md-6 mb-4">
                <c-block>
                    <h2>What is HBX?</h2>
                    <div>
                        Built by <c-button
                            status="underline"
                            size="md"
                            href="https://hyperbridge.org">
                            Hyperbridge
                        </c-button>, HBX tokens are used to fuel the decentralized protocols underlying window.BlockHub.
                        BlockHub is the first economy built on these protocols, designed to let players and game developers productively interact in mutually beneficial ways.
                        HBX tokens can be purchased or received by:
                        <br><br>
                        <ul>
                            <li>Selling game items</li>
                            <li>Curating game information in the store</li>
                            <li>Bug reporting</li>
                            <li>Game promotion</li>
                            <li>Product testing</li>
                            <li>Polls/Questionnaires</li>
                        </ul>
                    </div>
                    <div
                        class="carousel-wrapper margin-auto margin-top-20 margin-bottom-20"
                        style="zoom: 0.7">
                        <c-carousel-3d
                            :items="[assets[0]]"
                            :limitTo="1">
                            <template v-slot="props">
                                <c-asset-store-card
                                    v-for="(item) in props.items"
                                    :key="item.id"
                                    :class="item.css"
                                    :assetName="item.name"
                                    :assetPriceCurrent="item.price.current"
                                    :assetTags="item.tags"
                                    :assetImage="item.image" />
                            </template>
                        </c-carousel-3d>
                    </div>
                    <p>HBX is available for purachse at $0.055 USD each.</p>
                </c-block>
            </div>
            <div class="col-12 col-md-6">
                <c-block>
                    <h2>What can HBX be used for?</h2>
                    <div>
                        <ul>
                            <li>Contribute to crowdfund projects</li>
                            <li>Purchase products within the store</li>
                            <li>Vote for the direct of game development (staking)</li>
                            <li>Receive 10% discount on all transactions</li>
                            <li>Running promotions within BlockHub</li>
                        </ul>
                        <br>
                        For the game developers, when accepting HBX you will receive a number of benefits, including reduced fees by 50%. To learn more, please see the <c-button
                            status="underline"
                            size="md"
                            href="https://hyperbridge.org/whitepaper"
                            target="_blank">
                            White Paper
                        </c-button>.
                        <br><br>
                    </div>
                    <div
                        class="carousel-wrapper margin-auto margin-top-20 margin-bottom-20"
                        style="zoom: 0.7">
                        <c-carousel-3d
                            :items="[assets[1], assets[2]]"
                            :limitTo="2">
                            <template v-slot="props">
                                <c-asset-store-card
                                    v-for="(item) in props.items"
                                    v-if="props.items"
                                    :key="item.id"
                                    :class="item.css"
                                    :assetName="item.name"
                                    :assetPriceCurrent="item.price.current"
                                    :assetTags="item.tags"
                                    :assetImage="item.image" />
                            </template>
                        </c-carousel-3d>
                    </div>
                    <p>
                        Purchasers will be rewarded the exclusive Voyager Badge and Master Sword (<a
                            href="http://erc721.org/"
                            target="_blank">ERC-721 NFTs</a>). These unique items will be some of the first items tradeable within our upcoming games &amp; marketplace.
                    </p>
                </c-block>
            </div>
        </div>

        <!-- <div v-if="!desktopMode && !ethereumConnected">
            <div class="col-12 text-center alert alert-info">
                <p>The BlockHub desktop app is the recommended way to load up on tokens.</p>
            </div>
        </div> -->

        <div
            ref="purchase"
            class="row promotion margin-top-40 margin-bottom-20" />

        <div
            v-if="!ethereumConnected"
            class=""
            style="text-align: center; width: 100%"
            hidden>
            <c-welcome-box />
            <br><br>
        </div>

        <div
            v-if="isMobile"
            class="col-12"
            style="text-align: center; width: 100%; margin-top: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
            <h2>Mobile Detected</h2>
            <p>We're sorry, but purchasing is only supported on desktop. Please come back on a PC to purchase. Thank you.</p>
        </div>

        <div v-if="!isMobile">
            <div
                v-if="!ethereumConnected"
                class="col-12 col-md-6 offset-md-3"
                style="text-align: center; width: 100%">
                <h2 hidden>
                    Purchase Tokens with MetaMask
                </h2>

                <br>

                <img
                    src="/img/metamask-logo.png"
                    style="max-width: 150px;margin: 0 auto;opacity: 0.3; filter: grayscale(1);">

                <a
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                    hidden>
                    <img
                        src="/img/metamask.png"
                        style="max-width: 350px;margin: 0 auto">
                </a>

                <br><br>

                <p hidden>
                    Tokens can be purchased in the BlockHub desktop client or using the MetaMask web wallet. Come back to this page within BlockHub, or when you've installed MetaMask.
                </p>

                <br><br>
                <c-button
                    class="c-button--lg "
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                    @click="gaStep(1)">
                    Install MetaMask to Purchase Tokens
                </c-button>
                <br><br>
                <c-button
                    status="underline"
                    size="sm"
                    @click="showContractAddress">
                    Click here if you just want the contract address
                </c-button>
                <br><br>
            </div>

            <div
                v-if="ethereumConnected && !ethereumUnlocked"
                class="col-12"
                hidden>
                <c-welcome-box />
            </div>

            <div
                v-if="ethereumConnected && !ethereumUnlocked"
                class="col-6 offset-3"
                style="text-align: center; width: 100%; margin-top: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                <h2 hidden>
                    Purchase Tokens with MetaMask
                </h2>

                <br>

                <img
                    src="/img/metamask-logo.png"
                    style="max-width: 150px;margin: 0 auto;opacity: 0.3; filter: grayscale(1);">

                <br>

                <br>
                <br>
                <c-button
                    class="c-button--lg "
                    @click="unlockWallet">
                    Unlock Wallet
                </c-button>
                <br><br>
                <c-button
                    status="underline"
                    size="sm"
                    @click="showContractAddress">
                    Click here if you just want the contract address
                </c-button>
                <br><br>
            </div>

            <div
                v-if="ethereumConnected && ethereumUnlocked"
                class="col-4 offset-4"
                style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2); zoom: 0.8"
                hidden>
                <img
                    src="/img/metamask-logo.png"
                    style="max-width: 150px;margin: 0 auto;">

                <br><br>

                <h2 style="margin: 0">
                    Connected to MetaMask <span class="fa fa-check-circle" />
                </h2>
            </div>

            <div class="row">
                <div
                    v-if="ethereumConnected && ethereumUnlocked"
                    class="col-12 col-md-6">
                    <c-block
                        title="Purchase"
                        class="margin-bottom-30">
                        <p>Each HBX token is <strong>${{ tokenPriceUSD }}</strong>, and can be purchased with ETH at the current price of <strong>{{ (1/ETH2USD).toString().slice(0, 6) }} ETH</strong> per HBX <em>(Based on a locked conversion of ${{ ETH2USD }} USD per 1 ETH)</em>.</p>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    ETH
                                </span>
                            </div>
                            <input
                                ref="input"
                                v-model="purchaseETH"
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                                @keyup="calcHBX">
                        </div>
                        <p>Estimated purchase:</p>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    HBX
                                </span>
                            </div>
                            <input
                                ref="input"
                                v-model="purchaseHBX"
                                type="text"
                                class="form-control"
                                placeholder="0.00"
                                readonly>
                        </div>
                        <strong>Note:</strong> Maximum purchase amount is {{ (maxPurchaseUSD / ETH2USD).toString().slice(0, 3) }} ETH (${{ maxPurchaseUSD }} USD equivalent).
                    </c-block>
                </div>

                <div
                    v-if="ethereumConnected && ethereumUnlocked && desktopMode"
                    class="col-12 col-md-6">
                    <c-block
                        title="Payment"
                        class="margin-bottom-30">
                        <div class="profile-picker">
                            <c-swiper :options="profileOptions">
                                <c-swiper-slide
                                    v-for="profile in profiles"
                                    :key="profile.id">
                                    <div
                                        v-if="profiles && profiles.length"
                                        class="profile-picker__profile w-100 m-0 padding-15 pb-0">
                                        <c-user-card
                                            :user="profile"
                                            :previewMode="true"
                                            :class="{ 'default': activeProfile && profile.id == activeProfile.id }" />
                                        <div class="profile__action">
                                            <c-button
                                                v-if="!activeProfile || profile.id != activeProfile.id"
                                                status="info"
                                                icon="check"
                                                @click="chooseProfile(profile)">
                                                Choose
                                            </c-button>
                                        </div>
                                    </div>
                                </c-swiper-slide>
                            </c-swiper>
                        </div>
                    </c-block>
                </div>

                <div
                    v-if="ethereumConnected && ethereumUnlocked && !desktopMode"
                    class="col-12 col-md-6">
                    <c-block
                        title="Payment Profile"
                        class="margin-bottom-30">
                        <p>Your Ethereum address:</p>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    Address
                                </span>
                            </div>
                            <input
                                ref="input"
                                v-model="purchaseAddress"
                                type="text"
                                class="form-control"
                                placeholder="Public Ethereum address....">
                        </div>
                        <p hidden>
                            Haven't verified yet? You'll need to do that! <c-button
                                class=""
                                to="/account/verification"
                                style="margin: 0 auto"
                                @click="gaStep(5)">
                                Verify Account
                            </c-button>
                        </p>
                    </c-block>
                </div>

                <!-- <div class="col-12 text-center alert alert-info" v-if="!desktopMode">
                    <p>The BlockHub desktop client is the recommended way to load up on tokens.</p>
                </div> -->

                <div
                    v-if="ethereumConnected && ethereumUnlocked && desktopMode && (!account.isVerified && !account.isVerifying) && !override"
                    class="col-8 offset-2"
                    style="text-align: center">
                    <h2
                        style="text-align: center"
                        hidden>
                        Oops, you haven't verified your account yet. <br>You'll need to do this to purchase.
                    </h2>
                    <br>
                    <c-button
                        class="c-button--lg"
                        to="/account/verification"
                        style="margin: 0 auto"
                        @click="gaStep(6)">
                        Verify Account
                    </c-button>
                    <br><br>
                    <c-button
                        status="underline"
                        size="sm"
                        @click="manualOverride">
                        Click here if you're pretty sure you've verified
                    </c-button>
                    <br><br>
                </div>

                <div
                    v-if="ethereumConnected && ethereumUnlocked && desktopMode && !account.isVerified && account.isVerifying"
                    class="col-8 offset-2"
                    style="text-align: center">
                    <p>Your account is currently being verified. You'll need to wait until it's finished to purchase.</p>
                    <p>Please check back later. If you've been waiting too long or have problems, please email support@hyperbridge.org</p>
                </div>

                <br><br><br>

                <div
                    v-if="ethereumConnected && ethereumUnlocked && (!desktopMode || account.isVerified || override)"
                    style="text-align: center">
                    <div class="col-10 offset-1 tab-card">
                        <h4>Purchase Agreement</h4>
                        <div class="termsBlock">
                            <p class="c21 c27">
                                <span class="c5" />
                            </p><p class="c19 c21">
                                <span class="c11">This Token Sale Agreement (the</span><span class="c13">&nbsp;“Agreement”</span><span class="c11">)</span><span class="c13">&nbsp;</span><span class="c6">is an agreement between </span>
                            </p><ol
                                class="c7 lst-kix_list_14-0 start"
                                start="1">
                                <li class="c25">
                                    <span class="c6">you or the legal entity that you represent (</span><span class="c1">“Buyer”</span><span class="c6">) and </span>
                                </li><li class="c15">
                                    <span class="c1">Hyperbridge Technology Inc. OÜ </span><span class="c6">(<a
                                        href="https://www.teatmik.ee/en/personlegal/14476002-Hyperbridge-Technology-Inc.-O%C3%9C"
                                        target="_blank">registry code: 14476002</a>) registered under the laws of Estonia</span><span class="c1">&nbsp;</span><span class="c6">(</span><span class="c1">“Company”</span><span class="c6">).</span>
                                </li>
                            </ol><p class="c19">
                                <span class="c11">Buyer and Company, individually herein referred to as a </span><span class="c13">“Party”</span><span class="c11">&nbsp;and collectively as the “</span><span class="c13">Parties</span><span class="c6">”, have agreed on the following:</span>
                            </p><ol
                                class="c7 lst-kix_list_3-0 start"
                                start="1">
                                <li class="c0">
                                    <span class="c5">DEFINITIONS </span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_3-1 start"
                                start="1">
                                <li class="c12">
                                    <span class="c6">The Agreement terms that are written in the upper case first letter hereinafter is used in the following meanings unless the context indicates a different meaning:</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_17-2 start"
                                start="1">
                                <li class="c4">
                                    <span class="c6">“</span><span class="c1">Account</span><span class="c6">” - a Participant’s account on the Website, which is created and used to purchase HBX tokens. Only Participants have a right to purchase HBX tokens on the terms provided herein.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Agreement</span><span class="c6">” - these Terms and all other operating rules and procedures that may be published from time to time on the Website (including Privacy Policy).</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Blockchain</span><span class="c6">” - a distributed cryptography-powered database that maintains a list of records, chained together against revision and tampering.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Crowdsale</span><span class="c6">”- funding process aimed at receiving contribution for the development and support of Hyperbridge Project. The Crowdsale phases are pre-ICO and ICO.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Crowdsale</span><span class="c6">&nbsp;dashboard” - a panel on the Website where each Participant has access to information about his account and can control the process of funding his account, buying of tokens and other processes necessary to participate in the Crowdsale.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Ethereum</span><span class="c6">” - an open-source, public, blockchain-based computing platform featuring smart contract functionality.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">KYC</span><span class="c6">” - know your customer (KYC) process of identifying and verifying the profile of the Participants.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Loss</span><span class="c6">”- damages, claims, applications, loss, injuries, delays, accidents, costs, business interruption, expenses (including, without limitation, counsel’s or legal fees or the costs of any claim or suit), any incidental, direct, indirect, general, special, punitive, exemplary, special or consequential damages, any loss of goodwill, profits or revenue or any other economic loss, any loss of cryptocurrency or digital assets, any work stoppage, data loss, computer failure or malfunction, or any other commercial or other loss.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Participant</span><span class="c6">” - user who has been registered, upon his request, for the HBX tokens purchasing.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Terms</span><span class="c6">” - these Terms and Conditions.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">Website</span><span class="c6">” - HYPERBRIDGE website: </span><span class="c11 c22"><a
                                        class="c17"
                                        href="https://www.hyperbridge.org">https://www.hyperbridge.org</a></span><span class="c6">, the Crowdsale Dashboard, all subdomains and all their respective pages.</span>
                                </li><li
                                    id="h.gjdgxs"
                                    class="c4">
                                    <span class="c6">“</span><span class="c1">White</span><span class="c6">&nbsp;</span><span class="c1">Paper</span><span class="c6">” - the document describing HYPERBRIDGE Project available on the Website at </span><span class="c22 c11"><a
                                        class="c17"
                                        href="https://hyperbridge.org/whitepaper">https://hyperbridge.org/whitepaper</a></span><span class="c6">&nbsp;as may be amended from time to time.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">User</span><span class="c6">” - anyone who uses the Website, without prior registration and authorization using the Account.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">HYPERBRIDGE</span><span class="c6">&nbsp;</span><span class="c1">Project</span><span class="c6">” - software and infrastructure development for offering HYPERBRIDGE services and products as described in the White Paper.</span>
                                </li><li class="c4">
                                    <span class="c6">“</span><span class="c1">HBX</span><span class="c6">&nbsp;</span><span class="c1">Tokens</span><span class="c6">” or “</span><span class="c1">HBX</span><span class="c6">” - a coin based on ERC20 Ethereum token standard, which will allow its owner to participate in HYPERBRIDGE Project as further described in the White Paper and in the future use HBX for payment of services and products offered through HYPERBRIDGE platform, if and to the extent HYPERBRIDGE Project has been successfully completed and Launched.</span>
                                </li>
                            </ol><p
                                id="h.30j0zll"
                                class="c8 c18">
                                <span class="c1" />
                            </p><p class="c3 c8 c24">
                                <span class="c1" />
                            </p><ol
                                class="c7 lst-kix_list_3-0"
                                start="2">
                                <li class="c2">
                                    <span class="c5">ENTERING INTO THE AGREEMENT AND TERMS OF USE. WHITE PAPER. LEGAL STATUS OF TOKENS </span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_3-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Buyer agrees to purchase, and Company agrees to sell the Tokens on the terms and conditions set forth in the Agreement. Buyer fully acknowledges, understands and agrees that it is subject to and bound by the Agreement by virtue of Buyer’s purchase of Tokens. The Agreement becomes effective and binding on Parties after Company has received the payment from Buyer. </span>
                                </li><li class="c0">
                                    <span class="c6">Company has the right to amend the White Paper at its sole discretion. Company shall publish a notice regarding the amendments through Hyperbridge communication channels and it is &#8203;Buyer's &#8203;responsibility &#8203;to &#8203;regularly &#8203;check &#8203;the &#8203; Hyperbridge communication channels &#8203;for &#8203;any &#8203;such &#8203;notices. In case of any conflicts between provisions of the White Paper and the Agreement, the Agreement shall prevail.</span>
                                </li><li class="c0">
                                    <span class="c6">HBX Tokens are a virtual currency-type crypto-tokens providing Buyer with a right to be used for all purchases as it is described in the White Paper and herein. </span>
                                </li><li class="c0 c8">
                                    <span class="c6">HBX Tokens may be tradable, however, Buyer may not be able to sell or otherwise transfer HBX Tokens due to potential lack of liquidity, including that Tokens may never become available for trade on secondary market (exchange).</span>
                                </li><li class="c0">
                                    <span class="c6">The Tokens are not a loan, legal tender currency, security, commodity, a swap on a currency or any other kind of financial instrument nor represent neither confer any ownership right or stake, share, or equivalent rights, or any right to receive future revenue, shares, dividends or participate in management, intellectual property rights or any other form of participation in Company. </span>
                                </li><li class="c0">
                                    <span class="c6">Buyer expressly agrees that purchases of the Tokens are non-refundable and cannot be cancelled or withdrawn. Buyer acknowledges the risk of losing any or all the Tokens.</span>
                                </li><li class="c0">
                                    <span class="c6">Company may decide to amend the intended functionality of the Tokens to ensure compliance with any legal or regulatory requirements the Tokens are subject to. Company may publish a notice of any changes to the functionality of the Tokens and it is &#8203;Buyer's &#8203;responsibility &#8203;to &#8203;regularly &#8203;check &#8203; Hyperbridge communication channels &#8203;for &#8203;any &#8203;such &#8203;notices. </span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_3-0"
                                start="3">
                                <li class="c2">
                                    <span class="c5">TOKEN SALE PROCEDURE</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_3-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">The substantial information about the procedures and material specifications of the Token Sale are provided in the White Paper and on the https://www.hyperbridge.org, including details regarding the timing, pricing of the Token Sale, the number of Tokens purchased and the wallet address. By making the payment for the Tokens, Buyer acknowledges that Buyer has no objection to these procedures and material specifications.</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer's purchase of the Tokens from Company during the Token Sale period is final, and there are no refunds or cancellations possible, except the refund of Buyer’s crypto funds in case the soft cap indicated on https://www.hyperbridge.org is not reached.</span>
                                </li><li class="c0">
                                    <span class="c6">Company reserves the right to establish the adequate refund procedure in case the previous exception takes place.</span>
                                </li><li class="c0">
                                    <span class="c6">Company reserves the right to reject the offers on acquisition of the Tokens at any time, at Company's sole discretion, including cases when the information provided by Buyer upon any requests is insufficient, inaccurate or misleading, or Buyer has not complied with any of the requirements &#8203;of Hyperbridge Platform.</span>
                                </li><li class="c0">
                                    <span class="c6">Company reserves the right to conduct a KYC (“Know Your Customer) and/or AML (“Anti-Money Laundering”) checks of Buyer &#8203;if &#8203;deemed &#8203;necessary &#8203;or &#8203;it &#8203;becomes &#8203;required &#8203;by &#8203;the &#8203;applicable &#8203;laws. Upon Company’s request, Buyer shall immediately provide to Company information and documents that Company, in its sole discretion, considers necessary or appropriate to conduct KYC and/or AML checks.</span>
                                </li><li class="c0">
                                    <span class="c6">At any time prior to the end of the Token Sale, Company may, at its own discretion, either temporarily suspend or permanently abort the Token Sale for security or any other reasons. Any suspension or abortion of Token Sale shall be deemed to commence from the moment that Company publishes a &#8203;notice &#8203;to &#8203;that &#8203;effect &#8203;on &#8203;the https://www.hyperbridge.org.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_3-0"
                                start="4">
                                <li class="c2">
                                    <span class="c5">REPRESENTATIONS AND WARRANTIES OF BUYER </span>
                                </li>
                            </ol><p class="c19 c21">
                                <span class="c6">Buyer represents and warrants, understands and agrees without any reservation that:</span>
                            </p><ol
                                class="c7 lst-kix_list_9-1 start"
                                start="1">
                                <li class="c0 c8">
                                    <span class="c6">Buyer has all required powers and authority to execute, deliver, carry out and perform its obligations under the Agreement, including but not limited to making payments and purchase HBX Tokens within the process of Token Sale. </span>
                                </li><li class="c0 c8">
                                    <span class="c6">Buyer has read the Agreement and the White Paper carefully and in their entirety. Buyer shall not buy HBX Tokens, if any of the risks provided in the Agreement or in the White Paper are unacceptable.</span>
                                </li><li class="c0 c8">
                                    <span class="c6">Company does not have any obligation to recover any HBX Token. Purchases of HBX Tokens are non-refundable. Buyer may lose all paid amounts. </span>
                                </li><li class="c0 c8">
                                    <span class="c6">Buyer cannot hold any claims against Company for any losses or any special, incidental, or consequential damages arising from, or in any way connected to, the sale and purchase of HBX Tokens, including losses associated with the risks set forth in the Agreement.</span>
                                </li><li class="c0 c8">
                                    <span class="c6">Holding Tokens derived from the Token Sale carries no rights, express or implied, other than the right to use HBX Tokens to access the Network; to participate the Platform; to use the Token as means of payment; to use Token as a License framework; to tokenize in-game assets; to structure crowdfunding campaigns; to vote in polls and elect district leaders.</span>
                                </li><li class="c0 c8">
                                    <span class="c6">Tokens do not represent any ownership right, share or security or equivalent rights, or any right to receive future revenue, shares, dividends or participate in Company management. HBX Tokens do not grant its holder any intellectual property rights or any other form of participation in, or relating to, Company. HBX Tokens are not security, commodity or any other kind of financial instrument. </span>
                                </li><li class="c0">
                                    <span class="c6">Buyer has significant experience with, and understanding of, the usage and intricacies of cryptographic tokens, blockchain technology and smart contracts. Buyer has sufficient understanding of the functionality, usage, storage, transmission mechanisms and other material characteristics of cryptographic tokens, token storage mechanisms (such as token wallets), blockchain technology and blockchain-based software systems to understand the Agreement and to assess &#8203;the &#8203;risks &#8203;and &#8203;implications &#8203;of &#8203;purchasing &#8203;the &#8203;Tokens.</span>
                                </li><li class="c0 c8">
                                    <span class="c6">Company is not responsible for lost HBX Tokens or virtual currency resulting from actions taken by or omitted by Buyer. Buyer acknowledges and assumes the risks associated, including but not limited to: (i) loss of Buyer’s login data to Hyperbridge Platform account and loss of private keys of wallet storing HBX Tokens, (ii) incorrect functioning of Blockchain or Ethereum platform, (iii) cyberattacks and unanticipated regulatory changes by Governmental Authorities.</span>
                                </li><li class="c0 c8">
                                    <span class="c6">The blockchain used for the Token smart contracts which create the Tokens is susceptible to mining attacks, including double-spend attacks, majority mining power attacks, "selfish-mining" attacks, and race condition attacks. Any successful attacks present a risk to the token smart contract, expected proper execution and sequencing of the Token transactions, and expected proper execution and sequencing of contract computations;</span>
                                </li><li class="c0 c8">
                                    <span class="c6">Buyer is of sufficient legal age and capacity to purchase the Tokens. In case of a legal person, Buyer is duly organized, validly existing and in good standing under the laws of its domiciliary jurisdiction and each jurisdiction where it conducts business. &nbsp;</span>
                                </li><li class="c0 c8">
                                    <span class="c6">The Tokens will not be offered or distributed to, as well as they will not be resold or otherwise alienated by their holders to the following persons:</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-2 start"
                                start="1">
                                <li
                                    id="h.1fob9te"
                                    class="c10">
                                    <span class="c6">citizens of, natural and legal persons or persons acting on their behalf, having their habitual residence, location or their seat of incorporation in the United States of America, Puerto Rico, Northern Mariana Islands, Virgin Islands of the United States, American Samoa, or any other possessions of the United States of America; People’s Republic of China; South Korea and</span>
                                </li><li class="c10">
                                    <span class="c6">citizens of, natural and legal persons or persons acting on their behalf, having their habitual residence, location or their seat of incorporation in the country or territory where transactions with digital tokens are prohibited or in any manner restricted by applicable laws or regulations, or will become prohibited or restricted at any time after the Agreement becomes effective.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-1"
                                start="12">
                                <li class="c0">
                                    <span class="c6">The entering into, and performance of, the Agreement will not result in any violation of, and be in conflict with, or constitute a material default under: </span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-2 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">any &#8203;provision &#8203;of &#8203;Buyer’s corporation &#8203;documents;</span>
                                </li><li class="c0">
                                    <span class="c6">any provision of any judgment, decree or order to which Buyer is a party, by &#8203;which &#8203;it &#8203;is &#8203;bound, &#8203;or &#8203;to &#8203;which &#8203;any &#8203;of &#8203;its &#8203;material &#8203;assets &#8203;are &#8203;subject; </span>
                                </li><li class="c0">
                                    <span class="c6">any material agreement, obligation, duty or commitment to which Buyer is a &#8203;party &#8203;or &#8203;by &#8203;which &#8203;it &#8203;is &#8203;bound;</span>
                                </li><li class="c0">
                                    <span class="c6">any foreign exchange, anti-money laundering or regulatory restrictions applicable to&#8203; &#8203;Token Sale; &#8203;</span>
                                </li><li class="c0">
                                    <span class="c6">any &#8203;laws, &#8203;regulations &#8203;or &#8203;rules &#8203;applicable &#8203;to &#8203;Buyer.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-1"
                                start="13">
                                <li class="c0">
                                    <span class="c6">Buyer undertakes to comply with any applicable tax obligations in Buyer's jurisdiction arising from &#8203;&#8203;the Token Sale.</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer undertakes to comply with all applicable anti-money laundering and counter-terrorism financing &#8203;requirements. </span>
                                </li><li class="c0">
                                    <span class="c6">The execution and delivery of, and performance under, the Agreement require no approval or other action from any Governmental Authority or person other than Buyer.</span><span class="c1">&nbsp;</span>
                                </li><li class="c0">
                                    <span class="c6">There are no actions or investigations, pending or threatened before or by any Governmental Authority against Buyer which, if determined adversely, could reasonably be expected to have a material adverse effect on the ability of Buyer to enter into, and perform its obligations under, the Agreement. There is no unsatisfied judgment or any open injunction binding upon Buyer which could reasonably be expected to have a material adverse effect on the ability of Buyer to enter into, and perform its obligations under, the Agreement. If Buyer is a legal entity, Buyer makes the same representations with respect to its directors (or equivalent) and senior executive officers, and its affiliates.</span>
                                </li><li class="c0">
                                    <span class="c6">Signing up at Hyperbridge Platform and purchasing HBX Tokens, Buyer guarantees that she/he acknowledges and accepts all legal and other consequences related to Token purchase, including all potential risks, and releases the Company from any responsibility in case of such risks and damages.</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer has obtained sufficient information about the Tokens to make an informed decision &#8203;to &#8203;purchase &#8203;the &#8203;Tokens.</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer understands that the value of the Token over time may experience extreme volatility or depreciate in full.</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer agrees and certifies that the Buyer is acquiring Tokens to be able to buy licenses that would qualify allow the token holder to be a professional proxy and not for investment or financial &#8203;purposes.</span><span class="c1">&nbsp;</span>
                                </li><li class="c0">
                                    <span class="c6">The funds, including any digital assets, fiat currency or virtual currency, that Buyer uses to purchase the Tokens, are not derived from or related to any unlawful activities, including but not limited to money laundering or terrorist financing, and Buyer will not use the Tokens to finance, engage in, or otherwise support &#8203;any &#8203;unlawful &#8203;activities.</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer agrees that if Buyer’s country of residence or other circumstances change in such a way that any of the representations and warranties specified in the Agreement are no longer accurate, Buyer will &#8203;immediately &#8203;cease &#8203;using Hyperbridge Platform. </span>
                                </li>
                            </ol><p class="c3">
                                <span class="c6" />
                            </p><ol
                                class="c7 lst-kix_list_9-0 start"
                                start="4">
                                <li class="c12">
                                    <span class="c5">NO COMPANY'S REPRESENTATIONS AND WARRANTIES</span>
                                </li>
                            </ol><p class="c18">
                                <span class="c9" />
                            </p><ol
                                class="c7 lst-kix_list_9-1"
                                start="23">
                                <li class="c12">
                                    <span class="c6">Buyer expressly acknowledges, understands and agrees entirely and without any reservation that Buyer is purchasing the Tokens solely at Buyer’s own risk and that Tokens are provided, used and acquired on an “</span><span class="c11 c14">as is</span><span class="c6">” and on an “</span><span class="c14 c11">as available</span><span class="c6">” basis without representations, warranties, promises or guarantees whatsoever of any kind. Buyer’s decision to purchase the Tokens and enter into the Agreement shall be made based on Buyer’s own knowledge and information disclosed herein and in White Paper. Additionally, Buyer has conducted to its own satisfaction an independent investigation and verification of Hyperbridge Platform, HBX Tokens and shall therefore rely solely on its own examination. </span>
                                </li><li class="c12">
                                    <span class="c6">Company expressly disclaims all express and implied warranties and representations as to the Tokens, HBX Tokens and Hyperbridge Platform. Company &#8203;does not &#8203;make &#8203;any &#8203;representations &#8203;or &#8203;warranties, &#8203;express &#8203;or &#8203;implied, &#8203;including:</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-2 start"
                                start="1">
                                <li class="c12">
                                    <span class="c6">any &#8203;warranties &#8203;or &#8203;representations &#8203;of &#8203;title;</span>
                                </li><li class="c12">
                                    <span class="c6">any warranties or representations of merchantability or fitness for a particular purpose with respect to Hyperbridge Platform, the Tokens or their utility, or the ability of anyone &#8203;to &#8203;purchase &#8203;or &#8203;use the &#8203;&#8203;Tokens;</span>
                                </li><li class="c12">
                                    <span class="c6">the suitability, reliability, availability, timeliness, and accuracy of Hyperbridge Platform, the Tokens, information, software, products, services and related graphics on &#8203;the &#8203; Hyperbridge Platform &#8203;for &#8203;any &#8203;purpose. </span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-0"
                                start="5">
                                <li class="c2">
                                    <span class="c5">LIMITATION OF LIABILITY</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Company is not liable for any delay or failure to perform any obligation under the Agreement where the delay or failure results from any cause beyond Company's reasonable control.</span>
                                </li><li class="c0">
                                    <span class="c6">In no circumstances the aggregate joint liability of Company, whether in contract, warrant, tort or for damages of any kind under the Agreement will exceed the amount received by Company from Buyer.</span>
                                </li><li class="c0">
                                    <span class="c6">Company is not liable for any cryptocurrency exchange rate fluctuation. &nbsp;</span>
                                </li><li class="c0">
                                    <span class="c6">Except otherwise provided in the Agreement, Buyer will indemnify, defend, hold harmless and reimburse Company from and against any and all actions, proceedings, claims, damages, demands and actions (including, without limitation, fees and expenses of counsel), incurred by Company arising from or relating to:</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_4-0 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Token Sale;</span>
                                </li><li class="c0">
                                    <span class="c6">use of the Tokens;</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer’s responsibilities or obligations under the Agreement;</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer’s breach of or violation of the Agreement;</span>
                                </li><li class="c0">
                                    <span class="c6">any inaccuracy in any representation or warranty of Buyer;</span>
                                </li><li class="c0">
                                    <span class="c6">Buyer’s violation of any rights of any other person or entity; and/or</span>
                                </li><li class="c0">
                                    <span class="c6">any act or omission of Buyer that is negligent, unlawful or constitutes wilful misconduct.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Company shall not be liable for the content, veracity and accuracy of the information published on the Company’s website in the advertising section. The information in the advertising section is not an offer, promise or warranty to the Buyer from the Company.</span>
                                </li><li class="c0">
                                    <span class="c6">Company reserves the right to exercise sole control over the defence, at Buyer’s expense, of any claim subject to indemnification under this Section. This indemnity is in addition to, and not in lieu of, any other indemnities set forth in a written agreement between Buyer and Company, including those provided under the Agreement.</span>
                                </li><li class="c0">
                                    <span class="c6">Company is not liable for the risks arising from lack of governance rights. Because HBX Tokens confer no governance rights of any kind with respect to the Company and the ownership of Hyperbridge Platform, all decisions involving Hyperbridge Platform or the Company itself will be made by the Company and the owner of Hyperbridge Platform at their sole discretion, including but not limited to, decisions to discontinue Hyperbridge Platform, to create and sell more HBX Tokens for use in Hyperbridge Platform, or to sell or liquidate the Company. These decisions could adversely affect Hyperbridge Platform and the utility of any HBX Tokens Buyer holds.</span>
                                </li><li class="c0">
                                    <span class="c6">Company is not liable for risks associated with lack of information. Buyers may not be able to obtain all information it would want regarding the Company, the HBX Tokens, Hyperbridge Platform, or the HBX Token ICO on a timely basis or at all. It is possible that Buyers may not be aware on a timely basis of material adverse changes that have occurred. Information may be highly technical by nature. As a result of these difficulties, as well as other uncertainties, Buyers may not have accurate or accessible information about Hyperbridge Platform. </span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_9-0"
                                start="6">
                                <li class="c2">
                                    <span class="c5">Force Majeure</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_5-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Buyer understands and agrees that Company shall not be liable in connection with any force majeure event, including, labour disputes or other industrial disturbances, electrical, telecommunications, hardware, software or other utility failures, software or smart contract bugs or weaknesses, earthquakes, storms, or other nature-related events, blockages, embargoes, riots, strikes, acts or orders of Government Authority, acts of terrorism or war, technological change, changes in interest rates or other monetary conditions, and, for the avoidance of doubt, changes to any blockchain-related protocol.</span>
                                </li><li class="c0">
                                    <span class="c6">If an event of force majeure occurs, the Party injured hereto by the other’s inability to perform may elect to suspend the Agreement, in whole or part, for the duration of the force majeure circumstances. &nbsp;</span>
                                </li>
                            </ol><p class="c20">
                                <span class="c6" />
                            </p><p class="c28">
                                <span class="c6" />
                            </p><ol
                                class="c7 lst-kix_list_9-0"
                                start="7">
                                <li class="c2">
                                    <span class="c5">TAXES</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Buyer must seek her/his own tax advice in connection with purchasing HBX Tokens, which may result in adverse tax consequences, including withholding taxes, income taxes, indirect taxes and tax reporting requirements. </span>
                                </li><li class="c0">
                                    <span class="c6">Buyer is responsible for withholding, collecting, reporting and remitting the correct taxes arising from the purchase, ownership, use, sale, transfer or liquidation of the Tokens to the appropriate tax authorities.</span>
                                </li><li class="c0">
                                    <span class="c6">Company bears no liability or responsibility with respect to any tax consequences to Buyer arising from the Token Sale.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-0 start"
                                start="8">
                                <li class="c12 c8">
                                    <span class="c5">DATA AND PRIVACY</span>
                                </li>
                            </ol><p class="c18 c8">
                                <span class="c5" />
                            </p><ol
                                class="c7 lst-kix_list_8-1"
                                start="4">
                                <li class="c0">
                                    <span class="c6">Buyer shall implement reasonable and appropriate measures designed to secure access to: (i) any device associated with Buyer and utilized in connection with Buyer’s purchase of HBX Token and (ii) any other username, passwords or other login or identifying credentials. </span>
                                </li><li class="c0">
                                    <span class="c6">In the event Buyer is no longer in possession of Buyer’s private keys or any device associated with Buyer’s account or is not able to provide Buyer’s login or identifying credentials, Buyer may lose all purchased HBX Tokens and/or access to Buyer’s account. </span>
                                </li><li class="c0">
                                    <span class="c6">Buyer shall immediately provide to Company information and documents that Company, in its sole discretion, deems necessary or appropriate to comply with any laws, regulations, rules or agreements, including without limitation judicial process. Such documents include, but are not limited to, ID card, passport, driver’s license, utility bills, photographs of associated individuals, government identification cards, or sworn statements.</span>
                                </li><li class="c0">
                                    <span class="c6">Company may refuse to distribute HBX Tokens to Buyer until requested information is provided.</span>
                                </li><li class="c0">
                                    <span class="c6">Privacy and personal data clauses are provided in the Privacy Policy, which is an annex to this Agreement.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-0"
                                start="9">
                                <li class="c2">
                                    <span class="c5">INTELLECTUAL PROPERTY RIGHTS</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Hyperbridge has valid, unrestricted and exclusive ownership of rights to use the patents, trademarks, trademark registrations, trade names, copyrights, know-how, technology and other intellectual property necessary to the conduct the Crowdsale of the HBX and his activities generally.</span>
                                </li><li class="c0">
                                    <span class="c6">In no way shall this Agreement entitle the User or Participant for any intellectual property of Hyperbridge, including the intellectual property rights for the Website and all text, graphics, user interface, visual interface, photographs, trademarks, logos, artwork, and computer code, design, structure, selection, coordination, expression and other content connected to the Website. Arrangement of such content is owned by Hyperbridge and is protected by the Intellectual Property Rights and fair competition laws.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-0"
                                start="10">
                                <li class="c2">
                                    <span class="c5">APPLICABLE LAW AND DISPUTE RESOLUTION</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">The Agreement has been drawn up in accordance with the laws of the Republic of Estonia and the application, interpretation, and termination thereof shall be subject to the laws of the Republic of Estonia. </span>
                                </li><li class="c0">
                                    <span class="c6">If any term, clause or provision of this Agreement is held unlawful, void or unenforceable, then that term, clause or provision will be severable from this Agreement and will not affect the validity or enforceability of any remaining part of that term, clause or provision, or any other term, clause or provision of this Agreement and the invalid condition shall be replaced by a valid condition as close as possible to the outcome and the detail of the replaced condition. </span>
                                </li><li class="c0">
                                    <span class="c6">Any Disputes arising from the performance of the Agreement shall be settled through negotiations. If the Parties fail to resolve the Dispute through negotiation, the Disputes shall be settled by Harju Maakohus (Harju County Court), pursuant to the procedure provided by the law of the Republic of Estonia.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-0"
                                start="11">
                                <li class="c2">
                                    <span class="c5">TERMINATION OF AGREEMENT</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Company`s obligations to transfer Tokens to Buyer under this Agreement shall terminate upon performance of the obligations of the parties in accordance with chapters 2 and 3 of the Agreement. Company may terminate this Agreement at its sole discretion, including without limitation, by reason of change in tax, securities, corporate or other law.</span>
                                </li><li class="c0">
                                    <span class="c6">Company may terminate the Agreement immediately without prior notice, if: &nbsp;</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-2 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">Buyer breaches this Agreement;</span>
                                </li><li class="c0">
                                    <span class="c6">Company is required so by valid court order, or binding order of a Governmental Authority; </span>
                                </li><li class="c0">
                                    <span class="c6">Buyer fails to comply with any applicable laws, directives, rules and/or regulations or Buyer is or becomes a person falling under Article 4.11 of the Agreement;</span>
                                </li><li class="c0">
                                    <span class="c6">in respect of Buyer, a liquidator, receiver or administrative receiver is appointed, Buyer is adjudicated as bankrupt, or declared insolvent. &nbsp;</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_11-1 start"
                                start="3">
                                <li class="c0">
                                    <span class="c6">Upon termination or expiration of this Agreement provisions related to limitation of Company's liability shall survive and apply, including, but not limited to, Articles 5 and 6 of this Agreement.</span>
                                </li><li class="c0">
                                    <span class="c6">Upon termination of this Agreement due to any reason Buyer’s rights shall terminate (including right to use Hyperbridge Platform and all rights associated with HBX Tokens) and the Buyer is not entitled to any refund.</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-0"
                                start="12">
                                <li class="c2">
                                    <span class="c5">MISCELLANEOUS</span>
                                </li>
                            </ol><ol
                                class="c7 lst-kix_list_8-1 start"
                                start="1">
                                <li class="c0">
                                    <span class="c6">All agreements, notices, disclosures and other communications that the Party provides to the other Party pursuant to this Agreement or in connection with or related to Buyer’s purchase of HBX Token, including this Agreement, may be provided by the Party in electronic form.</span>
                                </li><li class="c0 c8">
                                    <span class="c6">The headlines of the subdivisions, articles or paragraphs contained in the Agreement are used for convenience and do not affect the meaning of the Agreement, or interpretation thereof. </span>
                                </li><li class="c0 c8">
                                    <span class="c6">Reference to a specific subdivision, article or paragraph of the Agreement is a reference to a specific subdivision, article or paragraph of the Agreement unless otherwise specified. &nbsp; &nbsp;</span>
                                </li>
                            </ol><p class="c30">
                                <span class="c6" />
                            </p><div>
                                <p class="c23">
                                    <span class="c6" />
                                </p><p class="c16">
                                    <span class="c6" />
                                </p>
                            </div>
                        </div>

                        <c-checkbox
                            id="tokenSaleAgreement"
                            v-model="tokenSaleAgreement"
                            :checked="false"
                            type="square">
                            I confirm that I understand and agree with the terms of the Purchase Agreement.
                        </c-checkbox>

                        <c-checkbox
                            id="jurisdictionAgreement"
                            v-model="jurisdictionAgreement"
                            :checked="false"
                            type="square">
                            I confirm that I am not a resident of any jurisdiction that forbids token purchases.
                        </c-checkbox>

                        <c-checkbox
                            id="residentAgreement"
                            v-model="residentAgreement"
                            :checked="false"
                            type="square">
                            I confirm that I am not a resident of China, United States, or Canada.
                        </c-checkbox>
                    </div>

                    <div class="col-8 offset-2">
                        <div
                            v-if="errors.length"
                            class="errors">
                            <strong>Please correct the following error(s):</strong>
                            <ul>
                                <li
                                    v-for="error in errors"
                                    :key="error">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <br><br>
                        <c-button
                            status="success"
                            class="justify-content-center"
                            iconHide
                            size="xl"
                            :class="{'disabled': !canContinue }"
                            @click="proceed">
                            Proceed to Purchase
                        </c-button>
                    </div>
                    <br><br><br><br>
                </div>
            </div>
        </div>

        <c-popup
            v-if="purchasePopup && purchasePopup.show"
            ref="purchasePopup"
            :activated="purchasePopup.show"
            width="800"
            :type="purchasePopup.type"
            :subTitle="purchasePopup.text"
            @close="closePurchasePopup">
            <div
                slot="customClose"
                hidden />
            <div
                slot="customContent"
                class="purchase-modal">
                <c-tabs :tabNames="['Confirm Purchase']">
                    <c-tab :tabId="1">
                        <div>
                            <div
                                v-if="!purchaseSuccessful"
                                class="tab-card">
                                <div class="sending-block">
                                    <div class="clmn-1">
                                        <div class="grid">
                                            <div class="grid-item">
                                                <div>
                                                    <c-img src="../../static/img/icons/ethereum-icon.jpg" />
                                                    <span class="grid-item__amount">{{ purchaseETH }} ETH</span>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                        </div>
                                        <div class="info text-center">
                                            <strong>{{ purchaseAddress.slice(0, 8) }}...{{ purchaseAddress.slice(-4) }}</strong>
                                        </div>
                                    </div>
                                    <div
                                        class="clmn-2"
                                        style="margin-bottom: 130px;">
                                        <div class="directions">
                                            <div class="right-arrow">
                                                <div
                                                    class="progress"
                                                    style="width: 100%" />
                                            </div>
                                            <div class="left-arrow">
                                                <div
                                                    class="progress"
                                                    style="width: 100%" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clmn-3">
                                        <div class="grid">
                                            <div class="grid-item">
                                                <div style="background-color: #eee">
                                                    <c-img
                                                        src="../../static/img/icons/token-icon.png"
                                                        style="padding: 5px;" />
                                                    <span class="grid-item__amount">{{ purchaseHBX }} HBX</span>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                            <div class="grid-item">
                                                <div />
                                            </div>
                                        </div>
                                        <div class="info text-center">
                                            <strong>{{ tokenContractAddress.slice(0, 8) }}...{{ tokenContractAddress.slice(-4) }}</strong>
                                        </div>
                                    </div>
                                </div>

                                <br><br>

                                <h3>Transaction Details</h3>

                                <div
                                    v-if="purchaseError"
                                    class="alert alert-warning">
                                    An error occurred with the purchase: {{ purchaseError }}
                                </div>

                                <div>
                                    <p>
                                        Purchase Amount: {{ purchaseHBX }} HBX
                                        <br>
                                        Purchase Address: <a
                                            :href="`https://etherscan.io/address/${purchaseAddress}`"
                                            @click="gaStep(20)"><strong>{{ purchaseAddress }}</strong></a>
                                        <br>
                                        Payment Amount: {{ purchaseETH }} ETH
                                        <br>
                                        <template v-if="tokenContractAddress">
                                            Payment Address: <a
                                                :href="`https://etherscan.io/address/${tokenContractAddress}`"
                                                @click="gaStep(21)"><strong>{{ tokenContractAddress }}</strong></a>
                                        </template>
                                        <br>
                                        <template
                                            v-if="!tokenContractAddress"
                                            class="alert alert-warning">
                                            No contract address. Check your <c-button href="/settings/protocol">
                                                Protocol Settings
                                            </c-button>
                                        </template>
                                    </p>
                                </div>

                                <br><br>
                                <div style="text-align: center">
                                    <c-button
                                        status="info"
                                        class="justify-content-center"
                                        iconHide
                                        size="xl"
                                        @click="confirmPurchase">
                                        Confirm Purchase
                                    </c-button>
                                </div>
                                <br>
                            </div>
                            <div
                                v-if="purchaseSuccessful"
                                class="tab-card">
                                <div class="row">
                                    <div class="col-12 mb-4 text-center">
                                        <h2>
                                            <img
                                                src="/img/success.png"
                                                style="max-width: 100px;">
                                        </h2>
                                        <p>
                                            Transaction <a :href="`http://etherscan.io/tx/${transactionHash}`">{{ transactionHash }}</a>
                                            <br><br>
                                            Boom. You will receive your freshly minted tokens soon, but they won't be usable until December 10th.
                                            <br><br>
                                            Thank you very much for your contribution, and we look forward to building the future of decentralized entertainment with you!
                                            <br><br>
                                            Don't worry, we'll email you a reminder ;)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="d-flex align-items-center justify-content-end">
                            <div>
                                <c-button @click="closePurchasePopup">
                                    Cancel
                                </c-button>
                            </div>
                        </div>
                    </c-tab>
                </c-tabs>
            </div>
        </c-popup>
    </c-layout>
</template>

<script>
import { setInterval } from 'core-js'


export default {
    head() {
        return {
            title: `Token | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `Hyperbridge token used within BlockHub` },
                { hid: 'keywords', name: 'keywords', content: 'hyperbridge token, token, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-user-card': () => import('~/components/user-card').then(m => m.default || m),
        'c-block': () => import('~/components/block').then(m => m.default || m),
        'c-popup': () => import('~/components/popups').then(m => m.default || m),
        'c-carousel-3d': () => import('~/components/carousel-3d').then(m => m.default || m),
        'c-asset-store-card': () => import('~/components/asset/store-card').then(m => m.default || m),
        'c-welcome-box': () => import('~/components/welcome-box').then(m => m.default || m),
        'c-token-sale': () => import('~/components/token-sale-box').then(m => m.default || m)
    },
    data() {
        const checkEthereumConnection = () => {
            if (this.desktopMode || (typeof web3 !== 'undefined' && web3.currentProvider.isMetaMask === true)) {
                this.ethereumConnected = true
            }

            if (typeof window.web3 !== 'undefined') {
                window.web3.eth.getAccounts((err, accounts) => {
                    this.ethereumUnlocked = accounts.length > 0
                })
            }
        }

        if (process.client) {
            setInterval(checkEthereumConnection, 2000)
        }

        const { activeProfile } = this.$store.state.application

        const result = {
            account: this.$store.state.application.account,
            profiles: Object.values(this.$store.state.profiles.keyedById),
            activeProfile,
            purchaseETH: null,
            purchaseHBX: null,
            ETH2USD: 100,
            maxPurchaseUSD: 500,
            tokenPriceUSD: 0.055,
            tokenSaleAgreement: false,
            jurisdictionAgreement: false,
            residentAgreement: false,
            ethereumUnlocked: this.$store.state.application.desktopMode,
            ethereumConnected: this.$store.state.application.desktopMode,
            purchaseAddress: activeProfile ? activeProfile.address : null,
            override: false,
            assets: [
                {
                    name: 'HBX',
                    price: {
                        min: 0.055,
                        max: 0.055,
                        current: 0.055
                    },
                    image: '/img/icons/hbx-token.png',
                    tags: [],
                    css: 'store-card--epic'
                },
                {
                    name: 'Voyager Badge',
                    price: {
                        min: 0.0,
                        max: 0.0,
                        current: 0.0
                    },
                    image: '/img/icons/voyager-badge.png',
                    tags: [],
                    css: 'store-card--special'
                },
                {
                    name: 'Master Sword',
                    price: {
                        min: 0.0,
                        max: 0.0,
                        current: 0.0
                    },
                    image: '/img/icons/master-sword.png',
                    tags: [],
                    css: 'store-card--trending'
                }
            ],
            purchasePopup: {
                title: 'Purchase',
                text: '',
                type: 'custom',
                show: false
            },
            transactionData: null,
            purchaseSuccessful: false,
            purchaseError: null,
            transactionHash: null,
            errors: [],
            profileOptions: {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.profile-picker .swiper-button-next',
                    prevEl: '.profile-picker .swiper-button-prev'
                }
            }
        }

        return result
    },
    computed: {
        desktopMode() {
            return this.$store.state.application.desktopMode
        },
        isMobile() {
            if (!process.client) {
                return false
            }

            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
                return true
            }

            return false
        },
        tokenContractAddress() {
            return '0xebf0027ef3b4b7a742a148cddb0f2b14e5d8f0e9'

            try {
                return this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.reserve.contracts.TokenSale.address
            } catch (e) {

            }
        },
        canContinue() {
            return this.purchaseETH &&
            this.purchaseAddress &&
            this.tokenSaleAgreement &&
            this.jurisdictionAgreement &&
            this.residentAgreement &&
            this.purchaseETH <= (this.maxPurchaseUSD / this.ETH2USD)
        },
        soldDollars() { return this.$store.state.application.externalState['tokenSale.soldDollars'] },
        soldTokens() { return this.$store.state.application.externalState['tokenSale.soldTokens'] }
    },
    created() {
        // axios({
        //     method: 'get',
        //     url: 'https://api.coinmarketcap.com/v1/ticker/ethereum/'
        // })
        // .then((res) => {
        //     this.ETH2USD = res.data[0].price_usd
        // })
        // .catch((err) => {
        //     this.errors.push('Could not get price from coinmarketcap. Please contact support with this error: ' + JSON.stringify(err))
        // })
    },
    methods: {
        calcHBX() {
            this.gaStep(3)

            this.purchaseHBX = (this.purchaseETH * this.ETH2USD) / 0.055
        },
        showContractAddress() {
            this.gaStep(11)

            this.$store.commit('application/activateModal', 'token-contract')
        },
        gaStep(step) {
            window.ga('send', 'event', 'Token', 'Token Purchase', `Token Purchase Step ${step}`, step, { 'NonInteraction': 1 })
        },
        manualOverride() {
            this.override = true
        },
        chooseProfile(profile) {
            this.activeProfile = profile
            this.purchaseAddress = profile.address
        },
        closePurchasePopup() {
            this.purchasePopup.show = false
            this.transactionData = null
        },
        showPurchasePopup(ntf) {
            this.purchasePopup.show = true
        },
        scrollMeTo(refName) {
            const element = this.$refs[refName]
            const top = element.offsetTop

            window.scrollTo(0, top)
        },
        async unlockWallet() {
            this.gaStep(2)

            if (typeof window.web3 !== 'undefined') {
                if (window.ethereum) {
                    try {
                        // Request account access if needed
                        await window.ethereum.enable()

                        window.web3 = new Web3(window.ethereum)

                        window.web3.eth.getAccounts((err, accounts) => {
                            this.purchaseAddress = accounts[0]
                            this.account.address = accounts[0] // save for verification screen
                        })
                    } catch (error) {
                        // User denied account access...
                    }
                } else if (window.web3) {
                    window.web3 = new Web3(window.web3.currentProvider)

                    window.web3.eth.getAccounts((err, accounts) => {
                        this.purchaseAddress = accounts[0]
                    })
                }
            }
        },
        confirmPurchase() {
            this.gaStep(8)

            if (this.desktopMode) {
                Bridge.sendTransactionRequest({
                    fromAddress: this.purchaseAddress,
                    toAddress: this.tokenContractAddress,
                    amount: this.purchaseETH
                }).then(data => {
                    if (!data.success) {
                        this.purchaseSuccessful = false
                        this.purchaseError = data.message
                        return
                    }

                    this.purchaseSuccessful = true
                    this.transactionHash = data.transactionHash
                })
            } else {
                window.web3.eth.sendTransaction({
                    to: this.tokenContractAddress,
                    from: this.purchaseAddress,
                    value: window.web3.toWei(this.purchaseETH, 'ether'),
                    gasPrice: web3.toWei('10', 'gwei')
                }, (err, transactionHash) => {
                    if (err) {
                        this.gaStep(9)

                        this.purchaseSuccessful = false
                        this.purchaseError = 'An error occurred sending with MetaMask. Please try again or contact support.'
                        return
                    }

                    this.gaStep(10)
                    this.purchaseSuccessful = true
                    this.transactionHash = transactionHash
                })
            }
        },
        proceed() {
            this.gaStep(7)

            this.errors = []

            if (this.canContinue) {
                this.showPurchasePopup()

                return
            }

            if (!this.purchaseETH) {
                this.errors.push('You must specify how many HBX to purchase.')
            }
            if (!this.purchaseAddress) {
                this.errors.push('You must input your Ethereum address.')
            }
            if (!this.tokenSaleAgreement) {
                this.errors.push('You must agree to the purchase agreement terms to continue.')
            }
            if (!this.jurisdictionAgreement) {
                this.errors.push('You must agree to the jurisdiction terms to continue.')
            }
            if (!this.residentAgreement) {
                this.errors.push('You must agree to the resident terms to continue.')
            }
            if (!(this.purchaseETH <= (this.maxPurchaseUSD / this.ETH2USD))) {
                this.errors.push('The purchase amount exceeds cap of $500 USD. Please lower your purchase amount.')
            }
        }
    }
}
</script>

<style scoped>
ol.lst-kix_list_7-0{list-style-type:none}.lst-kix_list_14-1>li:before{content:"" counter(lst-ctn-kix_list_14-1,lower-latin) ". "}.lst-kix_list_14-3>li:before{content:"" counter(lst-ctn-kix_list_14-3,decimal) ". "}.lst-kix_list_2-1>li{counter-increment:lst-ctn-kix_list_2-1}ol.lst-kix_list_15-6{list-style-type:none}ol.lst-kix_list_15-7{list-style-type:none}ol.lst-kix_list_15-8{list-style-type:none}ol.lst-kix_list_9-0.start{counter-reset:lst-ctn-kix_list_9-0 3}.lst-kix_list_14-0>li:before{content:"(" counter(lst-ctn-kix_list_14-0,decimal) ") "}.lst-kix_list_14-4>li:before{content:"" counter(lst-ctn-kix_list_14-4,lower-latin) ". "}ol.lst-kix_list_15-2{list-style-type:none}ol.lst-kix_list_15-3{list-style-type:none}ol.lst-kix_list_15-4{list-style-type:none}.lst-kix_list_6-1>li{counter-increment:lst-ctn-kix_list_6-1}.lst-kix_list_14-5>li:before{content:"" counter(lst-ctn-kix_list_14-5,lower-roman) ". "}.lst-kix_list_14-7>li:before{content:"" counter(lst-ctn-kix_list_14-7,lower-latin) ". "}ol.lst-kix_list_15-5{list-style-type:none}ol.lst-kix_list_15-0{list-style-type:none}ol.lst-kix_list_13-4.start{counter-reset:lst-ctn-kix_list_13-4 0}.lst-kix_list_14-6>li:before{content:"" counter(lst-ctn-kix_list_14-6,decimal) ". "}ol.lst-kix_list_15-1{list-style-type:none}.lst-kix_list_13-0>li{counter-increment:lst-ctn-kix_list_13-0}ol.lst-kix_list_7-4.start{counter-reset:lst-ctn-kix_list_7-4 0}.lst-kix_list_17-0>li{counter-increment:lst-ctn-kix_list_17-0}.lst-kix_list_5-0>li{counter-increment:lst-ctn-kix_list_5-0}.lst-kix_list_9-0>li{counter-increment:lst-ctn-kix_list_9-0}ol.lst-kix_list_2-3.start{counter-reset:lst-ctn-kix_list_2-3 0}ol.lst-kix_list_7-5{list-style-type:none}ol.lst-kix_list_7-6{list-style-type:none}ol.lst-kix_list_7-7{list-style-type:none}ol.lst-kix_list_7-8{list-style-type:none}ol.lst-kix_list_7-1{list-style-type:none}ol.lst-kix_list_7-2{list-style-type:none}ol.lst-kix_list_11-8.start{counter-reset:lst-ctn-kix_list_11-8 0}ol.lst-kix_list_7-3{list-style-type:none}ol.lst-kix_list_7-4{list-style-type:none}.lst-kix_list_14-2>li:before{content:"" counter(lst-ctn-kix_list_14-2,lower-roman) ". "}ol.lst-kix_list_5-3.start{counter-reset:lst-ctn-kix_list_5-3 0}ol.lst-kix_list_12-0.start{counter-reset:lst-ctn-kix_list_12-0 3}.lst-kix_list_4-3>li{counter-increment:lst-ctn-kix_list_4-3}ol.lst-kix_list_17-1.start{counter-reset:lst-ctn-kix_list_17-1 0}ol.lst-kix_list_3-7.start{counter-reset:lst-ctn-kix_list_3-7 0}.lst-kix_list_14-8>li:before{content:"" counter(lst-ctn-kix_list_14-8,lower-roman) ". "}ol.lst-kix_list_8-8.start{counter-reset:lst-ctn-kix_list_8-8 0}.lst-kix_list_3-2>li{counter-increment:lst-ctn-kix_list_3-2}ol.lst-kix_list_15-5.start{counter-reset:lst-ctn-kix_list_15-5 0}ol.lst-kix_list_10-4.start{counter-reset:lst-ctn-kix_list_10-4 0}.lst-kix_list_7-2>li{counter-increment:lst-ctn-kix_list_7-2}.lst-kix_list_5-0>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) " "}ol.lst-kix_list_6-0{list-style-type:none}ol.lst-kix_list_6-1{list-style-type:none}.lst-kix_list_14-8>li{counter-increment:lst-ctn-kix_list_14-8}.lst-kix_list_5-4>li{counter-increment:lst-ctn-kix_list_5-4}ol.lst-kix_list_16-5{list-style-type:none}.lst-kix_list_1-4>li{counter-increment:lst-ctn-kix_list_1-4}ol.lst-kix_list_16-6{list-style-type:none}ol.lst-kix_list_16-7{list-style-type:none}ol.lst-kix_list_1-6.start{counter-reset:lst-ctn-kix_list_1-6 0}ol.lst-kix_list_16-8{list-style-type:none}.lst-kix_list_5-3>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) "." counter(lst-ctn-kix_list_5-2,decimal) "." counter(lst-ctn-kix_list_5-3,decimal) " "}ol.lst-kix_list_9-5.start{counter-reset:lst-ctn-kix_list_9-5 0}ol.lst-kix_list_16-1{list-style-type:none}ol.lst-kix_list_16-2{list-style-type:none}.lst-kix_list_5-2>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) "." counter(lst-ctn-kix_list_5-2,decimal) " "}ol.lst-kix_list_16-3{list-style-type:none}.lst-kix_list_8-3>li{counter-increment:lst-ctn-kix_list_8-3}ol.lst-kix_list_16-4{list-style-type:none}.lst-kix_list_5-1>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) " "}ol.lst-kix_list_16-0{list-style-type:none}.lst-kix_list_5-7>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) "." counter(lst-ctn-kix_list_5-2,decimal) "." counter(lst-ctn-kix_list_5-3,decimal) "." counter(lst-ctn-kix_list_5-4,decimal) "." counter(lst-ctn-kix_list_5-5,decimal) "." counter(lst-ctn-kix_list_5-6,decimal) "." counter(lst-ctn-kix_list_5-7,decimal) " "}.lst-kix_list_5-6>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) "." counter(lst-ctn-kix_list_5-2,decimal) "." counter(lst-ctn-kix_list_5-3,decimal) "." counter(lst-ctn-kix_list_5-4,decimal) "." counter(lst-ctn-kix_list_5-5,decimal) "." counter(lst-ctn-kix_list_5-6,decimal) " "}.lst-kix_list_5-8>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) "." counter(lst-ctn-kix_list_5-2,decimal) "." counter(lst-ctn-kix_list_5-3,decimal) "." counter(lst-ctn-kix_list_5-4,decimal) "." counter(lst-ctn-kix_list_5-5,decimal) "." counter(lst-ctn-kix_list_5-6,decimal) "." counter(lst-ctn-kix_list_5-7,decimal) "." counter(lst-ctn-kix_list_5-8,decimal) " "}.lst-kix_list_9-4>li{counter-increment:lst-ctn-kix_list_9-4}ol.lst-kix_list_6-6{list-style-type:none}ol.lst-kix_list_6-7{list-style-type:none}.lst-kix_list_5-4>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) "." counter(lst-ctn-kix_list_5-2,decimal) "." counter(lst-ctn-kix_list_5-3,decimal) "." counter(lst-ctn-kix_list_5-4,decimal) " "}ol.lst-kix_list_6-8{list-style-type:none}.lst-kix_list_5-5>li:before{content:"" counter(lst-ctn-kix_list_5-0,decimal) "." counter(lst-ctn-kix_list_5-1,decimal) "." counter(lst-ctn-kix_list_5-2,decimal) "." counter(lst-ctn-kix_list_5-3,decimal) "." counter(lst-ctn-kix_list_5-4,decimal) "." counter(lst-ctn-kix_list_5-5,decimal) " "}ol.lst-kix_list_6-2{list-style-type:none}ol.lst-kix_list_6-3{list-style-type:none}ol.lst-kix_list_6-4{list-style-type:none}ol.lst-kix_list_16-4.start{counter-reset:lst-ctn-kix_list_16-4 0}ol.lst-kix_list_6-5{list-style-type:none}ol.lst-kix_list_14-1.start{counter-reset:lst-ctn-kix_list_14-1 0}ol.lst-kix_list_12-5.start{counter-reset:lst-ctn-kix_list_12-5 0}.lst-kix_list_6-1>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) " "}.lst-kix_list_6-3>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) "." counter(lst-ctn-kix_list_6-2,decimal) "." counter(lst-ctn-kix_list_6-3,decimal) " "}.lst-kix_list_6-5>li{counter-increment:lst-ctn-kix_list_6-5}.lst-kix_list_6-8>li{counter-increment:lst-ctn-kix_list_6-8}.lst-kix_list_6-0>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) " "}.lst-kix_list_6-4>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) "." counter(lst-ctn-kix_list_6-2,decimal) "." counter(lst-ctn-kix_list_6-3,decimal) "." counter(lst-ctn-kix_list_6-4,decimal) " "}ol.lst-kix_list_14-8.start{counter-reset:lst-ctn-kix_list_14-8 0}.lst-kix_list_3-6>li{counter-increment:lst-ctn-kix_list_3-6}.lst-kix_list_6-2>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) "." counter(lst-ctn-kix_list_6-2,decimal) " "}ol.lst-kix_list_15-0.start{counter-reset:lst-ctn-kix_list_15-0 0}.lst-kix_list_2-5>li{counter-increment:lst-ctn-kix_list_2-5}.lst-kix_list_2-8>li{counter-increment:lst-ctn-kix_list_2-8}ol.lst-kix_list_3-2.start{counter-reset:lst-ctn-kix_list_3-2 0}.lst-kix_list_6-8>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) "." counter(lst-ctn-kix_list_6-2,decimal) "." counter(lst-ctn-kix_list_6-3,decimal) "." counter(lst-ctn-kix_list_6-4,decimal) "." counter(lst-ctn-kix_list_6-5,decimal) "." counter(lst-ctn-kix_list_6-6,decimal) "." counter(lst-ctn-kix_list_6-7,decimal) "." counter(lst-ctn-kix_list_6-8,decimal) " "}.lst-kix_list_6-5>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) "." counter(lst-ctn-kix_list_6-2,decimal) "." counter(lst-ctn-kix_list_6-3,decimal) "." counter(lst-ctn-kix_list_6-4,decimal) "." counter(lst-ctn-kix_list_6-5,decimal) " "}.lst-kix_list_6-7>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) "." counter(lst-ctn-kix_list_6-2,decimal) "." counter(lst-ctn-kix_list_6-3,decimal) "." counter(lst-ctn-kix_list_6-4,decimal) "." counter(lst-ctn-kix_list_6-5,decimal) "." counter(lst-ctn-kix_list_6-6,decimal) "." counter(lst-ctn-kix_list_6-7,decimal) " "}.lst-kix_list_6-6>li:before{content:"" counter(lst-ctn-kix_list_6-0,decimal) "." counter(lst-ctn-kix_list_6-1,decimal) "." counter(lst-ctn-kix_list_6-2,decimal) "." counter(lst-ctn-kix_list_6-3,decimal) "." counter(lst-ctn-kix_list_6-4,decimal) "." counter(lst-ctn-kix_list_6-5,decimal) "." counter(lst-ctn-kix_list_6-6,decimal) " "}ol.lst-kix_list_17-8{list-style-type:none}ol.lst-kix_list_10-6.start{counter-reset:lst-ctn-kix_list_10-6 0}.lst-kix_list_7-4>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) "." counter(lst-ctn-kix_list_7-2,decimal) "." counter(lst-ctn-kix_list_7-3,decimal) "." counter(lst-ctn-kix_list_7-4,decimal) " "}.lst-kix_list_7-6>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) "." counter(lst-ctn-kix_list_7-2,decimal) "." counter(lst-ctn-kix_list_7-3,decimal) "." counter(lst-ctn-kix_list_7-4,decimal) "." counter(lst-ctn-kix_list_7-5,decimal) "." counter(lst-ctn-kix_list_7-6,decimal) " "}ol.lst-kix_list_17-4{list-style-type:none}ol.lst-kix_list_17-5{list-style-type:none}ol.lst-kix_list_6-2.start{counter-reset:lst-ctn-kix_list_6-2 0}.lst-kix_list_15-5>li{counter-increment:lst-ctn-kix_list_15-5}ol.lst-kix_list_17-6{list-style-type:none}ol.lst-kix_list_17-7{list-style-type:none}ol.lst-kix_list_17-0{list-style-type:none}ol.lst-kix_list_17-1{list-style-type:none}ol.lst-kix_list_17-2{list-style-type:none}.lst-kix_list_7-2>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) "." counter(lst-ctn-kix_list_7-2,decimal) " "}ol.lst-kix_list_17-3{list-style-type:none}.lst-kix_list_7-6>li{counter-increment:lst-ctn-kix_list_7-6}.lst-kix_list_8-6>li{counter-increment:lst-ctn-kix_list_8-6}.lst-kix_list_12-6>li{counter-increment:lst-ctn-kix_list_12-6}ol.lst-kix_list_4-6.start{counter-reset:lst-ctn-kix_list_4-6 0}ol.lst-kix_list_9-7{list-style-type:none}ol.lst-kix_list_9-8{list-style-type:none}.lst-kix_list_13-7>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) "." counter(lst-ctn-kix_list_13-2,decimal) "." counter(lst-ctn-kix_list_13-3,decimal) "." counter(lst-ctn-kix_list_13-4,decimal) "." counter(lst-ctn-kix_list_13-5,decimal) "." counter(lst-ctn-kix_list_13-6,decimal) "." counter(lst-ctn-kix_list_13-7,decimal) ". "}ol.lst-kix_list_3-0.start{counter-reset:lst-ctn-kix_list_3-0 0}ol.lst-kix_list_9-3{list-style-type:none}ol.lst-kix_list_9-4{list-style-type:none}.lst-kix_list_5-7>li{counter-increment:lst-ctn-kix_list_5-7}ol.lst-kix_list_9-5{list-style-type:none}.lst-kix_list_7-8>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) "." counter(lst-ctn-kix_list_7-2,decimal) "." counter(lst-ctn-kix_list_7-3,decimal) "." counter(lst-ctn-kix_list_7-4,decimal) "." counter(lst-ctn-kix_list_7-5,decimal) "." counter(lst-ctn-kix_list_7-6,decimal) "." counter(lst-ctn-kix_list_7-7,decimal) "." counter(lst-ctn-kix_list_7-8,decimal) " "}ol.lst-kix_list_9-6{list-style-type:none}.lst-kix_list_15-6>li{counter-increment:lst-ctn-kix_list_15-6}.lst-kix_list_4-7>li{counter-increment:lst-ctn-kix_list_4-7}ol.lst-kix_list_9-0{list-style-type:none}ol.lst-kix_list_9-1{list-style-type:none}ol.lst-kix_list_9-2{list-style-type:none}ol.lst-kix_list_2-5.start{counter-reset:lst-ctn-kix_list_2-5 0}.lst-kix_list_15-5>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) "." counter(lst-ctn-kix_list_15-2,decimal) "." counter(lst-ctn-kix_list_15-3,decimal) "." counter(lst-ctn-kix_list_15-4,decimal) "." counter(lst-ctn-kix_list_15-5,decimal) " "}.lst-kix_list_9-8>li{counter-increment:lst-ctn-kix_list_9-8}.lst-kix_list_13-4>li{counter-increment:lst-ctn-kix_list_13-4}.lst-kix_list_4-1>li:before{content:"" counter(lst-ctn-kix_list_4-1,lower-latin) ". "}.lst-kix_list_15-7>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) "." counter(lst-ctn-kix_list_15-2,decimal) "." counter(lst-ctn-kix_list_15-3,decimal) "." counter(lst-ctn-kix_list_15-4,decimal) "." counter(lst-ctn-kix_list_15-5,decimal) "." counter(lst-ctn-kix_list_15-6,decimal) "." counter(lst-ctn-kix_list_15-7,decimal) " "}.lst-kix_list_17-7>li{counter-increment:lst-ctn-kix_list_17-7}.lst-kix_list_4-3>li:before{content:"" counter(lst-ctn-kix_list_4-3,decimal) ". "}.lst-kix_list_4-5>li:before{content:"" counter(lst-ctn-kix_list_4-5,lower-roman) ". "}.lst-kix_list_1-8>li{counter-increment:lst-ctn-kix_list_1-8}.lst-kix_list_10-5>li{counter-increment:lst-ctn-kix_list_10-5}.lst-kix_list_15-1>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) " "}ol.lst-kix_list_1-4.start{counter-reset:lst-ctn-kix_list_1-4 0}.lst-kix_list_3-5>li{counter-increment:lst-ctn-kix_list_3-5}ol.lst-kix_list_1-1.start{counter-reset:lst-ctn-kix_list_1-1 0}.lst-kix_list_15-3>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) "." counter(lst-ctn-kix_list_15-2,decimal) "." counter(lst-ctn-kix_list_15-3,decimal) " "}ol.lst-kix_list_4-4.start{counter-reset:lst-ctn-kix_list_4-4 0}.lst-kix_list_16-2>li{counter-increment:lst-ctn-kix_list_16-2}.lst-kix_list_6-4>li{counter-increment:lst-ctn-kix_list_6-4}ol.lst-kix_list_9-2.start{counter-reset:lst-ctn-kix_list_9-2 0}ol.lst-kix_list_16-7.start{counter-reset:lst-ctn-kix_list_16-7 0}.lst-kix_list_9-3>li{counter-increment:lst-ctn-kix_list_9-3}.lst-kix_list_11-2>li{counter-increment:lst-ctn-kix_list_11-2}ol.lst-kix_list_15-2.start{counter-reset:lst-ctn-kix_list_15-2 0}ol.lst-kix_list_2-8.start{counter-reset:lst-ctn-kix_list_2-8 0}ol.lst-kix_list_8-8{list-style-type:none}.lst-kix_list_12-3>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) "." counter(lst-ctn-kix_list_12-2,decimal) "." counter(lst-ctn-kix_list_12-3,decimal) ". "}ol.lst-kix_list_7-6.start{counter-reset:lst-ctn-kix_list_7-6 0}ol.lst-kix_list_8-4{list-style-type:none}.lst-kix_list_12-1>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) ". "}ol.lst-kix_list_8-5{list-style-type:none}ol.lst-kix_list_8-6{list-style-type:none}ol.lst-kix_list_8-7{list-style-type:none}ol.lst-kix_list_8-0{list-style-type:none}.lst-kix_list_16-3>li{counter-increment:lst-ctn-kix_list_16-3}ol.lst-kix_list_8-1{list-style-type:none}ol.lst-kix_list_8-2{list-style-type:none}.lst-kix_list_13-3>li{counter-increment:lst-ctn-kix_list_13-3}ol.lst-kix_list_13-6.start{counter-reset:lst-ctn-kix_list_13-6 0}ol.lst-kix_list_8-3{list-style-type:none}.lst-kix_list_10-4>li{counter-increment:lst-ctn-kix_list_10-4}ol.lst-kix_list_15-3.start{counter-reset:lst-ctn-kix_list_15-3 0}.lst-kix_list_14-1>li{counter-increment:lst-ctn-kix_list_14-1}.lst-kix_list_13-3>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) "." counter(lst-ctn-kix_list_13-2,decimal) "." counter(lst-ctn-kix_list_13-3,decimal) ". "}ol.lst-kix_list_5-8.start{counter-reset:lst-ctn-kix_list_5-8 0}.lst-kix_list_1-3>li{counter-increment:lst-ctn-kix_list_1-3}.lst-kix_list_13-5>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) "." counter(lst-ctn-kix_list_13-2,decimal) "." counter(lst-ctn-kix_list_13-3,decimal) "." counter(lst-ctn-kix_list_13-4,decimal) "." counter(lst-ctn-kix_list_13-5,decimal) ". "}.lst-kix_list_12-5>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) "." counter(lst-ctn-kix_list_12-2,decimal) "." counter(lst-ctn-kix_list_12-3,decimal) "." counter(lst-ctn-kix_list_12-4,decimal) "." counter(lst-ctn-kix_list_12-5,decimal) ". "}ol.lst-kix_list_13-7.start{counter-reset:lst-ctn-kix_list_13-7 0}ol.lst-kix_list_12-2.start{counter-reset:lst-ctn-kix_list_12-2 0}.lst-kix_list_12-7>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) "." counter(lst-ctn-kix_list_12-2,decimal) "." counter(lst-ctn-kix_list_12-3,decimal) "." counter(lst-ctn-kix_list_12-4,decimal) "." counter(lst-ctn-kix_list_12-5,decimal) "." counter(lst-ctn-kix_list_12-6,decimal) "." counter(lst-ctn-kix_list_12-7,decimal) ". "}ol.lst-kix_list_6-0.start{counter-reset:lst-ctn-kix_list_6-0 6}.lst-kix_list_4-2>li{counter-increment:lst-ctn-kix_list_4-2}.lst-kix_list_13-1>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) ". "}ol.lst-kix_list_3-1{list-style-type:none}ol.lst-kix_list_3-2{list-style-type:none}ol.lst-kix_list_3-3{list-style-type:none}ol.lst-kix_list_3-4.start{counter-reset:lst-ctn-kix_list_3-4 0}.lst-kix_list_5-1>li{counter-increment:lst-ctn-kix_list_5-1}ol.lst-kix_list_3-4{list-style-type:none}ol.lst-kix_list_3-0{list-style-type:none}ol.lst-kix_list_11-6{list-style-type:none}ol.lst-kix_list_11-7{list-style-type:none}ol.lst-kix_list_11-8{list-style-type:none}.lst-kix_list_1-1>li{counter-increment:lst-ctn-kix_list_1-1}.lst-kix_list_7-1>li{counter-increment:lst-ctn-kix_list_7-1}ol.lst-kix_list_11-2{list-style-type:none}ol.lst-kix_list_11-3{list-style-type:none}ol.lst-kix_list_2-6.start{counter-reset:lst-ctn-kix_list_2-6 0}.lst-kix_list_3-0>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) ". "}ol.lst-kix_list_11-4{list-style-type:none}ol.lst-kix_list_11-5{list-style-type:none}ol.lst-kix_list_13-1.start{counter-reset:lst-ctn-kix_list_13-1 1}ol.lst-kix_list_11-0{list-style-type:none}ol.lst-kix_list_11-1{list-style-type:none}.lst-kix_list_16-0>li{counter-increment:lst-ctn-kix_list_16-0}.lst-kix_list_4-0>li{counter-increment:lst-ctn-kix_list_4-0}.lst-kix_list_8-0>li{counter-increment:lst-ctn-kix_list_8-0}.lst-kix_list_10-0>li{counter-increment:lst-ctn-kix_list_10-0}.lst-kix_list_3-4>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) "." counter(lst-ctn-kix_list_3-2,decimal) "." counter(lst-ctn-kix_list_3-3,decimal) "." counter(lst-ctn-kix_list_3-4,decimal) ". "}.lst-kix_list_3-3>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) "." counter(lst-ctn-kix_list_3-2,decimal) "." counter(lst-ctn-kix_list_3-3,decimal) ". "}ol.lst-kix_list_3-5{list-style-type:none}ol.lst-kix_list_3-6{list-style-type:none}.lst-kix_list_8-0>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) " "}ol.lst-kix_list_3-7{list-style-type:none}ol.lst-kix_list_3-8{list-style-type:none}.lst-kix_list_8-7>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) "." counter(lst-ctn-kix_list_8-2,decimal) "." counter(lst-ctn-kix_list_8-3,decimal) "." counter(lst-ctn-kix_list_8-4,decimal) "." counter(lst-ctn-kix_list_8-5,decimal) "." counter(lst-ctn-kix_list_8-6,decimal) "." counter(lst-ctn-kix_list_8-7,decimal) " "}.lst-kix_list_3-8>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) "." counter(lst-ctn-kix_list_3-2,decimal) "." counter(lst-ctn-kix_list_3-3,decimal) "." counter(lst-ctn-kix_list_3-4,decimal) "." counter(lst-ctn-kix_list_3-5,decimal) "." counter(lst-ctn-kix_list_3-6,decimal) "." counter(lst-ctn-kix_list_3-7,decimal) "." counter(lst-ctn-kix_list_3-8,decimal) ". "}ol.lst-kix_list_10-7.start{counter-reset:lst-ctn-kix_list_10-7 0}.lst-kix_list_13-1>li{counter-increment:lst-ctn-kix_list_13-1}ol.lst-kix_list_15-8.start{counter-reset:lst-ctn-kix_list_15-8 0}.lst-kix_list_8-3>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) "." counter(lst-ctn-kix_list_8-2,decimal) "." counter(lst-ctn-kix_list_8-3,decimal) " "}.lst-kix_list_3-7>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) "." counter(lst-ctn-kix_list_3-2,decimal) "." counter(lst-ctn-kix_list_3-3,decimal) "." counter(lst-ctn-kix_list_3-4,decimal) "." counter(lst-ctn-kix_list_3-5,decimal) "." counter(lst-ctn-kix_list_3-6,decimal) "." counter(lst-ctn-kix_list_3-7,decimal) ". "}.lst-kix_list_8-4>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) "." counter(lst-ctn-kix_list_8-2,decimal) "." counter(lst-ctn-kix_list_8-3,decimal) "." counter(lst-ctn-kix_list_8-4,decimal) " "}.lst-kix_list_10-2>li{counter-increment:lst-ctn-kix_list_10-2}ol.lst-kix_list_8-5.start{counter-reset:lst-ctn-kix_list_8-5 0}.lst-kix_list_17-1>li{counter-increment:lst-ctn-kix_list_17-1}.lst-kix_list_11-1>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) ". "}.lst-kix_list_11-0>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) ". "}ol.lst-kix_list_9-3.start{counter-reset:lst-ctn-kix_list_9-3 0}.lst-kix_list_8-8>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) "." counter(lst-ctn-kix_list_8-2,decimal) "." counter(lst-ctn-kix_list_8-3,decimal) "." counter(lst-ctn-kix_list_8-4,decimal) "." counter(lst-ctn-kix_list_8-5,decimal) "." counter(lst-ctn-kix_list_8-6,decimal) "." counter(lst-ctn-kix_list_8-7,decimal) "." counter(lst-ctn-kix_list_8-8,decimal) " "}ol.lst-kix_list_2-2{list-style-type:none}.lst-kix_list_16-8>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) "." counter(lst-ctn-kix_list_16-2,decimal) "." counter(lst-ctn-kix_list_16-3,decimal) "." counter(lst-ctn-kix_list_16-4,decimal) "." counter(lst-ctn-kix_list_16-5,decimal) "." counter(lst-ctn-kix_list_16-6,decimal) "." counter(lst-ctn-kix_list_16-7,decimal) "." counter(lst-ctn-kix_list_16-8,decimal) " "}ol.lst-kix_list_2-3{list-style-type:none}ol.lst-kix_list_2-4{list-style-type:none}.lst-kix_list_16-7>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) "." counter(lst-ctn-kix_list_16-2,decimal) "." counter(lst-ctn-kix_list_16-3,decimal) "." counter(lst-ctn-kix_list_16-4,decimal) "." counter(lst-ctn-kix_list_16-5,decimal) "." counter(lst-ctn-kix_list_16-6,decimal) "." counter(lst-ctn-kix_list_16-7,decimal) " "}ol.lst-kix_list_7-2.start{counter-reset:lst-ctn-kix_list_7-2 3}ol.lst-kix_list_2-5{list-style-type:none}.lst-kix_list_17-8>li{counter-increment:lst-ctn-kix_list_17-8}ol.lst-kix_list_2-0{list-style-type:none}ol.lst-kix_list_2-1{list-style-type:none}.lst-kix_list_4-8>li:before{content:"" counter(lst-ctn-kix_list_4-8,lower-roman) ". "}ol.lst-kix_list_12-5{list-style-type:none}ol.lst-kix_list_12-6{list-style-type:none}.lst-kix_list_4-7>li:before{content:"" counter(lst-ctn-kix_list_4-7,lower-latin) ". "}ol.lst-kix_list_12-7{list-style-type:none}.lst-kix_list_14-2>li{counter-increment:lst-ctn-kix_list_14-2}.lst-kix_list_17-0>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) " "}ol.lst-kix_list_12-8{list-style-type:none}ol.lst-kix_list_12-1{list-style-type:none}ol.lst-kix_list_12-2{list-style-type:none}ol.lst-kix_list_12-3{list-style-type:none}ol.lst-kix_list_12-4{list-style-type:none}.lst-kix_list_16-0>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) " "}ol.lst-kix_list_12-0{list-style-type:none}ol.lst-kix_list_4-8.start{counter-reset:lst-ctn-kix_list_4-8 0}.lst-kix_list_8-4>li{counter-increment:lst-ctn-kix_list_8-4}.lst-kix_list_16-4>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) "." counter(lst-ctn-kix_list_16-2,decimal) "." counter(lst-ctn-kix_list_16-3,decimal) "." counter(lst-ctn-kix_list_16-4,decimal) " "}ol.lst-kix_list_3-3.start{counter-reset:lst-ctn-kix_list_3-3 0}ol.lst-kix_list_10-8.start{counter-reset:lst-ctn-kix_list_10-8 0}.lst-kix_list_16-3>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) "." counter(lst-ctn-kix_list_16-2,decimal) "." counter(lst-ctn-kix_list_16-3,decimal) " "}ol.lst-kix_list_2-6{list-style-type:none}ol.lst-kix_list_2-7{list-style-type:none}ol.lst-kix_list_2-8{list-style-type:none}.lst-kix_list_11-3>li{counter-increment:lst-ctn-kix_list_11-3}ol.lst-kix_list_7-1.start{counter-reset:lst-ctn-kix_list_7-1 2}ol.lst-kix_list_8-6.start{counter-reset:lst-ctn-kix_list_8-6 0}.lst-kix_list_17-7>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) "." counter(lst-ctn-kix_list_17-2,decimal) "." counter(lst-ctn-kix_list_17-3,decimal) "." counter(lst-ctn-kix_list_17-4,decimal) "." counter(lst-ctn-kix_list_17-5,decimal) "." counter(lst-ctn-kix_list_17-6,decimal) "." counter(lst-ctn-kix_list_17-7,decimal) " "}.lst-kix_list_16-7>li{counter-increment:lst-ctn-kix_list_16-7}.lst-kix_list_17-8>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) "." counter(lst-ctn-kix_list_17-2,decimal) "." counter(lst-ctn-kix_list_17-3,decimal) "." counter(lst-ctn-kix_list_17-4,decimal) "." counter(lst-ctn-kix_list_17-5,decimal) "." counter(lst-ctn-kix_list_17-6,decimal) "." counter(lst-ctn-kix_list_17-7,decimal) "." counter(lst-ctn-kix_list_17-8,decimal) " "}.lst-kix_list_17-3>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) "." counter(lst-ctn-kix_list_17-2,decimal) "." counter(lst-ctn-kix_list_17-3,decimal) " "}.lst-kix_list_17-4>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) "." counter(lst-ctn-kix_list_17-2,decimal) "." counter(lst-ctn-kix_list_17-3,decimal) "." counter(lst-ctn-kix_list_17-4,decimal) " "}ol.lst-kix_list_8-0.start{counter-reset:lst-ctn-kix_list_8-0 7}.lst-kix_list_7-0>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) " "}.lst-kix_list_13-8>li{counter-increment:lst-ctn-kix_list_13-8}.lst-kix_list_2-2>li{counter-increment:lst-ctn-kix_list_2-2}ol.lst-kix_list_4-7.start{counter-reset:lst-ctn-kix_list_4-7 0}.lst-kix_list_16-5>li{counter-increment:lst-ctn-kix_list_16-5}ol.lst-kix_list_5-0{list-style-type:none}.lst-kix_list_3-7>li{counter-increment:lst-ctn-kix_list_3-7}ol.lst-kix_list_5-1{list-style-type:none}ol.lst-kix_list_9-7.start{counter-reset:lst-ctn-kix_list_9-7 0}ol.lst-kix_list_5-2{list-style-type:none}ol.lst-kix_list_13-8{list-style-type:none}.lst-kix_list_2-4>li:before{content:"" counter(lst-ctn-kix_list_2-4,lower-latin) ". "}.lst-kix_list_2-8>li:before{content:"" counter(lst-ctn-kix_list_2-8,lower-roman) ". "}ol.lst-kix_list_13-4{list-style-type:none}ol.lst-kix_list_13-5{list-style-type:none}ol.lst-kix_list_13-6{list-style-type:none}ol.lst-kix_list_13-7{list-style-type:none}ol.lst-kix_list_13-0{list-style-type:none}ol.lst-kix_list_13-1{list-style-type:none}.lst-kix_list_6-6>li{counter-increment:lst-ctn-kix_list_6-6}ol.lst-kix_list_13-2{list-style-type:none}ol.lst-kix_list_15-7.start{counter-reset:lst-ctn-kix_list_15-7 0}.lst-kix_list_7-3>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) "." counter(lst-ctn-kix_list_7-2,decimal) "." counter(lst-ctn-kix_list_7-3,decimal) " "}ol.lst-kix_list_13-3{list-style-type:none}.lst-kix_list_10-0>li:before{content:"(" counter(lst-ctn-kix_list_10-0,lower-roman) ") "}.lst-kix_list_9-7>li{counter-increment:lst-ctn-kix_list_9-7}.lst-kix_list_13-6>li{counter-increment:lst-ctn-kix_list_13-6}.lst-kix_list_13-8>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) "." counter(lst-ctn-kix_list_13-2,decimal) "." counter(lst-ctn-kix_list_13-3,decimal) "." counter(lst-ctn-kix_list_13-4,decimal) "." counter(lst-ctn-kix_list_13-5,decimal) "." counter(lst-ctn-kix_list_13-6,decimal) "." counter(lst-ctn-kix_list_13-7,decimal) "." counter(lst-ctn-kix_list_13-8,decimal) ". "}ol.lst-kix_list_14-6.start{counter-reset:lst-ctn-kix_list_14-6 0}ol.lst-kix_list_5-7{list-style-type:none}ol.lst-kix_list_5-8{list-style-type:none}ol.lst-kix_list_5-3{list-style-type:none}.lst-kix_list_8-7>li{counter-increment:lst-ctn-kix_list_8-7}ol.lst-kix_list_5-4{list-style-type:none}ol.lst-kix_list_3-8.start{counter-reset:lst-ctn-kix_list_3-8 0}ol.lst-kix_list_5-5{list-style-type:none}ol.lst-kix_list_5-6{list-style-type:none}.lst-kix_list_7-7>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) "." counter(lst-ctn-kix_list_7-2,decimal) "." counter(lst-ctn-kix_list_7-3,decimal) "." counter(lst-ctn-kix_list_7-4,decimal) "." counter(lst-ctn-kix_list_7-5,decimal) "." counter(lst-ctn-kix_list_7-6,decimal) "." counter(lst-ctn-kix_list_7-7,decimal) " "}ol.lst-kix_list_8-1.start{counter-reset:lst-ctn-kix_list_8-1 0}.lst-kix_list_15-4>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) "." counter(lst-ctn-kix_list_15-2,decimal) "." counter(lst-ctn-kix_list_15-3,decimal) "." counter(lst-ctn-kix_list_15-4,decimal) " "}.lst-kix_list_9-5>li{counter-increment:lst-ctn-kix_list_9-5}.lst-kix_list_5-8>li{counter-increment:lst-ctn-kix_list_5-8}.lst-kix_list_10-4>li:before{content:"" counter(lst-ctn-kix_list_10-4,lower-latin) ". "}.lst-kix_list_10-8>li:before{content:"" counter(lst-ctn-kix_list_10-8,lower-roman) ". "}.lst-kix_list_4-0>li:before{content:"(" counter(lst-ctn-kix_list_4-0,lower-latin) ") "}.lst-kix_list_15-0>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) ". "}.lst-kix_list_15-8>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) "." counter(lst-ctn-kix_list_15-2,decimal) "." counter(lst-ctn-kix_list_15-3,decimal) "." counter(lst-ctn-kix_list_15-4,decimal) "." counter(lst-ctn-kix_list_15-5,decimal) "." counter(lst-ctn-kix_list_15-6,decimal) "." counter(lst-ctn-kix_list_15-7,decimal) "." counter(lst-ctn-kix_list_15-8,decimal) " "}ol.lst-kix_list_14-3.start{counter-reset:lst-ctn-kix_list_14-3 0}.lst-kix_list_15-7>li{counter-increment:lst-ctn-kix_list_15-7}.lst-kix_list_4-4>li:before{content:"" counter(lst-ctn-kix_list_4-4,lower-latin) ". "}ol.lst-kix_list_2-2.start{counter-reset:lst-ctn-kix_list_2-2 0}.lst-kix_list_9-3>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) "." counter(lst-ctn-kix_list_9-2,decimal) "." counter(lst-ctn-kix_list_9-3,decimal) ". "}ol.lst-kix_list_7-0.start{counter-reset:lst-ctn-kix_list_7-0 6}.lst-kix_list_12-8>li{counter-increment:lst-ctn-kix_list_12-8}ol.lst-kix_list_13-2.start{counter-reset:lst-ctn-kix_list_13-2 0}ol.lst-kix_list_4-0{list-style-type:none}ol.lst-kix_list_4-1{list-style-type:none}ol.lst-kix_list_4-2{list-style-type:none}ol.lst-kix_list_4-3{list-style-type:none}ol.lst-kix_list_14-7{list-style-type:none}ol.lst-kix_list_14-4.start{counter-reset:lst-ctn-kix_list_14-4 0}ol.lst-kix_list_14-8{list-style-type:none}.lst-kix_list_9-7>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) "." counter(lst-ctn-kix_list_9-2,decimal) "." counter(lst-ctn-kix_list_9-3,decimal) "." counter(lst-ctn-kix_list_9-4,decimal) "." counter(lst-ctn-kix_list_9-5,decimal) "." counter(lst-ctn-kix_list_9-6,decimal) "." counter(lst-ctn-kix_list_9-7,decimal) ". "}.lst-kix_list_2-4>li{counter-increment:lst-ctn-kix_list_2-4}ol.lst-kix_list_14-3{list-style-type:none}ol.lst-kix_list_3-6.start{counter-reset:lst-ctn-kix_list_3-6 0}ol.lst-kix_list_14-4{list-style-type:none}ol.lst-kix_list_14-5{list-style-type:none}ol.lst-kix_list_14-6{list-style-type:none}.lst-kix_list_11-4>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) "." counter(lst-ctn-kix_list_11-2,decimal) "." counter(lst-ctn-kix_list_11-3,decimal) "." counter(lst-ctn-kix_list_11-4,decimal) ". "}.lst-kix_list_15-2>li{counter-increment:lst-ctn-kix_list_15-2}ol.lst-kix_list_14-0{list-style-type:none}.lst-kix_list_12-4>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) "." counter(lst-ctn-kix_list_12-2,decimal) "." counter(lst-ctn-kix_list_12-3,decimal) "." counter(lst-ctn-kix_list_12-4,decimal) ". "}ol.lst-kix_list_14-1{list-style-type:none}ol.lst-kix_list_14-2{list-style-type:none}.lst-kix_list_5-3>li{counter-increment:lst-ctn-kix_list_5-3}ol.lst-kix_list_4-8{list-style-type:none}.lst-kix_list_7-4>li{counter-increment:lst-ctn-kix_list_7-4}.lst-kix_list_1-0>li:before{content:"(" counter(lst-ctn-kix_list_1-0,decimal) ") "}ol.lst-kix_list_4-4{list-style-type:none}.lst-kix_list_11-8>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) "." counter(lst-ctn-kix_list_11-2,decimal) "." counter(lst-ctn-kix_list_11-3,decimal) "." counter(lst-ctn-kix_list_11-4,decimal) "." counter(lst-ctn-kix_list_11-5,decimal) "." counter(lst-ctn-kix_list_11-6,decimal) "." counter(lst-ctn-kix_list_11-7,decimal) "." counter(lst-ctn-kix_list_11-8,decimal) ". "}.lst-kix_list_12-3>li{counter-increment:lst-ctn-kix_list_12-3}ol.lst-kix_list_4-5{list-style-type:none}ol.lst-kix_list_2-0.start{counter-reset:lst-ctn-kix_list_2-0 0}ol.lst-kix_list_4-6{list-style-type:none}.lst-kix_list_12-0>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) ". "}.lst-kix_list_17-3>li{counter-increment:lst-ctn-kix_list_17-3}ol.lst-kix_list_4-7{list-style-type:none}ol.lst-kix_list_8-4.start{counter-reset:lst-ctn-kix_list_8-4 0}.lst-kix_list_1-4>li:before{content:"" counter(lst-ctn-kix_list_1-4,lower-latin) ". "}.lst-kix_list_13-0>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) ". "}ol.lst-kix_list_3-5.start{counter-reset:lst-ctn-kix_list_3-5 0}.lst-kix_list_1-6>li{counter-increment:lst-ctn-kix_list_1-6}ol.lst-kix_list_13-0.start{counter-reset:lst-ctn-kix_list_13-0 10}.lst-kix_list_14-4>li{counter-increment:lst-ctn-kix_list_14-4}.lst-kix_list_13-4>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) "." counter(lst-ctn-kix_list_13-2,decimal) "." counter(lst-ctn-kix_list_13-3,decimal) "." counter(lst-ctn-kix_list_13-4,decimal) ". "}.lst-kix_list_10-7>li{counter-increment:lst-ctn-kix_list_10-7}.lst-kix_list_2-0>li:before{content:"(" counter(lst-ctn-kix_list_2-0,lower-roman) ") "}ol.lst-kix_list_2-1.start{counter-reset:lst-ctn-kix_list_2-1 0}ol.lst-kix_list_8-3.start{counter-reset:lst-ctn-kix_list_8-3 0}.lst-kix_list_11-5>li{counter-increment:lst-ctn-kix_list_11-5}.lst-kix_list_4-5>li{counter-increment:lst-ctn-kix_list_4-5}ol.lst-kix_list_14-5.start{counter-reset:lst-ctn-kix_list_14-5 0}ol.lst-kix_list_9-8.start{counter-reset:lst-ctn-kix_list_9-8 0}.lst-kix_list_1-8>li:before{content:"" counter(lst-ctn-kix_list_1-8,lower-roman) ". "}.lst-kix_list_12-8>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) "." counter(lst-ctn-kix_list_12-2,decimal) "." counter(lst-ctn-kix_list_12-3,decimal) "." counter(lst-ctn-kix_list_12-4,decimal) "." counter(lst-ctn-kix_list_12-5,decimal) "." counter(lst-ctn-kix_list_12-6,decimal) "." counter(lst-ctn-kix_list_12-7,decimal) "." counter(lst-ctn-kix_list_12-8,decimal) ". "}.lst-kix_list_8-2>li{counter-increment:lst-ctn-kix_list_8-2}.lst-kix_list_4-1>li{counter-increment:lst-ctn-kix_list_4-1}ol.lst-kix_list_17-7.start{counter-reset:lst-ctn-kix_list_17-7 0}ol.lst-kix_list_12-6.start{counter-reset:lst-ctn-kix_list_12-6 0}.lst-kix_list_8-1>li{counter-increment:lst-ctn-kix_list_8-1}ol.lst-kix_list_8-2.start{counter-reset:lst-ctn-kix_list_8-2 0}ol.lst-kix_list_3-1.start{counter-reset:lst-ctn-kix_list_3-1 0}.lst-kix_list_15-0>li{counter-increment:lst-ctn-kix_list_15-0}ol.lst-kix_list_6-6.start{counter-reset:lst-ctn-kix_list_6-6 0}.lst-kix_list_7-0>li{counter-increment:lst-ctn-kix_list_7-0}.lst-kix_list_11-0>li{counter-increment:lst-ctn-kix_list_11-0}ol.lst-kix_list_1-5.start{counter-reset:lst-ctn-kix_list_1-5 0}ol.lst-kix_list_9-6.start{counter-reset:lst-ctn-kix_list_9-6 0}ol.lst-kix_list_16-3.start{counter-reset:lst-ctn-kix_list_16-3 0}.lst-kix_list_2-3>li{counter-increment:lst-ctn-kix_list_2-3}ol.lst-kix_list_4-5.start{counter-reset:lst-ctn-kix_list_4-5 0}.lst-kix_list_1-2>li{counter-increment:lst-ctn-kix_list_1-2}ol.lst-kix_list_14-7.start{counter-reset:lst-ctn-kix_list_14-7 0}ol.lst-kix_list_11-2.start{counter-reset:lst-ctn-kix_list_11-2 0}.lst-kix_list_5-2>li{counter-increment:lst-ctn-kix_list_5-2}.lst-kix_list_9-2>li{counter-increment:lst-ctn-kix_list_9-2}ol.lst-kix_list_8-7.start{counter-reset:lst-ctn-kix_list_8-7 0}.lst-kix_list_17-2>li{counter-increment:lst-ctn-kix_list_17-2}ol.lst-kix_list_17-2.start{counter-reset:lst-ctn-kix_list_17-2 0}.lst-kix_list_13-2>li{counter-increment:lst-ctn-kix_list_13-2}.lst-kix_list_14-3>li{counter-increment:lst-ctn-kix_list_14-3}ol.lst-kix_list_15-6.start{counter-reset:lst-ctn-kix_list_15-6 0}.lst-kix_list_10-3>li{counter-increment:lst-ctn-kix_list_10-3}.lst-kix_list_12-1>li{counter-increment:lst-ctn-kix_list_12-1}ol.lst-kix_list_1-0.start{counter-reset:lst-ctn-kix_list_1-0 0}ol.lst-kix_list_13-3.start{counter-reset:lst-ctn-kix_list_13-3 0}.lst-kix_list_3-0>li{counter-increment:lst-ctn-kix_list_3-0}ol.lst-kix_list_4-0.start{counter-reset:lst-ctn-kix_list_4-0 0}ol.lst-kix_list_11-7.start{counter-reset:lst-ctn-kix_list_11-7 0}ol.lst-kix_list_14-2.start{counter-reset:lst-ctn-kix_list_14-2 0}.lst-kix_list_16-1>li{counter-increment:lst-ctn-kix_list_16-1}ol.lst-kix_list_2-4.start{counter-reset:lst-ctn-kix_list_2-4 0}ol.lst-kix_list_1-3{list-style-type:none}ol.lst-kix_list_1-4{list-style-type:none}.lst-kix_list_2-7>li:before{content:"" counter(lst-ctn-kix_list_2-7,lower-latin) ". "}.lst-kix_list_2-7>li{counter-increment:lst-ctn-kix_list_2-7}ol.lst-kix_list_1-5{list-style-type:none}ol.lst-kix_list_1-6{list-style-type:none}ol.lst-kix_list_1-0{list-style-type:none}.lst-kix_list_2-5>li:before{content:"" counter(lst-ctn-kix_list_2-5,lower-roman) ". "}ol.lst-kix_list_1-1{list-style-type:none}.lst-kix_list_17-5>li{counter-increment:lst-ctn-kix_list_17-5}ol.lst-kix_list_1-2{list-style-type:none}ol.lst-kix_list_17-0.start{counter-reset:lst-ctn-kix_list_17-0 0}ol.lst-kix_list_10-3.start{counter-reset:lst-ctn-kix_list_10-3 0}ol.lst-kix_list_9-4.start{counter-reset:lst-ctn-kix_list_9-4 0}.lst-kix_list_14-6>li{counter-increment:lst-ctn-kix_list_14-6}.lst-kix_list_10-1>li:before{content:"" counter(lst-ctn-kix_list_10-1,lower-latin) ". "}.lst-kix_list_17-6>li{counter-increment:lst-ctn-kix_list_17-6}.lst-kix_list_7-7>li{counter-increment:lst-ctn-kix_list_7-7}ol.lst-kix_list_15-1.start{counter-reset:lst-ctn-kix_list_15-1 0}ol.lst-kix_list_15-4.start{counter-reset:lst-ctn-kix_list_15-4 0}ol.lst-kix_list_4-3.start{counter-reset:lst-ctn-kix_list_4-3 0}ol.lst-kix_list_1-7{list-style-type:none}ol.lst-kix_list_1-8{list-style-type:none}.lst-kix_list_10-7>li:before{content:"" counter(lst-ctn-kix_list_10-7,lower-latin) ". "}.lst-kix_list_7-8>li{counter-increment:lst-ctn-kix_list_7-8}.lst-kix_list_10-5>li:before{content:"" counter(lst-ctn-kix_list_10-5,lower-roman) ". "}ol.lst-kix_list_13-5.start{counter-reset:lst-ctn-kix_list_13-5 0}.lst-kix_list_10-3>li:before{content:"" counter(lst-ctn-kix_list_10-3,decimal) ". "}.lst-kix_list_15-4>li{counter-increment:lst-ctn-kix_list_15-4}.lst-kix_list_2-6>li{counter-increment:lst-ctn-kix_list_2-6}ol.lst-kix_list_7-3.start{counter-reset:lst-ctn-kix_list_7-3 0}ol.lst-kix_list_13-8.start{counter-reset:lst-ctn-kix_list_13-8 0}.lst-kix_list_11-7>li{counter-increment:lst-ctn-kix_list_11-7}.lst-kix_list_9-2>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) "." counter(lst-ctn-kix_list_9-2,decimal) ". "}ol.lst-kix_list_5-7.start{counter-reset:lst-ctn-kix_list_5-7 0}ol.lst-kix_list_14-0.start{counter-reset:lst-ctn-kix_list_14-0 0}.lst-kix_list_12-5>li{counter-increment:lst-ctn-kix_list_12-5}.lst-kix_list_5-5>li{counter-increment:lst-ctn-kix_list_5-5}.lst-kix_list_9-0>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) ". "}.lst-kix_list_3-4>li{counter-increment:lst-ctn-kix_list_3-4}.lst-kix_list_16-8>li{counter-increment:lst-ctn-kix_list_16-8}ol.lst-kix_list_10-7{list-style-type:none}.lst-kix_list_9-6>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) "." counter(lst-ctn-kix_list_9-2,decimal) "." counter(lst-ctn-kix_list_9-3,decimal) "." counter(lst-ctn-kix_list_9-4,decimal) "." counter(lst-ctn-kix_list_9-5,decimal) "." counter(lst-ctn-kix_list_9-6,decimal) ". "}ol.lst-kix_list_10-8{list-style-type:none}ol.lst-kix_list_10-3{list-style-type:none}.lst-kix_list_9-4>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) "." counter(lst-ctn-kix_list_9-2,decimal) "." counter(lst-ctn-kix_list_9-3,decimal) "." counter(lst-ctn-kix_list_9-4,decimal) ". "}ol.lst-kix_list_10-4{list-style-type:none}ol.lst-kix_list_10-5{list-style-type:none}.lst-kix_list_11-3>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) "." counter(lst-ctn-kix_list_11-2,decimal) "." counter(lst-ctn-kix_list_11-3,decimal) ". "}ol.lst-kix_list_10-6{list-style-type:none}.lst-kix_list_6-3>li{counter-increment:lst-ctn-kix_list_6-3}ol.lst-kix_list_10-0{list-style-type:none}ol.lst-kix_list_10-1{list-style-type:none}ol.lst-kix_list_1-3.start{counter-reset:lst-ctn-kix_list_1-3 0}ol.lst-kix_list_10-2{list-style-type:none}ol.lst-kix_list_12-1.start{counter-reset:lst-ctn-kix_list_12-1 0}ol.lst-kix_list_1-2.start{counter-reset:lst-ctn-kix_list_1-2 0}.lst-kix_list_11-5>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) "." counter(lst-ctn-kix_list_11-2,decimal) "." counter(lst-ctn-kix_list_11-3,decimal) "." counter(lst-ctn-kix_list_11-4,decimal) "." counter(lst-ctn-kix_list_11-5,decimal) ". "}ol.lst-kix_list_6-1.start{counter-reset:lst-ctn-kix_list_6-1 2}.lst-kix_list_9-8>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) "." counter(lst-ctn-kix_list_9-2,decimal) "." counter(lst-ctn-kix_list_9-3,decimal) "." counter(lst-ctn-kix_list_9-4,decimal) "." counter(lst-ctn-kix_list_9-5,decimal) "." counter(lst-ctn-kix_list_9-6,decimal) "." counter(lst-ctn-kix_list_9-7,decimal) "." counter(lst-ctn-kix_list_9-8,decimal) ". "}.lst-kix_list_1-1>li:before{content:"" counter(lst-ctn-kix_list_1-1,lower-latin) ". "}.lst-kix_list_11-7>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) "." counter(lst-ctn-kix_list_11-2,decimal) "." counter(lst-ctn-kix_list_11-3,decimal) "." counter(lst-ctn-kix_list_11-4,decimal) "." counter(lst-ctn-kix_list_11-5,decimal) "." counter(lst-ctn-kix_list_11-6,decimal) "." counter(lst-ctn-kix_list_11-7,decimal) ". "}.lst-kix_list_8-5>li{counter-increment:lst-ctn-kix_list_8-5}.lst-kix_list_1-3>li:before{content:"" counter(lst-ctn-kix_list_1-3,decimal) ". "}ol.lst-kix_list_16-8.start{counter-reset:lst-ctn-kix_list_16-8 0}ol.lst-kix_list_10-5.start{counter-reset:lst-ctn-kix_list_10-5 0}.lst-kix_list_4-8>li{counter-increment:lst-ctn-kix_list_4-8}.lst-kix_list_1-7>li:before{content:"" counter(lst-ctn-kix_list_1-7,lower-latin) ". "}ol.lst-kix_list_2-7.start{counter-reset:lst-ctn-kix_list_2-7 0}.lst-kix_list_1-5>li:before{content:"" counter(lst-ctn-kix_list_1-5,lower-roman) ". "}ol.lst-kix_list_9-1.start{counter-reset:lst-ctn-kix_list_9-1 0}.lst-kix_list_14-7>li{counter-increment:lst-ctn-kix_list_14-7}.lst-kix_list_5-6>li{counter-increment:lst-ctn-kix_list_5-6}ol.lst-kix_list_7-5.start{counter-reset:lst-ctn-kix_list_7-5 0}.lst-kix_list_2-1>li:before{content:"" counter(lst-ctn-kix_list_2-1,lower-latin) ". "}.lst-kix_list_2-3>li:before{content:"" counter(lst-ctn-kix_list_2-3,decimal) ". "}.lst-kix_list_11-8>li{counter-increment:lst-ctn-kix_list_11-8}.lst-kix_list_3-1>li{counter-increment:lst-ctn-kix_list_3-1}.lst-kix_list_9-1>li{counter-increment:lst-ctn-kix_list_9-1}ol.lst-kix_list_7-7.start{counter-reset:lst-ctn-kix_list_7-7 0}.lst-kix_list_3-1>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) ". "}.lst-kix_list_3-2>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) "." counter(lst-ctn-kix_list_3-2,decimal) ". "}.lst-kix_list_14-0>li{counter-increment:lst-ctn-kix_list_14-0}.lst-kix_list_8-1>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) " "}ol.lst-kix_list_1-8.start{counter-reset:lst-ctn-kix_list_1-8 0}ol.lst-kix_list_17-4.start{counter-reset:lst-ctn-kix_list_17-4 0}.lst-kix_list_8-2>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) "." counter(lst-ctn-kix_list_8-2,decimal) " "}.lst-kix_list_6-0>li{counter-increment:lst-ctn-kix_list_6-0}.lst-kix_list_3-5>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) "." counter(lst-ctn-kix_list_3-2,decimal) "." counter(lst-ctn-kix_list_3-3,decimal) "." counter(lst-ctn-kix_list_3-4,decimal) "." counter(lst-ctn-kix_list_3-5,decimal) ". "}.lst-kix_list_12-0>li{counter-increment:lst-ctn-kix_list_12-0}ol.lst-kix_list_12-3.start{counter-reset:lst-ctn-kix_list_12-3 0}ol.lst-kix_list_11-5.start{counter-reset:lst-ctn-kix_list_11-5 0}.lst-kix_list_8-5>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) "." counter(lst-ctn-kix_list_8-2,decimal) "." counter(lst-ctn-kix_list_8-3,decimal) "." counter(lst-ctn-kix_list_8-4,decimal) "." counter(lst-ctn-kix_list_8-5,decimal) " "}.lst-kix_list_11-1>li{counter-increment:lst-ctn-kix_list_11-1}.lst-kix_list_8-6>li:before{content:"" counter(lst-ctn-kix_list_8-0,decimal) "." counter(lst-ctn-kix_list_8-1,decimal) "." counter(lst-ctn-kix_list_8-2,decimal) "." counter(lst-ctn-kix_list_8-3,decimal) "." counter(lst-ctn-kix_list_8-4,decimal) "." counter(lst-ctn-kix_list_8-5,decimal) "." counter(lst-ctn-kix_list_8-6,decimal) " "}.lst-kix_list_2-0>li{counter-increment:lst-ctn-kix_list_2-0}.lst-kix_list_15-1>li{counter-increment:lst-ctn-kix_list_15-1}.lst-kix_list_3-6>li:before{content:"" counter(lst-ctn-kix_list_3-0,decimal) "." counter(lst-ctn-kix_list_3-1,decimal) "." counter(lst-ctn-kix_list_3-2,decimal) "." counter(lst-ctn-kix_list_3-3,decimal) "." counter(lst-ctn-kix_list_3-4,decimal) "." counter(lst-ctn-kix_list_3-5,decimal) "." counter(lst-ctn-kix_list_3-6,decimal) ". "}ol.lst-kix_list_16-6.start{counter-reset:lst-ctn-kix_list_16-6 0}ol.lst-kix_list_5-0.start{counter-reset:lst-ctn-kix_list_5-0 6}.lst-kix_list_11-2>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) "." counter(lst-ctn-kix_list_11-2,decimal) ". "}ol.lst-kix_list_4-2.start{counter-reset:lst-ctn-kix_list_4-2 0}ol.lst-kix_list_16-0.start{counter-reset:lst-ctn-kix_list_16-0 0}ol.lst-kix_list_11-6.start{counter-reset:lst-ctn-kix_list_11-6 0}ol.lst-kix_list_12-4.start{counter-reset:lst-ctn-kix_list_12-4 0}.lst-kix_list_16-6>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) "." counter(lst-ctn-kix_list_16-2,decimal) "." counter(lst-ctn-kix_list_16-3,decimal) "." counter(lst-ctn-kix_list_16-4,decimal) "." counter(lst-ctn-kix_list_16-5,decimal) "." counter(lst-ctn-kix_list_16-6,decimal) " "}ol.lst-kix_list_10-1.start{counter-reset:lst-ctn-kix_list_10-1 0}.lst-kix_list_4-4>li{counter-increment:lst-ctn-kix_list_4-4}ol.lst-kix_list_6-4.start{counter-reset:lst-ctn-kix_list_6-4 0}.lst-kix_list_17-1>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) " "}ol.lst-kix_list_5-6.start{counter-reset:lst-ctn-kix_list_5-6 0}.lst-kix_list_16-1>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) " "}ol.lst-kix_list_4-1.start{counter-reset:lst-ctn-kix_list_4-1 0}.lst-kix_list_7-3>li{counter-increment:lst-ctn-kix_list_7-3}.lst-kix_list_16-2>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) "." counter(lst-ctn-kix_list_16-2,decimal) " "}.lst-kix_list_16-5>li:before{content:"" counter(lst-ctn-kix_list_16-0,decimal) "." counter(lst-ctn-kix_list_16-1,decimal) "." counter(lst-ctn-kix_list_16-2,decimal) "." counter(lst-ctn-kix_list_16-3,decimal) "." counter(lst-ctn-kix_list_16-4,decimal) "." counter(lst-ctn-kix_list_16-5,decimal) " "}.lst-kix_list_15-3>li{counter-increment:lst-ctn-kix_list_15-3}ol.lst-kix_list_7-8.start{counter-reset:lst-ctn-kix_list_7-8 0}.lst-kix_list_12-4>li{counter-increment:lst-ctn-kix_list_12-4}ol.lst-kix_list_11-0.start{counter-reset:lst-ctn-kix_list_11-0 10}.lst-kix_list_3-3>li{counter-increment:lst-ctn-kix_list_3-3}.lst-kix_list_16-4>li{counter-increment:lst-ctn-kix_list_16-4}ol.lst-kix_list_6-3.start{counter-reset:lst-ctn-kix_list_6-3 0}ol.lst-kix_list_10-2.start{counter-reset:lst-ctn-kix_list_10-2 0}.lst-kix_list_12-7>li{counter-increment:lst-ctn-kix_list_12-7}.lst-kix_list_17-2>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) "." counter(lst-ctn-kix_list_17-2,decimal) " "}ol.lst-kix_list_5-5.start{counter-reset:lst-ctn-kix_list_5-5 0}ol.lst-kix_list_16-5.start{counter-reset:lst-ctn-kix_list_16-5 0}ol.lst-kix_list_17-3.start{counter-reset:lst-ctn-kix_list_17-3 0}.lst-kix_list_17-6>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) "." counter(lst-ctn-kix_list_17-2,decimal) "." counter(lst-ctn-kix_list_17-3,decimal) "." counter(lst-ctn-kix_list_17-4,decimal) "." counter(lst-ctn-kix_list_17-5,decimal) "." counter(lst-ctn-kix_list_17-6,decimal) " "}.lst-kix_list_17-5>li:before{content:"" counter(lst-ctn-kix_list_17-0,decimal) "." counter(lst-ctn-kix_list_17-1,decimal) "." counter(lst-ctn-kix_list_17-2,decimal) "." counter(lst-ctn-kix_list_17-3,decimal) "." counter(lst-ctn-kix_list_17-4,decimal) "." counter(lst-ctn-kix_list_17-5,decimal) " "}.lst-kix_list_6-2>li{counter-increment:lst-ctn-kix_list_6-2}.lst-kix_list_2-6>li:before{content:"" counter(lst-ctn-kix_list_2-6,decimal) ". "}ol.lst-kix_list_16-2.start{counter-reset:lst-ctn-kix_list_16-2 0}.lst-kix_list_14-5>li{counter-increment:lst-ctn-kix_list_14-5}.lst-kix_list_7-1>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) " "}.lst-kix_list_7-5>li:before{content:"" counter(lst-ctn-kix_list_7-0,decimal) "." counter(lst-ctn-kix_list_7-1,decimal) "." counter(lst-ctn-kix_list_7-2,decimal) "." counter(lst-ctn-kix_list_7-3,decimal) "." counter(lst-ctn-kix_list_7-4,decimal) "." counter(lst-ctn-kix_list_7-5,decimal) " "}.lst-kix_list_13-5>li{counter-increment:lst-ctn-kix_list_13-5}.lst-kix_list_9-6>li{counter-increment:lst-ctn-kix_list_9-6}ol.lst-kix_list_5-4.start{counter-reset:lst-ctn-kix_list_5-4 0}ol.lst-kix_list_11-1.start{counter-reset:lst-ctn-kix_list_11-1 2}.lst-kix_list_13-6>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) "." counter(lst-ctn-kix_list_13-2,decimal) "." counter(lst-ctn-kix_list_13-3,decimal) "." counter(lst-ctn-kix_list_13-4,decimal) "." counter(lst-ctn-kix_list_13-5,decimal) "." counter(lst-ctn-kix_list_13-6,decimal) ". "}ol.lst-kix_list_5-1.start{counter-reset:lst-ctn-kix_list_5-1 0}.lst-kix_list_6-7>li{counter-increment:lst-ctn-kix_list_6-7}.lst-kix_list_16-6>li{counter-increment:lst-ctn-kix_list_16-6}.lst-kix_list_10-6>li{counter-increment:lst-ctn-kix_list_10-6}.lst-kix_list_11-6>li{counter-increment:lst-ctn-kix_list_11-6}.lst-kix_list_1-7>li{counter-increment:lst-ctn-kix_list_1-7}ol.lst-kix_list_10-0.start{counter-reset:lst-ctn-kix_list_10-0 0}.lst-kix_list_7-5>li{counter-increment:lst-ctn-kix_list_7-5}.lst-kix_list_15-6>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) "." counter(lst-ctn-kix_list_15-2,decimal) "." counter(lst-ctn-kix_list_15-3,decimal) "." counter(lst-ctn-kix_list_15-4,decimal) "." counter(lst-ctn-kix_list_15-5,decimal) "." counter(lst-ctn-kix_list_15-6,decimal) " "}ol.lst-kix_list_17-8.start{counter-reset:lst-ctn-kix_list_17-8 0}.lst-kix_list_11-4>li{counter-increment:lst-ctn-kix_list_11-4}.lst-kix_list_3-8>li{counter-increment:lst-ctn-kix_list_3-8}ol.lst-kix_list_6-8.start{counter-reset:lst-ctn-kix_list_6-8 0}.lst-kix_list_10-2>li:before{content:"" counter(lst-ctn-kix_list_10-2,lower-roman) ". "}.lst-kix_list_4-6>li{counter-increment:lst-ctn-kix_list_4-6}.lst-kix_list_13-7>li{counter-increment:lst-ctn-kix_list_13-7}ol.lst-kix_list_1-7.start{counter-reset:lst-ctn-kix_list_1-7 0}.lst-kix_list_1-5>li{counter-increment:lst-ctn-kix_list_1-5}ol.lst-kix_list_17-5.start{counter-reset:lst-ctn-kix_list_17-5 0}ol.lst-kix_list_6-5.start{counter-reset:lst-ctn-kix_list_6-5 0}.lst-kix_list_4-2>li:before{content:"" counter(lst-ctn-kix_list_4-2,lower-roman) ". "}.lst-kix_list_4-6>li:before{content:"" counter(lst-ctn-kix_list_4-6,decimal) ". "}.lst-kix_list_17-4>li{counter-increment:lst-ctn-kix_list_17-4}.lst-kix_list_15-2>li:before{content:"" counter(lst-ctn-kix_list_15-0,decimal) "." counter(lst-ctn-kix_list_15-1,decimal) "." counter(lst-ctn-kix_list_15-2,decimal) " "}.lst-kix_list_10-8>li{counter-increment:lst-ctn-kix_list_10-8}.lst-kix_list_10-6>li:before{content:"" counter(lst-ctn-kix_list_10-6,decimal) ". "}.lst-kix_list_9-1>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) ". "}ol.lst-kix_list_12-7.start{counter-reset:lst-ctn-kix_list_12-7 0}.lst-kix_list_15-8>li{counter-increment:lst-ctn-kix_list_15-8}ol.lst-kix_list_6-7.start{counter-reset:lst-ctn-kix_list_6-7 0}.lst-kix_list_12-2>li{counter-increment:lst-ctn-kix_list_12-2}.lst-kix_list_9-5>li:before{content:"" counter(lst-ctn-kix_list_9-0,decimal) "." counter(lst-ctn-kix_list_9-1,decimal) "." counter(lst-ctn-kix_list_9-2,decimal) "." counter(lst-ctn-kix_list_9-3,decimal) "." counter(lst-ctn-kix_list_9-4,decimal) "." counter(lst-ctn-kix_list_9-5,decimal) ". "}.lst-kix_list_12-2>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) "." counter(lst-ctn-kix_list_12-2,decimal) ". "}ol.lst-kix_list_12-8.start{counter-reset:lst-ctn-kix_list_12-8 0}.lst-kix_list_11-6>li:before{content:"" counter(lst-ctn-kix_list_11-0,decimal) "." counter(lst-ctn-kix_list_11-1,decimal) "." counter(lst-ctn-kix_list_11-2,decimal) "." counter(lst-ctn-kix_list_11-3,decimal) "." counter(lst-ctn-kix_list_11-4,decimal) "." counter(lst-ctn-kix_list_11-5,decimal) "." counter(lst-ctn-kix_list_11-6,decimal) ". "}ol.lst-kix_list_11-3.start{counter-reset:lst-ctn-kix_list_11-3 0}.lst-kix_list_1-2>li:before{content:"" counter(lst-ctn-kix_list_1-2,lower-roman) ". "}.lst-kix_list_10-1>li{counter-increment:lst-ctn-kix_list_10-1}.lst-kix_list_1-0>li{counter-increment:lst-ctn-kix_list_1-0}.lst-kix_list_8-8>li{counter-increment:lst-ctn-kix_list_8-8}ol.lst-kix_list_16-1.start{counter-reset:lst-ctn-kix_list_16-1 0}ol.lst-kix_list_17-6.start{counter-reset:lst-ctn-kix_list_17-6 0}.lst-kix_list_1-6>li:before{content:"" counter(lst-ctn-kix_list_1-6,decimal) ". "}.lst-kix_list_12-6>li:before{content:"" counter(lst-ctn-kix_list_12-0,decimal) "." counter(lst-ctn-kix_list_12-1,decimal) "." counter(lst-ctn-kix_list_12-2,decimal) "." counter(lst-ctn-kix_list_12-3,decimal) "." counter(lst-ctn-kix_list_12-4,decimal) "." counter(lst-ctn-kix_list_12-5,decimal) "." counter(lst-ctn-kix_list_12-6,decimal) ". "}ol.lst-kix_list_11-4.start{counter-reset:lst-ctn-kix_list_11-4 0}.lst-kix_list_2-2>li:before{content:"" counter(lst-ctn-kix_list_2-2,lower-roman) ". "}.lst-kix_list_13-2>li:before{content:"" counter(lst-ctn-kix_list_13-0,decimal) "." counter(lst-ctn-kix_list_13-1,decimal) "." counter(lst-ctn-kix_list_13-2,decimal) ". "}ol.lst-kix_list_5-2.start{counter-reset:lst-ctn-kix_list_5-2 0}ol{margin:0;padding:0}table td,table th{padding:0}.c20{margin-left:28.4pt;padding-top:0pt;text-indent:-28.4pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify;height:11pt}.c18{margin-left:28.4pt;padding-top:0pt;text-indent:-36pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify;height:11pt}.c2{margin-left:18pt;padding-top:12pt;padding-left:10.4pt;padding-bottom:12pt;line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:justify}.c15{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:6pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c0{margin-left:18pt;padding-top:0pt;padding-left:10.4pt;padding-bottom:6pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c28{padding-top:0pt;text-indent:-36pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify;height:11pt}.c25{margin-left:35.9pt;padding-top:0pt;padding-left:-0.1pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c10{margin-left:18pt;padding-top:0pt;padding-left:18pt;padding-bottom:6pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c4{margin-left:18pt;padding-top:0pt;padding-left:18pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c12{margin-left:18pt;padding-top:0pt;padding-left:10.4pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c16{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:left;height:11pt}.c5{font-weight:700;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Calibri";font-style:normal}.c1{font-weight:700;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Calibri";font-style:normal}.c3{padding-top:0pt;padding-bottom:6pt;line-height:1.0;orphans:2;widows:2;text-align:justify;height:11pt}.c23{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:center;height:11pt}.c22{-webkit-text-decoration-skip:none;color:#0563c1;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:11pt;font-style:normal}.c9{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Calibri";font-style:normal}.c27{padding-top:0pt;padding-bottom:6pt;line-height:1.0;orphans:2;widows:2;text-align:center;height:11pt}.c30{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify;height:11pt}.c6{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Calibri";font-style:normal}.c19{padding-top:0pt;padding-bottom:6pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c29{padding-top:0pt;padding-bottom:6pt;line-height:1.0;orphans:2;widows:2;text-align:center}.c14{text-decoration:none;vertical-align:baseline;font-size:11pt;font-style:italic}.c26{background-color:#ffffff;max-width:453.6pt;padding:70.8pt 70.8pt 70.8pt 70.8pt}.c7{padding:0;margin:0}.c24{margin-left:28.4pt;text-indent:-36pt}.c21{margin-left:28.4pt;text-indent:-28.4pt}.c13{font-weight:700;font-family:"Calibri"}.c17{color:inherit;text-decoration:inherit}.c11{font-weight:400;font-family:"Calibri"}.c8{page-break-after:avoid}.title{padding-top:24pt;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:"Calibri";line-height:1.0666666666666667;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:"Georgia";line-height:1.0666666666666667;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}
</style>

<style lang="scss" scoped>
    .page__content > .content {
        width: calc(100%);
        padding: 0 100px;
    }

    .card {
        background: none !important;
        border: 0 none !important;
    }

    .errors {
        margin-top: 20px;
        ul {
            list-style: none;
        }
    }

    .c-popup__content {
        background: transparent;
        color: #fff;
    }

    .c-checkbox {
        width: 100%;
        margin: 3px;
    }

    .profile-picker {
        display: flex;
        flex-wrap: wrap;
        margin: -10px -10px -5px;
        align-items: center;
        justify-content: center;
    }

    .profile-picker__profile {
        &.default {
            &:after {
                left: -50px;
            }
        }
        &:hover{
            .profile__action{
                display: flex;
            }
        }
    }

    .profile__action {
        display: none;
        position: absolute;
        justify-content: center;
        bottom: 0px;
        left: 0;
        right: 0;
        height: 26px;
        .c-button {
            margin: 0 5px;
        }
    }

    p {
        font-size: 15px;
        line-height: 20px;
    }

    .tab-card {
        background: #383853;
        border-radius: 5px;
        padding: 8px 10px;
        border: 1px solid #373752;
        margin-bottom: 15px;
        &:last-child {
            margin: 0;
        }
        input {
            border: none;
            box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
            background: #303049;
        }
        .termsBlock {
            background: #303049;
            box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
            padding: 15px;
            border-radius: 5px;
            max-height: 400px;
            overflow-y: auto;
            text-align: left;
            margin-bottom: 20px;
            h1, h2, h3, h4, h5 {
                font-size: 18px;
            }
        }
    }


        .sending-block{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .clmn-1,
            .clmn-3{
                width: 35%;
                padding: 0 5px;
                .grid{
                    border: 1px solid rgba(255, 255, 255, .1);
                    border-radius: 5px;
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 5px;
                    .grid-item{
                        width: 33.3%;
                        padding: 5px;
                        position: relative;
                        div{
                            border: 1px solid #30304B;
                            background: rgba(255, 255, 255, .07);
                            border-radius: 5px;
                            position: relative;
                            display: inline-block;
                            width: 100%;
                            float: left;
                            overflow: hidden;
                            img{
                                display: block;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                height: 100%;
                                width: 100%;
                                object-fit: cover;
                                transform: translate(-50%, -50%);
                            }
                            &:before{
                                content: "";
                                padding-top: 100%;
                                float: left;
                            }
                            &:hover{
                                cursor: pointer;
                                background-image: url('./../../assets/SVG/plus-icon.svg');
                                background-position: center;
                                background-size: 16px;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                    .grid-item__amount {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        z-index: 1000000;
                        color: #fff;
                        font-weight: bold;
                        background: rgba(0, 0, 0, 0.4);
                        text-align: center;
                    }
                }
                .info{
                    font-size: 12px;

                    span{
                        &.down{
                            color: #F75D5D
                        }
                        &.up{
                            color: #43C981
                        }
                    }
                }
            }
            .clmn-2{
                width: 30%;
                padding: 0 5px;
                text-align: center;
                .time{
                    padding: 20px 0 30px;
                    i{
                        display: block;
                        font-size: 18px;
                        margin-bottom: 4px;
                    }
                }
                .directions{
                    width: 100px;
                    display: block;
                    margin: auto auto 20px;
                    .right-arrow{
                        width: 100%;
                        height: 35px;
                        position: relative;
                        -webkit-clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        background: #30304B;
                        margin-bottom: 4px;
                        .progress{
                            left: 0;
                        }
                    }
                    .left-arrow{
                        width: 100%;
                        height: 35px;
                        position: relative;
                        -webkit-clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        clip-path: polygon(0% 35%, 70% 35%, 70% 0%, 100% 50%, 70% 100%, 70% 65%, 0% 65%);
                        background: #30304B;
                        transform: rotate(180deg);
                        .progress{
                            left: 0;
                        }
                    }
                    .progress{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        background: #5EA72B;
                        margin: 0;
                        padding: 0;
                        border-radius: 0;
                        height: 100%;
                    }
                }
            }
            .clmn-1,
            .clmn-2,
            .clmn-3{
                .info{
                    border: 1px solid rgba(255, 255, 255, .1);
                    border-radius: 5px;
                    padding: 5px;
                    width: 100%;
                }
            }
        }
</style>
