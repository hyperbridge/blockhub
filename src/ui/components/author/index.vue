<template>
    <span class="author">
        <c-img class="author__img" :src="author.img" />
        {{ author.name }}
    </span>
</template>

<script>
export default {
    name: 'author',
    props: {
        author: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.author {
    display: flex;
    align-items: center;
    &__img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }
}
</style>


