<template>
    <div class="c-user-input">
        <div class="c-user-input__typing" v-if="typing">
            Josh and Ann is typing ...
        </div>
        <form class="c-user-input-field" :class="{ 'active': inputActive }">
            <div class="c-user-input--avatar" v-if="user">
                <c-chat-user-avatar :avatar="user.avatar" :name="user.name" :number="user.number" style="width: 25px; height: 25px"/>
            </div>
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
                <c-button status="plain" @click="$emit('attachment')">
                    <i class="fas fa-paperclip"></i>
                </c-button>
                <c-button status="plain" @click="$emit('emoji')">
                    <i class="far fa-smile"></i>
                </c-button>
                <c-button status="plain" @click="$emit('send')">
                    <svg
                        version='1.1'
                        class="c-user-input--send-icon"
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='37.393px'
                        height='37.393px'
                        viewBox='0 0 37.393 37.393'
                        enableBackground='new 0 0 37.393 37.393'>
                        <g id='Layer_2'>
                            <path d='M36.511,17.594L2.371,2.932c-0.374-0.161-0.81-0.079-1.1,0.21C0.982,3.43,0.896,3.865,1.055,4.241l5.613,13.263
          L2.082,32.295c-0.115,0.372-0.004,0.777,0.285,1.038c0.188,0.169,0.427,0.258,0.67,0.258c0.132,0,0.266-0.026,0.392-0.08
          l33.079-14.078c0.368-0.157,0.607-0.519,0.608-0.919S36.879,17.752,36.511,17.594z M4.632,30.825L8.469,18.45h8.061
          c0.552,0,1-0.448,1-1s-0.448-1-1-1H8.395L3.866,5.751l29.706,12.757L4.632,30.825z' />
                        </g>
                    </svg>
                </c-button>
                <c-button status="plain" @click="$emit('like')">
                    <i class="fas fa-thumbs-up" style="color: #00aeff"></i>
                </c-button>
            </div>
        </form>
    </div>
</template>


<script>

    export default {
        props: {
            placeholder: {
                type: String,
                default: 'Write a reply'
            },
            typing:{
                type: Boolean,
                default: false
            },
            user: Object
        },
        components: {
            'c-chat-user-avatar': (resolve) => require(['@/components/chat-new/user-avatar'], resolve),
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-user-input{
        position: relative;
        padding-top: 20px;
    }
    .c-user-input-field {
        margin: 0;
        position: relative;
        bottom: 0;
        display: flex;
        background-color: rgba(0, 0, 0, .16);
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
    }
    .c-user-input--avatar{
        margin: 5px 0 5px 5px;
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
        margin-right: auto;
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
        top: 3px;
    }

    .c-user-input--send-icon-wrapper {
        background: none;
        border: none;
        padding: 0px;
        margin: 0px;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .c-user-input--send-icon-wrapper:focus {
        outline: none;
    }
    .c-user-input--send-icon {
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
