<template>
    <div class="navigation" id="navigation-default" v-if="signed_in">
        <c-sidebar-menu title="ACCOUNT" :links="links.account" />
        <c-sidebar-menu sub_title="Wallets" :links="links.wallets" />
        <c-sidebar-menu sub_title="Identities" :links="links.identities" />
        <c-sidebar-menu sub_title="Developer" :links="links.developer" />
        <c-sidebar-menu sub_title="Help" :links="links.help" />
        <c-sidebar-menu sub_title="Legal" :links="links.legal" />
    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve)
        },
        computed: {
            signed_in() { return this.$store.state.application.signed_in },
            is_developer() { return this.$store.state.application.account.current_identity.developer_id }
        },
        data() {
            return {
                links: {
                    account: [
                        { to: { path: '/account' }, title: 'Account Overview' },
                        { to: { path: '/account/verification' }, title: 'Account Verification' }
                    ],
                    wallets: [
                        { to: { path: '/account/wallets' }, title: 'Overview' },
                        { to: { path: '/account/wallets' }, title: 'New Wallet' }
                    ],
                    identities: [
                        { to: { path: '/account/identities' }, title: 'Overview' },
                        { to: { path: '/account/new-identity' }, title: 'New Identity' }
                    ],
                    developer: [
                        !this.is_developer && { to: { path: '/developer/new' }, title: 'Become a Developer' },
                        this.is_developer && { to: { path: '/developer' }, title: 'Developer Area' }
                    ],
                    help: [
                        { to: { path: '/account/wallets' }, title: 'Creating an account' },
                        { to: { path: '/account/wallets' }, title: 'Blockchain gaming' },
                        { to: { path: '/account/wallets' }, title: 'BlockHub interface' },
                        { to: { path: '/account/wallets' }, title: 'HBX token' },
                        { to: { path: '/account/wallets' }, title: 'Trading assets' }
                    ],
                    legal: [
                        { to: { path: '/terms' }, title: 'Terms & Conditions' },
                        { to: { path: '/privacy' }, title: 'Privacy Policy' }
                    ]
                }
            }
        }
    }
</script>
