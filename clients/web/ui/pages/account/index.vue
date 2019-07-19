<template>
    <c-layout navigationKey="account">
        <div class="row">
            <div class="col-12">
                <c-block
                    title="Account Information"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    <form>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-3">
                                        <label>Email Address</label>
                                    </label>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Email"
                                            :value="account.email"
                                            readonly>
                                        <span class="form-text">This field cannot be changed at this time.</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-3">
                                        <label>Given Name</label>
                                    </label>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Given name"
                                            :value="account.firstName"
                                            readonly>
                                        <span class="form-text">This field cannot be changed at this time.</span>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="switch switch-sm col-sm-3">
                                        <label>Family Name</label>
                                    </label>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Family name"
                                            :value="account.lastName"
                                            readonly>
                                        <span class="form-text">This field cannot be changed at this time.</span>
                                    </div>
                                </div>
                                <div
                                    class="form-group row"
                                    hidden>
                                    <label class="switch switch-sm col-sm-3">
                                        <label>Public Address</label>
                                    </label>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Public address"
                                            :value="account.address"
                                            readonly>
                                        <span class="form-text">Your account is an Ethereum wallet, and can be <a
                                            :href="`https://etherscan.io/address/${account.address}`">found on the blockchain using the Public Address</a></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <c-button
                                    hidden
                                    @click="importAccountFile">
                                    Import Account
                                </c-button>
                                <c-button
                                    hidden
                                    @click="exportAccountFile">
                                    Export Saved Account
                                </c-button>
                                <c-button
                                    class="outline-danger"
                                    @click="deleteAccount">
                                    Clear Saved Account
                                </c-button>
                            </div>
                        </div>
                    </form>
                </c-block>

                <c-block
                    title="Overview"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    <div class="stat-card-container">
                        <div class="stat-card-list">
                            <nuxt-link
                                tag="div"
                                to="/account/profiles"
                                class="route stat-card">
                                <div class="icon">
                                    <i class="fas fa-id-card" />
                                </div>
                                <div class="info">
                                    <h4>Profiles</h4>
                                    <div class="stat">
                                        <div>
                                            {{ profileCount }} owned by your account
                                        </div>
                                    </div>
                                    <p>
                                        View and manage profiles on this account.
                                    </p>
                                </div>
                            </nuxt-link>
                            <div
                                v-access="'tickets'"
                                class="stat-card">
                                <div class="icon">
                                    <i class="fas fa-question-circle" />
                                </div>
                                <div class="info">
                                    <h4>Support Tickets</h4>
                                    <div class="stat">
                                        <div>
                                            <i class="fa fa-clock" />
                                            35
                                        </div>
                                        <div>
                                            <i
                                                class="fas fa-exclamation-triangle"
                                                style="color: #FADC72" />
                                            12
                                        </div>
                                        <div>
                                            <i
                                                class="fas fa-check"
                                                style="color: #43C981" />
                                            5
                                        </div>
                                    </div>
                                    <p>
                                        Viev and Manage Profiles on this account.
                                    </p>
                                </div>
                            </div>
                            <div
                                v-access="'payments'"
                                class="stat-card">
                                <div class="icon">
                                    <i class="fas fa-dollar-sign" />
                                </div>
                                <div class="info">
                                    <h4>Open Payments</h4>
                                    <div class="stat">
                                        <div>
                                            $ 2,345,00 om 6 Payments
                                        </div>
                                    </div>
                                    <p>
                                        Viev and Manage Profiles on this account.
                                    </p>
                                </div>
                            </div>
                            <div
                                v-access="'userActivity'"
                                class="stat-card">
                                <div class="icon">
                                    <i class="fas fa-users" />
                                </div>
                                <div class="info">
                                    <h4>User Activity</h4>
                                    <div class="stat">
                                        <div>
                                            <i
                                                class="fas fa-circle"
                                                style="color: #43C981" />
                                            3
                                        </div>
                                        <div>
                                            <i
                                                class="fas fa-circle"
                                                style="color: #FADC72" />
                                            1
                                        </div>
                                        <div>
                                            <i
                                                class="fas fa-circle"
                                                style="color: #F75D5D" />
                                            0
                                        </div>
                                        <div>
                                            <i
                                                class="fas fa-circle"
                                                style="color: #A2A3BE" />
                                            5
                                        </div>
                                    </div>
                                    <p>
                                        Viev and Manage Profiles on this account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </c-block>

                <c-block
                    title="Wishlists"
                    noGutter
                    bgGradient
                    onlyContentBg>
                    <c-tabs
                        :tabNames="['Products', 'Projects']"
                        styled>
                        <c-tab :tabId="1">
                            <div
                                v-if="profile.productWishlist.length"
                                class="wishlist-box">
                                <div
                                    v-for="product in profile.productWishlist"
                                    :key="product.id"
                                    class="wishlist-box__item">
                                    <c-game-includes-item
                                        :id="product.id"
                                        :image="product.images.mediumTile"
                                        :name="product.name"
                                        :rating="product.rating.overall"
                                        :developer="product.developer" />
                                    <c-button-fav
                                        target="wishlist"
                                        :active="true"
                                        @click="$store.dispatch(
                                            'community/updateWishlist',
                                            ['product', product.id]
                                        )" />
                                </div>
                            </div>
                            <p v-else>
                                You have not added any products to your wishlist
                            </p>
                        </c-tab>
                        <c-tab :tabId="2">
                            <div
                                v-if="profile.projectWishlist.length"
                                class="wishlist-box">
                                <div
                                    v-for="project in profile.projectWishlist"
                                    :key="project.id"
                                    class="wishlist-box__item">
                                    <c-project-card
                                        class="p-0 mb-2"
                                        :image="project.images[0]"
                                        :funds="project.funds" />
                                    <c-button-fav
                                        target="wishlist"
                                        :active="true"
                                        @click="$store.dispatch(
                                            'community/updateWishlist',
                                            ['project', project.id]
                                        )" />
                                </div>
                            </div>
                            <p v-else>
                                You have not added any projects to your wishlist
                            </p>
                        </c-tab>
                    </c-tabs>
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Account | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub account management` },
                { hid: 'keywords', name: 'keywords', content: 'account, identity, Ethereum, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-game-includes-item': () => import('~/components/game-series/game-includes-item').then(m => m.default || m),
        'c-button-fav': () => import('~/components/buttons/favorite').then(m => m.default || m),
        'c-project-card': () => import('~/components/project/card').then(m => m.default || m)
    },
    data() {
        return {
            wallets: [],
            expertMode: false
        }
    },
    computed: {
        profileCount() {
            return Object.values(this.$store.state.profiles.keyedById).length
        },
        account() {
            return this.$store.state.application.account
        },
        profile() {
            // TODO: Replace this old stuff
            const { products } = this.$store.state.marketplace
            const { projects } = this.$store.state.funding
            const profile = this.$store.state.application.activeProfile
            return {
                ...profile,
                productWishlist: Object.keys(profile.productWishlist || []).map(id => products[id]),
                projectWishlist: Object.keys(profile.projectWishlist || []).map(id => projects[id])
            }
        }
    },
    asyncData({ store, error }) {
        if (!store.state.auth.user) return error({ statusCode: 500, message: 'Not signed in' })
    },
    methods: {
        exportAccountFile() {
            this.$desktop.sendCommand('exportAccountFileRequest')
        },
        importAccountFile() {
            this.$desktop.sendCommand('importAccountFileRequest')
        },
        deleteAccount() {
            this.$desktop.sendCommand('deleteAccountRequest')
        }
    }
}
</script>

<style lang="scss">
    .send-money-modal {
        display: inline-block;
        width: auto !important;
        position: relative;
        min-width: 300px;
        .card {
            background: rgba(0, 0, 0, .13);
            border-radius: 5px;
            padding: 8px;
            input,
            select {
                height: 30px;
                line-height: 30px;
                padding: 0 8px;
            }
            label {
                margin: 0;
                padding: 0;
                text-align: left;
            }
            .custom-col {
                width: auto;
                margin-right: 10px;
                min-width: 40px;
            }
        }
        .modal-action {
            color: #C6C6D6;
            font-size: 12px;
            .btn {
                font-weight: bold;
                color: #fff;
            }
        }
        .money-info {
            width: 300px;
            &.expert {
                width: 250px;
                .card {
                    .custom-col {
                        width: 70px;
                    }
                }
            }
        }
    }

    .login-modal{
        display: inline-block;
        width: auto !important;
        position: relative;
        min-width: 250px;
        .modal-title{
            text-align: left;
            margin: 0 0 15px 0;
            h3{
                padding: 0;
                margin: 0 0 8px;
                font-size: 21px;
            }
            h5{
                font-size: 14px;
                font-weight: bold;
            }
        }
        .card {
            background: rgba(0, 0, 0, .13);
            border-radius: 5px;
            padding: 8px;
            margin: 0;
            text-align: left;
            input,
            select {
                height: 30px;
                line-height: 30px;
                padding: 0 8px;
            }
            label {
                margin: 0 0 5px;
                font-weight: bold;
                padding: 0;
                text-align: left;
            }
            .form-group{
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
        .modal-action{
            .btn{
                &.btn-link{
                    display: inline-block;
                    line-height: 14px;
                    padding: 0;
                    color: #FFFFFF;
                    float: left;
                    font-size: 11px;
                    border: none;
                    margin: 0;
                    text-align: left;
                }
            }
        }
    }
</style>

<style lang="scss" scoped>
    .stat-card-container {
        position: relative;
        overflow: hidden;
        .stat-card-list {
            display: flex;
            margin: 0 -1%;
            width: 102%;
            flex-wrap: wrap;
            .stat-card {
                width: 31%;
                margin: 0 1% 2%;
                border-radius: 5px;
                background: rgba(27, 29, 45, 0.5);
                padding: 10px;
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                .icon {
                    font-size: 48px;
                    color: #fff;
                    width: 60px;
                }
                .info {
                    width: calc(100% - 60px);
                    padding-left: 10px;
                    color: #fff;
                    h4 {
                        font-size: 18px;
                        margin: 0;
                        padding: 0;
                        font-weight: bold;
                    }
                    p {
                        color: #C6C6D6;
                        line-height: 16px;
                    }
                    .stat {
                        font-size: 14px;
                        font-weight: bold;
                        margin: 5px 0;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: nowrap;
                        div {
                            width: 100%;
                            line-height: 20px;
                            i {
                                margin-right: 5px;
                                color: #5D75F7;
                                &.fa-circle {
                                    font-size: 8px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .wishlist-box {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
        margin: -10px;
    }
    .wishlist-box__item{
        width: calc( 100%/3 - 20px );
        background: rgba(1,1,1,.1);
        padding: 10px;
        border-radius: 4px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        .favorite-btn{
            margin-top: auto;
        }
    }
</style>
