<template>
    <c-layout navigationKey="store">
        <div class="row">
            <div class="col-12 mb-4">
                <c-download-block />
            </div>
            <div class="col-12 col-md-4 margin-bottom-10">
                <div class="card invert py-3">
                    <div class="card-body text-center">
                        <h4 class="text-uppercase">
                            Inter-Game Trading
                        </h4>
                        <p>
                            Trade your FPS skins
                            for the best sword in
                            your favorite MMORPG
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 margin-bottom-10">
                <div class="card invert py-3">
                    <div class="card-body text-center">
                        <h4 class="text-uppercase">
                            Empower Creators
                        </h4>
                        <p>
                            Know a nice game project?<br>
                            Help the develpment get crowdfunded
                            on BlockHub
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 margin-bottom-10">
                <div class="card invert py-3">
                    <div class="card-body text-center">
                        <h4 class="text-uppercase">
                            New Economies
                        </h4>
                        <p>
                            Participate in new
                            microeconomies using
                            blockchain technology
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
    <!-- <c-layout navigationKey="store" :showLeftPanel="false" :showRightPanel="false">

        <div class="row download-pane block-1 align-items-center pb-5 justify-content-between">
            <div class="col-12 col-lg-5">
                <div class="download-pane__content Client-headerContent left pl-4">
                    <h1 class="Heading Heading--pageTitle Client-headerHeading">
                        <div>BlockHub</div>
                        <div>Desktop App</div>
                    </h1>
                    <div class="download-pane__feature-group">
                        <div class="download-pane__fg-subtitle mb-4">Your gateway to all things BlockHub</div>
                        <ul class="list-unstyled">
                            <li>
                                <i class="fas fa-th mr-2"></i>
                                Your games in one place
                            </li>
                            <li>
                                <i class="fas fa-users mr-2"></i>
                                Connect with friends
                            </li>
                            <li>
                                <i class="fas fa-gift mr-2"></i>
                                Shop for digital games and goodies
                            </li>
                        </ul>
                    </div>
                    <div class="Client-ctaWrapper mt-5">
                        <c-button status="second-info" size="xl" class="w-100 mb-4">
                            DOWNLOAD FOR MAC
                        </c-button>
                        <center>
                            Also available for
                            <c-button status="plain" class="p-0">Windows</c-button>
                        </center>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7 pr-0">
                <div class="download-pane__content Client-headerContent right">
                    <div class="download-pane__slider-wrapper">
                        <c-swiper>
                            <c-slide class="sl-item">
                                <img src="https://d9me64que7cqs.cloudfront.net/images/desktop/en-us/column01-phoenix-w2500-1e1f5af92ef1c70347bb35048f4481064f484cd25da063754b42a23c5457dba6a27781d6dcd419070ee68c655ff3f90b55fd737951647c118a01afeed8734d9a.png">
                            </c-slide>
                            <c-slide class="sl-item">
                                <img src="https://d9me64que7cqs.cloudfront.net/images/desktop/en-us/column01-phoenix-w375-53a61c85c376f3cf9ecc26e7cf82de20a53e4b628b66fada9c4a3ddffef47ef0e868cc976e2ef7b70abeb0fb85511b197ada16bc72c5d080338ad712aa9c19b3.png" class="Client-poster hide-xs">
                            </c-slide>
                        </c-swiper>
                    </div>
                </div>
            </div>
        </div>

        <div class="row download-pane block-2 py-5 justify-content-end align-items-stretch position-relative">
            <div class="download-pane__img-overlay"></div>
            <div class="col-12 mb-5">
                <center class="h1 font-weight-light text-dark">
                    Your games in one place
                </center>
            </div>
            <div class="col-12 col-lg-6">
                <div class="text-dark pr-4">
                    <div class="block-icon">
                        <div class="block-icon__icon">
                            <i class="fas fa-play-circle"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 font-weight-light pt-0">Play your games</div>
                            <p>Your BlockHub games are easily accessible so you can
                                quickly jump in and start playing. When you’re not playing, the app automatically
                                updates each game to the latest version.</p>
                        </div>
                    </div>
                    <div class="block-divider"></div>
                    <div class="block-icon">
                        <div class="block-icon__icon">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 font-weight-light">Discover new adventures</div>
                            <p>Curious about a game you don’t have installed? Give it a
                                try right from its game tab. Most BlockHub games are free to try!</p>
                        </div>
                    </div>
                    <div class="block-divider"></div>
                    <div class="block-icon pb-5">
                        <div class="block-icon__icon">
                            <i class="fas fa-sun"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 font-weight-light">Stay up to date with the latest news</div>
                            <p>The BlockHub app also has curated news about BlockHub
                                games, events, merchandise, and more – so you never miss out on what’s new at
                                BlockHub.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row download-pane align-items-center block-3 py-5">
            <div class="col-12 mb-5">
                <center class="h1 font-weight-light">
                    Connect with friends and fellow gamers
                </center>
            </div>
            <div class="col-12 col-lg-6">
                <div class="pl-4">
                    <div class="block-icon">
                        <div class="block-icon__icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 pt-0">Customize your profile</div>
                            <p>Your profile is a snapshot of your activity and interests, even outside BlockHub games.</p>
                        </div>
                    </div>
                    <div class="block-divider white-divider"></div>
                    <div class="block-icon">
                        <div class="block-icon__icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 pt-0">Find new friends and see what they’re playing</div>
                            <p>It’s easy to find and add new friends using the app. When you’re friends, you can see at
                                a glance what they’re up to - so you’ll know when to jump into a game, or when to get
                                one going yourself.</p>
                        </div>
                    </div>
                    <div class="block-divider white-divider"></div>
                    <div class="block-icon">
                        <div class="block-icon__icon">
                            <i class="fas fa-comments"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 pt-0">Chat with friends</div>
                            <p>Your BlockHub friends are just a click away whether you’re in a game or just have the app
                                open. You can also chat on the go with the BlockHub mobile app.</p>
                        </div>
                    </div>
                    <div class="block-divider white-divider"></div>
                    <div class="block-icon">
                        <div class="block-icon__icon">
                            <i class="fas fa-headset"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 pt-0">Jump into voice chat</div>
                            <p>Built-in voice chat makes it easy to keep a group coordinated when you’re playing
                                together, and easy to keep together if you move to another game.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 pr-0">
                <c-swiper>
                    <c-slide class="sl-item">
                        <img
                            src="https://d9me64que7cqs.cloudfront.net/images/desktop/en-us/column03-social-group-w1600-a90eabbe50d0f74cc1eddef10f46fcdc46b5f1b7bf2e876725b4bdbc6960f4ecbd2a1f91ca4c06d77edb067fee2897e7b84b48cd40bd28ee2e8b1467c9f84ff4.png"/>
                    </c-slide>
                    <c-slide class="sl-item">
                        <img
                            src="https://d9me64que7cqs.cloudfront.net/images/desktop/en-us/column03-social-friends-w1600-0526d990420bfc96c8027ba565ecec7aa2694a2ef67f55686e01792468d2ab53cfe33d55a2437b85f5ff43c7d32b3c0b909e809b861bc6c491f3159ad32a7911.png"/>
                    </c-slide>
                </c-swiper>
            </div>
        </div>

        <div class="row download-pane block-4 py-5 justify-content-end align-items-stretch position-relative">
            <div class="col-12 mb-5">
                <center class="h1 font-weight-light text-white">
                    Shop for digital games and goodies
                </center>
            </div>
            <div class="col-12 col-lg-6 col-xl-5">
                <div class="text-dark pr-4">
                    <div class="block-icon text-white">
                        <div class="block-icon__icon">
                            <i class="fas fa-thumbs-up"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3 pt-0">The best place to get digital BlockHub games</div>
                            <p>Purchase new games and expansions directly from the app. You’re only a few clicks away from your next adventure.</p>
                        </div>
                    </div>
                    <div class="block-divider white-divider"></div>
                    <div class="block-icon text-white">
                        <div class="block-icon__icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3">Buy in-game items quickly and easily</div>
                            <p>The BlockHub Shop is also where you’ll find in-game items such as loot boxes, pets, mounts, and more.</p>
                        </div>
                    </div>
                    <div class="block-divider white-divider"></div>
                    <div class="block-icon pb-5 text-white">
                        <div class="block-icon__icon">
                            <i class="fas fa-gift"></i>
                        </div>
                        <div class="block-icon__text">
                            <div class="h3">Exchange digital gifts with friends</div>
                            <p>Send and receive digital games and in-game items right from the BlockHub app.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row download-pane block-5 justify-content-end align-items-stretch position-relative">
            <div class="col-12 text-center text-dark">
                <div class="h4">
                    Download the BlockHub Desktop App. It’s your gateway to all things gaming.
                </div>
                <c-button status="second-info mt-5 mb-4" size="xl">
                    DOWNLOAD FOR PC
                </c-button>
                <center>
                    Also available for
                    <c-button status="plain" class="text-dark p-0">Windows</c-button>
                </center>
            </div>
        </div>


        <div class="row" hidden>
            <div class="col-12 mb-4">
                <c-download-block/>
            </div>
            <div class="col-12 col-md-4 margin-bottom-10">
                <div class="card invert py-3">
                    <div class="card-body text-center">
                        <h4 class="text-uppercase">
                            Inter-Game Trading
                        </h4>
                        <p>
                            Trade your FPS skins
                            for the best sword in
                            your favorite MMORPG
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 margin-bottom-10">
                <div class="card invert py-3">
                    <div class="card-body text-center">
                        <h4 class="text-uppercase">
                            Empower Creators
                        </h4>
                        <p>
                            Know a nice game project?<br>
                            Help the develpment get crowdfunded
                            on BlockHub
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 margin-bottom-10">
                <div class="card invert py-3">
                    <div class="card-body text-center">
                        <h4 class="text-uppercase">
                            New Economies
                        </h4>
                        <p>
                            Participate in new
                            microeconomies using
                            blockchain technology
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </c-layout> -->
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        components: {
            'c-download-block': (resolve) => require(['@/ui/components/download-block'], resolve),
            'c-block-with-icon': (resolve) => require(['@/ui/components/block/with-icon'], resolve),
            'c-swiper': swiper,
            'c-slide': swiperSlide,
        },
        mounted() {
            window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/download-bg.png)'
        },
        created() {
            $('body').addClass('screen--download')
        },
        beforeDestroy() {
            $('body').removeClass('screen--download')
        },
    }
