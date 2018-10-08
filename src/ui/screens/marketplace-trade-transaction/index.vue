<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <h2>Trade transaction</h2>
                        <c-block :title="'Transaction: ' + $route.params.tradeId" class="transaction">
                            <div class="transaction__headings">
                                <h4>Yours selling offer</h4>
                                <h4>Yours inventory</h4>
                            </div>
                            <div class="transaction__management">
                                <div class="management__selected-assets">
                                    <div class="assets-grid">
                                        <div
                                            v-for="(asset, index) in transaction.me.selling"
                                            :key="asset"
                                            class="assets-grid__asset"
                                            @click="selectedAssets.splice(index, 1)"
                                        >
                                            <c-tooltip v-show="asset.id" iconHide>
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
                                        @click="addAsset($event)"
                                    >
                                        <c-asset-preview-small
                                            slot-scope="{ item }"
                                            :asset="item"
                                        />
                                    </c-list>
                                </div>
                            </div>
                            <c-exchange-bar
                                :sumTransaction="sumTransaction"
                                :assetsLength="selectedAssets.length"
                            />
                            <div class="transaction__headings">
                                <h4>{{ transaction.contractor.user.name }}'s buying offer</h4>
                                <c-author :author="transaction.contractor.user"/>
                                <h4>{{ transaction.contractor.user.name }}'s inventory</h4>
                            </div>
                            <div class="transaction__management">
                                <div class="management__selected-assets">
                                    <div class="assets-grid">
                                        <div
                                            v-for="(asset, index) in transaction.me.selling"
                                            :key="asset"
                                            class="assets-grid__asset"
                                            @click="selectedAssets.splice(index, 1)"
                                        >
                                            <c-tooltip v-show="asset.id" iconHide>
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
                                        @click="addAsset($event)"
                                    >
                                        <c-asset-preview-small
                                            slot-scope="{ item }"
                                            :asset="item"
                                        />
                                    </c-list>
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
                        selling: [assets[1]],
                        user: {
                            name: 'San',
                            img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png',
                            inventory: assets.slice(3, assets.length)
                        }
                    },
                    contractor: {
                        selling: [assets[2]],
                        user: {
                            name: 'Satoshi',
                            img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png',
                            inventory: assets.slice(0, assets.length - 4)
                        }
                    },
                    updatedAt: '',
                    createdAt: ''
                }
            }
        },
        methods: {
            addAsset(asset) {
                const emptyAssetIndex = this.selectedAssets.findIndex(asset =>
                    !Object.keys(asset).length
                );
                if (emptyAssetIndex === -1) this.selectedAssets.push(asset);
                else this.selectedAssets.splice(emptyAssetIndex, 1, asset);
            }
        },
        computed: {
            ...mapGetters({
                'assets': 'marketplace/assetsArray'
            }),
            sumTransaction() {
                return Math.floor(
                    this.selectedAssets.reduce((price, asset) => price += asset.price.current, 0)
                    * 100
                ) / 100;
            },
            assetss() {
                return this.$store.getters['marketplace/assetsArray'];
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
    .transaction__management {
        display: flex;
        .management__selected-assets {
            flex: 5;
        }
        .management__inventory-explorer {
            flex: 3;
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
    }
</style>
