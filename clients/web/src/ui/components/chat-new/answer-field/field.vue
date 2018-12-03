<template>
    <div class="c-user-input">
        <form class="c-user-input-field" :class="{ 'active': inputActive }">
            <div
                role="button"
                tabIndex="0"
                @focus="setInputActive(true)"
                @blur="setInputActive(false)"
                @keydown="handleKey"
                contentEditable="true"
                :placeholder="placeholder"
                class="c-user-input--text"
                ref="userInput"
            >
            </div>
            <div class="c-user-input--buttons">
                <div class="c-user-input--button">
                    <SendIcon @click="_submitText" color="rgba(255, 255, 255, .4)" />
                </div>
            </div>
        </form>
        <div class="c-user-input__typing">
            Josh and Ann is typing ...
        </div>
    </div>
</template>


<script>
    import SendIcon from './SendIcon.vue'

    export default {
        components: {
            SendIcon
        },
        props: {
            placeholder: {
                type: String,
                default: 'Write a reply'
            }
        },
        data () {
            return {
                file: null,
                inputActive: false
            }
        },
        methods: {
            setInputActive (onoff) {
                this.inputActive = onoff
            },
            handleKey (event) {
                if (event.keyCode === 13 && !event.shiftKey) {
                    this._submitText(event)
                    event.preventDefault()
                }
            },
            _submitText (event) {
                const text = this.$refs.userInput.textContent
                const file = this.file
                if (file) {
                    if (text && text.length > 0) {
                        this.onSubmit({
                            author: 'me',
                            type: 'file',
                            data: { text, file }
                        })
                        this.file = null
                        this.$refs.userInput.innerHTML = ''
                    } else {
                        this.onSubmit({
                            author: 'me',
                            type: 'file',
                            data: { file }
                        })
                        this.file = null
                    }
                } else {
                    if (text && text.length > 0) {
                        this.onSubmit({
                            author: 'me',
                            type: 'text',
                            data: { text }
                        })
                        this.$refs.userInput.innerHTML = ''
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-user-input{
        position: relative;
    }
    .c-user-input-field {
        margin: 0;
        position: relative;
        bottom: 0;
        display: flex;
        background-color: rgba(0, 0, 0, .16);
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
        justify-content: space-between;
    }
    .c-user-input--text {
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
        &:empty:before {
            content: attr(placeholder);
            display: block;
            filter: contrast(15%);
            outline: none;
        }
    }
    .c-user-input--buttons {
        width: 100px;
        position: absolute;
        right: 0;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .c-user-input--button {
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
    .c-user-input__typing{
        font-size: 11px;
        color: #fff;
        opacity: .5;
        position: absolute;
        top: -21px;
    }
</style>
