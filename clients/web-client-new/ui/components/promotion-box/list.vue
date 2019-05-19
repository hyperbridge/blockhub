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
            'c-block': () => import('~/components/block').then(m => m.default || m),
            'c-promotion-item': () => import('~/components/promotion-box/item').then(m => m.default || m)
        }
    }
</script>

<style lang="scss" scoped>
    .block__content{
        padding: 0!important;
    }
</style>
