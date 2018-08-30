<template>
    <div class="curator-review">
        <img :src="review.game.img" class="curator-review__img"/>
        <div class="curator-review__header">
            <c-author :author="review.author"/>
            <span>
                <i class="fas fa-star"></i>
                <strong>{{ review.rate }}</strong>
            </span>
        </div>
        <transition name="fade-scale">
            <p v-if="read_more" :key="1">{{ review.text }}</p>
            <p v-else>{{ review.text.substring(0, 240) }}...</p>
        </transition>
        <a href="#" @click.prevent="read_more = !read_more">
            {{ read_more ? 'SHOW LESS' : 'MORE...' }}
        </a>
        <h4 class="curator-review__more-header">More curated by {{ review.author.name }}</h4>
        <ul class="more_reviews">
            <li
                v-for="(sub_review, index) in review.more_reviews"
                :key="index"
                class="sub-review"
            >
                <img :src="sub_review.game.img" class="sub-review__img"/>
                <div class="sub-review__details">
                    <h5 class="margin-bottom-5">
                        <a href="#">{{ sub_review.game.title }}</a>
                    </h5>
                    <div><c-rating-stars :number="sub_review.rate"/></div>
                </div>
            </li>
        </ul>
        <c-button>
            <strong>VIEW CURATOR PAGE</strong>
        </c-button>
    </div>
</template>

<script>
export default {
    name: 'curator-review',
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-author': () => import('@/ui/components/author'),
        'c-rating-stars': () => import('@/ui/components/rating-stars')
    },
    data() {
        return {
            read_more: false
        }
    }
}
</script>

<style lang="scss" scoped>
.curator-review {
    position: relative;
    background-color: #1C1F31;
    box-sizing: border-box;
    padding: 10px;
    margin: 5px;
    border-radius: 4px;
    &__ {
        &img {
            width: 100%;
            max-height: 120px;
            border-radius: 4px;
            object-fit: cover;
        }
        &header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0;
        }
        &more-header {
            margin-top: 25px;
        }
    }
}

.more_reviews {
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style-type: none;
}

.sub-review {
    display: flex;
    align-items: center;
    margin: 7px 0;
}

.sub-review__img {
    object-fit: cover;
    width: 50%;
    max-height: 80px;
    border-radius: 4px;
}

.sub-review__details {
    padding: 0 10px;
    box-sizing: border-box;
}

.fade-scale-enter-active, .fade-scale-leave-active {
    transition: opacity .2s ease, transform .5s ease;
}

.fade-scale-leave-active {
    position: absolute;
}

.fade-scale-enter, .fade-scale-leave-to {
    opacity: 0;
    transform: scale(.9);
}
</style>

