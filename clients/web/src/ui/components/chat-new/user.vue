<template>
    <div class="chat__user-item">
        <div class="user-avatar">
            <img :src="avatar" />
            <span class="user-status" :class="['status-' + status]"></span>
        </div>
        <div class="user-info">
            <strong>
                {{ name }}
                <i class="fas fa-crown margin-left-5" style="color: #FADC72" v-if="isAdmin"></i>
            </strong>
            <span>{{ game }}</span>
        </div>
        <div class="user-action">
            <i class="fas" :class=" volume ? 'fa-volume-up' : 'fa-volume-off'" @click="toggleVolume"></i>
            <i class="fas" :class=" microphone ? 'fa-microphone' : 'fa-microphone-slash'" @click="toggleMicrophone"></i>
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
            }
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
    .user-avatar{
        width: 40px;
        position: relative;
        img{
            width: 100%;
            border-radius: 100%;
        }
    }
    .user-status{
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        right: -2px;
        bottom: -2px;
        border: 3px solid #3d3d5e;
        &.status-online{
            background: #43C981;
        }
        &.status-offline{
            background: #999;
        }
        &.status-busy{
            background: #F75D5D;
        }
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
