<template>
    <div class="author">
        <c-img class="author__img"
               :src="img" />
        {{ name }}
    </div>
</template>

<script>
export default {
    name: 'Author',
    props: {
        img: {
            type: String,
            required: false
        },
        name: {
            type: String,
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


