<template>
    <c-layout>
        <c-user-head />
        <div class="row justify-content-between align-items-center">
            <div class="col-12 d-flex margin-top-30 justify-content-end">
                <div class="profile__wallet">
                    <i class="fas fa-copy" />
                    <span id="walletNumber">{{ profile.address }}</span>
                </div>
                <div class="profile__action-group">
                    <c-button
                        status="info"
                        icon="arrow-up"
                        @click="showSendPopup">
                        Send
                    </c-button>
                    <c-button
                        v-darklaunch="'SHARING'"
                        status="share">
                        Share
                    </c-button>
                    <c-button
                        v-darklaunch="'REPORTING'"
                        status="danger">
                        Report
                    </c-button>
                </div>
            </div>
            <div
                v-if="!signedIn && !$store.state.application.settings.client.hide_profile_signup"
                class="col-12">
                <div class="profile__user-notify">
                    <c-button
                        class="btn-close"
                        @click="$store.commit('application/updateClientSettings', { key: 'hide_profile_signup', value: true })">
                        <i class="fas fa-times" />
                    </c-button>
                    <h3>Create your BlockHub Profile</h3>
                    <p>
                        BlockHub is the best place for curated community-driven game development,
                        digital assets and micro-licensing. Sugn up for your own account and build
                        the future of gaming.
                    </p>
                    <c-button
                        status="success"
                        size="lg"
                        iconHide
                        to="/download">
                        Sign Up
                    </c-button>
                </div>
            </div>
            <div class="col-12 margin-top-40">
                <div class="badges">
                    <c-heading-bar
                        name="Badges"
                        :showArrows="false"
                        :showBackground="false">
                        <div
                            slot="additional-action"
                            class="additional-action margin-left-20">
                            <div class="text">
                                Trust
                                <i class="fas fa-hand-holding-heart" />
                            </div>
                            <c-button-arrows />
                        </div>
                        <div
                            slot="additional-action"
                            class="additional-action">
                            <div class="text">
                                Rating
                                <i class="fas fa-trophy" />
                            </div>
                            <c-button-arrows />
                        </div>
                    </c-heading-bar>
                    <div class="badges__list">
                        <div
                            v-for="(badge, index) in badges"
                            :key="index"
                            class="badges__item">
                            <div class="img">
                                <c-img :src="badge.img" />
                            </div>
                            <h3>{{ badge.title }}</h3>
                            <p>{{ badge.product }}</p>
                        </div>
                    </div>
                    <c-content-navigation />
                </div>
            </div>
            <div class="col-12 margin-top-40">
                <div class="featured-assets">
                    <c-heading-bar
                        name="Featured Assets"
                        :showArrows="false"
                        :showBackground="false" />

                    <c-featured-assets />

                    <c-content-navigation />
                </div>
            </div>
            <div class="col-12 margin-top-40">
                <div class="assets">
                    <c-heading-bar
                        name="Assets"
                        :showArrows="false"
                        :showBackground="false">
                        <div
                            slot="additional-action"
                            class="additional-action margin-left-20">
                            <div class="text">
                                Value
                                <i class="fas fa-dollar-sign" />
                            </div>
                            <c-button-arrows />
                        </div>
                        <div
                            slot="additional-action"
                            class="additional-action">
                            <div class="text">
                                Rating
                                <i class="fas fa-trophy" />
                            </div>
                            <c-button-arrows />
                        </div>
                    </c-heading-bar>

                    <c-assets-grid />

                    <c-content-navigation />
                </div>
            </div>

            <div class="col-12 margin-top-40">
                <div class="games-list">
                    <c-heading-bar
                        name="Games"
                        :showArrows="false"
                        :showBackground="false">
                        <div
                            slot="additional-action"
                            class="additional-action margin-left-20">
                            <div class="text">
                                Price
                                <i class="fas fa-dollar-sign" />
                            </div>
                            <c-button-arrows />
                        </div>
                        <div
                            slot="additional-action"
                            class="additional-action margin-left-20">
                            <div class="text">
                                Play Time
                                <i class="fas fa-clock" />
                            </div>
                            <c-button-arrows />
                        </div>
                        <div
                            slot="additional-action"
                            class="additional-action">
                            <div class="text">
                                Purchase Date
                                <i class="fas fa-calendar" />
                            </div>
                            <c-button-arrows />
                        </div>
                    </c-heading-bar>
                    <div class="games-list__grid">
                        <div
                            v-for="(game, index) in games"
                            :key="index"
                            class="games-list__grid-item">
                            <div class="img">
                                <c-img :src="game.img" />
                            </div>
                            <div class="info">
                                <h4>{{ game.title }}</h4>
                                <p>{{ game.developer }}</p>
                                <div class="time">
                                    <i class="fas fa-clock" />
                                    {{ Math.round(game.minutesPlayed / 60) }}h played
                                </div>
                            </div>
                        </div>
                    </div>
                    <c-content-navigation />
                </div>
            </div>

            <div class="col-12 margin-top-40 margin-bottom-40">
                <div class="profile__user-notify-card">
                    <div>
                        <c-user-card />
                    </div>
                    <div
                        v-if="!signedIn"
                        class="text text-left">
                        <h3>Create your BlockHub profile</h3>
                        <p>
                            BlockHub is the best place for curated community-driven game development,
                            digital assets and micro-licensing. Sign up for your own account and build
                            the future of gaming.
                        </p>
                        <c-button
                            to="/download"
                            status="success"
                            size="lg"
                            iconHide>
                            Sign Up
                        </c-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-stretch">
            <div class="col-12 col-md-8">
                <div class="badges">
                    <c-heading-bar
                        name="Badges"
                        :showArrows="false"
                        :showBackground="false">
                        <div
                            slot="additional-action"
                            class="additional-action margin-left-20">
                            <div class="text">
                                Trust
                                <i class="fas fa-hand-holding-heart" />
                            </div>
                            <c-button-arrows />
                        </div>
                        <div
                            slot="additional-action"
                            class="additional-action">
                            <div class="text">
                                Rating
                                <i class="fas fa-trophy" />
                            </div>
                            <c-button-arrows />
                        </div>
                    </c-heading-bar>
                    <div class="badges__list">
                        <div
                            v-for="(badge, index) in badges"
                            :key="index"
                            class="badges__item">
                            <div class="img">
                                <c-img :src="badge.img" />
                            </div>
                            <h3>{{ badge.title }}</h3>
                            <p>{{ badge.product }}</p>
                        </div>
                    </div>
                    <c-content-navigation />
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="basic-info">
                    <c-heading-bar
                        name="Basic Information"
                        :showArrows="false"
                        :showBackground="false" />
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        'c-assets-grid': () => import('~/components/assets-grid').then(m => m.default || m),
        'c-featured-assets': () => import('~/components/assets-list-item/featured-list').then(m => m.default || m),
        'c-user-card': () => import('~/components/user-card').then(m => m.default || m),
        'c-button-arrows': () => import('~/components/buttons/arrows').then(m => m.default || m),
        'c-user-head': () => import('~/components/user/header').then(m => m.default || m)
    },
    props: ['id'],
    data() {
        return {
            badges: [],
            games: []
            // badge: {
            //     img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
            //     title: 'Protector of the Reign',
            //     product: 'Product name'
            // },
            // game: {
            //     img: 'http://via.placeholder.com/350x150',
            //     title: 'Tibia MMORPG',
            //     developer: 'CipSoft Entertainment GmbH',
            //     minutesPlayed: 8931
            // }
        }
    },
    computed: {
        signedIn() { return this.$store.state.application.signedIn },
        profile() { return this.$store.state.application.activeProfile }
    },
    created() {
        // $('.rating_readonly').raty({ readOnly: true })
    },
    methods: {
        showSendPopup() {
            this.$store.dispatch('application/activateModal', 'send-funds')
        }
    }
}
</script>

<style lang="scss" scoped>

    .profile__wallet{
        width: auto;
        line-height: 30px;
        margin-right: 15px;
        span{
            margin-left: 10px;
            width: 300px;
            text-overflow: ellipsis;
            display: inline-block;
            overflow: hidden;
            float: right;
            user-select: text;
        }
    }
    .profile__action-group{
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

    .profile__user-notify{
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

    .profile__user-notify-card{
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
