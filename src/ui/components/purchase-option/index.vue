<template>
    <c-block :title="title" class="purchase-options" :noGutter="true" :bgGradient="true" :onlyContentBg="true">

    </c-block>
</template>

<script>

    export default {
        name: 'purchase-options',
        props: {
            title:{
                type: String,
                default: 'Purchase Options'
            }
        },
        components:{
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        }
    }
</script>

<style lang="scss" scoped>
</style>
