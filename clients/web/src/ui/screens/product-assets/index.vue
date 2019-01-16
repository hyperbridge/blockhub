<template>
    <div class="row">
        <!--I don't know if we need this-->
        <!--<div class="col-12 d-flex justify-content-between flex-wrap assets-list margin-bottom-30">-->
            <!--<div class="assets-list__item-container">-->
                <!--<c-assets-list-item></c-assets-list-item>-->
            <!--</div>-->
        <!--</div>-->
        <div class="col-12">
            <c-assets-grid :list="product.meta.assets" />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        components: {
            'c-tags': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-assets-grid': (resolve) => require(['@/ui/components/assets-grid'], resolve),
            'c-assets-list-item': (resolve) => require(['@/ui/components/assets-list-item'], resolve)
        }
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

