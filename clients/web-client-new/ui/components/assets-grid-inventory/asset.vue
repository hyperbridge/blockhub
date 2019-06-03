<template>
    <div
        class="assets-grid__asset"
        :class="{
            'assets-grid__asset--selected': asset.selected,
            'assets-grid__asset--sold': showSold
        }"
        @click="$emit('click', asset)">
        <slot>
            <c-tooltip
                v-if="showTooltip"
                class="asset__wrapper"
                iconHide>
                <c-asset-preview
                    slot="tooltip"
                    :asset="asset" />
                <c-img :src="asset.image"
                       class="asset__image" />
                <span class="asset__price">{{ asset.price.current | convertCurrency }}</span>
            </c-tooltip>
            <div v-else>
                <c-img :src="asset.image"
                       class="asset__image" />
                <span class="asset__price">{{ asset.price.current | convertCurrency }}</span>
            </div>
        </slot>
        <div v-show="showSold"
             class="asset__show-sold">
            <i class="fas fa-check-circle" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-tooltip': () => import('~/components/tooltips/universal').then(m => m.default || m),
        'c-asset-preview': () => import('~/components/asset-preview').then(m => m.default || m)
    },
    props: {
        asset: Object,
        showTooltip: Boolean,
        showSold: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .assets-grid__asset {
        cursor: pointer;
        width: 100px;
        height: 100px;
        margin: 5px;
        background: #1C1E2D;
        border: 1px solid #43445D;
        background-image: radial-gradient(#30314C, #1C1E2D);
        border-radius: 4px;
        position: relative;
        padding: 4px;
        animation: rotate-in .2s ease;
        user-select: none;
        &.assets-grid__asset--sold {
            .asset__show-sold {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(33, 33, 51, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .fas {
                font-size: 45px;
                animation: jumpin .5s ease, jumpin .5s 2.5s reverse ease;
            }
            @keyframes jumpin {
                0% {
                    transform: scale(0);
                    opacity: 0;
                }
                60% {
                    transform: scale(1.2);
                    opacity: 1;
                }
                100% {
                    transform: scale(1);
                }
            }
        }
        &.assets-grid__asset--selected {
            border: 1px dotted #b565d4;
            background-image: radial-gradient(#b565d4, #1C1E2D);
            .asset__image {
                filter: drop-shadow(0 0 2px rgba(155, 89, 182, 1));
            }
        }
        .asset__wrapper {
            height: 100%;
            width: 100%;
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
