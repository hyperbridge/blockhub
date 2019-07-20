<template>
    <transition-group
        ref="gameList"
        tag="div"
        class="games-list"
        name="games-list">
        <div
            v-for="(item) in items"
            v-if="items && items.length"
            :key="item.id"
            class="games-list__item"
            :class="{ 'hovered': hovered }"
            :style="{ width: itemWidth, background: itemBg }">
            <div class="img">
                <div
                    v-if="item.price && showPrice"
                    class="price"
                    :class="['price-position-' + pricePosition]">
                    <strong>{{ item.price | convertCurrency }}</strong>
                </div>
                <c-button
                    status="none"
                    class="w-100"
                    :to="`/product/${item.id}`">
                    <c-img :src="item.meta.images.mediumTile" />
                </c-button>
                <div
                    v-if="item.meta.crowdfund"
                    class="crowdfund-icon">
                    <i class="fas fa-hand-holding-usd" />
                </div>
            </div>
            <div class="info">
                <div class="text">
                    <div class="state-tag">
                        <template v-if="item.meta.stateTag == 'trending'">
                            <span style="color: #F75D5D">
                                <i class="fas fa-fire" /> Trending
                            </span>
                        </template>
                        <template v-else-if="item.meta.stateTag == 'pre-release'">
                            <i
                                class="fas fa-bolt"
                                style="color: #FADC72" /> {{ item.meta.prereleaseCount }}
                            <span
                                class="ml-4"
                                style="color: #499fd3">Pre Release</span>
                        </template>
                    </div>
                    <c-button
                        status="none"
                        :to="`/product/${item.id}`"
                        :title="item.name + ' - product page'">
                        <h4>{{ item.name }}</h4>
                    </c-button>
                    <div
                        v-if="item.meta.crowdfund"
                        class="crowdfund-tag">
                        Crowdfund Campaign
                    </div>
                    <p v-if="item.publisher">
                        {{ item.meta.publisher }}
                    </p>
                    <p v-if="item.description">
                        {{ item.meta.description }}
                    </p>
                </div>
                <div class="footer">
                    <div class="d-flex flex-nowrap">
                        <div
                            v-if="item.meta.releaseDate && showDate"
                            class="time mr-3">
                            <i class="fas fa-calendar-alt" />
                            <c-tooltip
                                :name="calculateSince(item.meta.releaseDate)"
                                position="center">
                                <div
                                    class="text-center"
                                    style="white-space: nowrap">
                                    <strong>Released</strong><br>
                                    {{ formatDate(item.meta.releaseDate) }}
                                </div>
                            </c-tooltip>
                        </div>
                        <div
                            v-if="item.meta.followers"
                            class="followers mr-3">
                            <i class="fas fa-eye" />
                            <c-tooltip position="center">
                                <div
                                    class="text-center"
                                    style="white-space: nowrap">
                                    <strong>Followers</strong><br>
                                    {{ item.meta.followers }}
                                </div>
                            </c-tooltip>
                        </div>
                        <div
                            v-if="item.meta.players"
                            class="players">
                            <i class="fas fa-user" />
                            <c-tooltip position="center">
                                <div
                                    class="text-center"
                                    style="white-space: nowrap">
                                    <strong>Players</strong><br>
                                    {{ item.meta.players }}
                                </div>
                            </c-tooltip>
                        </div>
                    </div>
                    <c-rating-stars
                        v-if="item.rating && showRating"
                        :number="item.rating.overall"
                        class="rating_stars" />
                    <c-button
                        v-if="showLink"
                        status="success"
                        :to="`/product/${item.id}`"
                        iconHide>
                        More
                    </c-button>
                </div>
            </div>
        </div>
        <p
            v-if="!items || !items.length"
            key="nothing">
            Nothing could be found. Want to <c-button
                status="plain"
                @click="$store.commit('application/activeModal', 'comingSoon')">
                Check for updates
            </c-button>?
        </p>
    </transition-group>
</template>

