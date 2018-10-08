<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <h2>Trade transaction</h2>
                        <c-block :title="'Transaction: ' + $route.params.tradeId" class="transaction__block">
                            <div class="my-inventory">
                                <div class="choosen-assets">
                                    <h2>Choosen assets</h2>
                                    <div class="assets-grid">
                                        <div
                                            v-for="(asset, index) in selectedAssets"
                                            :key="asset"
                                            class="assets-grid__asset"
                                            @click="selectedAssets.splice(index, 1)"
                                        >
                                            <c-tooltip v-show="asset.id">
                                                <c-asset-preview
                                                    slot="tooltip"
                                                    :asset="asset"
                                                    :iconHide="true"
                                                />
                                                <c-img :src="asset.image" class="asset__image"/>
                                                <!-- <p class="asset__name">{{ asset.name }}</p> -->
                                            </c-tooltip>
                                        </div>
                                    </div>
                                </div>
                                <div class="inventory-explorer">
                                    <h2>My inventory</h2>
                                    <c-list
                                        :items="assets"
                                    >
                                        <c-asset-preview-small
                                            slot-scope="{ item }"
                                            @click.native="addAsset(item)"
                                            :asset="item"
                                        />
                                    </c-list>
                                </div>
                            </div>
                            <c-exchange-bar
                                :sumTransaction="sumTransaction"
                                :assetsLength="selectedAssets.length"
                            />
                        </c-block>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve),
            'c-asset-preview-small': (resolve) => require(['@/ui/components/asset-preview/small'], resolve),
            'c-exchange-bar': (resolve) => require(['@/ui/components/exchange-bar'], resolve),
        },
        data() {
            return {
                selectedAssets: [
                ]
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
    .transaction__block {
        margin-bottom: 100px;
    }
    .my-inventory {
        display: flex;
        margin-bottom: 50px;
    }
    .choosen-assets {
        flex: 5;
    }
    .inventory-explorer {
        flex: 3;
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
        .asset__name {
            margin: 0 auto;
            text-align: center;
            font-size: 11px;
        }
    }
</style>
