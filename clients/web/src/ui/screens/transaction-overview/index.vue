<template>
    <c-layout navigationKey="account">
        <div class="row">
            <div class="col-12" v-if="!transaction">
                Transaction not found
            </div>
            <div class="col-12" v-if="transaction">
                {{ transaction.name }}
                {{ transaction.id }}
                <br />
                <c-button status="none" :to="`/transaction/${transaction.id}/transactions`">Transactions</c-button>
            </div>
        </div>
    </c-layout>
</template>


<script>
export default {
    props: ['id'],
    components: {
    },
    computed: {
        transaction() {
            if (!this.$store.state.application.transactions)
                return
            
            const transaction = this.$store.state.application.transactions[this.id]

            if (!transaction)
                return

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
