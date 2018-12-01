<template>
    <div class="chat__user-item">
        <div class="user-avatar">
            <img src="../../../../static/img/user.png" />
            <span class="user-status status-online"></span>
        </div>
        <div class="user-info">
            <strong>
                Josh Doel
            </strong>
            <span>Dota II</span>
        </div>
        <div class="user-action">
            <i class="fas fa-volume-up"></i>
            <i class="fas fa-microphone"></i>
        </div>
    </div>
</template>

<script>
    export default {

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
            background: #666;
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
        font-size: 18px;
        i{
            margin-right: 5px;
            color: #4c7be5;
            cursor: pointer;
            &:last-child{
                margin-right: 0;
            }
        }
    }
</style>
