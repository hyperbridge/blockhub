<template>
    <c-layout navigationKey="help" :showLeftPanel="false" :showRightPanel="false">
        <div class="row">
            <div class="col-12 mb-4">
                <c-terms-block />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-terms-block': (resolve) => require(['@/components/terms-block'], resolve)
    },
}
</script>

<style lang="scss" scoped>
</style>
