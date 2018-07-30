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
                            <div class="pagination-container">
                                <div class="pagination-container__nav">
                                    <ul>
                                        <li>
                                            <a href="#3" class="first">
                                                <i class="fas fa-angle-double-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#3" class="prew">
                                                <i class="fas fa-angle-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#3">1</a>
                                        </li>
                                        <li>
                                            <a href="#3">2</a>
                                        </li>
                                        <li>
                                            <a href="#3">3</a>
                                        </li>
                                        <li class="active">
                                            <a href="#3">4</a>
                                        </li>
                                        <li>
                                            <a href="#3">5</a>
                                        </li>
                                        <li>
                                            <a href="#3">6</a>
                                        </li>
                                        <li>
                                            <a href="#3">7</a>
                                        </li>
                                        <li>
                                            <a href="#3">8</a>
                                        </li>
                                        <li>
                                            <a href="#3" class="next">
                                                <i class="fas fa-angle-right"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#3" class="last">
                                                <i class="fas fa-angle-double-right"></i>
                                            </a>
                                        </li>
                                    </ul>
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
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-heading-bar': () => import('@/ui/components/heading-bar')
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
        padding: 20px 15px 0 15px;
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

    .pagination-container{
        margin-top: 40px;
        text-align: center;
        width: auto;
        .pagination-container__nav{
            padding: 10px;
            text-align: center;
            width: auto;
            display: inline-block;
            position: relative;
            background: #2E2F4A;
            border-radius: 5px 5px 0 0;
            &:after {
                position: absolute;
                content: "";
                height: 42px;
                bottom: 0;
                right: -39px;
                border: 21px solid transparent;
                border-bottom: 21px solid #2E2F4A;
                border-left: 21px solid #2E2F4A;
            }
            &:before {
                position: absolute;
                content: "";
                height: 42px;
                bottom: 0;
                left: -39px;
                border: 21px solid transparent;
                border-bottom: 21px solid #2E2F4A;
                border-right: 21px solid #2E2F4A;
            }
            ul{
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: center;
                flex-wrap: nowrap;
                li{
                    list-style: none;
                    display: inline-block;
                    margin: 0 3px;
                    width: 22px;
                    height: 22px;
                    line-height: 22px;
                    text-align: center;
                    a{
                        color: #A2A3BE;
                        font-size: 14px;
                        &.first,
                        &.last,
                        &.prew,
                        &.next{
                            color: #fff;
                        }
                    }
                    &.active,
                    &:hover{
                        background: rgba(255, 255, 255, .15);
                        border-radius: 3px;
                        font-weight: bold;
                        cursor: pointer;
                        a{
                            color: #fff;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
</style>
