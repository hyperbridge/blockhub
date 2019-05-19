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
            'c-chat-answer-field': () => import('~/components/chat-new/answer-field/field').then(m => m.default || m),
            'c-scrollable-content': () => import('~/components/chat-new/content/scrollable-content').then(m => m.default || m)
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
