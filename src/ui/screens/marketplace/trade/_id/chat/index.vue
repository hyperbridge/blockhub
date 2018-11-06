<template>
    <div>
        chat
        <c-chat-message :message="trx.messages[0]" :userId="userId"/>
    </div>
</template>

<script>
    export default {
        props: ['trx'],
        components: {
            'c-chat-message': (resolve) => require(['@/ui/components/chat-message'], resolve),
        },
        computed: {
            userId() {
                return this.$store.state.application.account.id;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

