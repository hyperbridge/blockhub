<template>
    <div class="block" :class="bClass">
        <c-heading-bar :name="title" :showArrows="false" />
        <div class="block__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'block-1',
        props: {
            title: String,
            bClass: String
        },
        components: {
            'c-heading-bar': () => import('@/ui/components/heading-bar')
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
        margin-bottom: 40px;
    }
    .block__content{
        overflow: hidden;
        width: 100%;
    }
</style>

