<template>
    <Layout
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="container-fluid">
            <div
                class="row"
                style="">
                <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0 mb-4">
                    <Block
                        title="KYC"
                        class="margin-bottom-30"
                        :noGutter="true"
                        :bgGradient="true"
                        :onlyContentBg="true">
                        <p>Welcome to the KYC portal. <span v-if="!desktopMode">BlockHub Desktop is the recommended way to KYC, purchase &amp; use tokens. You can also KYC on web and create your account in BlockHub later.</span></p>

                        <div v-if="!desktopMode">
                            <div
                                class="text-center alert alert-info"
                                style="font-weight: bold; font-size: 11px;">
                                <p>
                                    BlockHub, the first platform powered by Hyperbridge protocols has been released. <Button
                                        to="/download"
                                        class="outline-white">
                                        Download it now
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </Block>
                    <br><br>
                    <Block
                        title="Your Address"
                        class="margin-bottom-30"
                        :noGutter="true"
                        :bgGradient="true"
                        :onlyContentBg="true">
                        <p>Enter your Ethereum public address:</p>

                        <div class="input-group mb-4 margin-bottom-10">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    Public Address
                                </span>
                            </div>
                            <input
                                ref="input"
                                v-model="purchaseAddress"
                                type="text"
                                class="form-control"
                                placeholder="Public Ethereum address....">
                        </div>

                        <p><em>Tip: it looks something like this - 0x04AE72Cd525b66bc3D1241a311EE6990AD1F64a9</em></p>

                        <Checkbox
                            v-if="!desktopMode"
                            id="useMetamask"
                            v-model="useMetamask"
                            :checked="false"
                            type="square">
                            Use MetaMask
                        </Checkbox>

                        <div
                            v-if="useMetamask && !ethereumConnected"
                            class="col-12 margin-top-30 margin-bottom-30"
                            style="text-align: center; width: 100%">
                            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
                                <img
                                    src="/img/metamask.png"
                                    style="max-width: 350px;margin: 0 auto">
                            </a>

                            <br><br>

                            <p>The BlockHub desktop client is the recommended way to load up on tokens, but you can also purchase using the MetaMask web wallet. Come back to this page within BlockHub, or when you've installed MetaMask.</p>
                        </div>

                        <div
                            v-if="useMetamask && ethereumConnected && !ethereumUnlocked"
                            class="col-12 margin-top-30 margin-bottom-30"
                            style="text-align: center; width: 100%; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                            <img
                                src="/img/metamask-logo.png"
                                style="max-width: 150px;margin: 0 auto;opacity: 0.3; filter: grayscale(1);">

                            <br><br>

                            <p>The BlockHub desktop client is the recommended way to load up on tokens, but if you'd like to purchase with MetaMask, open the extension to unlock your web wallet.</p>

                            <br><br>

                            <Button
                                class="Button--lg "
                                @click="unlockWallet">
                                Unlock Wallet
                            </Button>
                        </div>

                        <div
                            v-if="useMetamask && ethereumConnected && ethereumUnlocked"
                            class="col-12 margin-top-30 margin-bottom-30"
                            style="text-align: center; width: 100%; margin-bottom: 30px; padding:20px;border: 3px dashed rgba(0,0,0,0.1); border-radius: 7px;background: rgba(0,0,0,0.2)">
                            <img
                                src="/img/metamask-logo.png"
                                style="max-width: 150px;margin: 0 auto;">

                            <br><br>

                            <h2>Connected to MetaMask <span class="fa fa-check-circle" /></h2>
                        </div>

                        <div
                            v-if="errors.length"
                            class="alert alert-danger errors">
                            <ul>
                                <li
                                    v-for="error in errors"
                                    :key="error">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>

                        <div
                            class="margin-top-30"
                            style="text-align: center">
                            <Button
                                status="success"
                                class="Button--lg justify-content-center"
                                iconHide
                                size="xl"
                                :class="{'disabled': !canContinue }"
                                @click="proceed">
                                Continue
                            </Button>
                        </div>
                    </Block>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import { setInterval } from 'core-js'

export default {
    components: {
        'UserCard': () => import('@ericmuyser/hyper-ui').then(m => m.UserCard),
        'Popup': () => import('@ericmuyser/hyper-ui').then(m => m.Popup),
        'WelcomeBox': () => import('@ericmuyser/hyper-ui').then(m => m.WelcomeBox)
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

        if (process.client) {
            setInterval(checkEthereumConnection, 2000)
        }

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
        async unlockWallet() {
            if (typeof window.web3 !== 'undefined') {
                if (window.ethereum) {
                    try {
                        // Request account access if needed
                        await window.ethereum.enable()

                        window.web3 = new Web3(window.ethereum)

                        checkEthereumConnection()
                    } catch (error) {
                        // User denied account access...
                    }
                } else if (window.web3) {
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

    .popup__content {
        background: transparent;
        color: #fff;
    }

    .checkbox {
        width: 100%;
        margin: 3px;
    }

    p {
        font-size: 15px;
        line-height: 20px;
    }

</style>
