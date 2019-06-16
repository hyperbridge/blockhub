<template>
    <div class="pricing-table-v3">
        <div class="pricing-table-v3__container">
            <div class="pricing-table-v3__fixed-panel">

            </div>
            <div class="pricing-table-v3__content">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {}
    }
</script>

<style lang="scss" scoped>
    .pricing-table-v3{
        &__container{
            position: relative;
            padding-left: 200px;
            background: #1d1d2e;
        }
        &__fixed-panel{
            position: absolute;
            left: 0;
            bottom: 0;
            top: 0;
            width: 200px;
            padding: 20px;
            z-index: 4;
            ul{
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
            }
        }

    }
</style>
