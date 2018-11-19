<template>
    <div>
        <div v-if="asset" class="asset__wrapper">
            <c-img class="asset__background-img" :src="asset.image"/>
            <h1 class="asset__name">{{ asset.name }}</h1>

            <div class="asset__details">
                <c-img class="asset__img" :src="asset.image"/>
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
                        <span class="details__title">Minimum Price:</span>
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
                :height="400"
                :options="{ maintainAspectRatio: false }"
            />
            <h2 class="offers__title">
                Offers
            </h2>
            <ul class="reset-list flex-center-between margin-bottom-10">
                <li
                    v-for="title in ['Latest bid', 'Bids', 'Buyout', 'Market value', 'Created by']"
                    :key="title"
                >
                    {{ title }}
                </li>
            </ul>
            <ul class="reset-list">
                <li
                    class="offer"
                    v-for="[id, offer] in offersMap" :key="id"
                >
                    <span>
                        <span class="offer__max-bid">
                            {{ offer.bids[offer.bids.length - 1].value }}
                        </span>$
                    </span>
                    <span class="offer__bids-count">
                        <i class="fas fa-gavel"></i>
                        {{ offer.bids.length }}
                    </span>
                    <span>{{ offer.buyout }}</span>
                    <span>{{ offer.marketValue }}</span>
                    <div class="flex-center">
                        <c-user
                            :user="offer.seller"
                            class="margin-left-5"
                        />
                    </div>
                </li>
            </ul>
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
            'c-user': (resolve) => require(['@/ui/components/user/simple'], resolve),
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
            },
            priceHistorySorted() {
                return [...this.priceHistory].sort();
            },
            offersMap() {
                return this.$store.getters['assets/offersMap'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .offers__title {
        margin-top: 30px;
        font-size: 25px;
    }
    .offer {
        padding: 10px;
        border-radius: 5px;
        background: #343555;
        box-shadow: 2px 0  15px 0 rgba(1,1,1,.2);
        margin-bottom: 20px;
        list-style-type: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .offer__max-bid {
        font-size: 16px;
        margin: 0 1px 0 5px;
    }
    .offer__bids-count {
        background: rgba(1, 1, 1, 0.15);
        border-radius: 4px;
        padding: 2px 4px;
        min-width: 24px;
        height: 24px;
        text-align: center;
        .fas {
            opacity: .15;
            margin-right: 5px;
        }
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
