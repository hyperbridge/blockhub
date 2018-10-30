<template>
    <div class="navigator-item">
        <div class="navigator-item__content">
            {{ item.id }}
            {{ isChildren && 'child' }}
        </div>
        <div>
            <navigator-item
                v-for="(item, index) in item.evolvesTo"
                :key="index"
                :item="item"
                :isChildren="true"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigator-item',
        props: {
            item: Object,
            isChildren: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .navigator-item {
        display: flex;
    }
    .navigator-item__content {
        width: 70px;
        height: 70px;
        background: red;
        margin: 30px;
    }
</style>
