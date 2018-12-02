<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false">
        <div class="container-fluid">
            <div class="row" style="">
                <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0 mb-4">
                    <c-block title="KYC" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        <p>Welcome to the KYC portal. <span v-if="!desktopMode">BlockHub Desktop is the recommended way to KYC, purchase &amp; use tokens. You can also KYC on web and create your account in BlockHub later.</span></p>

                        <div v-if="!desktopMode">
                            <div class="text-center alert alert-info" style="font-weight: bold; font-size: 11px;">
                                <p> BlockHub, the first platform powered by Hyperbridge protocols has been released. <c-button href="#/download" class="outline-white">Download it now</c-button></p>
                            </div>
                        </div>
                    </c-block>
                    <br /><br />
                    <c-block title="Your Address" class="margin-bottom-30" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                        <p>Enter your Ethereum public address:</p>

                        <div class="input-group mb-4 margin-bottom-10">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    Public Address
                                </span>
                            </div>
                            <input type="text" class="form-control" ref="input" placeholder="Public Ethereum address...." v-model="purchaseAddress" />
                        </div>

                            <p><em>Tip: it looks something like this - 0x04AE72Cd525b66bc3D1241a311EE6990AD1F64a9</em></p>

                        <c-checkbox
                            id="useMetamask"
                            :checked="false"
                            type="square"
                            v-model="useMetamask"
                            v-if="!desktopMode"
                        >
                            Use MetaMask
                        </c-checkbox>

                        <div class="col-12 margin-top-30 margin-bottom-30" v-if="useMetamask && !ethereumConnected" style="text-align: center; width: 100%">
                            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
                                <img src="/static/img/metamask.png" style="max-width: 350px;margin: 0 auto" />
                            </a>

                            <br /><br />

                            <p>The BlockHub desktop client is the recommended way to load up on tokens, but you can also purchase using the MetaMask web wallet. Come back to this page within BlockHub, or when you've installed MetaMask.</p>
                        </div>

                        <div class="col-12 margin-top-30 margin-bottom-30" v-if="useMetamask && ethereumConnected && !ethereumUnlocked" style="text-align: center; width: 100%; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                            <img src="/static/img/metamask-logo.png" style="max-width: 150px;margin: 0 auto;opacity: 0.3; filter: grayscale(1);" />

                            <br /><br />

                            <p>The BlockHub desktop client is the recommended way to load up on tokens, but if you'd like to purchase with MetaMask, open the extension to unlock your web wallet.</p>

                            <br /><br />
                            
                            <c-button class="c-btn-lg " @click="unlockWallet">Unlock Wallet</c-button>
                        </div>
                        
                        <div class="col-12 margin-top-30 margin-bottom-30" v-if="useMetamask && ethereumConnected && ethereumUnlocked" style="text-align: center; width: 100%; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                            <img src="/static/img/metamask-logo.png" style="max-width: 150px;margin: 0 auto;" />

                            <br /><br />

                            <h2>Connected to MetaMask <span class="fa fa-check-circle" /></h2>
                        </div>

                        <p class="alert alert-danger errors" v-if="errors.length">
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </p>
                        
                        <div class="margin-top-30" style="text-align: center">
                            <c-button status="success" class="c-btn-lg justify-content-center" iconHide size="xl" @click="proceed" :class="{'disabled': !canContinue }">
                                Continue
                            </c-button>
                        </div>
                    </c-block>
                </div>

            </div>
        </div>

    </c-layout>
</template>

<script>
import * as Bridge from '@/framework/desktop-bridge'
import { setInterval } from 'core-js';

export default {
    components: {
        'c-user-card': (resolve) => require(['@/ui/components/user-card'], resolve),
        'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
        'c-tabs': (resolve) => require(['@/ui/components/tab/tabs'], resolve),
        'c-tab': (resolve) => require(['@/ui/components/tab/tab'], resolve),
        'c-welcome-box': (resolve) => require(['@/ui/components/welcome-box'], resolve)
    },
    data() {
        const checkEthereumConnection = () => {
            if (!this.useMetamask) return

            if (this.desktopMode || (typeof web3 !== 'undefined' && web3.currentProvider.isMetaMask === true)) {
                this.ethereumConnected = true
            }

            if (typeof window.web3 !== 'undefined') {
                window.web3.eth.getAccounts((err, accounts) => {
                    this.ethereumUnlocked = accounts.length > 0
                    this.purchaseAddress = accounts[0]
                })
            }
        }

        setInterval(checkEthereumConnection, 2000)

        return {
            purchaseAddress: null,
            useMetamask: false,
            ethereumConnected: false,
            ethereumUnlocked: false,
            errors: []
        }
    },
    computed: {
        desktopMode() {
            return this.$store.state.application.desktopMode
        },
        canContinue() {
            return this.purchaseAddress
        }
    },
    methods: {
        unlockWallet() {
            if (typeof window.web3 !== 'undefined') {
                if (window.ethereum) {
                    try {
                        // Request account access if needed
                        window.ethereum.enable().then(() => {
                            window.web3 = new Web3(window.ethereum)

                            checkEthereumConnection()
                        })
                    } catch (error) {
                        // User denied account access...
                    }
                }
                else if (window.web3) {
                    window.web3 = new Web3(window.web3.currentProvider)

                    checkEthereumConnection()
                }
            }
        },
        proceed() {
            this.errors = []

            if (this.canContinue) {
                this.$store.state.application.account.address = this.purchaseAddress  // save for verification screen

                this.$router.push('/account/verification')

                return
            }

            if (!this.purchaseAddress) {
                this.errors.push('You must specify your Ethereum public address or hook up MetaMask.')
            }
        }
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

    p {
        font-size: 15px;
        line-height: 20px;
    }

</style>
