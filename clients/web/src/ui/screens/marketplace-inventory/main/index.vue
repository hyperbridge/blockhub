<template>
    <div>
        <h2>Explore</h2>
        <div class="inventory-navigation">
            <c-switch :label="labelText" v-model="allowSelect"/>
            <div>
                <c-button status="info" @click="selectAll()" icon="hand-pointer">
                    {{ everySelected ? 'Unselect all' : 'Select all' }}
                </c-button>
                <c-button status="info" icon="dollar-sign" @click="openModal = true">
                    Sell selected in market
                </c-button>
            </div>
        </div>
        <div class="inventory-explorer">
            <c-content-navigation
                :items="assets"
                :setItemsPerPage="12"
                :setItemsLimit="12"
            >
                <div class="assets-grid" slot-scope="props">
                    <c-asset
                        v-for="(asset, index) in props.items"
                        :key="index"
                        :asset="asset"
                        :showSold="showSold && asset.selected"
                        @click="selectAsset($event)"
                    />
                </div>
            </c-content-navigation>
            <c-asset-preview
                v-if="previewAsset"
                :asset="previewAsset"
            />
        </div>
        <c-modal title="Sell assets" v-if="openModal" @close="openModal = false">
            <form slot="modalBody">
                <div class="sell-assets__assets-wrapper">
                    <div
                        v-for="(asset, index) in selectedAssets"
                        :key="index"
                        class="sell-assets__asset"
                    >
                        <c-asset-preview-basic :asset="asset" size="sm"/>
                        <div class="sell-assets__market-price">
                            <c-input
                                :value="asset.market_price"
                                @input="updateAsset(asset.id, { market_price: parseFloat($event) || 0 })"
                            />
                            <span>
                                Sell asset for <strong>{{ asset.market_price }}</strong> $
                            </span>
                            <c-range-slider
                                :value="asset.market_price"
                                @input="updateAsset(asset.id, { market_price: parseFloat($event) })"
                                :max="Math.round(asset.price.max * 2)"
                            />
                        </div>
                    </div>
                </div>
                <p v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </p>
                <span class="sell-assets__summary">
                    You are selling <strong> {{ sellSummary.count }} </strong> assets
                    for <strong> {{ sellSummary.price | roundNum }} </strong> $
                </span>
                <div class="flex-center-between">
                    <c-button status="danger" @click="openModal = false">
                        Cancel
                    </c-button>
                    <c-button status="success" @click="sellAssets()">
                        Confirm sell
                    </c-button>
                </div>
            </form>
        </c-modal>
    </div>
</template>

<script>
    export default {
        props: ['assets'],
        components: {
            'c-assets-grid-inventory': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
            'c-asset-preview-basic': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset/preview'], resolve),
            'c-asset': (resolve) => require(['@/ui/components/assets-grid-inventory/asset'], resolve),
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
            'c-switch': (resolve) => require(['@/ui/components/switch'], resolve),
            'c-modal': (resolve) => require(['@/ui/components/modal/custom'], resolve),
            'c-range-slider': (resolve) => require(['@/ui/components/range-slider/pure'], resolve),
        },
        data() {
            return {
                previewAsset: null,
                selectableAssets: [],
                allowSelect: true,
                openModal: false,
                showSold: false,
                errors: []
            }
        },
        methods: {
            selectAsset(asset) {
                this.previewAsset = asset;
                if (this.allowSelect) {
                    this.updateAsset(asset.id, { selected: !asset.selected });
                    asset.selected = !asset.selected
                };
            },
            selectAll() {
                const { everySelected } = this;
                this.updateAssets({ selected: !everySelected });
            },
            sellAssets() {
                const { selectedAssets } = this;
                this.errors = [];

                if (!selectedAssets.length) {
                    return;
                } else if (selectedAssets.some(asset => asset.market_price <= 0)) {
                    this.errors.push(`You can't sell asset for no price`);
                } else {
                    this.showSold = true;
                    setTimeout(() => {
                        this.showSold = false;
                        this.updateAssets(
                            { for_sale: true, selected: false },
                            selectedAssets.map(asset => asset.id)
                        );
                    }, 3000);
                    this.$snotify.success('Assets have been placed in the market', 'Confirmed', {
                        timeout: 2500,
                        pauseOnHover: true
                    });
                    this.openModal = false;
                }
            },
            updateAsset(id, data) {
                this.$store.commit('assets/updateAsset', { id, data });
            },
            updateAssets(data, ids) {
                this.$store.commit('assets/updateAssets', { data, ids });
            }
        },
        computed: {
            labelText() {
                return `${this.allowSelect ? 'Disable' : 'Enable'} on click selection`;
            },
            selectedAssets() {
                return this.assets.filter(asset => asset.selected);
            },
            everySelected() {
                return !(this.assets.length - this.selectedAssets.length);
            },
            sellSummary() {
                return {
                    count: this.selectedAssets.length,
                    price: this.selectedAssets.reduce((price, asset) =>
                        price += asset.market_price
                    , 0)
                }
            }
        },
        mounted() {
            this.previewAsset = this.assets[0];
            this.selectableAssets = this.assets.map(asset =>({
                ...asset,
                selected: false,
                marketPrice: 0
            }));
        }
    }
</script>

<style lang="scss" scoped>
    .inventory-navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px;
        background: rgba(1,1,1,.4);
        border-bottom: 1px solid #fff;
        margin: 10px 0;
        padding: 10px;
    }
    .assets-grid {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        padding: 10px;
        background: rgba(29, 30, 46, .65);
        margin: 10px;
        border-radius: 4px;
        height: 100%;
        min-width: 350px;
        > div {
            cursor: pointer;
        }
    }

    .inventory-explorer {
        display: flex;
    }

    .sell-assets__market-price {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .range-slider__container {
            width: 100%;
        }
    }
    .sell-assets__summary {
        display: block;
        margin: 15px 0;
    }
    .sell-assets__assets-wrapper {
        min-width: 360px;
        max-height: 500px;
        overflow-y: auto;
    }
    .sell-assets__asset {
        padding: 10px;
        background: rgba(255,255,255,.025);
        border-radius: 4px;
        display: flex;
        margin-bottom: 25px;
        .asset-preview-basic {
            margin-right: 5px;
        }
        div {
            width: 50%;
        }
    }
</style>
