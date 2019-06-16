<template>
    <c-block
        title="Rating"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <div
            v-if="items.length > 0"
            class="w-100">
            <ul class="rating-block__list">
                <li
                    v-for="(item, index) in items"
                    :key="index">
                    <div class="rating-block__info">
                        <span class="rating-block__name">{{ item.name }}</span>
                        <span class="rating-block__number">{{ item.value }}</span>
                    </div>
                    <c-rating-stars
                        :number="item.value"
                        class="rating-block__stars" />
                </li>
            </ul>
            <c-button
                v-if="fullReviewsPath"
                status="outline-white"
                :to="fullReviewsPath">
                See Full Reviews
            </c-button>
            <c-button
                v-if="rateGamePath"
                status="outline-white"
                :to="rateGamePath">
                Rate this game
            </c-button>
        </div>
        <div v-else>
            <h4>No reviews yet.</h4>
            <c-button
                tag="button"
                status="outline-white"
                @click="$emit('goto')">
                Be the first reviewer
            </c-button>
        </div>
    </c-block>
</template>

<script>
export default {
    components: {
        'c-block': () => import('~/components/block').then(m => m.default || m),
        'c-rating-stars': resolve => require(['../rating-stars'], resolve)
    },
    props: {
        items: {
            type: [Array, Object]
        },
        fullReviewsPath: {
            type: String
        },
        rateGamePath: {
            type: String
        }
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
