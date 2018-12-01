<template>
    <div class="chat">
        <div class="chat-shortcuts">
            <c-shortcut-sidebar :items="shortcuts" />
        </div>
        <div class="chat__group-info">
            <div class="chat__group-head">
                <div class="group-name h5">
                    General
                    <i class="fas fa-plus"></i>
                </div>
                <div>
                    12 of 450 online
                </div>
                <div class="group-status">
                    MOTD: Proin ut purus suscipit, bibendum eros
                </div>
            </div>
            <div class="chat__channel-list">
                <div class="title h6 text-uppercase font-weight-bold d-flex justify-content-between">
                    Channel
                    <i class="fas fa-plus"></i>
                </div>
                <ul>
                    <li class="active">
                        General
                    </li>
                    <li>
                        Trash
                    </li>
                    <li>
                        Only Playload
                    </li>
                    <li>
                        Other staff
                    </li>
                    <li>
                        Help
                    </li>
                </ul>
            </div>
        </div>
        <div class="chat-main">
            <div class="chat-main__header">
                <div>
                    <div class="chat-title">
                        General
                    </div>
                    <div class="chat-status">
                        Ut elementum sit amet tellus non pulvinar. Integer mi quam, mattis at ultrices quis, aliquet ut risus.
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div class="chat-main__content">
                <slot />
            </div>
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
        padding: 15px;
        color: #fff;
        border-left: 1px solid rgba(255, 255, 255, .1);
    }
    .chat__group-head{
        color: #fff;
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .group-name{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: bold;
            margin-bottom: 0;
        }
        .group-status{
            margin: 10px 0 0;
            font-size: 12px;
            line-height: 16px;
        }
    }
    .chat-main{
        padding: 10px;
        background: #3D3E5D;
        flex-grow: 1;
    }
    .chat-main__content{
        height: calc( 100% - 52px );
    }
    .chat-main__header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        .chat-title{
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 1px;
        }
        .chat-status{
            font-size: 13px;
            opacity: .8;
        }
    }
    .chat__channel-list{
        ul{
            padding: 0;
            margin: 15px 0;
            li{
                list-style: none;
                padding: 2px 10px;
                margin: 2px -15px;
                border-left: 2px solid transparent;
                &.active,
                &:hover{
                    border-color: #5D75F7;
                    cursor: pointer;
                    background: rgba(255, 255, 255, .05);
                }
            }
        }
    }
</style>
