<template>
    <!-- PAGE WRAPPER -->
    <div class="page page--w-header page--w-container">
        <!-- PAGE HEADER -->
        <c-header />
        <!-- //END PAGE HEADER -->

        <!-- PAGE CONTENT WRAPPER -->
        <div class="page__content page__content-invert invert" id="page-content">
            <div class="loading loading--w-spinner" v-if="!is_connected">
                <div>
                    <div>
                        <div class="loading-spinner"></div>
                        <p class="loading__message">{{ user_submitted_connection_message.message }}</p>
                        <p class="loading__user">Submitted by <a :href="`/#/identity/${user_submitted_connection_message.user.id}`">@{{ user_submitted_connection_message.user.name }}</a></p>
                    </div>

                    <h1 class="loading__status-code" v-if="connection_status.code">ERROR {{ connection_status.code }}</h1>

                    <p class="loading__status-message">{{ connection_status.message }}</p>

                    <div class="loading__links">
                        <p>Connection problems? Let us know!</p>
                        <a href="https://twitter.com/hyperbridge"><span class="fab fa-twitter"></span> Tweet Us</a>
                        <a href="https://hyperbridge.org/status"><span class="fas fa-globe-americas"></span> Server Status</a>
                    </div>
                </div>
            </div>

            <!-- PAGE ASIDE PANEL -->
            <div class="page-aside invert" id="page-aside">
                <component v-if="navigationComponent" v-bind:is="`c-${navigationComponent}`"></component>
            </div>
            <!-- //END PAGE ASIDE PANEL -->

            <slot></slot>

            <!-- SIDEPANEL -->
            <div class="page-sidepanel invert" id="page-sidepanel">
                <div class="page-sidepanel__content">
                    <div class="owl-carousel" data-nav-dots="true" data-nav-arrow="true" data-items="1" data-sm-items="1" data-lg-items="1" data-md-items="1" data-autoplay="false">
                        <div class="item">
                            <h3>NOTIFICATIONS</h3>

                            <div class="slide-chooser">
                                <button class="btn active js-go-notifications">
                                    <span class="icon fa fa-bell" />
                                </button>
                                <button class="btn js-go-messages">
                                    <span class="icon fa fa-envelope" />
                                </button>
                                <button class="btn js-go-updates">
                                    <span class="icon fa fa-star" />
                                </button>
                                <button class="btn js-go-lists">
                                    <span class="icon fa fa-trophy" />
                                </button>
                            </div>

                            <div class="navigation">
                                <c-notification
                                    v-for="(notif, index) in ntf_messages"
                                    :key="index"
                                    :notification="notif"
                                />
                            </div>

                        </div>
                        <div class="item">
                            <h3>MESSAGES</h3>

                            <div class="slide-chooser">
                                <button class="btn js-go-notifications">
                                    <span class="icon fa fa-bell" />
                                </button>
                                <button class="btn active js-go-messages">
                                    <span class="icon fa fa-envelope" />
                                </button>
                                <button class="btn js-go-updates">
                                    <span class="icon fa fa-star" />
                                </button>
                                <button class="btn js-go-lists">
                                    <span class="icon fa fa-trophy" />
                                </button>
                            </div>

                            <div class="navigation">
                                <div class="messages-action">
                                    <a href="#3" class="btn">Quick Send</a>
                                    <a href="#3" class="btn">Go to Messages</a>
                                </div>
                                <ul class="message-list">
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                    <li class="message-list__item">
                                        <i class="fas fa-reply"></i>
                                        <h5>Username, 2 days ago:</h5>
                                        <p>Maybe I ought to crank Morley Safer's poutine,
                                            eh, that should to start them up.</p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="item">
                            <h3>UPDATES</h3>

                            <div class="slide-chooser">
                                <button class="btn js-go-notifications">
                                    <span class="icon fa fa-bell" />
                                </button>
                                <button class="btn js-go-messages">
                                    <span class="icon fa fa-envelope" />
                                </button>
                                <button class="btn active js-go-updates">
                                    <span class="icon fa fa-star" />
                                </button>
                                <button class="btn js-go-lists">
                                    <span class="icon fa fa-trophy" />
                                </button>
                            </div>

                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP 5</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">BlockHub v1.0.15</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">With the last update, we bring lorem ipsum dolor sit amet and check the changelog.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <br />
                                        <button class="btn btn-outline-info btn-sm" style="color: #fff;border: 2px solid #fff;"><span class="icon fa fa-sync" /> Relaunch</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div class="item">
                            <h3>TOP LISTS</h3>

                            <div class="slide-chooser">
                                <button class="btn js-go-notifications">
                                    <span class="icon fa fa-bell" />
                                </button>
                                <button class="btn js-go-messages">
                                    <span class="icon fa fa-envelope" />
                                </button>
                                <button class="btn js-go-updates">
                                    <span class="icon fa fa-star" />
                                </button>
                                <button class="btn active js-go-lists">
                                    <span class="icon fa fa-trophy" />
                                </button>
                            </div>

                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP 5</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Joe's Adventure</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">The Mission</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Gym with Tim</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/">
                                            <span class="text">MORE...</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navigation">
                                <ul>
                                    <li class="title">TOP FREE</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Joe's Adventure</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">The Mission</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Gym with Tim</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/">
                                            <span class="text">MORE...</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navigation">
                                <ul>
                                    <li class="title">MOST RENTABLE</li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Joe's Adventure</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">The Mission</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#/product/1">
                                            <span class="text">Gym with Tim</span>
                                        </a>
                                    </li>
                                    <li class="more">
                                        <a href="/#/">
                                            <span class="text">MORE...</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-sidepanel__button page-sidepanel__button--lower" data-action="sidepanel-hide"><div></div></div>
            </div>
            <!-- //END SIDEPANEL -->

            <div class="status-bar" hidden>
                {{ connection_status.message }}
            </div>
        </div>
        <!-- //END PAGE CONTENT -->

    </div>
    <!-- //END PAGE WRAPPER -->
