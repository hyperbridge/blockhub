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
                            <div class="transaction__exchange">
                                <div class="exchange__data">
                                    <p>Sell {{ selectedAssets.length }} assets for</p>
                                    <span class="data__price">{{ sumTransaction }}$</span>
                                </div>
                                <div class="exchange__sum">
                                    <div class="sum__circle">
                                        <span
                                            v-show="sumTransaction"
                                            class="circle__price"
                                        >{{ sumTransaction }}$</span>
                                        <c-icon
                                            name="exchange-alt"
                                            class="circle__icon"
                                            :class="{ 'circle__icon--small': sumTransaction }"
                                        />
                                    </div>
                                </div>
                                <div class="exchange__data">
                                    <p>Buy {{ selectedAssets.length }} assets for</p>
                                    <span class="data__price">{{ sumTransaction }}$</span>
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

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve),
            'c-asset-preview-small': (resolve) => require(['@/ui/components/asset-preview/small'], resolve),
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
    .transaction__exchange {
        padding: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .exchange__data {
            text-align: center;
            font-size: 12px;
            p { margin-bottom: 7px; }
            .data__price {
                font-size: 20px;
            }
        }
        .exchange__sum {
            width: 35px;
            height: 35px;
            position: relative;
            .sum__circle {
                position: absolute;
                width: 100px;
                height: 100px;
                top: calc(-50% - 25px / 2);
                left: -25px;
                background: rgb(50, 52, 78);
                box-shadow: 0 0 30px -1px rgb(31, 32, 51);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                .circle {
                    &__price {
                        font-size: 22px;
                        transform: translateY(10px);
                        animation: slideIn .2s ease;
                    }
                    &__icon {
                        font-size: 35px;
                        transition: transform .2s ease;
                    }
                    &__icon--small {
                        transform: translateY(10px) scale(0.5);
                    }
                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateY(-10px)
                        }
                        to {
                            opacity: 1;
                            transform: translateY(10px);
                        }
                    }
                }
            }
            .sum__icon {
                font-size: 35px;
            }
        }
        margin: 20px 0;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,.15);
        background: rgba(255,255,255,.05);
    }
</style>
