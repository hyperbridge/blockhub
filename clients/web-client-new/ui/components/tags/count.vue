<template>
    <span class="tag-count" v-show="number">
        <slot>
            {{ number }}
        </slot>
    </span>
</template>

<script>
    export default {
        name: 'tag-count',
        props: ['number']
    }
</script>

<style lang="scss" scoped>
    .tag-count {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        width: 18px;
        height: 18px;
        font-size: 13px;
        text-align: center;
    }
</style>
