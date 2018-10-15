<template>
    <c-block :title="title" class="purchase-options" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <slot />
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
        },
        mounted(){
            console.log(this)
        }
    }
</script>

<style lang="scss" scoped>
    .purchase-option{
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
    }
</style>
