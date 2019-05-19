<template>
    <c-layout>

    </c-layout>
</template>

<script>
export default {
  components: {
  },
  components: {
    'c-layout': () => import('~/layouts/default').then(m => m.default || m)
  },
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
