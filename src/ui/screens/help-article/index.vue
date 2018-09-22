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
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-article-item': (resolve) => require(['@/ui/components/help/article-item'], resolve),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
            'c-list-item': (resolve) => require(['@/ui/components/help/simple-item'], resolve),
            'c-card': (resolve) => require(['@/ui/components/help/help-card.vue'], resolve),
        },
    }
</script>

<style lang="scss" scoped>

</style>
