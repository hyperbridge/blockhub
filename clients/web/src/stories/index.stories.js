/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import Vue from 'vue'
import {storiesOf, addDecorator} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import StoryRouter from 'storybook-vue-router'
import {withViewport} from '@storybook/addon-viewport'
import {withKnobs, text, boolean, number, object} from '@storybook/addon-knobs/vue'

import '../css/styles.scss'
import '@/entry-client'
import '@/filters'
import '@/directives'
import '@/components'
import store from '@/store'
import router from '@/router'

import * as Bridge from '@/framework/desktop-bridge'
import * as data from './components-data'


const StoreDummy = {
    install(Vue, options) {
        Vue.prototype.$store = store
    }
}

Vue.use(StoreDummy)

//import '!style-loader!css-loader!./styles.scss'

window.ga = function() {}

Bridge.init(store, router)

store.dispatch('database/init')
store.dispatch('application/init')
store.dispatch('marketplace/init')
store.dispatch('funding/init')

console.log('BlockHub initialized.')


addDecorator(withViewport('desktop'))
addDecorator(StoryRouter())


import PromotionItem from '../ui/components/promotion-box/item'
import PromotionList from '../ui/components/promotion-box/list'

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

import AssetsImporter from '../ui/components/asset-importer'

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

import Notification from '../ui/components/notification'
import NotificationInline from '../ui/components/notification/inline'

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

import Searcher from '../ui/components/searcher';

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

import RatingStars from '../ui/components/rating-stars';
import RatingBlock from '../ui/components/rating-block/index'

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

import Author from '../ui/components/author';

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

import Tags from '../ui/components/tags';

storiesOf('Tags', module)
    .add('Tags', () => ({
        components: {Tags},
        template: `<div class="text-white p-5"><tags :tags="['RPG', 'Open-World']"/></div>`
    }))

import LoadingLine from '../ui/components/loading-bar';
import LoadingCircle from '../ui/components/loading-bar/circle';

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


import NavigationAccount from '../ui/components/navigation/account';
import NavigationAsset from '../ui/components/navigation/asset';
import NavigationFunding from '../ui/components/navigation/funding';
import NavigationHelp from '../ui/components/navigation/help';
import NavigationProduct from '../ui/components/navigation/product';
import NavigationProject from '../ui/components/navigation/project';
import NavigationSettings from '../ui/components/navigation/settings';
import NavigationWallet from '../ui/components/navigation/wallet';

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


import Card from '../ui/components/project/card';
import Badges from '../ui/components/project/badges';
import Milestone from '../ui/components/project/milestone';
import UpdatesCount from '../ui/components/project/updates-count';

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


import Tabs from '../ui/components/tab/tabs.vue'
import Tab from '../ui/components/tab/tab.vue'
import TabsUniversal from '@/ui/components/tab/tabs-universal';
import TabUniversal from '@/ui/components/tab/tab-universal';

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

import SystemRequirements from '@/ui/components/product-overview/system-requirements';

import MilestonesLine from '../ui/components/milestones-line'

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


import SidebarMenu from '../ui/components/sidebar-menu'
import SidebarMenuLink from '../ui/components/sidebar-menu/menu_item'

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
                    <c-sidebar-menu sub_title="This sub title" sub_icon="fas fa-info-circle" :links="links" />
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

import Buttons from '../ui/components/buttons'
import LoadMore from '../ui/components/buttons/load-more'
import ButtonArrows from '@/ui/components/buttons/arrows'

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


import MoneyInfo from '../ui/components/money-info'

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

import Checkbox from '@/ui/components/checkbox';
import CheckboxGroup from '@/ui/components/checkbox/group.vue';

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

import Tooltips from '@/ui/components/tooltips';

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

import TooltipUniversal from '@/ui/components/tooltips/universal';

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


import ActivityChart from '../ui/components/activity-chart'

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

import PopUps from '@/ui/components/popups'
import BasicPopup from '@/ui/components/popups/basic'
import TermsPopup from '@/ui/components/popups/terms'

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
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Default" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
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
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Warning" type="warning" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
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
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Danger" type="danger" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
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
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Info" type="info" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
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
                <c-popup :activated="modalActive" @close="close" ref="modal" type="success" title="Success" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
            'c-play-popup' : (resolve) => require(['@/ui/components/popups/play'], resolve)
        },
        data(){
            return{
                activated: false
            }
        },
        template: `<div class="p-4"><c-button @click=" activated = true ">Play Now</c-button> <c-play-popup :activated="activated" @close=" activated = !activated " /></div>`
    }))

