<template>
    <div style="background: #fff">
        <c-chat :messages="messages" />
    </div>
</template>

<script>
export default {
    components: {
        'c-chat': () => import('~/components/chat/chat').then(m => m.default || m)
    },
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
