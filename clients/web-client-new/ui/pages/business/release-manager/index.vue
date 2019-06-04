<template>
    <c-layout title="Release manager">
        Release manager
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/business-layout').then(m => m.default || m)
    },
    data() {
        return {
            loadingState: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .history-list {
        display: flex;
        flex-direction: column;
        margin: 30px 0;
        border-top: 1px solid #d4d4d4;
    }

    .history-list__item {
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
    }

    .history-list__item-date {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 20px 20px 20px 0;
        margin-right: 20px;
        width: 150px;
        font-size: 14px;
        border-right: 2px solid #d4d4d4;
    }

    .history-list__item-info {
        padding: 20px 0;
    }
</style>
