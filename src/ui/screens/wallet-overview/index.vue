<template>
    <c-layout navigationKey="accountNavigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12" v-if="!wallet">
                        Wallet not found
                    </div>
                    <div class="col-12" v-if="wallet">
                        {{ wallet.name }}
                        {{ wallet.id }}
                        <br />
                        <a :href="`/#/wallet/${wallet.id}/transactions`">Transactions</a>
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
    'c-layout': () => import('@/ui/layouts/default')
  },
  data() {
    return {
    }
  },
  computed: {
      wallet() {
        if (!this.$store.state.network.wallets)
            return
        
        const wallet = this.$store.state.network.wallets[this.id]

        if (!wallet)
            return

        return wallet
    }
  }
}
</script>


<style>

</style>
