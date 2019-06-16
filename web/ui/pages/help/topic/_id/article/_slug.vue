<template>
    <c-layout navigationKey="help">
        <div v-if="article">
            <h2>{{ article.title }}</h2>
            <div class="article-content">
                <div v-html="article.value" />
            </div>
        </div>
        <div v-if="!article">
            Oh no, that article wasn't found! Would you <c-button
                status="underline"
                @click="$store.commit('application/activateModal', 'create-article')">
                like to create it
            </c-button>?
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-article-item': () => import('~/components/help/article-item').then(m => m.default || m),
        'c-topic-item': () => import('~/components/help/topic-item').then(m => m.default || m),
        'c-list-item': () => import('~/components/help/simple-item').then(m => m.default || m),
        'c-card': () => import('~/components/help/help-card').then(m => m.default || m)
    },
    props: [],
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
