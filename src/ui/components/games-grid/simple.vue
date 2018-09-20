<template>
    <div class="product-grid__container">
        <div class="product-grid__item-container"
             v-if="items"
             v-for="(item, index) in items"
             v-bind:key="index"
             :style="{ width: 'calc( 100% / ' + itemInRow + ')'}"
        >
            <div class="product-grid__item">
                <div class="card-body padding-0">
                    <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                    <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                    <p class="card-text" hidden>{{ item.short_description }} </p>
                    <c-tags :tags="item.author_tags"></c-tags>
                </div>
            </div>
        </div>
        <div v-else class="text-white">
            Nothing to show
        </div>
    </div>
</template>

<script>
export default {
    name: 'games-grid',
    props: {
        items: Array,
        itemInRow:{
            default: '4'
        }
    },
    components: {
        'c-tags': (resolve) => require(['@/ui/components/tags'])
    }
}
</script>

<style lang="scss" scoped>

    .product-grid__container{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    .product-grid__item-container{
        padding: 0 4px;
        margin-bottom: 10px;
    }
    .product-grid__item{
        padding: 8px 6px;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background: #27283E;
        box-shadow: 0 0 6px rgba(0, 0, 0, .2);
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1);
        transition: all 200ms ease-in;
        transform: scale(1);
        position: relative;
        z-index: 10;
        &:hover {
            -webkit-transition: all 200ms ease-in;
            -webkit-transform: scale(1.05);
            -ms-transition: all 200ms ease-in;
            -ms-transform: scale(1.05);
            -moz-transition: all 200ms ease-in;
            -moz-transform: scale(1.05);
            transition: all 200ms ease-in;
            transform: scale(1.05);
            z-index: 20;
        }
        h4{
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
            a{
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
