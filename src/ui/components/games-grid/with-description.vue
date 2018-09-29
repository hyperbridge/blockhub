<template>
    <transition-group tag="div" class="games-list" name="games-list">
        <div
            class="games-list__item"
            v-for="item in items"
            :key="item.id"
            :class="{ 'hovered' : hovered }"
            :style="{ width: 'calc( 100% / ' + itemInRow + ')', background: itemBg }"
            v-if="items.length"
        >
            <div v-if="item.price && showPrice" class="price">
                <strong>{{ item.price }}</strong> USD
            </div>
            <div class="img">
                <a :href="`/#/product/${item.id}`">
                    <c-img :src="item.images.medium_tile" />
                </a>
            </div>
            <div class="info">
                <div class="text">
                    <a
                        :href="`/#/product/${item.id}`"
                        :title="item.name + ' - product page'"
                    ><h4>{{ item.name }}</h4></a>
                    <p>{{ item.publisher }}</p>
                    <p>{{ item.description }}</p>
                </div>
                <div class="footer">
                    <div class="time" v-if="item.release_date">
                        <i class="fas fa-calendar-alt"></i>
                        {{ item.release_date }}
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
        <p v-if="!items.length" key="nothing">Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?</p>
    </transition-group>
</template>

<script>
    export default {
        name: 'games-grid-description',
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
            itemBg: String
        },
        components: {
            'c-tags': (resolve) => require(['@/ui/components/tags'], resolve),
            'c-rating-stars': (resolve) => require(['@/ui/components/rating-stars'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .games-list{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
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
        .price{
            position: absolute;
            width: auto;
            bottom: 0px;
            left: 0px;
            padding: 2px 3px;
            background: rgba(0, 0, 0, .6);
            border-radius: 0 5px 5px 0;
            font-size: 11px;
            strong{
                font-size: 14px;
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
            }
        }
        a {
            text-decoration: none;
        }
    }
</style>
