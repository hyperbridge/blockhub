<template>
    <div class="chat">
        <div class="chat-shortcuts">
            <c-shortcut-sidebar :items="shortcuts" />
        </div>
        <div class="chat__group-info">
            <div class="group-name">
                General
                <i class="fas fa-plus"></i>
            </div>
        </div>
        <div class="chat-main">
            <div class="chat-main__header">
                <div class="title">
                    General
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        components:{
            'c-shortcut-sidebar': (resolve) => require(['@/ui/components/shortcut-sidebar'], resolve),
        },
        data(){
            return{
                showShortcuts: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat{
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: nowrap;
        justify-content: space-between;
        color: #fff;
    }
    .chat-shortcuts{
        width: 70px;
        background: #1C2032;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    .chat__group-info{
        background: #272745;
        width: 200px;
        padding: 20px;
        color: #fff;
        border-left: 1px solid rgba(255, 255, 255, .1);
        .group-name{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            padding-bottom: 15px;
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, .1);
        }
    }
    .chat-main{
        padding: 10px;
        background: #3D3E5D;
        flex-grow: 1;
    }
    .chat-main__header{
        display: flex;
        align-items: center;
        padding: 0 0 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .title{
            font-size: 16px;
        }
    }
</style>
