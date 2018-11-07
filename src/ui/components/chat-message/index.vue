<template>
    <li
        class="chat-message"
        :class="{ 'chat-message--own': userId == message.author.id }"
    >
        <div class="chat-message__content-wrapper">
            <c-img
                class="chat-message__img"
                v-if="userId != message.author.id"
                :src="message.author.img"
            />
            <span
                class="chat-message__content"
                v-text="message.content"
            />
            <button
                v-if="userId == message.author.id"
                class="chat-message__delete-btn"
                @click="$emit('delete', message.id)"
            >
                <c-icon name="trash-alt"/>
            </button>
        </div>
        <span class="chat-message__date">
            {{ timeAgo }}
        </span>
    </li>
</template>

<script>
    export default {
        props: ['message', 'userId'],
        name: 'chat-message',
        computed: {
            timeAgo() {
                return this.message.createdAt.fromNow();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat-message {
        margin: 20px 0;
    }
    .chat-message__content-wrapper {
        display: flex;
        align-items: flex-end;
        position: relative;
        &:hover {
            .chat-message__delete-btn {
                display: block;
            }
        }
    }
    .chat-message--own {
        .chat-message__content {
            margin-left: auto;
            &:after {
                left: 8px;
                right: -8px;
            }
        }
        .chat-message__date {
            text-align: right;
        }
        .chat-message__delete-btn {
            left: 0;
        }
    }

    .chat-message__date {
        display: block;
        margin-top: 4px;
        color: #4e5066;
        margin-left: 50px;
    }

    .chat-message__img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 15px;
    }

    .chat-message__content {
        display: block;
        // width: 100%;
        max-width: calc(55%);
        min-width: 30%;
        border-radius: 10px;
        background: #343555;
        padding: 13px 20px;
        position: relative;
        &:after {
            $size: 8px;
            position: absolute;
            border: $size solid transparent;
            border-bottom-color: #343555;
            content: "";
            left: -$size;
            bottom: 0;
        }
    }

    .chat-message__delete-btn {
        border-radius: 50%;
        border-style: none;
        color: #fff;
        background: rgb(255, 118, 118);
        position: absolute;
        top: calc(50% - 15px);
        right: 0;
        display: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        animation: fade-in .5s ease;
        @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
        };
    }
</style>

