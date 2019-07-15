<template>
    <div
        id="chat"
        class="flex flex-column">
        <div class="col-12">
            <c-chat-base style="height: 700px">
                <template slot="sidebar">
                    <c-chat-group-sidebar :channels="channels" v-on:onChannelChange="onChannelChange($event)" />
                </template>
                <c-chat-group :currentUser="user" :sendMessage="createMessage">
                    <template slot="messages">
                        <c-chat-message v-for="msg in messages.data" v-bind:key="msg.id" :text="msg.value" :time="msg.createdAt" :user="msg.owner" />
                    </template>
                    <template slot="users">
                        <c-chat-user
                            v-for="user in discussion.chat"
                            v-bind:key="user.id"
                            :isAdmin="user.admin"
                            :action="true"
                            :avatar="user.avatar"
                            :name="user.name"
                            :game="user.game"
                            :status="user.status" />
                    </template>
                    {{ discussion.chat }}
                </c-chat-group>
            </c-chat-base>
            <hr />
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    components: {
        cChatBase: () => import('~/components/chat-new/base').then(m => m.default || m),
        cChatGroupSidebar: () => import('~/components/chat-new/content/group-list').then(m => m.default || m),
        cChatGroup: () => import('~/components/chat-new/content/group').then(m => m.default || m),
        cChatMessage: () => import('~/components/chat-new/message').then(m => m.default || m),
        cChatUser: () => import('~/components/chat-new/user').then(m => m.default || m)
    },

    props: {
    },

    data: () => ({
        channels: [],
        channelIndex: 0,
        activeChannel: null
    }),

    computed: {
        ...mapGetters('messages', {
            getterFindMessages: 'find'
        }),

        ...mapGetters('discussions', {
            getterGetDiscussion: 'get'
        }),

        user() {
            return this.$store.state.auth.user
        },

        messages() {
            if (!this.activeChannel) return { data: [] }

            return this.getterFindMessages({
                query: {
                    'discussion.id': this.activeChannel.id,
                    $sort: {
                        createdAt: 1
                    },
                    $limit: 25
                }
            })
        },

        discussion() {
            if (!this.activeChannel) return []

            return this.getterGetDiscussion(
                this.activeChannel.id,
                {
                    query: {
                        $eager: '[chat]'
                    }
                }
            )
        }
    },

    methods: {
        ...mapActions('messages', {
            actionFindMessages: 'find',
            actionCreateMessage: 'create'
        }),

        ...mapActions('discussions', {
            actionGetDiscussion: 'get'
        }),

        async onChannelChange(channelIndex) {
            this.channelIndex = channelIndex
            this.activeChannel = this.channels[this.channelIndex]
            this.updateChannelUsers()
            this.updateChannelMessages()
        },

        async createMessage(data) {
            return await this.actionCreateMessage({
                value: data,
                discussionId: this.activeChannel.id,
                ownerId: this.$store.state.application.activeProfile.id
            })
        },

        async updateChannelMessages() {
            if (!this.activeChannel) {
                return
            }

            await this.actionFindMessages({
                query: {
                    'discussion.id': this.activeChannel.id,
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })
        },

        async updateChannelUsers() {
            if (!this.activeChannel) {
                return
            }

            await this.actionGetDiscussion([
                this.activeChannel.id,
                {
                    query: {
                        $eager: '[chat]'
                    }
                }
            ])
        }
    },

    async created() {
        this.channels = (await this.$store.dispatch('discussions/find', {
            query: {
                type: { $in: ['chat', 'both'] }
            }
        })).data
        this.activeChannel = this.channels[this.channelIndex]

        this.updateChannelUsers()
        this.updateChannelMessages()
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
