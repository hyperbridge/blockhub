<template>
    <section hidden class="section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title mb-0">
                        <h3 class="title tw-5 mb-20">
                            <a href="#market">Market</a>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="btcwdgt-chart" />
                </div>
                <div class="col-lg-6 r-mt-40">
                    <div class="btcwdgt-news" />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ['list']
}
</script>
