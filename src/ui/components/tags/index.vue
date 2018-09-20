<template>
    <div class="product-tags" v-if="tags">
        <a
            v-for="(tag, index) in tags"
            :href="`/#/store/tag/${tag}`"
            :key="index"
            @click="filterTag(tag)"
            class="product-tags__link"
        >
            {{ tag }}
        </a>
    </div>
</template>

<script>
export default {
    name: 'tags',
    props: {
        tags: Array
    },
    methods: {
        filterTag(tagName) {
            alert(tagName)
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-tags {
        margin-bottom: 25px;
        display: flex;
        flex-wrap: wrap;
    }
    .product-tags__link {
        background: #fbe17d;
        border-radius: 3px;
        padding: 2px 5px;
        margin-right: 8px;
        margin-bottom: 8px;
        height: 24px;
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
