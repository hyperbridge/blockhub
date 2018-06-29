<template>
    <c-layout navigationKey="accountNavigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 margin-top-20">
                        <div class="widget invert">
                            <div class="widget__icon_layer widget__icon_layer--right">
                                <span class="li-window"></span>
                            </div>
                            <a class="widget__container" href="#/account/identities">
                                <div class="widget__line">
                                    <div class="widget__icon">
                                        <span class="li-window"></span>
                                    </div>
                                    <div class="widget__title">Identities</div>
                                    <div class="widget__subtitle">Count of identities</div>
                                </div>
                                <div class="widget__box widget__box--left">
                                    <div class="widget__informer">{{ identityCount }} identities</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-4 margin-top-20">
                        <div class="widget invert">
                            <div class="widget__icon_layer widget__icon_layer--right">
                                <span class="li-users"></span>
                            </div>
                            <div class="widget__container">
                                <div class="widget__line">
                                    <div class="widget__icon">
                                        <span class="li-users"></span>
                                    </div>
                                    <div class="widget__title">Users activity</div>
                                    <div class="widget__subtitle">Online operators</div>
                                </div>
                                <div class="widget__box widget__box--left">
                                    <div class="widget__informer">12 operators</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 margin-top-20">                                
                        <div class="widget invert">
                            <div class="widget__icon_layer widget__icon_layer--right">
                                <span class="li-receipt"></span>
                            </div>
                            <div class="widget__container">
                                <div class="widget__line">
                                    <div class="widget__icon">
                                        <span class="li-receipt"></span>
                                    </div>
                                    <div class="widget__title">Open payments</div>
                                    <div class="widget__subtitle">Payments summary</div>
                                </div>
                                <div class="widget__box widget__box--left">
                                    <div class="widget__informer">6 payments for $2,485.00</div>
                                </div>
                            </div>
                        </div>
                    </div>                                                        
                    <div class="col-4 margin-top-20">
                        <div class="widget invert">
                            <div class="widget__icon_layer widget__icon_layer--right">
                                <span class="li-lifebuoy"></span>
                            </div>
                            <div class="widget__container">
                                <div class="widget__line">
                                    <div class="widget__icon">
                                        <span class="li-lifebuoy"></span>
                                    </div>
                                    <div class="widget__title">Support tickets</div>
                                    <div class="widget__subtitle">Count of opened tickets</div>
                                </div>
                                <div class="widget__box widget__box--left">
                                    <div class="widget__informer">5 of 2,133</div>
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
    identityCount() {
      return Object.keys(this.$store.state.network.entities.identities).length
    }
  },
  data: () => ({
    wallets: []
  })
}
</script>

<style lang="scss" scoped>

</style>


<link rel="stylesheet" href="css/styles.css" />