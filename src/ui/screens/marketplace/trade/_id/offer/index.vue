<template>
    <article>
        <c-block :title="`Trading with ${trx.contractor.name}`" class="transaction">
            <div class="transaction__block">
                <div class="transaction__headings">
                    <h4>You offered</h4>
                    <h4>Your inventory</h4>
                </div>
                <div class="transaction__management">
                    <div class="management__selected-assets">
                        <c-assets-grid
                            class="management__assets-grid"
                            :assets="yoursOffer"
                            @click="handleArray($event, 'yoursOffer')"
                        />
                    </div>
                    <div class="management__inventory-explorer">
                        <c-list-submenu :items="trx.you.inventoryGrouped" isParent>
                            <c-list-submenu
                                slot="sublist"
                                slot-scope="{ sublist }"
                                :items="sublist"
                            >
                                <div
                                    class="sublist-menu__assets"
                                    slot-scope="props"
                                >
                                <!-- {{ Array.isArray(props.list) }} -->
                                    <c-asset-preview-small
                                        slot="item-content"
                                        :asset="props.list"
                                        @click.native="yoursOffer.push(props.list)"
                                    />
                                    <!-- @click.native="updateTransaction(props.list)" -->
                                    <!-- @click.native="yoursOffer.push(props.list)" -->
                                    <!-- {{ list.length > 1 ? list.length : '' }} -->
                                </div>
                            </c-list-submenu>
                        </c-list-submenu>
                    </div>
                </div>
            </div>
            <c-exchange-bar
                :price="price"
                :yours="yoursOffer.length"
                :their="theirOffer.length"
            />
            <div class="transaction__block">
                <div class="transaction__headings">
                    <h4>For {{ trx.contractor.name }}'s</h4>
                    <c-author :author="trx.contractor"/>
                    <h4>{{ trx.contractor.name }}'s inventory</h4>
                </div>
                <div class="transaction__management">
                    <div class="management__selected-assets">
                        <c-assets-grid
                            class="management__assets-grid"
                            :assets="theirOffer"
                            @click="handleArray($event, 'theirOffer')"
                        />
                    </div>
                    <div class="management__inventory-explorer">
                        <c-list-submenu :items="trx.contractor.inventoryGrouped" isParent>
                            <c-list-submenu
                                slot="sublist"
                                slot-scope="{ sublist }"
                                :items="sublist"
                            >
                                <div
                                    class="sublist-menu__assets"
                                    slot-scope="props"
                                >
                                    <c-asset-preview-small
                                        slot="item-content"
                                        :asset="props.list"
                                        @click.native="theirOffer.push(props.list)"
                                    />
                                </div>
                            </c-list-submenu>
                        </c-list-submenu>
                    </div>
                </div>
            </div>
            <div class="transaction__actions">
                <c-button
                    status="info"
                    icon_hide
                    @click="updateTrx()"
                >Update transaction</c-button>
            </div>
        </c-block>
    </article>
</template>


<script>
    import { arrayHandler } from '@/mixins';

    export default {
        props: ['id', 'trxa', 'trx'],
        mixins: [arrayHandler],
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-block-menu': (resolve) => require(['@/ui/components/block/menu'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
            'c-list-submenu': (resolve) => require(['@/ui/components/list-submenu'], resolve),
            'c-list-submenu-2': (resolve) => require(['@/ui/components/list-submenu/v2'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve),
            'c-asset-preview-small': (resolve) => require(['@/ui/components/asset-preview/small'], resolve),
            'c-exchange-bar': (resolve) => require(['@/ui/components/exchange-bar'], resolve),
            'c-author': (resolve) => require(['@/ui/components/author'], resolve),
            'c-assets-grid': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve)
        },
        data() {
            return {
                yoursOffer: [...this.trx.yourOffer],
                theirOffer: [...this.trx.contractorOffer]
            }
        },
        methods: {
            updateTransaction(target, asset, action = 'create') {
                this.$store.dispatch(
                    `${action}WeakRel`,
                    [`assets/transactions/${target}Offer`, this.id, asset.id]
                );
            },
            updateTrx() {
                // rename yoursOffer => yourOffer
                const { yoursOffer, theirOffer } = this;
                this.$store.dispatch(
                    'updateV2',
                    ['assets/transactions', this.id, {
                        yourOffer: yoursOffer.map(asset => asset.id),
                        theirOffer: theirOffer.map(asset => asset.id)
                    }]
                );
            },
            addTransactionAsset(asset, target) {
                const { tradeId } = this;
                this.$store.commit('addTransactionAsset', { asset, target, tradeId });
            },
            deleteAsset(target, asset) {
                this[target + 'Offer'].splice()
            }
        },
        computed: {
            price() {
                const { yoursOffer, theirOffer } = this;
                const round = num => Math.round(num * 100) / 100;

                const yours = round(
                    yoursOffer.reduce((price, asset) => price += asset.price.current, 0)
                );
                const their = round(
                    theirOffer.reduce((price, asset) => price += asset.price.current, 0)
                );
                return {
                    yours,
                    their,
                    sum: round(yours - their)
                };
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
