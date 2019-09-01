<template>
    <div>
        <Layout :showLeftPanel="false" :showRightPanel="false" :breadcrumbLinks="false"/>
        <Chat :messages="messages" />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: `Chat | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub chat` },
                { hid: 'keywords', name: 'keywords', content: 'chat, social, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        Chat: () => import('@ericmuyser/hyper-ui').then(m => m.Chat)
    },
    data: () => ({
    }),

    computed: {
        messages() {
            return this.$store.getters['messages/list']
            // .filter(trx => trx.you.id == this.profileId);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
