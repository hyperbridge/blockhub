<template>
    <div class="tags">
        <router-link
            v-for="(tag, index) in tags"
            :key="index"
            :to="{ path: '/search', query: { tags: [tag] }}"
            class="tags__link">
            {{ tag }}
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .tags {
        margin-bottom: 25px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .tags__link {
        background: #fbe17d;
        border-radius: 3px;
        padding: 0px 5px;
        margin-right: 8px;
        margin-bottom: 8px;
        height: 20px;
        color: #000;
        text-transform: lowercase;
        font-size: 13px;
        font-weight: bold;
        &:hover {
            text-decoration: none;
            background: #d8c26c;
        }
        &:last-child {
            margin: 0;
        }
    }
</style>
