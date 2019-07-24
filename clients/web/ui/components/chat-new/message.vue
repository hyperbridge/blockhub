<template>
    <div class="chat-message">
        <div class="chat-message__avatar">
            <img :src="avatar">
        </div>
        <div class="chat-message__body">
            <div class="chat-message__info">
                <strong>
                    {{ message.owner.name }}
                </strong>
                <span>
                    {{ when }}
                </span>
            </div>
            <div
                class="chat-message__content"
                v-html="message.value" />
            <div v-if="user.id == message.owner.accountId" @click="$emit('deleteMsg', message.id)"><small>Delete</small></div>
            <div v-if="user.id == message.owner.accountId" @click="$emit('editMsg', message)"><small>Edit</small></div>
            <!--<c-emoji />-->
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        // 'c-emoji': () => import('~/components/emoji').then(m => m.default || m)
    },

    props: {
        user: Object,
        message: Object
    },

    computed: {
        timeAgo() {
             return moment(this.time).fromNow();
        },
        when() {
            if (moment(this.message.createdAt).format('YYYYMMMMDD') == moment().format('YYYYMMMMDD'))
                return this.timeAgo
            return moment(this.message.createdAt).format('DD MMMM, YYYY h:mm')
        },
        avatar() {
            return this.message.owner.avatar ? this.message.owner.avatar : 'https://i.pravatar.cc/40?img=50'
        }
    }
}
</script>

<style lang="scss" scoped>
    .chat-message {
        display: flex;
        width: 100%;
        align-items: flex-start;
        color: #fff;
        margin: 0 0 20px 0;
        &:last-child{
            margin-bottom: 0;
        }
    }
    .chat-message__avatar {
        width: 40px;
        img{
            width: 100%;
            border-radius: 100%;
        }
    }
    .chat-message__body {
        width: calc(100% - 40px);
        padding-left: 15px;
    }
    .chat-message__info {
        display: flex;
        align-items: center;
        padding-bottom: 5px;
        strong {
            font-weight: bold;
            color: #5D75F7;
        }
        span {
            opacity: .6;
            margin-left: 10px;
            font-size: 12px;
        }
    }
</style>
