<template>
    <Layout navigationKey="store">
        <div class="row justify-content-center margin-bottom-50">
            <div class="col-12 col-md-4 col-lg-3">
                <TopicItem
                    :to="`/community/forums`"
                    size="lg"
                    icon="users"
                    class="padding-10">
                    Forums
                </TopicItem>
            </div>
            <div class="col-12 col-md-4 col-lg-3">
                <TopicItem
                    :to="`/projects`"
                    icon="hand-holding-heart"
                    size="lg"
                    class="padding-10">
                    Crowdfunds
                </TopicItem>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Communities | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: 'BlockHub communities are places for the gaming community to gather' },
                { hid: 'keywords', name: 'keywords', content: 'community, forums, chat, social, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'TopicItem': () => import('@ericmuyser/hyper-ui').then(m => m.TopicItem)
    }
}
</script>

<style lang="scss" scoped>
</style>
