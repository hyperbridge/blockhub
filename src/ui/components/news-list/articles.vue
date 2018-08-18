<template>
    <div
        class="tab-pane"
        :class="[ index === 1 ? 'show active' : '' ]"
        :id="`tab_${index}`"
        :aria-labelledby="`tab_${index}-tab`"
        role="tabpanel"
    >
      <ul class="home-tabs__news-list">
          <li v-for="(article, index) in news.articles" :key="index">
              <h4>{{ article.heading }}</h4>
              <div class="published_date mb-3">
                  Published {{ article.date | timeAgo }}
              </div>
              <p>{{ article.content }}</p>
              <a :href="`/${article.url}`" class="btn btn-link">
                  Read More
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'c-news-list-articles',
    props: ['news', 'index']
}
</script>

<style lang="scss">
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
    li {
        list-style: none;
        padding: 10px;
        width: 33%;
        h4 {
            font-weight: bold;
            font-size: 18px;
            margin: 0;
            padding: 0;
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
