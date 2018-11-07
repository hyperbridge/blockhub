<template>
    <c-layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                    <c-card class="text-center">
                        <h4 class="h2">The Republic</h4>
                        <i class="fas fa-wolf-pack-battalion" />
                    </c-card>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-article-item': (resolve) => require(['@/ui/components/help/article-item'], resolve),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
            'c-list-item': (resolve) => require(['@/ui/components/help/simple-item'], resolve),
            'c-card': (resolve) => require(['@/ui/components/help/help-card.vue'], resolve),
        },
        methods: {
        },
        computed: {

        }
    }
</script>

<style lang="scss" scoped>
</style>
