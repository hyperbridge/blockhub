<template>
    <c-layout>
        <c-block title="BlockHub News">
            <c-news-articles :articles="articles" :index="0" />
        </c-block>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `News | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub news and what's going down in the game industry` },
                { hid: 'keywords', name: 'keywords', content: 'profiles, Ethereum, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'c-news-articles': () => import('~/components/news-list/articles').then(m => m.default || m)
    },
    computed: {
        articles() { return this.$demo ? this.$demo.world.posts.map(post => ({ ...post, url: `/post/${post.id}` })) : [] }
    },
    data: () => ({
        wallets: []
    })
}
</script>

<style lang="scss" scoped>

</style>
