<template>
    <c-layout navigationKey="help">
            <div class="container-fluid" v-if="article">
                <h2>{{ article.title }}</h2>
                <div class="article-content">
                    <div v-html="article.text" />
                </div>
            </div>
            <div v-if="!article">
                Oh no, that post wasn't found! Would you <a href="/#/post/create">like to create it</a>?
            </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id', 'slug'],
        components: {
            'c-article-item': (resolve) => require(['@/ui/components/help/article-item'], resolve),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
            'c-list-item': (resolve) => require(['@/ui/components/help/simple-item'], resolve),
            'c-card': (resolve) => require(['@/ui/components/help/help-card.vue'], resolve),
        },
        computed: {
            article: function () {
                let result,
                    data,
                    key = 'slug';

                data = this.$store.state.marketplace.help.articles

                for (let i = 0; i < data.length; i++) {
                    if (data[i][key].includes(this.slug)) {
                        result = data[i]
                    }
                }

                return result;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
