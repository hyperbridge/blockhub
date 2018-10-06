<template>
    <c-layout navigationKey="account">

    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  },
  data: () => ({
    items: []
  })
}
</script>

<style lang="scss" scoped>

</style>
