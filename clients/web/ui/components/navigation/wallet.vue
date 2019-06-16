<template>
    <div class="navigation">
        <c-sidebar-menu
            title="MY WALLETS"
            subTitle="Wallet"
            mClass="margin-bottom-20"
            :links="links.myWallets" />
        <c-sidebar-menu
            subTitle="Transactions"
            mClass="margin-bottom-20"
            :links="links.transactions" />
        <c-sidebar-menu
            subTitle="Help"
            :links="links.help" />
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m)
    },
    data() {
        return {
            links: {
                myWallets: [
                    { to: { path: '/account/new-wallet' }, title: 'Add new' },
                    { to: { path: '/account/export' }, title: 'Backup to Device' }
                ],
                transactions: [
                    { to: { path: '/account/send' }, title: 'Send' },
                    { to: { path: '/account/receive' }, title: 'Receive' },
                    { to: { path: '/account/transactions' }, title: 'Transaction History' }
                ],
                help: [
                    { to: { path: '/help/coin-vs-token' }, title: 'Coin vs Token' },
                    { to: { path: '/help/preferred-payment-sources' }, title: 'Preferred Payment Sources' },
                    { to: { path: '/help/search-and-filters' }, title: 'Search and Filters' },
                    { to: { path: '/help/tokenized-assets' }, title: 'Tokenized Assets' },
                    { to: { path: '/help/sending-currency' }, title: 'Sending Currency' },
                    { to: { path: '/help' }, title: 'MORE ...' }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
