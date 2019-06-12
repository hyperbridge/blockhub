/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import Vue from 'vue'
import {storiesOf, addDecorator} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import StoryRouter from 'storybook-vue-router'
import {withViewport} from '@storybook/addon-viewport'
import {withKnobs, text, boolean, number, object} from '@storybook/addon-knobs/vue'

import '@/css/styles.scss'
// import '@/entry-client'
import filters from '@/plugins/filters'
import directives from '@/plugins/directives'
import '@/plugins/components'
// import store from '@/store'
// import router from '@/router'

filters({})
directives({})
//import * as Bridge from '@/framework/desktop-bridge'
import * as data from './components-data'


const StoreDummy = {
    install(Vue, options) {
        Vue.prototype.$store = {
            state: {},
            dispatch: () => {},
            commit: () => {}
        }
    }
}

Vue.use(StoreDummy)

// //import '!style-loader!css-loader!./styles.scss'

// window.ga = function() {}

// Bridge.init(store, router)

// store.dispatch('database/init')
// store.dispatch('application/init')
// store.dispatch('marketplace/init')
// store.dispatch('funding/init')

// console.log('BlockHub initialized.')


// addDecorator(withViewport('desktop'))
//addDecorator(StoryRouter())


storiesOf('test', module)
    .add('item', () => ({
        components: {
        },
        data() {
            return {
                title: 'test',
                price: '10.00'
            }
        },
        template: '<div class="row"><div class="col-6 p-5">{{ title }}</div></div>'
    }))


import PromotionItem from '@/components/promotion-box/item'
import PromotionList from '@/components/promotion-box/list'

storiesOf('Promotion Box', module)
    .add('item', () => ({
        components: {
            'c-promotion-item': PromotionItem
        },
        data() {
            return {
                title: 'test',
                price: '10.00'
            }
        },
        template: '<div class="row"><div class="col-6 p-5"><c-promotion-item :title="title" :price="price"></c-promotion-item></div></div>'
    }))
    .add('list', () => ({
        components: {
            'c-promotion-list': PromotionList,
            'c-promotion-item': PromotionItem
        },
        data() {
            return {
                promotions: [
                    {
                        title: 'Game + Standard Founder Pack',
                        price: '10.00',
                        basic: true
                    },
                    {
                        title: 'Game + Deluxe Founder Pack',
                        price: '10.00',
                        basic: false
                    },
                    {
                        title: 'Game + Collectors Founder Pack',
                        price: '10.00',
                        basic: false
                    }
                ]
            }
        },
        template: `<div class="row"><div class="col-6 p-5">
                        <c-promotion-list title="Packages" >
                            <template v-for="(promotion, index) in promotions">
                                <c-promotion-item :title="promotion.title" :price="promotion.price" :basic="promotion.basic" :border="true"></c-promotion-item>
                            </template>
                        </c-promotion-list>
                    </div></div>`
    }))

import AssetsImporter from '@/components/asset-importer'

storiesOf('Assets Importer', module)
    .add('default', () => ({
        components: {
            'c-assets-importer': AssetsImporter
        },
        data() {
            return {
                show_skipped: true
            }
        },
        template: '<div class="row"><div class="col-8"><c-assets-importer show_skipped="show_skipped" /></div></div>'
    }))

import Notification from '@/components/notification'
import NotificationInline from '@/components/notification/inline'

storiesOf('Notifications', module)
    .add('default', () => ({
        components: {
            'c-notification': Notification
        },
        data() {
            return {
                notif: {
                    type: 'info',
                    title: 'Info message',
                    text: 'This is a test',
                    actionOnClose: false,
                    actionOnTextClick: true
                },
                notifs: [
                    {
                        type: 'info',
                        title: 'Info message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: false,
                        actionOnTextClick: true
                    },
                    {
                        type: 'warning',
                        title: 'Warning message',
                        text: 'This is a test',
                        showCloseBtn: false,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'danger',
                        title: 'Danger message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'success',
                        title: 'Success message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: '',
                        title: 'Other message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    }
                ]
            }
        },
        template: `
            <div class="row m-0">
                <div class="col-4 pt-3 text-white">
                    Single:
                    <c-notification :notification="notif"/>
                    Multiple:
                    <c-notification v-for="(notif, index) in notifs" :key="index" :notification="notif"/>
                </div>
            </div>
        `
    }))
    .add('inline', () => ({
        components: {
            'c-notification-inline': NotificationInline
        },
        data() {
            return {
                notif: {
                    type: 'info',
                    title: 'Info message',
                    text: 'This is a test',
                    actionOnClose: false,
                    actionOnTextClick: true
                },
                notifs: [
                    {
                        type: 'info',
                        title: 'Info message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: false,
                        actionOnTextClick: true
                    },
                    {
                        type: 'warning',
                        title: 'Warning message',
                        text: 'This is a test',
                        showCloseBtn: false,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'danger',
                        title: 'Danger message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'success',
                        title: 'Success message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        title: 'Other message',
                        text: 'This is a test',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    }
                ]
            }
        },
        template: `
            <div class="row m-0">
                <div class="col-4 pt-3 text-white">
                    Single:
                    <c-notification-inline :notification="notif">
                        {{ notif.text }}
                    </c-notification-inline>
                    <hr />
                    Single medium:
                    <c-notification-inline :notification="notif" size="md">
                        {{ notif.text }}
                    </c-notification-inline>
                    <hr />
                    Multiple:
                    <c-notification-inline v-for="(notif, index) in notifs" :key="index" class="my-3" :notification="notif" :type="notif.type">
                        {{ notif.text }}
                    </c-notification-inline>
                </div>
            </div>
        `
    }))

import Searcher from '@/components/searcher';

storiesOf('Searcher', module)
    .add('default', () => ({
        components: {
            'c-searcher': Searcher
        },
        data(){
            return {
                results:[],
                phrase: [],
                items:[
                    {name :'Saints Row: The Third'},
                    {name :'Worms Ultimate Mayhem'},
                    {name :'Dungeon Defenders'},
                    {name :'The Witcher 2: Assassins of Kings Enhanced Edition'},
                    {name :'Mafia II'},
                    {name :'Homefront'},
                    {name :'Call of Duty®: Black Ops'},
                    {name :'Fallout New Vegas: Dead Money'},
                ]
            }
        },
        methods:{
            search() {
                this.results = this.phrase.length ? this.getByVal(this.phrase) : []
            },
            getByVal(val){
                let arr = [];
                this.items.forEach( (el) => {
                    console.log('first', el)
                    if( el.name.includes(val) ){
                        arr.push(el);
                        console.log('second', arr)
                    }
                });
                return arr;
            }
        },
        computed:{
        },
        watch:{
            results(){
                console.log(this.results)
            }
        },
        template: `<div class="p-5 col-4">
                <c-searcher  @input="search" :results="results" v-model="phrase">
                    <template slot-scope="props">
                        <span class="text-white">
                            {{ props.result.name }}
                        </span>
                    </template>
                </c-searcher>
            </div>`
    }))

import RatingStars from '@/components/rating-stars';
import RatingBlock from '@/components/rating-block/index'

storiesOf('Rating', module)
    .add('Stars', () => ({
        components: {
            'c-rating-stars': RatingStars
        },
        template: '<div class="text-white p-5"><c-rating-stars :number="3.5"/></div>'
    }))
    .add('Rating Block', () => ({
        components: {
            'c-rating-block': RatingBlock
        },
        data() {
            return {
                items: [
                    {
                        name: 'Some title',
                        number: 4
                    },
                    {
                        name: 'Some second title',
                        number: 3.6
                    },
                    {
                        name: 'Some third a little bit bigger title',
                        number: 5
                    }
                ]
            }
        },
        template: `
        <div class="row p-5">
            <div class="col-8">
                <c-rating-block :items="items" fullReviewsPath="/" rateGamePath="/" />
            </div>
        </div>
        `
    }))

import Author from '@/components/author';

storiesOf('Author', module)
    .add('Author', () => ({
        components: {Author},
        data() {
            return {
                author: {
                    name: 'SatoSan',
                    img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'
                }
            }
        },
        template: `<div class="text-white p-5"><author :author="author"/></div>`
    }))

import Tags from '@/components/tags';

storiesOf('Tags', module)
    .add('Tags', () => ({
        components: {Tags},
        template: `<div class="text-white p-5"><tags :tags="['RPG', 'Open-World']"/></div>`
    }))

import LoadingLine from '@/components/loading-bar';
import LoadingCircle from '@/components/loading-bar/circle';

storiesOf('LoadingBar', module)
    .add('line', () => ({
        components: {
            'c-loading-bar': LoadingLine
        },
        template: `<c-loading-bar/>`
    }))
    .add('circle', () => ({
        components: {
            'c-loading-bar-circle': LoadingCircle
        },
        template: `<div class="position-relative" style="width: 300px; height: 300px"><c-loading-bar-circle /></div>`
    }))


import NavigationAccount from '@/components/navigation/account';
import NavigationAsset from '@/components/navigation/asset';
import NavigationFunding from '@/components/navigation/funding';
import NavigationHelp from '@/components/navigation/help';
import NavigationProduct from '@/components/navigation/product';
import NavigationProject from '@/components/navigation/project';
import NavigationSettings from '@/components/navigation/settings';
import NavigationWallet from '@/components/navigation/wallet';

storiesOf('Navigation', module)
    .add('account', () => ({
        components: {NavigationAccount}, template: `<div class="col-2 py-3"><NavigationAccount /></div>`
    }))
    .add('asset', () => ({
        components: {NavigationAsset}, template: `<div class="col-2 py-3"><NavigationAsset /></div>`
    }))
    .add('funding', () => ({
        components: {NavigationFunding}, template: `<div class="col-2 py-3"><NavigationFunding /></div>`
    }))
    .add('help', () => ({
        components: {NavigationHelp}, template: `<div class="col-2 py-3"><NavigationHelp /></div>`
    }))
    .add('product', () => ({
        components: {NavigationProduct}, template: `<div class="col-2 py-3"><NavigationProduct /></div>`
    }))
    .add('project', () => ({
        components: {NavigationProject}, template: `<div class="col-2 py-3"><NavigationProject /></div>`
    }))
    .add('settings', () => ({
        components: {NavigationSettings}, template: `<div class="col-2 py-3"><NavigationSettings /></div>`
    }))
    .add('wallet', () => ({
        components: {NavigationWallet}, template: `<div class="col-2 py-3"><NavigationWallet /></div>`
    }))


import Card from '@/components/project/card';
import Badges from '@/components/project/badges';
import Milestone from '@/components/project/milestone';
import UpdatesCount from '@/components/project/updates-count';

storiesOf('Projects', module)
    .add('card', () => ({
        components: {
            'c-project-card': Card
        },
        data() {
            return {
                projects: [
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                    {
                        game: {
                            title: 'World of Warcraft',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'GBP',
                            obtained: 7613,
                            goal: 8500
                        }
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                ]
            }
        },
        template: `
                <div class="row">
                    <div class="col-4" v-for="(project, index) in projects" :key="index">
                        <c-project-card
                            :image="project.img"
                            :description="project.description"
                            :funds="project.funds"
                            :parentImage="project.game.img"
                            :parentName="project.game.title"
                            :parentDeveloper="project.game.developer"
                            :id="project"
                            customClass="project"
                        />
                    </div>
                </div>
        `
    }))
    .add('badges', () => ({
        components: {
            'c-badges': Badges
        },
        template: `<c-badges :icons="['trophy','gem']" />`
    }))
    .add('milestone', () => ({
        components: {
            'c-milestone': Milestone
        },
        data() {
            return {
                milestones: [
                    {
                        "id": 1,
                        "title": "Create the base game with 2 dungeons",
                        "shortDescription": "Maecenas faucibus tincidunt consectetur. Phasellus ac malesuada quam, vitae vulputate quam. Nulla dui ipsum, suscipit sed laoreet auctor, sagittis et mauris.",
                        "text": "Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc. Curabitur lobortis arcu neque, non rutrum elit placerat eget.",
                        "img": "http://via.placeholder.com/350x250",
                        "status": "done",
                        "stepNumber": 1,
                        "progress": {
                            "percentDays": 45,
                            "daysLeft": 97,
                            "percentDone": 17,
                            "percentSpent": 83
                        }
                    },
                    {
                        "id": 3,
                        "title": "Lorem ipsum dolor sit amet",
                        "shortDescription": "Sed commodo laoreet dolor nec euismod. Donec at ex in augue iaculis accumsan quis et libero.",
                        "text": "Proin sollicitudin faucibus mauris non pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur imperdiet urna, mollis vulputate risus feugiat sit amet. Ut turpis nulla, ultricies a ultricies eget, bibendum eu orci. In in suscipit nisl. Sed bibendum, mauris a convallis rhoncus, enim libero condimentum enim, in ultrices ligula orci ac nisl. Nunc vestibulum purus vitae lorem porta, eget aliquam nibh rhoncus.",
                        "img": "http://via.placeholder.com/350x250",
                        "status": "done",
                        "stepNumber": 3,
                        "progress": {
                            "percentDays": 34,
                            "daysLeft": 125,
                            "percentDone": 3,
                            "percentSpent": 80
                        }
                    },
                    {
                        "id": 2,
                        "title": "Praesent eu fringilla nisl",
                        "shortDescription": "Aenean aliquam erat quis tortor varius convallis. Suspendisse finibus orci at nibh pharetra, vel ullamcorper tellus mattis.",
                        "text": "Nulla facilisi. In hac habitasse platea dictumst. Mauris lacus nulla, laoreet et est ac, sollicitudin lacinia arcu. Phasellus vehicula arcu tristique nunc lacinia facilisis. Nunc egestas congue massa a euismod. Sed commodo laoreet dolor nec euismod. Donec at ex in augue iaculis accumsan quis et libero.",
                        "img": "http://via.placeholder.com/350x250",
                        "status": "InProgress",
                        "stepNumber": 2,
                        "progress": {
                            "percentDays": 91,
                            "daysLeft": 4,
                            "percentDone": 97,
                            "percentSpent": 99
                        }
                    },
                    {
                        "id": 4,
                        "title": "In hac habitasse platea dictumst",
                        "shortDescription": "Nulla facilisi. In hac habitasse platea dictumst. Mauris lacus nulla, laoreet et est ac",
                        "text": "Praesent eu fringilla nisl. Nullam iaculis odio non est ornare sodales non a massa. Sed sollicitudin nibh et ipsum sollicitudin blandit. Quisque vel enim congue, semper leo vitae, luctus nibh.",
                        "img": "http://via.placeholder.com/350x250",
                        "status": "InProgress",
                        "stepNumber": 4,
                        "progress": {
                            "percentDays": 85,
                            "daysLeft": 45,
                            "percentDone": 37,
                            "percentSpent": 84
                        }
                    }
                ]
            }
        },
        template: `<div class="row">
                <c-milestone
                                    v-for="(milestone, index) in milestones"
                                    :key="index"
                                    :milestone="milestone"
                                />
            </div>`
    }))
    .add('updates-count', () => ({
        components: {
            'c-updates-count': UpdatesCount
        },
        template: `<div class="p-5">
                    <c-updates-count>
                        5
                    </c-updates-count>
                </div>`
    }))


import Tabs from '@/components/tab/tabs.vue'
import Tab from '@/components/tab/tab.vue'
import TabsUniversal from '@/components/tab/tabs-universal';
import TabUniversal from '@/components/tab/tab-universal';

storiesOf('Tabs', module)
    .add('default', () => ({
        components: {
            'c-tabs': Tabs,
            'c-tab': Tab,
        },
        data() {
            return {}
        },
        template: `<div class="row m-0">
            <div class="col-8 p-4">
                <c-tabs>
                    <c-tab name="Tab 1" :selected="true" showFooter="true">
                        <p>This is first tab with footer content</p>
                         <template slot="footer">
                            <a href="#" class="btn btn-sm btn-success float-right">Button</a>
                        </template>
                    </c-tab>
                     <c-tab name="Tab 2">
                        <p>This is second tab</p>
                    </c-tab>
                    <c-tab name="Tab 3">
                        <p>This is third tab</p>
                    </c-tab>
                </c-tabs>
            </div>
            </div>`
    }))
    .add('type-2', () => ({
        components: {
            'c-tabs': Tabs,
            'c-tab': Tab,
            'c-heading-bar-fields': BlockHeadersAddFields
        },
        data() {
            return {}
        },
        template: `<div class="row m-0">
            <div class="col-8 p-4">
                <c-tabs variant="type-2">
                    <c-tab name="Tab 1" :selected="true" :transparentBg="true" :showFooter="true">
                        <p>This is first tab with footer content</p>
                         <template slot="footer">
                            <a href="#" class="btn btn-sm btn-success float-right">Button</a>
                        </template>
                    </c-tab>
                    <c-tab name="Tab 2" :transparentBg="true">
                        <p>This is second tab</p>
                    </c-tab>
                    <c-tab name="Tab 3" :transparentBg="true">
                        <p>This is third tab</p>
                    </c-tab>
                </c-tabs>
            </div>
            </div>`
    }))
    .add('universal', () => ({
        components: {
            'c-tabs-universal': TabsUniversal,
            'c-tab-universal': TabUniversal
        },
        template: `
            <div class="padding-50">
                <c-tabs-universal style="color: #fff;">
                    <c-tab-universal :tab_id="0">
                        First tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="1">
                        Wwww
                    </c-tab-universal>
                    <c-tab-universal :tab_id="2">
                        12345
                    </c-tab-universal>
                </c-tabs-universal>
            </div>`
    }))
    .add('Tabs Names', () => ({
        components: {
            'c-tabs-universal': TabsUniversal,
            'c-tab-universal': TabUniversal
        },
        template: `
            <div class="padding-50">
                <c-tabs-universal
                    style="color: #fff;"
                    :tab_names="['Custom tab One', 'Second', 'Im third tab']"
                >
                    <c-tab-universal :tab_id="0">
                        First tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="1">
                        Wwww
                    </c-tab-universal>
                    <c-tab-universal :tab_id="2">
                        12345
                    </c-tab-universal>
                </c-tabs-universal>
            </div>`
    }))
    .add('Custom Navigation', () => ({
        components: {
            'c-tabs-universal': TabsUniversal,
            'c-tab-universal': TabUniversal
        },
        data() {
            return {
                activeTab: 1
            }
        },
        template: `
            <div class="padding-50">
                <c-tabs-universal
                    style="color: #fff;"
                    :activeTabProp="activeTab"
                >
                    <template slot="nav">
                        <button @click="activeTab = 1">Tab 1</button>
                        <button @click="activeTab = 2">Tab 2</button>
                        <button @click="activeTab = 3">Tab 3</button>
                        <button @click="activeTab = 4">Tab 4</button>
                    </template>
                    <c-tab-universal :tab_id="1">
                        First tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="2">
                        Wwww
                    </c-tab-universal>
                    <c-tab-universal :tab_id="3">
                        12345
                    </c-tab-universal>
                    <c-tab-universal :tab_id="4">
                        Fourth tab
                    </c-tab-universal>
                </c-tabs-universal>
            </div>`
    }))
    .add('Locked Tab', () => ({
        components: {
            'c-tabs-universal': TabsUniversal,
            'c-tab-universal': TabUniversal
        },
        data() {
            return {
                locked_step: 1,
                lockedTab: 1
            }
        },
        methods: {
            changeLockedTab() {
                this.lockedTab = Math.floor(Math.random() * 3);
            }
        },
        template: `
            <div class="padding-50">
                <c-tabs-universal
                    style="color: #fff;"
                    :lockedTab="lockedTab"
                >
                    <c-tab-universal :tab_id="0">
                        First tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="1">
                        Second tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="2">
                        Third tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="3">
                        Fourth tab
                    </c-tab-universal>
                </c-tabs-universal>
                <button
                    @click="changeLockedTab"
                    class="margin-top-50"
                >
                    Change locked tab
                </button>
            </div>`
    }))
    .add('Locked Step', () => ({
        components: {
            'c-tabs-universal': TabsUniversal,
            'c-tab-universal': TabUniversal
        },
        data() {
            return {
                locked_step: 1
            }
        },
        template: `
            <div class="padding-50">
                <c-tabs-universal
                    style="color: #fff;"
                    :locked_step="locked_step"
                >
                    <c-tab-universal :tab_id="0">
                        First tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="1">
                        Second tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="2">
                        Third tab
                    </c-tab-universal>
                    <c-tab-universal :tab_id="3">
                        Fourth tab
                    </c-tab-universal>
                </c-tabs-universal>
                <button
                    @click="locked_step++"
                    class="margin-top-50"
                >
                    Unlock next step
                </button>
            </div>`
    }))

import SystemRequirements from '@/components/product-overview/system-requirements';

import MilestonesLine from '@/components/milestones-line'

storiesOf('Milestones Line', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-milestones-line': MilestonesLine
        },
        data: () => object('Data', data.MilestonesLine),
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <c-milestones-line :milestones="milestones" />
                </div>
            </div>`
    }))
    .add('in progress', () => ({
        components: {
            'c-milestones-line': MilestonesLine
        },
        data: () => object('Data', data.MilestonesLine),
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <c-milestones-line :milestones="milestones" />
                </div>
            </div>`
    }))
    .add('complete', () => ({
        components: {
            'c-milestones-line': MilestonesLine
        },
        data: () => object('Data', data.MilestonesLine),
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <c-milestones-line :milestones="milestones" />
                </div>
            </div>`
    }))


import SidebarMenu from '@/components/sidebar-menu'
import SidebarMenuLink from '@/components/sidebar-menu/menu-item'

storiesOf('Sidebar Menu', module)
    .add('Main title', () => ({
        components: {
            'c-sidebar-menu': SidebarMenu
        },
        data() {
            return {
                links: [
                    {to: {path: '/'}, title: 'Suggesting Features'},
                    {to: {path: '/'}, title: 'Voting and Curating Updates'},
                    {to: {path: '/'}, title: 'MORE ...'}
                ],
            }
        },
        template: '<div class="row m-0">' +
            '<div class="col-3 p-4">' +
            '<c-sidebar-menu title="Menu Big Title" icon="fab fa-angellist" :links="links" />' +
            '</div>' +
            '</div>'
    }))
    .add('Sub title', () => ({
        components: {
            'c-sidebar-menu': SidebarMenu
        },
        data() {
            return {
                links: [
                    {to: {path: '/'}, title: 'Suggesting Features'},
                    {to: {path: '/'}, title: 'Voting and Curating Updates'},
                    {to: {path: '/'}, title: 'MORE ...'}
                ],
            }
        },
        template: `<div class="row m-0">
                <div class="col-3 p-4">
                    <c-sidebar-menu subTitle="This sub title" subIcon="fas fa-info-circle" :links="links" />
                </div>
            </div>`
    }))
    .add('Single element', () => ({
        components: {
            'c-sidebar-menu-link': SidebarMenuLink
        },
        template: `<div class="row m-0">
                <div class="col-3 p-4">
                    <c-sidebar-menu-link
                                 :to="{ path: '/' }"
                                 title="Suggesting Features">
                                 Suggesting Features
                    </c-sidebar-menu-link>
                </div>
            </div>`
    }));
;

const injectButtonTemplate = code => `
    <div class="row m-0 p-3">
        <div class="col-12">
            ${code}
        </div>
    </div>
`;

import Buttons from '@/components/buttons'
import LoadMore from '@/components/buttons/load-more'
import ButtonArrows from '@/components/buttons/arrows'

storiesOf('Buttons', module)
    .add('default', () => ({
        components: {'c-button': Buttons},
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <c-button @click="testFunction">default</c-button>
            <c-button size="md" @click="testFunction">default</c-button>
            <c-button size="lg" @click="testFunction">default</c-button>
            <hr />
            <c-button status="info">info</c-button>
            <c-button status="info" size="md">info</c-button>
            <c-button status="info" size="lg">info</c-button>
            <hr />
            <c-button status="success">success</c-button>
            <c-button status="success" size="md">success</c-button>
            <c-button status="success" size="lg">success</c-button>
            <hr />
            <c-button status="warning">danger</c-button>
            <c-button status="warning" size="md">danger</c-button>
            <c-button status="warning" size="lg">danger</c-button>
            <hr />
            <c-button status="danger">danger</c-button>
            <c-button status="danger" size="md">danger</c-button>
            <c-button status="danger" size="lg">danger</c-button>
            <hr />
            <c-button status="share">share</c-button>
            <c-button status="share" size="md">share</c-button>
            <c-button status="share" size="lg">share</c-button>
            <hr />
            <c-button status="support">support</c-button>
            <c-button status="support" size="md">support</c-button>
            <c-button status="support" size="lg">support</c-button>
        `)
    }))
    .add('second type', () => ({
        components: {'c-button': Buttons},
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <c-button status="second-info">info</c-button>
            <c-button status="second-info" size="md">info</c-button>
            <c-button status="second-info" size="lg">info</c-button>
            <hr />
            <c-button status="second-success">success</c-button>
            <c-button status="second-success" size="md">success</c-button>
            <c-button status="second-success" size="lg">success</c-button>
            <hr />
            <c-button status="second-warning">danger</c-button>
            <c-button status="second-warning" size="md">danger</c-button>
            <c-button status="second-warning" size="lg">danger</c-button>
            <hr />
            <c-button status="second-danger">danger</c-button>
            <c-button status="second-danger" size="md">danger</c-button>
            <c-button status="second-danger" size="lg">danger</c-button>
        `)
    }))
    .add('outline', () => ({
        components: {'c-button': Buttons},
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <c-button status="outline-white">white</c-button>
            <c-button status="outline-white" size="md">white</c-button>
            <c-button status="outline-white" size="lg">white</c-button>
            <hr />
            <c-button status="outline-info">info</c-button>
            <c-button status="outline-info" size="md">info</c-button>
            <c-button status="outline-info" size="lg">info</c-button>
            <hr />
            <c-button status="outline-success">success</c-button>
            <c-button status="outline-success" size="md">success</c-button>
            <c-button status="outline-success" size="lg">success</c-button>
            <hr />
            <c-button status="outline-warning">danger</c-button>
            <c-button status="outline-warning" size="md">danger</c-button>
            <c-button status="outline-warning" size="lg">danger</c-button>
            <hr />
            <c-button status="outline-danger">danger</c-button>
            <c-button status="outline-danger" size="md">danger</c-button>
            <c-button status="outline-danger" size="lg">danger</c-button>
            <hr />
            <c-button status="outline-share">share</c-button>
            <c-button status="outline-share" size="md">share</c-button>
            <c-button status="outline-share" size="lg">share</c-button>
            <hr />
            <c-button status="outline-support">support</c-button>
            <c-button status="outline-support" size="md">support</c-button>
            <c-button status="outline-support" size="lg">support</c-button>
        `)
    }))
    .add('gradient', () => ({
        components: {'c-button': Buttons},
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <c-button status="gradient-info">info</c-button>
            <c-button status="gradient-info" size="md">info</c-button>
            <c-button status="gradient-info" size="lg">info</c-button>
            <hr />
            <c-button status="gradient-success">success</c-button>
            <c-button status="gradient-success" size="md">success</c-button>
            <c-button status="gradient-success" size="lg">success</c-button>
            <hr />
            <c-button status="gradient-warning">danger</c-button>
            <c-button status="gradient-warning" size="md">danger</c-button>
            <c-button status="gradient-warning" size="lg">danger</c-button>
            <hr />
            <c-button status="gradient-danger">danger</c-button>
            <c-button status="gradient-danger" size="md">danger</c-button>
            <c-button status="gradient-danger" size="lg">danger</c-button>
        `)
    }))
    .add('[options] - swap direction', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="info" swapDirection>direction swapped</c-button>
            <c-button status="info" size="md" swapDirection>direction swapped</c-button>
            <c-button status="info" size="lg" swapDirection>direction swapped</c-button>
        `)
    }))
    .add('[options] - swap order', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success" swapOrder>success</c-button>
        `)
    }))
    .add('[options] - swap order & direction', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="info" size="lg" swapDirection swapOrder>order & direction swapped</c-button>
        `)
    }))
    .add('[options] - hide icon', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success" iconHide>success</c-button>
        `)
    }))
    .add('[options] - emoji', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success">Message 👺👻👽</c-button>
        `)
    }))
    .add('[options] - custom icon', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success" icon="anchor">success!</c-button>
        `)
    }))
    .add('[options] - button tag', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="danger" tag="button">Im button</c-button>
        `)
    }))
    .add('read more', () => ({
        components: {
            'c-load-more': LoadMore
        },
        template: `
            <div class="p-5" style="width: 400px"><c-load-more></c-load-more></div>
        `
    }))
    .add('arrows', () => ({
        components: {
            'c-button-arrows': ButtonArrows
        },
        template: `
            <div class="padding-50">
                <c-button-arrows size="sm"/>
                <c-button-arrows/>
                <c-button-arrows size="lg"/>
                <c-button-arrows size="xl"/>
            </div>
        `
    }))
    .add('arrows - colorized', () => ({
        components: {
            'c-button-arrows': ButtonArrows
        },
        template: `
            <div class="padding-50">
                <c-button-arrows colorized/>
            </div>
        `
    }))
    .add('arrows - content', () => ({
        components: {
            'c-button-arrows': ButtonArrows
        },
        template: `
            <div class="padding-50">
                <c-button-arrows colorized>
                    +319
                </c-button-arrows>
            </div>
        `
    }))


