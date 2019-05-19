<template>
    <div>
        <span v-if="isLoading">Loading ...</span>
        <c-content-navigation v-else :items="assets" :setLimits="7">
            <ul class="assets-list" slot-scope="props">
                <c-asset-list-item
                    v-for="asset in props.items"
                    :key="asset.id"
                    :asset="asset"
                >
                    <router-link
                        slot="link"
                        slot-scope="props"
                        :to="{
                            name: 'Marketplace Asset Offers',
                            params: { assetId: props.asset.id }
                        }"
                        v-text="props.asset.name"
                    />
                    <!-- <a slot="link" slot-scope="props" :title="props.asset.name">
                        {{ props.asset.name }}
                    </a> -->
                    <!-- <router-link slot="link" slot-scope="props" :to="`/`">
                        {{ props.asset }} 123
                    </router-link> -->
                </c-asset-list-item>
            </ul>
            <!-- <table class="offers-table" slot-scope="props">
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
                    <tr v-for="[id, offer] in props.items" :key="id">
                        <template v-if="openedOffer != offer.id">
                            <td>
                                <c-asset-preview-basic
                                    :asset="offer.asset"
                                    size="sm"
                                    horizontal
                                    hideGame
                                />
                            </td>
                            <td>{{ offer.bids.length }}</td>
                            <td>{{ offer.expiresIn | timeAgoShort }}</td>
                            <td>{{ offer.seller.name }}</td>
                            <td>{{ offer.bids[0].value }} $</td>
                            <td>{{ offer.buyout }} $</td>
                            <td>{{ offer.marketValue }} %</td>
                            <td>
                                <c-button iconHide status="info" @click="openOffer(id)">
                                    <c-icon name="arrow-circle-down"/>
                                </c-button>
                            </td>
                        </template>
                        <template v-else>
                            <td colspan="7" class="offers-table--opened">
                                <table class="auctions-table">
                                    <thead>
                                        <tr>
                                            <th>Buyer</th>
                                            <th>Bid</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="!offer.bids.length">
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
                                <c-button iconHide status="info" @click="openOffer(id)">
                                    <c-icon name="arrow-circle-up"/>
                                </c-button>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table> -->
        </c-content-navigation>
    </div>
</template>


<script>
    import offers from '@/db/api/offers';

    export default {
        props: ['id', 'profileId'],
        components: {
            'c-block': () => import('~/components/block/index').then(m => m.default || m),
            'c-asset-list-item': () => import('~/components/asset/list/list-item').then(m => m.default || m),
            'c-asset-preview-basic': () => import('~/components/asset/preview-basic').then(m => m.default || m),
            'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        },
        data() {
            return {
                openedOffer: null,
                bidValue: 0,
                results: [],
                isLoading: true
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
                this.isLoading = true;
                // await new Promise(r => setTimeout(r, 2500));
                // this.$store.dispatch('loadData', ['assets/offers', offers]);
                this.isLoading = false;
            }
        },
        watch: {
            profileId: {
                handler: 'getOffers',
                immediate: true
            }
        },
        computed: {
            offers() {
                return this.$store.getters['assets/offersMap'];
            },
            assets() {
                return this.$store.getters['assets/assetsArray'];
            }
        },
        beforeDestroy() {
            // this.$store.dispatch('clearData', 'assets/offers');
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

    .list-item {
        cursor: pointer;
    }

    .assets-list {
        width: 100%;
        margin: 0 0 50px 0;
        padding: 0;
    }
</style>

