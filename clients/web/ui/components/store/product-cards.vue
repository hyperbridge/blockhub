<template>
    <div class="product-grid-wrapper">
        <c-product-card-dynamic
            v-for="(product, index) in products"
            :key="index"
            :productId="product.id"
            :productPrice="product.price"
            :productImagesMediumTile="product.images.mediumTile"
            :productVideo="product.video"
            :productShortDescription="product.shortDescription"
            :productImagesPreview="product.images.review"
            :productDeveloperTags="product.developerTags" />
    </div>
</template>

<script>
export default {
    components: {
        'c-product-card-dynamic': () => import('~/components/store/product-card-dynamic').then(m => m.default || m)
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

