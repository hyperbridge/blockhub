<template>
    <c-layout>
        <div class="content identity" id="content">
            <div class="container-fluid">
                <div class="row justify-content-between align-items-center">
                    <div class="col-5">
                        <div class="identity__user-info">
                            <div class="user_avatar">
                                <img
                                    src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png"/>
                                <div class="us_icon">
                                    <i class="fas fa-lock"></i>
                                </div>
                            </div>
                            <div class="user_info">
                                <h2 class="user_name">MrMoody</h2>
                                <div class="user_status">Trusted User</div>
                                <div class="user_statistic">
                                <span>
                                    12
                                    <i class="fas fa-arrow-up"></i>
                                </span>
                                    <span>
                                    193
                                    <i class="fas fa-arrow-down"></i>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="identity__user-medal">
                            <img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png"/>
                            <img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png"/>
                            <img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png"/>
                            <img src="https://cdn3.iconfinder.com/data/icons/game-menu-control/512/Your-rank.png"/>
                        </div>
                    </div>
                    <div class="col-12 d-flex margin-top-30 justify-content-end">
                        <div class="identity__wallet">
                            <i class="fas fa-copy"></i>
                            <span id="wallet_number">jbkjBhBJIBXIUi8plmPOJOnoNCYTcPSkSOsvsdf08Uhg7gBU</span>
                        </div>
                        <div class="identity__action-group">
                            <a href="#3" class="btn btn-sm btn-info">
                                <i class="fas fa-arrow-up"></i>
                                Send funds
                            </a>
                            <a href="#3" class="btn btn-sm btn-info">
                                <i class="fas fa-share"></i>
                                Share
                            </a>
                            <a href="#3" class="btn btn-sm btn-danger">
                                <i class="fas fa-times"></i>
                                report
                            </a>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="identity__user-notify">
                            <a href="#3" class="btn-close">
                                <i class="fas fa-times"></i>
                            </a>
                            <h3>Create your BlockHub Profile</h3>
                            <p>BlockHub is the best place for curated community-driven game development,
                                digital assets and micro-licensing. Sugn up for your own account and build
                                the future of gaming.</p>
                            <a href="#3" class="btn btn-success">
                                Sign Up
                            </a>
                        </div>
                    </div>
                    <div class="col-12 margin-top-40">
                        <div class="badges">
                            <c-heading-bar name="Badges" :showArrows="false" :showBackground="false">
                                <div class="additional-action margin-left-20" slot="additional-action">
                                    <div class="text">
                                        Trust
                                        <i class="fas fa-hand-holding-heart"></i>
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
                            <div class="badges__list">
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                            </div>
                            <c-pagination></c-pagination>
                        </div>
                    </div>
                    <div class="col-12 margin-top-40">
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
                    </div>
                    <div class="col-12 margin-top-40">
                        <div class="assets">
                            <c-heading-bar name="Assets" :showArrows="false" :showBackground="false">
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

                            <c-assets-grid></c-assets-grid>

                            <c-pagination></c-pagination>
                        </div>
                    </div>

                    <div class="col-12 margin-top-40">
                        <div class="games-list">
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
                                <div class="additional-action margin-left-20" slot="additional-action">
                                    <div class="text">
                                        Play Time
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="arrow_container">
                                        <i class="fas fa-sort-up"></i>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                </div>
                                <div class="additional-action" slot="additional-action">
                                    <div class="text">
                                        Purchase Date
                                        <i class="fas fa-calendar"></i>
                                    </div>
                                    <div class="arrow_container">
                                        <i class="fas fa-sort-up"></i>
                                        <i class="fas fa-sort-down"></i>
                                    </div>
                                </div>
                            </c-heading-bar>
                            <div class="games-list__grid">
                                <div class="games-list__grid-item">
                                    <div class="img">
                                        <img src="http://via.placeholder.com/350x150" />
                                    </div>
                                    <div class="info">
                                        <h4>Tibia MMORPG</h4>
                                        <p>CipSoft Entertainment GmbH</p>
                                        <div class="time">
                                            <i class="fas fa-clock"></i>
                                            527h Played
                                        </div>
                                    </div>
                                </div>
                                <div class="games-list__grid-item">
                                    <div class="img">
                                        <img src="http://via.placeholder.com/350x150" />
                                    </div>
                                    <div class="info">
                                        <h4>Tibia MMORPG</h4>
                                        <p>CipSoft Entertainment GmbH</p>
                                        <div class="time">
                                            <i class="fas fa-clock"></i>
                                            527h Played
                                        </div>
                                    </div>
                                </div>
                                <div class="games-list__grid-item">
                                    <div class="img">
                                        <img src="http://via.placeholder.com/350x150" />
                                    </div>
                                    <div class="info">
                                        <h4>Tibia MMORPG</h4>
                                        <p>CipSoft Entertainment GmbH</p>
                                        <div class="time">
                                            <i class="fas fa-clock"></i>
                                            527h Played
                                        </div>
                                    </div>
                                </div>
                                <div class="games-list__grid-item">
                                    <div class="img">
                                        <img src="http://via.placeholder.com/350x150" />
                                    </div>
                                    <div class="info">
                                        <h4>Tibia MMORPG</h4>
                                        <p>CipSoft Entertainment GmbH</p>
                                        <div class="time">
                                            <i class="fas fa-clock"></i>
                                            527h Played
                                        </div>
                                    </div>
                                </div>
                                <div class="games-list__grid-item">
                                    <div class="img">
                                        <img src="http://via.placeholder.com/350x150" />
                                    </div>
                                    <div class="info">
                                        <h4>Tibia MMORPG</h4>
                                        <p>CipSoft Entertainment GmbH</p>
                                        <div class="time">
                                            <i class="fas fa-clock"></i>
                                            527h Played
                                        </div>
                                    </div>
                                </div>
                                <div class="games-list__grid-item">
                                    <div class="img">
                                        <img src="http://via.placeholder.com/350x150" />
                                    </div>
                                    <div class="info">
                                        <h4>Tibia MMORPG</h4>
                                        <p>CipSoft Entertainment GmbH</p>
                                        <div class="time">
                                            <i class="fas fa-clock"></i>
                                            527h Played
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <c-pagination></c-pagination>
                        </div>
                    </div>

                    <div class="col-12 margin-top-40 margin-bottom-40">
                        <div class="identity__user-notify-card">
                            <div>
                                <c-user-card></c-user-card>
                            </div>
                            <div class="text text-left">
                                <h3>Create your BlockHub profile</h3>
                                <p>BlockHub is the best place for curated community-driven game development,
                                    digital assets and micro-licensing. Sugn up for your own account and build
                                    the future of gaming.</p>
                                <a href="#3" class="btn btn-success">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-stretch">
                    <div class="col-12 col-md-8">
                        <div class="badges">
                            <c-heading-bar name="Badges" :showArrows="false" :showBackground="false">
                                <div class="additional-action margin-left-20" slot="additional-action">
                                    <div class="text">
                                        Trust
                                        <i class="fas fa-hand-holding-heart"></i>
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
                            <div class="badges__list">
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                                <div class="badges__item">
                                    <div class="img">
                                        <img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108" />
                                    </div>
                                    <h3>Protector of the Reign</h3>
                                    <p>Product name</p>
                                </div>
                            </div>
                            <c-pagination></c-pagination>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="basic-info">
                            <c-heading-bar name="Basic Information" :showArrows="false" :showBackground="false">
                            </c-heading-bar>
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
            'c-layout': () => import('@/ui/layouts/default'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-pagination': () => import('@/ui/components/pagination'),
            'c-assets-grid': () => import('@/ui/components/assets-grid'),
            'c-user-card': () => import('@/ui/components/user-card')
        },
        data: () => ({}),
        created() {
            $(".rating_readonly").raty({readOnly: true});
        }
    }
