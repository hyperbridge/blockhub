<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <h2>Trade transaction</h2>
                        <c-block :title="'Transaction: ' + $route.params.tradeId" class="transaction">
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
                                                :key="asset"
                                                class="assets-grid__asset"
                                                @click="yoursOffer.splice(index, 1)"
                                            >
                                                <c-tooltip v-show="asset.id" :delay="30" iconHide>
                                                    <c-asset-preview
                                                        slot="tooltip"
                                                        :asset="asset"
                                                    />
                                                    <c-img :src="asset.image" class="asset__image"/>
                                                    <span class="asset__price">{{ asset.price.current }}$</span>
                                                </c-tooltip>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="management__inventory-explorer">
                                        <c-list
                                            :items="transaction.me.user.inventory"
                                            @click="yoursOffer.push($event)"
                                        >
                                            <c-asset-preview-small
                                                slot-scope="{ item }"
                                                :asset="item"
                                            />
                                        </c-list>
                                        <!-- <c-list-submenu :items="inventory.yours">
                                            <template slot-scope="{ item }">
                                                {{ item.name }}
                                            </template>
                                        </c-list-submenu> -->
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
                                    <h4>{{ transaction.contractor.user.name }}'s selling offer</h4>
                                    <c-author :author="transaction.contractor.user"/>
                                    <h4>{{ transaction.contractor.user.name }}'s inventory</h4>
                                </div>
                                <div class="transaction__management">
                                    <div class="management__selected-assets">
                                        <div class="assets-grid">
                                            <div
                                                v-for="(asset, index) in theirOffer"
                                                :key="asset"
                                                class="assets-grid__asset"
                                                @click="theirOffer.splice(index, 1)"
                                            >
                                                <c-tooltip v-show="asset.id" :delay="30" iconHide>
                                                    <c-asset-preview
                                                        slot="tooltip"
                                                        :asset="asset"
                                                    />
                                                    <c-img :src="asset.image" class="asset__image"/>
                                                    <span class="asset__price">{{ asset.price.current }}$</span>
                                                </c-tooltip>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="management__inventory-explorer">
                                        <c-list
                                            :items="transaction.me.user.inventory"
                                            @click="theirOffer.push($event)"
                                        >
                                            <c-asset-preview-small
                                                slot-scope="{ item }"
                                                :asset="item"
                                            />
                                        </c-list>
                                    </div>
                                </div>
                            </div>
                        </c-block>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import { mapGetters } from 'vuex';
    import assets from '@/db/seed/assets';

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
            'c-list-submenu': (resolve) => require(['@/ui/components/list-submenu'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve),
            'c-asset-preview-small': (resolve) => require(['@/ui/components/asset-preview/small'], resolve),
            'c-exchange-bar': (resolve) => require(['@/ui/components/exchange-bar'], resolve),
            'c-author': (resolve) => require(['@/ui/components/author'], resolve),
        },
        data() {
            return {
                selectedAssets: [
                ],
                transaction: {
                    id: 31,
                    me: {
                        selling: [assets[1], assets[0]],
                        user: {
                            name: 'San',
                            img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png',
                            inventory: assets.slice(3, assets.length)
                        }
                    },
                    contractor: {
                        selling: [assets[2], assets[4], assets[5]],
                        user: {
                            name: 'Satoshi',
                            img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png',
                            inventory: assets.slice(0, assets.length - 4)
                        }
                    },
                    updatedAt: '',
                    createdAt: ''
                },
                yoursOffer: [],
                theirOffer: []
            }
        },
        methods: {
        },
        computed: {
            ...mapGetters({
                'assets': 'marketplace/assetsArray'
            }),
            inventory() {
                const extractor = target => {
                    const reduced = this.transaction[target].user.inventory
                        .reduce((inventory, asset) => {
                            const { product_name } = asset;
                            if (inventory[product_name]) inventory[product_name].push(asset);
                            else inventory[product_name] = [asset];
                            return inventory;
                        }, {});

                    return Object.keys(reduced)
                        .reduce((inventory, productKey) => {
                            inventory[productKey] = reduced[productKey].reduce((assets, asset) => {
                                const { name } = asset;
                                if (assets[name]) assets[name].push(asset);
                                else assets[name] = [asset];
                                return assets;
                            }, {});
                            return inventory;
                        }, {});
                }

                return {
                    yours: extractor('me'),
                    their: extractor('contractor')
                };
            },
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
            },
            assetss() {
                return this.$store.getters['marketplace/assetsArray'];
            }
        },
        mounted() {
            this.yoursOffer = this.transaction.me.selling;
            this.theirOffer = this.transaction.contractor.selling;
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
            .list-container {
                // box-shadow: 0 0 25px 0 rgba(1,1,1,.25);
                // border: 1px solid rgba(255,255,255,.1);
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
</style>
