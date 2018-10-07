<template>
    <c-layout navigationKey="help">
        <div class="content" id="content">
            <div class="page-heading">
                <div class="page-heading__container">
                    <h1 class="title">Token</h1>
                    <p class="caption">Let us know if you need further help.</p>
                </div>
                <c-heading />
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <p>What is HBX?</p>
                        <p>
                            Built by Hyperbridge, HBX tokens are used to fuel the decentralized protocols underlying BlockHub. 
                            BlockHub is the first economy built on these protocols. HBX tokens will let you:
                        
                            <ul>
                                <li>* Utilize the funding protocol to contribute to crowdfund projects</li>
                                <li>* Receive 10% discount on all transactions</li>
                            </ul>

                            For the game developers, if you choose to accept HBX, your fees will be reduced by 50%.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">

                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
  components: {
    'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>

</style>
