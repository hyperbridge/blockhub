<template>
    <c-layout navigationKey="account-navigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12" v-if="!transaction">
                        Transaction not found
                    </div>
                    <div class="col-12" v-if="transaction">
                        {{ transaction.name }}
                        {{ transaction.id }}
                        <br />
                        <a :href="`/#/transaction/${transaction.id}/transactions`">Transactions</a>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>


<script>
export default {
  props: ['id'],
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  },
  computed: {
      transaction() {
        if (!this.$store.state.network.transactions)
            return
        
        const transaction = this.$store.state.network.transactions[this.id]

        if (!transaction)
            return

        return transaction
    }
  }
}
</script>


<style>

</style>
