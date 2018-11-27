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
                <a :href="`#/wallet/${wallet.id}/transactions`">Transactions</a>
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
    }
}
</script>


<style>

</style>
