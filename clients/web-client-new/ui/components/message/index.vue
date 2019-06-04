<template>
    <div class="message">
        <div class="message__head">
            <c-author :author="msg.author" />
            <span>
                {{ getTime(msg.time) }}
            </span>
        </div>
        {{ msg.text }}
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'Message',
    components: {
        'c-author': () => import('~/components/author').then(m => m.default || m)
    },
    props: ['msg'],
    methods: {
        getTime(date) {
            return moment(date).format('h:mm')
        }
    }
}
</script>

<style lang="scss">
    .message{
        text-align: right;
        margin-bottom: 15px;
    }
    .message__head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 7px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .16);
        margin-bottom: 8px;
    }
</style>