</script>

<style lang="scss" scoped>

    .identity__user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user_avatar {
            width: 114px;
            position: relative;
            img {
                width: 100%;
                border-radius: 100%;
            }
            .us_icon {
                position: absolute;
                bottom: 0;
                left: 0;
                border-radius: 100%;
                width: 32px;
                height: 32px;
                text-align: center;
                line-height: 31px;
                font-size: 19px;
                background: #43C981;
                color: #1C2032;
            }
        }
        .user_info {
            width: calc(100% - 130px);
            text-align: left;
            .user_name {
                font-size: 32px;
                padding: 0;
                margin: 0;
            }
            .user_status {
                font-size: 14px;
                font-weight: bold;
            }
            .user_statistic {
                font-size: 24px;
                text-align: left;
                margin-top: 13px;
                span {
                    margin-right: 10px;
                    i {
                        margin-left: 3px;
                    }
                }
            }
        }
    }
    .identity__user-medal{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        img{
            height: 40px;
            margin-left: 20px;
            width: auto;
        }
    }
    .identity__wallet{
        width: auto;
        line-height: 30px;
        margin-right: 15px;
        span{
            margin-left: 10px;
            width: 200px;
            text-overflow: ellipsis;
            display: inline-block;
            overflow: hidden;
            float: right;
        }
    }
    .identity__action-group{
        width: auto;
        a{
            margin: 0 0 0 15px;
            text-transform: uppercase;
            font-weight: bold;
        }
        &:first-child{
            margin-left: 0;
        }
    }

    .identity__user-notify{
        padding: 25px 40px;
        text-align: center;
        position: relative;
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        margin: 30px 0 0;
        .btn-close{
            position: absolute;
            left: 0;
            top: 0;
            padding: 0px;
            background: #1C2032;
            border-radius: 5px 0 5px 5px;
            font-size: 16px;
            display: block;
            margin: 0;
            color: #C6C6D6;
            width: 26px;
            height: 26px;
            text-align: center;
            line-height: 24px;
        }
        h3{
            font-size: 21px;
            font-weight: bold;
            margin: 0;
            padding: 0;
        }
        p{
            font-size: 18px;
            line-height: 23px;
            margin: 20px 0;
        }
        .btn{
            padding: 8px 30px;
            font-weight: bold;
            font-size: 18px;
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

    .badges{
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        padding: 15px 15px 0 15px;
    }
    .badges__list{
        display: flex;
        margin-top: 15px;
        width: 100%;
        justify-content: space-between;
    }
    .badges__item{
        display: inline-block;
        text-align: center;
        width: 25%;
        padding: 10px;
        img{
            width: 100%;
            max-width: 120px;
            height: auto;
        }
        h3{
            font-weight: bold;
            font-size: 18px;
            margin: 15px 0 10px;
            padding: 0;
        }
    }

    .featured-assets{
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        padding: 15px;
        overflow: hidden;
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

    .assets{
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        padding: 15px 15px 0 15px;
        overflow: hidden;
    }

    .games-list{
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        padding: 15px 15px 0 15px;
        overflow: hidden;
    }
    .games-list__grid{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding-top: 20px;
        .games-list__grid-item{
            width: 49%;
            margin-bottom: 3%;
            display: flex;
            align-items: stretch;
            .img{
                width: 60%;
                margin-right: 20px;
                border-radius: 5px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .info{
                width: auto;
                position: relative;
                padding-bottom: 25px;
                h4{
                    font-size: 18px;
                    font-weight: bold;
                }
                .time{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    i{
                        margin-right: 5px;
                    }
                }
            }
        }
    }

    .identity__user-notify-card{
        padding: 20px;
        text-align: center;
        position: relative;
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        margin: 30px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text{
            width: 60%;
            padding-left: 15px;
            h3{
                font-weight: bold;
                font-size: 21px;
                margin: 0;
            }
            p{
                margin: 20px 0;
                font-size: 18px;
                line-height: 22px;
            }
            .btn{
                padding: 8px 30px;
                font-weight: bold;
                font-size: 18px;
            }
        }
    }

    .basic-info{
        height: 100%;
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        padding: 15px 15px 0 15px;
    }
</style>
