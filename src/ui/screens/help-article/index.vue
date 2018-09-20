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
            'c-layout': (resolve) => require(['@/ui/layouts/default']),
            'c-block': (resolve) => require(['@/ui/components/block']),
            'c-article-item': (resolve) => require(['@/ui/components/help/article-item']),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item']),
            'c-list-item': (resolve) => require(['@/ui/components/help/simple-item']),
            'c-card': (resolve) => require(['@/ui/components/help/help-card.vue']),
        },
    }
</script>

<style lang="scss" scoped>

</style>
