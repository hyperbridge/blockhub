<template>
    <Layout navigationKey="account">
        <div class="row">
            <div
                v-if="!transaction"
                class="col-12">
                Transaction not found
            </div>
            <div
                v-if="transaction"
                class="col-12">
                {{ transaction.name }}
                {{ transaction.id }}
                <br>
                <Button
                    status="none"
                    :to="`/transaction/${transaction.id}/transactions`">
                    Transactions
                </Button>
            </div>
        </div>
    </Layout>
</template>


<script>
export default {
    components: {
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        transaction() {
            if (!this.$store.state.application.transactions) { return }

            const transaction = this.$store.state.application.transactions[this.id]

            if (!transaction) { return }

            return transaction
        }
    },
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>


<style>

</style>
