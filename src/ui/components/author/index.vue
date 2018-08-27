<template>
    <span class="author">
        <img class="author__img" :src="author.img" />
        <strong class="author__name">{{ author.name }}</strong>
        <slot />
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
    &__ {
        &name {
            font-size: 16px;
        }
        &img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
        }
    }

}
</style>


