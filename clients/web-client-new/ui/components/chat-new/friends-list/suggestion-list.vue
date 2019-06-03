<template>
    <div class="chat-friends-suggestion">
        <div class="chat-friends-suggestion__btn"
             @click="toggleList">
            <i class="fas fa-user-plus" />
            Suggested friends
            <i class="fas mr-2"
               :class="[ open ? 'fa-angle-down' : 'fa-angle-right' ]" />
        </div>
        <div v-if="open"
             class="chat-friends-suggestion__list">
            <c-chat-user v-for="item in list"
                         :key="item.name"
                         :avatar="item.avatar"
                         :name="item.name"
                         :game="item.game">
                <div>
                    <c-button status="opacity-info"
                              size="xs">
                        Add
                    </c-button>
                    <c-button status="plain"
                              size="xs">
                        <i class="fas fa-times" />
                    </c-button>
                </div>
            </c-chat-user>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-chat-user': () => import('~/components/chat-new/user').then(m => m.default || m)
    },
    props: {
        list: [Array, Object]
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleList() {
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
