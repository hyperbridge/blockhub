<template>
    <div class="page-sidepanel invert text-right" id="page-sidepanel">
        <div class="page-sidepanel__content">
            <c-swiper ref="mySwiper">
                <c-slide v-if="$store.state.application.signedIn">
                    <div class="item">
                        <h3>NOTIFICATION</h3>

                        <div class="slide-chooser">
                            <c-button status="plain" icon-hide @click="showSlide('notification')" class="active"
                                        v-if="$store.state.application.signedIn">
                                <i class="fa fa-bell"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('messages')"
                                        style="box-shadow: none" v-if="$store.state.application.signedIn" v-darklaunch="'MESSAGES'">
                                <i class="fa fa-envelope"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('updates')"
                                        style="box-shadow: none" v-if="$store.state.application.desktopMode">
                                <i class="fa fa-star"/>
                            </c-button>
                            <c-button status="plain" icon-hide v-if="navigationKey === 'store'" @click="showSlide('top_lists')"
                                        style="box-shadow: none">
                                <i class="fa fa-trophy"/>
                            </c-button>
                        </div>

                        <div class="navigation">
                            <div v-if="$store.state.application.account.notifications.length > 0">
                                <c-notification v-for="(notif, index) in $store.state.application.account.notifications" @showPopup="$store.commit('application/showNotification', notif)"
                                                :key="index" :notification="notif" />
                            </div>
                            <div v-else>All clear. Good work!</div>
                        </div>

                    </div>
                </c-slide>
                <c-slide v-if="$store.state.application.signedIn" v-darklaunch="'MESSAGES'">
                    <div class="item">
                        <h3>MESSAGES</h3>

                        <div class="slide-chooser">
                            <c-button status="plain" icon-hide @click="showSlide('notification')"
                                        style="box-shadow: none" v-if="$store.state.application.signedIn">
                                <i class="fa fa-bell"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('messages')" class="active"
                                        v-if="$store.state.application.signedIn">
                                <i class="fa fa-envelope"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('updates')"
                                        style="box-shadow: none" v-if="$store.state.application.desktopMode">
                                <i class="fa fa-star"/>
                            </c-button>
                            <c-button status="plain" v-if="navigationKey === 'store'" icon-hide @click="showSlide('top_lists')"
                                        style="box-shadow: none">
                                <i class="fa fa-trophy"/>
                            </c-button>
                        </div>

                        <div class="navigation">
                            <div class="messages-action">
                                <c-button status="info" icon="angle-double-right" size="sm">Quick Send</c-button>
                                <c-button status="info" icon="envelope" size="sm">View All</c-button>
                            </div>
                            <div class="message-list">
                                <c-message v-for="(msg, index) in messages" :key="index" :msg="msg" />
                            </div>
                        </div>
                    </div>
                </c-slide>
                <c-slide v-if="$store.state.application.desktopMode">
                    <div class="item">
                        <h3>UPDATES</h3>

                        <div class="slide-chooser">
                            <c-button status="plain" icon-hide @click="showSlide('notification')"
                                        style="box-shadow: none" v-if="$store.state.application.signedIn">
                                <i class="fa fa-bell"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('messages')"
                                        style="box-shadow: none" v-if="$store.state.application.signedIn" v-darklaunch="'MESSAGES'">
                                <i class="fa fa-envelope"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('updates')" class="active"
                                        v-if="$store.state.application.desktopMode">
                                <i class="fa fa-star"/>
                            </c-button>
                            <c-button status="plain" v-if="navigationKey === 'store'" icon-hide @click="showSlide('top_lists')"
                                        style="box-shadow: none">
                                <i class="fa fa-trophy"/>
                            </c-button>
                        </div>

                        <div class="navigation">
                            <ul>
                                <template v-for="(update, index) in updates">
                                    <li class="mb-4" @click="showUpdateModal(update)" style="cursor: pointer" :key="index">
                                        <div class="h5 font-weight-bold mb-1 pb-0">
                                            {{ update.title }}
                                        </div>
                                        <div class="text">
                                            {{ update.description }}
                                        </div>
                                    </li>
                                </template>
                                <li>
                                    <br/>
                                    <button class="btn btn-outline-info btn-sm" style="color: #fff;border: 2px solid #fff;">
                                        <span class="icon fa fa-sync" /> Relaunch
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>
                </c-slide>
                <c-slide v-if="navigationKey === 'store'">
                    <div class="item">
                        <h3>TOP LISTS</h3>

                        <div class="slide-chooser">
                            <c-button status="plain" icon-hide @click="showSlide('notification')"
                                        style="box-shadow: none" v-if="$store.state.application.signedIn">
                                <i class="fa fa-bell"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('messages')"
                                        style="box-shadow: none" v-if="$store.state.application.signedIn" v-darklaunch="'MESSAGES'">
                                <i class="fa fa-envelope"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('updates')"
                                        style="box-shadow: none" v-if="$store.state.application.desktopMode">
                                <i class="fa fa-star"/>
                            </c-button>
                            <c-button status="plain" icon-hide @click="showSlide('top_lists')" class="active">
                                <i class="fa fa-trophy"/>
                            </c-button>
                        </div>

                        <div class="navigation">
                            <ul>
                                <li class="title">TOP 5</li>
                                <li v-for="(product, index) in $store.state.marketplace.top5" :key="index">
                                    <a :href="`#/product/${product.id}`">
                                        <span class="text">{{ product.name }}</span>
                                    </a>
                                </li>
                                <li class="more">
                                    <a href="#/search">
                                        <span class="text">MORE...</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="navigation">
                            <ul>
                                <li class="title">TOP FREE</li>
                                <li v-for="(product, index) in $store.state.marketplace.topFree.slice(0, 5)" :key="index">
                                    <a :href="`#/product/${product.id}`">
                                        <span class="text">{{ product.name }}</span>
                                    </a>
                                </li>
                                <li class="more">
                                    <a href="#/search">
                                        <span class="text">MORE...</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </c-slide>
            </c-swiper>
        </div>
        <div class="page-sidepanel__button page-sidepanel__button--lower" data-action="sidepanel-hide"><div></div></div>
        <c-basic-popup :activated="showModal" class="text-left" @close="hideUpdateModal">
            <div class="d-flex flex-column" slot="header">
                <div class="h4 m-0 p-0">
                    {{ currentUpdate.title }}
                </div>
                <div>
                    {{ currentUpdate.version }}
                </div>
            </div>
            <div slot="body" v-html="currentUpdate.content" />
            <small slot="footer">
                Missed an update? <c-button status="plain" href="#/updates">Check our previous updates here.</c-button>
            </small>
        </c-basic-popup>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import axios from 'axios'
    import Vue from 'vue'
    import HeadingBar from '@/ui/components/heading-bar/simple-colored'
    import DottedList from '@/ui/components/list/dots'
    import 'swiper/dist/css/swiper.css'

    export default {
        props: {
            navigationKey: String
        },
        components: {
            'c-swiper': swiper,
            'c-notification': (resolve) => require(['@/ui/components/notification/index.vue'], resolve),
            'c-message': (resolve) => require(['@/ui/components/message'], resolve),
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic'], resolve),
            'c-slide': swiperSlide,
            'c-dotted-list': (resolve) => require(['@/ui/components/list/dots'], resolve),
            'c-heading-bar-color': (resolve) => require(['@/ui/components/heading-bar/simple-colored'], resolve)
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            activeProfile() {
                return this.$store.state.application.account && this.$store.state.application.activeProfile
            },
            messages() {
                return this.activeProfile && this.activeProfile.messages
            },
        },
        data() {
            return {
                errors: [],
                updateExpanded: null,
                updates: [],
                entries: [],
                currentUpdate: {},
                showModal: false
            }
        },
        methods: {
            showSlide(sl) {
                switch (sl) {
                    case 'notification':
                        this.swiper.slideTo(0, 1000, false);
                        break;
                    case 'messages':
                        this.$el.classList.add("active");
                        this.swiper.slideTo(1, 1000, false);
                        break;
                    case 'updates':
                        this.$el.classList.add("active");
                        this.swiper.slideTo(2, 1000, false);
                        break;
                    case 'top_lists':
                        this.$el.classList.add("active");
                        this.swiper.slideTo(3, 1000, false);
                        break;
                }

            },
            showUpdateModal(update){
                this.currentUpdate = update
                this.showModal = true
            },
            hideUpdateModal(){
                this.showModal = false
                this.currentUpdate = []
            }
        },
        created() {
            if (this.navigationKey === 'store' && this.$store.state.application.desktopMode) {
                const sheetUrl = 'https://spreadsheets.google.com/feeds/list/1Ndg4etkvLQZKeTcPfP1L1nJiMWn6UkwFd9RVSMcltp4/1/public/values?alt=json'

                axios({
                    method: 'get',
                    url: sheetUrl
                })
                .then((res) => {
                    this.entries = res.data.feed.entry

                    for (let i in this.entries) {
                        const entry = this.entries[i]

                        let el = Vue.compile('<div>' + entry.gsx$content.$t + '</div>')
                        el = new Vue({
                            components: {
                                'c-heading-bar-color': HeadingBar,
                                'c-dotted-list': DottedList
                            },
                            render: el.render,
                            staticRenderFns: el.staticRenderFns
                        }).$mount()

                        this.updates.push({
                            version: entry.gsx$version.$t,
                            title: entry.gsx$title.$t,
                            description: entry.gsx$description.$t,
                            content: el.$el.innerHTML //.replace(/\n/g, '<br />')
                        })
                    }
                })
                .catch((err) => {
                    this.errors.push('Could not contact update service. Please contact support with this error: ' + JSON.stringify(err))
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-sidepanel{
        z-index: 1;
    }

    .navigation {
        margin-bottom: 50px;
    }

    .navigation .text {
        float: right;
    }
</style>