import RangeSlider from '../ui/components/range-slider/pure'

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


import AssetsGrid from '../ui/components/assets-grid'

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

import AssetsPopup from '../ui/components/asset-overview-popup'

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

import Switch from '../ui/components/switch'

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


import AssetsList from '../ui/components/assets-list-item/featured-list.vue'
import AssetsListDetail from '../ui/components/assets-list-item'

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
                        sub_title: 'Tibia MMORPG'
                    },
                    {
                        img: 'https://vignette.wikia.nocookie.net/angrybirds-fiction/images/8/8b/Toons_assets_chuck_01.png/revision/latest?cb=20150120103056&path-prefix=ru',
                        title: 'Magic Chuck',
                        sub_title: 'Angry Birds'
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


import Block from '../ui/components/block'
import simpleBlock from '../ui/components/block/simple'

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


import CustomModal from '../ui/components/modal/custom'
import Modal from '@/ui/components/modal/';

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

import Dropdown from '../ui/components/dropdown-menu/type-2'
import DropdownCustom from '../ui/components/dropdown-menu/type-3'
import DropdownPost from '../ui/components/dropdown-menu/index'
import DropdownCurrency from '../ui/components/dropdown-menu/currency'
import DropdownLang from '../ui/components/dropdown-menu/language'

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

import DropdownMenu from '../ui/components/dropdown-menu/type-2.vue'
import FTradedAssets from '../ui/components/frequently-traded-assets/index'

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

import GamePlan from '@/ui/components/game-plans/plan'

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

import GamesGrid from '../ui/components/game-grid/with-description'
import GamesGridSimple from '../ui/components/game-grid/simple'

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

// import Headers from '../ui/components/headers/basic'
// storiesOf('Headers', module)
//     .add('default', () => ({
//         components: {
//             'c-headers': Headers
//         },
//         template: `
//             <!--<c-headers />-->
// `
// }))

import BlockHeaders from '../ui/components/heading-bar/index'
import BlockHeadersColor from '../ui/components/heading-bar/simple-colored.vue'
import BlockHeadersAddFields from '../ui/components/heading-bar/additional-action'

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


import NewsListNav from '../ui/components/news-list/navigation'
import NewsList from '../ui/components/news-list/articles'
import NewsArticle from '../ui/components/news-list/article'

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

import Pagination from '@/ui/components/pagination/index';

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


import ProductCommunity from '@/ui/components/community/post-item';
import ProductCommunityComment from '@/ui/components/community/comment';
import ProductCommunityReply from '@/ui/components/community/reply';

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


import ProjectCard from '../ui/components/project/card'

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


import SendingFundsPopup from '../ui/components/send-funds-popup/index'

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


import UserCard from '@/ui/components/user-card/index';

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


import ScreenGallery from '../ui/components/screen-gallery/gallery';

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


import ProductCardDynamic from '@/ui/components/store/product-card-dynamic';
import ProductCard from '@/ui/components/store/product-card';
import ProductsCards from '@/ui/components/store/product-cards';

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


import CuratorReview from '@/ui/components/store/curator-review';
import CuratorsReviews from '@/ui/components/store/curator-reviews';

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


import ImagesExplorer from '@/ui/components/images-explorer';

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


import CollectionItem from '@/ui/components/collection/item';
import CollectionList from '@/ui/components/collection/list';
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
                    count_number: 2741,
                    background: 'data:image/jpeg;base64,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',
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
                        count_number: 2741,
                        background: 'data:image/jpeg;base64,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',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        count_number: 2741,
                        background: 'data:image/jpeg;base64,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',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        count_number: 2741,
                        background: 'data:image/jpeg;base64,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',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        count_number: 2741,
                        background: 'data:image/jpeg;base64,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',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        count_number: 2741,
                        background: 'data:image/jpeg;base64,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',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        count_number: 2741,
                        background: 'data:image/jpeg;base64,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',
                        images: [
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                            'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        ]
                    },
                    {
                        title: 'Collection name',
                        user: 'John Doel',
                        count_number: 2741,
                        background: 'data:image/jpeg;base64,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',
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


import GameSeries from '@/ui/components/game-series/index'
import GameDescription from '@/ui/components/game-series/game-description'
import GameIncludesList from '@/ui/components/game-series/game-includes-list'
import GameIncludesItem from '@/ui/components/game-series/game-includes-item'

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
                        img: 'data:image/jpeg;base64,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',
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
                        img: 'data:image/jpeg;base64,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',
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
                        img: 'data:image/jpeg;base64,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',
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
                        img: 'data:image/jpeg;base64,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',
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


import ProgressBar from '@/ui/components/progress-bar';
import ProgressBarFancy from '@/ui/components/progress-bar/fancy';

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

import ProjectMilestone from '@/ui/components/project/milestone';

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

import CommunitySpotlight from '@/ui/components/community-spotlight';

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

import ProductReview from '@/ui/components/review';
import ProductReviewForm from '@/ui/components/review/create';

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
            'c-view-review': (resolve) => require(['@/ui/components/review/view'], resolve),
        },
        template: `<div class='p-5' style="width: 1000px"><c-view-review /></div>`
    }))


