<template>
    <c-block title="Rating" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <div class="w-100" v-if="items.length > 0">
            <ul class="rating-block__list">
                <li v-for="(item, index) in items" :key="index">
                    <div class="rating-block__info">
                        <span class="rating-block__name">{{ item.name }}</span>
                        <span class="rating-block__number">{{ item.value }}</span>
                    </div>
                    <c-rating-stars
                        :number="item.value"
                        class="rating-block__stars"
                    />
                </li>
            </ul>
            <c-button status="outline-white" :to="fullReviewsPath" v-if="fullReviewsPath">
                See Full Reviews
            </c-button>
            <c-button status="outline-white" :to="rateGamePath" v-if="rateGamePath">
                Rate this game
            </c-button>
        </div>
        <div v-else>
            <h4>No reviews yet.</h4>
            <c-button tag="button" @click="$emit('goto')" status="outline-white">Be the first reviewer</c-button>
        </div>
    </c-block>
</template>

<script>
export default {
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
    },
    components: {
        'c-block': () => import('~/components/block').then(m => m.default || m),
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
