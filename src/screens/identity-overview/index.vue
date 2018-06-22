<template>
    <c-layout>
      ID #{{id}}
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': () => import('@/layouts/default')
  },
  props: [
    'id'
  ],
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
