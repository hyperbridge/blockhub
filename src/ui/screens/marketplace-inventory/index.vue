<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <h2>Inventory</h2>
                        <c-block>
                            <div>
                                <c-button
                                    @click="assets.forEach(asset => asset.selected = !asset.selected)"
                                >
                                    Un/Select all</c-button>
                            </div>
                            <c-asset-comparison :assets="assets.slice(0, 2)"/>
                            <div class="assets-grid">
                                <div
                                    v-if="assets.length"
                                    v-for="(asset, index) in assets"
                                    :key="index"
                                    class="assets-grid__asset"
                                    :class="{ 'assets-grid__asset--selected': asset.selected }"
                                    @click="asset.selected = !asset.selected"
                                >
                                    <c-tooltip :delay="3000" iconHide>
                                        <c-asset-preview
                                            slot="tooltip"
                                            :asset="asset"
                                        />
                                        <c-img :src="asset.image" class="asset__image"/>
                                        <span class="asset__price">{{ asset.price.current }}$</span>
                                    </c-tooltip>
                                </div>
                                <div class="assets-grid__asset">
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
    import assets from '@/db/seed/assets';

    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve),
            'c-asset-comparison': (resolve) => require(['@/ui/components/asset-comparison'], resolve),
        },
        data() {
            return {
                yoursOffer: [],
                assets: assets.map(asset => ({ ...asset, selected: false }))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .assets-grid {
        background: rgba(1,1,1,.1);
        box-shadow: 0 0 20px 0 rgba(1,1,1,.25);
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 4px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 5px;
        min-height: 118px;
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
        &.assets-grid__asset--selected {
            border: 1px dotted #b565d4;
            .asset__image {
                filter: drop-shadow(0 0 2px rgba(155, 89, 182, 1));
            }
            // box-shadow: 0 0 20px -3px #9b59b6;
        }
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
