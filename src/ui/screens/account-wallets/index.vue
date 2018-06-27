<template>
    <c-layout navigationKey="accountNavigation">
        <div class="content" id="content">
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Wallets</h1>
                    <p class="caption">List of your wallets</p>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-10"> 
                        <div class="row">
                            <div class="col-12 col-lg-4" v-for="(item, index) in wallets" v-bind:key="index">
                                <a class="credit-card invert" :href="`/#/wallet/${item.id}`">
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
                                        <div class="col-3">53**</div>
                                        <div class="col-3">****</div>
                                        <div class="col-3">**21</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <span class="text-muted">Card holder</span><br>
                                            <strong>John Doe</strong>
                                        </div>
                                        <div class="col-6 text-right">
                                            <span class="text-muted">Expiration</span><br>
                                            <strong>09/20</strong>
                                        </div>
                                    </div>
                                </a>
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
  name: 'wallets',
  components: {
    'c-layout': () => import('@/ui/layouts/default')
  },
  computed: {
    wallets() {
      return this.$store.state.network.entities.wallets
    }
  },
  data: () => ({}),
  created() {
  }
}
</script>
