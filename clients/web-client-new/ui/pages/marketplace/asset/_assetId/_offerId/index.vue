<template>
    <div>
        <p v-if="!offer">
            Offer with id {{ offerId }} doesn't exist.
        </p>
        <p v-else-if="!offer.bids.length">
            This offer doesn't contain any bids yet.
        </p>
        <div v-else>
            <table class="bids-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="bid in offer.bids" :key="bid.id">
                        <td><c-user :user="bid.user"/></td>
                        <td>
                            <span class="bid-price">
                                {{ bid.value }}
                            </span>$
                        </td>
                        <td>{{ bid.createdAt | customDate('dddd, DD MMMM, HH:MM:SS') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="create-bid">
            <h3>Create new bid</h3>
            <ul v-if="errors.length">
                <li
                    v-for="(error, index) in errors"
                    :key="index"
                    v-text="error"
                />
            </ul>
            <label>
                Bid value
                <c-input v-model="value"/>
            </label>
            <c-button size="md" @click="createBid()">
                Create bid
            </c-button>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: ['offersMap', 'asset', 'profile', 'offerId'],
        components: {
            'c-user': () => import('~/components/user/simple').then(m => m.default || m),
        },
        data: () => ({
            value: 0,
            errors: []
        }),
        methods: {
            async createBid() {
                this.errors = [];

                if (this.value < this.minValue) {
                    this.errors.push(`Minimum bid value for this offer is ${this.minValue}`);
                }

                this.$store.dispatch('createRelation',
                    ['assets/offers/bids', this.offerId, {
                        value: this.value,
                        user: this.profile,
                        createdAt: moment()
                    }]
                );

                await this.$nextTick();
                this.value = this.minValue;
            },
        },
        computed: {
            offer() {
                return this.$store.getters['assets/offers'][this.offerId];
            },
            minValue() {
                const { offer } = this;

                if (!offer || !offer.bids.length) return 0;

                const highestVal = offer.bids[offer.bids.length - 1].value;
                return Math.round((highestVal + highestVal * 0.05) * 100) / 100;
            }
        },
        mounted() {
            this.value = this.minValue;
        }
    }
</script>

<style lang="scss" scoped>
    .bids-table {
        width: 100%;
        th {
            width: 33.3%;
            padding: 10px 20px;
        }
        td:not(:first-child), th:not(:first-child)  {
            text-align: center;
        }
        border-collapse: collapse;
        td {
            padding: 20px;
            background: rgba(1,1,1,.25);
        }
        tbody tr:not(:last-child) td {
            border-bottom: 1px solid rgba(255,255,255,.15);
        }
    }
    .bid-price {
        font-size: 16px;
    }

    .create-bid {
        margin-top: 80px;
        padding: 15px;
        border-radius: 5px;
        background: rgba(255,255,255,.05);
        label {
            margin: 0;
            .c-input {
                margin-left: 5px;
            }
        }
    }
</style>

