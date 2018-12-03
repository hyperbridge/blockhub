<template>
    <div class="private-content">
        <div class="msgs-list">
            <slot />
        </div>
        <c-chat-answer-field />
    </div>
</template>

<script>
    export default {
        components:{
            'c-chat-answer-field': (resolve) => require(['@/ui/components/chat-new/answer-field/field'], resolve)
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
    .msgs-list{
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
    }
</style>
