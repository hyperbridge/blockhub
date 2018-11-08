<template>
    <transition-group tag="div" class="games-list" ref="gameList" name="games-list">
        <div
            class="games-list__item"
            v-for="item in items"
            :key="item.id"
            :class="{ 'hovered' : hovered }"
            :style="{ width: itemWidth, background: itemBg }"
            v-if="items && items.length"
        >
            <div class="img">
                <div v-if="item.price && showPrice" class="price" :class="['price-position-' + pricePosition]">
                    <strong>{{ item.price | convertCurrency }}</strong>
                </div>
                <a :href="`/#/product/${item.id}`">
                    <c-img :src="item.images.medium_tile" />
                </a>
                <div class="crowdfund-icon" v-if="item.crowdfund">
                    <i class="fas fa-hand-holding-usd"></i>
                </div>
            </div>
            <div class="info">
                <div class="text">
                    <div class="state-tag">
                        <template v-if="item.state_tag == 'trending'">
                            <span style="color: #F75D5D">
                                <i class="fas fa-fire"></i> Trending
                            </span>
                        </template>
                        <template v-else-if="item.state_tag == 'pre-release'">
                            <i class="fas fa-bolt" style="color: #FADC72"></i> {{ item.prerelease_count }}
                            <span class="ml-4" style="color: #499fd3">Pre Release</span>
                        </template>
                    </div>
                    <a  :href="`/#/product/${item.id}`"
                        :title="item.name + ' - product page'"
                    >
                        <h4>{{ item.name }}</h4>
                    </a>
                    <div class="crowdfund-tag" v-if="item.crowdfund">
                        Crowdfund Campaign
                    </div>
                    <p v-if="item.publisher">{{ item.publisher }}</p>
                    <p v-if="item.description">{{ item.description }}</p>
                </div>
                <div class="footer">
                    <div class="d-flex flex-nowrap">
                        <div class="time mr-3" v-if="item.release_date && showDate">
                            <i class="fas fa-calendar-alt"></i>
                            <!--<c-tooltip :name="calculateSince(item.release_date)" position="center">-->
                            <c-tooltip :name="calculateSince(item.release_date)" position="center">
                                <div class="text-center" style="white-space: nowrap">
                                    <strong>Released</strong><br>
                                    {{ formatDate(item.release_date) }}
                                </div>
                            </c-tooltip>
                        </div>
                        <div class="followers mr-3" v-if="item.followers">
                            <i class="fas fa-eye"></i>
                            <!--<c-tooltip :name="item.followers" position="center">-->
                            <c-tooltip position="center">
                                <div class="text-center" style="white-space: nowrap">
                                    <strong>Followers</strong><br>
                                    {{ item.followers }}
                                </div>
                            </c-tooltip>
                        </div>
                        <div class="players" v-if="item.players">
                            <i class="fas fa-user"></i>
                            <!--<c-tooltip :name="item.players" position="center">-->
                            <c-tooltip position="center">
                                <div class="text-center" style="white-space: nowrap">
                                    <strong>Players</strong><br>
                                    {{ item.players }}
                                </div>
                            </c-tooltip>
                        </div>
                    </div>
                    <c-rating-stars
                        v-if="item.rating && showRating"
                        :number="item.rating.overall"
                        class="rating_stars"
                    />
                    <c-button
                        status="success"
                        v-if="showLink"
                        :href="`/#/product/${item.id}`"
                        icon_hide
                    >More</c-button>
                </div>
            </div>
        </div>
        <p v-if="!items || !items.length" key="nothing">Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?</p>
    </transition-group>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'game-grid-description',
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
            showLink:{
                type: Boolean,
                default: false
            },
            pricePosition: {
                type: String,
                default: 'left'
            },
            hovered: {
                type: Boolean,
                default: true
            },
            itemBg: String
        },
        data(){
            return{
                itemWidth: ''
            }
        },
        components: {
            'c-tags': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-rating-stars': (resolve) => require(['@/ui/components/rating-stars'], resolve),
            'c-tooltip': (resolve) => require(['@/ui/components/tooltips'], resolve),
        },
        methods: {
            checkWidth(){
                let def_w = this.$el.offsetWidth / this.itemInRow
                if ( def_w < 350)
                    this.itemWidth = '100%'
                else
                    this.itemWidth = 100/this.itemInRow + '%'
            },
            formatDate(date){
                return moment(date).format('DD MMMM, YYYY');
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
                return moment(date).fromNow();
            }
        },
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('resize', this.checkWidth);
                //Init
                this.checkWidth()
            })
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
            right: 0;
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
