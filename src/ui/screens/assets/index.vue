<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card light">
                            <div class="card-header text-center">
                                <h3>MMO Weekend</h3>
                                <div class="description">Get the best offers on your favorite MMOs until
                                march 21st, up to 90% OFF on selected game assets</div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div class="owl-carousel d-none"
                                         data-nav-dots="true"
                                         data-nav-arrow="true"
                                         data-items="1"
                                         data-autoplay="false">
                                        <div class="item">
                                            <img src="https://www.askgamblers.com/uploads/game_screenshots/other/bd/f9/09/b9c8a2d011200914ebf31cffd0cdfaeaa4.jpg" />
                                        </div>
                                        <div class="item">
                                            <img src="https://www.slotsup.com/wp-content/uploads/logo-castle-builder-ii-rabcat-slot-game.png" />
                                        </div>
                                        <div class="item">
                                            <img src="https://www.casinoreef.net/wp-content/uploads/2017/08/Castle-Builder-II_600x400.jpg" />
                                        </div>
                                    </div>
                                    <c-assets-list-item
                                        v-bind:items="assets"
                                        itemInRow="2">
                                    </c-assets-list-item>
                                </div>
                                <div class="col-12 col-lg-6"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <c-heading-bar name="Get Started" :showArrows="false" :showBackground="false">
                            </c-heading-bar>

                            <c-assets-list-item
                                v-bind:items="assets"
                                itemInRow="4">
                            </c-assets-list-item>

                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <c-heading-bar name="Yours" :showArrows="false" :showBackground="false">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-assets-grid': () => import('@/ui/components/assets-grid'),
            'c-assets-list-item': () => import('@/ui/components/assets-list-item'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
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
            ]
        }),
        updated() {
            window.owlcarousel();

            let owl = $('.owl-carousel').owlCarousel()

            //$('.owl-controls').insertBefore('')
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        background: rgba(0, 0, 0, .13);
        border-radius: 5px;
        padding: 15px;
        margin: 15px 0;
        position: relative;
        overflow: hidden;
        color: #fff;
        &.light{
            background: rgba(255, 255, 255, .1);
        }
        .card-header{
            background: transparent;
            border: none;
            padding: 0;
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