import MoneyInfo from '@/components/money-info'

storiesOf('Money Info', module)
    .add('default', () => ({
        components: {
            'c-money-info': MoneyInfo
        },
        template: `
        <div class="row m-0 p-3">
            <c-money-info label="Spent" percent="63" amount="555.999" goal="1555.999" />
        </div>
        `
    }));

import Checkbox from '@/components/checkbox';
import CheckboxGroup from '@/components/checkbox/group.vue';

storiesOf('Checkbox', module)
    .add('Single checkbox', () => ({
        components: {
            'c-checkbox': Checkbox
        },
        data() {
            return {
                value: true
            }
        },
        template: `
        <div class="row m-0 p-3">
            <c-checkbox id="test_check" v-model="value">This is the test checkbox</c-checkbox>
        </div>
        `
    }))
    .add('Checkbox Group', () => ({
        components: {
            'c-checkbox': Checkbox,
            'c-checkbox-group': CheckboxGroup,
        },
        template: `
        <div class="row m-0 p-3">
            <c-checkbox-group title="Group Title">
            <c-checkbox id="test_check_1">This is the test checkbox</c-checkbox>
            <c-checkbox id="test_check_2">This is the test checkbox</c-checkbox>
            <c-checkbox id="test_check_3">This is the test checkbox</c-checkbox>
            <c-checkbox id="test_check_4">This is the test checkbox</c-checkbox>
            </c-checkbox-group>
        </div>
        `
    }));

import Tooltips from '@/components/tooltips';

storiesOf('Tooltips', module)
    .add('dark', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row p-5">
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(left Position)!" position="left" :lightStyle='false'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </c-tooltips>
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Center Position)!" position="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </c-tooltips>
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Right Position)!" position="right" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </c-tooltips>
                </div>
            </div>
        `
    }))
    .add('light', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row p-5">
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(left Position)!" position="left" :lightStyle='true' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </c-tooltips>
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Center Position)!" position="center" :lightStyle='true' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </c-tooltips>
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Right Position)!" position="right" :lightStyle='true' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </c-tooltips>
                </div>
            </div>
        `
    }))
    .add('custom content', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row p-5">
                <div class="col-6 text-center">
                    <c-tooltips name="Click Me(Custom content)!" type="click" position="left" :lightStyle='true'>
                        <p class="p-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <p class="p-0 m-0">Lipsum generator.</p>
                        <a href="#" class="btn btn-sm btn-danger mt-2">Some link</a>
                    <c-tooltips/>
                </div>
                <div class="col-6 text-center">
                    <c-tooltips name="Hover Me(Custom content)!" position="center" :lightStyle='true'>
                        <p class="p-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <p class="p-0 m-0">Lipsum generator.</p>
                    <c-tooltips/>
                </div>
            </div>
        `
    }))

import TooltipUniversal from '@/components/tooltips/universal';

storiesOf('Tooltip Universal', module)
    .add('default', () => ({
        components: {'c-tooltip-universal': TooltipUniversal},
        template: `
            <div class="padding-50">
                <c-tooltip-universal
                    title="Some epic title!"
                    text="Tooltip description goes here :) 👻👽"
                    class="margin-top-50"
                >
                    This content was wrapped around 'tooltip-universal' component tags
                </c-tooltip-universal>
            </div>
        `
    }))
    .add('themes', () => ({
        components: {'c-tooltip-universal': TooltipUniversal},
        template: `
            <div class="padding-50">
                <div>
                    <c-tooltip-universal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="bottom"
                    >
                        <h2>Light (by default)</h2>
                    </c-tooltip-universal>
                </div>
                <div>
                    <c-tooltip-universal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        theme="dark"
                        position="bottom"
                    >
                        <h2>Dark</h2>
                    </c-tooltip-universal>
                </div>
            </div>
        `
    }))
    .add('positions', () => ({
        components: {'c-tooltip-universal': TooltipUniversal},
        template: `
            <div class="padding-50">
                <div>
                    <c-tooltip-universal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        class="margin-top-50"
                    >
                        <h2>Top (by default)</h2>
                    </c-tooltip-universal>
                </div>
                <div>
                    <c-tooltip-universal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="right"
                    >
                        <h2>Right</h2>
                    </c-tooltip-universal>
                </div>
                <div>
                    <c-tooltip-universal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="bottom"
                    >
                        <h2>Bottom</h2>
                    </c-tooltip-universal>
                </div>
                <div>
                    <c-tooltip-universal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="left"
                    >
                        <h2>Left</h2>
                    </c-tooltip-universal>
                </div>
            </div>
        `
    }))
    .add('without icon', () => ({
        components: {'c-tooltip-universal': TooltipUniversal},
        template: `
            <div class="padding-50">
                <c-tooltip-universal
                    title="Some epic title!"
                    text="Tooltip description goes here :) 👻👽"
                    position="bottom"
                    iconHide
                >
                    <h2>I have no questionmark icon</h2>
                </c-tooltip-universal>
            </div>
        `
    }))
    .add('any content', () => ({
        components: {'c-tooltip-universal': TooltipUniversal},
        template: `
            <div class="padding-50">
                <h2>Tooltip can take any content between its tags, like the image below or other components</h2>
                <c-tooltip-universal
                    title="Some epic title!"
                    text="Tooltip description goes here :) 👻👽"
                    position="bottom"
                >
                    <img
                        width="150px"
                        src="https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.1920x1080.jpg?t=1529405012"
                    />
                </c-tooltip-universal>
            </div>
        `
    }))
    .add('custom tooltip', () => ({
        components: {'c-tooltip-universal': TooltipUniversal},
        template: `
            <div class="padding-50">
                <h2>You create custom tooltip with template slot</h2>
                <c-tooltip-universal position="right">
                    <img
                        width="150px"
                        src="https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.1920x1080.jpg?t=1529405012"
                    />
                    <template slot="tooltip">
                        <div :style="{ backgroundColor: '#6365a0' }">
                            This is custom tooltip content
                            <img
                                width="150px"
                                src="https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012"
                            />
                            1234
                        </div>
                    </template>
                </c-tooltip-universal>
            </div>
        `
    }))


import ActivityChart from '@/components/activity-chart'

storiesOf('Activity Chart', module)
    .add('default', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" />
            </div>
        `
    }))
    .add('medium size', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" size="md" />
            </div>
        `
    }))
    .add('small size', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" size="sm" />
            </div>
        `
    }))
    .add('extra small size', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" size="xs" />
            </div>
        `
    }))

import PopUps from '@/components/popups'
import BasicPopup from '@/components/popups/basic'
import TermsPopup from '@/components/popups/terms'

storiesOf('Popups', module)
    .add('default', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!');
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is dafault popup</h3>
                <c-button @click="showModalHandler">Show modal</c-button>
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Default" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button status="danger">Cancel</c-button>
                            <c-button status="success">Confirm</c-button>
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('warning', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler() {
                this.modalActive = !this.modalActive;
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!');
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is warning popup</h3>
                <c-button @click="showModalHandler">Show modal</c-button>
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Warning" type="warning" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button status="danger">Cancel</c-button>
                            <c-button status="success">Confirm</c-button>
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('danger', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!');
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is danger popup</h3>
                <c-button @click="showModalHandler">Show modal</c-button>
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Danger" type="danger" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button status="danger">Cancel</c-button>
                            <c-button status="success">Confirm</c-button>
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('info', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!');
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is info popup</h3>
                <c-button @click="showModalHandler">Show modal</c-button>
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Info" type="info" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button status="danger">Cancel</c-button>
                            <c-button status="success">Confirm</c-button>
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('success', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!');
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is success popup</h3>
                <c-button @click="showModalHandler">Show modal</c-button>
                <c-popup :activated="modalActive" @close="close" ref="modal" type="success" title="Success" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button status="danger">Cancel</c-button>
                            <c-button status="success">Confirm</c-button>
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('changelog', () => ({
        components: {
            'c-basic-popup': BasicPopup,
            'c-dotted-list': List,
            'c-heading-bar-color': BlockHeadersColor,
            'c-emoji-single': EmojiSingle
        },
        data(){
            return{
                pensive: 0,
                smile: 0,
                neutral_face: 0
            }
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <c-basic-popup :activated="true">
                    <div class="h4" slot="header">Our Updates</div>
                    <template slot="body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida arcu quis tellus imperdiet tincidunt. 
                            Sed iaculis mauris vitae eros fringilla, id congue libero mattis. 
                        </p>
                        
                        <c-heading-bar-color colorCode="#5EA72B" textAlign="left" class="margin-bottom-15 margin-top-10">
                            <strong>This is the Title</strong>
                        </c-heading-bar-color>
                        <c-dotted-list>
                            <li>Donec sapien velit, vulputate</li>
                            <li>Nulla ut fermentum turpis, a fermentum enim.</li>
                            <li>Praesent feugiat erat diam, tincidunt cursus ligula pulvinar id.</li>
                        </c-dotted-list>
                        
                        <c-heading-bar-color colorCode="#FADC72" textAlign="left" class="margin-bottom-15 margin-top-20">
                            <strong>Aliquam nulla mi, mattis ut nisl nec</strong>
                        </c-heading-bar-color>
                        <c-dotted-list>
                            <li>Praesent in mauris nec felis dignissim viverra in at diam. Mauris congue aliquet tempus.</li>
                            <li>Morbi ut consequat eros</li>
                            <li>Aenean imperdiet lobortis tristique.</li>
                        </c-dotted-list>
                        
                        <c-heading-bar-color colorCode="#F75D5D" textAlign="left" class="margin-bottom-15 margin-top-20">
                            <strong>Sed vitae lobortis quam, non porta est</strong>
                        </c-heading-bar-color>
                        <p>
                            Donec urna nulla, condimentum vel quam quis, tempus pellentesque nibh. Vivamus gravida purus 
                            at nisl molestie commodo. Praesent dictum et purus in varius. Aenean imperdiet lobortis tristique. 
                            Phasellus eleifend dolor non mi tempor, quis sagittis massa vehicula. Pellentesque eget enim quis 
                            dui volutpat varius quis eget elit.
                        </p>
                    </template>
                    <template slot="footer">
                        <div class="d-flex align-items-center justify-content-center pt-2 pb-4 w-100">
                            <c-emoji-single emoji="pensive" class="mx-1" :count="pensive" @click="pensive += 1" />
                            <c-emoji-single emoji="neutral_face" class="mx-2" :count="neutral_face" @click="neutral_face += 1" />
                            <c-emoji-single emoji="smile" class="mx-1" :count="smile" @click="smile += 1" />
                        </div>
                        <c-input placeholder="Send us your feadback" bgColor="rgba( 255, 255, 255, .1)" />
                        <small class="w-100 text-center" hidden>
                            Missed an Updates? <c-button status="plain">Check out our previous change log.</c-button>
                        </small>
                    </template>
                </c-basic-popup>
            </div>
        </div>
        
        `
    }))
    .add('terms', () => ({
        components: {
            'c-terms-popup': TermsPopup
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <c-terms-popup :activated="true" width="600">
                    <div class="h4" slot="header">BlockHub Developer License Agreement</div>
                    <div slot="body">
                        <div class="termsBlock">

                            <h1>Terms and Conditions for <span class="highlight preview_company_name">BlockHub</span>
                            </h1>

                            <h2>Introduction</h2>

                            <p>These Website Standard Terms and Conditions written on this webpage shall
                                manage
                                your use of our website, <span class="highlight preview_website_name">BlockHub</span>
                                accessible at <span class="highlight preview_website_url">BlockHub.gg</span>.
                            </p>

                            <p>These Terms will be applied fully and affect to your use of this Website. By
                                using this Website, you agreed to accept all terms and conditions written in
                                here. You must not use this Website if you disagree with any of these
                                Website
                                Standard Terms and Conditions.</p>

                            <p>Minors or people below 18 years old are not allowed to use this Website.</p>

                            <h2>Intellectual Property Rights</h2>

                            <p>Other than the content you own, under these Terms, <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and/or its
                                licensors
                                own all the intellectual property rights and materials contained in this
                                Website.</p>

                            <p>You are granted limited license only for purposes of viewing the material
                                contained on this Website.</p>

                            <h2>Restrictions</h2>

                            <p>You are specifically restricted from all of the following:</p>

                            <ul>
                                <li>publishing any Website material in any other media;</li>
                                <li>selling, sublicensing and/or otherwise commercializing any Website
                                    material;
                                </li>
                                <li>publicly performing and/or showing any Website material;</li>
                                <li>using this Website in any way that is or may be damaging to this
                                    Website;
                                </li>
                                <li>using this Website in any way that impacts user access to this
                                    Website;
                                </li>
                                <li>using this Website contrary to applicable laws and regulations, or in
                                    any
                                    way may cause harm to the Website, or to any person or business entity;
                                </li>
                                <li>engaging in any data mining, data harvesting, data extracting or any
                                    other
                                    similar activity in relation to this Website;
                                </li>
                                <li>using this Website to engage in any advertising or marketing.</li>
                            </ul>

                            <p>Certain areas of this Website are restricted from being access by you and
                                <span
                                    class="highlight preview_company_name">Hyperbridge Technology Inc.</span> may further
                                restrict
                                access by you to any areas of this Website, at any time, in absolute
                                discretion.
                                Any user ID and password you may have for this Website are confidential and
                                you
                                must maintain confidentiality as well.</p>

                            <h2>Your Content</h2>

                            <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any
                                audio, video text, images or other material you choose to display on this
                                Website. By displaying Your Content, you grant <span
                                    class="highlight preview_company_name">Hyperbridge Technology Inc.</span> a
                                non-exclusive,
                                worldwide irrevocable, sub licensable license to use, reproduce, adapt,
                                publish,
                                translate and distribute it in any and all media.</p>

                            <p>Your Content must be your own and must not be invading any third-party's
                                rights.
                                <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> reserves
                                the
                                right to remove any of Your Content from this Website at any time without
                                notice.</p>

                            <h2>No warranties</h2>

                            <p>This Website is provided “as is,” with all faults, and <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> express no
                                representations or warranties, of any kind related to this Website or the
                                materials contained on this Website. Also, nothing contained on this Website
                                shall be interpreted as advising you.</p>

                            <h2>Limitation of liability</h2>

                            <p>In no event shall <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span>, nor any of its
                                officers, directors and employees, shall be held liable for anything arising
                                out
                                of or in any way connected with your use of this Website whether such
                                liability
                                is under contract. &nbsp;<span class="highlight preview_company_name">Hyperbridge Technology Inc.</span>,
                                including its officers, directors and employees shall not be held liable for
                                any
                                indirect, consequential or special liability arising out of or in any way
                                related to your use of this Website.</p>

                            <h2>Indemnification<p></p>

                                <p>You hereby indemnify to the fullest extent <span
                                    class="highlight preview_company_name">Hyperbridge Technology Inc.</span> from and
                                    against
                                    any and/or all liabilities, costs, demands, causes of action, damages
                                    and
                                    expenses arising in any way related to your breach of any of the
                                    provisions
                                    of these Terms.</p>

                            </h2>
                            <h2>Severability</h2>

                            <p>If any provision of these Terms is found to be invalid under any applicable
                                law,
                                such provisions shall be deleted without affecting the remaining provisions
                                herein.</p>

                            <h2>Variation of Terms</h2>

                            <p><span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is permitted
                                to
                                revise these Terms at any time as it sees fit, and by using this Website you
                                are
                                expected to review these Terms on a regular basis.</p>

                            <h2>Assignment</h2>

                            <p>The <span class="highlight preview_company_name">Hyperbridge Technology Inc.</span> is
                                allowed
                                to assign, transfer, and subcontract its rights and/or obligations under
                                these
                                Terms without any notification. However, you are not allowed to assign,
                                transfer, or subcontract any of your rights and/or obligations under these
                                Terms.</p>

                            <h2>Entire Agreement</h2>

                            <p>These Terms constitute the entire agreement between <span
                                class="highlight preview_company_name">Hyperbridge Technology Inc.</span> and you in
                                relation
                                to your use of this Website, and supersede all prior agreements and
                                understandings.</p>

                            <h2>Governing Law &amp; Jurisdiction</h2>

                            <p>These Terms will be governed by and interpreted in accordance with the laws
                                of
                                the State of <span class="highlight preview_country">Country</span>, and you
                                submit to the non-exclusive jurisdiction of the state and federal courts
                                located
                                in <span class="highlight preview_country">Country</span> for the resolution
                                of
                                any disputes.</p>

                        </div>
                    </div>
                </c-terms-popup>
            </div>
        </div>
        
        `
    }))
    .add('play', () => ({
        components:{
            'c-play-popup' : (resolve) => require(['@/components/popups/play'], resolve)
        },
        data(){
            return{
                activated: false
            }
        },
        template: `<div class="p-4"><c-button @click=" activated = true ">Play Now</c-button> <c-play-popup :activated="activated" @close=" activated = !activated " /></div>`
    }))
    .add('Add to Collection', () =>({
        components:{
            'c-popup-collection-add': (resolve) => require(['@/components/popups/collection-add'], resolve),
        },
        data(){
            return{
                collections: [
                    {
                        name: 'My Top 100',
                        id: 22
                    },
                    {
                        name: 'Nintendo TOP',
                        id: 22
                    },
                    {
                        name: 'Game for PS4',
                        id: 22
                    },
                    {
                        name: 'Something other',
                        id: 22
                    }
                ],
                image: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                name: 'Magic Plate Armor',
                description: 'Cras in dui eget nulla vulputate finibus sed id ligula.',
            }
        },
        template: `<div class="m-4"><c-popup-collection-add  :collections="collections" :image="image" :name="name" :description="description" /></div>`
    }))


import RangeSlider from '@/components/range-slider/pure'

storiesOf('Range Slider', module)
    .add('default', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        data() {
            return {
                min: 10,
                max: 67,
                value: 0
            }
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8 text-white">
                <c-range-slider :min="min" :max="max" v-model.value="value" />
                <hr />
                min - {{ min }}<br/>
                max - {{ max }}<br />
                value - {{ value }}
            </div>
         </div>
        `
    }))


import AssetsGrid from '@/components/assets-grid'

const assets_list = [
    {
        name: 'some item name',
        price: {
            "min": 0.99,
            "max": 9.99,
            "current": 2.99
        },
        count: '240.000',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
    },
    {
        name: 'some another item name',
        price: {
            "min": 0.99,
            "max": 9.99,
            "current": 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            "min": 0.99,
            "max": 9.99,
            "current": 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            "min": 0.99,
            "max": 9.99,
            "current": 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            "min": 0.99,
            "max": 9.99,
            "current": 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            "min": 0.99,
            "max": 9.99,
            "current": 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    }
]
storiesOf('Assets Grid', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-assets-grid': AssetsGrid
        },
        data() {
            return object('Data', {
                assets_list: assets_list
            })
        },
        template: `
        <c-assets-grid :list="assets_list" />
        `
    }), {viewport: 'desktop'})

