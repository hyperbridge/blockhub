<template>
    <c-layout navigationKey="help" :showLeftPanel="false" :showRightPanel="false">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-4">
                        <h2>Updates</h2>
                        <p>
                            <template v-for="(update,  index) in updates">
                                <div :key="index">
                                    <a :href="update.link">
                                        <span class="text">{{ update.title }}</span>
                                    </a>
                                    <span class="text">{{ update.info }}</span>
                                </div>
                            </template>
                        </p>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  },
  computed: {
    desktop_mode() {
        return this.$store.state.application.desktop_mode;
    },
    updates() {
        return this.$store.state.application.updates
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
