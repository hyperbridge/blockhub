<template>
    <c-layout :showLeftPanel="false"
              :showRightPanel="false"
              :showShortcuts="false"
              :slim-mode="true"
              headerText="BlockHub" />
</template>

<script>
export default {
    created() {
        this.$store.commit('application/activateModal', 'unlock')
    }
}
</script>
