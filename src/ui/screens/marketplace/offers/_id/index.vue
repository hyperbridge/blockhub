<template>
    <div>
        <div v-if="asset" class="asset__wrapper">
            <h1 class="asset__name">{{ asset.name }}</h1>

            <c-line-chart
                :data="chartData"
                :height="400"
                :options="{ maintainAspectRatio: false }"
            />

            <div>
                <c-img :src="asset.image"/>
            </div>



        </div>
        <p v-else>Asset with id {{ id }} doesn't exist</p>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: ['id'],
        data() {
            return {
                priceHistory: Array.from({ length: 100 }, (x, i) =>
                    Math.round(Math.random() * (i + 1))
                ),
                priceDates: Array.from({ length: 100 }, (x, i) =>
                    moment().add(-100 + i, 'days').format('DD / MM')
                )
            }
        },
        components: {
            'c-line-chart': (resolve) => require(['@/ui/components/charts/line'], resolve),
        },
        computed: {
            asset() {
                return this.$store.getters['assets/assets'][this.id];
            },
            chartData() {
                const { priceDates, priceHistory } = this;
                return {
                    labels: priceDates,
                    datasets: [{
                        label: 'Price history',
                        data: priceHistory,
                        backgroundColor: '#83D0F2'
                    }]
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
    .asset__wrapper {
        position: relative;
    }
    .asset__name {
        font-size: 110px !important;
        z-index: -1;
        opacity: .15;
        position: absolute;
        color: #000;
        // display: block;
        white-space: nowrap;
    }
    .canv-bord {
        border: 1px solid #fff;
    }
</style>
