<template>
    <div
        id="chat"
        class="flex flex-column">
        <div class="col-12">
            <c-chat-base style="height: 700px" :channelInfo="channelIfo">
                <template slot="sidebar">
                    <c-chat-group-sidebar :channels="channels" v-on:onChannelChange="onChannelChange($event)" />
                </template>
                <c-chat-group :currentUser="user" :sendMessage="createMessage">
                    <template slot="messages">
                        <c-chat-message v-for="msg in messages" v-bind:key="msg.id" :text="msg.value" :time="msg.createdAt" :user="msg.owner" />
                    </template>
                    <template slot="users">
                        <c-chat-user
                            v-for="user in channelUsers"
                            v-bind:key="user.id"
                            :isAdmin="user.admin"
                            :action="true"
                            :avatar="user.avatar"
                            :name="user.name"
                            :game="user.game"
                            :status="user.status" />
                    </template>
                </c-chat-group>
            </c-chat-base>
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-chat-base': () => import('~/components/chat-new/base').then(m => m.default || m),
        'c-chat-message': () => import('~/components/chat-new/message').then(m => m.default || m),
        'c-chat-user': () => import('~/components/chat-new/user').then(m => m.default || m),
        'c-chat-group-sidebar': () => import('~/components/chat-new/content/group-list').then(m => m.default || m),
        'c-chat-group': () => import('~/components/chat-new/content/group').then(m => m.default || m)
    },

    props: {
    },

    data: () => ({
        channels: [],
        channelIndex: 0,
        activeChannel: null,
        messagesData: [],
        channelUsers: [],
        channelIfo: {}
    }),

    computed: {
        user() {
            return this.$store.state.auth.user
        },

        messages() {
            return this.$store.getters['messages/list']
        }
    },

    methods: {

        async onChannelChange(channelIndex) {
            this.channelIndex = channelIndex
            this.activeChannel = this.channels[this.channelIndex]
            this.updateChannelInfo()
            this.updateChannelMessages()
        },

        async createMessage(data) {
            const result = await this.$store.dispatch('messages/create', {
                value: data,
                discussionId: this.activeChannel.id,
                ownerId: this.$store.state.application.activeProfile.id
            })

            // this.messages.push(result)
            return result
        },

        async updateChannelMessages() {
            if (!this.activeChannel) {
                return
            }

            this.messagesData = (await this.$store.dispatch('messages/find', {
                query: {
                    'discussion.id': this.activeChannel.id,
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })).data.reverse()
        },

        async updateChannelInfo() {
            if (!this.activeChannel) {
                return
            }

            const { chat, ...channel } = (await this.$store.dispatch('discussions/get', [
                this.activeChannel.id,
                {
                    query: {
                        $eager: '[chat]'
                    }
                }
            ]))
            this.channelUsers = chat
            this.channelIfo = channel
        },

        async updateChannels() {
            this.channels = (await this.$store.dispatch('discussions/find', {
                query: {
                    type: { $in: ['chat', 'both'] }
                }
            })).data

            this.activeChannel = this.channels[this.channelIndex]
        }
    },


    async created() {
        await this.updateChannels()
        this.updateChannelInfo()
        this.updateChannelMessages()

        this.$feathers.service('messages').on('messages created', message => {
            console.log('Someone created a message', message)
        })

        this.$feathers.io.on('messages created', message => {
            console.log('Someone created a message', message)
        })

        this.$feathers.on('created', message => {
            console.log('Someone created a message', message)
        })

    }
}
</script>

<style scoped>
#chat {
  height: 100%;
}

/* Header */
header.title-bar {
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
}

header.title-bar img.logo {
  width: 100%;
  max-width: 140px;
}

header.title-bar span.title {
  color: #969696;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 1.2em;
  margin-left: 7px;
}
</style>
