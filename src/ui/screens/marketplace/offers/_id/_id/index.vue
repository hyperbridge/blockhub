<template>
    <div>
        <p v-if="!offer">
            Offer with id {{ offerId }} doesn't exist
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
                        <td>{{ bid.createdAt }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['offers', 'offersMap', 'offerId'],
        components: {
            'c-user': (resolve) => require(['@/ui/components/user/simple'], resolve),
        },
        computed: {
            offer() {
                return this.$store.getters['assets/offers'][this.offerId];
            }
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
</style>

