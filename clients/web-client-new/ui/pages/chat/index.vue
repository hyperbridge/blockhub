<template>
    <c-layout navigationKey="chat">
        <c-chat :messages="messages" />
    </c-layout>
</template>

<script>
import Chat from '@/components/chat/chat'

export default {
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
