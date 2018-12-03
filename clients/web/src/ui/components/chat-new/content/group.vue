<template>
    <div class="group-content">
        <div class="group-content__msgs">
            <div class="msgs-list">
                <slot name="messages" />
            </div>
            <c-answer-field />
        </div>
        <div class="chat__user-list">
            <slot name="users" />
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
    .group-content__msgs{
        height: 100%;
        width: calc( 100% - 250px );
        padding: 10px 15px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .msgs-list{
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 25px;
    }
    .chat__user-list{
        width: 250px;
        padding: 20px 0 20px 10px;
        border-left: 1px solid rgba(255, 255, 255, .1);
    }
</style>
