<template>
    <div>
        <ul class="reset-list chat" ref="chatList">
            <c-chat-message
                v-for="(msg, index) in trx.messages"
                @delete="$store.dispatch(
                    'deleteRelation',
                    ['assets/trxs/messages', trx.id, $event]
                )"
                :key="index"
                :message="msg"
                :userId="userId"
            />
            <!-- @delete="$store.dispatch(
                'assets/deleteTransactionMessage',
                { id: $event, trxId: trx.id }
            )" -->
        </ul>
        <div class="chat-form">
            <input
                class="chat-form__input"
                type="text"
                v-model="newMessage"
                @keyup.enter="sendMessageV2()"
            />
            <button
                @click="sendMessage()"
                class="chat-form__btn"
            >
                <c-icon name="paper-plane"/>
            </button>
        </div>
        <!-- <button @click="$store.dispatch(
            'assets/deleteSubitem',
            { id: 1, target: 'trxs', prop: 'messages' }
        )">
            deleteSubitem
        </button>
        <button @click="$store.dispatch(
            'assets/deleteGeneric',
            ['messages', 1, 'trxs', trx.id, 'community']
        )">
            deleteSub
        </button> -->
        <button @click="$store.dispatch(
            'createRelation',
            ['assets/trxs/messages', trx.id, { content: 'New message!', author: 1 }]
        )">
            Dispatch root createRelation
        </button>
        <button @click="$store.dispatch(
            'deleteRelation',
            ['assets/trxs/messages', trx.id, 8]
        )">
            Dispatch root deleteRelation
        </button>
    </div>
</template>

<script>
    export default {
        props: ['trx'],
        components: {
            'c-chat-message': (resolve) => require(['@/components/chat-message'], resolve),
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
                if (this.newMessage && Date.now() / 1000 - this.lastMsg < 10) {
                    const { lastMessageId: id } = this;
                    const oldMsg = this.trx.messages.find(msg => msg.id == lastMessageId);
                    this.$store.dispatch(
                        'community/update',
                        { id, data: { content: `${oldMsg.content} ${this.newMessage}` }}
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
            async sendMessageV2() {
                if (this.newMessage && Date.now() / 1000 - this.lastMsg < 10) {
                    const { lastMessageId: id } = this;
                    const oldMsg = this.trx.messages.find(msg => msg.id == id);
                    const data = {
                        content: `${oldMsg.content} ${this.newMessage}`
                    };

                    this.$store.dispatch('updateV2', ['community/messages', id, data]);
                    this.cleanUp();
                }
                else if (this.newMessage) {
                    const { id } = this.trx;
                    const data = {
                        content: this.newMessage,
                        author: 1
                    };

                    this.lastMessageId = await this.$store.dispatch(
                        'createRelation',
                        ['assets/trxs/messages', id, data]
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
            trxRaw() {
                return this.$store.state.assets.trxs[this.trx.id];
            },
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

