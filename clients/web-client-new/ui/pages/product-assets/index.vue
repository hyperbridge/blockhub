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
            'c-tags': () => import('~/components/tags').then(m => m.default || m),
            'c-assets-grid': () => import('~/components/assets-grid').then(m => m.default || m),
            'c-assets-list-item': () => import('~/components/assets-list-item').then(m => m.default || m)
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

