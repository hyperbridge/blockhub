<template>
    <div class="chat-friends-suggestion">
        <div class="chat-friends-suggestion__btn" @click="toggleList">
            <i class="fas fa-user-plus"></i>
            Suggested friends
            <i class="fas mr-2" :class="[ open ? 'fa-angle-down' : 'fa-angle-right' ]"></i>
        </div>
        <div class="chat-friends-suggestion__list" v-if="open">
            <c-chat-user v-for="item in list" :avatar="item.avatar" :name="item.name" :game="item.game">
                <div>
                    <c-button status="opacity-info" size="xs">
                        Add
                    </c-button>
                </div>
            </c-chat-user>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            list: [ Array, Object ]
        },
        components: {
            'c-chat-user': (resolve) => require(['@/ui/components/chat-new/user'], resolve)
        },
        data(){
            return{
                open: false
            }
        },
        methods:{
            toggleList(){
                this.open = !this.open
            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat-friends-suggestion{
        display: flex;
        flex-direction: column;
    }
    .chat-friends-suggestion__btn{
        padding: 5px 10px;
        display: flex;
        align-items: center;
        color: #fff;
        background: #3d3d5e;
        font-size: 14px;
        flex-basis: 30px;
        flex-grow: 0;
        flex-shrink: 0;
        i{
            &:first-child{
                margin-right: 8px;
                color: #4c7be5;
            }
            &:last-child{
                margin-left: auto;
            }
        }
    }
    .chat-friends-suggestion__list{
        padding: 10px;
        background: #2a2944;
        max-height: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        color: #fff;
    }
</style>
