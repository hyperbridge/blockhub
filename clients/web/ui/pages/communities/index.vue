<template>
    <c-layout navigationKey="store">
        <div class="row justify-content-center margin-bottom-50">
            <div class="col-12 col-md-4 col-lg-3">
                <c-topic-item
                    :to="`/community/forums`"
                    size="lg"
                    icon="users"
                    class="padding-10">
                    Forums
                </c-topic-item>
            </div>
            <div class="col-12 col-md-4 col-lg-3">
                <c-topic-item
                    :to="`/projects`"
                    icon="hand-holding-heart"
                    size="lg"
                    class="padding-10">
                    Crowdfunds
                </c-topic-item>
            </div>
        </div>
    </c-layout>
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
        'c-topic-item': () => import('~/components/help/topic-item').then(m => m.default || m)
    }
}
</script>

<style lang="scss" scoped>
</style>
