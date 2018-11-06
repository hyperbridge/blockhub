<template>
    <li class="chat-message">
        <span>{{ message.content }}</span> {{ userId }}
        {{ message }}
    </li>
</template>

<script>
    export default {
        props: ['message', 'userId'],
        name: 'chat-message'
    }
</script>

<style lang="scss" scoped>
    .chat-message {

    }
</style>

