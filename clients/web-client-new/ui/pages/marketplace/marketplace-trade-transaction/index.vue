<template>
    <c-layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    Marketplace
                    <h2>Trade transaction</h2>
                    <c-block v-if="transaction"
                             :title="'Transaction: ' + tradeId"
                             class="transaction">
                        <div class="transaction__block">
                            <div class="transaction__headings">
                                <h4>Yours selling offer</h4>
                                <h4>Yours inventory</h4>
                            </div>
                            <div class="transaction__management">
                                <div class="management__selected-assets">
                                    <div class="assets-grid">
                                        <div
                                            v-for="(asset, index) in yoursOffer"
                                            :key="index"
                                            class="assets-grid__asset"
                                            @click="yoursOffer.splice(index, 1)">
                                            <c-tooltip :delay="30"
                                                       iconHide>
                                                <c-asset-preview
                                                    slot="tooltip"
                                                    :asset="asset" />
                                                <c-img :src="asset.image"
                                                       class="asset__image" />
                                                <span class="asset__price">{{ asset.price.current }}$</span>
                                            </c-tooltip>
                                        </div>
                                    </div>
                                </div>
                                <div class="management__inventory-explorer">
                                    <c-list-submenu :items="inventory.yours"
                                                    isParent>
                                        <c-list-submenu
                                            slot="sublist"
                                            slot-scope="{ sublist }"
                                            :items="sublist"
                                            @click="yoursOffer.push($event)">
                                            <div
                                                slot-scope="{ list }"
                                                class="sublist-menu__assets">
                                                <c-asset-preview-small
                                                    slot="item-content"
                                                    :asset="list[0]" />
                                                {{ list.length > 1 ? list.length : '' }}
                                            </div>
                                        </c-list-submenu>
                                    </c-list-submenu>
                                </div>
                            </div>
                        </div>
                        <c-exchange-bar
                            :price="price"
                            :yours="yoursOffer.length"
                            :their="theirOffer.length" />
                        <div class="transaction__block">
                            <div class="transaction__headings">
                                <h4>{{ transaction.contractor.user.name }}'s selling offer</h4>
                                <c-author :name="transaction.contractor.user.name"
                                          :img="transaction.contractor.user.img" />
                                <h4>{{ transaction.contractor.user.name }}'s inventory</h4>
                            </div>
                            <div class="transaction__management">
                                <div class="management__selected-assets">
                                    <div class="assets-grid">
                                        <div
                                            v-for="(asset, index) in theirOffer"
                                            :key="asset"
                                            class="assets-grid__asset"
                                            @click="theirOffer.splice(index, 1)">
                                            <c-tooltip v-show="asset.id"
                                                       :delay="30"
                                                       iconHide>
                                                <c-asset-preview
                                                    slot="tooltip"
                                                    :asset="asset" />
                                                <c-img :src="asset.image"
                                                       class="asset__image" />
                                                <span class="asset__price">{{ asset.price.current }}$</span>
                                            </c-tooltip>
                                        </div>
                                    </div>
                                </div>
                                <div class="management__inventory-explorer">
                                    <c-list-submenu :items="inventory.their"
                                                    isParent>
                                        <c-list-submenu
                                            slot="sublist"
                                            slot-scope="{ sublist }"
                                            :items="sublist"
                                            @click="theirOffer.push($event)">
                                            <div
                                                slot-scope="{ list }"
                                                class="sublist-menu__assets">
                                                <c-asset-preview-small
                                                    slot="item-content"
                                                    :asset="list[0]" />
                                                {{ list.length > 1 ? list.length : '' }}
                                            </div>
                                        </c-list-submenu>
                                    </c-list-submenu>
                                </div>
                            </div>
                        </div>
                        <div class="transaction__actions">
                            <c-button
                                status="info"
                                iconHide>
                                Update transaction
                            </c-button>
                        </div>
                    </c-block>
                    <c-block v-else
                             :title="'Transaction: ' + tradeId"
                             class="transaction">
                        <p>Transaction with id <i>{{ tradeId }}</i> doesn't exist</p>
                    </c-block>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-block': () => import('~/components/block').then(m => m.default || m),
        'c-list': () => import('~/components/list').then(m => m.default || m),
        'c-list-submenu': () => import('~/components/list-submenu').then(m => m.default || m),
        'c-tooltip': () => import('~/components/tooltips/universal').then(m => m.default || m),
        'c-asset-preview': () => import('~/components/asset-preview').then(m => m.default || m),
        'c-asset-preview-small': () => import('~/components/asset-preview/small').then(m => m.default || m),
        'c-exchange-bar': () => import('~/components/exchange-bar').then(m => m.default || m),
        'c-author': () => import('~/components/author').then(m => m.default || m)
    },
    data() {
        return {
            yoursOffer: [],
            theirOffer: []
        }
    },
    computed: {
        inventory() {
            const extractor = (target, offer) => {
                const { inventory: originalInv } = this.transaction[target].user
                const reduced = originalInv
                    .reduce((inventory, asset) => {
                        const { productName } = asset
                        if (inventory[productName]) inventory[productName].push(asset)
                        else inventory[productName] = [asset]
                        return inventory
                    }, {})

                return Object.keys(reduced)
                    .reduce((inventory, productKey) => {
                        inventory[productKey] = reduced[productKey].reduce((assets, asset, productAssets) => {
                            const { name } = asset

                            const offerAssets = this[offer].filter(offAsset => offAsset.id === asset.id)
                            const invAssets = originalInv.filter(invAsset => invAsset.id === asset.id)

                            if (assets[name] && !this[offer].includes(asset)) {
                                assets[name].push(asset)
                            } else if (offerAssets.length !== invAssets.length) {
                                assets[name] = [asset]
                            }

                            return assets
                        }, {})
                        return inventory
                    }, {})
            }

            return {
                yours: extractor('me', 'yoursOffer'),
                their: extractor('contractor', 'theirOffer')
            }
        },
        price() {
            const { yoursOffer, theirOffer } = this
            const round = num => Math.round(num * 100) / 100
            const yours = round(
                yoursOffer.reduce((price, asset) => price += asset.price.current, 0)
            )
            const their = round(
                theirOffer.reduce((price, asset) => price += asset.price.current, 0)
            )
            return {
                yours,
                their,
                sum: round(yours - their)
            }
        },
        tradeId() {
            return this.$route.params.tradeId
        },
        transaction() {
            return this.$store.state.assets.transactions
                .find(transaction =>
                    transaction.id === this.tradeId)
        }
    },
    mounted() {
        this.yoursOffer = this.transaction.me.selling
        this.theirOffer = this.transaction.contractor.selling
    },
    methods: {
        addTransactionAsset(asset, target) {
            const { tradeId } = this
            this.$store.commit('addTransactionAsset', { asset, target, tradeId })
        }
    }
}
</script>

