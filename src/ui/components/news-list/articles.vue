<template>
    <div class="tab-content">
        <div
            v-for="(news, index) in content_news"
            :key="index"
            class="tab-pane"
            :class="[ index === 0 ? 'show active' : '' ]"
            :id="`tab_${index}`"
            :aria-labelledby="`tab_${index}-tab`"
            role="tabpanel"
        >
            <ul class="home-tabs__news-list">
                <li v-for="(article, index) in news.articles" :key="index">
                    <h4>{{ article.heading }}</h4>
                    <div class="published_date mb-3">
                        Published {{ article.date | parse_date }}
                    </div>
                    <p>{{ article.content }}</p>
                    <a :href="`/${article.url}`" class="btn btn-link">
                        Read More
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'c-news-list-articles',
    props: ['content_news'],
    filters: {
        parse_date(date) {
            return moment(date).fromNow();
        }
    }
}
</script>

<style lang="scss" scoped>

.tab-pane {
    padding: 15px 5px 5px;
    background: #3D3E5D;
}

.home-tabs__news-list {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    color: #fff;
    li {
        list-style: none;
        padding: 10px;
        width: 33%;
        h4 {
            font-weight: bold;
            font-size: 18px;
            margin: 0;
            padding: 0;
            color: #fff;
        }
        a {
            padding: 0;
            margin-top: auto;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
        }

    }
}

</style>
