<template>
    <div class="products-grid-wrapper">
        <c-product-card-dynamic
            v-for="(product, index) in products"
            :key="index"
            :product="product"
        />
    </div>
</template>

<script>
export default {
    name: 'products-cards',
    components: {
        'c-product-card-dynamic': (resolve) => require(['@/ui/components/store/product-card-dynamic'], resolve)
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
@import '@/css/helpers/mixins.scss';

.products-grid-wrapper {
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
    .products-grid-wrapper:hover {
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