</script>

<style lang="scss" scoped>
    .download-pane {
        min-height: 500px;
    }

    .block-1 {
        overflow: hidden;
        background: #022259 url('https://d9me64que7cqs.cloudfront.net/images/desktop/column01-bg-w1600-dd4ef07d84650af933053e58afbe33a1b272fb5fdd778eec98cea4dfcfa013e85037978285cb5d64891b50ad78d1fabebccce862abd2ea1fa66d4eaea76ef433.jpg') no-repeat center bottom;
        padding: 70px 0 70px 70px;
    }

    .block-2 {
        background: #beaa91 url('https://d9me64que7cqs.cloudfront.net/images/desktop/column02-bg-w1600-6b76ac3ea15ba89804e10127713c6910f992b43d548f8f1051e913798a204d01c69553a157dfe71b324f1c16252f6d9225121aeb7049c38781c72b01c8e3452c.jpg') no-repeat center bottom;
        background-size: auto;
        padding: 70px;
    }

    .block-3 {
        overflow: hidden;
        background: #0c2955 url('https://d9me64que7cqs.cloudfront.net/images/desktop/column03-bg-w1600-629a3ff07ff12c56a1ca06c4e0c81153beb13efd5454a69580de68c9f2873d31353207cf8a36bf40f53aaed00d8bc492f3818a7320dfdea72c465f4b1a387185.jpg') no-repeat center bottom;
        background-size: auto;
        padding: 70px 0 70px 70px;
    }

    .block-4 {
        background: #141804 url('https://d9me64que7cqs.cloudfront.net/images/desktop/column04-bg-w1200-9b883f7019bdf8fbe30a9deeacafcd9e5d5cc769a4103263d4a7efa44db341aa48fec6e78f1a21adc818053935fbf847291e2603bf26fc491568a7effcaccaa2.jpg') no-repeat center top;
        background-size: 100%;
        padding: 70px;
    }

    .block-5{
        padding: 100px 0;
        min-height: 300px;
        background-image: url('https://d9me64que7cqs.cloudfront.net/images/common/background-inverse-ice-782a4077912d3cddcc133be4c0f39120d8ed7b20e6bba2acbd09f16cc3b679e4c6be556956db5c6514c85ef7422d8586519c116906f9c19ad76a32beb5e84f7d.jpg');
    }

    .download-pane__video-wrapper {
        margin-right: -20px;
        video {
            width: 100%;
        }
    }

    .download-pane__content .Client-headerHeading {
        text-shadow: -7px 5px 15px rgba(0, 0, 0, 0.26);
        display: block;
        font-size: 35px;
        width: 100%;
        font-weight: 900;
        text-transform: uppercase;
    }

    .download-pane__feature-group {
        font-size: 18px;
        font-weight: 500;
        li {
            padding: 3px 0;
            font-size: 16px;
        }
        i {
            width: 22px;
            font-size: 16px;
            text-align: center;
            color: #f78d00;
        }
    }

    .download-pane__img-overlay {
        position: absolute;
        top: -50px;
        bottom: 0;
        left: 0;
        right: 55%;
        display: block;
        background: url("https://d9me64que7cqs.cloudfront.net/images/desktop/column02-games-w1600-d1fe4a320e8f105b7bee286d401637bc6bf1567163b97ab91e4d31a0c69c39800ed2c02e1ae06a254d1d7573cb622a76749bb3870388f804f0bad66770488e79.png");
        background-position: top right;
        background-size: auto 100%;
    }

    .block-icon {
        display: inline-flex;
        position: relative;
    }

    .block-icon__icon {
        width: auto;
        text-align: left;
        margin-right: 20px;
        font-size: 18px;
        margin-top: 5px;
        color: #f88e00;
    }

    .block-icon__text {
        position: relative;
        z-index: 2;
    }

    .block-divider {
        margin: 30px 0 25px;
        width: calc(100% - 40px);
        float: right;
        height: 1px;
        background: rgba(0, 0, 0, .1);
        &.white-divider {
            background: rgba(255, 255, 255, .2);
        }
    }

    .sl-item {
        overflow: hidden;
        img {
            width: 120%;
            object-fit: cover;
            object-position: left;
        }
    }
</style>

<style lang="scss">
    body.screen--download {
        .page__content > .content, #page-content, #content, #content > .container-fluid {
            padding: 0 !important;
        }
    }
</style>
