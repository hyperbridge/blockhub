<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false" :showShortcuts="false" :slim-mode="true" headerText="BlockHub"></c-layout>
</template>

<script>
    export default {
        created() {
            this.$store.commit('application/activateModal', 'unlock')
        }
    }
</script>