<template>
    <div class="author">
        <c-img class="author__img" :src="img" />
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: null,
            required: false
        },
        name: {
            type: String,
            default: null,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.author {
    display: flex;
    align-items: center;
    font-weight: bold;
    &__img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
        border-radius: 100%;
    }
}
</style>


