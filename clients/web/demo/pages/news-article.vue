<template>
    <c-layout navigationKey="store">
        <c-block :title="post.heading">
            <p>{{ post.date }}</p>
            <div v-html="post.content" />
            <c-button to="/news" class="mt-4">More News</c-button>
        </c-block>
    </c-layout>
</template>
<script>
export default {
    computed: {
        post() { return this.$demo.world.posts.find(post => String(post.id) === this.$route.params.id) || this.$demo.world.posts[0] }
    }
}
</script>
