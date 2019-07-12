<template>
    <div class="user-input">
        <div v-if="typing" class="user-input__typing">
            Josh and Ann is typing ...
        </div>
        <form class="user-input-field" :class="{ 'active': inputActive }">
            <div v-if="user" class="user-input--avatar">
                <c-chat-user-avatar :avatar="user.avatar" :name="user.name" :number="user.number" style="width: 25px; height: 25px" />
            </div>
            <div
                role="button"
                tabIndex="0"
                contentEditable="true"
                :placeholder="placeholder"
                class="user-input--text"
                ref="userInput"
                @focus="setInputActive(true)"
                @blur="setInputActive(false)"
                @keydown="handleKey"
                v-text="message"
            />
            <div class="user-input--buttons">
                <c-button v-if="showAttachment" status="plain" @click="$emit('attachment')">
                    <i class="fas fa-paperclip" />
                </c-button>
                <c-button v-if="showEmoji" status="plain" @click="$emit('emoji')">
                    <i class="far fa-smile" />
                </c-button>
                <c-button status="plain" @click="emitSendMessage">
                    <img src="./../../../assets/SVG/send.svg"
                         class="user-input--send-icon"
                         alt="send"/>
                </c-button>
                <c-button status="plain" @click="$emit('like')">
                    <i class="fas fa-thumbs-up" style="color: #00aeff" />
                </c-button>
            </div>
        </form>
    </div>
</template>


<script>

export default {
    components: {
        'c-chat-user-avatar': () => import('~/components/chat-new/user-avatar').then(m => m.default || m)
    },
    props: {
        placeholder: {
            type: String,
            default: 'Write a reply'
        },
        typing: {
            type: Boolean,
            default: false
        },
        showAttachment: {
            type: Boolean,
            default: true
        },
        showEmoji: {
            type: Boolean,
            default: true
        },
        user: Object
    },
    data() {
        return {
            file: null,
            inputActive: false,
            message: ''
        }
    },
    methods: {
        setInputActive(onoff) {
            this.inputActive = onoff
        },

        handleKey(event) {
            if (event.keyCode === 13 && !event.shiftKey) {
                this.emitSendMessage()
                event.preventDefault()
            } else this.message = event.target.innerHTML;
        },

        emitSendMessage() {
            this.$emit('sendMessage', this.message);
            this.message = '';
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-input{
        position: relative;
        padding-top: 20px;
    }
    .user-input-field {
        margin: 0;
        position: relative;
        bottom: 0;
        display: flex;
        background-color: rgba(0, 0, 0, .16);
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
    }
    .user-input--avatar{
        margin: 5px 0 5px 5px;
    }
    .user-input--text {
        width: calc(100% - 100px );
        resize: none;
        border: none;
        outline: none;
        box-sizing: border-box;
        padding: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.33;
        white-space: pre-wrap;
        word-wrap: break-word;
        color: #fff;
        max-height: 200px;
        overflow: scroll;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        margin-right: auto;
        &:empty:before {
            content: attr(placeholder);
            display: block;
            filter: contrast(15%);
            outline: none;
        }
    }
    .user-input--buttons {
        width: 100px;
        position: absolute;
        right: 0;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .user-input--button {
        width: 30px;
        height: 34px;
        margin-left: 2px;
        margin-right: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: .8;
        &:hover{
            opacity: 1;
        }
    }
    .user-input__typing{
        font-size: 11px;
        color: #fff;
        opacity: .5;
        position: absolute;
        top: 3px;
    }

    .user-input--send-icon-wrapper {
        background: none;
        border: none;
        padding: 0px;
        margin: 0px;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .user-input--send-icon-wrapper:focus {
        outline: none;
    }
    .user-input--send-icon {
        height: 17px;
        width: 17px;
        cursor: pointer;
        align-self: center;
        outline: none;
        path{
            fill: rgba(255, 255, 255, .7)
        }
        &:hover{
            path{
                fill: #fff
            }
        }
    }
</style>
