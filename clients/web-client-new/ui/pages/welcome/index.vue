<template>
    <c-layout navigationKey="account" :showLeftPanel="false" :showRightPanel="false" :showShortcuts="false"></c-layout>
</template>


<script>
export default {
    created() {
        this.$store.commit('application/activateModal', 'login')
    },
    watch: {
        '$store.state.application.signedIn'(newVal) {
            // if (newVal === true) {
            //     this.$router.push({ path: '/' })
            // }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
