<template>
    <div style="background: #fff">
      <c-chat :messages="messages"></c-chat>
    </div>
</template>

<script>
export default {
    components: {
        'c-chat': (resolve) => require(['@/ui/components/chat/chat'], resolve),
    },
    computed: {
        messages() {
            return this.$store.getters['messages/list']
                //.filter(trx => trx.you.id == this.profileId);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