import Banner from '@/ui/components/banner'

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

import LanguageSupport from '@/ui/components/product-overview/language-support';

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


import Input from '@/ui/components/inputs';
import InputSearcher from '@/ui/components/inputs/searcher';

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


import TimelineList from '@/ui/components/timeline/list.vue';
import TimelineItem from '@/ui/components/timeline/item.vue';

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

import PurchaseBlock from '@/ui/components/purchase-block';

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


import PurchaseOption from '@/ui/components/purchase-option';

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

import ParticipationTier from '@/ui/components/participation-tier'

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

import ContributeForm from '@/ui/components/contribute/form.vue'
import ContributePledge from '@/ui/components/contribute/pledge.vue'

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

import CookiePolicy from '@/ui/components/cookie-policy'

storiesOf('Cookie policy', module)
    .add('default', () => ({
        components: {
            'c-cookie-policy': CookiePolicy
        },
        template: `<div class="p-5 position-relative" style="height: 500px;width: 700px">
                        <c-cookie-policy />
                    </div> `
    }))

import WelcomeBox from '@/ui/components/welcome-box'

storiesOf('Welcome Box', module)
    .add('default', () => ({
        components: {
            'c-welcome-box': WelcomeBox
        },
        template: `<div class="p-5 position-relative" style="height: 900px;width: 700px">
                        <c-welcome-box />
                    </div> `
    }))

import Share from '@/ui/components/share/type-1'

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

import StreamItem from '@/ui/components/stream'

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


import List from '@/ui/components/list/dots'

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

import GameInstallerModal from '@/ui/components/game-installer'

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


import Emoji from '@/ui/components/emoji'
import EmojiSingle from '@/ui/components/emoji/single'

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


import Landing from '@/ui/components/landing'
import LandingTitle from '@/ui/components/landing/block-title/simple'
import LandingTitleShadow from '@/ui/components/landing/block-title/shadow'
import LandingTitleGradient from '@/ui/components/landing/block-title/gradient'
import LandingContent from '@/ui/components/landing/block-content/simple'

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
            'c-landing-divider': (resolve) => require(['@/ui/components/landing/block-content/divider'], resolve),
        },
        template: `
        <div class="p-5">
            <c-landing-divider />
        </div>
            `
    }))
    .add('level', () => ({
        components: {
            'c-landing-level': (resolve) => require(['@/ui/components/landing/block-content/level'], resolve),
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
            'c-landing-feature-item': (resolve) => require(['@/ui/components/landing/block-content/feature-item'], resolve),
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
            'c-landing-benefactor' : (resolve) => require(['@/ui/components/landing/block-content/benefactor'], resolve),
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
            'c-landing-reward-list': (resolve) => require(['@/ui/components/landing/block-content/reward-list'], resolve),
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
            'c-landing-block-title' : (resolve) => require(['@/ui/components/landing/block-title/simple'], resolve),
            'c-landing-block-title-shadow' : (resolve) => require(['@/ui/components/landing/block-title/shadow'], resolve),
            'c-landing-block-title-gradient' : (resolve) => require(['@/ui/components/landing/block-title/gradient'], resolve),
            'c-landing-feature-item': (resolve) => require(['@/ui/components/landing/block-content/feature-item'], resolve),
            'c-landing-tabs': (resolve) => require(['@/ui/components/landing/block-content/tabs'], resolve),
            'c-landing-tab': (resolve) => require(['@/ui/components/landing/block-content/tab'], resolve),
            'c-landing-slider' : (resolve) => require(['@/ui/components/landing/block-content/slider'], resolve),
            'c-landing-gradient-block' : (resolve) => require(['@/ui/components/landing/block-content/gradient'], resolve),
            'c-landing-benefactor' : (resolve) => require(['@/ui/components/landing/block-content/benefactor'], resolve),
            'c-landing-level': (resolve) => require(['@/ui/components/landing/block-content/level'], resolve),
            'c-landing-reward-list': (resolve) => require(['@/ui/components/landing/block-content/reward-list'], resolve),
            'c-landing-divider': (resolve) => require(['@/ui/components/landing/block-content/divider'], resolve),
            'c-landing-button': (resolve) => require(['@/ui/components/landing/button'], resolve),
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
            'c-token-sale': (resolve) => require(['@/ui/components/token-sale-box'], resolve),
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
            'c-toke-sale-2': (resolve) => require(['@/ui/components/token-sale-box/type-2'], resolve),
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
            'c-guide': (resolve) => require(['@/ui/components/guide'], resolve),
        },
        template: `<c-guide />`
    }))

