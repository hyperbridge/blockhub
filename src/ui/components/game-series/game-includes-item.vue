
<template>
    <div class="game-includes__item">
        <c-img :src="item.images.medium_tile" />
        <h4>{{ item.name }}</h4>
        <p>{{ item.developer }}</p>
        <div class="rating-stars">
            <c-rating :number="item.stars" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'game-includes-item',
        props:{
            item: Object
        },
        components: {
            'c-rating': (resolve) => require(['@/ui/components/rating-stars'], resolve),
        },
    }
</script>

<style lang="scss" scoped>
    .game-includes__item{
        display: flex;
        flex-direction: column;
        max-width: 350px;
        color: #fff;
        width: 100%;
        min-width: 140px;
        img{
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            border-radius: 3px;
        }
        h4{
            color: #fff;
            font-size: 18px;
            margin: 0 0 3px;
            font-weight: bold;
        }
        .rating-stars{
            margin-top: auto;
        }
    }
</style>
