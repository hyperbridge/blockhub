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
        <c-modal title="Sell assets" v-if="openModal" @close="openModal = false">
            <form slot="modal_body">
                <div class="sell-assets__assets-wrapper">
                    <div
                        v-for="(asset, index) in selectedAssets"
                        :key="index"
                        class="sell-assets__asset"
                    >
                        <c-asset-preview-basic :asset="asset" size="sm"/>
                        <div class="sell-assets__market-price">
                            <c-input v-model.number="asset.marketPrice"/>
                            <span>
                                Sell asset for <strong>{{ asset.marketPrice }}</strong> $
                            </span>
                            <c-range-slider
                                v-model.number="asset.marketPrice"
                                :max="Math.round(asset.price.max * 2)"
                            />
                        </div>
                    </div>
                </div>
                <span class="sell-assets__summary">
                    You are selling <strong> {{ sellSummary.count }} </strong> assets
                    for <strong> {{ sellSummary.price | roundNum }} </strong> $
                </span>
                <div class="flex-center-between">
                    <c-button status="danger" @click="openModal = false">
                        Cancel
                    </c-button>
                    <c-button status="success">
                        Confirm sell
                    </c-button>
                </div>
            </form>
        </c-modal>
        <div class="inventory-explorer">
            <c-content-navigation
                :items="selectableAssets"
                :setItemsPerPage="12"
                :setItemsLimit="12"
            >
                <div class="assets-grid" slot-scope="props">
                    <c-asset
                        v-for="(asset, index) in props.items"
                        :key="index"
                        :asset="asset"
                        @click="selectAsset($event)"
                    />
                </div>
            </c-content-navigation>
            <c-asset-preview
                v-if="previewAsset"
                :asset="previewAsset"
            />
        </div>
        <!-- <div v-if="previewAsset" class="preview-asset__wrapper">
            <div class="preview-asset">
                <c-icon
                    name="times"
                    class="preview-asset__close-btn"
                    @click="previewAsset = null"
                />
                <c-asset-preview-basic
                    :asset="previewAsset"
                    class="preview-asset__box"
                />
                <div class="preview-asset__box">
                    <h4>Price history</h4>
                    <ul class="reset-list">
                        <li v-for="(val, prop) in previewAsset.price" :key="prop">
                            {{ prop | upperFirstChar }}: {{ val }}$
                        </li>
                    </ul>
                </div>
                <div class="preview-asset__box">
                    <table>
                        <tbody>
                            <tr v-for="(val, prop) in metadata" :key="prop">
                                <td>{{ prop | space | upperFirstChar }}</td>
                                <td>{{ val }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> -->
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
                metadata: {
                    type: "Legendary Two Handed Sword",
                    average_dps: 2903.6,
                    damage_range_min: 2193,
                    damage_range_max: 2880,
                    attack_speed: 1.15,
                    bonus_1: {
                        damage: '+9%',
                        strength: '+1381',
                    },
                    bonus_2: "Monster kills grant +151 experience",
                    level_requirement: 70,
                    durability: "40/41"
                },
                selectableAssets: [],
                allowSelect: true,
                openModal: false,
            }
        },
        methods: {
            selectAsset(asset) {
                this.previewAsset = asset;
                if (this.allowSelect) asset.selected = !asset.selected;
            },
            selectAll() {
                if (this.allowSelect) {
                    this.selectableAssets.forEach(asset =>
                        asset.selected = !asset.selected
                    );
                }
            }
        },
        computed: {
            labelText() {
                return `${this.allowSelect ? 'Disable' : 'Enable'} selecting assets`;
            },
            selectedAssets() {
                return this.selectableAssets.filter(asset => asset.selected);
            },
            everySelected() {
                return !(!!(this.selectableAssets.length - this.selectedAssets.length));
            },
            sellSummary() {
                return {
                    count: this.selectedAssets.length,
                    price: this.selectedAssets.reduce((price, asset) =>
                        price += asset.marketPrice
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
    .preview-asset__wrapper {
        left: 0;
        bottom: 0;
        position: fixed;
        width: 100%;
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
    .preview-asset {
        background: #1D1E2E;
        display: flex;
        margin: 0 auto;
        position: relative;
        max-width: 600px;
        align-items: center;
        padding: 25px;
        border-radius: 4px 4px 0 0;
        animation: slidein .3s ease;
        justify-content: space-between;
        .preview-asset__box {
            max-height: 200px;
            overflow-y: auto;
            &:not(:last-child) {
                margin-right: 14px;
            }
        }
        @keyframes slidein {
            0% {
                transform: translateY(100%);
            }
            100% {
                transform: translateY(0%);
            }
        }
    }
    .preview-asset__close-btn {
        position: absolute;
        top: 14px;
        right: 14px;
        font-size: 16px;
        cursor: pointer;
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
        max-height: 500px;
        overflow-y: auto;
        // box-shadow: 0 -12px 40px -18px rgba(1,1,1,.7) inset;
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
