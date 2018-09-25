<template>
    <div class="card invert rating-block">
        <div class="card-body" v-if="items.length > 0">
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
            <a :href="fullReviewsLink" class="btn btn-outline-white" v-if="fullReviewsLink">See Full Reviews</a>
            <a :href="rateGameLink" class="btn btn-outline-white" v-if="rateGameLink">Rate the game</a>
        </div>
        <div class="card-body" v-else>
            <h2 class="title">Rating</h2>
            <h4>No ratings yet.</h4>
            <button @click="$emit('goto')" class="btn btn-sm btn-outline-white">Be the first!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rating-block',
    props: {
        items: {
            type: Array
        },
        fullReviewsLink: {
            type: String
        },
        rateGameLink: {
            type: String
        }
    },
    components: {
        'c-rating-stars': (resolve) => require(['../rating-stars'], resolve)
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
    button.btn-outline-white {
        font-size: 12px;
        text-transform: uppercase;
        color: #fff;
        background: transparent;
        border: 1px solid #fff;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
        float: left;
        line-height: 24px;
        padding: 0 8px;
        width: auto;
        margin: 5px 10px 3px 0;
        &:hover{
            color: #000;
            background: #fff;
        }
    }

</style>
