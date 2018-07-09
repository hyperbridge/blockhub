<template>
        <div class="product-tags">
            <a href="#" v-for="(tag, index) in tags"
               v-bind:key="index"
               class="product-tags__link"
               @click="filterTag(tag)">{{ tag }}</a>
        </div>
</template>

<script>
    export default {
        props: ['tags'],
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
    }
    .product-tags__link {
        background: #fbe17d;
        border-radius: 3px;
        padding: 2px 5px;
        margin-right: 8px;
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
