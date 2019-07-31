<template>
    <div style="background: #fff">
        <Chat :messages="messages" />
    </div>
</template>

<script>
export default {
    components: {
        'Chat': () => import('@ericmuyser/hyper-ui').then(m => m.Chat)
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