<style lang="scss" scoped>
    .transaction {
        margin-bottom: 100px;
    }
    .transaction__headings {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4 { margin: 0; }
        margin-bottom: 20px;
    }
    .transaction__block {
        background: rgba(55, 57, 86, .35);
        border-radius: 4px;
        padding: 15px;
    }
    .transaction__management {
        display: flex;
        .management__selected-assets {
            flex: 5;
        }
        .management__inventory-explorer {
            flex: 3;
            .sublist-menu__assets {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            >.list-container {
                box-shadow: 0 0 25px 0 rgba(1,1,1,.25);
                border: 1px solid rgba(255,255,255,.1);
            }
        }
    }

    .assets-grid {
        background: rgba(1,1,1,.1);
        box-shadow: 0 0 20px 0 rgba(1,1,1,.25);
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 4px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 5px;
        margin-right: 30px;
        min-height: 100%;
    }
    .assets-grid__asset {
        width: 100px;
        height: 100px;
        margin: 5px;
        background: rgba(1,1,1,.2);
        border: 1px solid rgba(255,255,255,.25);
        position: relative;
        padding: 4px;
        animation: rotate-in .2s ease;
        user-select: none;
        .tooltip-universal__wrapper {
            width: 100%;
        }
        .asset__image {
            width: 100%;
            height: 100%;
        }
        .asset__price {
            font-size: 11px;
            position: absolute;
            bottom: 0;
            right: 0;
            background: rgba(1,1,1,.35);
            padding: 0 2px;
            border-radius: 4px;
        }
        .asset__name {
            margin: 0 auto;
            text-align: center;
            font-size: 11px;
        }
        @keyframes rotate-in {
            0% {
                opacity: 0;
                transform: scale(0) rotate(80deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }
    }

    .transaction__actions {
        margin: 20px 0;
        display: flex;
    }
</style>