storiesOf('Video Popup', module)
    .add('default', () =>({
        components:{
            'c-video-popup': (resolve) => require(['@/ui/components/video-popup'], resolve),
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
            'c-video-popup': (resolve) => require(['@/ui/components/video-popup'], resolve),
            'c-video-item': (resolve) => require(['@/ui/components/video-list'], resolve),
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
            'c-wallet-base': (resolve) => require(['@/ui/components/wallet/base'], resolve),
            'c-wallet-main': (resolve) => require(['@/ui/components/wallet'], resolve),
            'c-wallet-transfer': (resolve) => require(['@/ui/components/wallet/transfer'], resolve),
            'c-wallet-deposit': (resolve) => require(['@/ui/components/wallet/deposit'], resolve),
            'c-wallet-edit': (resolve) => require(['@/ui/components/wallet/account-edit'], resolve),
            'c-wallet-token': (resolve) => require(['@/ui/components/wallet/token'], resolve),
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
            'c-chat-base': (resolve) => require(['@/ui/components/chat-new/base'], resolve),
            'c-chat-group': (resolve) => require(['@/ui/components/chat-new/content/group'], resolve),
            'c-chat-private': (resolve) => require(['@/ui/components/chat-new/content/private'], resolve),
            'c-chat-message': (resolve) => require(['@/ui/components/chat-new/message'], resolve),
            'c-chat-user': (resolve) => require(['@/ui/components/chat-new/user'], resolve),
            'c-chat-group-welcome': (resolve) => require(['@/ui/components/chat-new/content/welcome'], resolve),
            'c-chat-group-sidebar': (resolve) => require(['@/ui/components/chat-new/content/group-list'], resolve),
            'c-chat-group-new': (resolve) => require(['@/ui/components/chat-new/content/new-group'], resolve),
            'c-chat-friends-list': (resolve) => require(['@/ui/components/chat-new/friends-list/index'], resolve),
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
            'c-game-list': (resolve) => require(['@/ui/components/games-list/index'], resolve)
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
            'c-text-label': (resolve) => require(['@/ui/components/text-label'], resolve),
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
            'c-option-block': (resolve) => require(['@/ui/components/option-block'], resolve),
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
            'c-game-library-card': (resolve) => require(['@/ui/components/game-library/card-item.vue'], resolve),
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
            'c-quick-launch': (resolve) => require(['@/ui/components/quick-launch'], resolve),
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
            'c-global-search': (resolve) => require(['@/ui/components/global-search'], resolve),
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
            'c-bar-search': (resolve) => require(['@/ui/components/global-search/second'], resolve),
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
            'c-giphy': (resolve) => require(['@/ui/components/giphy'], resolve),
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
            'c-table-simple': (resolve) => require(['@/ui/components/table-simple'], resolve),
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
            'c-text-formatting': (resolve) => require(['@/ui/components/text-formatting'], resolve),
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic.vue'], resolve),
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
            'c-activity-block': (resolve) => require(['@/ui/components/activity-block'], resolve),
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
            'c-metro-tile': (resolve) => require(['@/ui/components/metro/metro-tile'], resolve),
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
            'c-metro-item': (resolve) => require(['@/ui/components/metro/metro-item'], resolve),
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
            'c-metro-grid': (resolve) => require(['@/ui/components/metro/grid'], resolve),
            'c-metro-item': (resolve) => require(['@/ui/components/metro/metro-item'], resolve),
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
            'c-security-check' : (resolve) => require(['@/ui/components/security-check'], resolve),
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

/*
     Dynamic import - test version

const navigation = storiesOf('Navigation', module);

['account', 'asset', 'funding'].forEach(component => {
    navigation.add(component, () => ({
        components: { [component]: (resolve) => require([`../ui/components/navigation/${component}`], resolve) },
        template: `<${component}/>`
    }))
});

*/


// /* eslint-enable react/react-in-jsx-scope */