import AssetsPopup from '@/components/asset-overview-popup'

storiesOf('Assets Overview Popup', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-asset-popup': AssetsPopup
        },
        data() {
            return object('Data', {
                asset: {
                    metadata: [
                        {
                            "label": "type",
                            "text": "Legendary Two Handed Sword"
                        },
                        {
                            "label": "average dps",
                            "text": "2,903.6"
                        },
                        {
                            "label": "Damage Range",
                            "text": "2193-2880"
                        },
                        {
                            "label": "Attack speed",
                            "text": "1.15"
                        },
                        {
                            "label": "Bonus 1",
                            "text": "+1379-1679 Damage, +9% Damage, +1121 strenght"
                        },
                        {
                            "label": "Bonus 2",
                            "text": "Monster kills grant +151 experiance"
                        },
                        {
                            "label": "Level Requirement",
                            "text": "70"
                        },
                        {
                            "label": "Item Durability",
                            "text": "40/41"
                        }
                    ],
                    price: {
                        "min": 0.99,
                        "max": 9.99,
                        "current": 2.99
                    }
                }
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-popup :asset="asset" />
         </div>
        `
    }));

import Switch from '@/components/switch'

storiesOf('Switch', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch :checked=true label="Label text" class="mr-5"/>
             <c-switch :checked=true customLabel>
                Custom label 
            </c-switch>
         </div>
        `
    }))
    .add('changed label size', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch label="Some text" label_position="right" label_size="22px" />
         </div>
        `
    }))
    .add('large', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch size="lg" :checked=true />
         </div>
        `
    }));


import AssetsList from '@/components/assets-list-item/featured-list.vue'
import AssetsListDetail from '@/components/assets-list-item'

storiesOf('Assets List', module)
    .addDecorator(withKnobs)
    .add('type 1', () => ({
        components: {
            'c-asset-list': AssetsList
        },
        data() {
            return object('Data', {
                items: [
                    {
                        img: 'https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de',
                        title: 'Magic Plate Armor',
                        subTitle: 'Tibia MMORPG'
                    },
                    {
                        img: 'https://vignette.wikia.nocookie.net/angrybirds-fiction/images/8/8b/Toons_assets_chuck_01.png/revision/latest?cb=20150120103056&path-prefix=ru',
                        title: 'Magic Chuck',
                        subTitle: 'Angry Birds'
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-list :items="items" itemInRow="5" />
         </div>
        `
    }))
    .add('type 2', () => ({
        components: {
            'c-asset-list-detail': AssetsListDetail
        },
        data() {
            return object('Data', {
                items: [
                    {
                        image: 'https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de',
                        title: 'Magic Plate Armor',
                        price: {
                            "min": 0.99,
                            "max": 9.99,
                            "current": 2.99
                        },
                        count: '350.000',
                        id: 1
                    },
                    {
                        image: 'https://vignette.wikia.nocookie.net/angrybirds-fiction/images/8/8b/Toons_assets_chuck_01.png/revision/latest?cb=20150120103056&path-prefix=ru',
                        title: 'Magic Chuck',
                        price: {
                            "min": 0.99,
                            "max": 9.99,
                            "current": 2.99
                        },
                        count: '50.000',
                        id: 2
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-list-detail :items="items" itemInRow="4" />
         </div>
        `
    }))


import Block from '@/components/block'
import simpleBlock from '@/components/block/simple'

storiesOf('Block', module)
    .add('default', () => ({
        components: {
            'c-block': Block
        },
        template: `
         <div class="row m-0 p-3">
             <c-block title="This is block title" class="col-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vel arcu sit amet erat vestibulum volutpat.
                Ut volutpat enim vel augue luctus luctus</p>
                <p>Curabitur et molestie eros. Duis sodales ante velit,
                ut fringilla turpis dictum sit amet. Praesent quis lacus
                ac tellus vehicula commodo sit amet sit amet ex.</p>
            </c-block>
         </div>
        `
    }))
    .add('simple', () => ({
        components: {
            'c-simple-block': simpleBlock
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-4">
                 <c-simple-block image="https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/od/ODPQGI4NN71N1544053040567.jpg" imgHeight="200px" hovered>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel arcu sit amet erat vestibulum volutpat.
                    Ut volutpat enim vel augue luctus luctus</p>
                </c-simple-block>
            </div>
         </div>
        `
    }))
    .add('gradient', () => ({
        components: {
            'c-block': Block
        },
        template: `
             <div class="row m-0 p-3">
                 <c-block title="This is block title" class="col-8" :bgGradient="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel arcu sit amet erat vestibulum volutpat.
                    Ut volutpat enim vel augue luctus luctus</p>
                    <p>Curabitur et molestie eros. Duis sodales ante velit,
                    ut fringilla turpis dictum sit amet. Praesent quis lacus
                    ac tellus vehicula commodo sit amet sit amet ex.</p>
                </c-block>
             </div>
            `
    }))
    .add('only content bg', () => ({
        components: {
            'c-block': Block
        },
        template: `
             <div class="row m-0 p-3">
                 <c-block title="This is block title" class="col-8" :bgGradient="true" :onlyContentBg="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel arcu sit amet erat vestibulum volutpat.
                    Ut volutpat enim vel augue luctus luctus</p>
                    <p>Curabitur et molestie eros. Duis sodales ante velit,
                    ut fringilla turpis dictum sit amet. Praesent quis lacus
                    ac tellus vehicula commodo sit amet sit amet ex.</p>
                </c-block>
             </div>
            `
    }))


import CustomModal from '@/components/modal/custom'
import Modal from '@/components/modal/';

storiesOf('Modal', module)
    .add('image', () => ({
        components: {'c-modal': Modal},
        template: `
            <c-modal>
                <img
                    src="http://gamechanger.co.ke/wp-content/uploads/2016/09/The-Witcher-3-Wild-Hunt-Game-of-the-Year-Edition3.jpg"
                />
            </c-modal>
        `
    }))
    .add('text', () => ({
        components: {'c-modal': Modal},
        template: `
            <c-modal>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn</p>
            </c-modal>
        `
    }))
    .add('custom', () => ({
        components: {
            'c-custom-modal': CustomModal
        },
        template: `
         <div class="row m-0 p-3">
             <div class="col-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch modal
                </button>
            </div>
            <c-custom-modal id="exampleModal" title="Some modal title">
                <template slot="modalBody">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id rhoncus turpis.</p>
                    <p>Aliquam nec blandit mi. Integer sed neque urna.</p>
                </template>
                <template slot="modalFooter">
                    <a href="#" class="btn btn-sm btn-success">Some Link</a>
                </template>
            </c-custom-modal>
         </div>
        `
    }))

import Dropdown from '@/components/dropdown-menu/type-2'
import DropdownCustom from '@/components/dropdown-menu/type-3'
import DropdownPost from '@/components/dropdown-menu/index'
import DropdownCurrency from '@/components/dropdown-menu/currency'
import DropdownLang from '@/components/dropdown-menu/language'

storiesOf('Dropdown', module)
    .add('default', () => ({
        components: {
            'c-dropdown': Dropdown
        },
        template: `
         <div class="row m-0 p-3">
            <c-dropdown id="test" name="Filter by Genre" :showBg="true">
                <a href="#">RPG</a>
                <a href="#">ACTION</a>
                <a href="#">Cars</a>
            </c-dropdown>
         </div>
        `
    }))
    .add('post dropdown', () => ({
        components: {
            'c-dropdown': DropdownPost
        },
        template: `
         <div class="row m-0 p-3">
             <c-dropdown />
         </div>
        `
    }))
    .add('custom content', () => ({
        components: {
            'c-dropdown': DropdownCustom
        },
        template: `
         <div class="row m-0 p-3">
             <c-dropdown title="Dropdown">
                <ul class="list-unstyled">
                <li>
                    <a href="#">
                        This is link
                    </a>
                </li>
                <li>
                    <a href="#">
                        This is link
                    </a>
                </li>
                <li>
                    <a href="#">
                        This is link
                    </a>
                </li>
                <li>
                    <a href="#">
                        This is link
                    </a>
                </li>
            </ul>
            </c-dropdown>
         </div>
        `
    }))
    .add('currency', () => ({
        components: {
            'c-currency-dropdown': DropdownCurrency
        },
        data() {
            return {
                "currencies": [
                    {
                        "code": "USD",
                        "symbol": "$",
                        "name": "United States Dollar",
                        "country": "us"

                    },
                    {
                        "code": "RUB",
                        "symbol": "$",
                        "name": "United States Dollar",
                        "country": "ru"

                    },
                    {
                        "code": "BTC",
                        "symbol": "B",
                        "name": "Bitcoin",
                        "country": ""

                    },
                    {
                        "code": "ETH",
                        "symbol": "E",
                        "name": "Ethereum"

                    },
                    {
                        "code": "DAI",
                        "symbol": "D",
                        "name": "Dau"
                    }
                ],
                "currency": {
                    "code": "USD",
                    "symbol": "$",
                    "name": "United States Dollar",
                    "country": "us"

                },
            }
        },
        template: `
         <div class="row m-0 p-3">
             <c-currency-dropdown :currentCurrency="currency" :currencies="currencies" />
         </div>
        `
    }))
    .add('languages', () => ({
        components: {
            'c-languages-dropdown': DropdownLang
        },
        data() {
            return {
                currentLanguage: {
                    code: 'us',
                    name: 'English',
                },
                languages: [
                    {
                        code: 'us',
                        name: 'English',
                        native: 'English'
                    },
                    {
                        code: 'ru',
                        name: 'Russian',
                        native: 'Русский'
                    },
                    {
                        code: 'ua',
                        name: 'Ukrainian',
                        native: 'Українська'
                    },
                    {
                        code: 'cn',
                        name: 'Chinese',
                        native: '繁體中文'
                    }
                ]
            }
        },
        template: `
         <div class="row m-0 p-3">
             <c-languages-dropdown :currentLanguage="currentLanguage" :languages="languages" />
         </div>
        `
    }))

import DropdownMenu from '@/components/dropdown-menu/type-2.vue'
import FTradedAssets from '@/components/frequently-traded-assets/index'

storiesOf('Frequently traded assets', module)
    .add('default', () => ({
        components: {
            'c-traded-assets': FTradedAssets,
            'c-dropdown': DropdownMenu
        },
        data: () => object('Data', data.TradedAssets),
        template: `
         <div class="row m-0 p-3">
             <div class="col-4">
                <c-traded-assets :items="frequentlyTradedAssets" assets_url="#some_url_here">
                    <template slot="filter">
                    <c-dropdown name="Most valuable" id="most_valuable">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </c-dropdown>
                    </template>
                </c-traded-assets>
            </div>
         </div>
        `
    }))

import GamePlan from '@/components/game-plans/plan'

storiesOf('Game Plans', module)
    .add('default', () => ({
        components: {
            'c-game-plan': GamePlan
        },
        data() {
            return object('Data', {
                plans: [
                    {
                        "title": "Play Now",
                        "link": "#"
                    },
                    {
                        "title": "3 Month Subscription",
                        "price": "12.95",
                        "link": ""
                    },
                    {
                        "title": "1 Year Subscription",
                        "price": "120.95",
                        "link": ""
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-5">
                <c-game-plan
                    v-for="(plan, index) in plans"
                    :key="index"
                    :plan="plan"
                />
            </div>
         </div>
         `
    }))

import GamesGrid from '@/components/game-grid/with-description'
import GamesGridSimple from '@/components/game-grid/simple'

storiesOf('Games Grid', module)
    .addDecorator(withKnobs)
    .add('with description', () => ({
        components: {
            'c-game-grid': GamesGrid
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <c-game-grid
                    :showRating=false
                    :showTime=true
                    :showPrice=true
                    :itemInRow="itemInRow"
                    :items="games"
                    itemBg="transparent"
                    :hovered=true
                />
            </div>
         </div>
         `
    }))
    .add('simple', () => ({
        components: {
            'c-game-grid-simple': GamesGridSimple
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <c-game-grid-simple
                    :itemInRow="itemInRow"
                    :items="games"
                />
            </div>
         </div>
         `
    }))

// import Headers from '@/components/headers/basic'
// storiesOf('Headers', module)
//     .add('default', () => ({
//         components: {
//             'c-headers': Headers
//         },
//         template: `
//             <!--<c-headers />-->
// `
// }))

import BlockHeaders from '@/components/heading-bar/index'
import BlockHeadersColor from '@/components/heading-bar/simple-colored.vue'
import BlockHeadersAddFields from '@/components/heading-bar/additional-action'

const injectHBarTemp = code => `
    <div class="row">
        <div class="col-8 p-5">
            ${code}
        </div>
    </div>
`;
storiesOf('Block Title', module)
    .add('default', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" />
        `)
    }))
    .add('with background', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" :showBackground="true" />
        `)
    }))
    .add('with arrows', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" :showActions="true" :showArrows="true" />
        `)
    }))
    .add('with more button', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" :showActions="true" more="#some_link"  />
        `)
    }))
    .add('with filters', () => ({
        components: {
            'c-heading-bar': BlockHeaders,
            'c-heading-bar-fields': BlockHeadersAddFields
        },
        methods: {
            upClick: function () {
                alert('It was Up click')
            },
            downClick: function () {
                alert('It was Down click')
            }
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" :showActions="true">
                <template slot="additional-action">
                    <c-heading-bar-fields name="Reviews" icon="fas fa-trophy" @click_up="upClick"  @click_down="downClick" />
                    <c-heading-bar-fields name="Price" icon="fas fa-dollar-sign" />
                </template>
            </c-heading-bar>
        `)
    }))
    .add('with tabs', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar>
                <template slot="heading-tabs">
                    <a href="#">First tab</a>
                    <a href="#" class="active">Second tab</a>
                    <a href="#">Third tab</a>
                </template>
            </c-heading-bar>
        `)
    }))
    .add('colored', () => ({
        components: {
            'c-heading-bar-color': BlockHeadersColor
        },
        template: injectHBarTemp(`
            <c-heading-bar-color colorCode="#f60" textAlign="center">
                <strong>This is the Title</strong>
            </c-heading-bar-color>
        `)
    }))


import NewsListNav from '@/components/news-list/navigation'
import NewsList from '@/components/news-list/articles'
import NewsArticle from '@/components/news-list/article'

storiesOf('News List', module)
    .add('default', () => ({
        components: {
            'c-news-list-navigation': NewsListNav,
            'c-news-list-articles': NewsList,
        },
        data() {
            return {
                posts: [
                    {
                        "id": 1,
                        "targetType": "product",
                        "targetId": 1,
                        "tags": [
                            {
                                "key": "news",
                                "value": "News"
                            }
                        ],
                        "heading": "New class and event coming next week!",
                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        "url": "/post/1",
                        "date": "2018-07-24T04:09:00.000Z"
                    },
                    {
                        "id": 2,
                        "targetType": "product",
                        "targetId": 1,
                        "tags": [
                            {
                                "key": "news",
                                "value": "News"
                            }
                        ],
                        "heading": "New class and event coming next week!",
                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        "url": "/post/1",
                        "date": "2016-09-24T04:09:00.000Z"
                    },
                    {
                        "id": 3,
                        "targetType": "product",
                        "targetId": 2,
                        "tags": [
                            {
                                "key": "news",
                                "value": "News"
                            }
                        ],
                        "heading": "New class and event coming next week!",
                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        "url": "/post/1",
                        "date": "2014-03-24T04:09:00.000Z"
                    },
                    {
                        "id": 4,
                        "targetType": "product",
                        "targetId": 3,
                        "tags": [
                            {
                                "key": "news",
                                "value": "News"
                            }
                        ],
                        "heading": "New class and event coming next week!",
                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        "url": "/post/1",
                        "date": "2017-12-24T04:09:00.000Z"
                    }
                ]
            }
        },
        template: `
        <div class="row m-0 p-5">
            <c-news-list-navigation
                :list="posts"
            />
            <c-news-list-articles
                :articles="posts"
            />
        </div>
        `
    }))
    .add('single article', () => ({
        components: {
            'c-news-article': NewsArticle
        },
        data() {
            return {
                article: {
                    "id": 1,
                    "targetType": "product",
                    "targetId": 1,
                    "tags": [
                        {
                            "key": "news",
                            "value": "News"
                        }
                    ],
                    "heading": "New class and event coming next week!",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                    "url": "/post/1",
                    "date": "2018-07-24T04:09:00.000Z"
                },
            }
        },
        template: `
            <div class="row">
                <div class="col-6">
                    <c-news-article 
                    :heading="article.heading"
                    :date="article.date"
                    :content="article.content"
                    :url="article.url"
                    itemInRow="1" />
                </div>
            </div>
        `
    }))

import Pagination from '@/components/pagination/index';

storiesOf('Pagination', module)
    .add('default', () => ({
        components: {
            'c-pagination': Pagination
        },
        template: `
            <div class="row m-0 p-5">
                <c-pagination :pages="15" />
            </div>
        `
    }))
    .add('Limited to 5 pages', () => ({
        components: {
            'c-pagination': Pagination
        },
        template: `
            <div class="row m-0 p-5">
                <c-pagination :pages="15" :pagesShow="5"/>
            </div>
        `
    }))
    .add('Debouncer', () => ({
        components: {
            'c-pagination': Pagination
        },
        template: `
            <div class="row m-0 p-5">
                <c-pagination :pages="15" :debounce="1000"/>
            </div>
        `
    }))


import ProductCommunity from '@/components/community/post-item';
import ProductCommunityComment from '@/components/community/comment';
import ProductCommunityReply from '@/components/community/reply';

storiesOf('Product Community', module)
    .add('post', () => ({
        components: {
            'c-post': ProductCommunity
        },
        data: () => data.ProductCommunity,
        template: `
            <div class="row m-0 p-5">
                <div class="col-10">
                    <c-post :post="post"/>
                </div>
            </div>
        `
    }))
    .add('comment', () => ({
        components: {
            'c-comment': ProductCommunityComment
        },
        data: () => data.ProductCommunity,
        template: `
            <div class="padding-30">
                <c-comment :comment="post.content.comments[0]"/>
            </div>
        `
    }))
    .add('reply', () => ({
        components: {
            'c-reply': ProductCommunityReply
        },
        template: `
            <div class="padding-30">
                <c-reply/>
            </div>
        `
    }))


import ProjectCard from '@/components/project/card'

storiesOf('Project Card', module)
    .add('default', () => ({
        components: {
            'c-project-card': ProjectCard
        },
        data() {
            return {
                trendingProjects: [
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        },
                        id: 1
                    },
                    {
                        game: {
                            title: 'World of Warcraft',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'GBP',
                            obtained: 7613,
                            goal: 8500
                        },
                        id: 9
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        },
                        id: 4
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        },
                        id: 3
                    },
                ]
            }
        },
        template: `
            <div class="row m-0 p-5">
                <div class="col-4" v-for="(project, index) in trendingProjects" :key="index">
                    <c-project-card 
                                    :image="project.img"
                                    :description="project.description"
                                    :funds="project.funds"
                                    :parentImage="project.game.img"
                                    :parentName="project.game.title"
                                    :parentDeveloper="project.game.developer"
                                    :id="id"
                                    customClass="margin-bottom-20"/>
                </div>
            </div>
        `
    }))


