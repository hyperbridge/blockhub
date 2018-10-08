<template>
    <c-layout navigationKey="help">
        <div class="content" id="content">
            <div class="container-fluid" v-if="article">
                <h2>{{ article.title }}</h2>
                <div class="article-content">
                    <div v-html="article.text" />
                </div>
            </div>
            <div v-if="!article">
                Oh now! That article was not found!
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props:['slug'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-article-item': (resolve) => require(['@/ui/components/help/article-item'], resolve),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
            'c-list-item': (resolve) => require(['@/ui/components/help/simple-item'], resolve),
            'c-card': (resolve) => require(['@/ui/components/help/help-card.vue'], resolve),
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
