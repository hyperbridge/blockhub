<template>
    <div class="row">
        <!--I don't know if we need this-->
        <!--<div class="col-12 d-flex justify-content-between flex-wrap assets-list margin-bottom-30">-->
        <!--<div class="assets-list__item-container">-->
        <!--<AssetsListItem></AssetsListItem>-->
        <!--</div>-->
        <!--</div>-->
        <div class="col-12">
            <AsssetsGrid :list="product.meta.assets" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'AsssetsGrid': () => import('@ericmuyser/hyper-ui').then(m => m.AsssetsGrid),
        'AssetsListItem': () => import('@ericmuyser/hyper-ui').then(m => m.AssetsListItem)
    },
    props: ['product']
}
</script>

<style lang="scss" scoped>
    .assets-list__item-container{
        width: calc( 100%/3 );
        padding: 5px;
        @media only screen and (min-width: 1400px){
            width: 25%;
        }
    }
</style>

