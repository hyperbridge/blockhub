<template>
    <div class="product-grid__item">
        <div class="card-body padding-0">
            <c-button
                status="none"
                :to="`/product/${product.id}`">
                <c-img
                    v-if="product.meta.images"
                    class="card-img-top"
                    :src="product.meta.images.mediumTile" />
            </c-button>
            <h4>
                {{ product.name }}
            </h4>
            <p
                class="card-text"
                hidden>
                {{ product.meta.shortDescription }}
            </p>
            <c-tags v-if="product.meta.developerTags" :tags="product.meta.developerTags.slice(0,3)" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m)
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-grid__item {
        transition: transform .3s ease;
        flex: 0 0 calc(33% - 20px);
        margin: 10px;
        box-sizing: border-box;
        padding: 7px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        &:hover {
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.05);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        }
        a {
            color: #fff;
            text-decoration: none;
            &.card-img-top {
                position: relative;
                display: block;
            }
        }
        h4 {
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
        }
        .product-tags {
            margin-top: auto;
            margin-bottom: 0;
        }
    }
</style>
