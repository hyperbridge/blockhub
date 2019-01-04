<template>
    <div class="group-content">
        <div class="group-content__msgs">
            <c-scrollable-content>
                <slot name="messages" />
            </c-scrollable-content>
            <c-chat-answer-field :user="currentUser" />
        </div>
        <div class="chat__user-list">
            <slot name="users" />
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            currentUser: Object
        },
        components:{
            'c-chat-user': (resolve) => require(['@/ui/components/chat-new/user'], resolve),
            'c-chat-answer-field': (resolve) => require(['@/ui/components/chat-new/answer-field/field'], resolve),
            'c-scrollable-content': (resolve) => require(['@/ui/components/chat-new/content/scrollable-content'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .group-content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .group-content__msgs{
        height: 100%;
        width: calc( 100% - 250px );
        padding: 10px 5px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .chat__user-list{
        width: 250px;
        padding: 20px 0 20px 10px;
        border-left: 1px solid rgba(255, 255, 255, .1);
    }
</style>
