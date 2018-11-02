<template>
    <div class="emojis">
        <div class="emojis__list" v-if="emojiList.length">
            <c-emoji v-for="emoji in emojiList" :emoji="emoji" size="20" :native="true"/>
        </div>
        <div class="emoji-picker__container">
            <c-button size="lg" status="plain" class="p-0 align-items-center" @click="openPicker">
                <i class="fas fa-plus mr-0" :class="{'rotate-icon' : showPicker }"></i>
            </c-button>
            <transition name="fade">
                <c-emoji-picker set="apple"
                                v-show="showPicker"
                                title=""
                                :showSearch="false"
                                :showSkinTones="false"
                                :showPreview="false"
                                :native="true"
                                @select="addEmoji"
                                @keyup.esc.native="closePicker">

                </c-emoji-picker>
            </transition>
        </div>
    </div>
</template>

<script>
    import {Picker, Emoji} from 'emoji-mart-vue'

    export default {
        components:{
            'c-emoji-picker': Picker,
            'c-emoji' : Emoji
        },
        data(){
            return{
                emojiList: [],
                showPicker: false
            }
        },
        methods:{
            closePicker(){
                if ( this.showPicker )
                    this.showPicker = false
            },
            openPicker(){
                this.showPicker = !this.showPicker
            },
            addEmoji(emoji) {
                this.emojiList.push(emoji)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .emoji-mart-emoji{
        height: 24px;
        line-height: 24px;
    }
    .emojis{
        display: inline-flex;
        align-items: flex-start;
    }
    .emojis__list{
        margin-right: 10px;
        display: inline-flex;
        margin-top: 2px;
    }
    .emoji-picker__container{
        position: relative;
        z-index: 999;
        display: inline-flex;
        .c-btn{
            i{
                transition: all 200ms ease-in-out;
                &.rotate-icon{
                    transform: rotate(45deg);
                    transition: all 200ms ease-in-out;
                    color: #FADC72;
                }
            }
            &:hover{
                color: #FADC72!important;
            }
        }
        .emoji-count{
            color: #fff;
            line-height: 24px;
        }
        .emoji-mart{
            position: absolute;
            top: 100%;
            left: 100%;
            z-index: 999;
        }
    }
</style>
