<template>
    <c-layout navigationKey="store">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 margin-bottom-30">
                    <c-toke-sale
                        :hardCap="18000000"
                        :softCap="7500000"
                        :volume="1000000000"
                        :soldDollar="23455424"
                        :soldTokens="243424234"
                    />
                </div>
                <div class="col-12 col-md-6 mb-4">
                    <h2>What is HBX?</h2>
                    <div>
                        Built by <c-button status="underline" size="md" href="https://hyperbridge.org">Hyperbridge</c-button>, HBX tokens are used to fuel the decentralized protocols underlying BlockHub. 
                        BlockHub is the first economy built on these protocols, designed to let players and game developers productively interact in mutually beneficial ways. 
                        HBX tokens can be purchased or received by:
                        <br /><br />
                        <ul>
                            <li>Selling game items</li>
                            <li>Curating game information in the store</li>
                            <li>Bug reporting</li>
                            <li>Game promotion</li>
                            <li>Product testing</li>
                            <li>Polls/Questionnaires</li>
                        </ul>
                    </div>

                </div>
                <div class="col-12 col-md-6">
                    <h2>What can HBX be used for?</h2>
                    <div>
                        <ul>
                            <li>Contribute to crowdfund projects</li>
                            <li>Purchase products within the store</li>
                            <li>Vote for the direct of game development (staking)</li>
                            <li>Receive 10% discount on all transactions</li>
                            <li>Running promotions within BlockHub</li>
                        </ul>
                        <br />
                        For the game developers, when accepting HBX you will receive a number of benefits, including reduced fees by 50%. To learn more, please see the <c-button status="underline" size="md" href="https://hyperbridge.org/whitepaper">whitepaper</c-button>.
                    </div>
                </div>
            </div>

            <div class="col-12 text-center alert alert-info">
                <p><strong>If you haven't already, KYC &amp; whitelist your address <c-button href="/#/kyc">click here</c-button></strong></p>
            </div>

            <!-- <div v-if="!desktop_mode && !ethereum_connected">
                <div class="col-12 text-center alert alert-info">
                    <p>The BlockHub desktop app is the recommended way to load up on tokens.</p>
                </div>
            </div> -->

            <div class="row promotion margin-top-40 margin-bottom-20">
                <h1 class="margin-auto margin-bottom-20">Launch Promotion</h1>
                <p>For the first month, HBX will be on discount and purchasers will receive an exclusive badge, the Voyager Badge (<a href="http://erc721.org/">an ERC-721 NFT</a>). The token price will be $0.055 USD each, and this time only, any unsold tokens will be equally distributed to the purchasers, the equivalent of being burned 🔥. This is as a thanks to you, our early supporters.</p>
                <div class="carousel-wrapper margin-auto margin-top-20 margin-bottom-20">
                    <c-carousel-3d
                        :items="assets"
                        :limitTo="2"
                    >
                        <template slot-scope="props">
                            <c-asset-store-card
                                v-for="(item) in props.items"
                                :class="item.css"
                                :key="item.id"
                                :asset="item"
                            />
                        </template>
                    </c-carousel-3d>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-6" v-if="ethereum_connected && ethereum_unlocked">
                    <c-block title="Purchase" class="margin-bottom-30">
                        <p>Each HBX token is <strong>${{ tokenPriceUSD | convertCurrency }}</strong>, and can be purchased with ETH at the current price of <strong>{{ (1/ETH2USD).toString().slice(0, 6) }} ETH</strong> per HBX <em>(Based on a locked conversion of ${{ ETH2USD }} USD per 1 ETH)</em>.</p>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    ETH
                                </span>
                            </div>
                            <input type="text" class="form-control" ref="input" placeholder="0.00" v-model="purchaseETH" @keyup="calcHBX" />
                        </div>
                        <p>Estimated purchase:</p>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    HBX
                                </span>
                            </div>
                            <input type="text" class="form-control" ref="input" placeholder="0.00" v-model="purchaseHBX" readonly />
                        </div>
                        <strong>Note:</strong> Personal cap is {{ (maxPurchaseUSD / ETH2USD).toString().slice(0, 2) }} ETH (${{ maxPurchaseUSD }} USD equivalent).
                    </c-block>
                </div>

                <div class="col-12 col-md-6" v-if="ethereum_connected && ethereum_unlocked && desktop_mode">
                    <c-block title="Payment Profile" class="margin-bottom-30">
                        <div class="profile-picker">
                            <c-swiper :options="profileOptions">
                                <c-slide v-for="identity in identities">
                                    <div
                                        class="profile-picker__profile w-100 m-0 padding-15 pb-0"
                                        :key="identity.id"
                                        v-if="identities && identities.length"
                                    >
                                        <c-user-card
                                            :user="identity"
                                            :previewMode="true"
                                            :class="{ 'default': chosenIdentity && identity.id == chosenIdentity.id }"
                                        />
                                        <div class="profile__action">
                                            <c-button
                                                status="info"
                                                icon="check"
                                                @click="chooseIdentity(identity)"
                                                v-if="!chosenIdentity || identity.id != chosenIdentity.id"
                                            >Choose</c-button>
                                        </div>
                                    </div>
                                </c-slide>
                            </c-swiper>
                        </div>
                    </c-block>
                </div>

                <div class="col-12 col-md-6" v-if="ethereum_connected && ethereum_unlocked && !desktop_mode">
                    <c-block title="Payment Profile" class="margin-bottom-30">
                        <p>Input your KYC verified Ethereum address:</p>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    Address
                                </span>
                            </div>
                            <input type="text" class="form-control" ref="input" placeholder="Public Ethereum address...." v-model="purchaseAddress" />
                        </div>
                        <p>Haven't verified yet? You'll need to do that! <c-button class="" href="/#/kyc" style="margin: 0 auto">Verify Account</c-button></p>
                    </c-block>
                </div>

                <!-- <div class="col-12 text-center alert alert-info" v-if="!desktop_mode">
                    <p>The BlockHub desktop client is the recommended way to load up on tokens.</p>
                </div> -->

                <div class="" v-if="!ethereum_connected" style="text-align: center; width: 100%">
                    <c-welcome-box />
                    <br /><br />
                </div>

                <div class="col-12 col-md-6 offset-md-3" v-if="!ethereum_connected" style="text-align: center; width: 100%">
                    <h2>Alternative: MetaMask</h2>

                    <br />

                    <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
                        <img src="/static/img/metamask.png" style="max-width: 350px;margin: 0 auto" />
                    </a>

                    <br /><br />

                    <p>The BlockHub desktop client is the recommended way to load up on tokens, but you can also purchase using the MetaMask web wallet. Come back to this page within BlockHub, or when you've installed MetaMask.</p>

                    <br />
                </div>

                <div class="col-12" v-if="ethereum_connected && !ethereum_unlocked">
                    <c-welcome-box />
                </div>

                <div class="col-6 offset-3" v-if="ethereum_connected && !ethereum_unlocked && !desktop_mode" style="text-align: center; width: 100%; margin-top: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                    <h2>Alternative: MetaMask</h2>

                    <br />

                    <img src="/static/img/metamask-logo.png" style="max-width: 150px;margin: 0 auto;opacity: 0.3; filter: grayscale(1);" />

                    <br /><br />

                    <p>The BlockHub desktop client is the recommended way to load up on tokens, but if you'd like to purchase with MetaMask, open the extension to unlock your web wallet.</p>
                </div>
                
                <div class="col-6 offset-3" v-if="ethereum_connected && ethereum_unlocked && !desktop_mode" style="text-align: center; width: 100%; margin-top: 30px; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                    <img src="/static/img/metamask-logo.png" style="max-width: 150px;margin: 0 auto;" />

                    <br /><br />

                    <h2>Connected to MetaMask <span class="fa fa-check-circle" /></h2>
                </div>

                <div class="col-8 offset-2" v-if="ethereum_connected && ethereum_unlocked && desktop_mode && (!account.is_verified && !account.is_verifying)" style="text-align: center">
                    <h2 style="text-align: center">Oops, you haven't verified your account yet. <br />You'll need to do this to participate.</h2>
                    <br />
                    <c-button class="c-btn-lg" href="/#/account/verification" style="margin: 0 auto">Verify Account</c-button>
                    <br /><br />
                    <c-button status="underline" size="sm" @click="manualOverride">Click here if you're pretty sure you've verified</c-button>
                    <br /><br />
                </div>

                <div class="col-8 offset-2" v-if="ethereum_connected && ethereum_unlocked && desktop_mode && !account.is_verified && account.is_verifying" style="text-align: center">
                    <p>Your account is currently being verified. You'll need to wait until it's finished to participate.</p>
                    <p>Please check back later. If you've been waiting too long or have problems, please email support@hyperbridge.org</p>
                </div>
                
                <div v-if="ethereum_connected && ethereum_unlocked && (!desktop_mode || account.is_verified || override)" style="text-align: center">
                    <div class="col-10 offset-1 tab-card">
                        <h4>Token Sale Agreement</h4>
                        <div class="terms_block">
                            <h2>Introduction</h2>

                            <p>These Website Standard Terms and Conditions written on this webpage shall
                                manage
                                your use of our website, <span class="highlight preview_website_name">BlockHub</span>
                                accessible at <span class="highlight preview_website_url">BlockHub.gg</span>.
                            </p>

                            <p>These Terms will be applied fully and affect to your use of this Website. By
                                using this Website, you agreed to accept all terms and conditions written in
                                here. You must not use this Website if you disagree with any of these
                                Website
                                Standard Terms and Conditions.</p>

                            <p>Minors or people below 18 years old are not allowed to use this Website.</p>

                            <h2>Intellectual Property Rights</h2>

                            <p>Other than the content you own, under these Terms, <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and/or its
                                licensors
                                own all the intellectual property rights and materials contained in this
                                Website.</p>

                            <p>You are granted limited license only for purposes of viewing the material
                                contained on this Website.</p>

                            <h2>Restrictions</h2>

                            <p>You are specifically restricted from all of the following:</p>

                            <ul>
                                <li>publishing any Website material in any other media;</li>
                                <li>selling, sublicensing and/or otherwise commercializing any Website
                                    material;
                                </li>
                                <li>publicly performing and/or showing any Website material;</li>
                                <li>using this Website in any way that is or may be damaging to this
                                    Website;
                                </li>
                                <li>using this Website in any way that impacts user access to this
                                    Website;
                                </li>
                                <li>using this Website contrary to applicable laws and regulations, or in
                                    any
                                    way may cause harm to the Website, or to any person or business entity;
                                </li>
                                <li>engaging in any data mining, data harvesting, data extracting or any
                                    other
                                    similar activity in relation to this Website;
                                </li>
                                <li>using this Website to engage in any advertising or marketing.</li>
                            </ul>

                            <p>Certain areas of this Website are restricted from being access by you and
                                <span
                                    class="highlight preview_company_name">Hyperbridge Technology Inc.</span> may further
                                restrict
                                access by you to any areas of this Website, at any time, in absolute
                                discretion.
                                Any user ID and password you may have for this Website are confidential and
                                you
                                must maintain confidentiality as well.</p>

                            <h2>Your Content</h2>

                            <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any
                                audio, video text, images or other material you choose to display on this
                                Website. By displaying Your Content, you grant <span
                                    class="highlight preview_company_name">Hyperbridge Technology Inc.</span> a
                                non-exclusive,
                                worldwide irrevocable, sub licensable license to use, reproduce, adapt,
                                publish,
                                translate and distribute it in any and all media.</p>

                            <p>Your Content must be your own and must not be invading any third-party's
                                rights.
                                <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> reserves
                                the
                                right to remove any of Your Content from this Website at any time without
                                notice.</p>

                            <h2>No warranties</h2>

                            <p>This Website is provided “as is,” with all faults, and <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> express no
                                representations or warranties, of any kind related to this Website or the
                                materials contained on this Website. Also, nothing contained on this Website
                                shall be interpreted as advising you.</p>

                            <h2>Limitation of liability</h2>

                            <p>In no event shall <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span>, nor any of its
                                officers, directors and employees, shall be held liable for anything arising
                                out
                                of or in any way connected with your use of this Website whether such
                                liability
                                is under contract. &nbsp;<span class="highlight preview_company_name">Hyperbridge Technology Inc.</span>,
                                including its officers, directors and employees shall not be held liable for
                                any
                                indirect, consequential or special liability arising out of or in any way
                                related to your use of this Website.</p>

                            <h2>Indemnification<p></p>

                                <p>You hereby indemnify to the fullest extent <span
                                    class="highlight preview_company_name">Hyperbridge Technology Inc.</span> from and
                                    against
                                    any and/or all liabilities, costs, demands, causes of action, damages
                                    and
                                    expenses arising in any way related to your breach of any of the
                                    provisions
                                    of these Terms.</p>

                            </h2>
                            <h2>Severability</h2>

                            <p>If any provision of these Terms is found to be invalid under any applicable
                                law,
                                such provisions shall be deleted without affecting the remaining provisions
                                herein.</p>

                            <h2>Variation of Terms</h2>

                            <p><span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is permitted
                                to
                                revise these Terms at any time as it sees fit, and by using this Website you
                                are
                                expected to review these Terms on a regular basis.</p>

                            <h2>Assignment</h2>

                            <p>The <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is
                                allowed
                                to assign, transfer, and subcontract its rights and/or obligations under
                                these
                                Terms without any notification. However, you are not allowed to assign,
                                transfer, or subcontract any of your rights and/or obligations under these
                                Terms.</p>

                            <h2>Entire Agreement</h2>

                            <p>These Terms constitute the entire agreement between <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and you in
                                relation
                                to your use of this Website, and supersede all prior agreements and
                                understandings.</p>

                            <h2>Governing Law &amp; Jurisdiction</h2>

                            <p>These Terms will be governed by and interpreted in accordance with the laws
                                of
                                the State of <span class="highlight preview_country">Country</span>, and you
                                submit to the non-exclusive jurisdiction of the state and federal courts
                                located
                                in <span class="highlight preview_country">Country</span> for the resolution
                                of
                                any disputes.</p>

                        </div>

                        <c-checkbox
                            id="tokenSaleAgreement"
                            :checked="false"
                            type="square"
                            v-model="tokenSaleAgreement"
                        >
                            I confirm that I understand and agree with the terms of the Token Sale Agreement.
                        </c-checkbox>

                        <c-checkbox
                            id="jurisdictionAgreement"
                            :checked="false"
                            type="square"
                            v-model="jurisdictionAgreement"
                        >
                            I confirm that I am not a resident of any jurisdiction that forbids token sales.
                        </c-checkbox>

                        <c-checkbox
                            id="residentAgreement"
                            :checked="false"
                            type="square"
                            v-model="residentAgreement"
                        >
                            I confirm that I am not a resident of China, United States, or Canada.
                        </c-checkbox>

                    </div>

                    <div class="col-8 offset-2">
                        <div class="errors" v-if="errors.length">
                            <strong>Please correct the following error(s):</strong>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>
                        
                        <br /><br />
                        <c-button status="success" class="justify-content-center" icon_hide size="xl" @click="proceed" :class="{'disabled': !canContinue }">
                            Proceed to Purchase
                        </c-button>
                    </div>
                </div>
            </div>
        </div>

        <c-popup :activated="purchasePopup.show"
            width="800"
            :type="purchasePopup.type"
            :sub_title="purchasePopup.text"
            @close="closePurchasePopup"
            v-if="purchasePopup && purchasePopup.show"
            ref="purchasePopup"
        >
            <div slot="custom_close" hidden></div>
            <div class="purchase-modal" slot="custom_content">
                <c-tabs>
                    <c-tab name="Confirm Purchase" :selected="true" :showFooter="true">
                        <div>
                            <div class="tab-card" v-if="purchaseSuccessful">
                                Great! Here's your transaction hash: {{ transactionHash }}
                            </div>
                            <div class="tab-card" v-if="!purchaseSuccessful">
                                <div class="alert alert-warning" v-if="purchaseError">
                                    An error occurred with the purchase: {{ purchaseError }}
                                </div>
                                
                                <div>
                                    <p>Purchasing {{ purchaseHBX }} HBX in exchange for {{ purchaseETH}} ETH.</p>
                                    <br />
                                </div>

                                <p>BlockHub will purchase tokens for this profile:</p>
                                <p><a :href="`https://etherscan.io/address/${chosenIdentity.public_address}`"><strong>{{ chosenIdentity.public_address }}</strong></a></p>

                                <br />

                                <p>BlockHub will send a payment of {{ purchaseETH }} ETH to this contract address:</p>
                                <p v-if="tokenContractAddress"><a :href="`https://etherscan.io/address/${tokenContractAddress}`"><strong>{{ tokenContractAddress }}</strong></a></p>
                                <p v-if="!tokenContractAddress" class="alert alert-warning">No contract address. Check your <c-button href="/#/settings/protocol">Protocol Settings</c-button></p>

                                <br /><br />
                                <c-button status="success" class="justify-content-center" icon_hide size="xl" @click="confirmPurchase">
                                    Confirm Purchase
                                </c-button>
                            </div>
                        </div>
                        <div slot="footer" class="d-flex align-items-center justify-content-end">
                            <div>
                                <c-button @click="closePurchasePopup">Cancel</c-button>
                            </div>
                        </div>
                    </c-tab>
                </c-tabs>
            </div>
        </c-popup>
    </c-layout>
