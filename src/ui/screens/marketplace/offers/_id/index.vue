<template>
    <div>
        <div v-if="asset" class="asset__wrapper">
            <c-img class="asset__background-img" :src="asset.image"/>
            <h1 class="asset__name">{{ asset.name }}</h1>

            <div class="asset__details">
                <c-img class="asset__img" :src="asset.image"/>
                <ul class="details__data">
                    <li class="details__list-item">
                        <span class="details__title">Game:</span>
                        {{ asset.product.name }}
                    </li>
                    <li
                        v-for="(value, prop, index) in asset.metadata"
                        :key="index"
                        class="details__list-item"
                    >
                        <span class="details__title">
                            {{ prop | space | upperFirstChar }}:
                        </span>
                        <ul
                            v-if="typeof value === 'object'"
                        >
                            <li v-for="(value, prop, index) in value" :key="index">
                                {{ prop }} : {{ value }}
                            </li>
                        </ul>
                        <template v-else>
                            {{ value }}
                        </template>
                    </li>
                </ul>
            </div>
            <span>{{ asset.price.current }}</span>
            <c-line-chart
                :data="chartData"
                :height="400"
                :options="{ maintainAspectRatio: false }"
            />

        </div>
        <p v-else>Asset with id {{ id }} doesn't exist</p>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: ['id', 'identityId'],
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
        font-size: 100px !important;
        text-shadow: 0 2px 25px rgba(1,1,1,.8);
        // z-index: -1;
        // opacity: .15;
        // position: absolute;
        // color: #000;
        // display: block;
        white-space: nowrap;
        // margin-bottom: 10px;
    }
    .asset__background-img {
        position: absolute;
        top: 0;
        z-index: -1;
        transform: scale(2);
        filter: grayscale(100%);
        opacity: .1;
    }
    .asset__img {
        border-radius: 5px;
        display: block;
    }

    .details__data {
        position: relative;
        &:before {
            position: absolute;
            content: "";
            width: 150%;
            height: 80%;
            top: 10%;
            left: -50%;
            background: linear-gradient(to right, rgba(255,255,255,.2), transparent);
            z-index: -1;
        }
    }

    .asset__details {
        display: flex;
    }

    .details__title {
        margin-right: 20px;
    }
    .details__game-icon {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 4px;
        object-position: 0 50%;
        margin-left: 5px;
    }

</style>
