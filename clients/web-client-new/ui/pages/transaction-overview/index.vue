<template>
    <c-layout navigationKey="account">
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
                <c-button
                    status="none"
                    :to="`/transaction/${transaction.id}/transactions`">
                    Transactions
                </c-button>
            </div>
        </div>
    </c-layout>
</template>


<script>
export default {
    components: {
    },
    props: ['id'],
    computed: {
        transaction() {
            if (!this.$store.state.application.transactions) { return }

            const transaction = this.$store.state.application.transactions[this.id]

            if (!transaction) { return }

            return transaction
        }
    },
    created() {
        this.$store.commit('application/activateModal', 'coming-soon')
    }
}
</script>


<style>

</style>
