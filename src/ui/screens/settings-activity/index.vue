<template>
    <c-layout navigationKey="settings-navigation">
        <div class="content" id="content">
            Activity log...
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default'),
        'c-block-1': () => import('@/ui/components/block-1')
    },
    data() {
        return {
        }
    },
    created() {
    },
    beforeDestroy() {
    }
}
</script>

<style lang="scss" scoped>
</style>
