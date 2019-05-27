<template>
    <c-layout navigationKey="wallet">
        <div class="row">
            <div class="col-12" v-if="!wallet">
                Wallet not found
            </div>
            <div class="col-12" v-if="wallet">
                {{ wallet.name }}
                {{ wallet.id }}
                <br />
                <c-button status="none" :to="`/wallet/${wallet.id}/transactions`">Transactions</c-button>
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
        wallet() {
            if (!this.$store.state.application.wallets)
                return
            
            const wallet = this.$store.state.application.wallets[this.id]

            if (!wallet)
                return

            return wallet
        }
    },
    created() {
        this.$store.commit('application/activateModal', 'coming-soon')
    }
}
</script>


<style>

</style>
