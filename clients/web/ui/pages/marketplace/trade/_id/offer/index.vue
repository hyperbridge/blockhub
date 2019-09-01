<template>
    <article>
        <Block
            :title="`Trading with ${trx.contractor.name}`"
            class="transaction">
            <div class="transaction__block">
                <div class="transaction__headings">
                    <h4>You offered</h4>
                    <h4>Your inventory</h4>
                </div>
                <div class="transaction__management">
                    <div class="management__selected-assets">
                        <AsssetsGrid
                            class="management__assets-grid"
                            :assets="yoursOffer"
                            @click="handleArray($event, 'yoursOffer')" />
                    </div>
                    <div class="management__inventory-explorer">
                        <List-submenu
                            :items="trx.you.inventoryGrouped"
                            isParent>
                            <List-submenu
                                slot="sublist"
                                slot-scope="{ sublist }"
                                :items="sublist">
                                <div
                                    slot-scope="props"
                                    class="sublist-menu__assets">
                                    <!-- {{ Array.isArray(props.list) }} -->
                                    <AssetPreview-small
                                        slot="item-content"
                                        :asset="props.list"
                                        @click.native="yoursOffer.push(props.list)" />
                                    <!-- @click.native="updateTransaction(props.list)" -->
                                    <!-- @click.native="yoursOffer.push(props.list)" -->
                                    <!-- {{ list.length > 1 ? list.length : '' }} -->
                                </div>
                            </List-submenu>
                        </List-submenu>
                    </div>
                </div>
            </div>
            <ExchangeBar
                :price="price"
                :yours="yoursOffer.length"
                :their="theirOffer.length" />
            <div class="transaction__block">
                <div class="transaction__headings">
                    <h4>For {{ trx.contractor.name }}'s</h4>
                    <Author
                        :name="trx.contractor.name"
                        :img="trx.contractor.img" />
                    <h4>{{ trx.contractor.name }}'s inventory</h4>
                </div>
                <div class="transaction__management">
                    <div class="management__selected-assets">
                        <AsssetsGrid
                            class="management__assets-grid"
                            :assets="theirOffer"
                            @click="handleArray($event, 'theirOffer')" />
                    </div>
                    <div class="management__inventory-explorer">
                        <List-submenu
                            :items="trx.contractor.inventoryGrouped"
                            isParent>
                            <List-submenu
                                slot="sublist"
                                slot-scope="{ sublist }"
                                :items="sublist">
                                <div
                                    slot-scope="props"
                                    class="sublist-menu__assets">
                                    <AssetPreview-small
                                        slot="item-content"
                                        :asset="props.list"
                                        @click.native="theirOffer.push(props.list)" />
                                </div>
                            </List-submenu>
                        </List-submenu>
                    </div>
                </div>
            </div>
            <div class="transaction__actions">
                <Button
                    status="info"
                    iconHide
                    @click="updateTrx()">
                    Update transaction
                </Button>
            </div>
        </Block>
    </article>
</template>


<script>
import { handleArray } from '@/mixins'

export default {
    components: {
        'Block': () => import('@ericmuyser/hyper-ui').then(m => m.Block),
        'Block-menu': () => import('@ericmuyser/hyper-ui').then(m => m.Block-menu),
        'List': () => import('@ericmuyser/hyper-ui').then(m => m.List),
        'List-submenu': () => import('@ericmuyser/hyper-ui').then(m => m.List-submenu),
        'List-submenu-2': () => import('@ericmuyser/hyper-ui').then(m => m.List-submenu-2),
        'Tooltip': () => import('@ericmuyser/hyper-ui').then(m => m.Tooltip),
        'AssetPreview': () => import('@ericmuyser/hyper-ui').then(m => m.AssetPreview),
        'AssetPreview-small': () => import('@ericmuyser/hyper-ui').then(m => m.AssetPreview-small),
        'ExchangeBar': () => import('@ericmuyser/hyper-ui').then(m => m.ExchangeBar),
        'Author': () => import('@ericmuyser/hyper-ui').then(m => m.Author),
        'AsssetsGrid': () => import('@ericmuyser/hyper-ui').then(m => m.AsssetsGrid)
    },
    mixins: [handleArray],
    data() {
        return {
            yoursOffer: [...this.trx.yourOffer],
            theirOffer: [...this.trx.contractorOffer]
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        trxa() {
            return this.$route.params.trxa
        },
        trx() {
            return this.$route.params.trx
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
        }
    },
    methods: {
        updateTransaction(target, asset, action = 'create') {
            this.$store.dispatch(
                `${action}WeakRel`,
                [`assets/transactions/${target}Offer`, this.id, asset.id]
            )
        },
        updateTrx() {
            // rename yoursOffer => yourOffer
            const { yoursOffer, theirOffer } = this
            this.$store.dispatch(
                'updateV2',
                ['assets/transactions', this.id, {
                    yourOffer: yoursOffer.map(asset => asset.id),
                    theirOffer: theirOffer.map(asset => asset.id)
                }]
            )
        },
        addTransactionAsset(asset, target) {
            const { tradeId } = this
            this.$store.commit('addTransactionAsset', { asset, target, tradeId })
        },
        deleteAsset(target, asset) {
            this[`${target}Offer`].splice()
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
            margin-right: 20px;
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

    .management__assets-grid {
        height: 100%;
    }

    .transaction__actions {
        margin: 20px 0;
        display: flex;
    }
</style>
