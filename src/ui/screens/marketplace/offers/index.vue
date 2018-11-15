<template>
    <div>
        <c-content-navigation :items="offers" :setLimits="7">
            <table class="offers-table" slot-scope="props">
                <thead>
                    <th>Item</th>
                    <th>Auctions</th>
                    <th>Time left</th>
                    <th>Seller</th>
                    <th>Auction bid</th>
                    <th>Auction buyout</th>
                    <th>Market value</th>
                    <th>Show auctions</th>
                </thead>
                <tbody>
                    <tr v-for="(offer, id) in props.items" :key="id">
                        <template v-if="openedOffer != offer.id">
                            <td>
                                <c-asset-preview-basic
                                    :asset="assets[id]"
                                    size="sm"
                                    horizontal
                                    hideGame
                                />
                            </td>
                            <td>{{ offer.auctions.length }}</td>
                            <td>{{ offer.expDate | timeAgoShort }}</td>
                            <td>{{ offer.seller.name }}</td>
                            <td>{{ offer.auctions[0].bid }} $</td>
                            <td>{{ offer.buyout }} $</td>
                            <td>{{ offer.marketValue }} %</td>
                            <td>
                                <c-button icon_hide status="info" @click="openOffer(id)">
                                    <c-icon name="arrow-circle-down"/>
                                </c-button>
                            </td>
                        </template>
                        <template v-else>
                            <td colspan="7" class="offers-table--opened" @click.self="openOffer(id)">
                                <table class="auctions-table">
                                    <thead>
                                        <tr>
                                            <th>Buyer</th>
                                            <th>Bid</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="!offer.auctions.length">
                                            <td colspan="3">
                                                This offer doesn't contain any auctions yet
                                            </td>
                                        </tr>
                                        <tr v-else v-for="auction in offer.auctions" :key="auction.id">
                                            <td>{{ auction.user.name }}</td>
                                            <td>{{ auction.bid }} $</td>
                                            <td>{{ auction.date | formatTime }} ({{ auction.date | timeAgoSShort }})</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="3">
                                                <div class="auctions-table__bid-asset">
                                                    <c-input v-model="bidValue"/>
                                                    <c-button status="success" icon="gavel" @click="createAuction(offer.id)">
                                                        Bid the asset for {{ bidValue }}$
                                                    </c-button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </td>
                            <td>
                                <c-button icon_hide status="info" @click="openOffer(id)">
                                    <c-icon name="arrow-circle-up"/>
                                </c-button>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </c-content-navigation>
    </div>
</template>


<script>
    import offers from '@/db/api/offers';

    export default {
        props: ['id'],
        components: {
            'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
            'c-asset-list': (resolve) => require(['@/ui/components/asset/list'], resolve),
            'c-asset-preview-basic': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve)
        },
        data() {
            return {
                openedOffer: null,
                bidValue: 0,
                results: []
            }
        },
        methods: {
            openOffer(id) {
                if (this.bidValue != 0) this.bidValue = 0;
                if (this.openedOffer == id) this.openedOffer = null;
                else this.openedOffer = id;
            },
            createAuction(offerId) {
                const { bidValue: bid } = this;

                if (bid) {
                    const newAuction = {
                        offerId,
                        bid,
                        user: { name: 'Me' },
                        date: moment()
                    };
                    this.$store.dispatch('assets/createAuction', newAuction);
                    this.$snotify.success(`You have successfully created an auction bid for ${bid} $`, 'Created');
                    this.bidValue = 0;
                }
            },
            async getOffers() {
                await new Promise(r => setTimeout(r, 3000));
                // this.results = offers;
                this.$store.dispatch('loadData', ['assets/offers', offers]);
            }
        },
        created() {
            this.getOffers();
        },
        computed: {
            assets() {
                return this.$store.getters['assets/assetsArray'];
            },
            offers() {
                return this.$store.getters['assets/offersArray'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .offers-table {
        width: 100%;

        td, th {
            &:not(:first-child) {
                text-align: center;
            }
        }
        th {
            padding: 10px 0;
        }

        &--opened {
            background: #46476d;
        }
        td {
            padding: 8px;
            &:not(.offers-table--opened) {
                background: #343555;
            }
        }
        tr:nth-child(even) td, .offers-table--opened {
            background: #404166;
        }
    }

    .auctions-table {
        width: 100%;
        td, th {
            text-align: center;
            width: 33%;
        }
        tr:nth-child(even) td {
            background: #2f304d;
        }

        &__bid-asset {
            padding: 10px 0;
            .c-input {
                margin-right: 15px;
            }
        }
    }
</style>

