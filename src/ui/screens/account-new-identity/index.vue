<template>
    <c-layout navigationKey="account-navigation">

    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'])
  },
  data: () => ({
    items: []
  })
}
</script>

<style lang="scss" scoped>

</style>
