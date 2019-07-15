<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false">
        <c-chat :messages="messages" />
    </c-layout>
</template>

<script>
import Chat from '@/components/chat/chat'

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
        'c-chat': Chat
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
