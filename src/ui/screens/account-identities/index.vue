<template>
    <c-layout navigationKey="accountNavigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-4" v-for="(item, index) in identities" v-bind:key="index">
                        <div class="credit-card invert">
                            <div class="row">
                                <div class="col-6 text-left">
                                    <img src="/static/img/card/mastercard.png">
                                </div>
                                <div class="col-6 text-right">
                                    <button class="btn btn-light btn-icon"><span class="fa fa-cog"></span></button>
                                </div>
                            </div>
                            <div class="row credit-card__number">
                                <div class="col-3">{{item.name}}</div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <span class="text-muted">Public Address</span><br>
                                    <strong>0x9453eD18535138Bd6037C31fd0EBCcba2b331961</strong>
                                </div>
                                <div class="col-6 text-right">
                                    <span class="text-muted">COPY</span><br>
                                    <strong>C</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  },
  computed: {
    identities() {console.log('aaa', this.$store.state.network)
      return this.$store.state.network.entities.identities
    }
  },
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>
