<template>
    <div style="background: #fff">
      <c-chat :messages="messages"></c-chat>
    </div>
</template>

<script>
import Chat from '@/ui/components/chat/chat'

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
