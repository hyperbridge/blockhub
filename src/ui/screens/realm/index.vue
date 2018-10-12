<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row realm_page_header margin-bottom-30">
                    <div class="col-3">
                        <div class="logo">
                            <c-img class="img-fluid" :src="realm.images.logo" />
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
                <div class="row">
                    <div class="col-12">
                        <div class="banner-line margin-bottom-40">
                            <div class="banner-md">
                                <div class="img">
                                    <c-img :src="realm.images.news" />
                                </div>
                                <div class="text">
                                    <h4>Announcing: The Boomsday Project</h4>
                                    <p>Sed pulvinar nibh id interdum tempus. Nam id massa sit amet dolor tincidunt bibendum.
                                        Nullam ante nunc, dapibus et mauris ut, sodales accumsan lorem.</p>
                                    <a href="/#/project/1">Read More</a>
                                </div>
                            </div>
                            <div class="banner-sm">
                                <div class="img">
                                    <c-img :src="realm.images.follow" />
                                </div>
                                <div class="text">
                                    <a href="#3" class="btn btn-sm btn-info">Follow Us</a>
                                    <h4>Get the news first!</h4>
                                </div>
                            </div>
                        </div>

                        <div class="product-grid">
                            <c-heading-bar name="Featured Games" :showArrows="false" :showBackground="false" />
                        </div>
                        <div class="featured-assets">
                            <c-heading-bar name="Featured Assets" :showArrows="false" :showBackground="false">
                            </c-heading-bar>
                            <c-featured-assets></c-featured-assets>
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
                            <c-game-grid></c-game-grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-simple-game-grid': (resolve) => require(['@/ui/components/game-grid/simple'], resolve),
            'c-game-grid': (resolve) => require(['@/ui/components/game-grid/with-description'], resolve),
            'c-featured-assets': (resolve) => require(['@/ui/components/assets-list-item/featured-list'], resolve),
        },
        computed: {
            realm() {
                return this.$store.state.marketplace.realms.find(realm => realm.id == this.id)
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

    .banner-line{
        display: flex;
        justify-content: space-between;
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
    }
    .banner-sm{
        width: calc( 30% - 15px );
        position: relative;
        padding: 8px;
        background: rgba(0, 0, 0, .1);
        border-radius: 5px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
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

