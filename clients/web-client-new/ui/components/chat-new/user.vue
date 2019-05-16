<template>
    <div class="chat__user-item">
        <c-chat-user-avatar :name="name" :status="status" :avatar="avatar"  />
        <div class="user-info">
            <strong>
                {{ name }}
                <i class="fas fa-crown margin-left-5" style="color: #FADC72" v-if="isAdmin"></i>
            </strong>
            <span>{{ game }}</span>
            <span v-if="!game && $slots['sub-info']">
                <slot name="sub-info" />
            </span>
        </div>
        <div class="user-action" v-if="action">
            <i class="fas" :class=" volume ? 'fa-volume-up' : 'fa-volume-off'" @click="toggleVolume"></i>
            <i class="fas" :class=" microphone ? 'fa-microphone' : 'fa-microphone-slash'" @click="toggleMicrophone"></i>
        </div>
        <div class="user-custom-action" style="margin-left: auto;" v-if="$slots.default && !action">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            avatar: String,
            name: String,
            status: String,
            game: String,
            isAdmin:{
                type: Boolean,
                default: false
            },
            action:{
                type: Boolean,
                default: false
            },
        },
        components:{
            'c-chat-user-avatar': (resolve) => require(['@/components/chat-new/user-avatar'], resolve),
        },
        data(){
            return{
                volume: true,
                microphone: true
            }
        },
        methods:{
            toggleVolume(){
                this.volume = !this.volume
            },
            toggleMicrophone(){
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
