<template>
    <div class="col-12 col-lg-4">
        <div class="card invert product-grid__item">
            <div class="card-body padding-0">
                <a :href="`/#/product/${game.id}`"><img class="card-img-top" :src="game.images.medium_tile" /></a>
                <h4><a :href="`/#/product/${game.id}`">{{ game.name }}</a></h4>
                <p class="card-text" hidden>{{ game.short_description }} </p>
                <c-tags :tags="game.author_tags.slice(0,3)" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'game-card',
    props: {
        game: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-tags': () => import('@/ui/components/product-tags')
    }
}
</script>

<style lang="scss" scoped>
    .product-grid__item {
        padding: 8px 6px;
        border-radius: 5px;
        &:hover {
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        }
        h4 {
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
        .product-tags {
            margin-top: 10px;
            margin-bottom: 0;
        }
    }
</style>
