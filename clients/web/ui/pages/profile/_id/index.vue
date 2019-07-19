<template>
    <c-layout :breadcrumbLinks="breadcrumbLinks">
        <c-user-head />
        <div class="row justify-content-between align-items-center">
            <div class="col-12 d-flex margin-top-30 justify-content-end">
                <div class="profile__wallet">
                    <i class="fas fa-copy" />
                    <span id="walletNumber">{{ profile && profile.address }}</span>
                </div>
                <div class="profile__action-group">
                    <c-button
                        status="info"
                        icon="arrow-up"
                        @click="showSendPopup">
                        Send
                    </c-button>
                    <c-button
                        v-access="'sharing'"
                        status="share">
                        Share
                    </c-button>
                    <c-button
                        v-access="'reporting'"
                        status="danger">
                        Report
                    </c-button>
                </div>
            </div>
            <div
                v-if="!signedIn && !$store.state.application.settings.client.hideProfileSignup"
                class="col-12">
                <c-block class="profile__user-notify">
                    <c-button
                        class="btn-close"
                        @click="$store.commit('application/updateClientSettings', { key: 'hideProfileSignup', value: true })">
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
                </c-block>
            </div>
            <div class="col-12 margin-top-40">
                <c-block class="badges2">
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
                    <div class="badges2__list">
                        <div
                            v-for="(badge, index) in badges"
                            :key="index"
                            class="badges2__item">
                            <div class="img">
                                <c-img :src="badge.img" />
                            </div>
                            <h3>{{ badge.title }}</h3>
                            <p>{{ badge.product }}</p>
                        </div>
                    </div>
                    <c-content-navigation />
                </c-block>
            </div>
            <div class="col-12 margin-top-40">
                <c-block class="featured-assets">
                    <c-heading-bar
                        name="Featured Assets"
                        :showArrows="false"
                        :showBackground="false" />

                    <c-featured-assets />

                    <c-content-navigation />
                </c-block>
            </div>
            <div class="col-12 margin-top-40">
                <c-block title="Badges">
                    <div class="identity-page__description margin-bottom-30">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet arcu nec tortor consectetur
                            faucibus. Fusce consequat fermentum fermentum. Nulla semper nisi id augue lobortis, a suscipit
                            dui feugiat. Duis feugiat dictum porta. Sed suscipit elementum accumsan. Morbi fringilla sem
                            elit, ac elementum tellus egestas quis.
                        </p>
                    </div>
                    <div>
                        <ul class="badge-list">
                            <li
                                v-for="(badge, idx) in badges"
                                :key="`badge-${idx}`"
                                class="badge-list__item"
                                :class="{'badge-list__item--disabled': badge.disabled}">
                                <div class="badge-list__item-icon">
                                    <i :class="`fas ${badge.icon}`" />
                                </div>
                                <div class="badge-list__item-text">
                                    <div class="h5 font-weight-bold">
                                        {{ badge.title }}
                                    </div>
                                    <p>
                                        {{ badge.description }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </c-block>
            </div>
            <div class="col-12 margin-top-40">
                <c-block class="assets">
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
                </c-block>
            </div>

            <div class="col-12 margin-top-40">
                <c-block class="games-list">
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
                </c-block>
            </div>

            <div class="col-12 margin-top-40 margin-bottom-40">
                <c-block class="profile__user-notify-card">
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
                </c-block>
            </div>
        </div>
        <div class="row align-items-stretch">
            <div class="col-12 col-md-4">
                <c-block class="basic-info">
                    <c-heading-bar
                        name="Basic Information"
                        :showArrows="false"
                        :showBackground="false" />
                </c-block>
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
    data() {
        return {
            badges: [
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-shield-alt',
                    title: 'Duis feugiat dictum porta',
                    description: 'Sed suscipit elementum accumsan. Morbi fringilla sem elit, ac elementum tellus egestas quis.',
                    disabled: false
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-leaf',
                    title: 'Nullam in libero',
                    description: 'Quisque ornare nisl a vestibulum feugiat. Proin nisl lorem, lacinia non mi nec, cursus sollicitudin nunc.',
                    disabled: true
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-crown',
                    title: 'Proin ac tellus tempus',
                    description: 'Nunc maximus nunc est. Nullam vulputate nisi eros, eget porta ex porta vitae.',
                    disabled: true
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-cannabis',
                    title: 'Suspendisse ac lorem rutrum',
                    description: 'Vivamus convallis, ligula id tincidunt egestas, nunc odio ultrices leo, in luctus nisi magna ut quam.',
                    disabled: false
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-certificate',
                    title: 'Class aptent taciti sociosqu ad',
                    description: 'Aliquam fringilla aliquet pellentesque. Class aptent taciti per conubia nostra, per inceptos himenaeos.',
                    disabled: false
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-bolt',
                    title: 'Sed vestibulum molestie',
                    description: 'Nulla in nibh nec urna laoreet gravida vel suscipit nulla',
                    disabled: false
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-award',
                    title: 'Ut lacinia nec ante vitae cursus',
                    description: 'Sed varius nisl vitae leo rhoncus, accumsan tincidunt orci sagittis. Donec dictum, lectus at accumsan rutrum.',
                    disabled: true
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-bell',
                    title: 'Suspendisse a varius nisi',
                    description: 'Quisque ornare nisl a vestibulum feugiat. Proin nisl lorem, lacinia non mi nec, cursus sollicitudin nunc.',
                    disabled: true
                },
                {
                    img: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Badges-and-Labels-PNG/Gold_Oval_Badge_Transparent_PNG_Clip_Art_Image.png?m=1507172108',
                    product: 'Product name',
                    minutesPlayed: 8931,
                    icon: 'fa-cookie',
                    title: 'Morbi lobortis laoreet neque',
                    description: 'Vestibulum ornare porttitor libero. Morbi lobortis laoreet neque a rhoncus.',
                    disabled: true
                }
            ],
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
        signedIn() { return this.$store.state.application.signedIn }
    },
    async asyncData({ params, store, error }) {
        await store.dispatch('profiles/find', {
            query: {
                id: Number(params.id)
            }
        })

        const profile = store.getters['profiles/get'](params.id)

        if (!profile) return error({ statusCode: 404, message: 'Profile not found' })

        return {
            profile,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: `/profiles/${profile.id}` }, title: profile.name }
            ]
        }
    },
    created() {
        // $('.rating_readonly').raty({ readOnly: true })
    },
    methods: {
        showSendPopup() {
            this.$store.dispatch('application/activeModal', 'sendFunds')
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
    }

    .badge-list{
        padding: 0;
        margin: 0;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin: 0 -10px;
        flex-wrap: wrap;
    }
    .badge-list__item{
        list-style: none;
        width: calc( 50% - 20px);
        margin: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        &--disabled{
            .badge-list__item-icon{
                &:after{
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: rgba(0, 0, 0, .6);
                }
            }
            .badge-list__item-text{
                opacity: .5;
            }
        }
    }
    .badge-list__item-icon{
        margin-right: 20px;
        flex-basis: 40px;
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        border-radius: 5px;
        background: rgba(255, 255, 255, .05);
        border: 1px solid rgba(0, 0, 0, .1);
        position: relative;
        overflow: hidden;
    }
    .badge-list__item-text{
        width: calc( 100% - 60px )
    }
    .badges2{
        border-radius: 5px;
        background: rgba(28, 32, 59, .5);
        padding: 15px 15px 0 15px;
    }
    .badges2__list{
        display: flex;
        margin-top: 15px;
        width: 100%;
        justify-content: space-between;
    }
    .badges2__item{
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
    }

    .assets{
    }

    .games-list{
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
        text-align: center;
        position: relative;
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
    }
</style>
