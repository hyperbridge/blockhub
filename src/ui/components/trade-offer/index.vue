<template>
    <div class="trade-offer">
        <div class="trade-offer__date">
            <span>
                {{ offer.date | formatDate }} - {{ offer.date | timeAgo }}
            </span>
            <span>
                Expires {{ offer.date | expIn | timeAgo }}
            </span>
        </div>
        <div class="trade-offer__content" @click="showDetails = !showDetails">
            <c-author :author="offer.author"/>
            <span>
                Trade {{ offer.assets.their.length }} for {{ offer.assets.yours.length }} assets
            </span>
            <div>
                <c-button status="success" icon_hide>Accept</c-button>
                <c-button status="danger" icon_hide>Decline</c-button>
            </div>
        </div>
        <transition name="slide-in-top">
            <div class="trade-offer__details" v-if="showDetails">
                <h4>Offer details</h4>
                <table
                    v-for="(assets, assetsKey) in offer.assets"
                    :key="assetsKey"
                    class="trade-offer__assets-table"
                >
                    <thead>
                        <th>{{ assetsKey | upperFirstChar }} items</th>
                        <th>Total value ${{ totalValue[assetsKey] }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="asset in assets" :key="asset.id">
                            <td>
                                <c-tooltip>
                                    <c-asset-preview
                                        slot="tooltip"
                                        :asset="asset"
                                    />
                                    <div class="asset__info">
                                        <c-img :src="asset.image" class="asset__image"/>
                                        {{ asset.name }}
                                    </div>
                                </c-tooltip>
                            </td>
                            <td>${{ asset.price.current }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="trade-offer__summary-table">
                    <thead>
                        <tr>
                            <th colspan="2">Summary:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Their items:</td>
                            <td>- {{ totalValue.their }}$</td>
                        </tr>
                        <tr>
                            <td>Yours items:</td>
                            <td>+ {{ totalValue.yours }}$</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Final balance:</td>
                            <td>
                                <span
                                    class="total-balance"
                                    :class="[ finalBalance > 0
                                        ? 'total-balance--positive'
                                        : finalBalance < 0
                                            ? 'total-balance--negative'
                                            : ''
                                    ]"
                                >
                                    {{ finalBalance > 0 ? '+' : '' }}
                                    {{ finalBalance }}$
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </transition>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: {
            offer: {
                type: Object
            }
        },
        components: {
            'c-author': (resolve) => require(['@/ui/components/author'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve),
            'c-asset-preview': (resolve) => require(['@/ui/components/asset-preview'], resolve),
        },
        data() {
            return {
                showDetails: false
            }
        },
        computed: {
            totalValue() {
                const { assets } = this.offer;
                return Object.keys(assets).reduce((total, assetsKey) => ({
                    ...total,
                    [assetsKey]: assets[assetsKey].reduce((totalPrice, asset) =>
                        totalPrice += asset.price.current
                    , 0)
                }), {});
            },
            finalBalance() {
                return Math.round(this.totalValue.yours - this.totalValue.their * 100) / 100;
            }
        },
        filters: {
            expIn(date) {
                return moment(date).add(2, 'weeks');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .trade-offer {
        margin-bottom: 25px;
        border-radius: 4px;
    }
    .trade-offer__date {
        color: rgba(255,255,255,.6);
        font-size: 13px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
    }
    .trade-offer__content {
        background: rgba(1,1,1,.25);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
            background: rgba(1,1,1,.15);
        }
    }
    .trade-offer__details {
        border-top: 1px solid rgba(255,255,255,.1);
        padding: 20px;
        background-image: linear-gradient(to bottom, #2c2e47, #404363);
        border-radius: 0 0 4px 4px;
    }
    .trade-offer__assets-table {
        width: 100%;
        margin: 30px 0;
        th {
            padding: 5px 0;
        }
        td {
            padding: 5px 0;
            color: rgba(255,255,255,.6);
        }
        td:last-child, th:last-child {
            text-align: right;
        }
        .asset__info {
            display: flex;
            align-items: center;
        }
        .asset__image {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            margin-right: 10px;
        }
    }
    .trade-offer__summary-table {
        margin-top: 40px;
        td:first-child {
            min-width: 100px;
        }
        td {
            color: rgba(255,255,255,.6);
            padding: 4px 0;
        }
        tfoot td {
            border-top: 1px solid #535673;
        }
    }
    .total-balance {
        color: #fff;
        &.total-balance--negative {
            color: rgb(255, 118, 118);
        }
        &.total-balance--positive {
            color: #41ba5d;
        }
    }

</style>
