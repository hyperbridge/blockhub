<template>
    <div class="chat__user-item">
        <c-chat-user-avatar :name="name"
                            :status="status"
                            :avatar="avatar" />
        <div class="user-info">
            <strong>
                {{ name }}
                <i v-if="isAdmin"
                   class="fas fa-crown margin-left-5"
                   style="color: #FADC72" />
            </strong>
            <span>{{ game }}</span>
            <span v-if="!game && $slots['sub-info']">
                <slot name="sub-info" />
            </span>
        </div>
        <div v-if="action"
             class="user-action">
            <i class="fas"
               :class=" volume ? 'fa-volume-up' : 'fa-volume-off'"
               @click="toggleVolume" />
            <i class="fas"
               :class=" microphone ? 'fa-microphone' : 'fa-microphone-slash'"
               @click="toggleMicrophone" />
        </div>
        <div v-if="$slots.default && !action"
             class="user-custom-action"
             style="margin-left: auto;">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-chat-user-avatar': () => import('~/components/chat-new/user-avatar').then(m => m.default || m)
    },
    props: {
        avatar: String,
        name: String,
        status: String,
        game: String,
        isAdmin: {
            type: Boolean,
            default: false
        },
        action: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            volume: true,
            microphone: true
        }
    },
    methods: {
        toggleVolume() {
            this.volume = !this.volume
        },
        toggleMicrophone() {
            this.microphone = !this.microphone
        }
    }
}
</script>

<style lang="scss" scoped>
    .chat__user-item{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .user-info{
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        line-height: 16px;
        strong{
            line-height: 18px;
        }
        span{
            opacity: .7;
            font-size: 13px;
        }
    }
    .user-action{
        margin-left: auto;
        font-size: 14px;
        i{
            margin-right: 2px;
            color: #4c7be5;
            cursor: pointer;
            width: 18px;
            text-align: center;
            &:last-child{
                margin-right: 0;
            }
        }
    }
</style>
