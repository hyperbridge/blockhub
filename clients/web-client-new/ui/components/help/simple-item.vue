<template>
    <div class="simple-list-item">
        <c-button status="none" :to="to" :href="link">
            <slot />
        </c-button>
    </div>
</template>

<script>
    export default {
        name: 'simple-list-item',
        props: ['to', 'link']
    }
</script>

<style lang="scss" scoped>
    .simple-list-item {
        padding: 5px 0;
        width: 100%;
        a {
            color: #fff;
        }
    }
</style>
