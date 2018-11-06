<template>
    <div>
        <ul class="reset-list chat">
            <c-chat-message
                v-for="(msg, index) in trx.messages"
                :key="index"
                :message="msg"
                :userId="userId"
            />
        </ul>
        <textarea v-model="newMessage"/>
    </div>
</template>

<script>
    export default {
        props: ['trx'],
        components: {
            'c-chat-message': (resolve) => require(['@/ui/components/chat-message'], resolve),
        },
        data() {
            return {
                newMessage: ''
            }
        },
        computed: {
            userId() {
                return this.$store.state.application.account.id;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat {
        max-height: 600px;
        overflow-x: scroll;
        padding: 10px;
    }
</style>

