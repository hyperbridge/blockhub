<template>
    <c-layout navigationKey="help">
        <div v-if="article">
            <h2>{{ article.title }}</h2>
            <div class="article-content">
                <div v-html="article.value" />
            </div>
        </div>
        <div v-if="!article">
            Oh no, that article wasn't found! Would you <c-button status="underline" @click="$store.commit('application/activateModal', 'create-article')">like to create it</c-button>?
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id', 'slug'],
        components: {
            'c-article-item': (resolve) => require(['@/components/help/article-item'], resolve),
            'c-topic-item': (resolve) => require(['@/components/help/topic-item'], resolve),
            'c-list-item': (resolve) => require(['@/components/help/simple-item'], resolve),
            'c-card': (resolve) => require(['@/components/help/help-card'], resolve),
        },
        computed: {
            article() {
                return this.$store.getters['discussions/get'](this.id)
            },
        },
        mounted() {
            this.$store.dispatch('discussions/find', {
                query: {
                    id: Number(this.id)
                }
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
