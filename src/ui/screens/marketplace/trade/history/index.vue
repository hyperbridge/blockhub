<template>
    <div>
        <div
            v-for="(trx, index) in transactions"
            :key="trx.id"
            class="trade-offer"
            :class="'trade-offer--status-' + index"
        >
            <div class="trade-offer__items">
                <div class="trade-offer__user">
                    <img class="trade-offer__user-image" :src="trx.you.img"/>
                    You offered
                </div>
                <div class="trade-offer__assets">
                    <c-asset
                        v-for="(asset, index) in trx.yourOffer"
                        :asset="asset"
                        :key="index"
                        showTooltip
                    />
                </div>
            </div>
            <p class="trade-offer__bar">
                Trade {{ trx.accepted ? 'accepted' : 'received' }} on
                {{ trx.createdAt | customDate('MMM D') }}
                <span>
                    On hold until
                    {{ trx.createdAt | addTime(5, 'days') | customDate('MMM D') }}
                </span>
                <span>{{ trx.id }}</span>
            </p>
            <div class="trade-offer__items">
                <div class="trade-offer__user">
                    <img class="trade-offer__user-image" :src="trx.contractor.img"/>
                    For {{ trx.contractor.name }}'s
                </div>
                <div class="trade-offer__assets">
                    <c-asset
                        v-for="(asset, index) in trx.contractorOffer"
                        :asset="asset"
                        :key="index"
                        showTooltip
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            'c-asset': (resolve) => require(['@/ui/components/assets-grid-inventory/asset'], resolve),
        },
        computed: {
            transactions() {
                return this.$store.getters['assets/transactionsArray'];
            },

        }
    }
</script>

<style lang="scss" scoped>
    .trade-offer {
        border-radius: 4px;
        padding: 10px;
        background: rgba(85, 86, 86, .1);
        border: 1px solid rgba(#fff, .2);
        margin-bottom: 70px;
    }
    .trade-offer__items {
        padding: 10px;
        position: relative;
        background: rgba(1,1,1,.3);
        opacity: .5;
        transition: opacity .25s ease, background-color .25s ease;
        transition-delay: .15s;
        border-radius: 4px;
        &:hover {
            opacity: 1;
            background: transparent;
        }
    }
    .trade-offer__user-image {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    %triangle {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
    }
    .trade-offer__bar {
        display: flex;
        // align-items: center;
        justify-content: space-between;
        margin: 10px 0;
        padding: 4px 15px;
        position: relative;
        font-size: 15px;
        &:before {
            @extend %triangle;
            left: -10px;
        }
        &:after {
            @extend %triangle;
            right: -10px;
        }
    }
    $statuses: (
       0: #f0932b,
       1: #686de0,
       2: #badc58,
       3: #f0932b
    );
    @each $status, $hex in $statuses {
        $darker: darken($hex, 30%);
        &.#{"trade-offer--status-" + $status} {
            .trade-offer__bar {
                background: $hex;
                box-shadow: 0 0 5px 0 rgba($darker, .8);
                @if $status == 2 {
                    color: #4b5a22;
                    text-shadow: 0 1.45px 4px darken($hex, 15%);
                } @else {
                    text-shadow: 0 1.45px 4px $darker;
                }
                &:before, &:after {
                    background: $hex;
                }
            }
        }
    }
    .trade-offer__assets {
        display: flex;
        flex-wrap: wrap;
    }
    .trade-offer__user {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
</style>
