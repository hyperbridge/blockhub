<template>
    <div class="msg-form">
        <c-input class="w-100" />
    </div>
</template>

<script>
    export default {
        components:{
            'c-input': () => import('~/components/inputs').then(m => m.default || m)
        }
    }
</script>

<style lang="scss" scoped>
    .msg-form{
        width: 100%;
    }
</style>