</template>


<script>
export default {
    props: [
        'navigationKey'
    ],
    components: {
        'c-header': () => import('@/ui/components/headers/basic'),
        'c-wallet-navigation': () => import('@/ui/components/navigation/wallet'),
        'c-account-navigation': () => import('@/ui/components/navigation/account'),
        'c-settings-navigation': () => import('@/ui/components/navigation/settings'),
        'c-help-navigation': () => import('@/ui/components/navigation/help'),
        'c-funding-navigation': () => import('@/ui/components/navigation/funding'),
        'c-store-navigation': () => import('@/ui/components/navigation/store'),
        'c-asset-navigation': () => import('@/ui/components/navigation/asset'),
        'c-product-navigation': () => import('@/ui/components/navigation/product'),
        'c-project-navigation': () => import('@/ui/components/navigation/project'),
        'c-notification': () => import('@/ui/components/notification'),
    },
    computed: {
        is_connected() {
            return this.$store.state.network.connection.datasource
        },
        connection_status() {
            return this.$store.state.network.connection.status
        },
        user_submitted_connection_message() {
            return this.$store.state.network.user_submitted_connection_messages[0]
        }
    },
    data() {
        return {
            ntf_messages: [
                {
                    type: 'info',
                    title: 'Info message',
                    text: 'Something is changed in our policy, please view this notification.Click to view full',
                    actionOnClose: false,
                    actionOnTextClick: true
                },
                {
                    type: 'warning',
                    title: 'Warning message',
                    text: 'Something is changed in our policy, please view this notification.Click to view full',
                    actionOnClose: '',
                    actionOnTextClick: ''
                },
                {
                    type: 'danger',
                    title: 'Danger message',
                    text: 'Something is changed in our policy, please view this notification.Click to view full',
                    actionOnClose: '',
                    actionOnTextClick: ''
                },
                {
                    type: 'success',
                    title: 'Success message',
                    text: 'Something is changed in our policy, please view this notification.Click to view full',
                    actionOnClose: '',
                    actionOnTextClick: ''
                },
                {
                    type: '',
                    title: 'Other message',
                    text: 'Something is changed in our policy, please view this notification.Click to view full',
                    actionOnClose: '',
                    actionOnTextClick: ''
                },
            ],
            navigationComponent: this.navigationKey || false
        }
    },
    updated() {

        //$('.owl-controls').insertBefore('')
    },
    methods: {
        installOwlCarousel: function () {
            window.owlcarousel()

            let owl = $('.owl-carousel').owlCarousel()

            owl.trigger('to.owl.carousel', [3])

            $('.js-go-notifications').click(function() {
                owl.trigger('to.owl.carousel', [0])
            })

            $('.js-go-messages').click(function() {
                owl.trigger('to.owl.carousel', [1])
            })

            $('.js-go-updates').click(function() {
                owl.trigger('to.owl.carousel', [2])
            })

            $('.js-go-lists').click(function() {
                owl.trigger('to.owl.carousel', [3])
            })
        }
    },
    mounted: function () {
        this.$nextTick(() => {
            this.installOwlCarousel()
        })
    }
}
</script>

