<template>
    <div class="review" :class="{ 'background-review': background, 'p-0': !background, 'margin-bottom-40': !background}">
        <div class="review__header">
            <c-img :src="review.author.img" class="review__author-img"/>
            <div class="review__author">
                <h5 class="review__author-name">{{ review.author.name }}</h5>
                <span class="review__author-date">{{ review.date | timeAgo }}</span>
            </div>
            <div class="review__rating">
                <i class="review__rating-score">{{ review.rating }}</i>
                <div>
                    <c-rating-stars :number="review.rating"/>
                    <div>
                        <strong>Played for {{ time_played }}</strong>
                    </div>
                </div>
            </div>
        </div>
        <h4>{{ review.title }}</h4>

        <transition name="fade-scale">
            <p v-if="show_more" :key="show_more">{{ review.text }}</p>
            <p v-else>{{ review.text.substring(0, 200) }}</p>
        </transition>

        <transition name="fade-scale">
            <div class="review__user-setup" v-if="show_more">
                <div
                    v-for="(param, index) in setup_params"
                    :key="index"
                    class="param"
                >
                    <strong class="param-title">{{ param }}</strong>
                    {{ review.setup[param.toLowerCase()] }}
                </div>
            </div>
        </transition>

        <div class="review__action">
            <span class="review__action-rate">
                <a href="#">
                    <i class="fas fa-thumbs-up up"></i>HELPFUL
                </a>
                <a href="#">
                    <i class="fas fa-thumbs-down down"></i>NOT HELPFUL
                </a>
            </span>
            <a href="#" @click.prevent="show_more = !show_more">
                {{ show_more ? 'HIDE REVIEW' : 'READ MORE...' }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'review',
    props: {
        review: {
            type: Object,
            required: true
        },
        background: {
            type: Boolean,
            default: false
        }
    },
    components: {
        'c-rating-stars': (resolve) => require(['@/ui/components/rating-stars'], resolve),
        'c-author': (resolve) => require(['@/ui/components/author'], resolve)
    },
    data() {
        return {
            show_more: false,
            setup_params: [
                'System',
                'GPU',
                'CPU',
                'RAM',
                'Storage'
            ]
        }
    },
    computed: {
        time_played() {
            const { minutes_played } = this.review;
            const hours_played = Math.floor(minutes_played / 60);

            return hours_played + 'h ' + (minutes_played - hours_played * 60) + 'm';
        }
    }
}
</script>


<style lang="scss" scoped>
.review {
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    color: #dfdfe9;
    margin-bottom: 20px;
    &.background-review{
        background-color: rgba(0, 0, 0, 0.13);
        border: 1px solid rgba(255, 255, 255, 0.13);
    }
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
}
.review__author {
    &-name {
        font-size: 14px;
        margin: 0;
    }
    &-img {
        width: 35px;
        margin-right: 10px;
    }
    &-date {
        font-size: 12px;
    }
}

.review__rating {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.review__rating-score {
    font-size: 38px;
    font-style: normal;
    font-weight: 300;
    margin-right: 10px;
    vertical-align: sub;
}

.review__date {
    margin: 10px 0 20px 0;
}

.review__user-setup {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .param {
        margin-bottom: 10px;
        padding: 5px;
    }
    .param-title {
        display: block;
        font-size: 14px;
        margin-bottom: 5px;
    }
}

.review__action {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    a {
        margin-right: 6px;
        color: #fff;
    }
    .up {
        color: #43C981;
    }
    .down {
        color: #F75D5D;
    }
    .fas {
        margin-right: 4px;
    }
}

.fade-scale-enter-active, .fade-scale-leave-active {
    transition: opacity .2s ease, transform .5s ease;
}

.fade-scale-leave-active {
    position: absolute;
}

.fade-scale-enter, .fade-scale-leave-to {
    opacity: 0;
    transform: scale(.7);
}
</style>
