<template>
    <div
        id="chat"
        class="flex flex-column">
        <header class="title-bar flex flex-row flex-center">
            <div class="title-wrapper block center-element">
                <span class="title">Chat</span>
            </div>
        </header>
        <div
            class="flex flex-row flex-1 clear">
            <c-user-list
                :users="profiles"
                :logout="logout" />
            <c-message-list
                :messages="messages"
                :createMessage="createMessage" />
        </div>
    </div>
</template>

<script>
import UserList from './users'
import MessageList from './messages'

export default {
    components: {
        'c-user-list': UserList,
        'c-message-list': MessageList
    },
    props: {
    },
    computed: {
        user() { return this.$store.state.auth.user },
        messages() { return this.$store.getters['messages/list'] },
        profiles() { return this.$store.getters['profiles/list'] }
        // users2 () {
        //   return this.findUsers({
        //     query: {
        //       $sort: {
        //         email: 1
        //       },
        //       $limit: 25
        //     }
        //   })
        // },
    },
    created() {
        this.$store.dispatch('messages/find', {
            query: {
                $sort: {
                    createdAt: 1
                },
                $limit: 25
            }
        })
        this.$store.dispatch('profiles/find', {
            query: {
                $sort: {
                    createdAt: 1
                },
                $limit: 25
            }
        })
    },
    methods: {
        createMessage(...args) { return this.$api.service('messages').create(...args) },
        logout(...args) { return this.$api.service('auth').logout(...args) }
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
