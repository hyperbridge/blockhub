<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <c-block>
                            <div class="assets-slider position-relative">
                                <c-swiper :options="assetsSlider">
                                    <c-slide>
                                        <img src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg" class="img-fluid" />
                                    </c-slide>
                                    <c-slide>
                                        <img src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg" class="img-fluid" />
                                    </c-slide>
                                    <c-slide>
                                        <img src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg" class="img-fluid" />
                                    </c-slide>
                                    <c-slide>
                                        <img src="https://www.32red.com/blog/wp-content/uploads/2017/07/casBuil1000-1.jpg" class="img-fluid" />
                                    </c-slide>
                                </c-swiper>
                                <div class="slider-dots">
                                    <div class="swiper-pagination" slot="pagination"></div>
                                </div>
                            </div>
                            <div class="card-header text-center">
                                <h3>MMO Weekend</h3>
                                <div class="description">Get the best offers on your favorite MMOs until
                                    march 21st, up to 90% OFF on selected game assets</div>
                            </div>
                            <c-assets-list-item
                                v-bind:items="assets"
                                itemInRow="2">
                            </c-assets-list-item>
                        </c-block>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <c-heading-bar name="Get Started" :showArrows="false" :showBackground="false">
                                <div class="additional-action dots-nav" slot="additional-action">
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                </div>
                            </c-heading-bar>

                            <c-assets-list-item
                                v-bind:items="assets"
                                itemInRow="4">
                            </c-assets-list-item>

                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card pb-0">
                            <c-heading-bar name="Yours" :showArrows="false" :showBackground="false">
                                <div class="additional-action margin-left-20" slot="additional-action">
                                    <div class="text">
                                        Value
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                    <div class="arrow_container">
                                        <i class="fas fa-sort-up"></i>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                </div>
                                <div class="additional-action" slot="additional-action">
                                    <div class="text">
                                        Rating
                                        <i class="fas fa-trophy"></i>
                                    </div>
                                    <div class="arrow_container">
                                        <i class="fas fa-sort-up"></i>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                </div>
                            </c-heading-bar>
                            <div class="filter_blk form-inline">
                                <div class="form-group">
                                    <label>
                                        Filter by
                                    </label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Type</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>
                                        Game
                                    </label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>
                                        Name
                                    </label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <a href="#3" class="btn btn-sm btn-link">clear</a>
                                    <a href="#3" class="btn btn-sm btn-link">More Filters</a>
                                </div>
                            </div>
                            <c-assets-grid></c-assets-grid>
                            <c-pagination></c-pagination>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <c-heading-bar name="Most Wanted" :showArrows="false" :showBackground="false">
                                <div class="additional-action dots-nav" slot="additional-action">
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                    <a href="#3">
                                        <i class="fas fa-circle"></i>
                                    </a>
                                </div>
                            </c-heading-bar>

                            <c-assets-list-item
                                v-bind:items="assets"
                                itemInRow="4">
                            </c-assets-list-item>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-assets-grid': () => import('@/ui/components/assets-grid'),
            'c-assets-list-item': () => import('@/ui/components/assets-list-item'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-pagination': () => import('@/ui/components/pagination'),
            'c-block': () => import('@/ui/components/block'),
            'c-swiper': swiper,
            'c-slide': swiperSlide
        },
        data: () => ({
            assets:[
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                },
                {
                    title: 'Magic Plate Armor',
                    price: '1.99',
                    count: '350.00',
                    img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png'
                }
            ],
            assetsSlider:{
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }),
        updated() {

        }
    }
</script>

<!--Heading Bar Additional Actions-->
<style lang="scss">
    .slider-dots{
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        bottom: 0px;
        display: inline-block!important;
        overflow: hidden;
        height: 28px;
        .swiper-pagination{
            width: auto;
            position: relative;
            display: inline-block;
            background: #484960;
            border-radius: 12px 12px 0 0;
            padding: 0 10px;
            height: 28px;
            line-height: 28px;
            &:after {
                position: absolute;
                content: "";
                height: 28px;
                bottom: -5px;
                right: -26px;
                border-style: solid;
                border-width: 28px 0 0 28px;
                border-color: transparent transparent transparent #484960;
            }
            &:before {
                position: absolute;
                content: "";
                height: 28px;
                bottom: -5px;
                left: -26px;
                border-style: solid;
                border-width: 0 0 28px 28px;
                border-color: transparent transparent #484960 transparent
            }
            span{
                margin: 0 3px;
                line-height: 32px;
                background: #fff;
                width: 10px;
                height: 10px;
                &.active{
                    span{
                        width: 10px;
                    }
                }
            }
        }
    }
    .additional-action{
        float: right;
        display: flex;
        width: auto;
        align-items: center;
        font-size: 14px;
        .text{
            margin-right: 5px;
            i{
                font-size: 16px;
                margin-left: 5px;
            }
        }
        .arrow_container{
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
</style>

<style lang="scss">
    /*Crutch to work OWL fine*/
    /*Fixing content and OWL width*/
    .page__content > .content{
        width: calc(100% - 500px );
    }
    /**/
    /**/

    .img_slider{
        margin-bottom: 15px;
        position: relative;
        display: inline-block;
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
            height: 285px;
            object-fit: cover;
            border-radius: 5px;
        }

    }
    .card{
        background: rgba(0, 0, 0, .13);
        border-radius: 5px;
        padding: 15px;
        margin: 15px 0;
        position: relative;
        overflow: hidden;
        color: #fff;
        border: none;
        &.light{
            background: #484960;
        }
        .card-header{
            background: transparent;
            border: none;
            padding: 0;
            margin-top: 15px;
            h3{
                font-size: 27px;
                font-weight: bold;
                padding: 0;
                margin: 0 0 10px;
            }
            .description{
                display: inline-block;
                width: 100%;
                max-width: 450px;
                font-size: 18px;
                margin-bottom: 25px;
            }
        }
    }
    .filter_blk{
        display: flex;
        width: 100%;
        margin: 0 0 25px 0;
        justify-content: flex-end;
        align-items: center;
        .form-group{
            margin-left: 20px;
            label{
                margin-right: 10px;
            }
        }
        .btn-link{
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            &:last-child{
                padding-right: 0;
            }
        }
        .form-control{
            width: 80px;
            padding: 0 5px;
            line-height: 28px;
            height: 28px!important;
        }
    }
</style>
