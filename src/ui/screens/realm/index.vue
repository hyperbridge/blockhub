<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row realm_page_header">
                    <div class="col-3">
                        <div class="logo">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACyCAMAAADCpnKHAAADAFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9l4+88AAABAHRSTlMALL7AYwdHdVMDXv7//LGf8zA+/ckTSXtDQFR6gJa38qw/FliTCAUdNzmQ+uvj29PLv2l4Cb2kTbj23TZR+/W2AR9CX25+iaOw0eoyFffl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"
                                class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="widget--box">
                            <h3>Widget Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="widget--box">
                            <h3>Widget Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="widget--box">
                            <h3>Widget Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </div>
                    </div>
                    <div class="col-12">
                        <ul class="nav">
                            <li class="nav-item active">
                                <a href="#3" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#3" class="nav-link">News</a>
                            </li>
                            <li class="nav-item">
                                <a href="#3" class="nav-link">Community</a>
                            </li>
                            <li class="nav-item">
                                <a href="#3" class="nav-link">Games</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row product-grid margin-bottom-40">
                    <div class="col-12">
                        <c-heading-bar name="Featured Games" :showArrows="false" :showBackground="false" />
                    </div>
                    <div class="col-12 col-lg-4" v-for="(item, index) in projects" v-bind:key="index">
                        <div class="card invert product-grid__item">
                            <div class="card-body padding-0">
                                <a :href="`/#/product/${item.id}`"><img class="card-img-top" :src="item.images.medium_tile" /></a>
                                <h4><a :href="`/#/product/${item.id}`">{{ item.name }}</a></h4>
                                <p class="card-text" hidden>{{ item.short_description }} </p>

                                <c-tags :tags="item.author_tags"></c-tags>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row margin-bottom-40">
                    <div class="col-12">
                        <div class="featured-assets">
                            <c-heading-bar name="Featured Assets" :showArrows="false" :showBackground="false">
                            </c-heading-bar>
                            <div class="featured-assets__list">
                                <div class="featured-assets__list-item">
                                    <div class="img">
                                        <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
                                    </div>
                                    <h3>Magic Plate Armor</h3>
                                    <p>Tibia MMORPG</p>
                                </div>
                                <div class="featured-assets__list-item">
                                    <div class="img">
                                        <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
                                    </div>
                                    <h3>Magic Plate Armor</h3>
                                    <p>Tibia MMORPG</p>
                                </div>
                                <div class="featured-assets__list-item">
                                    <div class="img">
                                        <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
                                    </div>
                                    <h3>Magic Plate Armor</h3>
                                    <p>Tibia MMORPG</p>
                                </div>
                                <div class="featured-assets__list-item">
                                    <div class="img">
                                        <img src="https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de" />
                                    </div>
                                    <h3>Magic Plate Armor</h3>
                                    <p>Tibia MMORPG</p>
                                </div>
                            </div>
                        </div>
                        <div class="games-container">
                            <c-heading-bar name="Games" :showArrows="false" :showBackground="false">
                                <div class="additional-action margin-left-20" slot="additional-action">
                                    <div class="text">
                                        Price
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
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="arrow_container">
                                        <i class="fas fa-sort-up"></i>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                </div>
                            </c-heading-bar>
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
            'c-tags': () => import('@/ui/components/product-tags'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
        },
        data: () => ({
            wallets: []
        }),
        computed: {
            projects() {
                return this.$store.state.funding.projects
            }
        }
    }
</script>

<style lang="scss" scoped>
    .realm_page_header {
        .logo {
            img {
                max-width: 150px;
            }
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

    .nav {
        margin: 40px 0 20px;
        li {
            margin-right: 60px;
            a {
                font-size: 21px;
                color: #fff;
                opacity: .65;
                padding: 5px 0 5px 0;
            }
            &.active,
            &:hover {
                a {
                    opacity: 1;
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
        margin-top: 6px;
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

    .product-grid {
        background: rgba(0, 0, 0, .1);
        padding: 5px 0 0px;
        margin: 0;
        border-radius: 5px;
        overflow: hidden;
    }
    .product-grid__item{
        padding: 8px 6px;
        border-radius: 5px;

        &:hover {
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        }

        h4{
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
        .product-tags {
            margin-top: 10px;
            margin-bottom: 0;
        }
    }


    .featured-assets{
        background: rgba(0, 0, 0, .1);
        padding: 5px 15px 15px;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 40px;
    }
    .featured-assets__list{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .featured-assets__list-item{
        display: inline-block;
        padding: 25px;
        width: 22%;
        border-radius: 5px;
        background: #27283E;
        text-align: center;
        color: #C6C6D6;
        margin-top: 2%;
        .img{
            position: relative;
            margin-bottom: 20px;
            padding-bottom: 30px;
            display: inline-block;
            width: 100%;
            max-width: 160px;
            img{
                width: 100%;
            }
            &:after{
                position: absolute;
                bottom: 10px;
                width: 80%;
                left: 10%;
                content: "";
                height: 3px;
                background: rgba(0, 0, 0, .2);
                border-radius: 100%;
                box-shadow: 0 0 20px rgba(0, 0, 0, .9);
            }
        }
        h3{
            font-weight: bold;
            font-size: 18px;
            color: #C6C6D6;
            padding: 0px;
            margin: 0px;
        }
        p{
            margin: 0;
        }
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

<!--
<style lang="scss">
    .custom_gradient{
        background-image: url('../../../assets/img/realm_bg.jpg');
        background-position: top center;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-color: #2878c1;
        #app{
            &:before{
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,2878c1+46,2878c1+46&0+0,1+62 */
                background: -moz-linear-gradient(top, rgba(30,87,153,0) 0%, rgba(40,120,193,0.74) 46%, rgba(40,120,193,1) 62%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, rgba(30,87,153,0) 0%,rgba(40,120,193,0.74) 46%,rgba(40,120,193,1) 62%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(40,120,193,0.74) 46%,rgba(40,120,193,1) 62%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#2878c1',GradientType=0 ); /* IE6-9 */
            }
        }
    }
</style>
-->

