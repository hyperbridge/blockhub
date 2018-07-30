<template>
    <c-layout>
        <div class="content" id="content">
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
                            <h3>Create your BlockHub Profile</h3>
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
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-layout': () => import('@/ui/layouts/default')
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
    }
</style>
