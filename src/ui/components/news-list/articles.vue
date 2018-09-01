<template>
    <div
        class="tab-pane"
        :class="[ index === 0 ? 'show active' : '' ]"
        :id="`tab_${index}`"
        :aria-labelledby="`tab_${index}-tab`"
        role="tabpanel"
    >
      <ul class="home-tabs__news-list">
          <c-news-article v-for="(article, index) in news.articles" :key="index" :article="article" />
      </ul>
  </div>
</template>

<script>
export default {
    name: 'c-news-list-articles',
    props: {
        news: Object,
        index: Number
    },
    components:{
        'c-news-article': () => import('@/ui/components/news-list/article')
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
