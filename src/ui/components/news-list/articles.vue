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
            <div class="home-tabs__news-list">
                <c-news-article v-for="(article, index) in news.articles" :key="index" :article="article"  />
            </div>
        </div>
    </div>
</template>

<script>
import Article from '../news-list/article'

export default {
    name: 'c-news-list-articles',
    props: ['content_news'],
    components:{
        'c-news-article' : Article
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
}

</style>
