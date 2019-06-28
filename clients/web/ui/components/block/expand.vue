<template>
    <div class="expand-block">
        <c-img
            v-if="image"
            :src="image"
            class="expand-block__img" />
        <div class="expand-block__header">
            <span
                v-if="title"
                class="title">
                <c-img
                    v-if="icon"
                    class="title__img"
                    :src="icon" />
                {{ title }}
            </span>
            <span
                v-if="rating"
                style="font-size: 22px">
                <i class="fas fa-star" />
                <strong>{{ rating }}</strong>
            </span>
        </div>
        <transition name="fade-scale">
            <p
                v-if="expanded"
                :key="1"
                v-html="content">
                {{ content }}
            </p>
            <p v-else>
                {{ description }}...
            </p>
        </transition>
        <a
            href="#"
            class="text-white font-weight-bold"
            @click.prevent="expanded = !expanded">
            {{ expanded ? 'SHOW LESS' : 'MORE...' }}
        </a>
        <h4
            v-if="relatedText"
            class="expand-block__more-header">
            {{ relatedText }}
        </h4>
        <ul
            v-if="relatedItems"
            class="related">
            <li
                v-for="(item, index) in relatedItems"
                :key="index"
                class="related__item">
                <c-img
                    :src="item.image"
                    class="related__item__img" />
                <div class="related__item__details">
                    <h5 class="margin-bottom-5">
                        <a
                            href="#"
                            class="text-white font-weight-bold">{{ item.title }}</a>
                    </h5>
                    <div class="text-white font-weight-bold">
                        <span style="font-size: 22px">{{ item.rating }}</span>
                    </div>
                </div>
            </li>
        </ul>
        <c-button v-if="actionText">
            <strong>{{ actionText }}</strong>
        </c-button>
    </div>
</template>

<script>
export default {
    name: 'ExpandBlock',
    components: {
        'c-rating-stars': () => import('~/components/rating-stars').then(m => m.default || m),
        'c-button': () => import('~/components/buttons/wide').then(m => m.default || m),
        'c-heading-bar-color': () => import('~/components/heading-bar/simple-colored').then(m => m.default || m)
    },
    props: {
        image: String,
        icon: String,
        title: String,
        description: String,
        rating: Number,
        content: String,
        actionText: String,
        relatedItems: {
            type: Array,
            default: () => []
        },
        relatedText: String
    },
    data() {
        return {
            expanded: false
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    align-items: center;
    font-weight: bold;
    &__img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
        border-radius: 100%;
    }
}
.expand-block {
    position: relative;
    background-color: #1C1F31;
    box-sizing: border-box;
    padding: 10px;
    margin: 5px;
    border-radius: 4px;
    color: #fff;
    min-width: 275px;
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
            .author{
                font-size: 22px;
                font-weight: bold;
            }
        }
        &more-header {
            margin-top: 25px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
        }
    }
    p{
        white-space: normal;
    }
}

.related {
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style-type: none;
}

.related__item {
    display: flex;
    margin: 7px 0;
    align-items: flex-start;
}

.related__item__img {
    object-fit: cover;
    width: 45%;
    max-height: 80px;
    height: 100%;
    min-height: 60px;
    border-radius: 4px;
}

.related__item__details {
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

