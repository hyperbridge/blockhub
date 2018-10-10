<template>
    <div
        class="assets-grid__asset"
        :class="{ 'assets-grid__asset--selected': asset.selected }"
        @click="$emit('click', asset)"
    >
        <slot>
            <c-tooltip :delay="3000" iconHide>
                <c-asset-preview
                    slot="tooltip"
                    :asset="asset"
                />
                <c-img :src="asset.image" class="asset__image"/>
                <span class="asset__price">{{ asset.price.current }}$</span>
            </c-tooltip>
        </slot>
    </div>
</template>

<script>
    export default {
        props: {
            asset: Object
        },
        components: {
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
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
