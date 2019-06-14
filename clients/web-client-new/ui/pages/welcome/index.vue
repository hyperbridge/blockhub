<template>
    <c-layout
        navigationKey="account"
        :showLeftPanel="false"
        :showRightPanel="false"
        :showShortcuts="false" />
</template>


<script>
export default {
    created() {
        this.$store.commit('application/activateModal', 'login')
    }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
