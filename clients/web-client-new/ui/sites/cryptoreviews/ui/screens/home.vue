<template>
    <c-layout>
        <c-header :logo="data.header" />

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
                            <c-swiper-slide v-for="i in 12" class="text-center">
                                <img src="https://via.placeholder.com/100x60" class="img-fluid"/>
                            </c-swiper-slide>
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

        <c-footer />
    </c-layout>
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
            'c-layout': () => import('~/sites/cryptoreviews/ui/layouts/token/bitcoin').then(m => m.default || m),
            'c-header': () => import('~/sites/cryptoreviews/ui/components/header').then(m => m.default || m),
            'c-footer': () => import('~/sites/cryptoreviews/ui/components/footer').then(m => m.default || m),
            'c-intro': () => import('~/sites/cryptoreviews/ui/components/intro').then(m => m.default || m),
            'c-network-slider': () => import('~/sites/cryptoreviews/ui/components/network-slider').then(m => m.default || m),
            'c-history': () => import('~/sites/cryptoreviews/ui/components/history').then(m => m.default || m),
            'c-quick-links': () => import('~/sites/cryptoreviews/ui/components/quick-links').then(m => m.default || m),
            'c-notifications': () => import('~/sites/cryptoreviews/ui/components/notifications').then(m => m.default || m),
            'c-compare': () => import('~/sites/cryptoreviews/ui/components/compare').then(m => m.default || m),
            'c-media': () => import('~/sites/cryptoreviews/ui/components/media').then(m => m.default || m),
            'c-education': () => import('~/sites/cryptoreviews/ui/components/education').then(m => m.default || m),
            'c-exchanges': () => import('~/sites/cryptoreviews/ui/components/exchanges').then(m => m.default || m),
            'c-etoro-block': () => import('~/sites/cryptoreviews/ui/components/etoro-block').then(m => m.default || m),
            'c-market': () => import('~/sites/cryptoreviews/ui/components/market').then(m => m.default || m),
            'c-software-wallets': () => import('~/sites/cryptoreviews/ui/components/software-wallets').then(m => m.default || m),
            'c-hardware-wallets': () => import('~/sites/cryptoreviews/ui/components/hardware-wallets').then(m => m.default || m),
            'c-faq': () => import('~/sites/cryptoreviews/ui/components/faq').then(m => m.default || m),
        },
        data() {
            const data = allData(DB)

            clean()

            const database = {}

            database.tokens = DB.instance().addCollection('tokens')
            database.tokens.insert(data.tokens)

            database.books = DB.instance().addCollection('books')
            database.books.insert(data.books)

            database.sites = DB.instance().addCollection('sites')
            database.sites.insert(data.sites)

            database.courses = DB.instance().addCollection('courses')
            database.courses.insert(data.courses)

            database.exchanges = DB.instance().addCollection('exchanges')
            database.exchanges.insert(data.exchanges)

            database.faq = DB.instance().addCollection('faq')
            database.faq.insert(data.faq)

            database.hardwareWallets = DB.instance().addCollection('hardwareWallets')
            database.hardwareWallets.insert(data.hardwareWallets)

            database.softwareWallets = DB.instance().addCollection('softwareWallets')
            database.softwareWallets.insert(data.softwareWallets)

            database.videos = DB.instance().addCollection('videos')
            database.videos.insert(data.videos)

            database.notifications = DB.instance().addCollection('notifications')
            database.notifications.insert(data.notifications)

            const viewData = bitcoinData(database)

            return {
                data: viewData
            }
        }
    }
</script>

<style lang="scss" scoped>
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



    .section {
        position: relative;
        width: 100%;
        display: block;
        margin: 0 auto;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-bottom: 20px;
        background: #fff;
        h1 {
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


    .heading-title .title:before, .heading-left .title:before {
        background: #f9b707;
    }
</style>

<style lang="scss" scoped>
</style>
