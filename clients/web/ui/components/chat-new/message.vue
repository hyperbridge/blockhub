<template>
    <div class="chat-message">
        <div class="chat-message__avatar">
            <img :src="avatar">
        </div>
        <div class="chat-message__body">
            <div class="chat-message__info">
                <strong>
                    {{ user.name }}
                </strong>
                <span>
                    {{ when }}
                </span>
            </div>
            <div
                class="chat-message__content"
                v-html="text" />
            <!--<c-emoji />-->
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'c-chat-message',
    components: {
        // 'c-emoji': () => import('~/components/emoji').then(m => m.default || m)
    },
    props: {
        user: Object,
        time: String,
        text: String
    },
    computed: {
        timeAgo() {
            // return this.time.fromNow();
        },
        when() {
            return moment(this.time).format('DD MMMM, YYYY h:mm')
        },
        avatar() {
            return this.user.avatar ? this.user.avatar : 'https://i.pravatar.cc/40?img=50'
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
