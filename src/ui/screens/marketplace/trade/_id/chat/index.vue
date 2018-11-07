<template>
    <div>
        <ul class="reset-list chat" ref="chatList">
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
                newMessage: '',
                lastMessageId: null,
                lastMsg: null
            }
        },
        methods: {
            async sendMessage() {
                if (this.newMessage && Date.now() / 1000 - this.lastMsg < 5) {
                    const { lastMessageId } = this;
                    const { content } = this.trx.messages.find(msg => msg.id === lastMessageId);
                    this.$store.dispatch(
                        'community/update',
                        { id: lastMessageId, data: { content: `${content} ${this.newMessage}` }}
                    );
                    this.cleanUp();
                }
                else if (this.newMessage) {
                    const { id, messages } = this.trx;
                    const payload = {
                        message: this.newMessage,
                        trxId: id
                    };

                    this.lastMessageId = await this.$store.dispatch(
                        'assets/createTransactionMessage',
                        payload
                    );
                    this.cleanUp();
                }
            },
            async cleanUp() {
                this.newMessage = '';
                this.lastMsg = Date.now() / 1000;

                const { chatList } = this.$refs;
                await this.$nextTick();
                chatList.scrollTop = chatList.scrollHeight;
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
        max-height: 450px;
        overflow-y: scroll;
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

