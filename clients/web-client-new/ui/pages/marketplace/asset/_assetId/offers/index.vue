<template>
    <div>
        <p v-if="!offersMap.length">
            No offers were found for this asset
        </p>
        <template v-else>
            <ul class="reset-list flex-center-between margin-bottom-10">
                <li
                    v-for="title in ['Latest bid', 'Bids', 'Buyout', 'Market value', 'Created by']"
                    :key="title"
                >
                    {{ title }}
                </li>
            </ul>
            <ul class="reset-list">
                <!-- Can be replaced with router[...]() function -->
                <router-link
                    v-for="[id, offer] in offersMap" :key="id"
                    tag="li"
                    class="offer"
                    :to="{
                        name: 'Marketplace Asset Offer',
                        params: { assetId: asset.id, offerId: offer.id }
                    }"
                >
                    <span>
                        <span class="offer__max-bid">
                            <template v-if="offer.bids.length">
                                {{ offer.bids[offer.bids.length - 1].value }}
                            </template>
                            <template v-else>
                                0
                            </template>
                        </span>$
                    </span>
                    <span class="offer__bids-count">
                        <i class="fas fa-gavel"></i>
                        {{ offer.bids.length }}
                    </span>
                    <span>{{ offer.buyout }}</span>
                    <span>{{ offer.marketValue }}</span>
                    <div class="flex-center">
                        <c-user
                            :user="offer.seller"
                            class="margin-left-5"
                        />
                    </div>
                </router-link>
            </ul>
        </template>
        <div class="create-offer">
            <h3>Create new offer for this asset</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Buyout value</td>
                        <td><c-input v-model="newOffer.buyout"/></td>
                    </tr>
                    <tr>
                        <td>Minimum bid difference</td>
                        <td><c-input v-model="newOffer.bidDiff"/></td>
                    </tr>
                    <tr>
                        <td>Market value</td>
                        <td><c-input v-model="newOffer.marketValue"/></td>
                    </tr>
                </tbody>
            </table>
            <c-button size="md" @click="createOffer()">
                Create offer
            </c-button>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    const newOffer = {
        buyout: 0,
        bidDiff: 0,
        marketValue: 42
    }

    export default {
        props: ['offersMap', 'asset', 'profile'],
        components: {
            'c-user': (resolve) => require(['@/components/user/simple'], resolve),
            'c-tooltip': (resolve) => require(['@/components/tooltips/universal'], resolve),
        },
        data() {
            return {
                newOffer: { ...newOffer },
                errors: []
            }
        },
        methods: {
            createOffer() {
                const vals = Object.values(this.newOffer);
                this.errors = [];

                if (vals.some(val => !val)) {
                    this.errors.push('No value can be null');
                } else {
                    const id = Math.round(Math.random() * 10000);

                    const createdOffer = {
                        id,
                        seller: this.profile,
                        asset: this.asset,
                        bids: [],
                        expiresIn: moment().add(1, 'week'),
                        ...this.newOffer
                    }


                    this.$store.dispatch('loadData', ['assets/offers', [createdOffer]]);

                    // this.$store.dispatch('create',
                    //     ['assets/offers', {
                    //         seller: this.profileId,
                    //         asset: this.asset,
                    //         bids: [],
                    //         expiresIn: moment().add(1, 'week'),
                    //         ...this.newOffer
                    //     }]
                    // );

                    this.newOffer = { ...newOffer };
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .offers__title {
        margin-top: 30px;
        font-size: 25px;
    }
    .offer {
        padding: 15px;
        border-radius: 5px;
        background: #393a5c;
        box-shadow: 2px 0  25px 0 rgba(1,1,1,.15);
        margin-bottom: 25px;
        list-style-type: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .offer__max-bid {
        font-size: 16px;
        margin: 0 1px 0 5px;
    }
    .offer__bids-count {
        background: rgba(1, 1, 1, 0.15);
        border-radius: 4px;
        padding: 2px 4px;
        min-width: 24px;
        height: 24px;
        text-align: center;
        .fas {
            opacity: .15;
            margin-right: 5px;
        }
    }

    .create-offer {
        margin-top: 80px;
        padding: 10px;
        border-radius: 5px;
        background: rgba(255,255,255,.05);
        label {
            display: block;
            margin: 10px;
            .c-input {
                margin-left: 5px;
            }
        }
    }
</style>

