<template>
    <c-layout>

    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': () => import('~/layouts/default').then(m => m.default || m)
  },
  data: () => ({
    items: []
  })
}
</script>

<style lang="scss" scoped>

</style>
