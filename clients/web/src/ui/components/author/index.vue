<template>
    <div class="author">
        <c-img class="author__img" :src="dnUser.img"/>
        {{ dnUser.name }}
    </div>
</template>

<script>
export default {
    name: 'author',
    props: {
        author: {
            type: Object,
            required: false
        },
        user: {
            type: Object,
            required: false
        }
    },
    computed: {
        dnUser() {
            return this.author || this.user;
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


