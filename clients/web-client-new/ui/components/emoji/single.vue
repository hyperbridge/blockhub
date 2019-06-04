<template>
    <div class="single-emogi"
         :class="{'single-emogi--bg' : count && count > 0}"
         @click="$emit('click')">
        <emoji :emoji="emoji"
               :size="Number(size)"
               :style=" 'height:' + size + 'px'" />
        <span v-if="count && count > 0"
              class="single-emogi__count">
            {{ count }}
        </span>
    </div>
</template>

<script>

import { Emoji } from 'emoji-mart-vue'

export default {
    components: {
        'c-emoji': Emoji
    },
    props: {
        emoji: {
            type: String,
            default: 'smile'
        },
        size: {
            type: [String, Number],
            default: '24'
        },
        count: [String, Number]
    }
}
</script>

<style lang="scss" scoped>
    .single-emogi{
        display: inline-flex;
        align-items: center;
        padding: 3px;
        transition: all 200ms ease-in-out;
        &:hover{
            cursor: pointer;
            transform: scale(1.1);
        }
        &.single-emogi--bg{
            background: rgba(0, 0, 0, .1);
            border-radius: 15px;
            &:hover{
                background: rgba(0, 0, 0, .2);
            }
        }
    }
    .single-emogi__count{
        color: #fff;
        line-height: 19px;
        margin: 0 5px 0 8px;
        opacity: .6;
        font-size: 14px;
    }
</style>
