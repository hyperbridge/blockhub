<template>
    <div class="games-list">
        <div
            class="games-list__item"
            :style="`background-image:url('${image}')`">
            <div class="games-list__item-wrapper">
                <div class="games-list__item-link">
                    <i class="fas fa-external-link-alt" />
                </div>
                <div class="games-list__item-head">
                    <div>
                        <div class="h2 display-4 games-list__title">
                            {{ name }}
                        </div>
                        <div class="h5 games-list__sub-title">
                            {{ subName }}
                        </div>
                    </div>
                    <c-button
                        status="second-info"
                        icon="play"
                        class="margin-top-15"
                        size="xl">
                        Play Now
                    </c-button>
                </div>
                <div class="game-info">
                    <div>
                        354 Hours
                    </div>
                    <div>
                        Last Played today
                    </div>
                </div>
                <div class="games-list__item-body">
                    <div class="game-friends-playing margin-bottom-40">
                        <div class="game-friends-playing__ttl">
                            <i class="fas fa-users" />
                            <span class="ttl">Friends Playing</span>
                            <span>this game</span>
                        </div>
                        <div class="game-friends-playing__list">
                            <template v-for="user in friends">
                                <a :href="user.link">
                                    <img :src="user.avatar">
                                </a>
                            </template>
                        </div>
                    </div>
                    <div class="game-achievements margin-bottom-40">
                        <div class="game-achievements__ttl">
                            <i class="fas fa-trophy" />
                            <span class="ttl">Achievements</span>
                            <span>you earned recently</span>
                        </div>
                        <div class="game-achievements__list">
                            <a
                                v-for="(item, index) in achievements"
                                v-if="achievements"
                                :key="`achievements${index}`"
                                :href="item.href"
                                class="game-achievements__list-item">
                                <i class="fas fa-trophy" />
                            </a>
                            <p v-else>
                                Nothing to show
                            </p>
                        </div>
                    </div>
                    <div class="game-downloadable-list  margin-bottom-40">
                        <div class="game-downloadable-list__ttl">
                            <i class="fas fa-plus-circle" />
                            <span class="ttl">Downloadable Content</span>
                            <span>for this game</span>
                        </div>
                        <div class="game-downloadable-list__list">
                            <div
                                v-for="item in downloadContent"
                                v-if="downloadContent"
                                class="game-downloadable-list__list-item">
                                <div>
                                    <c-button status="plain">
                                        {{ item.name }}
                                    </c-button>
                                </div>
                                <div class="item-action">
                                    <span>
                                        $ {{ item.price }}
                                    </span>
                                    <c-button
                                        v-if=" item.price == 'free' || 'Free'"
                                        status="opacity-success"
                                        size="xs">
                                        Install
                                    </c-button>
                                    <c-button
                                        v-else
                                        status="opacity-success"
                                        size="xs">
                                        Buy
                                    </c-button>
                                </div>
                            </div>
                            <div v-else>
                                Nothing to show!
                            </div>
                        </div>
                    </div>
                    <div class="game-news">
                        <div class="game-news__ttl">
                            <i class="fas fa-rss" />
                            <span class="ttl">News</span>
                            <span>about this game</span>
                        </div>
                        <div class="game-news__list">
                            <ul>
                                <li v-for="item in news">
                                    <h3 class="text-white mb-2 font-weight-bold">
                                        {{ item.title }}
                                    </h3>
                                    <p>
                                        {{ item.text }}
                                    </p>
                                    <c-button
                                        status="plain"
                                        :href="item.link"
                                        class="pl-0">
                                        <i class="fas fa-external-link-alt margin-right-5" />
                                        Read More
                                    </c-button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: null
        },
        subName: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        friends: {
            type: Array,
            default: () => []
        },
        achievements: {
            type: Array,
            default: () => []
        },
        downloadContent: {
            type: Array,
            default: () => []
        },
        news: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
    .games-list {
        display: flex;
        width: 100%;
    }

    .games-list__item {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        border: 3px solid #484760;
        overflow: hidden;
    }

    .games-list__item-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 40px 35px 35px;
        background: rgba(61, 62, 93, .85);
    }

    .games-list__item-link {
        color: #fff;
        opacity: .5;
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 16px;
        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }

    .games-list__item-head {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        color: #fff;
        margin-bottom: 30px;
    }

    .game-info{
        display: flex;
        margin: 20px 0 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #4d4d65;
        div{
            padding: 3px 10px;
            border-radius: 3px;
            border: 1px solid rgba(255, 255, 255, .5);
            color: #fff;
            opacity: .3;
            margin-right: 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 13px;
        }
    }

    .games-list__sub-title {
        color: #b1b1bf;
    }

    .game-achievements {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .game-achievements__ttl {
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        color: #b1b1bf;
        .ttl {
            color: #0f85ca;
            margin: 0 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
        }
    }

    .game-achievements__list {
        display: flex;
        width: 100%;
        margin-top: 20px;
    }

    .game-achievements__list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, .1);
        border: 1px solid rgba(255, 255, 255, .3);
        border-radius: 5px;
        margin-right: 10px;
        font-size: 20px;
        opacity: .5;
        .fa-trophy {
            color: #fff;
            opacity: .3;
        }
        &:hover {
            opacity: 1;
            cursor: pointer;
            text-decoration: none;
        }
    }

    .game-downloadable-list {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .game-downloadable-list__ttl {
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        color: #b1b1bf;
        .ttl {
            color: #0f85ca;
            margin: 0 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
        }
    }

    .game-downloadable-list__list {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
    }

    .game-downloadable-list__list-item {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        color: #fff;
        font-size: 14px;
        .item-action {
            background: rgba(0, 0, 0, .3);
            padding: 4px 5px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 125px;
            span {
                text-align: center;
                width: 70%;
            }
        }
    }

    .game-friends-playing {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .game-friends-playing__ttl {
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        color: #b1b1bf;
        .ttl {
            color: #0f85ca;
            margin: 0 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
        }
    }

    .game-friends-playing__list {
        display: flex;
        margin-top: 20px;
        a {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            border-radius: 100%;
            overflow: hidden;
            background: rgba(255, 255, 255, .1);
            border: 1px solid rgba(255, 255, 255, .3);
            position: relative;
            &:before {
                content: "+";
                width: 100%;
                display: block;
                line-height: 38px;
                text-align: center;
                font-size: 22px;
                color: #fff;
                opacity: .2;
                z-index: 2;
                position: absolute;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: relative;
                z-index: 3;
            }
        }
    }

    .game-news {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .game-news__ttl {
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        color: #b1b1bf;
        .ttl {
            color: #0f85ca;
            margin: 0 10px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
        }
    }
    .game-news__list{
        margin-top: 20px;
        ul{
            padding: 0;
            margin: 0;
            li{
                list-style: none;
                color: #fff;
                margin-bottom: 25px;
                p{
                    opacity: .8;
                }
                &:last-child{
                    margin-bottom: 0;
                }
                .c-button.plain{
                    color: #0f85ca;
                }
            }
        }
    }
</style>