<style lang="scss">

    .owl-controls {
        display: none !important;
    }

    .owl-carousel .owl-stage {
        transition: unset !important;
    }

</style>

<style lang="scss" scoped>

    .page-sidepanel {
        text-align: right;
        padding-right: 30px;
    }

    .navigation {
        margin-bottom: 50px;
        max-height: calc( 100vh - 160px);
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: 10px;
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #272d46;
        }

        &::-webkit-scrollbar {
            width: 6px;
            background-color: #272d46;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #181826;
            border: none;
        }
    }

    .navigation .text {
        float: right;
    }

    .slide-chooser {
        margin-bottom: 10px;

        .btn {
            background: transparent;
            opacity: 0.5;
            color: #fff;
            padding: 6px 6px;

            &.active {
                opacity: 1;
            }

            &:hover {
                background: transparent;
                opacity: 1;
            }

            span {
                font-size: 16px;
            }
        }
    }

    .status-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background: #48171D;
        border-top: 2px solid #48171D;
        color: #fff;
    }

    .loading > div {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        padding-top: 100px;
        font-size: 14px;
    }

    .loading--w-spinner > div .loading-spinner {
        position: relative;
        zoom: 4;
        margin: 0 auto;
    }

    .loading__message {
        color: #fff;
        font-size: 20px;
        font-style: italic;
        text-transform: uppercase;
        margin-top: 40px;
    }

    .loading__user {
        color: #999;
        text-transform: uppercase;

        a {
            color: #ddd;
            font-weight: bold;
        }
    }

    .loading__status-code {
        margin-top: 80px;
    }

    .loading__status-message {
        color: #ddd;
        font-size: 16px;
        margin-top: 30px;
        text-transform: uppercase;
    }

    .loading__links {
        position: absolute;
        bottom: 30px;
        left: 0;
        text-align: center;
        width: 100%;
        font-size: 16px;

        p {
            color: #999;
        }

        a {
            margin-right: 20px;
            font-size: 18px;
            font-weight: bold;

            span {
                color: #fff;
                margin-right: 5px;
            }
        }
    }

    .messages-action{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        a{
            padding: 3px;
            background: #5D75F7;
            border-radius: 3px;
            color: #fff;
            font-size: 14px;
            &:hover{
                background: #5065d4;
            }
        }
    }

    .message-list__item{
        background: rgba(0, 0, 0, .5);
        border-radius: 5px;
        padding: 6px;
        color: #fff;
        text-align: left;
        position: relative;
        margin-bottom: 10px;
        &:last-child{
            margin-bottom: 0;
        }
        h5{
            max-width: calc( 100% - 20px );
        }
        i{
            position: absolute;
            top: 6px;
            right: 6px;
            font-size: 16px;
            color: #fff;
        }
    }

    .notifi_item{
        padding: 0;
        border: 1px solid #C6C6D6;
        background: #C6C6D6;
        border-radius: 5px;
        margin-bottom: 15px;
        color: #3D3E5D;
        .title{
            width: 100%;
            display: inline-block;
            padding: 3px 20px 3px 8px;
            background: rgba(39, 40, 62, .9);
            border-radius: 5px 5px 0 0;
            position: relative;
            color: #fff;
            float: right;
            margin-bottom: 0;
            font-size: 13px;
            font-weight: bold;
            h5{
                padding: 0;
                margin: 0;
                line-height: 17px;
                i{
                    margin-right: 10px;
                    color: #C6C6D6;
                }
            }
            .close{
                text-shadow: unset;
                opacity: 1;
                float: right;
                position: absolute;
                top: 4px;
                right: 7px;
                font-size: 16px;
                i{
                    margin: 0;
                    color: #fff!important;
                }
            }
        }
        .text{
            display: inline-block;
            width: 100%;
            float: left;
            padding: 5px 8px;
            text-align: left;
            line-height: 16px;
        }
        &.info{
            background: #5D75F7;
            border-color: #5D75F7;
            color: #fff;
            .title{
                h5{
                    i{
                        color: #5D75F7;
                    }
                }
            }
        }
        &.success{
            background: #428c01;
            border-color: #428c01;
            color: #fff;
            .title{
                h5{
                    i{
                        color: #428c01;
                    }
                }
            }
        }
        &.warning{
            background: #FADC72;
            border-color: #FADC72;
            color: #000;
            .title{
                h5{
                    i{
                        color: #FADC72;
                    }
                }
            }
        }
        &.danger{
            background: #E55555;
            border-color: #E55555;
            color: #fff;
            .title{
                h5{
                    i{
                        color: #E55555;
                    }
                }
            }
        }
    }
</style>
