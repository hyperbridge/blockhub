<template>
  <main id="chat" class="flex flex-column">
    <header class="title-bar flex flex-row flex-center">
      <div class="title-wrapper block center-element">
        <span class="title">Chat</span>
      </div>
    </header>
    <div class="flex flex-row flex-1 clear" v-if="user">

      <c-user-list :users="users"
        :logout="logout" />

      <c-message-list :messages="messages.data"
        :findMessages="findMessages"
        :createMessage="createMessage" />
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import UserList from './users'
import MessageList from './messages'

export default {
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    ...mapGetters('messages', {
      findMessagesInStore: 'find'
    }),
    ...mapGetters('users', {
      users: 'list'
    }),
    messages () {
      return this.findMessagesInStore({query: { $sort: {createdAt: 1} }})
    }
  },
  methods: {
    ...mapActions('messages', {
      findMessages: 'find',
      createMessage: 'create'
    }),
    ...mapActions('users', {
      findUsers: 'find'
    }),
    ...mapActions('auth', [
      'logout'
    ])
  },
  created () {
    if (!this.user) {
      return this.$router.replace({name: 'Sign In'})
    }
    // Query users from Feathers
    this.findUsers({
      query: {
        $sort: {email: 1},
        $limit: 25
      }
    })
    // Query messages from Feathers
    this.findMessages({
      query: {
        $sort: {createdAt: -1},
        $limit: 25
      }
    })
  },
  components: {
    'c-user-list': UserList,
    'c-message-list': MessageList
  }
}
</script>

<style scoped>
main#chat {
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
