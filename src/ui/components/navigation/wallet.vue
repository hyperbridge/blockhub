
<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="MY WALLETS" sub_title="Wallet" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/account/new-wallet" link_text="Add New" />
            <c-sidebar-menu-link url="/#/account/export" link_text="Backup to Device" />
        </c-sidebar-menu>
        <c-sidebar-menu sub_title="Transactions" mClass="margin-bottom-20">
            <c-sidebar-menu-link url="/#/account/send" link_text="Send" />
            <c-sidebar-menu-link url="/#/account/receive" link_text="Receive" />
            <c-sidebar-menu-link url="/#/account/transactions" link_text="Transaction History" />
        </c-sidebar-menu>
        <c-sidebar-menu sub_title="Help" >
            <c-sidebar-menu-link url="/#/help/coin-vs-token" link_text="Coin vs Token" />
            <c-sidebar-menu-link url="/#/help/preeferred-payment-sources" link_text="Preferred Payment Sources" />
            <c-sidebar-menu-link url="/#/help/search-and-filters" link_text="Search and Filters" />
            <c-sidebar-menu-link url="/#/help/tokenized-assets" link_text="Tokenized Assets" />
            <c-sidebar-menu-link url="/#/help/sending-currency" link_text="Sending Currency" />
            <c-sidebar-menu-link url="/#/help" aClass="font-weight-bold" link_text="MORE ..." />
        </c-sidebar-menu>

    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu-link': () => import('@/ui/components/sidebar-menu/menu_item'),
            'c-sidebar-menu': () => import('@/ui/components/sidebar-menu/index'),
            'c-searcher': () => import('@/ui/components/searcher')
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>
