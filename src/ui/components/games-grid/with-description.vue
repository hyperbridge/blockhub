<template>
    <div class="games-list">
        <div class="games-list__item">
            <div class="price">
                <strong>12.5</strong> USD
            </div>
            <div class="img">
                <img src="http://via.placeholder.com/200x105" />
            </div>
            <div class="info">
                <div class="text">
                    <h4>Game Title here</h4>
                    <p>Publisher Name Goes Here</p>
                </div>
                <div class="footer">
                    <div class="rating_stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <a href="#3" class="btn btn-sm btn-success text-uppercase font-weight-bold">Buy Now</a>
                </div>
            </div>
        </div>
        <div class="games-list__item">
            <div class="price">
                <strong>12.5</strong> USD
            </div>
            <div class="img">
                <img src="http://via.placeholder.com/200x105" />
            </div>
            <div class="info">
                <div class="text">
                    <h4>Game Title here</h4>
                    <p>Publisher Name Goes Here</p>
                </div>
                <div class="footer">
                    <div class="rating_stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <a href="#3" class="btn btn-sm btn-success text-uppercase font-weight-bold">Buy Now</a>
                </div>
            </div>
        </div>
        <div class="games-list__item">
            <div class="price">
                <strong>12.5</strong> USD
            </div>
            <div class="img">
                <img src="http://via.placeholder.com/200x105" />
            </div>
            <div class="info">
                <div class="text">
                    <h4>Game Title here</h4>
                    <p>Publisher Name Goes Here</p>
                </div>
                <div class="footer">
                    <div class="rating_stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <a href="#3" class="btn btn-sm btn-success text-uppercase font-weight-bold">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['projects'],
        components:{
            'c-tags': () => import('@/ui/components/product-tags'),
        }
    }
</script>

<style lang="scss" scoped>
    .games-list__item{
        display: flex;
        width: calc( 50% - 10px );
        justify-content: space-between;
        align-items: stretch;
        background: #27283E;
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
            }
        }
    }
</style>
