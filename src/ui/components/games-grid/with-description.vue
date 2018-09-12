<template>
    <div class="games-list">
        <div
            v-for="(item, index) in items"
            :key="index"
            :class="{ 'hovered' : hovered }"
            :style="{ width: 'calc( 100% / ' + itemInRow + ')', background: itemBg }"
            class="games-list__item"
        >
            <div v-if="item.price && showPrice" class="price">
                <strong>{{ item.price }}</strong> USD
            </div>
            <div class="img">
                <a :href="`/#/product/${item.id}`">
                    <img :src="item.images.medium_tile" />
                </a>
            </div>
            <div class="info">
                <div class="text">
                    <a :href="`/#/product/${item.id}`">
                        <h4>{{ item.name }}</h4>
                    </a>
                    <p>{{ item.description }}</p>
                </div>
                <div class="footer">
                    <div class="time" v-if="item.time && showTime">
                        <i class="fas fa-calendar-alt"></i>
                        {{ item.time }}
                    </div>
                    <c-rating-stars
                        v-if="item.starsCount && showRating"
                        :number="item.starsCount"
                        class="rating_stars"
                    />
                    <c-button
                        status="success"
                        v-if="item.moreLink"
                        :href="`/#/product/${item.id}`"
                        icon_hide
                    >Buy Now</c-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'games-grid-description',
        props: {
            items:{
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
            showTime: {
                type: Boolean,
                default: true
            },
            showPrice: {
                type: Boolean,
                default: true
            },
            hovered: {
                type: Boolean,
                default: true
            },
            itemBg: {
                type: String
            }
        },
        components: {
            'c-tags': () => import('@/ui/components/tags'),
            'c-rating-stars': () => import('@/ui/components/rating-stars')
        }
    }
</script>

<style lang="scss" scoped>
    .games-list{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
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
        .price{
            position: absolute;
            width: auto;
            bottom: 25px;
            left: 0px;
            padding: 2px 3px;
            background: rgba(0, 0, 0, .3);
            border-radius: 0 5px 5px 0;
            font-size: 11px;
            strong{
                font-size: 14px;
                font-weight: bold;
            }
        }
        .img{
            width: 50%;
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
                .rating_stars{
                    color: #FADC72;
                    font-size: 15px;
                }
                .btn{
                    padding: 0px 8px;
                }
                .time{
                    i{
                        margin-right: 5px;
                    }
                }
            }
        }
        &.hovered{
            -webkit-transition: all 200ms ease-in;
            -webkit-transform: scale(1);
            -ms-transition: all 200ms ease-in;
            -ms-transform: scale(1);
            -moz-transition: all 200ms ease-in;
            -moz-transform: scale(1);
            transition: all 200ms ease-in;
            transform: scale(1);
            &:hover {
                -webkit-transition: all 200ms ease-in;
                -webkit-transform: scale(1.03);
                -ms-transition: all 200ms ease-in;
                -ms-transform: scale(1.05);
                -moz-transition: all 200ms ease-in;
                -moz-transform: scale(1.03);
                transition: all 200ms ease-in;
                transform: scale(1.03);
            }
        }
        a{
            text-decoration: none;
        }
    }
</style>
