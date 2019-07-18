<template>
    <div class="emojis">
        <div class="text-white">
            <!--{{ emojiList }}-->
        </div>
        <div
            v-if="emojiList.length"
            class="emojis__list">
            <div
                v-for="(emoji) in emojiList"
                :key="emoji.count"
                class="emojis__list-item"
                :class="{'couple-items' : emoji.count > 0 }"
                @click="addEmoji(emoji)">
                <c-emoji
                    :emoji="emoji"
                    :size="18"
                    :native="true" />
                <span
                    v-if="emoji.count > 0"
                    class="emoji-count">
                    +{{ emoji.count }}
                </span>
            </div>
        </div>
        <div class="emoji-picker__container">
            <c-button
                status="plain"
                class="p-0 align-items-center"
                @click="openPicker">
                <i
                    class="fas fa-plus mr-0"
                    :class="{'rotate-icon' : showPicker }" />
            </c-button>
            <transition name="fade">
                <c-emoji-picker
                    v-show="showPicker"
                    set="apple"
                    title=""
                    :showSearch="false"
                    :showSkinTones="false"
                    :showPreview="false"
                    :native="true"
                    @select="addEmoji"
                    @keyup.esc.native="closePicker" />
            </transition>
        </div>
    </div>
</template>

<script>
import { Picker, Emoji } from 'emoji-mart-vue'

export default {
    components: {
        'c-emoji-picker': Picker,
        'c-emoji': Emoji
    },
    data() {
        return {
            emojiList: [
            ],
            showPicker: false,
            nEmoji: {},
            showAll: false
        }
    },
    methods: {
        closePicker() {
            if (this.showPicker) {
                this.showPicker = false
            }
        },
        openPicker() {
            this.showPicker = !this.showPicker
        },
        addEmoji(emoji) {
            this.nEmoji = emoji
            if (this.emojiList.includes(emoji)) {
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
    .emojis{
        display: inline-flex;
    }
    .emojis__list{
        margin-right: 10px;
        display: inline-flex;
    }
    .emojis__list-item{
        display: inline-flex;
        align-items: center;
        border-radius: 15px;
        padding: 3px;
        cursor: pointer;
        color: #fff;
        &.couple-items{
            margin: 0 4px 0 0;
            background: rgba(0, 0, 0, .2);
        }
        .emoji-mart-emoji{
            height: 20px;
            line-height: 24px;
            transition: all 200ms ease-in-out;
        }
        &:active{
            .emoji-mart-emoji{
                transition: all 200ms ease-in-out;
                transform: scale(1.3);
            }
        }
    }
    .emoji-count{
        color: #fff;
        line-height: 19px;
        margin-right: 5px;
        opacity: .6;
        font-size: 12px;
    }
    .emoji-picker__container{
        position: relative;
        z-index: 999;
        display: inline-flex;
        .c-button{
            line-height: 26px;
            font-size: 13px;
            color: rgba(255, 255, 255, .6);
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