<script>
import moment from 'moment'
export default {
    name: 'GameGridDescription',
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m),
        'c-rating-stars': () => import('~/components/rating-stars').then(m => m.default || m),
        'c-tooltip': () => import('~/components/tooltips').then(m => m.default || m)
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        itemInRow: {
            type: Number,
            default: 1
        },
        showRating: {
            type: Boolean,
            default: true
        },
        showDate: {
            type: Boolean,
            default: true
        },
        showPrice: {
            type: Boolean,
            default: true
        },
        showLink: {
            type: Boolean,
            default: false
        },
        pricePosition: {
            type: String,
            default: 'left',
            validator: val => ['left', 'right'].includes(val)
        },
        hovered: {
            type: Boolean,
            default: true
        },
        itemBg: String
    },
    data() {
        return {
            itemWidth: ''
        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.checkWidth)
            // Init
            this.checkWidth()
        })
    },
    methods: {
        checkWidth() {
            const def_w = this.$el.offsetWidth / this.itemInRow
            if (def_w < 350) { this.itemWidth = '100%' } else { this.itemWidth = `${100 / this.itemInRow}%` }
        },
        formatDate(date) {
            return moment(date).format('DD MMMM, YYYY')
        },
        calculateSince(date) {
            // let tTime = new Date(date),
            //     cTime = new Date(),
            //     sinceMin = Math.round((cTime - tTime) / 60000),
            //     since, sinceHr, sinceDay;
            // if (sinceMin < 1440) {
            //     sinceHr = Math.round(sinceMin / 60);
            //     since = '' + sinceHr + 'h';
            // }
            // else {
            //     sinceDay = Math.round(sinceMin / 1440);
            //     since = sinceDay + 'd';
            // }
            return moment(date).fromNow()
        }
    }
}
</script>

<style lang="scss" scoped>
    .games-list{
        display: flex;
        margin: 0 -5px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .games-list-move {
        transition: transform 1s ease, opacity 1s ease !important;
    }
    .games-list-enter {
        transform: scale(0);
        opacity: 0;
    }
    .games-list-leave-active {
        position: absolute !important;
        opacity: 0;
    }
    .games-list__item{
        display: flex;
        width: calc( 50% - 10px );
        justify-content: space-between;
        align-items: stretch;
        background: #27283E;
        color: #fff;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
        padding: 5px;
        z-index: 9;
        .price{
            position: absolute;
            width: auto;
            bottom: 20px;
            padding: 4px 7px;
            background: rgba(0, 0, 0, .8);
            font-size: 11px;
            strong{
                font-size: 16px;
            }
            &.price-position-left{
                left: 0px;
                border-radius: 0 5px 5px 0;
            }
            &.price-position-right{
                right: 0px;
                border-radius: 5px 0 0 5px;
            }
        }
        .img{
            width: 50%;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }
        .info{
            width: 50%;
            padding: 5px 0 5px 15px;
            text-align: left;
            display: flex;
            flex-direction: column;
            .text{
                align-self: flex-start;
                width: 100%;
                h4{
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0 0 3px 0;
                    padding: 0;
                    color: #fff;
                }
            }
            .footer{
                /*align-self: flex-end;*/
                margin-top: auto;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 10px;
                .rating_stars {
                    color: #FADC72;
                    font-size: 15px;
                }
                .btn {
                    padding: 0px 8px;
                }
                .time i {
                    margin-right: 5px;
                }
            }
        }
        .state-tag{
            margin-bottom: 3px;
            i{
                font-size: 15px;
                margin-right: 5px;
            }
        }
        .crowdfund-tag{
            color: #FADC72;
        }
        .crowdfund-icon{
            position: absolute;
            top: 0;
            right: -1px;
            width: 80px;
            height: 80px;
            padding: 8px;
            text-align: right;
            font-size: 25px;
            color: #FADC72;
            background: #3D3E5D;
            -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
            clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
        &.hovered{
            -webkit-transition: transform 200ms ease;
            -ms-transition: transform 200ms ease;
            -moz-transition: transform 200ms ease;
            transition: transform 200ms ease;
            &:hover {
                -webkit-transform: scale(1.05);
                -ms-transform: scale(1.05);
                -moz-transform: scale(1.05);
                transform: scale(1.05);
                z-index: 99;
            }
        }
        a {
            text-decoration: none;
        }
    }
    @media (max-width: 768px) {
        .games-list__item{
            flex-direction: column;
            .img,
            .info{
                width: 100%;
            }
        }
    }
</style>
