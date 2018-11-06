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
        <div class="chat-form">
            <input
                class="chat-form__input"
                type="text"
                v-model="newMessage"
                @keyup.enter="sendMessage()"
            />
            <button
                @click="sendMessage()"
                class="chat-form__btn"
            >
                <c-icon name="paper-plane"/>
            </button>
        </div>
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
        methods: {
            sendMessage() {
                this.$store.dispatch('community/createMessage', this.newMessage);
                this.newMessage = '';
            }
        },
        computed: {
            userId() {
                return this.$store.state.application.account.id;
            },
            messages() {
                return this.$store.getters['community/messages'];
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
    .chat-form {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
    }
    .chat-form__input {
        // background: transparent;
        background: #fff;
        color: #000;
        width: 80%;
        padding: 10px;
    }
    .chat-form__btn {
        border-radius: 50%;
        background: #696cb3;
        border-style: none;
        cursor: pointer;
        height: 42px;
        width: 42px;
        color: #fff;
    }
</style>

