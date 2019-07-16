<template>
    <div>
        <div
            v-if="asset"
            class="asset__wrapper">
            <c-img
                class="asset__background-img"
                :src="asset.image" />
            <h1 class="asset__name">
                {{ asset.value }}
            </h1>

            <div class="asset__details">
                <c-img
                    class="asset__img"
                    :src="asset.image" />
                <ul class="details__list">
                    <li class="details__list-item">
                        <span class="details__title">Game:</span>
                        {{ asset.product.name }}
                    </li>
                    <li class="details__list-item">
                        <span class="details__title">Type:</span>
                        {{ asset.metadata.type }}
                    </li>
                    <li class="details__list-item">
                        <span class="details__title">Average Price:</span>
                        14 $
                    </li>
                    <li class="details__list-item">
                        <span class="details__title">Maximum Price:</span>
                        {{ priceHistorySorted[0] }} $
                    </li>
                    <li class="details__list-item">
                        <span class="details__title">Minimum Price:</span>
                        {{ priceHistorySorted[priceHistory.length-1] }} $
                    </li>
                    <li class="details__list-item">
                        <span class="details__title">Sold in 24hrs:</span>
                        412
                    </li>
                </ul>
            </div>
            <c-line-chart
                :data="chartData"
                :options="chartOptions"
                :height="400" />

            <h2
                key="offers"
                class="offers__title">
                {{ $route.name === 'Marketplace Asset Offers'
                    ? 'Offers'
                    : 'Offer bids'
                }}
            </h2>

            <nav class="back-btn">
                <nuxt-link
                    v-show="$route.name === 'Marketplace Asset Offer'"
                    :to="{ name: 'Marketplace Asset Offers' }">
                    <c-icon name="arrow-left" />
                    Go back
                </nuxt-link>
            </nav>

            <div class="offers-route">
                <transition name="slide">
                    <router-view
                        :offersMap="offersMap"
                        :asset="asset"
                        :profile="profile" />
                </transition>
            </div>
        </div>
        <p v-else>
            Asset with id {{ id }} doesn't exist
        </p>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        'c-line-chart': () => import('~/components/charts/line').then(m => m.default || m),
        'c-user': () => import('~/components/user/simple').then(m => m.default || m)
    },
    props: ['assetId', 'profileId'],
    data() {
        return {
            priceHistory: Array.from({ length: 100 }, (x, i) =>
                Math.round(Math.random() * (i + 1))),
            priceDates: Array.from({ length: 100 }, (x, i) =>
                moment().add(-100 + i, 'days').format('DD / MM')),
            chartOptions: {
                maintainAspectRatio: false
                // scales: {
                //     xAxes: [{ gridLines: { display: false } }],
                //     yAxes: [{ gridLines: { display: false } }]
                // }
            }
        }
    },
    computed: {
        asset() {
            return this.$store.getters['assets/assets'][this.assetId]
        },
        chartData() {
            const { priceDates, priceHistory } = this
            return {
                labels: priceDates,
                datasets: [{
                    label: 'Price history',
                    data: priceHistory,
                    backgroundColor: '#83D0F2'
                }]
            }
        },
        priceHistorySorted() {
            return [...this.priceHistory].sort()
        },
        offersMap() {
            return this.$store.getters['assets/offersMap']
                .filter(([id, offer]) => offer.asset.id == this.assetId)
        },
        profile() {
            return this.$store.state.application.activeProfile
        }
    }
}
</script>

<style lang="scss" scoped>
    .back-btn {
        min-height: 36px;
        a {
            font-size: 16px;
            color: #fff;
            padding: 8px;
            display: block;
            .fas {
                font-size: 14px;
                transition: transform .2s ease;
                margin-right: 3px;
            }
            &:hover {
                .fas {
                    transform: translateX(-5px);
                }
            }
        }
    }

    .slide {
        &-enter-active, &-leave-active {
            transition: transform .5s ease, opacity .5s ease;
        }
        &-enter, &-leave-to {
            opacity: 0;
        }
        &-leave-to {
            transform: translateY(50px);
        }
        &-enter {
            transform: translateX(150px);
        }
        &-leave-active {
            position: absolute;
            width: 100%;
        }
    }

    .offers-route {
        min-height: 300px;
    }

    .asset__wrapper {
        position: relative;
        margin-bottom: 150px;
    }
    .asset__name {
        font-size: 100px !important;
        text-shadow: 0 2px 25px rgba(1,1,1,.8);
        white-space: nowrap;
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
        filter: drop-shadow(0 0 10px rgba(1,1,1,.45));
    }


    .asset__details {
        display: flex;
        align-items: center;
    }
    .details__list {
        position: relative;
        margin-bottom: 0;
        &:before {
            position: absolute;
            content: "";
            width: 150%;
            height: 140%;
            top: -20%;
            left: -50%;
            background: linear-gradient(to right, rgba(255,255,255,.2), transparent);
            z-index: -1;
        }
    }
    .details__title {
        margin-right: 10px;
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
