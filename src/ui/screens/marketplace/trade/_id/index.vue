<template>
    <article>
        <c-block  v-if="transaction" :title="'Transaction: ' + this.id" class="transaction">
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
                        <c-list-submenu-2 :list="you.inventoryGrouped">
                            <!-- <span slot-scope="props">
                            </span> -->
                        </c-list-submenu-2>
                        <c-list-submenu :items="users.you.inventoryGrouped" isParent>
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
                    <h4>For {{ users.contractor.name }}'s</h4>
                    <c-author :author="users.contractor"/>
                    <h4>{{ users.contractor.name }}'s inventory</h4>
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
                        <c-list-submenu :items="users.contractor.inventoryGrouped" isParent>
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
                                    <!-- {{ list.length > 1 ? list.length : '' }} -->
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
                >Update transaction</c-button>
            </div>
        </c-block>
        <c-block v-else :title="'Transaction: ' + tradeId" class="transaction">
            <p>Transaction with id <i>{{ id }}</i> doesn't exist</p>
        </c-block>
    </article>
</template>


<script>
    import { arrayHandler } from '@/mixins';
    // import getters from '@/store/temporary-getters';

    export default {
        props: ['id'],
        mixins: [arrayHandler],
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
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
                yoursOffer: [],
                theirOffer: []
            }
        },
        methods: {
            checkClick(e) {
                console.log(e)
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
            inventory() {
                return {}
                const extractor = (target, offer) => {
                    const { inventory: originalInv } = this.transaction[target].user;
                    const reduced = originalInv
                        .reduce((inventory, asset) => {
                            const { product_name } = asset;
                            if (inventory[product_name]) inventory[product_name].push(asset);
                            else inventory[product_name] = [asset];
                            return inventory;
                        }, {});

                    return Object.keys(reduced)
                        .reduce((inventory, productKey) => {
                            inventory[productKey] = reduced[productKey].reduce((assets, asset, productAssets) => {
                                const { name } = asset;

                                const offerAssets = this[offer].filter(offAsset => offAsset.id === asset.id);
                                const invAssets = originalInv.filter(invAsset => invAsset.id === asset.id);

                                if (assets[name] && !this[offer].includes(asset)) {
                                    assets[name].push(asset);
                                }
                                else if (offerAssets.length !== invAssets.length) {
                                    assets[name] = [asset];
                                }

                                return assets;
                            }, {});
                            return inventory;
                        }, {});
                }

                return {
                    yours: extractor('me', 'yoursOffer'),
                    their: extractor('contractor', 'theirOffer')
                };
            },
            assetsStore() {
                return this.$store.state.assets;
            },
            assets() {
                return this.assetsStore.assets;
            },
            transaction() {
                return this.$store.state.assets.trxs[this.id];
            },
            products() {
                return this.$store.state.marketplace.products;
            },
            you() {
                return this.$store.getters['assets/users'][this.trx.you];
            },
            contractor() {
                return this.$store.getters['assets/users'][this.trx.contractor];
            },
            users() {
                const { assets, transaction, products } = this;
                const { users } = this.$store.state.assets;

                const you = users[transaction.you];
                const yourInventory = you.inventory.map(id => assets[id]);

                const contractor = users[transaction.contractor];
                const contractorsInventory = contractor.inventory.map(id => assets[id]);

                return {
                    you: {
                        ...you,
                        inventory: yourInventory,
                        inventoryGrouped: yourInventory.reduce((grouped, asset) => {
                            const product = products[asset.product];
                            grouped[product.name] = grouped[product.name] || [];
                            grouped[product.name] = [...grouped[product.name], asset];
                            return grouped;
                        }, {})
                    },
                    contractor: {
                        ...contractor,
                        inventory: contractorsInventory,
                        inventoryGrouped: contractorsInventory.reduce((grouped, asset) => {
                            const product = products[asset.product];
                            grouped[product.name] = grouped[product.name] || [];
                            grouped[product.name] = [...grouped[product.name], asset];
                            return grouped;
                        }, {})
                    }
                };
            },
            tr() {
                const trx = this.$store.state.assets.trxs[this.id];
                return {
                    ...trx
                };
            },
            price() {
                const { yoursOffer, theirOffer } = this;
                const round = num => Math.round(num * 100) / 100;

                // const {  }
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
            },
            tradeId() {
                return this.$route.params.tradeId;
            },
            trx() {
                return this.transaction;
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
