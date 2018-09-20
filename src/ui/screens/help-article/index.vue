<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <h2>{{ article.title }}</h2>
                <div class="article-content">
                    <div v-html="article.text" />
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props:['slug'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-block': () => import('@/ui/components/block'),
            'c-article-item': () => import('@/ui/components/help/article-item'),
            'c-topic-item': () => import('@/ui/components/help/topic-item'),
            'c-list-item': () => import('@/ui/components/help/simple-item'),
            'c-card': () => import('@/ui/components/help/help-card.vue'),
        },
        computed:{
            article: function () {
                let results,
                    data = this.$store.state.marketplace.help.articles,
                    key = 'slug';

                for (let i = 0; i < data.length; i++) {
                    if (data[i][key].includes(this.slug)) {
                        results = data[i]
                    }
                }
                return results;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
