
<template>
    <div class="navigation" id="navigation-default">
        <h3>MY WALLETS</h3>

        <c-navigation-list />
    </div>
</template>

<script>
export default {
  name: 'default_w_user',
  components: {
    'c-navigation-list': () => import('@/ui/components/navigation/navigation-list')
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>