<template>
    <c-layout navigationKey="chat">
      <c-chat :messages="messages"></c-chat>
    </c-layout>
</template>

<script>
import Chat from '@/components/chat/chat'

export default {
    components: {
        'c-chat': Chat
    },
    computed: {
        messages() {
            return this.$store.getters['messages/list']
                //.filter(trx => trx.you.id == this.profileId);
        }
    },
    data: () => ({
    })
}
</script>

<style lang="scss" scoped>

</style>