import SendingFundsPopup from '@/components/send-funds-popup/index'

storiesOf('Sending Funds(not finished)', module)
    .add('default', () => ({
        components: {
            'c-send-funds': SendingFundsPopup,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            }
        },
        template: data.SendingFunds.template
    }))


import UserCard from '@/components/user-card/index';

storiesOf('User Card', module)
    .add('default', () => ({
        components: {
            'c-user-card': UserCard
        },
        data() {
            return {
                user: {
                    id: 1,
                    name: 'Mr. Satoshi',
                    wallet: '0x6cc5f688a315f3dc28a7781717a',
                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                    default: false,
                    edit: false
                }
            }
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <c-user-card
                    :user="user"
                    @updateProfile="(prop, val) => user[prop] = val"
                />
            </div>
            <div class="col-4">
                <c-user-card :user="user" previewMode/>
            </div>
        </div>
        `
    }))


import ScreenGallery from '@/components/screen-gallery/gallery';

storiesOf('Gallery', module)
    .add('screen-gallery', () => ({
        components: {ScreenGallery},
        data() {
            return {
                items: [
                    {
                        src: 'https://cdn.vox-cdn.com/thumbor/-9ezNi6jWxByZiYsLDfoAILAJC4=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/12648875/HowFortniteWonSite.png',
                        overlay:{
                            title: 'How Fortnite became the biggest game of 2018',
                            subtitle: 'It comes down to three big things',
                            text: 'Fortnite has achieved monumental success, the rare game to crossover into mainstream pop culture. Fortnite is referenced by musicians, imitated by athletes and reported on by news outlets. How did it achieve such broad recognition when so few games do?'
                        }
                    },
                    'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/03/15/105067468-Screen-Shot-2018-03-15-at-8.46.23-AM.1910x1000.jpg',
                    'https://cdn.igromania.ru/mnt/news/7/e/0/5/c/6/74193/4703e6101b90868b_848x477.jpg',
                    'https://cdn.gamerant.com/wp-content/uploads/Fortnite-Battle-Royale-more-players-GTA-Online.jpg.optimal.jpg',
                ]
            }
        },
        template: `<screen-gallery :items="items" class="col-9"/>`
    }))


import ProductCardDynamic from '@/components/store/product-card-dynamic';
import ProductCard from '@/components/store/product-card';
import ProductsCards from '@/components/store/product-cards';

const productsCardsData = [
    {
        id: "8",
        name: "Gothic® 3",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004036.1920x1080.jpg?t=1533039803",
            mediumTile: "https://steamcdn-a.akamaihd.net/steam/apps/39500/header.jpg?t=1533039803",
            main: "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004036.1920x1080.jpg?t=1533039803",
            preview: [
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004033.1920x1080.jpg?t=1533039803",
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004034.1920x1080.jpg?t=1533039803",
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004035.1920x1080.jpg?t=1533039803",
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004037.1920x1080.jpg?t=1533039803"
            ]
        },
        author: "Piranha Bytes",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/901191/movie480.webm?t=1490866901"],
        developerTags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
    },
    {
        id: "9",
        name: "The Witcher® 3: Wild Hunt",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.600x338.jpg?t=1529405012",
            mediumTile: "https://steamcdn-a.akamaihd.net/steam/apps/292030/header.jpg?t=1529405012",
            main: "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.600x338.jpg?t=1529405012",
            preview: [
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012",
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_64eb760f9a2b67f6731a71cce3a8fb684b9af267.600x338.jpg?t=1529405012",
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.600x338.jpg?t=1529405012",
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_d5b80eb63c12a6484f26796f3e34410651bba068.600x338.jpg?t=1529405012"
            ]
        },
        author: "CD PROJEKT RED",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256658589/movie480.webm?t=1528288687"],
        developerTags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
    },
    {
        id: "10",
        name: "Fallout 4",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c6b798424a93617b4b825aea3bcd9547c0b0a5ce.1920x1080.jpg?t=1533676954",
            mediumTile: "https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg?t=1533676954",
            main: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c6b798424a93617b4b825aea3bcd9547c0b0a5ce.1920x1080.jpg?t=1533676954",
            preview: [
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg?t=1533676954",
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_910437ac708aed7c028f6e43a6224c633d086b0a.1920x1080.jpg?t=1533676954",
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_f649b8e57749f380cca225db5074edbb1e06d7f5.1920x1080.jpg?t=1533676954",
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c310f858e6a7b02ffa21db984afb0dd1b24c1423.1920x1080.jpg?t=1533676954"
            ]
        },
        author: "Bethesda",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256657338/movie480.webm?t=1447378505"],
        developerTags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
    }
];
storiesOf('Product Card', module)
    .add('basic', () => ({
        components: {ProductCard},
        data: () => ({products: productsCardsData}),
        template: `
            <div class="row">
                <product-card
                    v-for="(product, index) in products"
                    :product="product"
                    :key="index"
                    class="col-3"
                />
            </div>
        `
    }))
    .add('dynamic', () => ({
        components: {ProductCardDynamic},
        data: () => ({products: productsCardsData}),
        template: `
            <div class="row">
                <product-card-dynamic
                    v-for="(product, index) in products"
                    :product="product"
                    :key="index"
                    class="col-3"
                />
            </div>
        `
    }))
    .add('wrapper', () => ({
        components: {
            'product-cards': ProductsCards
        },
        data: () => ({products: productsCardsData}),
        template: `
            <div class="p-5">
                <h1 class="text-center text-white">Hover transitions are enabled only on bigger screens</h1>
                <product-cards :products="products"/>
            </div>
        `
    }))


import CuratorReview from '@/components/store/curator-review';
import CuratorsReviews from '@/components/store/curator-reviews';

const curatorReview = {
    author: {name: 'SatoSan', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'},
    rate: 4.5,
    game: {img: 'http://www.pixels-association.ch/wp-content/uploads/2017/11/no1.jpg'},
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi arcu, viverra et efficitur luctus, tincidunt vel lacus. Morbi erat augue, posuere et sodales venenatis, tincidunt eu arcu. In sollicitudin purus quis sodales ornare. Cras tempus vestibulum elementum. Sed placerat, turpis id cursus cursus, augue enim molestie dui, elementum luctus lectus est vitae dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vehicula mi a nunc cursus, id volutpat purus commodo. Duis consequat elementum varius. Suspendisse dui enim, rhoncus a molestie at, tristique ut urna. Praesent et consectetur dui. Pellentesque ut volutpat nunc, ut viverra nulla. Duis ultricies, sem sit amet laoreet lobortis, mauris est mollis orci, non eleifend urna leo quis lectus. Vestibulum sit amet volutpat est.',
    moreReviews: [
        {
            rate: 3.5,
            game: {
                title: 'Volgar the Viking',
                img: 'https://images-1.gog.com/54e9b9504af871d5a6ed67f9a9c439fc3a889ecd4e84d24173b10e49971db9c7.jpg'
            }
        },
        {
            rate: 5,
            game: {
                title: 'The Witcher 3: Wild Hunt',
                img: 'http://getwallpapers.com/wallpaper/full/6/f/7/22250.jpg'
            }
        }
    ]
};
storiesOf('Curators Reviews', module)
    .add('review', () => ({
        components: {CuratorReview},
        data: () => ({review: curatorReview}),
        template: `<curator-review :review="review" class="col-3"/>`
    }))
    .add('reviews wrapper', () => ({
        components: {
            'curator-reviews': CuratorsReviews
        },
        data: () => ({reviews: [curatorReview, curatorReview, curatorReview]}),
        template: `<curator-reviews :reviews="reviews" class="col-12"/>`
    }))


import ImagesExplorer from '@/components/images-explorer';

storiesOf('Images Explorer', module)
    .add('default', () => ({
        components: {'c-images-explorer': ImagesExplorer},
        data: () => object('Data', data.ImagesExplorer),
        template: `<c-images-explorer :images="images"/>`
    }))
    .add('in modal', () => ({
        components: {
            'c-images-explorer': ImagesExplorer,
            'c-modal-light': Modal
        },
        data: () => object('Data', data.ImagesExplorer),
        template: `
            <c-modal-light>
                <c-images-explorer :images="images"/>
            </c-modal-light>
        `
    }))


import CollectionItem from '@/components/collection/item';
import CollectionList from '@/components/collection/list';
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

storiesOf('Collection', module)
    .add('single item', () => ({
        components: {
            'c-collection-item': CollectionItem
        },
        data() {
            return {
                item: {
                    title: 'Collection name',
                    user: 'John Doel',
                    countNumber: 2741,
                    background: 'https://via.placeholder.com/100x100',
                    images: [
                        'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    ]
                }
            }
        },
        template: `
            <div class="col-3 p-5">
                <c-collection-item :item="item" />
            </div>
        `
    }))
    .add('list', () => ({
        components: {
            'c-collection-list': CollectionList,
            'c-collection-item': CollectionItem,
            'c-swiper': swiper,
            'c-slide': swiperSlide
        },
        data() {
            return {
                items: [
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        countNumber: 2741,
                        background: 'https://via.placeholder.com/100x100',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        countNumber: 2741,
                        background: 'https://via.placeholder.com/100x100',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        countNumber: 2741,
                        background: 'https://via.placeholder.com/100x100',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        countNumber: 2741,
                        background: 'https://via.placeholder.com/100x100',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        countNumber: 2741,
                        background: 'https://via.placeholder.com/100x100',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        countNumber: 2741,
                        background: 'https://via.placeholder.com/100x100',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        countNumber: 2741,
                        background: 'https://via.placeholder.com/100x100',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    }
                ],
                sliderOptions: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                }
            }
        },
        template: `
            <div class="p-5" style="width: 900px">
                <c-collection-list title="Get Started" :collections="items"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tellus in neque porttitor consequat."
                                    >
                </c-collection-list>
            </div>
        `
    }))


import GameSeries from '@/components/game-series/index'
import GameDescription from '@/components/game-series/game-description'
import GameIncludesList from '@/components/game-series/game-includes-list'
import GameIncludesItem from '@/components/game-series/game-includes-item'

storiesOf('Game Series', module)
    .add('default', () => ({
        components: {
            'c-game-series': GameSeries,
            'c-game-description': GameDescription,
            'c-game-includes-list': GameIncludesList
        },
        data() {
            return {
                product: {},
                list: [
                    {
                        img: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://www.licente-jocuri.ro/image/data/440-dragon-age-2-pc-cover.jpeg',
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                    },
                    {
                        img: 'https://via.placeholder.com/100x100',
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://upload.wikimedia.org/wikipedia/ru/2/23/DAO-Awakening_cover.jpg',
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://www.licente-jocuri.ro/image/data/440-dragon-age-2-pc-cover.jpeg',
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                    },
                    {
                        img: 'https://via.placeholder.com/100x100',
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://upload.wikimedia.org/wikipedia/ru/2/23/DAO-Awakening_cover.jpg',
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                    }
                ]
            }
        },
        template: `<div class="p-5" style="width: 900px">
                    <c-game-series>
                        <c-game-description :product="product" />
                        <c-game-includes-list :list="list" :showNumber="5" />
                    </c-game-series>
                    </div>`
    }))
    .add('description', () => ({
        components: {
            'c-game-description': GameDescription
        },
        data: () => object('Data', data.GameSeries),
        template: `<div class="p-5" style="width: 900px">
            <c-game-description :game="game" />
        </div>`
    }))
    .add('includes item', () => ({
        components: {
            'c-game-includes-item': GameIncludesItem
        },
        data() {
            return {
                img: 'https://pre00.deviantart.net/9d38/th/pre/i/2014/309/a/5/dragon_age__inquisition___movie_poster_by_the4therinyes-d85exws.png',
                title: 'Dragon Age: Inquisition',
                developer: 'BioWare',
                stars: 5,
            }
        },
        template: `<div class="p-5" style="width: 900px">
                        <c-game-includes-item 
                            :id="23"
                            :name="title"
                            :rating="stars"
                            :image="img"
                            :developer="developer"
                         />
                     </div>`
    }))
    .add('includes list', () => ({
        components: {
            'c-game-includes-item': GameIncludesItem,
            'c-game-includes-list': GameIncludesList
        },
        data() {
            return {
                list: [
                    {
                        img: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://www.licente-jocuri.ro/image/data/440-dragon-age-2-pc-cover.jpeg',
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                    },
                    {
                        img: 'https://via.placeholder.com/100x100',
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://upload.wikimedia.org/wikipedia/ru/2/23/DAO-Awakening_cover.jpg',
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://www.licente-jocuri.ro/image/data/440-dragon-age-2-pc-cover.jpeg',
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                    },
                    {
                        img: 'https://via.placeholder.com/100x100',
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                    },
                    {
                        img: 'https://upload.wikimedia.org/wikipedia/ru/2/23/DAO-Awakening_cover.jpg',
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                    }
                ]
            }
        },
        template: `<div class="p-5" style="width: 900px"><c-game-includes-list :list="list" :showNumber="5" /></div>`
    }))


import ProgressBar from '@/components/progress-bar';
import ProgressBarFancy from '@/components/progress-bar/fancy';

storiesOf('Progress Bar', module)
    .add('default', () => ({
        components: {
            'c-progress-bar': ProgressBar
        },
        template: `
            <div class="padding-50">
                <c-progress-bar :percentages="74"/>
            </div>
        `
    }))
    .add('vertical', () => ({
        components: {
            'c-progress-bar': ProgressBar
        },
        template: `
            <div style="height: 100px; width: 100px" class="m-4">
                <c-progress-bar direction="vertical" :percentages="40" style="height: 100px"/>
            </div>
        `
    }))
    .add('calculate percentages', () => ({
        components: {
            'c-progress-bar': ProgressBar
        },
        data() {
            return {
                values: {reached: 391, goal: 2490}
            }
        },
        template: `
            <div class="padding-50">
                <h2 :style="{ color: '#fff' }">Progress bar can accept object prop and calculate percentages</h2>
                <pre :style="{ color: '#fff' }">:values="{{ values }}"</pre>
                <c-progress-bar :values="values"/>
            </div>
        `
    }))
    .add('show percentages', () => ({
        components: {
            'c-progress-bar': ProgressBar
        },
        template: `
            <div class="padding-50">
                <c-progress-bar :percentages="41" show_text/>
            </div>
        `
    }))
    .add('fancy', () => ({
        components: {
            'c-progress-bar-fancy': ProgressBarFancy
        },
        data(){
            return{
                percent: 90
            }
        },
        template: `<div class="position-relative p-4" style="width: 500px; height: 100px">
                        <c-input v-model="percent" type="number" />
                            <hr />
                        <c-progress-bar-fancy :percent="percent" />
                    </div>`
    }))

import ProjectMilestone from '@/components/project/milestone';

storiesOf('Project Milestone', module)
    .add('default', () => ({
        components: {
            'c-project-milestone': ProjectMilestone
        },
        data() {
            return {
                milestone: {
                    img: 'http://via.placeholder.com/350x250',
                    title: 'Milestone 1',
                    shortDescription: `For far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live.`,
                    text: `Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel
                        lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet
                        ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc.
                        Curabitur lobortis arcu neque, non rutrum elit placerat eget.`,
                    progress: {
                        days_amouth: "133",
                        daysLeft: 94,
                        percentDone: 8,
                        percentSpent: 95
                    }
                }
            }
        },
        template: `
            <div class="padding-50">
                <c-project-milestone :milestone="milestone"/>
            </div>
        `
    }))

import CommunitySpotlight from '@/components/community-spotlight';

storiesOf('Community Spotlight', module)
    .add('default', () => ({
        components: {
            'c-community-spotlight': CommunitySpotlight
        },
        data() {
            return {
                discussions: [
                    {link: '', name: 'Title', count: 98},
                    {link: '', name: 'Post name', count: 98},
                    {link: '', name: 'Discussion', count: 98}
                ]
            }
        },
        template: `
            <div class="padding-50">
                <c-community-spotlight
                    :discussions="discussions"
                />
            </div>
        `
    }))

import ProductReview from '@/components/review';
import ProductReviewForm from '@/components/review/create';

storiesOf('Product Review', module)
    .add('default', () => ({
        components: {
            'c-review': ProductReview
        },
        data() {
            return {
                review: {
                    author: {
                        name: 'Nakatochi',
                        img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'
                    },
                    title: 'Good game with very nice graphics made by very smart people.',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.',
                    date: '2018-08-19T04:09:00.000Z',
                    rating: 4.5,
                    minutes_played: 1938,
                    setup: {
                        system: 'Windows 10',
                        gpu: 'GTX 1080',
                        cpu: 'Core i7 7980x',
                        ram: '8 GB',
                        storage: 'HyperX 1TB SSD'
                    }
                }
            }
        },
        template: `
            <div class="padding-50">
                <c-review :review="review"/>
            </div>
        `
    }))
    .add('form', () => ({
        components:{
            'c-review-form' : ProductReviewForm
        },
        template: `<div class="p-4" style="width: 1000px;"><c-review-form /></div>`
    }))
    .add('view review', () => ({
        components: {
            'c-view-review': (resolve) => require(['@/components/review/view'], resolve),
        },
        template: `<div class='p-5' style="width: 1000px"><c-view-review /></div>`
    }))


import Banner from '@/components/banner'

storiesOf('Banner', module)
    .add('image', () => ({
        components: {
            'c-banner': Banner
        },
        data() {
            return {
                slides: [
                    {
                        image: {
                            src: 'https://d2q63o9r0h0ohi.cloudfront.net/images/kobolds-and-catacombs/header-bg-backup-337031b146d6540bc3d2513f0fb11daa966398f512db7163c7e819120a62b2b17c2abaa893cfcef5c14e1f4a696ce45fa8d2e4d36a987029e563b449b402a115.jpg',
                            position: 'center'
                        },
                        logo: {
                            src: 'https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/5/57/Kobolds_and_Catacombs.png',
                            position: '',
                            size: ''
                        },
                        title: 'Some title',
                        buttonText: 'Details',
                        overlay: {
                            title: 'Cras suscipit dapibus metus quis egestas.',
                            subtitle: 'Morbi non cursus magna. Integer magna urna, facilisis sed tincidunt eu',
                            text: 'Sed accumsan vel lacus eu cursus. Nunc suscipit, tellus sit amet laoreet ornare, ligula purus consectetur nisi, sed sagittis velit lectus in turpis. Vestibulum sollicitudin faucibus mollis. Aliquam tempus fermentum nulla, at congue magna tristique ut. Proin non turpis erat.'
                        }
                    }
                ],
            }
        },
        template: `<div class="padding-50" style="width: 900px">
                    <div class="row mb-2">
                        <!--<div class="col-4">-->
                            <!--<div class="form-group">-->
                                <!--<label class="text-white">Logo Position</label>-->
                                <!--<select class="form-control" id="logo_position" v-model="logoPosition">-->
                                    <!--<optgroup label="top">-->
                                        <!--<option value="left top">left top</option>-->
                                        <!--<option value="center top">center top</option>-->
                                        <!--<option value="right top">right top</option>-->
                                    <!--</optgroup>-->
                                    <!--<optgroup label="center">-->
                                        <!--<option value="left center">left center</option>-->
                                        <!--<option value="center center">center center</option>-->
                                        <!--<option value="right center">right center</option>-->
                                    <!--</optgroup>-->
                                    <!--<optgroup label="bottom">-->
                                        <!--<option value="left bottom">left bottom</option>-->
                                        <!--<option value="center bottom">center bottom</option>-->
                                        <!--<option value="right bottom">right bottom</option>-->
                                    <!--</optgroup>-->
                                <!--</select>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="col-4">-->
                        <!--<label class="text-white">Logo Size</label>-->
                            <!--<select class="form-control" id="logo_size" v-model="logoSize">-->
                                    <!--<option value="sm">sm</option>-->
                                    <!--<option value="md">md</option>-->
                                    <!--<option value="lg">lg</option>-->
                                    <!--<option value="xl">xl</option>-->
                            <!--</select>-->
                        <!--</div>-->
                        <!--<div class="col-4">-->
                        <!--<label class="text-white">Background Position</label>-->
                            <!--<select class="form-control" id="background_position" v-model="bgPosition">-->
                                <!--<optgroup label="top">-->
                                    <!--<option value="left top">left top</option>-->
                                    <!--<option value="center top">center top</option>-->
                                    <!--<option value="right top">right top</option>-->
                                <!--</optgroup>-->
                                <!--<optgroup label="center">-->
                                    <!--<option value="left center">left center</option>-->
                                    <!--<option value="center center">center center</option>-->
                                    <!--<option value="right center">right center</option>-->
                                <!--</optgroup>-->
                                <!--<optgroup label="bottom">-->
                                    <!--<option value="left bottom">left bottom</option>-->
                                    <!--<option value="center bottom">center bottom</option>-->
                                    <!--<option value="right bottom">right bottom</option>-->
                                <!--</optgroup>-->
                            <!--</select>-->
                        <!--</div>-->
                    </div>
                    
                    <c-banner :slides="slides" />
            </div>`
    }))

import LanguageSupport from '@/components/product-overview/language-support';

storiesOf('Product Overview', module)
    .add('Language Support', () => ({
        components: {'c-language-support': LanguageSupport},
        data() {
            return {
                languages: [
                    {
                        "name": "English",
                        "interface": true,
                        "fullAudio": false,
                        "subtitles": false,
                        "code": "en-us"
                    },
                    {
                        "name": "Czech",
                        "interface": true,
                        "fullAudio": true,
                        "subtitles": false,
                        "code": "cz"
                    },
                    {
                        "name": "French",
                        "interface": true,
                        "fullAudio": true,
                        "subtitles": true,
                        "code": "fr"
                    },
                    {
                        "name": "German",
                        "interface": true,
                        "fullAudio": false,
                        "subtitles": false,
                        "code": "de"
                    },
                    {
                        "name": "Hungarian",
                        "interface": true,
                        "fullAudio": false,
                        "subtitles": true,
                        "code": "hu"
                    },
                    {
                        "name": "Russian",
                        "interface": true,
                        "fullAudio": false,
                        "subtitles": true,
                        "code": "ru"
                    }
                ]
            }
        },
        template: `
            <div class="padding-50">
                <c-language-support
                    style="color: white"
                    :languages="languages"
                />
            </div>`
    }))
    .add('System Requirements', () => ({
        components: {'c-system-requirements': SystemRequirements},
        data() {
            return {
                systemRequirements: [
                    {
                        "os": "win",
                        "system": "Windows XP/Vista/7",
                        "processor": "Intel or AMD Quad-Core",
                        "memory": "3 GB (Win XP), 4GB (Win Vista/Win 7)",
                        "graphics": "GeForce 260 (1 GB) or Radeon HD 4850 (1 GB). Resolution 1440x900.",
                        "directx": "DirectX 9.29 has to be installed.",
                        "hardDrive": "25GB",
                        "sound": ""
                    },
                    {
                        "os": "mac",
                        "system": "OS X 10.8.5 or higher",
                        "processor": "Quad Core Intel",
                        "memory": "8 GB RAM",
                        "graphics": "GeForce GTX 675MX 1GB (on 1920x1080, medium), Radeon HD 6970M 1 GB (on 1920x1080, medium), Intel integrated graphics chipsets are not supported",
                        "hardDrive": "25 GB HD space"
                    },
                    {
                        "os": "linux",
                        "system": "Ubuntu 14.04, Linux Mint 17, BlockHub OS",
                        "processor": "Quad Core Intel",
                        "memory": "4 GB RAM",
                        "graphics": "GeForce GT 640 1GB (1440x900, medium)",
                        "hardDrive": "25 GB HD space"
                    }
                ]
            }
        },
        template: `
            <div class="padding-50">
                <c-system-requirements
                    style="color: white"
                    :requirements="systemRequirements"
                />
            </div>`
    }))


import Input from '@/components/inputs';
import InputSearcher from '@/components/inputs/searcher';

storiesOf('Inputs', module)
    .add('default', () => ({
        components: {'c-input': Input},
        data() {
            return {
                text: ''
            }
        },
        template: `
            <div class="padding-50">
                <c-input v-model="text" placeholder="Start typing"/>
                <span style="color: #fff">{{ text }}</span>
            </div>
        `
    }))
    .add('Searcher', () => ({
        components: {'c-input-searcher': InputSearcher},
        data() {
            return {
                text: ''
            }
        },
        template: `
            <div class="padding-50">
                <c-input-searcher v-model="text"/>
                <span style="color: #fff">{{ text }}</span>
            </div>
        `
    }))


import TimelineList from '@/components/timeline/list.vue';
import TimelineItem from '@/components/timeline/item.vue';

storiesOf('Timeline', module)
    .add('item', () => ({
        components: {
            'c-timeline': TimelineList,
            'c-timeline-item': TimelineItem
        },
        data() {
            return {
                item: {
                    id: 1,
                    type: 'post',
                    title: 'Thank you, friends!',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in diam eu sapien tempor feugiat. Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                    date: '2018-09-19',
                }
            }
        },
        template:
            `<div class="row">
                <div class="col">
                    <c-timeline-item :item="item" />
                </div>
            </div>
        `
    }))
    .add('list', () => ({
        components: {
            'c-timeline': TimelineList,
            'c-timeline-item': TimelineItem
        },
        data() {
            return {
                items: [
                    {
                        id: 1,
                        type: 'post',
                        title: 'Thank you, friends!',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in diam eu sapien tempor feugiat. Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2018-09-19',
                    },
                    {
                        id: 2,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2018-04-28',
                    },
                    {
                        id: 3,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2018-02-17',
                    },
                    {
                        id: 4,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2018-01-11',
                    },
                    {
                        id: 5,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2017-11-27',
                    },
                    {
                        id: 6,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2017-11-23',
                    },
                    {
                        id: 7,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2017-11-12',
                    },
                    {
                        id: 8,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2019-04-03',
                    },
                    {
                        id: 9,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2019-04-27',
                    },
                    {
                        id: 10,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2019-04-13',
                    },
                    {
                        id: 11,
                        type: 'post',
                        title: 'This is second post!',
                        text: ' Nulla quis sagittis eros, at placerat nisl. Nulla arcu ex, laoreet ut nunc eget, placerat molestie leo.',
                        date: '2019-04-11',
                    }
                ]
            }
        },
        template: `<div class="row">
                            <div class="col p-5">
                                <c-timeline :items="items" />
                            </div>
                        </div>`
    }))

import PurchaseBlock from '@/components/purchase-block';

storiesOf('Purchase block', module)
    .add('default', () => ({
        components: {
            'c-purchase-block': PurchaseBlock
        },
        data() {
            return {
                inWishlist: false
            }
        },
        template: `<div class="p-5" style="width: 400px">
                        <c-purchase-block 
                        :tags="['top', 'new']"
                        :price="49.99" 
                        :eligibleTokens="300"
                        :isReleased="true"
                        :offersPurchases="true"
                        :inWishlist="inWishlist"
                        @addToWishlist="inWishlist = true"
                        @removeFromWishlist="inWishlist = false"
                        />
                        </div>`
    }))
    .add('demo', () => ({
        components: {
            'c-purchase-block': PurchaseBlock
        },
        data() {
            return {
                inWishlist: false
            }
        },
        template: `<div class="p-5" style="width: 400px">
                        <c-purchase-block 
                        :tags="['top', 'new']"
                        :price="49.99"
                        releaseDate="8 Jun, 2018"
                        :demoLink="#"
                        :offersPurchases="true"
                        :inWishlist="inWishlist"
                        @addToWishlist="inWishlist = true"
                        @removeFromWishlist="inWishlist = false"
                        />
                        </div>`
    }))
    .add('unavailable', () => ({
        components: {
            'c-purchase-block': PurchaseBlock
        },
        data() {
            return {
                inWishlist: false
            }
        },
        template: `<div class="p-5" style="width: 400px">
                        <c-purchase-block 
                        :tags="['new']"
                        :price="49.99" 
                        :isUnavailable="true"
                        :inWishlist="inWishlist"
                        @addToWishlist="inWishlist = true"
                        @removeFromWishlist="inWishlist = false"
                        />
                        </div>`
    }))


import PurchaseOption from '@/components/purchase-option';

storiesOf('Purchase Option', module)
    .add('single', () => ({
        components: {
            'c-purchase-option': PurchaseOption
        },
        template: `
            <div class="p-4" style="width: 600px">
                <c-purchase-option 
                price="44"
                oldPrice="55"
                gameTag="SOME TAG"
                title="SOME TITLE"
                :id="4"
                 />
                 <hr />
                <c-purchase-option 
                price="44"
                oldPrice="55"
                img="https://trashbox.ru/ifiles/979051_6c28be_screenshot_00/game-of-warriors-1.1.11-1.png"
                gameTag="SOME TAG"
                title="SOME TITLE"
                :id="4"
                 />
            </div>
        `
    }))
    .add('list', () => ({
        data() {
            return {
                options: [
                    {
                        id: 1,
                        oldPrice: '22.99',
                        price: '16.99',
                        tag: 'Game Only',
                        title: 'Standard Edition'
                    },
                    {
                        id: 2,
                        oldPrice: '19.99',
                        price: '12.99',
                        tag: 'Super Nice Expansion Pack',
                        title: 'Standard Edition'
                    },
                    {
                        id: 3,
                        oldPrice: '9.99',
                        price: '0.69',
                        tag: 'Super Nice Expansion Pack',
                        title: 'Game + All Expansion'
                    },
                ]
            }
        },
        components: {
            'c-purchase-option': PurchaseOption,
            'c-block': Block
        },
        template: `
        <div class="p-5">
            <c-block title="Purchase Options" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                <c-purchase-option v-for="(option, index) in options" 
                :key="index" 
                :price="option.price"
                :oldPrice="option.oldPrice"
                :gameTag="option.tag"
                :title="option.title"
                :id="option.id"
                :inList="(index < options.length-1) ? true : false"
                />
            </c-block>
        </div>
        `
    }))

import ParticipationTier from '@/components/participation-tier'

storiesOf('Participation Tiers', module)
    .add('default', () => ({
        data() {
            return {
                id: 1,
                price: '29',
                sold: '222',
                left: '9',
                tag: 'Combo',
                title: 'Game Standard Edition'
            }
        },
        components: {
            'c-participation-tier': ParticipationTier,
        },
        template: `
            <div class="p-5">
                <c-participation-tier :id="id" :price="price" :sold="sold" :left="left" :title="title" :tag="tag" />
            </div>
        `
    }))
    .add('list', () => ({
        data() {
            return {
                items: [
                    {
                        id: 1,
                        price: '29',
                        sold: '222',
                        left: '9',
                        tag: 'Combo',
                        title: 'Game Standard Edition'
                    },
                    {
                        id: 2,
                        price: '219',
                        sold: '32',
                        left: '1',
                        tag: 'Combo',
                        title: 'Game Standard Edition'
                    },
                    {
                        id: 3,
                        price: '9',
                        sold: '981',
                        left: '1',
                        tag: 'Combo',
                        title: 'Game Standard Edition'
                    }
                ]
            }
        },
        components: {
            'c-participation-tier': ParticipationTier,
            'c-block': Block

        },
        template: `
            <div class="p-5">
                <c-block title="Participation Tier" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                    <c-participation-tier v-for="(item, index) in items" 
                    :key="index"
                    :id="item.id" 
                    :price="item.price" 
                    :sold="item.sold" 
                    :left="item.left" 
                    :title="item.title" 
                    :tag="item.tag"
                    :inList="(index < items.length-1) ? true : false"
                 />
                </c-block>
            </div>
        `
    }))

import ContributeForm from '@/components/contribute/form.vue'
import ContributePledge from '@/components/contribute/pledge.vue'

storiesOf('Contribute', module)
    .add('form', () => ({
        components: {
            'c-contribute-form': ContributeForm
        },
        data() {
            return {
                value: ''
            }
        },
        template: `<div class="p-4" style="width: 400px"><c-contribute-form v-model="value" :defaultValue="15" /> <div class="mt-4 text-white">Value - {{ value }}</div></div>`
    }))
    .add('pledge', () => ({
        components: {
            'c-contribute-pledge': ContributePledge
        },
        data() {
            return {
                pledge: {
                    minPrice: 10.99,
                    name: 'BLUE-HAIRED CATS',
                    estimated_delivery: '12/01/2018',
                    shipsTo: 'Anywhere in the world',
                    description: 'Maecenas a sapien luctus, placerat massa pellentesque, consectetur ante. Nam dui est, cursus at consequat quis, malesuada eget eros. ',
                    backers: 43,
                    includes: [
                        {
                            "text": "Morbi vitae orci lacus"
                        },
                        {
                            "text": "Praesent rhoncus tellus vel dapibus auctor"
                        },
                        {
                            "text": "Morbi vitae orci lacus"
                        }
                    ]
                }
            }
        },
        template: `<div class="p-4" style="width: 400px">
                        <c-contribute-pledge :pledge="pledge" />
                    </div>`
    }))

import CookiePolicy from '@/components/cookie-policy'

storiesOf('Cookie policy', module)
    .add('default', () => ({
        components: {
            'c-cookie-policy': CookiePolicy
        },
        template: `<div class="p-5 position-relative" style="height: 500px;width: 700px">
                        <c-cookie-policy />
                    </div> `
    }))

import WelcomeBox from '@/components/welcome-box'

storiesOf('Welcome Box', module)
    .add('default', () => ({
        components: {
            'c-welcome-box': WelcomeBox
        },
        template: `<div class="p-5 position-relative" style="height: 900px;width: 700px">
                        <c-welcome-box />
                    </div> `
    }))

import Share from '@/components/share/type-1'

storiesOf('Share', module)
    .add('type 1', () => ({
        components: {
            'c-share': Share
        },
        data() {
            return {
                online: [
                    {
                        "name": "Sally Hamilton",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Poole Wise",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Frye Nash",
                        "img": "http://placehold.it/32x32"
                    }
                ],
                favorites: [
                    {
                        "name": "Nixon Love",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Richards Langley",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Jill Medina",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Callahan Ballard",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Zamora Simmons",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Jenkins Ruiz",
                        "img": "http://placehold.it/32x32"
                    },
                    {
                        "name": "Kemp Christian",
                        "img": "http://placehold.it/32x32"
                    }
                ]
            }
        },
        template: `<div class="p-5 position-relative" style="height: 300px;width: 300px; margin-top: 300px">
                        <c-share :onlineList="online" :favoritesList="favorites" :show="true" />
                    </div> `
    }))

import StreamItem from '@/components/stream'

storiesOf('Stream', module)
    .add('default', () => ({
        components: {
            'c-stream-item': StreamItem
        },
        data(){
            return{
                "game": "Dota II",
                "userName": "GodOfDota",
                "userAvatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h",
                "previews": "http://dota2-videos.com/wp-content/uploads/2018/07/jx3Oj0O-G8Ihqdefault.jpg",
                "src": "#",
                "views": 10
            }
        },
        template: `
        <div class="row p-5">
            <div class="col-5">
                <c-stream-item 
                :streamGame="game"
                :streamName="userName"
                :streamAvatar="userAvatar"
                :streamImg="previews"
                :streamSrc="src"
                :streamViews="views"
                />
            </div>
        </div>
        
        `
    }))


import List from '@/components/list/dots'

storiesOf('List', module)
    .add('doted', () => ({
        components: {
            'c-dotted-list': List
        },
        template: `
        <div class="p-5">
            <c-dotted-list>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
            </c-dotted-list>
        </div>`
    }))

import GameInstallerModal from '@/components/game-installer'

storiesOf('Game Installer Modal', module)
    .add('default', () => ({
        components: {
            'c-game-installer': GameInstallerModal
        },
        data() {
            return {
                img: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/sites/2/2015/05/Earthcore.png',
                mac: true,
                win: true,
                linux: true,
                name: 'Shuttered',
                filesList: [
                    {
                        platform: 'mac',
                        size: 1034532,
                        src: '#'
                    },
                    {
                        platform: 'win',
                        size: 1943258,
                        src: '#'
                    },
                    {
                        platform: 'linux',
                        size: 923453,
                        src: '#'
                    }
                ]
            }
        },
        template: `
        <div class="row p-5">
            <div class="col-5">
                <c-game-installer 
                :activated="true" 
                :win="win"
                :mac="mac"
                :linux="linux"
                :name="name"
                :img="img"
                :filesList="filesList"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate
                    et tellus ac scelerisque. Duis vel suscipit orci, vel tristique elit.
                    Praesent sollicitudin volutpat finibus.
                </c-game-installer>
            </div>
        </div>
        
        `
    }))


import Emoji from '@/components/emoji'
import EmojiSingle from '@/components/emoji/single'

storiesOf('Emoji', module)
    .add('picker', () => ({
        components: {
            'c-emoji': Emoji
        },
        template: `
        <div class="p-5">
            <c-emoji />
        </div>`
    }))
    .add('single', () => ({
        components: {
            'c-emoji-single': EmojiSingle
        },
        template: `
        <div class="p-5">
            <c-emoji-single count="99" />
        </div>`
    }))


import Landing from '@/components/landing'
import LandingTitle from '@/components/landing/block-title/simple'
import LandingTitleShadow from '@/components/landing/block-title/shadow'
import LandingTitleGradient from '@/components/landing/block-title/gradient'
import LandingContent from '@/components/landing/block-content/simple'

storiesOf('Landing Page', module)
    .add('block title', () => ({
        components: {
            'c-landing-block-title': LandingTitle
        },
        template: `
        <div class="p-5">
            <c-landing-block-title>
                Mutation Mode
            </c-landing-block-title>
        </div>
            `
    }))
    .add('block title with shadow', () => ({
        components: {
            'c-landing-block-title-shadow': LandingTitleShadow
        },
        template: `
        <div class="p-5">
            <c-landing-block-title-shadow colorShadow="#f60">
                Mutation Mode
            </c-landing-block-title-shadow>
        </div>
            `
    }))
    .add('block title with gradient', () => ({
        components: {
            'c-landing-block-title-gradient': LandingTitleGradient,
            'c-landing-block-title': LandingTitle,
            'c-landing-block-title-shadow': LandingTitleShadow
        },
        template: `
        <div class="p-5">
            <c-landing-block-title-gradient>
                <c-landing-block-title slot="before" class="mb-1" fontSize="16" fontWeight="bold">
                    NEW
                </c-landing-block-title>
                Mutation Mode
            </c-landing-block-title-gradient>
            <hr />
            <c-landing-block-title-gradient align="right">
                Mutation Mode
                <c-landing-block-title-shadow slot="after" class="mt-1" fontSize="16" fontWeight="bold">
                    Before title text
                </c-landing-block-title-shadow>
            </c-landing-block-title-gradient>
            <hr />
            <c-landing-block-title-gradient align="center">
                Mutation Mode
            </c-landing-block-title-gradient>
        </div>
            `
    }))
    .add('divider', () => ({
        components: {
            'c-landing-divider': (resolve) => require(['@/components/landing/block-content/divider'], resolve),
        },
        template: `
        <div class="p-5">
            <c-landing-divider />
        </div>
            `
    }))
    .add('level', () => ({
        components: {
            'c-landing-level': (resolve) => require(['@/components/landing/block-content/level'], resolve),
        },
        template: `
        <div class="p-5">
            <c-landing-level :number="92" textPosition="left">
                Caster Pack 5 (2017)
            </c-landing-level>
            <hr />
            <c-landing-level size="md" :number="7" textPosition="right">
                Caster Pack 5 (2017)
            </c-landing-level>
            <hr />
            <c-landing-level size="lg" :number="1982" textPosition="right">
                Caster Pack 5 (2017)
            </c-landing-level>
            <hr />
        </div>
            `
    }))
    .add('feature item', () => ({
        components: {
            'c-landing-feature-item': (resolve) => require(['@/components/landing/block-content/feature-item'], resolve),
        },
        data(){
            return{
                items:[
                    {
                        img: 'https://i.ytimg.com/vi/6ki31hkQk8c/maxresdefault.jpg',
                        title: 'Donec placerat turpis est',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in nulla sed ante maximus fringilla id at mi. Aenean nec elit ac ex porta volutpat. In porta porttitor purus a congue. Aenean sit amet lectus ac purus fringilla rutrum lobortis eu lorem. Quisque accumsan et odio vel ullamcorper.'
                    },
                    {
                        img: 'http://cdn.dota2.com/apps/dota2/images/blog/play/dota_heroes.png',
                        title: 'Aenean suscipit',
                        text: 'Nulla facilisi. Donec eu ligula a massa accumsan dignissim a quis orci. Aenean suscipit, turpis eget tempor mattis, turpis tellus tristique nibh, eu lobortis eros libero quis nisl. Donec in maximus tellus.'
                    },
                    {
                        img: 'https://dota2.pl/wp-content/uploads/2017/09/dota_2_clash_of_heroes_by_agussw-d8yukg0.jpg',
                        title: 'Donec sodales in dui nec vestibulum',
                        text: 'Nulla ultrices fermentum tristique. Integer a venenatis lacus, eget pretium lectus. Suspendisse potenti. Vestibulum sodales ultricies mattis. Donec sodales in dui nec vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                    }
                ]
            }
        },
        template: `
        <div class="p-5 d-flex" style="width: 1200px;">
            <div v-for="item in items" class="px-3" style="width: 33.3%;">
                <c-landing-feature-item :title="item.title" :img="item.img">
                    {{ item.text }}
                </c-landing-feature-item>
            </div>
        </div>
        `
    }))
    .add('benefactor', () => ({
        components:{
            'c-landing-benefactor' : (resolve) => require(['@/components/landing/block-content/benefactor'], resolve),
        },
        data(){
            return{
                items:[
                    {
                        src: 'http://dotafun.su/images/aeee/b_keeperofthelight.png',
                        name: 'Immortal I'
                    },

                    {
                        src: 'https://u.kanobu.ru/editor/images/82/c2a25ffa-c77c-44e2-a616-c6d5e0e6d4a3.png',
                        name: 'Immortal II'
                    },
                    {
                        src: 'https://i.pinimg.com/originals/44/61/88/44618879e898abbbec878eda26551d52.png',
                        name: 'Immortal III',
                        includes_list: ['200 x Fire Lotus Belt', '200 x Golden Ornithomancer Mantle', '200 x Dragonclaw Hook', '200 x Rainmaker', '200 x Pipe of Dezun', '200 x Perceptions of the Eternal Mind',
                        '200 x Kantusa the Script Sword', '200 x Shattered Greatsword', '200 x Golden Gravelmaw', '100 x Golden Grasping Bludgeon', '100 x Golden Shards of Exile', '100 x Golden Staff of Perplex',
                        '100 x Golden Huntling', '100 x Golden Severing Crest', '100 x Golden Sullen Hollow', '100 x Golden Lamb to the Slaughter', '100 x Lockjaw the Boxhound']
                    },

                    {
                        src: 'http://cdn.dota2.com/apps/dota2/images/international2017/battlepass/immortals/c_legioncommander.png?v=4054578',
                        name: 'Immortal IV'
                    }
                ]
            }
        },
        template:
            `
        <div class="p-5" style="width: 1000px;">
            <c-landing-benefactor :items="items">
            </c-landing-benefactor>
        </div>
            `
    }))
    .add('reward list', () =>({
        components:{
            'c-landing-reward-list': (resolve) => require(['@/components/landing/block-content/reward-list'], resolve),
        },
        data(){
            return{
            }
        },
        template:
            `
            <div class="p-5" style="width: 1000px;">
                <c-landing-reward-list>
                    <template slot="list">
                        <div v-for="(item, index) in list" :key="index" class="my-1" style="font-size: 15px; opacity: .8">
                            {{ item }}
                        </div>
                    </template>
                </c-landing-reward-list>
            </div>
            `
    }))
    .add('page', () => ({
        components: {
            'c-landing-block': LandingContent,
            'c-landing-block-title' : (resolve) => require(['@/components/landing/block-title/simple'], resolve),
            'c-landing-block-title-shadow' : (resolve) => require(['@/components/landing/block-title/shadow'], resolve),
            'c-landing-block-title-gradient' : (resolve) => require(['@/components/landing/block-title/gradient'], resolve),
            'c-landing-feature-item': (resolve) => require(['@/components/landing/block-content/feature-item'], resolve),
            'c-landing-tabs': (resolve) => require(['@/components/landing/block-content/tabs'], resolve),
            'c-landing-tab': (resolve) => require(['@/components/landing/block-content/tab'], resolve),
            'c-landing-slider' : (resolve) => require(['@/components/landing/block-content/slider'], resolve),
            'c-landing-gradient-block' : (resolve) => require(['@/components/landing/block-content/gradient'], resolve),
            'c-landing-benefactor' : (resolve) => require(['@/components/landing/block-content/benefactor'], resolve),
            'c-landing-level': (resolve) => require(['@/components/landing/block-content/level'], resolve),
            'c-landing-reward-list': (resolve) => require(['@/components/landing/block-content/reward-list'], resolve),
            'c-landing-divider': (resolve) => require(['@/components/landing/block-content/divider'], resolve),
            'c-landing-button': (resolve) => require(['@/components/landing/button'], resolve),
        },
        data(){
            return{
                items:[
                    {
                        img: 'https://i.ytimg.com/vi/6ki31hkQk8c/maxresdefault.jpg',
                        title: 'Donec placerat turpis est',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in nulla sed ante maximus fringilla id at mi. Aenean nec elit ac ex porta volutpat. In porta porttitor purus a congue. Aenean sit amet lectus ac purus fringilla rutrum lobortis eu lorem. Quisque accumsan et odio vel ullamcorper.'
                    },
                    {
                        img: 'http://cdn.dota2.com/apps/dota2/images/blog/play/dota_heroes.png',
                        title: 'Aenean suscipit',
                        text: 'Nulla facilisi. Donec eu ligula a massa accumsan dignissim a quis orci. Aenean suscipit, turpis eget tempor mattis, turpis tellus tristique nibh, eu lobortis eros libero quis nisl. Donec in maximus tellus.'
                    },
                    {
                        img: 'https://dota2.pl/wp-content/uploads/2017/09/dota_2_clash_of_heroes_by_agussw-d8yukg0.jpg',
                        title: 'Donec sodales in dui nec vestibulum',
                        text: 'Nulla ultrices fermentum tristique. Integer a venenatis lacus, eget pretium lectus. Suspendisse potenti. Vestibulum sodales ultricies mattis. Donec sodales in dui nec vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                    }
                ],
                slides:[
                    {
                        id: 1,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.webm?v=4806847',
                        title: 'Span of sorrow',
                        subtitle: 'Back item with custom Sunder effect'
                    },
                    {
                        id: 2,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Nulla ultrices fermentum tristique'
                    },
                    {
                        id: 3,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Morbi in nulla sed'
                    },
                    {
                        id: 4,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Donec eu ligula a massa accumsan dignissim'
                    },
                    {
                        id: 5,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Aenean suscipit'
                    },
                    {
                        id: 6,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Vestibulum dignissim tincidunt'
                    },
                    {
                        id: 7,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_abyssal_underlord.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Proin efficitur ut ipsum'
                    },
                    {
                        id: 8,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_emblem.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Mauris ex massa'
                    },
                    {
                        id: 9,
                        type: 'video',
                        poster: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.jpg',
                        thumbnail: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.jpg',
                        src: 'https://steamcdn-a.akamaihd.net/apps/dota2/videos/international2018/battlepass/immortals/a_vengeful_spirit.webm?v=4806847',
                        subtitle: 'Emereld Conquest',
                        title: 'Maecenas suscipit ante'
                    }
                ],
                benefactor_items:[
                {
                    src: 'http://dotafun.su/images/aeee/b_keeperofthelight.png',
                    name: 'Immortal I'
                },

                {
                    src: 'https://u.kanobu.ru/editor/images/82/c2a25ffa-c77c-44e2-a616-c6d5e0e6d4a3.png',
                    name: 'Immortal II'
                },
                {
                    src: 'https://i.pinimg.com/originals/44/61/88/44618879e898abbbec878eda26551d52.png',
                    name: 'Immortal III',
                    includes_list: ['200 x Fire Lotus Belt', '200 x Golden Ornithomancer Mantle', '200 x Dragonclaw Hook', '200 x Rainmaker', '200 x Pipe of Dezun', '200 x Perceptions of the Eternal Mind',
                        '200 x Kantusa the Script Sword', '200 x Shattered Greatsword', '200 x Golden Gravelmaw', '100 x Golden Grasping Bludgeon', '100 x Golden Shards of Exile', '100 x Golden Staff of Perplex',
                        '100 x Golden Huntling', '100 x Golden Severing Crest', '100 x Golden Sullen Hollow', '100 x Golden Lamb to the Slaughter', '100 x Lockjaw the Boxhound']
                },

                {
                    src: 'http://cdn.dota2.com/apps/dota2/images/international2017/battlepass/immortals/c_legioncommander.png?v=4054578',
                    name: 'Immortal IV'
                }
            ],
                reward_list:[
                    '1 - Immortal Treasure I 2018',
                    '1 - Immortal Treasure II 2018',
                    '1 - Immortal Treasure III 2018',
                    '1 - The International 2018 Music Pack',
                    '1 - The International 2018 Cursor Pack',
                    '1 - Eimer Hillburrow Courier',
                    '1 - Trailgazer Ward Set',
                    '1 - Taunt: Cold Breakfast',
                    '1 - International 2018 Player Card Pack x5',
                    '1 - Pro Circuit Predictions Unlocked',
                    '1 - Ranked Match Team Challenge Token',
                    '5 - Ranked Match Team Challenge Token',
                    '8 - International 2018 Battle Point Tribute - 250 Tokens x2',
                    '12 - International 2018 Player Card Pack x5',
                    '24 - Chat Wheel: Crash and burn',
                    '36 - Ranked Match Team Challenge Token'
                ]
            }
        },
        template: `
            <div>
                <c-landing-block 
                title="Some content block title"
                horizontal="center" 
                bgPosition="top center" 
                minHeight="400px" 
                bgImage="https://s1.1zoom.ru/b5050/840/Magic_Castles_Mountains_506826_1920x1080.jpg">
                    <div class="col-10 text-center">
                        <c-landing-block-title fontSize="42" color="#f8e6c7" class="text-uppercase">
                            Battle level rewards
                        </c-landing-block-title>
 
                         <p>Aliquam quis magna at diam convallis congue. Vestibulum dignissim tincidunt sapien quis consequat. 
                        Mauris vel metus dui. Donec vitae sagittis mauris. Nam semper pretium sapien, quis dictum odio. 
                        Cras id nisl sed neque luctus ultrices ut ut elit. Maecenas suscipit ante a leo convallis ornare. 
                        Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id. 
                        Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.</p>
                    </div>
                    <div class="col-10 margin-top-30">
                        <c-landing-block-title-gradient align="center" size="md" fontSize="32" class="text-uppercase">
                            The 2018 immortals
                        </c-landing-block-title-gradient>
                        
                        <c-landing-tabs class="margin-top-20">
                            <p class="text-center">
                                 Nunc gravida placerat erat, ac pharetra felis malesuada id.<br>
                                Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.
                            </p>
                            <c-landing-tab name="TREASURE I">
                                Maecenas suscipit ante a leo convallis ornare. 
                                Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id. 
                                Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.
                            </c-landing-tab>
                            <c-landing-tab name="TREASURE II" selected>
                                <c-landing-slider :items="slides" />
                            </c-landing-tab>
                            <c-landing-tab name="TREASURE III">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at condimentum risus. 
                                Integer viverra quam in ipsum posuere lobortis. Integer rhoncus gravida ante a aliquam. In aliquet ex eu nibh pulvinar varius. Suspendisse maximus a arcu at sagittis. Etiam et mauris volutpat diam consequat accumsan vitae non nisi. Sed dignissim odio metus, sit amet ullamcorper ligula blandit et. Donec ac justo a erat lacinia venenatis id eu nisl.
                            </c-landing-tab>
                                
                            <c-landing-block-title tag="div" fontSize="17" color="#5EA72B" class="text-center my-4">
                                <div class="mb-1">TREASURE I: 1 - 10 - 22 - 34 - 46 - 80 - 220 (repeats every 30 levels)</div>
                                <div class="mb-1">TREASURE II: 1 - 98 - 112 - 132 - 152 - 230 (repeats every 30 levels)</div>
                                <div>TREASURE III: 1 - 164 - 178 - 194 - 206 - 240 (repeats every 30 levels)</div>
                            </c-landing-block-title>
                            
                            <c-landing-gradient-block class="mt-4">
                                <c-landing-block-title tag="div" fontSize="16" color="#fff" class="text-center">
                                    LIMITED MARKETABILITY
                                </c-landing-block-title>
                                <p>
                                    Maecenas suscipit ante a leo convallis ornare. 
                                    Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id. 
                                    Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.
                                </p>
                            </c-landing-gradient-block>
                        </c-landing-tabs>
                    </div>
                </c-landing-block>
                
                <c-landing-divider />
                
                <c-landing-block 
                horizontal="center"
                vertical="center"
                title="Some content block title" 
                minHeight="50vh"
                bgImage="http://dota2-i.ru/assets/images/resources/1671/1366x768-2042847-shadow-fiend-dota-2-wallpaper-hd.jpg">
                    <div class="col-12">
                        <c-landing-block-title-gradient align="center" size="md" fontSize="32" class="text-uppercase">
                            TRUST OF THE BENEFACTOR
                        </c-landing-block-title-gradient>
                        <c-landing-benefactor :items="benefactor_items">
                        
                        </c-landing-benefactor>
                    </div>
                    <div class="col-3 text-right">
                        <c-landing-level :number="92" size="md" textPosition="left" textColor="#00662e">
                            LEVEL
                        </c-landing-level>
                    </div>
                    <div class="col-9">
                         <p>Aliquam quis magna at diam convallis congue. Vestibulum dignissim tincidunt sapien quis consequat. 
                        Mauris vel metus dui. Donec vitae sagittis mauris. Nam semper pretium sapien, quis dictum odio. 
                        Cras id nisl sed neque luctus ultrices ut ut elit. Maecenas suscipit ante a leo convallis ornare. 
                        Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id. 
                        Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.</p>
                    </div>
                </c-landing-block>
                
                <c-landing-divider />
                
                <c-landing-block 
                title="Some content block title" 
                horizontal="center"
                vertical="center"
                bgImage="https://steamcdn-a.akamaihd.net/apps/dota2/images/international2018/battlepass/bg_24.png">
                        <div class="col-10">
                            <c-landing-reward-list>
                                <div class="d-flex justify-content-center w-100">
                                    <div class="text-center mx-3">
                                        <c-landing-button class="margin-bottom-20" width="280">
                                            Buy Battle Pass
                                        </c-landing-button>
                                        <c-landing-block-title fontSize="13" color="#f8e6c7" class="text-uppercase">
                                            LEVEL 1  $9.99 USD
                                        </c-landing-block-title>
                                        <c-landing-block-title fontSize="13" color="#f8e6c7" class="text-uppercase">
                                            LEVEL 75  $36.99 USD
                                        </c-landing-block-title>
                                    </div>
                                    <div class="text-center mx-3">
                                        <c-landing-button class="margin-bottom-20" width="280">
                                            Buy Levels
                                        </c-landing-button>
                                        <c-landing-block-title fontSize="13" color="#f8e6c7" class="text-uppercase">
                                            5 LEVELS  $2.49 USD
                                        </c-landing-block-title>
                                        <c-landing-block-title fontSize="13" color="#f8e6c7" class="text-uppercase">
                                            11 LEVELS  $4.99 USD
                                        </c-landing-block-title>
                                        <c-landing-block-title fontSize="13" color="#f8e6c7" class="text-uppercase">
                                            24 LEVELS  $9.99 USD
                                        </c-landing-block-title>
                                    </div>
                                </div>
                                <template slot="list">
                                    <div v-for="(item, index) in reward_list" :key="index" class="my-1" style="font-size: 15px; opacity: .8">
                                        {{ item }}
                                    </div>
                                </template>
                            </c-landing-reward-list>
                        </div>
                </c-landing-block>
            </div>
            `
    }))

storiesOf('Token Sale Box', module)
    .add('default', () => ({
        components: {
            'c-token-sale': (resolve) => require(['@/components/token-sale-box'], resolve),
        },
        template: `
        <div class="p-5" style="width: 1200px;">
            <c-token-sale 
            :hardCap="18000000"
            :softCap="7500000"
            :volume="1000000000"
            :soldDollars="23455424"
            :soldTokens="243424234"
            />
        </div>`
    }))
    .add('type 2', () => ({
        components: {
            'c-toke-sale-2': (resolve) => require(['@/components/token-sale-box/type-2'], resolve),
        },
        template: `
        <div class="p-5" style="width: 1200px;">
            <c-toke-sale-2 
            :hardCap="18000000"
            :softCap="7500000"
            :volume="1000000000"
            :soldDollar="23455424"
            :soldTokens="243424234"
            />
        </div>`
    }))

storiesOf('Guide', module)
    .add('default', () =>({
        components:{
            'c-guide': (resolve) => require(['@/components/guide'], resolve),
        },
        template: `<c-guide />`
    }))

storiesOf('Video Popup', module)
    .add('default', () =>({
        components:{
            'c-video-popup': (resolve) => require(['@/components/video-popup'], resolve),
            Author
        },
        data(){
            return{
                video:[
                    {
                        src: 'https://static.videezy.com/system/resources/previews/000/004/944/original/Magical_Tree_4K_Living_Background.mp4',
                        format: 'mp4'
                    }
                ],
                comments:[
                    {
                        text: 'Lorem ipsum dolor si',
                        author:{
                            name: 'Satoshi',
                            img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                        }
                    },
                    {
                        text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                        author:{
                            name: 'Hakato',
                            img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                        }
                    },
                    {
                        text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                        author:{
                            name: 'Daniel',
                            img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                        }
                    },
                    {
                        text: 'Mauris in enim vitae dolor porttitor maximus',
                        author:{
                            name: 'Monik',
                            img: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/103/user_avatar_tiffanyarment_artwork.png'
                        }
                    }
                ],
                showLocal: false,
                showYoutube: false,
                showTwitch: false,
                showVideo:{},
                youtube: 'A747o4LwQfM',
                twitch: 'inflameswemust'
            }
        },
        methods:{
            closeModal(){
                this.showYoutube = false;
                this.showTwitch = false;
                this.showLocal = false;
            },
            showLocalHandler(){
                this.showLocal = true
            },
            showYoutubeHandler(){
                this.showYoutube = true
            },
            showTwitchHandler(){
                this.showTwitch = true
            }
        },
        template: `<div class="p-5">
                        <c-button @click="showLocalHandler" class="m-3">Show Local Video Modal</c-button>
                        <c-button @click="showYoutubeHandler" class="m-3">Show Youtube Video Modal</c-button>
                        <c-button @click="showTwitchHandler" class="m-3">Show Twitch Video Modal</c-button>
                        
                        <c-video-popup :twitch="twitch" @close="closeModal" :activated="showTwitch">
                            <template v-for="comment in comments">
                                <div class="mb-3">
                                <author :author="comment.author" class="mb-1"/>
                                {{ comment.text }}
                                </div>
                            </template>
                        </c-video-popup>
                        
                        <c-video-popup :youtube="youtube" @close="closeModal" :activated="showYoutube">
                            <template v-for="comment in comments">
                                <div class="mb-3">
                                <author :author="comment.author" class="mb-1"/>
                                {{ comment.text }}
                                </div>
                            </template>
                        </c-video-popup>
                        
                        <c-video-popup :video="video" @close="closeModal" :activated="showLocal">
                            <template v-for="comment in comments">
                                <div class="mb-3">
                                <author :author="comment.author" class="mb-1"/>
                                {{ comment.text }}
                                </div>
                            </template>
                        </c-video-popup>
                    </div>
`
    }))
    .add('video list', () => ({
        components:{
            'c-video-popup': (resolve) => require(['@/components/video-popup'], resolve),
            'c-video-item': (resolve) => require(['@/components/video-list'], resolve),
            Author
        },
        data(){
            return{
                videos:[
                    {
                        poster: 'https://i.ytimg.com/vi/4B2TgQG48Sg/maxresdefault.jpg',
                        name: 'Satoshi',
                        avatar: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg',
                        video:{
                            src: 'https://static.videezy.com/system/resources/previews/000/004/944/original/Magical_Tree_4K_Living_Background.mp4',
                            format: 'mp4'
                        },
                        comments:[
                            {
                                text: 'Lorem ipsum dolor si',
                                author:{
                                    name: 'Satoshi',
                                    img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                                }
                            },
                            {
                                text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                                author:{
                                    name: 'Hakato',
                                    img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                                }
                            },
                            {
                                text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                                author:{
                                    name: 'Daniel',
                                    img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                                }
                            },
                            {
                                text: 'Mauris in enim vitae dolor porttitor maximus',
                                author:{
                                    name: 'Monik',
                                    img: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/103/user_avatar_tiffanyarment_artwork.png'
                                }
                            }
                        ],
                    },
                    {
                        poster: 'https://i.ytimg.com/vi/GT6ushVNkGY/maxresdefault.jpg',
                        name: 'Den',
                        avatar: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg',
                        twitch: 'inflameswemust',
                        comments:[
                            {
                                text: 'Lorem ipsum dolor si',
                                author:{
                                    name: 'Satoshi',
                                    img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                                }
                            },
                            {
                                text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                                author:{
                                    name: 'Hakato',
                                    img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                                }
                            },
                            {
                                text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                                author:{
                                    name: 'Daniel',
                                    img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                                }
                            },
                            {
                                text: 'Mauris in enim vitae dolor porttitor maximus',
                                author:{
                                    name: 'Monik',
                                    img: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/103/user_avatar_tiffanyarment_artwork.png'
                                }
                            }
                        ],
                    },
                    {
                        poster: 'https://cdn.wccftech.com/wp-content/uploads/2017/07/Assassins-Creed-Origins-Gameplay-2060x1159.jpg',
                        name: 'Hakatoshi',
                        avatar: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/103/user_avatar_tiffanyarment_artwork.png',
                        youtube: 'A747o4LwQfM',
                        comments:[
                            {
                                text: 'Lorem ipsum dolor si',
                                author:{
                                    name: 'Satoshi',
                                    img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                                }
                            },
                            {
                                text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                                author:{
                                    name: 'Hakato',
                                    img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                                }
                            },
                            {
                                text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                                author:{
                                    name: 'Daniel',
                                    img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                                }
                            },
                            {
                                text: 'Mauris in enim vitae dolor porttitor maximus',
                                author:{
                                    name: 'Monik',
                                    img: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/103/user_avatar_tiffanyarment_artwork.png'
                                }
                            }
                        ],
                    }
                ]
            }
        },
        template: `<div class="p-5">
                        <div class="row">
                            <div class="col-5 col-lg-4" v-for="video in videos">
                                <c-video-item 
                                :poster="video.poster" 
                                :author="video.name"
                                :avatar="video.avatar"
                                :video="video.video"
                                :twitch="video.twitch"
                                :youtube="video.youtube"
                                :comments="video.comments"
                                />
                            </div>
                        </div>
                    </div>
`
    }))

storiesOf('Wallet Popup', module)
    .add('default', () => ({
        components: {
            'c-wallet-base': (resolve) => require(['@/components/wallet/base'], resolve),
            'c-wallet-main': (resolve) => require(['@/components/wallet'], resolve),
            'c-wallet-transfer': (resolve) => require(['@/components/wallet/transfer'], resolve),
            'c-wallet-deposit': (resolve) => require(['@/components/wallet/deposit'], resolve),
            'c-wallet-edit': (resolve) => require(['@/components/wallet/account-edit'], resolve),
            'c-wallet-token': (resolve) => require(['@/components/wallet/token'], resolve),
        },
        template: `<div class="row p-3 m-0 flex-wrap" style="width: 1125px">
                        <div class="mx-2 mb-4">
                            <h4 class="text-white">Main screen</h4>
                            <c-wallet-base>
                                <c-wallet-main />
                            </c-wallet-base>
                        </div>
                        <div class="mx-2 mb-4">
                            <h4 class="text-white">Transfer screen</h4>
                            <c-wallet-base>
                                <c-wallet-transfer />
                            </c-wallet-base>
                        </div>
                        <div class="mx-2 mb-4">
                            <h4 class="text-white">Deposit screen</h4>
                            <c-wallet-base>
                                <c-wallet-deposit />
                            </c-wallet-base>
                        </div>
                        <div class="mx-2 mb-4">
                            <h4 class="text-white">Account Edit screen</h4>
                            <c-wallet-base>
                                <c-wallet-edit />
                            </c-wallet-base>
                        </div>
                        <div class="mx-2 mb-4">
                            <h4 class="text-white">Wallet token</h4>
                            <c-wallet-base>
                                <c-wallet-token />
                            </c-wallet-base>
                        </div>
                    </div>`
    }))


storiesOf('Chat', module)
    .add('base', () => ({
        components: {
            'c-chat-base': (resolve) => require(['@/components/chat-new/base'], resolve),
            'c-chat-group': (resolve) => require(['@/components/chat-new/content/group'], resolve),
            'c-chat-private': (resolve) => require(['@/components/chat-new/content/private'], resolve),
            'c-chat-message': (resolve) => require(['@/components/chat-new/message'], resolve),
            'c-chat-user': (resolve) => require(['@/components/chat-new/user'], resolve),
            'c-chat-group-welcome': (resolve) => require(['@/components/chat-new/content/welcome'], resolve),
            'c-chat-group-sidebar': (resolve) => require(['@/components/chat-new/content/group-list'], resolve),
            'c-chat-group-new': (resolve) => require(['@/components/chat-new/content/new-group'], resolve),
            'c-chat-friends-list': (resolve) => require(['@/components/chat-new/friends-list/index'], resolve),
        },
        data(){
            return{
                users:[
                    {
                        id: 1,
                        avatar: 'http://sharethingz.com/wp-content/uploads/2014/08/avatar.png',
                        name: 'Gregory Smith',
                        game: 'Dota II',
                        status: 'offline',
                        admin: false
                    },
                    {
                        id: 2,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0I_Z85x-UDnEncEgx0myKWxgAirSMenb4VN2TepCnropn4Hl',
                        name: 'Louis Burns',
                        game: 'WarCraft',
                        status: 'busy',
                        admin: false
                    },
                    {
                        id: 3,
                        avatar: 'http://geedmo.com/codecanyon/bskins/plan/assets/img/avatar.png',
                        name: 'Thomas Harris',
                        game: 'Heroes',
                        status: 'online',
                        admin: true
                    },
                    {
                        id: 4,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr',
                        name: 'Terri Kopp',
                        game: 'Dota II',
                        status: 'online',
                        admin: false
                    },
                    {
                        id: 5,
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPk-mHx8SMUl0FBrnGMm49fksyHtj9yPPodc6JbrdubpbSqKxU',
                        name: 'Mildred Floyd',
                        game: 'CS GO',
                        status: 'online',
                        admin: false
                    }
                ],
                messages:[
                    {
                        user: 2,
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit ullamcorper enim varius sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,',
                        time: '28 July, 2018'
                    },
                    {
                        user: 3,
                        text: 'Duis sit amet nisl efficitur, rutrum arcu ac, bibendum ligula. Mauris viverra pellentesque massa sed congue. Nunc dictum gravida lobortis.',
                        time: '28 July, 2018'
                    },
                    {
                        user: 1,
                        text: 'Aliquam maximus convallis dui ut facilisis.',
                        time: '28 July, 2018'
                    },
                    {
                        user: 2,
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit ullamcorper enim varius sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,',
                        time: '28 July, 2018'
                    },
                    {
                        user: 3,
                        text: 'Duis sit amet nisl efficitur, rutrum arcu ac, bibendum ligula. Mauris viverra pellentesque massa sed congue. Nunc dictum gravida lobortis.',
                        time: '28 July, 2018'
                    },
                    {
                        user: 1,
                        text: 'Aliquam maximus convallis dui ut facilisis.',
                        time: '28 July, 2018'
                    },
                    {
                        user: 2,
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit ullamcorper enim varius sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,',
                        time: '28 July, 2018'
                    },
                    {
                        user: 3,
                        text: 'Duis sit amet nisl efficitur, rutrum arcu ac, bibendum ligula. Mauris viverra pellentesque massa sed congue. Nunc dictum gravida lobortis.',
                        time: '28 July, 2018'
                    },
                    {
                        user: 1,
                        text: 'Aliquam maximus convallis dui ut facilisis.',
                        time: '28 July, 2018'
                    }
                ],
                shortcuts:[
                    {
                        "r": null,
                        "g": null,
                        "b": null,
                        "image": "/static/img/icons/store.png",
                        "to": "/",
                        "text": "Go to store",
                        "sort": 2,
                        "removable": false
                    },
                    {
                        "icon": "fa fa-plus",
                        "eventKey": "application/activateModal",
                        "eventValue": "create-shortcut",
                        "text": "Create",
                        "sort": -1,
                        "removable": false
                    }
                ]
            }
        },
        computed:{
            userList(){
            }
        },
        template: `<div class="row p-3 m-0 flex-wrap" style="width: 1100px;">
                    <div class="col-12" >
                        <h3 class="text-white">Group chat "Welcome block"</h3>
                        <c-chat-base style="height: 700px" :shortcuts="shortcuts">
                            <template slot="sidebar">
                                <c-chat-group-sidebar />
                            </template>
                            <c-chat-group>
                                <template slot="messages">
                                    <c-chat-group-welcome />
                                </template>
                                <template slot="users">
                                    <c-chat-user v-for="user in userList" :isAdmin="user.admin" :avatar="user.avatar" :name="user.name" :game="user.game" :status="user.status"/>
                                </template>
                            </c-chat-group>
                        </c-chat-base>
                        <hr />
                    </div>
                    <div class="col-12" >
                        <h3 class="text-white">Group chat with messages</h3>
                        <c-chat-base style="height: 700px" :shortcuts="shortcuts">
                            <template slot="sidebar">
                                <c-chat-group-sidebar />
                            </template>
                            <c-chat-group :currentUser="users[2]">
                                <template slot="messages">
                                    <c-chat-message v-for="msg in messages" :text="msg.text" :time="msg.time" :user="users[msg.user]" />
                                </template>
                                <template slot="users">
                                    <c-chat-user v-for="user in users" :isAdmin="user.admin" :action="true" :avatar="user.avatar" :name="user.name" :game="user.game" :status="user.status"/>
                                </template>
                            </c-chat-group>
                        </c-chat-base>
                        <hr />
                    </div>
                    <div class="col-12" >
                        <h3 class="text-white">Private messages</h3>
                        <c-chat-base style="height: 700px" :shortcuts="shortcuts">
                            <c-chat-private>
                                <c-chat-message v-for="msg in messages" :text="msg.text" :time="msg.time" :user="users[msg.user]" />
                            </c-chat-private>
                        </c-chat-base>
                        <hr />
                    </div>
                    <div class="col-12" >
                        <h3 class="text-white">New group(create/join)</h3>
                        <c-chat-base style="height: 700px" :shortcuts="shortcuts">
                            <c-chat-group-new />
                        </c-chat-base>
                    </div>
                    <div class="col-12">
                        <h3 class="text-white">Friends list</h3>
                        <c-chat-friends-list />
                        <hr />
                    </div>
                </div>`
    }))

storiesOf('Games list', module)
    .add('base', () => ({
        components:{
            'c-game-list': (resolve) => require(['@/components/games-list/index'], resolve)
        },
        data(){
            return{
                games:[
                    {
                        id: '1',
                        name: 'Game Of Thor',
                        sub_name: 'Legendary Edition',
                        image: 'http://hdqwalls.com/wallpapers/dark-siders-game-hd.jpg',
                        download_content:[
                            {
                                name: 'DragonBore',
                                price: '3.99'
                            },
                            {
                                name: 'Hearthfire',
                                price: '6.99'
                            },
                            {
                                name: 'Hight Resultation Texture Pack',
                                price: '13.99'
                            },
                            {
                                name: 'Dawnguard',
                                price: '13.99'
                            }
                        ],
                        achievements: [
                            {
                                icon: '',
                                href: ''
                            },
                            {
                                icon: '',
                                href: ''
                            },
                            {
                                icon: '',
                                href: ''
                            },
                            {
                                icon: '',
                                href: ''
                            }
                        ],
                        friends:[
                            {
                                link: '#',
                                avatar: 'http://kharkov.city/wp-content/uploads/2015/09/cubegirl-avatar_400x4001.jpg'
                            },
                            {
                                link: '#',
                                avatar: 'http://www.auto-sib.com/upload/main/2e6/2e667dbfe5de0eda8c1f98777b2a2db8.png'
                            },
                            {
                                link: '#',
                                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUCwHqPE2M4z3HsyeQsaOoWtuxjX92a2vVi5p7N9Qm72IM8Dh'
                            }
                        ],
                        news:[
                            {
                                title: 'Morbi at ligula placerat',
                                text: 'Morbi at ligula placerat, vestibulum tortor ac, sollicitudin massa. In in risus vulputate, posuere libero ac, egestas justo. Ut non mattis nulla. Suspendisse acmaximus metus. Nulla auctor laoreet quam, in congue nulla.',
                                link: '#'
                            },
                            {
                                title: 'Sed lobortis lacinia ante a bibendum.',
                                text: 'Ut gravida vestibulum nunc, sit amet malesuada nisi egestas eu. Integer felis eros, venenatis vel augue sit amet, cursus laoreet eros. Nam fringilla euismod feugiat.',
                                link: '#'
                            }
                        ]
                    },
                    {
                        id: '2',
                        name: 'CS GO: Advanced',
                        sub_name: 'Gold Edition',
                        image: 'https://img3.akspic.ru/image/43286-monohromnyj-monoxromnyj_rejim-videoigra-voennosluzhashhie-protivogaz-1920x1080.jpg',
                        download_content:[
                            {
                                name: 'M16-2',
                                price: '0.99'
                            },
                            {
                                name: 'AK-74',
                                price: '3.99'
                            },
                            {
                                name: 'GOLD AWP',
                                price: '193.99'
                            }
                        ]
                    },
                    {
                        id: '3',
                        name: 'DOTA II',
                        sub_name: '',
                        image: 'https://i.pinimg.com/originals/66/36/5e/66365e390b9edf68991820fd11da9c0b.jpg'
                    },
                    {
                        id: '4',
                        name: 'Assassins Creed',
                        sub_name: '',
                        image: 'https://i.pinimg.com/originals/ce/51/f6/ce51f6e88f1a81dfb5d5621f7ac56762.jpg'
                    }
                ]
            }
        },
        template: `<div class="row p-3 m-0 flex-wrap" style="width: 1000px">
                    <c-game-list :games="games" />
                </div>`
    }))

storiesOf('Text label', module)
    .add('default', () => ({
        components:{
            'c-text-label': (resolve) => require(['@/components/text-label'], resolve),
        },
        template: `<div class="p-3 m-0 text-white" style="width: 900px">
                    <c-text-label>Default</c-text-label>
                    <c-text-label type="white">White</c-text-label>
                    <c-text-label type="info">Info</c-text-label>
                    <c-text-label type="success">Success</c-text-label>
                    <c-text-label type="danger">Danger</c-text-label>
                    <c-text-label type="warning">Warning</c-text-label>
                    <c-text-label bgColor="#684BA5">Custom</c-text-label>
                    <hr />
                    <div class="h3 mb-3">Example</div>
                    <p><c-text-label>Lorem</c-text-label> ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Lorem ipsum <c-text-label type="success">dolor sit</c-text-label>, consectetur adipiscing elit.</p>
                    <p>Nulla euismod lorem a vehicula <c-text-label type="info">condimentum</c-text-label>.</p>
                </div>`
    }))


storiesOf('Option Block', module)
    .add('default', () => ({
        components:{
            'c-option-block': (resolve) => require(['@/components/option-block'], resolve),
        },
        data(){
            return{
                list: [
                    {
                        id: '23423',
                        name: 'Digital Deluxe Edition',
                        price: '99.99',
                        image: 'https://bnetproduct-a.akamaihd.net//faa/1f29ed14601b9f480e4e37d75770b23a-upsell-bfa-dd.jpg',
                    },
                    {
                        id: '134',
                        name: 'Standard Edition',
                        price: '32.99',
                        image: 'https://bnetproduct-a.akamaihd.net//ffb/d843fb3f8393a4976d4c4beaceb1ca06-prod-thumb.jpg',
                    },
                    {
                        id: '3564',
                        name: 'Demo Edition',
                        price: '19.99',
                    }
                ]
            }
        },
        template: `<div class="p-3 m-0 text-white" style="width: 400px">
                        <c-option-block shadow 
                        image="https://eu.shop.battle.net/static/4.6.2/images/family-icons/world-of-warcraft.svg"
                        title="World of Warcraft®: Battle for Azeroth" 
                        subtitle="Massively Multiplayer RPG"
                        notification="Pre-Purchase now!"
                        :list="list"
                        @buy=""
                        @gift=""
                        @addToWishlist=""
                         />
                    </div>`
    }))


storiesOf('Games Library', module)
    .add('default', () => ({
        components:{
            'c-game-library-card': (resolve) => require(['@/components/game-library/card-item.vue'], resolve),
        },
        data(){
            return{
                game:{
                    id: '2',
                    images:{
                        mediumTile: 'https://kor.ill.in.ua/m/610x385/1848785.jpg'
                    },
                    name: 'Dota 2',
                }
            }
        },
        template: `
                <div class="row p-5" style="width: 1000px">
                    <div class="col-4">
                        <c-game-library-card :name="game.name" :image="game.images.mediumTile" />
                    </div>
                </div>
        `
    }))


storiesOf('Quick Launch', module)
    .add('default', () => ({
        components:{
            'c-quick-launch': (resolve) => require(['@/components/quick-launch'], resolve),
        },
        data(){
            return{
                game:{
                    id: '2',
                    images:{
                        mediumTile: 'https://kor.ill.in.ua/m/610x385/1848785.jpg'
                    },
                    name: 'Dota 2',
                }
            }
        },
        template: `
                <div class="row p-5" style="width: 1000px">
                    <div class="col-4">
                        <c-quick-launch />
                    </div>
                </div>
        `
    }))


storiesOf('Global Search', module)
    .add('default', () => ({
        components:{
            'c-global-search': (resolve) => require(['@/components/global-search'], resolve),
        },
        data(){
            return{
            }
        },
        template: `
                <div class="row p-5" style="width: 1000px">
                    <div class="col-7">
                        <c-global-search />
                    </div>
                </div>
        `
    }))
    .add('header bar', () => ({
        components:{
            'c-bar-search': (resolve) => require(['@/components/global-search/second'], resolve),
        },
        data(){
            return{

            }
        },
        template: `
                <div class="row m-4" style="width: 350px">
                    <div class="col-12">
                        <c-bar-search />
                    </div>
                </div>
        `
    }))


storiesOf('Giphy', module)
    .add('default', () => ({
        components:{
            'c-giphy': (resolve) => require(['@/components/giphy'], resolve),
        },
        data(){
            return{
                gif: ''
            }
        },
        methods:{
            setGif(value){
                this.gif = value
            }
        },
        template: `
                <div class="row p-5" style="width: 400px">
                    <div class="col-12">
                        <img :src="gif" />
                        <hr />
                    </div>
                    <div class="col-12">
                        <c-giphy class="w-100" @choose="setGif" />
                    </div>
                </div>
        `
    }))


storiesOf('Table', module)
    .add('default', () => ({
        components: {
            'c-table-simple': (resolve) => require(['@/components/table-simple'], resolve),
        },
        data(){
            return{
                fields:[
                    {
                        label: 'First TH',
                        key: 'first'
                    },
                    {
                        label: 'Second TH',
                        key: 'second'
                    },
                    {
                        label: 'Third TH',
                        key: 'third'
                    },
                    {
                        label: 'Last TH',
                        key: 'last'
                    }
                ],
                rows: [
                    {
                        first: '1',
                        second: '2',
                        third: '3',
                        last: '4',
                    },
                    {
                        first: '1',
                        third: '3',
                        second: '2',
                        last: '4',
                    },
                    {
                        first: '1',
                        last: '4',
                        third: '3',
                        second: '2',
                    }
                ]
            }
        },
        template: `
                <div class="row p-5" style="width: 800px">
                    <c-table-simple>
                        <thead>
                            <tr>
                                <th v-for="field in fields">
                                    {{ field.label }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in rows">
                                <td v-for="field in row">
                                    {{ field }}
                                </td>
                            </tr>
                        </tbody>
                    </c-table-simple>
                </div>
        `
    }))


storiesOf('Text Formatting', module)
    .add('default', () => ({
        components:{
            'c-text-formatting': (resolve) => require(['@/components/text-formatting'], resolve),
            'c-basic-popup': (resolve) => require(['@/components/popups/basic.vue'], resolve),
        },
        template: `<div class="p-4" style="width: 600px">
                    <c-basic-popup :activated="true">
                        <template slot="body">
                            <c-text-formatting />
                        </template>
                    </c-basic-popup>
                </div>`
    }))


storiesOf('Activity block', module)
    .add('default', () => ({
        components:{
            'c-activity-block': (resolve) => require(['@/components/activity-block'], resolve),
        },
        template: `<div style="width: 1000px;" class="p-5">
                    <c-activity-block @play="" @install="" @help="" labelIcon="list" :percent="37" earnedAchievements="31" totalAchievements="193">
                        <template slot="label">
                            In Library
                        </template>
                        <template slot="title">
                            StarBreak is already in your BlockHub library ( Purchased 31 May, 2018 )
                        </template>
                        <template slot="description">
                            0.1 hrs last two weeks / 0.1 hrs on record
                        </template>
                    </c-activity-block>
                </div>`
    }))


storiesOf('Metro', module)
    .add('metro-tile', () => ({
        components:{
            'c-metro-tile': (resolve) => require(['@/components/metro/metro-tile'], resolve),
        },
        data(){
            return{
                BASE_LEN : 65,
                MARGIN : 3,
                items: [
                    {
                        i: "0",
                        width: 250,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#1E90FF'
                        }
                    },
                    {
                        i: "1",
                        width: 250,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#228b22'
                        }
                    },
                    {
                        i: "2",
                        width: 250,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#ff4500'
                        }
                    },
                    {
                        i: "3",
                        width: 125,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#9400d3'
                        }
                    },
                    {
                        i: "4",
                        width: 125,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#ffa07a'
                        }
                    },
                    {
                        i: "5",
                        width: 125,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#1E90FF'
                        }
                    },
                    {
                        i: "6",
                        width: 125,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#1E90FF'
                        }
                    },
                    {
                        i: "7",
                        width: 250,
                        height: 80,
                        rotateX: 0,
                        faceStyle: {
                            'background-color': '#1E90FF'
                        }
                    }
                ],
            }
        },
        template: `
            <div class="m-4 d-flex flex-wrap" style="width: 1000px">
                <div v-for="item in items"
                    class="p-1">
                    <c-metro-tile
                    :width="item.width"
                    :height="item.height"
                    :length="item.length"
                    :rotateX="item.rotateX"
                    :faceStyle="item.faceStyle">
                    <!-- custom face for each tile in left layout-->
                      <template v-if="item.i === '0'">
                        <div slot="front">
                            <div class="tile-label">
                              Microsoft Edge
                            </div>
                        </div>
                      </template>
                      <template v-else-if="item.i === '1'">
                        <div slot="front">
                            <div class="tile-label">
                              Xbox
                            </div>
                        </div>
                      </template>
                      <template v-else-if="item.i === '2'">
                        <div slot="front">
                            <div class="tile-label">
                              My Office
                            </div>
                        </div>
                      </template>
                      <template v-else-if="item.i === '3'">
                        <div slot="front">
                            <div class="tile-label">
                              OneNote
                            </div>
                        </div>
                      </template>
                      <template v-else-if="item.i === '4'">
                        <div slot="front">
                            <div class="tile-label">
                              PowerPoint
                            </div>
                        </div>
                      </template>
                      <template v-else-if="item.i === '5'">
                        <div slot="front">
                            <div class="tile-label">
                              Cortana
                            </div>
                        </div>
                      </template>
                      <template v-else-if="item.i === '6'">
                        <div slot="front">
                            <div class="calendar">
                              <div class="calendar-week-day">
                                Monday
                              </div>
                              <div class="calendar-month-day">
                                21
                              </div>
                            </div>
                        </div>
                      </template>
                      <template v-else-if="item.i === '7'">
                        <div slot="front">
                            <div class="tile-label">
                              Microsoft Store
                            </div>
                            <img src="https://user-images.githubusercontent.com/6414178/45696034-3fd14280-bb95-11e8-8c45-cd2020fabefc.png" class="store-cover-img" />
                            <div class="store-title">
                              Cyberpunk 2077
                            </div>
                            <div class="store-subtitle">
                                Free&#8314;
                            </div>
                        </div>
                        <div slot="top">
                            <div class="tile-label">
                              Microsoft Store
                            </div>
                            <img src="https://user-images.githubusercontent.com/6414178/45696084-56779980-bb95-11e8-87ac-817bf448cd4f.png" class="store-cover-img" />
                            <div class="store-title">
                              Half-Life 3: Episode 1
                            </div>
                            <div class="store-subtitle">
                                Free&#8314;
                            </div>
                        </div>
                        <div slot="bottom">
                            <div class="tile-label">
                              Microsoft Store
                            </div>
                            <img src="https://user-images.githubusercontent.com/6414178/45696072-4eb7f500-bb95-11e8-8e7c-ccb0099e5161.png" class="store-cover-img" />
                            <div class="store-title">
                              Grand Theft Auto VI
                            </div>
                            <div class="store-subtitle">
                                Free&#8314;
                            </div>
                        </div>
                      </template>
                    </c-metro-tile>    
                </div>
            </div>`
    }))
    .add('metro-item', () => ({
        components: {
            'c-metro-item': (resolve) => require(['@/components/metro/metro-item'], resolve),
        },
        data(){
            return{
                image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg'
            }
        },
        template: `<div class="m-4">
                    <c-metro-item :image="image">
                        <div class="h4 font-weight-bold">
                            Aenean blandit augue non est
                        </div>
                        <div>
                            Vestibulum mi neque, commodo et blandit id, auctor at metus. Quisque varius ut nisi a tincidunt. 
                            Maecenas nibh sem, malesuada et cursus nec, sollicitudin accumsan sapien.
                        </div>
                    </c-metro-item>
                    <hr />
                    <c-metro-item :image="image" :fullImage="true">
                        <div class="h4 font-weight-bold">
                            Aenean blandit augue non est
                        </div>
                        <div>
                            Vestibulum mi neque, commodo et blandit id, auctor at metus. Quisque varius ut nisi a tincidunt. 
                            Maecenas nibh sem, malesuada et cursus nec, sollicitudin accumsan sapien.
                        </div>
                    </c-metro-item>
                    <hr />
                    <c-metro-item :image="image" :fullImage="true" :shadow="true">
                        <div class="h4 font-weight-bold">
                            Aenean blandit augue non est
                        </div>
                        <div>
                            Vestibulum mi neque, commodo et blandit id, auctor at metus. Quisque varius ut nisi a tincidunt. 
                            Maecenas nibh sem, malesuada et cursus nec, sollicitudin accumsan sapien.
                        </div>
                    </c-metro-item>
                </div>`
    }))
    .add('metro grid', () => ({
        components: {
            'c-metro-grid': (resolve) => require(['@/components/metro/grid'], resolve),
            'c-metro-item': (resolve) => require(['@/components/metro/metro-item'], resolve),
        },
        data(){
            return{
                items: [
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Nam euismod tincidunt sapien',
                        text: 'Sed id accumsan diam, ac elementum nulla. Nullam dictum, diam at interdum ullamcorper, nisl arcu ornare felis, bibendum porttitor urna elit at ligula. Nulla eget orci fringilla, eleifend nisi id, consectetur urna.'
                    },
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Nunc tempor purus eget tellus tincidunt, sed eleifend ligula tempor',
                        text: 'Dibendum porttitor urna elit at ligula. Nulla eget orci fringilla, eleifend nisi id, consectetur urna.'
                    },
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Cras varius est at dolor porttitor',
                        text: 'lobortis velit laoreet nec. Integer mollis dolor mattis ligula consequat faucibus. Praesent suscipit, risus at elementum blandit, lacus risus interdum risus, non elementum elit turpis id nibh'
                    },
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Sed purus risus, ornare pretium pretium',
                        text: 'Nam sit amet egestas tellus. Nunc tempor purus eget tellus tincidunt, sed eleifend ligula tempor. Vivamus vestibulum consequat tempor.'
                    },
                    {
                        image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg',
                        title: 'Donec malesuada egestas justo in',
                        text: 'Integer ac hendrerit sapien. Vestibulum euismod neque bibendum rutrum sollicitudin. Mauris ligula neque, finibus id magna ac, lobortis dapibus augue.'
                    }
                ]
            }
        },
        template: `<div class="m-4" style="width: 1200px;">
                    <c-metro-grid>
                        <c-metro-item v-for="item in items" :image="item.image" width="300px ">
                            <div class="h4 font-weight-bold">
                                {{ item.title }}
                            </div>
                            <div>
                                {{ item.text }}
                            </div>
                        </c-metro-item>
                    </c-metro-grid>
                </div>`
    }))


storiesOf('Security check', module)
    .add('default', () => ({
        components:{
            'c-security-check' : (resolve) => require(['@/components/security-check'], resolve),
        },
        data(){
            return{
                code: false,
                err: false
            }
        },
        methods: {
            sendCode(val){
                console.log(val)
                this.code = true

            },
            checkCode(code){
                if ( code != 123456 ) {
                    this.err = true
                } else {
                    this.err = false
                }
            }
        },
        template: `<div style="width: 300px" class="m-4">
                        <strong class="text-white">Correct code - 123456</strong>
                        <hr />
                        <c-security-check @sendCode="sendCode" @codeSubmit="checkCode" :codeIsSend="code" :wrongCode="err" />
                    </div>`


    }))


storiesOf('Browser UI', module)
    .add('default', () => ({
        components: {
            'c-browser-ui' : (resolve) => require(['@/components/browser-ui'], resolve),
        },
        template: `<div style="width: 600px" class="m-4"><c-browser-ui /></div>`
    }))

storiesOf('Settings', module)
    .add('default', () => ({
        components:{
            'c-settings' : (resolve) => require(['@/components/settings'], resolve),
        },
        template: `<div class="m-4" style="width: 1000px;">
                        <c-settings />
                    </div>`
    }))

storiesOf('Add friends', module)
    .add('default', () => ({
        components: {
            'c-add-friends': (resolve) => require(['@/components/add-friends'], resolve),
        },
        data(){
            return{
                userFriends: [
                    {
                        avatar: 'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
                        firstname: 'Brandan',
                        lastname: 'Hayes'
                    },
                    {
                        avatar: 'http://www.parajurist.md/assets/site/images/parajurist/1.jpg',
                        firstname: 'Fredrica',
                        lastname: 'James'
                    },
                    {
                        avatar: 'https://vcabestellen.nl/images/avatar7.png',
                        firstname: 'Denis',
                        lastname: 'Stephens'
                    },
                    {
                        avatar: 'https://cdn1.flamp.ru/b00b20ee57b46bdd889f56d8345de1ce.png',
                        firstname: 'Michelle',
                        lastname: 'Reed'
                    },
                ],
                permission: false,
                connected: false,
            }
        },
        template: `<div class="m-4" style="width: 400px;">
                        <c-button class="mx-3" @click=" permission = !permission ">
                            Toggle permission
                        </c-button>
                        <c-button class="mx-3" @click=" connected = !connected ">
                            Toggle connected
                        </c-button>
                        <hr />
                        <c-add-friends :permission="permission" :connected="connected" :userFriends="userFriends" />
                    </div>`
    }))


storiesOf('Draggble video', module)
    .add('default', () => ({
        components: {
            'c-draggable-video' : (resolve) => require(['@/components/draggable-video'], resolve),
        },
        template: `<div><c-draggable-video /></div>`
    }))



/*
     Dynamic import - test version

const navigation = storiesOf('Navigation', module);

['account', 'asset', 'funding'].forEach(component => {
    navigation.add(component, () => ({
        components: { [component]: (resolve) => require([`@/components/navigation/${component}`], resolve) },
        template: `<${component}/>`
    }))
});

*/


// /* eslint-enable react/react-in-jsx-scope */
