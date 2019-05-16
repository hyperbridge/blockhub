<template>
    <div class="msg-form">
        <c-input class="w-100" />
    </div>
</template>

<script>
    export default {
        components:{
            'c-input': (resolve) => require(['@/components/inputs'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .msg-form{
        width: 100%;
    }
</style>
