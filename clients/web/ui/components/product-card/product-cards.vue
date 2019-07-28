<template>
    <div class="product-grid-wrapper">
        <c-product-card-dynamic
            v-for="(product, index) in products"
            :key="index"
            :id="product.id"
            :price="product.meta.price"
            :mediumTile="product.meta.images.mediumTile"
            :video="product.meta.video"
            :shortDescription="product.meta.shortDescription"
            :previewImages="product.meta.images.review"
            :developerTags="product.meta.developerTags" />
    </div>
</template>

<script>
export default {
    components: {
        'c-product-card-dynamic': () => import('~/components/product-card/product-card-dynamic').then(m => m.default || m)
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../css/helpers/mixins.scss';

.product-grid-wrapper {
    margin-bottom: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    @include width-max-lg {
        flex-direction: column;
    }
}

@include width-min-lg {
    .product-grid-wrapper:hover {
        .product-grid__item {
            transform: translateX(-15%);
        }

        .product-grid__item:hover {
            transform: scale(1.3);
            ~ .product-grid__item {
                transform: translateX(15%);
            }
        }
    }
}
</style>

