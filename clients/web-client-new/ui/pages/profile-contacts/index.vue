<template>
    <c-layout>

    </c-layout>
</template>

<script>
export default {
  components: {
  },
  components: {
    'c-layout': (resolve) => require(['@/layouts/default'], resolve)
  },
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
