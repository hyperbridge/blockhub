<template>
    <c-block :title="title" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <slot />
    </c-block>
</template>

<script>
    export default {
        name: 'promotions-list',
        props:['title'],
        components:{
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-promotion-item': (resolve) => require(['@/ui/components/promotion-box/item'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .block__content{
        padding: 0!important;
    }
</style>
