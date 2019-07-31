<template>
    <Layout navigationKey="help">
        <div v-if="article">
            <h2>{{ article.title }}</h2>
            <div class="article-content">
                <div v-html="article.value" />
            </div>
        </div>
        <div v-if="!article">
            Oh no, that article wasn't found! Would you <Button
                status="underline"
                @click="$store.commit('application/activeModal', 'createArticle')">
                like to create it
            </Button>?
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'ArticleItem': () => import('@ericmuyser/hyper-ui').then(m => m.ArticleItem),
        'TopicItem': () => import('@ericmuyser/hyper-ui').then(m => m.TopicItem),
        'ListItem': () => import('@ericmuyser/hyper-ui').then(m => m.ListItem),
        'Card': () => import('@ericmuyser/hyper-ui').then(m => m.Card)
    },
    computed: {
        article() {
            return this.$store.getters['discussions/get'](this.$route.params.id)
        }
    },
    mounted() {
        this.$store.dispatch('discussions/find', {
            query: {
                id: Number(this.$route.params.id)
            }
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
