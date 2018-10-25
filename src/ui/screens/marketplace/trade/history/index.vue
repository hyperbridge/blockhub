<template>
    <div>
        <div v-for="trx in transactions" :key="trx.id" class="trade-offer">
            <div class="trade-offer__items">
                <div class="trade-offer__user">
                    <img class="trade-offer__user-image" :src="trx.you.img"/>
                    You offered
                </div>
                <div class="trade-offer__assets">
                    <c-asset
                        v-for="asset in trx.yourOffer"
                        :asset="asset"
                        :key="asset.id"
                        showTooltip
                    />
                </div>
            </div>
            <p class="trade-offer__bar">
                Trade accepted Dec 10 - {{ trx.id }}
            </p>
            <div class="trade-offer__items">
                <div class="trade-offer__user">
                    <img class="trade-offer__user-image" :src="trx.contractor.img"/>
                    For {{ trx.contractor.name }}'s
                </div>
                <div class="trade-offer__assets">
                    <c-asset
                        v-for="asset in trx.contractorOffer"
                        :asset="asset"
                        :key="asset.id"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                you: 1
            }
        },
        components: {
            'c-asset': (resolve) => require(['@/ui/components/assets-grid-inventory/asset'], resolve),
            'c-assets-grid': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
        },
        computed: {
            transactions() {
                return this.$store.getters['assets/transactionsArray'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .trade-offer {
        border-radius: 4px;
        padding: 10px;
        background: rgba(85, 86, 86, .1);
        border: 1px solid rgba(#fff, .2);
        margin-bottom: 30px;
    }
    .trade-offer__items {
        padding: 10px;
        position: relative;
        &:hover:after {
            opacity: 0;
        }
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(1,1,1,.2);
            background: rgba(#2b1b08, .4);
            border-radius: 4px;
            transition: opacity .3s ease .25s;
        }
    }
    .trade-offer__user-image {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin-right: 4px;
    }
    %triangle {
        content: "";
        position: absolute;
        background: #f0932b;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
    }
    .trade-offer__bar {
        background: #f0932b;
        margin: 10px 0;
        padding: 4px 15px;
        box-shadow: 0 0 5px 0 rgba(150, 90, 24, .8);
        position: relative;
        font-size: 15px;
        text-shadow: 0 1px 0px#965a18cc;
        text-shadow: 0 1.45px 4px#3f2408cc;
        &:before {
            @extend %triangle;
            left: -10px;
        }
        &:after {
            @extend %triangle;
            right: -10px;
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
