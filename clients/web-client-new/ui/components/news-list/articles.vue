<template>
    <div
        class="tab-pane"
        :class="[ index === 0 ? 'show active' : '' ]"
        :id="`tab_${index}`"
        :aria-labelledby="`tab_${index}-tab`"
        role="tabpanel"
    >
      <ul class="home-tabs__news-list">
          <c-news-article v-for="(article, index) in articles" :key="index" :heading="article.heading" :date="article.date" :url="article.url" :content="article.content" />
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        articles: {
            type: Array,
            required: true
        },
        index: Number
    },
    components:{
        'c-news-article': () => import('~/components/news-list/article').then(m => m.default || m)
    }
}
</script>

<style lang="scss" scoped>

.tab-pane {
    padding: 15px 5px 5px;
    background: #3D3E5D;
    width: 100%;
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
