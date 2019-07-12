<template>
    <div
        id="chat"
        class="flex flex-column">
        <header class="title-bar flex flex-row flex-center">
            <div class="title-wrapper block center-element">
                <span class="title">Chat</span>
            </div>
        </header>
        <div class="col-12" >
            <c-chat-base style="height: 700px">
                <template slot="sidebar">
                    <c-chat-group-sidebar :channels="channels" v-on:onChannelChange="onChannelChange($event)"/>
                </template>
                <c-chat-group :currentUser="user" :channel="activeChannel">
                    <template slot="messages">
                        <c-chat-message v-for="(msg, idx) in messages"
                                        :key="`msg-${idx}`"
                                        :text="msg.value"
                                        :time="msg.createdAt"
                                        :user="user" />
                    </template>
                    <!--<template slot="users">
                        <c-chat-user v-for="user in users" :isAdmin="user.admin" :action="true" :avatar="user.avatar" :name="user.name" :game="user.game" :status="user.status"/>
                    </template>-->
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
        'c-chat-group-sidebar': () => import('~/components/chat-new/content/group-list').then(m => m.default || m),
        'c-chat-group': () => import('~/components/chat-new/content/group').then(m => m.default || m),
        'c-chat-message': () => import('~/components/chat-new/message').then(m => m.default || m),
    },
    props: {
    },

    data: () => ({
        channels: [],
        messages: [],
        channelIndex: 0,
        activeChannel: null
    }),

    computed: {
        user() {
            return this.$store.state.auth.user
        },
        profiles() { return this.$store.getters['profiles/list'] }
    },
    async created() {
        this.$store.dispatch('profiles/find', {
            query: {
                $sort: {
                    createdAt: 1
                },
                $limit: 25
            }
        })

        // Listen to created events and add the new message in real-time
        //client.service('messages').on('created', addMessage);

        this.$store.dispatch('discussions/find',  {
            query: {
                type: { $in: ['chat', 'both']}
            }
        }).then(({ data }) => {
            this.channels = data;
            this.activeChannel = this.channels[this.channelIndex];

            this.$store.dispatch('messages/find', {
                query: {
                    $sort: {
                        createdAt: 1
                    },
                    $limit: 25,
                    /*discussionId: this.activeChannel.id need to only get an active channel*/
                }
            }).then(({ data }) => {
                this.messages = data;
            })
        });

    },

    methods: {
        createMessage(...args) { return this.$api.service('messages').create(...args) },
        logout(...args) { return this.$api.service('auth').logout(...args) },

        onChannelChange(channelIndex) {
            this.channelIndex = channelIndex;
            this.activeChannel = this.channels[this.channelIndex];
        }
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
