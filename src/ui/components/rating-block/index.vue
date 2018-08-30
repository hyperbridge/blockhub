<template>
    <div class="card invert rating-block" v-if="items">
        <div class="card-body">
            <h2 class="title">Rating</h2>
            <ul class="rating-block__list">
                <li v-for="(item, index) in items" :key="index">
                    <div class="rating-block__info">
                        <span class="rating-block__name">{{ item.name }}</span>
                        <span class="rating-block__number">{{ item.number }}</span>
                    </div>
                    <c-rating-stars
                        :number="item.number"
                        class="rating-block__stars"
                    />
                </li>
            </ul>
            <a :href="fullReviewsLink" class="btn btn-outline-white">See Full Reviews</a>
            <a :href="rateGameLink" class="btn btn-outline-white">Rate the game</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rating-block',
    props: {
        items: {
            type: Array,
            required: true
        },
        fullReviewsLink: {
            type: String,
            required: true
        },
        rateGameLink: {
            type: String,
            required: true
        }
    },
    components: {
        'c-rating-stars': () => import('../rating-stars')
    }
}
</script>

<style lang="scss" scoped>

    .rating-block__list {
        padding: 0;
        li {
            list-style: none;
            display: block;
            overflow: hidden;
            font-size: 14px;
            margin-bottom: 8px;
            color: #fff;
        }
    }

    .rating-block__info {
        display: inline-block;
        float: left;
        width: calc(100% - 90px);
    }

    .rating-block__name {
        float: left;
        width: 80%;
        font-weight: bold;
    }

    .rating-block__number {
        float: right;
        width: 20%;
        text-align: right;
    }

    .rating-block__stars {
        float: right;
        text-align: left;
        width: 80px;
    }

</style>
