<template>
    <c-default-layout>
        <div class="col-12">
            <div class="section section--main">
                <c-intro :name="data.name" :stats="data.intro.stats" :showIcon="true" />
                <c-network-slider :items="data.network.items" />
                <!-- <div class="network-slider">
                    <div class="row">
                        <div class="col-12 col-lg-3">
                            <img src="https://via.placeholder.com/240x60" class="img-fluid"/>
                        </div>
                        <div class="col-12 col-lg-9">
                            <c-swiper :options="sliderOptions">
                                <c-slide v-for="i in 12" class="text-center">
                                    <img src="https://via.placeholder.com/100x60" class="img-fluid"/>
                                </c-slide>
                            </c-swiper>
                        </div>
                    </div>
                </div> -->
            </div>
            
            <c-history :content="data.history.content" :timeline="data.history.timeline" />

            <img border="0" src="http://partners.etoro.com/B10521_A73660_TGet.aspx" />

            <c-quick-links :social="data.quickLinks.social" :forums="data.quickLinks.forums" :other="data.quickLinks.other" />
            <c-notifications :content="data.notifications.content" :alerts="data.notifications.alerts" :warnings="data.notifications.warnings" />
            <c-compare :content="data.compare.content" :items="data.compare.items" />
            <c-media :content="data.media.content" :items="data.media.items" />
            <c-education :content="data.education.content" :books="data.education.books" />
            <c-exchanges :content="data.exchanges.content" :items="data.exchanges.items" :spotlight="data.exchanges.spotlight" />
            <c-etoro-block />
            <c-market />
            <c-software-wallets :content="data.softwareWallets.content" :items="data.softwareWallets.items" />
            <c-hardware-wallets :content="data.hardwareWallets.content" :items="data.hardwareWallets.items" />
            <c-faq :content="data.faq.content" :items="data.faq.items" />
        </div>
    </c-default-layout>
</template>

<script>
    import bitcoinData from '../../data/token/bitcoin'
    import * as DB from '@/db'
    import allData from '../../data'

    const tokenName = 'bitcoin'


    const clean = () => {
        DB.instance().getCollection('tokens') && DB.instance().getCollection('tokens').chain().remove()
        DB.instance().getCollection('books') && DB.instance().getCollection('books').chain().remove()
        DB.instance().getCollection('sites') && DB.instance().getCollection('sites').chain().remove()
        DB.instance().getCollection('courses') && DB.instance().getCollection('courses').chain().remove()
        DB.instance().getCollection('exchanges') && DB.instance().getCollection('exchanges').chain().remove()
        DB.instance().getCollection('faq') && DB.instance().getCollection('faq').chain().remove()
        DB.instance().getCollection('hardwareWallets') && DB.instance().getCollection('hardwareWallets').chain().remove()
        DB.instance().getCollection('softwareWallets') && DB.instance().getCollection('softwareWallets').chain().remove()
        DB.instance().getCollection('videos') && DB.instance().getCollection('videos').chain().remove()
        DB.instance().getCollection('notifications') && DB.instance().getCollection('notifications').chain().remove()
    }

    export default {
        components: {
            'c-default-layout': (resolve) => require(['@/projects/cryptoreviews/ui/layouts/token/' + tokenName + '/index.vue'], resolve),
            'c-intro': (resolve) => require(['@/projects/cryptoreviews/ui/components/intro'], resolve),
            'c-network-slider': (resolve) => require(['@/projects/cryptoreviews/ui/components/network-slider'], resolve),
            'c-history': (resolve) => require(['@/projects/cryptoreviews/ui/components/history'], resolve),
            'c-quick-links': (resolve) => require(['@/projects/cryptoreviews/ui/components/quick-links'], resolve),
            'c-notifications': (resolve) => require(['@/projects/cryptoreviews/ui/components/notifications'], resolve),
            'c-compare': (resolve) => require(['@/projects/cryptoreviews/ui/components/compare'], resolve),
            'c-media': (resolve) => require(['@/projects/cryptoreviews/ui/components/media'], resolve),
            'c-education': (resolve) => require(['@/projects/cryptoreviews/ui/components/education'], resolve),
            'c-exchanges': (resolve) => require(['@/projects/cryptoreviews/ui/components/exchanges'], resolve),
            'c-etoro-block': (resolve) => require(['@/projects/cryptoreviews/ui/components/etoro-block'], resolve),
            'c-market': (resolve) => require(['@/projects/cryptoreviews/ui/components/market'], resolve),
            'c-software-wallets': (resolve) => require(['@/projects/cryptoreviews/ui/components/software-wallets'], resolve),
            'c-hardware-wallets': (resolve) => require(['@/projects/cryptoreviews/ui/components/hardware-wallets'], resolve),
            'c-faq': (resolve) => require(['@/projects/cryptoreviews/ui/components/faq'], resolve),
        },
        data() {
            const data = allData(DB)

            clean()

            DB.tokens = DB.instance().addCollection('tokens')
            DB.tokens.insert(data.tokens)

            DB.books = DB.instance().addCollection('books')
            DB.books.insert(data.books)

            DB.sites = DB.instance().addCollection('sites')
            DB.sites.insert(data.sites)

            DB.courses = DB.instance().addCollection('courses')
            DB.courses.insert(data.courses)

            DB.exchanges = DB.instance().addCollection('exchanges')
            DB.exchanges.insert(data.exchanges)

            DB.faq = DB.instance().addCollection('faq')
            DB.faq.insert(data.faq)

            DB.hardwareWallets = DB.instance().addCollection('hardwareWallets')
            DB.hardwareWallets.insert(data.hardwareWallets)

            DB.softwareWallets = DB.instance().addCollection('softwareWallets')
            DB.softwareWallets.insert(data.softwareWallets)

            DB.videos = DB.instance().addCollection('videos')
            DB.videos.insert(data.videos)

            DB.notifications = DB.instance().addCollection('notifications')
            DB.notifications.insert(data.notifications)

            const viewData = bitcoinData(DB)

            return {
                data: viewData
            }
        }
    }
</script>

<style>
    body {
        font-family: 'sofia-pro', sans-serif;
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        line-height: 24px;
        color: #666666;
        overflow-x: hidden;
        background: #e0e6ea !important;
    }
    #left-bg, #right-bg, #header-bg {
        display: none;
    }
</style>

<style lang="scss" scoped>
    .section {
        position: relative;
        width: 100%;
        display: block;
        margin: 0 auto;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-bottom: 20px;
        background: #fff;
        h1,
        .h1 {
            font-size: 5.2em;
            font-weight: 600;
        }
    }

    .section--main {
        margin-top: 180px;
        padding: 80px 0 0;
        background: url(https://ak3.picdn.net/shutterstock/videos/24705143/thumb/1.jpg);
        background-size: cover;
    }

    .section--overview {
        padding: 80px 0;
    }


    .heading-title {
        margin-bottom: 60px;
        text-align: center;
    }
    .heading-title .title {
        position: relative;
        padding-bottom: 15px;
        font-size: 40px;
        line-height: 50px;
    }
    .heading-title .title a {
        outline: medium none !important;
        color: #666;
    }
    .heading-title .title:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -40px;
        width: 80px;
        height: 3px;
        background: #f9b707;
        display: inline-block;
    }


    // Colors
    .heading-title .title:before, .heading-left .title:before {
        background: #f9b707;
    }
</style>
