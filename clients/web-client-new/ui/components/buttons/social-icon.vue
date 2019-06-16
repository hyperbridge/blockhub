<template>
    <a
        :href="link"
        target="_blank"
        class="social-icon"
        :class="`social-icon--size-${size}`"
        :style="`color: ${color}`">
        <i class="fab" :class="`fa-${icon}`" />
    </a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: '#'
        },
        icon: String,
        size: {
            type: String,
            default: 'md'
        },
        color: {
            type: String,
            default: '#fff'
        }
    }
}
</script>

<style lang="scss" scoped>
    .social-icon{
        opacity: .7;
        transition: all 200ms ease-in-out;
        &:hover{
            cursor: pointer;
            opacity: 1;
            transform: scale(1.1);
        }
    }
    .social-icon--size-sm{
        font-size: 14px;
    }
    .social-icon--size-md{
        font-size: 18px;
    }
    .social-icon--size-lg{
        font-size: 24px;
    }
    .social-icon--size-xl{
        font-size: 28px;
    }
</style>
