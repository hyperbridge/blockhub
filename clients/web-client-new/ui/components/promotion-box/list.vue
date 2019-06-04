<template>
    <c-block :title="title"
             :noGutter="true"
             :bgGradient="true"
             :onlyContentBg="true">
        <slot />
    </c-block>
</template>

<script>
export default {
    name: 'PromotionsList',
    components: {
        'c-block': () => import('~/components/block').then(m => m.default || m),
        'c-promotion-item': () => import('~/components/promotion-box/item').then(m => m.default || m)
    },
    props: ['title']
}
</script>

<style lang="scss" scoped>
    .block__content{
        padding: 0!important;
    }
</style>
