<template>
    <div class="card invert review">
        <div class="card-body padding-0">
            <div class="review__header">
                <c-author :author="review.author"/>
                <div class="review__rating">
                    <i class="review__rating-score">{{ review.rating }}</i>
                    <div>
                        <c-rating-stars
                            :number="review.rating"
                        />
                        <div>
                            <strong>Played for {{ time_played }}</strong>
                        </div>
                    </div>
                </div>
            </div>
            <p class="review__date">{{ review.date | timeAgo }}</p>
            <h4>{{ review.title }}</h4>

            <transition name="fade-scale">
                <p v-if="show_more" :key="show_more">{{ review.text }}</p>
                <p v-else>{{ review.text | cut_length }}</p>
            </transition>

            <transition name="fade-scale">
                <div class="review__user-setup" v-if="show_more">
                    <div
                        v-for="(param, index) in setup_params"
                        :key="index"
                        class="param"
                    >
                        <h6 class="param-title">{{ param }}</h6>
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
    </div>
</template>

<script>
export default {
    name: 'review',
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-rating-stars': () => import('@/ui/components/rating-stars'),
        'c-author': () => import('@/ui/components/author')
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
    },
    filters: {
        cut_length(val) {
            return val.length > 200 ? val.substring(0, 200) + '...' : val;
        }
    }
}
</script>


<style lang="scss" scoped>
.review {
    padding: 15px;
    box-sizing: border-box;
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
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
