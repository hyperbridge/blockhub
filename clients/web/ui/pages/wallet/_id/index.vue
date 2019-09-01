<template>
    <Layout navigationKey="wallet">
        <div class="row">
            <div
                v-if="!wallet"
                class="col-12">
                Wallet not found
            </div>
            <div
                v-if="wallet"
                class="col-12">
                {{ wallet.name }}
                {{ wallet.id }}
                <br>
                <Button
                    status="none"
                    :to="`/wallet/${wallet.id}/transactions`">
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
        wallet() {
            if (!this.$store.state.application.wallets) return

            const wallet = this.$store.state.application.wallets[this.id]

            if (!wallet) return

            return wallet
        }
    },
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    }
}
</script>


<style>

</style>
