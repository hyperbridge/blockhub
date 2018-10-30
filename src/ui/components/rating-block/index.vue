<template>
    <c-block title="Rating" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <div class="w-100" v-if="items.length > 0">
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
            <c-button status="outline-white" :href="fullReviewsLink" v-if="fullReviewsLink">
                See Full Reviews
            </c-button>
            <c-button status="outline-white" :href="rateGameLink" v-if="rateGameLink">
                Rate this game
            </c-button>
        </div>
        <div v-else>
            <h4>No reviews yet.</h4>
            <button @click="$emit('goto')" class="btn btn-sm btn-outline-white">Be the first reviewer</button>
        </div>
    </c-block>
</template>

<script>
export default {
    name: 'c-rating-block',
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
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
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

</style>
