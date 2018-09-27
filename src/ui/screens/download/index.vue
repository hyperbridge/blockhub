<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-4">
                        <c-download-block />
                    </div>
                    <div class="col-4">
                        <div class="card invert py-3">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase">
                                    Inter-Game Trading
                                </h4>
                                <p>
                                    Trade your FPS skins
                                    for the best sword in
                                    your favorite MMORPG
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card invert py-3">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase">
                                    Empower Creators
                                </h4>
                                <p>
                                    Know a nice game project?<br>
                                    Help the develpment get crowdfunded
                                    on BlockHub
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card invert py-3">
                            <div class="card-body text-center">
                                <h4 class="text-uppercase">
                                    New Economies
                                </h4>
                                <p>
                                    Participate in new
                                    microeconomies using
                                    blockchain technology
                                </p>
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
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-download-block': (resolve) => require(['@/ui/components/download-block'], resolve)
        },
        mounted() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/download-bg.png)'
        }
    }
</script>

<style lang="scss" scoped>

</style>
