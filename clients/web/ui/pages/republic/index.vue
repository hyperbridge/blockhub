<template>
    <Layout>
        <div class="row">
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <Card class="text-center">
                    <h4 class="h2">
                        The Republic
                    </h4>
                    <i class="fas fa-wolf-pack-battalion" />
                </Card>
            </div>
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
        id() {
            return this.$route.params.id
        }
    },
    created() {
        this.$store.commit('application/activeModal', 'comingSoon')
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
