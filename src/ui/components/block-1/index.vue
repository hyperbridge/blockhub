<template>
    <div class="block" :class="bClass">
        <c-heading-bar :name="title" :showArrows="false" />
        <div class="block__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import HeadingBar from '../heading-bar/index'
export default {
    props: ['title', 'bClass'],
    components: {
        'c-heading-bar': HeadingBar
    }
}
</script>

<style lang="scss" scoped>
    .block {
        padding: 15px 20px 20px;
        background: rgba(0, 0, 0, .16);
        border-radius: 5px;
        position: relative;
        color: #fff;
        overflow: hidden;
    }
    .block__content{
        overflow: hidden;
        width: 100%;
    }
</style>

