<template>
    <div class="row">
        <div class="col-12">
            
            <div class="banner-line margin-bottom-30">
                <div class="banner-md">
                    <div class="img">
                        <Img :src="realm.meta.images.news" />
                    </div>
                    <div class="text">
                        <h4>Announcing: The Boomsday Project</h4>
                        <p>
                            Sed pulvinar nibh id interdum tempus. Nam id massa sit amet dolor tincidunt bibendum.
                            Nullam ante nunc, dapibus et mauris ut, sodales accumsan lorem.
                        </p>
                        <Button to="/project/1">
                            Read More
                        </Button>
                    </div>
                </div>
                <div class="banner-sm">
                    <div class="img">
                        <Img :src="realm.meta.images.follow" />
                    </div>
                    <div class="text">
                        <a
                            href="#"
                            class="btn btn-sm btn-info">Follow Us</a>
                        <h4>Get the news first!</h4>
                    </div>
                </div>
            </div>

            <div class="product-grid">
                <HeadingBar
                    name="Featured Games"
                    :showArrows="false"
                    :showBackground="false" />
            </div>
            <div class="featured-assets">
                <HeadingBar
                    name="Featured Assets"
                    :showArrows="false"
                    :showBackground="false" />
                <FeaturedAssets />
            </div>
            <div class="games-container">
                <HeadingBar
                    name="Games"
                    :showArrows="false"
                    :showBackground="false"
                    showActions>
                    <div
                        slot="additional-action"
                        class="additional-action margin-left-20">
                        <div class="text">
                            Price
                            <i class="fas fa-dollar-sign" />
                        </div>
                        <div class="arrow-container">
                            <i class="fas fa-sort-up" />
                            <i class="fas fa-sort-down" />
                        </div>
                    </div>
                    <div
                        slot="additional-action"
                        class="additional-action">
                        <div class="text">
                            Rating
                            <i class="fas fa-star" />
                        </div>
                        <div class="arrow-container">
                            <i class="fas fa-sort-up" />
                            <i class="fas fa-sort-down" />
                        </div>
                    </div>
                </HeadingBar>
                <GameGrid />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['realm']
}
</script>

<style lang="scss" scoped>

    .banner-line{
        display: flex;
        justify-content: space-between;
        @media (max-width: 767px) {
            flex-direction: column;
        }
    }
    .banner-md{
        display: flex;
        justify-content: space-between;
        width: 70%;
        padding: 8px;
        background: rgba(0, 0, 0, .1);
        border-radius: 5px;
        overflow: hidden;
        .img{
            width: calc( 40% - 10px );
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                min-height: 150px;
                border-radius: 5px;
            }
        }
        .text{
            width: 60%;
            background: #30304B;
            border-radius: 5px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            h4{
                font-weight: bold;
                font-size: 18px;
                margin-bottom: 15px;
                padding: 0;
            }
            a{
                align-self: flex-end;
                margin-top: auto;
                color: #fff;
                text-transform: uppercase;
                font-weight: bold;
            }
        }
        @media (max-width: 767px) {
            width: 100%;
            margin-bottom: 30px;
            .img{
                display: none;
            }
            .text{
                width: 100%;
            }
        }
    }
    .banner-sm{
        width: calc( 30% - 15px );
        position: relative;
        padding: 8px;
        background: rgba(0, 0, 0, .1);
        border-radius: 5px;
        .img{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }
        .text{
            position: absolute;
            bottom: 35px;
            left: 25px;
            .btn{
                margin-bottom: 10px;
                text-transform: uppercase;
                font-weight: bold;
                padding: 0 10px;
            }
            h4{
                font-size: 18px;
                margin: 0;
                padding: 0;
            }
        }
        @media (max-width: 767px) {
            width: 100%;
        }
    }

    .widget--box {
        h3 {
            font-weight: bold;
            font-size: 18px;
            margin: 0 0 10px;
            padding: 0;
        }
        p {
            line-height: 17px;
            font-size: 14px;
        }
    }

    .additional-action{
        float: right;
        display: flex;
        width: auto;
        align-items: center;
        font-size: 14px;
        margin-top: 6px;
        .text{
            margin-right: 5px;
            i{
                font-size: 16px;
                margin-left: 5px;
            }
        }
        .arrow-container{
            width: 20px;
            position: relative;
            display: inline-block;
            text-align: center;
            height: 25px;
            i{
                font-size: 18px;
                position: absolute;
                opacity: .7;
                left: 0;
                right: 0;
                &:first-child{
                    top: 0;
                    height: 50%;
                    z-index: 3;
                }
                &:last-child{
                    bottom: 0px;
                    height: 18px;
                    z-index: 1;
                }
                &:hover{
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }
    }

    .product-grid {
        background: rgba(0, 0, 0, .1);
        padding: 5px 15px 15px;
        margin: 0;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 40px;
    }


    .featured-assets{
        background: rgba(0, 0, 0, .1);
        padding: 5px 15px 15px;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 40px;
    }

    .games-container{
        background: rgba(0, 0, 0, .1);
        padding: 5px 15px 0px;
        border-radius: 5px;
        overflow: hidden;
    }
    .games-list{
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>