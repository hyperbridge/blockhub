<template>
    <div class="games-list">
        <div class="games-list__item" style="background-image: url('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1930/429a70c7eeec42790a5d18ef60dd8e4e5ae1165b.jpg'); ">
            <div class="games-list__item-wrapper">
                <div class="games-list__item-link">
                    <i class="fas fa-external-link-alt"></i>
                </div>
                <div class="games-list__item-head">
                    <div>
                        <div class="h2 display-4 games-list__title">
                            Elder Scrolls V: Skyrim
                        </div>
                        <div class="h5 games-list__sub-title">
                            Legendary Edition
                        </div>
                    </div>
                    <c-button status="opacity-info" icon="play" class="margin-top-15" size="lg">
                        Play Now
                    </c-button>
                </div>
                <div class="games-list__item-body">
                    <div class="game-achievements margin-bottom-60">
                        <div class="game-achievements__ttl">
                            <i class="fas fa-trophy"></i>
                            <span class="ttl">Achievements</span>
                            <span>you earned recently</span>
                        </div>
                        <div class="game-achievements__list">
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <div class="game-achievements__list-item">
                                <i class="fas fa-trophy"></i>
                            </div>
                        </div>
                    </div>
                    <div class="game-downloadable-list">
                        <div class="game-downloadable-list__ttl">
                            <i class="fas fa-plus-circle"></i>
                            <span class="ttl">Downloadable Content</span>
                            <span>for this game</span>
                        </div>
                        <div class="game-downloadable-list__list">
                            <div class="game-downloadable-list__list-item">
                                <div>
                                    Dragonborn
                                </div>
                                <div class="item-action">
                                        <span>
                                            $ 3.99
                                        </span>
                                    <c-button status="opacity-success" size="xs">
                                        Buy
                                    </c-button>
                                </div>
                            </div>
                            <div class="game-downloadable-list__list-item">
                                <div>
                                    Dragonborn
                                </div>
                                <div class="item-action">
                                        <span>
                                            $ 93.99
                                        </span>
                                    <c-button status="opacity-success" size="xs">
                                        Buy
                                    </c-button>
                                </div>
                            </div>
                            <div class="game-downloadable-list__list-item">
                                <div>
                                    Dragonborn
                                </div>
                                <div class="item-action">
                                        <span>
                                            Free
                                        </span>
                                    <c-button status="opacity-success" size="xs">
                                        Install
                                    </c-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .games-list{
        display: flex;
        width: 100%;
    }
    .games-list__item{
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        border: 2px solid #484760;
        overflow: hidden;
    }
    .games-list__item-wrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 45px 35px 35px;
        background: rgba(61, 62, 93, .7);
    }
    .games-list__item-link{
        color: #fff;
        opacity: .5;
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 16px;
        &:hover{
            opacity: 1;
            cursor: pointer;
        }
    }
    .games-list__item-head{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        color: #fff;
        margin-bottom: 30px;
    }
    .games-list__sub-title{
        color: #636377;
    }
    .game-achievements{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 30px 0;
    }
    .game-achievements__ttl{
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        color: #636377;
        .ttl{
            color: #096bb0;
            margin: 0 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
        }
    }
    .game-achievements__list{
        display: flex;
        width: 100%;
        margin-top: 20px;
    }
    .game-achievements__list-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, .05);
        border: 1px solid rgba(255, 255, 255, .2);
        border-radius: 5px;
        margin-right: 10px;
        font-size: 20px;
        .fa-trophy{
            color: #fff;
            opacity: .2;
        }
    }

    .game-downloadable-list{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 30px 0 0;
    }
    .game-downloadable-list__ttl{
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        color: #636377;
        .ttl{
            color: #096bb0;
            margin: 0 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
        }
    }
    .game-downloadable-list__list{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
    }
    .game-downloadable-list__list-item{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0 6px 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        font-size: 14px;
        .item-action{
            background: rgba(0, 0, 0, .3);
            padding: 4px 5px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 110px;
            span{
                text-align: center;
                width: 70%;
            }
        }
    }
</style>
