<template>
    <c-layout navigationKey="help" :showLeftPanel="false" :showRightPanel="false">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-4">
                        <h2>What is HBX?</h2>
                        <p>
                            Built by Hyperbridge, HBX tokens are used to fuel the decentralized protocols underlying BlockHub. 
                            BlockHub is the first economy built on these protocols. HBX tokens will let you:
                        
                            <ul>
                                <li>Utilize the funding protocol to contribute to crowdfund projects</li>
                                <li>Receive 10% discount on all transactions</li>
                            </ul>

                            For the game developers, when accepting HBX you will receive a number of benefits, including reduced fees of 50%.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" v-if="desktop_mode">
                        <p>Choose your identity to purchase with:</p>
                        <p>---profile boxs---</p>
                        <p>How many?</p>
                        <p>--input box--</p>
                        <p>Continue to Purchase</p>
                    </div>
                    <div class="col-12 text-center" v-if="!desktop_mode">
                        <c-button class="c-btn c-btn-lg btn-outline-red" href="/#/download">You must use the BlockHub app to participate.</c-button>
                        <c-download-block :minimal="true" />
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
    'c-download-block': (resolve) => require(['@/ui/components/download-block'], resolve)
  },
  computed: {
    desktop_mode() {
        return this.$store.state.application.desktop_mode;
    },
  }
}
</script>

<style lang="scss" scoped>
    .card {
        background: none !important;
        border: 0 none !important;
    }
</style>
