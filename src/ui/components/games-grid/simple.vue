<template>
    <div class="product-grid__container">
        <div class="product-grid__item" v-for="(item, index) in projects" v-bind:key="index">
            <div class="card-body padding-0">
                <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                <p class="card-text" hidden>{{ item.short_description }} </p>

                <c-tags :tags="item.author_tags"></c-tags>
            </div>
        </div>
    </div>
</template>

<script>
    import Tags from '../product-tags/index'
    export default {
        props: ['projects'],
        components:{
            'c-tags': Tags,
        }
    }
</script>

<style lang="scss" scoped>

    .product-grid__container{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .product-grid__item{
        padding: 8px 6px;
        border-radius: 5px;
        width: 32%;
        background: #27283E;
        &:hover {
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
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
