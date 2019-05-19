<template>
    <transition name="slide-in-top">
        <div class="messages-bar__wrapper" v-if="messages.length">
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
    </transition>
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
            'c-message-bar': () => import('~/components/message-bar').then(m => m.default || m)
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

