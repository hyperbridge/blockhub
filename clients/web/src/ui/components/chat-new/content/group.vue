<template>
    <div class="group-content">
        <div class="group-content__msgs-list">
            <slot name="messages" />
            <c-answer-field />
        </div>
        <div class="chat__user-list">
            <slot name="users" />
            <!--<c-chat-user v-for="i in 5" />-->
        </div>
    </div>
</template>

<script>
    export default {
        props:{

        },
        components:{
            'c-chat-user': (resolve) => require(['@/ui/components/chat-new/user'], resolve),
            'c-answer-field': (resolve) => require(['@/ui/components/chat-new/answer-field/field'], resolve)
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
    .group-content__msgs-list{
        height: 100%;
        width: calc( 100% - 250px );
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px 15px 10px 0;
    }
    .chat__user-list{
        width: 250px;
        padding: 20px 0 20px 10px;
        border-left: 1px solid rgba(255, 255, 255, .1);
    }
</style>