</template>

<script>
import axios from 'axios'
import * as Bridge from '@/framework/desktop-bridge'
import { setInterval } from 'core-js';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    components: {
        'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
        'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
        'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
        'c-carousel-3d': (resolve) => require(['@/ui/components/carousel-3d'], resolve),
        'c-asset-store-card': (resolve) => require(['@/ui/components/asset/store-card'], resolve),
        'c-welcome-box': (resolve) => require(['@/ui/components/welcome-box'], resolve),
        'c-swiper': swiper,
        'c-slide': swiperSlide,
        'c-toke-sale': (resolve) => require(['@/ui/components/token-sale-box'], resolve)
    },
    data() {
        const checkEthereumConnection = () => {
            if (this.desktop_mode || (typeof web3 !== 'undefined' && web3.currentProvider.isMetaMask === true)) {
                this.ethereum_connected = true
            }

            if (typeof window.web3 !== 'undefined') {
                window.web3.eth.getAccounts((err, accounts) => {
                    this.ethereum_unlocked = accounts.length > 0
                })
            }
        }

        const initEthereum = () => {
            if (typeof window.web3 !== 'undefined') {
                if (window.ethereum) {
                    try {
                        // Request account access if needed
                        window.ethereum.enable().then(() => {
                            window.web3 = new Web3(window.ethereum)

                            window.web3.eth.getAccounts((err, accounts) => {
                                this.purchaseAddress = accounts[0]
                                this.account.public_address = accounts[0] // save for verification screen
                            })
                        })
                    } catch (error) {
                        // User denied account access...
                    }
                }
                else if (window.web3) {
                    window.web3 = new Web3(window.web3.currentProvider)

                    window.web3.eth.getAccounts((err, accounts) => {
                        this.purchaseAddress = accounts[0]
                    })
                }
            }
        }

        initEthereum()

        setInterval(checkEthereumConnection, 2000)

        let chosenIdentity = this.$store.state.application.account.identities.find(identity => identity.id == this.$store.state.application.account.current_identity.id)

        if (!chosenIdentity && this.$store.state.application.account.identities.length) {
            chosenIdentity = this.$store.state.application.account.identities[0]
        }

        const result = {
            account: this.$store.state.application.account,
            identities: this.$store.state.application.account.identities,
            chosenIdentity: chosenIdentity,
            purchaseETH: null,
            purchaseHBX: null,
            ETH2USD: 220.10,
            maxPurchaseUSD: 7500,
            tokenPriceUSD: 0.055,
            tokenSaleAgreement: false,
            jurisdictionAgreement: false,
            residentAgreement: false,
            ethereum_unlocked: this.$store.state.application.desktop_mode,
            ethereum_connected: this.$store.state.application.desktop_mode,
            purchaseAddress: chosenIdentity ? chosenIdentity.public_address : null,
            override: false,
            assets: [
                {
                    name: 'HBX',
                    price: {
                        min: 0.055,
                        max: 0.055,
                        current: 0.055
                    },
                    image: '/static/img/icons/hbx-token.png',
                    system_tags: ['exclusive'],
                    css: 'store-card--trending'
                },
                {
                    name: 'Voyager Badge',
                    price: {
                        min: 0.0,
                        max: 0.0,
                        current: 0.0
                    },
                    image: '/static/img/icons/voyager-badge.png',
                    system_tags: ['special'],
                    css: 'store-card--special'
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
            profileOptions:{
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.profile-picker .swiper-button-next',
                    prevEl: '.profile-picker .swiper-button-prev'
                },
            }
        }

        return result
    },
    computed: {
        desktop_mode() {
            return this.$store.state.application.desktop_mode
        },
        tokenContractAddress() {
            try {
                return this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].packages.reserve.contracts.TokenSale.address
            } catch (e) {

            }
        },
        canContinue() {
            return this.purchaseETH
            && this.purchaseAddress
            && this.tokenSaleAgreement
            && this.jurisdictionAgreement
            && this.residentAgreement
            && this.purchaseETH <= (this.maxPurchaseUSD / this.ETH2USD)
        }
    },
    methods: {
        calcHBX() {
            this.purchaseHBX = (this.purchaseETH * this.ETH2USD) / 0.055
        },
        manualOverride() {
            this.override = true
        },
        chooseIdentity(identity) {
            this.chosenIdentity = identity
            this.purchaseAddress = identity.public_address
        },
        closePurchasePopup() {
            this.purchasePopup.show = false
            this.transactionData = null
        },
        showPurchasePopup(ntf) {
            this.purchasePopup.show = true
        },
        confirmPurchase() {
            if (this.desktop_mode) {
                Bridge.sendTransactionRequest({
                    fromAddress: this.purchaseAddress,
                    toAddress: this.tokenContractAddress,
                    amount: this.purchaseETH
                }).then((data) => {
                    if (data.success) {
                        this.purchaseSuccessful = true
                        this.transactionHash = data.transactionHash
                    } else {
                        this.purchaseSuccessful = false
                        this.purchaseError = data.message
                    }
                })
            } else {console.log({
                    to: this.tokenContractAddress,
                    from: this.purchaseAddress,
                    value: window.web3.utils.toWei(this.purchaseETH, 'ether')
                })
                window.web3.eth.sendTransaction({
                    to: this.tokenContractAddress,
                    from: this.purchaseAddress,
                    value: window.web3.utils.toWei(this.purchaseETH, 'ether')
                })
            }
        },
        proceed() {
            this.errors = []

            if (this.canContinue) {
                this.showPurchasePopup()

                return
            }

            if (!this.purchaseETH) {
                this.errors.push('You must specify how many HBX to purchase.')
            }
            if (!this.chosenIdentity || !this.chosenIdentity.public_address) {
                this.errors.push('You must choose a payment profile (Ethereum wallet).')
            }
            if (!this.tokenSaleAgreement) {
                this.errors.push('You must agree to the token sale agreement terms to continue.')
            }
            if (!this.jurisdictionAgreement) {
                this.errors.push('You must agree to the jurisdiction terms to continue.')
            }
            if (!this.residentAgreement) {
                this.errors.push('You must agree to the resident terms to continue.')
            }
            if (!(this.purchaseETH <= (this.maxPurchaseUSD / this.ETH2USD))) {
                this.errors.push('The purchase amount exceeds the personal cap of $7,500 USD. Please lower your purchase amount.')
            }
        }
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
    }
}
</script>

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
        .c-btn {
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
        .terms_block {
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
</style>
