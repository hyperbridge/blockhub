<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <h2>This is article page</h2>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props:['slug'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-block': () => import('@/ui/components/block'),
            'c-article-item': () => import('@/ui/components/help/article-item'),
            'c-topic-item': () => import('@/ui/components/help/topic-item'),
            'c-list-item': () => import('@/ui/components/help/simple-item'),
            'c-card': () => import('@/ui/components/help/help-card.vue'),
        },
    }
</script>

<style lang="scss" scoped>

</style>
