<template>
    <div class="private-content">
        <c-scrollable-content>
            <slot />
        </c-scrollable-content>
        <c-chat-answer-field />
    </div>
</template>

<script>
    export default {
        components:{
            'c-chat-answer-field': (resolve) => require(['@/ui/components/chat-new/answer-field/field'], resolve),
            'c-scrollable-content': (resolve) => require(['@/ui/components/chat-new/content/scrollable-content'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .private-content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
