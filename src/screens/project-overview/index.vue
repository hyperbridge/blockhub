<template>
    <div> {{ product.name }}
        view: https://user-images.githubusercontent.com/156768/41747165-dfe9b3bc-7561-11e8-825c-6ffcd8ef81e6.png
        create: https://user-images.githubusercontent.com/156768/41747177-f05f5cd8-7561-11e8-9640-403ccbebbb07.png
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  props: ['id'],
  components: {
    'c-layout': () => import('@/layouts/default')
  },
  data() {
    return {
    }
  },
  computed: {
      product() { return this.$store.state.marketplace.entities.products[this.id] }
  },
  methods: {
    updateTitle () {
      const name = 'Woooooo'

      this.$store.dispatch('marketplace/updateProductTitle', { id: 'post1', name })
      this.$data.product.name = name
    }
  },
  created() {

  }
}
</script>

<style>

</style>
