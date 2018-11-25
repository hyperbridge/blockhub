<template>
    <c-layout navigationKey="project">
                <div class="row">
                    <div class="col-12">
                    </div>
                </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  }
}
</script>

<style lang="scss" scoped>

</style>
