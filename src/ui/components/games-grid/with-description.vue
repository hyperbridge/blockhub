<template>
    <div class="games-list">
        <div class="games-list__item"
             :class="{ 'hovered' : hovered}"
             v-for="(item, index) in items"
             :style="{ width: 'calc( 100% / ' + itemInRow + ')', background: itemBg }">
            <div v-if="showPrice" class="price">
                <strong>{{ item.price }}</strong> USD
            </div>
            <div class="img">
                <img :src="item.images.medium_tile" />
            </div>
            <div class="info">
                <div class="text">
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.description }}</p>
                </div>
                <div class="footer">
                    <div class="time" v-if="showTime">
                        <i class="fas fa-calendar-alt"></i>
                        {{ item.time }}
                    </div>
                    <div class="rating_stars" v-if="showStars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <a v-if="showButton" href="#3" class="btn btn-sm btn-success text-uppercase font-weight-bold">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tags from '../product-tags/index'

    export default {
        props: ['items', 'showPrice', 'showStars', 'showButton', 'showTime', 'itemInRow', 'itemBg', 'hovered'],
        components:{
            'c-tags': Tags
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
        padding: 8px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
        .price{
            position: absolute;
            width: auto;
            bottom: 25px;
            left: 8px;
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
                -webkit-transform: scale(1.05);
                -ms-transition: all 200ms ease-in;
                -ms-transform: scale(1.05);
                -moz-transition: all 200ms ease-in;
                -moz-transform: scale(1.05);
                transition: all 200ms ease-in;
                transform: scale(1.05);
            }
        }
    }
</style>
