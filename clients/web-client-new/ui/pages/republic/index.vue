<template>
    <c-layout>
        <div class="row">
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <c-card class="text-center">
                    <h4 class="h2">The Republic</h4>
                    <i class="fas fa-wolf-pack-battalion" />
                </c-card>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-article-item': () => import('~/components/help/article-item').then(m => m.default || m),
            'c-topic-item': () => import('~/components/help/topic-item').then(m => m.default || m),
            'c-list-item': () => import('~/components/help/simple-item').then(m => m.default || m),
            'c-card': () => import('~/components/help/help-card.vue').then(m => m.default || m),
        },
        methods: {
        },
        computed: {

        },
        created() {
            this.$store.commit('application/activateModal', 'coming-soon')
        }
    }
</script>

<style lang="scss" scoped>
</style>
