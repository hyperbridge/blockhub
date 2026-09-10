<template>
    <c-layout>
        <div class="row">
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <c-card class="text-center">
                    <h4 class="h2">
                        The Republic
                    </h4>
                    <i class="fas fa-wolf-pack-battalion" />
                    <template v-if="$demo">
                        <p>Explore the people and communities of BlockHub.</p>
                        <c-button to="/profiles" status="info" data-demo-republic-profiles>Browse Profiles</c-button>
                        <c-button to="/communities" status="plain">Browse Communities</c-button>
                    </template>
                </c-card>
            </div>
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
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    created() {
        if (!this.$demo) this.$store.commit('application/activeModal', 'comingSoon')
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
