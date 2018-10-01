<template>
    <transition-group tag="div" class="games-list" ref="gameList" name="games-list">
        <div
            class="games-list__item"
            v-for="item in items"
            :key="item.id"
            :class="{ 'hovered' : hovered }"
            :style="{ width: itemWidth, background: itemBg }"
            v-if="items.length"
        >
            <div class="img">
                <div v-if="item.price && showPrice" class="price" :class="['price-position-' + pricePosition]">
                    <strong>{{ item.price }}</strong> USD
                </div>
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
                    <div class="time" v-if="item.release_date && showDate">
                        <i class="fas fa-calendar-alt"></i>
                        {{ item.release_date }}
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
        <p v-if="!items.length" key="nothing">Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?</p>
    </transition-group>
</template>

<script>
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
            'c-rating-stars': (resolve) => require(['@/ui/components/rating-stars'], resolve)
        },
        methods: {
            checkWidth(){
                let def_w = this.$el.offsetWidth / this.itemInRow
                if ( def_w < 350)
                    this.itemWidth = '100%'
                else
                    this.itemWidth = 100/this.itemInRow + '%'
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
                z-index: 99;
            }
        }
        a {
            text-decoration: none;
        }
    }
</style>
