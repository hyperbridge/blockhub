<template>
    <c-layout
        navigationKey="account"
        :showLeftPanel="false"
        :showRightPanel="false"
        :showShortcuts="false" />
</template>


<script>
export default {
    watch: {
        '$store.state.application.signedIn'(newVal) {
            // if (newVal === true) {
            //     this.$router.push({ path: '/' })
            // }
        }
    },
    created() {
        this.$store.commit('application/activateModal', 'login')
    }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
