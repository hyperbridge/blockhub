<template>
    <div class="emojis">
        <div class="text-white">
            <!--{{ emojiList }}-->
        </div>
        <div class="emojis__list" v-if="emojiList.length">
            <template v-for="emoji in emojiList">
                <c-emoji :emoji="emoji" :size="20" :native="true" @click="addEmoji(emoji)"/>
                <span class="emoji-count" v-if="emoji.count > 0">
                    +{{ emoji.count }}
                </span>
            </template>
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
                showPicker: false,
                nEmoji: {}
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
                this.nEmoji = emoji;
                if ( this.emojiList.includes(emoji) ){
                    this.emojiList[this.emojiList.indexOf(emoji)].count += 1
                } else {
                    this.$set(this.nEmoji, 'count', 0)
                    this.emojiList.push(this.nEmoji)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .emoji-mart-emoji{
        height: 24px;
        line-height: 24px;
        margin: 0 3px 0 0;
        cursor: pointer;
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
    .emoji-count{
        color: #fff;
        line-height: 19px;
        margin-right: 7px;
        margin-left: -2px;
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
        .emoji-mart{
            position: absolute;
            top: 100%;
            left: 100%;
            z-index: 999;
        }
    }
</style>
