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
        'c-layout': (resolve) => require(['@/ui/layouts/default']),
        'c-block-1': (resolve) => require(['@/ui/components/block'])
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
