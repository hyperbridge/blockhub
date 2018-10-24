<template>
    <div class="messages-bar__wrapper">
        <h4 v-if="status === 'error'" class="messages-bar__title">
            Please correct following
            {{ title }}<span v-show="messages.length > 1">s</span>:
            <span class="messages-bar__count">({{ messages.length }})</span>
        </h4>
        <c-message-bar
            v-for="(message, index) in messages"
            :key="index"
            :text="message.text || message"
            :status="message.status || status"
        />
    </div>
</template>

<script>
    export default {
        name: 'messages-bar',
        props: {
            messages: Array,
            status: {
                type: String,
                default: 'error'
            },
            title: {
                type: String,
                default: 'error'
            }
        },
        components: {
            'c-message-bar': (resolve) => require(['@/ui/components/message-bar'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .messages-bar__wrapper {
        margin: 20px 0;
    }
    .messages-bar__title > span {
        font-weight: 500;
    }
    .messages-bar__count {
        font-size: 13px;
    }
</style>

