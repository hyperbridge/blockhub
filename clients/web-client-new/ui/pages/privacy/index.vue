<template>
    <c-layout navigationKey="help" :showLeftPanel="false" :showRightPanel="false">
        <div class="row">
            <div class="col-12 mb-4">
                <c-privacy-block />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-privacy-block': () => import('~/components/privacy-block').then(m => m.default || m)
  },
}
</script>

<style lang="scss" scoped>
</style>
