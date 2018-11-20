<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bid in offer.bids" :key="bid.id">
                    <!-- <td><c-user :user="bid.user"/></td> -->
                    <td>{{ bid.value }} $</td>
                    <td>{{ bid.createdAt }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['offers', 'offersMap'],
        components: {
            'c-user': (resolve) => require(['@/ui/components/user/simple'], resolve),
        }
    }
</script>

<style lang="scss" scoped>

</style>

