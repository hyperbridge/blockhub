/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import Vue from 'vue'
import {storiesOf, addDecorator} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import StoryRouter from 'storybook-vue-router'
import {withViewport} from '@storybook/addon-viewport'
import {withKnobs, text, boolean, number, object} from '@storybook/addon-knobs/vue'

import '@/css/styles.scss'
import filters from '@/plugins/filters'
import directives from '@/plugins/directives'
import '@/plugins/components'

filters({})
directives({})

import * as data from './components-data'


const StoreDummy = {
    install(Vue, options) {
        Vue.prototype.$store = {
            state: {
                profiles: {
                    keyedById: {}
                },
                application: {
                    desktopMode: true,
                    settings: {
                        client: {
                            autoplay: false
                        }
                    },
                    video: {
                        src: null
                    }
                }
            },
            dispatch: () => {},
            commit: () => {}
        }
    }
}

Vue.use(StoreDummy)


Vue.component('nuxt-link', {
    props: ['to'],
    methods: {
        log() {
            action('link target')(this.to)
        },
    },
    template: '<div @click="log()"><slot /></div>',
})


Vue.component('router-link', {
    props: ['to'],
    methods: {
        log() {
            action('link target')(this.to)
        },
    },
    template: '<div @click="log()"><slot /></div>',
})

Vue.component('nuxt-link', {
    props: ['to'],
    methods: {
        log() {
            action('link target')(this.to)
        },
    },
    template: '<div @click="log()"><slot /></div>',
})
//
// // addDecorator(withViewport('desktop'))
// //addDecorator(StoryRouter())
//
storiesOf('Promotion Box', module)
    .add('item', () => ({
        components: {
            PromotionBoxItem: () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBoxItem)
        },
        data() {
            return {
                title: 'test',
                price: '10.00'
            }
        },
        template: '<div class="row"><div class="col-6 p-5"><PromotionBoxItem :title="title" :price="price"></PromotionBoxItem></div></div>'
    }))
    .add('list', () => ({
        components: {
            PromotionBoxList: () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBoxList),
            PromotionBoxItem: () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBoxItem)
        },
        data: () => data.PromotionBoxData ,
        template: `<div class="row"><div class="col-6 p-5">
                        <PromotionBoxList title="Packages" >
                            <template v-for="(promotion, index) in promotions">
                                <PromotionBoxItem :title="promotion.title" :price="promotion.price" :basic="promotion.basic" :border="true"></PromotionBoxItem>
                            </template>
                        </PromotionBoxList>
                    </div></div>`
    }))

storiesOf('Assets Importer', module)
    .add('default', () => ({
        components: {
            AssetsImporter: () => import('@ericmuyser/hyper-ui').then(m => m.AssetsImporter)
        },
        data() {
            return {
                show_skipped: true
            }
        },
        template: '<div class="row"><div class="col-8"><AssetsImporter show_skipped="show_skipped" /></div></div>'
    }))

storiesOf('Notifications', module)
    .add('default', () => ({
        components: {
            Notification: () => import('@ericmuyser/hyper-ui').then(m => m.Notification)
        },
        data: () => data.NotifsData,
        template: `
            <div class="row m-0">
                <div class="col-4 pt-3 text-white d-flex flex-column">
                    Single:
                    <Notification :notification="notif" />
                </div>
                <div class="col-4 pt-3 text-white d-flex flex-column">
                    Multiple:
                    <Notification v-for="(notif, index) in notifs" :key="index" :notification="notif"/>
                </div>
            </div>
        `
    }))
    .add('inline', () => ({
        components: {
            NotificationInline: () => import('@ericmuyser/hyper-ui').then(m => m.NotificationInline)
        },
        data: () => data.NotifsData,
        template: `
            <div class="row m-0">
                <div class="col-4 pt-3 text-white">
                    Single:
                    <NotificationInline :notification="notif">
                        {{ notif.text }}
                    </NotificationInline>
                    <hr />
                    Single medium:
                    <NotificationInline :notification="notif" size="md">
                        {{ notif.text }}
                    </NotificationInline>
                    <hr />
                    Multiple:
                    <NotificationInline v-for="(notif, index) in notifs" :key="index" class="my-3" :notification="notif" :type="notif.type">
                        {{ notif.text }}
                    </NotificationInline>
                </div>
            </div>
        `
    }))

storiesOf('Searcher', module)
    .add('default', () => ({
        components: {
            Searcher: () => import('@ericmuyser/hyper-ui').then(m => m.Searcher)
        },
        data: () => data.SearchData,
        methods: {
            search() {
                this.results = this.phrase.length ? this.getByVal(this.phrase) : []
            },
            getByVal(val) {
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
        computed: {
        },
        watch: {
            results() {
                console.log(this.results)
            }
        },
        template: `<div class="p-5 col-4">
                <Searcher  @input="search" :results="results" v-model="phrase">
                    <template slot-scope="props">
                        <span class="text-white">
                            {{ props.result.name }}
                        </span>
                    </template>
                </Searcher>
            </div>`
    }))

storiesOf('Rating', module)
    .add('Stars', () => ({
        components: {
            RatingStars: () => import('@ericmuyser/hyper-ui').then(m => m.RatingStars)
        },
        template: '<div class="text-white p-5"><RatingStars :number="3.5"/></div>'
    }))
    .add('Rating Block', () => ({
        components: {
            RatingBlock: () => import('@ericmuyser/hyper-ui').then(m => m.RatingBlock)
        },
        data: () => data.RatingData,
        template: `
        <div class="row p-5">
            <div class="col-8">
                <RatingBlock :items="items" fullReviewsPath="/" rateGamePath="/" />
            </div>
        </div>
        `
    }))

storiesOf('Author', module)
    .add('Author', () => ({
        components: {
            Author: () => import('@ericmuyser/hyper-ui').then(m => m.Author)
        },
        data() {
            return {
                name: 'SatoSan',
                img: 'https://via.placeholder.com/150'
            }
        },
        template: `<div class="text-white p-5"><author :name="name" :img="img"/></div>`
    }))

storiesOf('Tags', module)
    .add('Tags', () => ({
        components: {
            Tags: () => import('@ericmuyser/hyper-ui').then(m => m.Tags)
        },
        template: `<div class="text-white p-5"><Tags :tags="['RPG', 'Open-World']"/></div>`
    }))

storiesOf('LoadingBar', module)
    .add('line', () => ({
        components: {
            LoadingLine: () => import('@ericmuyser/hyper-ui').then(m => m.LoadingLine)
        },
        template: `<LoadingLine />`
    }))
    .add('circle', () => ({
        components: {
            LoadingCircle: () => import('@ericmuyser/hyper-ui').then(m => m.LoadingCircle)
        },
        template: `<div class="position-relative" style="width: 300px; height: 300px"><LoadingCircle /></div>`
    }))

import NavigationAccount from '@/components/navigation/account'
import NavigationAsset from '@/components/navigation/asset'
import NavigationFunding from '@/components/navigation/funding'
import NavigationHelp from '@/components/navigation/help'
import NavigationProduct from '@/components/navigation/product'
import NavigationProject from '@/components/navigation/project'
import NavigationSettings from '@/components/navigation/settings'
import NavigationWallet from '@/components/navigation/wallet'

storiesOf('Navigation', module)
    .add('account', () => ({
        components: {
            NavigationAccount
        },
        template: `<div class="col-2 py-3"><NavigationAccount /></div>`
    }))
    .add('asset', () => ({
        components: {
            NavigationAsset
        },
        template: `<div class="col-2 py-3"><NavigationAsset /></div>`
    }))
    .add('funding', () => ({
        components: {
            NavigationFunding
        },
        template: `<div class="col-2 py-3"><NavigationFunding /></div>`
    }))
    .add('help', () => ({
        components: {
            NavigationHelp
        },
        template: `<div class="col-2 py-3"><NavigationHelp /></div>`
    }))
    .add('product', () => ({
        components: {
            NavigationProduct
        },
        template: `<div class="col-2 py-3"><NavigationProduct /></div>`
    }))
    .add('project', () => ({
        components: {
            NavigationProject
        },
        template: `<div class="col-2 py-3"><NavigationProject /></div>`
    }))
    .add('settings', () => ({
        components: {
            NavigationSettings
        },
        template: `<div class="col-2 py-3"><NavigationSettings /></div>`
    }))
    .add('wallet', () => ({
        components: {
            NavigationWallet
        },
        template: `<div class="col-2 py-3"><NavigationWallet /></div>`
    }))

storiesOf('Projects', module)
    .add('card', () => ({
        components: {
            ProjectCard: () => import('@ericmuyser/hyper-ui').then(m => m.ProjectCard)
        },
        data: () => data.ProjectsData,
        template: `
                <div class="row">
                    <div class="col-4" v-for="(project, index) in projects" :key="index">
                        <ProjectCard
                            :image="project.img"
                            :description="project.description"
                            :funds="project.funds"
                            :parentImage="project.game.img"
                            :parentName="project.game.title"
                            :parentDeveloper="project.game.developer"
                            :id="project.id"
                            customClass="project"
                        />
                    </div>
                </div>
        `
    }))
    .add('badges', () => ({
        components: {
            Badges: () => import('@ericmuyser/hyper-ui').then(m => m.Badges)
        },
        template: `<Badges :icons="['trophy','gem']" />`
    }))
    .add('milestone', () => ({
        components: {
            Milestone: () => import('@ericmuyser/hyper-ui').then(m => m.Milestone)
        },
        data: () => data.MilestoneData,
        template: `<div class="row">
                <Milestone
                    v-for="(milestone, index) in milestones"
                    :key="index"
                    :milestone="milestone"
                />
            </div>`
    }))
    .add('updates-count', () => ({
        components: {
            UpdatesCount: () => import('@ericmuyser/hyper-ui').then(m => m.UpdatesCount)
        },
        template: `<div class="p-5">
                    <UpdatesCount>
                        5
                    </UpdatesCount>
                </div>`
    }))

storiesOf('Tabs', module)
    .add('default', () => ({
        components: {
            Tabs: () => import('@ericmuyser/hyper-ui').then(m => m.Tabs),
            Tab: () => import('@ericmuyser/hyper-ui').then(m => m.Tab)
        },
        template: `
            <div class="padding-50">
                <Tabs style="color: #fff;">
                    <Tab :tab_id="0">
                        First tab
                    </Tab>
                    <Tab :tab_id="1">
                        Wwww
                    </Tab>
                    <Tab :tab_id="2">
                        12345
                    </Tab>
                </Tabs>
            </div>`
    }))
    .add('Tabs Names', () => ({
        components: {
            Tabs: () => import('@ericmuyser/hyper-ui').then(m => m.Tabs),
            Tab: () => import('@ericmuyser/hyper-ui').then(m => m.Tab)
        },
        template: `
            <div class="padding-50">
                <Tabs
                    style="color: #fff;"
                    :tab_names="['Custom tab One', 'Second', 'Im third tab']"
                >
                    <Tab :tab_id="0">
                        First tab
                    </Tab>
                    <Tab :tab_id="1">
                        Wwww
                    </Tab>
                    <Tab :tab_id="2">
                        12345
                    </Tab>
                </Tabs>
            </div>`
    }))
    .add('Custom Navigation', () => ({
        components: {
            Tabs: () => import('@ericmuyser/hyper-ui').then(m => m.Tabs),
            Tab: () => import('@ericmuyser/hyper-ui').then(m => m.Tab)
        },
        data() {
            return {
                activeTab: 1
            }
        },
        template: `
            <div class="padding-50">
                <Tabs
                    style="color: #fff;"
                    :activeTabProp="activeTab"
                >
                    <template slot="nav">
                        <button @click="activeTab = 1">Tab 1</button>
                        <button @click="activeTab = 2">Tab 2</button>
                        <button @click="activeTab = 3">Tab 3</button>
                        <button @click="activeTab = 4">Tab 4</button>
                    </template>
                    <Tab :tab_id="1">
                        First tab
                    </Tab>
                    <Tab :tab_id="2">
                        Wwww
                    </Tab>
                    <Tab :tab_id="3">
                        12345
                    </Tab>
                    <Tab :tab_id="4">
                        Fourth tab
                    </Tab>
                </Tabs>
            </div>`
    }))
    .add('Locked Tab', () => ({
        components: {
            Tabs: () => import('@ericmuyser/hyper-ui').then(m => m.Tabs),
            Tab: () => import('@ericmuyser/hyper-ui').then(m => m.Tab)
        },
        data() {
            return {
                lockedStep: 1,
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
                <Tabs
                    style="color: #fff;"
                    :lockedTab="lockedTab"
                >
                    <Tab :tab_id="0">
                        First tab
                    </Tab>
                    <Tab :tab_id="1">
                        Second tab
                    </Tab>
                    <Tab :tab_id="2">
                        Third tab
                    </Tab>
                    <Tab :tab_id="3">
                        Fourth tab
                    </Tab>
                </Tabs>
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
            Tabs: () => import('@ericmuyser/hyper-ui').then(m => m.Tabs),
            Tab: () => import('@ericmuyser/hyper-ui').then(m => m.Tab)
        },
        data() {
            return {
                lockedStep: 1
            }
        },
        template: `
            <div class="padding-50">
                <Tabs
                    style="color: #fff;"
                    :lockedStep="lockedStep"
                >
                    <Tab :tab_id="0">
                        First tab
                    </Tab>
                    <Tab :tab_id="1">
                        Second tab
                    </Tab>
                    <Tab :tab_id="2">
                        Third tab
                    </Tab>
                    <Tab :tab_id="3">
                        Fourth tab
                    </Tab>
                </Tabs>
                <button
                    @click="lockedStep++"
                    class="margin-top-50"
                >
                    Unlock next step
                </button>
            </div>`
    }))

storiesOf('Milestones Line', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            MilestonesLine: () => import('@ericmuyser/hyper-ui').then(m => m.MilestonesLine)
        },
        data: () => object('Data', data.MilestonesLine),
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <MilestonesLine :milestones="milestones" />
                </div>
            </div>`
    }))

storiesOf('Sidebar Menu', module)
    .add('Main title', () => ({
        components: {
            SidebarMenu: () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu)
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
        template: `
            <div class="row m-0">
                <div class="col-3 p-4">
                    <SidebarMenu title="Menu Big Title" icon="fab fa-angellist" :links="links" />
                </div>
            </div>
        `
    }))
    .add('Sub title', () => ({
        components: {
            SidebarMenu: () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu)
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
                    <SidebarMenu subTitle="This sub title" subIcon="fas fa-info-circle" :links="links" />
                </div>
            </div>`
    }))
    .add('Single element', () => ({
        components: {
            SidebarMenuItem: () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenuItem)
        },
        template: `<div class="row m-0">
                <div class="col-3 p-4">
                    <SidebarMenuItem
                        :to="{ path: '/' }"
                        title="Suggesting Features">
                        Suggesting Features
                    </SidebarMenuItem>
                </div>
            </div>`
    }))


const injectButtonTemplate = code => `
    <div class="row m-0 p-3">
        <div class="col-12">
            ${code}
        </div>
    </div>
`

storiesOf('Buttons', module)
    .add('default', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <Button @click="testFunction">default</Button>
            <Button size="md" @click="testFunction">default</Button>
            <Button size="lg" @click="testFunction">default</Button>
            <hr />
            <Button status="info">info</Button>
            <Button status="info" size="md">info</Button>
            <Button status="info" size="lg">info</Button>
            <hr />
            <Button status="success">success</Button>
            <Button status="success" size="md">success</Button>
            <Button status="success" size="lg">success</Button>
            <hr />
            <Button status="warning">danger</Button>
            <Button status="warning" size="md">danger</Button>
            <Button status="warning" size="lg">danger</Button>
            <hr />
            <Button status="danger">danger</Button>
            <Button status="danger" size="md">danger</Button>
            <Button status="danger" size="lg">danger</Button>
            <hr />
            <Button status="share">share</Button>
            <Button status="share" size="md">share</Button>
            <Button status="share" size="lg">share</Button>
            <hr />
            <Button status="support">support</Button>
            <Button status="support" size="md">support</Button>
            <Button status="support" size="lg">support</Button>
        `)
    }))
    .add('second type', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <Button status="second-info">info</Button>
            <Button status="second-info" size="md">info</Button>
            <Button status="second-info" size="lg">info</Button>
            <hr />
            <Button status="second-success">success</Button>
            <Button status="second-success" size="md">success</Button>
            <Button status="second-success" size="lg">success</Button>
            <hr />
            <Button status="second-warning">danger</Button>
            <Button status="second-warning" size="md">danger</Button>
            <Button status="second-warning" size="lg">danger</Button>
            <hr />
            <Button status="second-danger">danger</Button>
            <Button status="second-danger" size="md">danger</Button>
            <Button status="second-danger" size="lg">danger</Button>
        `)
    }))
    .add('outline', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <Button status="outline-white">white</Button>
            <Button status="outline-white" size="md">white</Button>
            <Button status="outline-white" size="lg">white</Button>
            <hr />
            <Button status="outline-info">info</Button>
            <Button status="outline-info" size="md">info</Button>
            <Button status="outline-info" size="lg">info</Button>
            <hr />
            <Button status="outline-success">success</Button>
            <Button status="outline-success" size="md">success</Button>
            <Button status="outline-success" size="lg">success</Button>
            <hr />
            <Button status="outline-warning">danger</Button>
            <Button status="outline-warning" size="md">danger</Button>
            <Button status="outline-warning" size="lg">danger</Button>
            <hr />
            <Button status="outline-danger">danger</Button>
            <Button status="outline-danger" size="md">danger</Button>
            <Button status="outline-danger" size="lg">danger</Button>
            <hr />
            <Button status="outline-share">share</Button>
            <Button status="outline-share" size="md">share</Button>
            <Button status="outline-share" size="lg">share</Button>
            <hr />
            <Button status="outline-support">support</Button>
            <Button status="outline-support" size="md">support</Button>
            <Button status="outline-support" size="lg">support</Button>
        `)
    }))
    .add('gradient', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <Button status="gradient-info">info</Button>
            <Button status="gradient-info" size="md">info</Button>
            <Button status="gradient-info" size="lg">info</Button>
            <hr />
            <Button status="gradient-success">success</Button>
            <Button status="gradient-success" size="md">success</Button>
            <Button status="gradient-success" size="lg">success</Button>
            <hr />
            <Button status="gradient-warning">danger</Button>
            <Button status="gradient-warning" size="md">danger</Button>
            <Button status="gradient-warning" size="lg">danger</Button>
            <hr />
            <Button status="gradient-danger">danger</Button>
            <Button status="gradient-danger" size="md">danger</Button>
            <Button status="gradient-danger" size="lg">danger</Button>
        `)
    }))
    .add('[options] - swap direction', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        template: injectButtonTemplate(`
            <Button status="info" swapDirection>direction swapped</Button>
            <Button status="info" size="md" swapDirection>direction swapped</Button>
            <Button status="info" size="lg" swapDirection>direction swapped</Button>
        `)
    }))
    .add('[options] - swap order', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        template: injectButtonTemplate(`
            <Button status="success" swapOrder>success</Button>
        `)
    }))
    .add('[options] - swap order & direction', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        template: injectButtonTemplate(`
            <Button status="info" size="lg" swapDirection swapOrder>order & direction swapped</Button>
        `)
    }))
    .add('[options] - hide icon', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        template: injectButtonTemplate(`
            <Button status="success" iconHide>success</Button>
        `)
    }))
    .add('[options] - emoji', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        template: injectButtonTemplate(`
            <Button status="success">Message 👺👻👽</Button>
        `)
    }))
    .add('[options] - custom icon', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        template: injectButtonTemplate(`
            <Button status="success" icon="anchor">success!</Button>
        `)
    }))
    .add('[options] - button tag', () => ({
        components: {
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        template: injectButtonTemplate(`
            <Button status="danger" tag="button">Im button</Button>
        `)
    }))
    .add('read more', () => ({
        components: {
            LoadMore: () => import('@ericmuyser/hyper-ui').then(m => m.LoadMore)
        },
        template: `
            <div class="p-5" style="width: 400px"><LoadMore /></div>
        `
    }))
    .add('arrows', () => ({
        components: {
            ButtonArrows: () => import('@ericmuyser/hyper-ui').then(m => m.ButtonArrows)
        },
        template: `
            <div class="padding-50">
                <ButtonArrows size="sm"/>
                <ButtonArrows />
                <ButtonArrows size="lg"/>
                <ButtonArrows size="xl"/>
            </div>
        `
    }))
    .add('arrows - colorized', () => ({
        components: {
            ButtonArrows: () => import('@ericmuyser/hyper-ui').then(m => m.ButtonArrows)
        },
        template: `
            <div class="padding-50">
                <ButtonArrows colorized/>
            </div>
        `
    }))
    .add('arrows - content', () => ({
        components: {
            ButtonArrows: () => import('@ericmuyser/hyper-ui').then(m => m.ButtonArrows)
        },
        template: `
            <div class="padding-50">
                <ButtonArrows colorized>
                    +319
                </ButtonArrows>
            </div>
        `
    }))

storiesOf('Money Info', module)
    .add('default', () => ({
        components: {
            MoneyInfo: () => import('@ericmuyser/hyper-ui').then(m => m.MoneyInfo)
        },
        template: `
        <div class="row m-0 p-3">
            <MoneyInfo label="Spent" percent="63" amount="555.999" goal="1555.999" />
        </div>
        `
    }))

storiesOf('Checkbox', module)
    .add('Single checkbox', () => ({
        components: {
            Checkbox: () => import('@ericmuyser/hyper-ui').then(m => m.Checkbox)
        },
        data() {
            return {
                value: true
            }
        },
        template: `
        <div class="row m-0 p-3">
            <Checkbox id="test_check" v-model="value">This is the test checkbox</Checkbox>
        </div>
        `
    }))
    .add('Checkbox Group', () => ({
        components: {
            Checkbox: () => import('@ericmuyser/hyper-ui').then(m => m.Checkbox),
            CheckboxGroup: () => import('@ericmuyser/hyper-ui').then(m => m.CheckboxGroup),
        },
        template: `
        <div class="row m-0 p-3">
            <CheckboxGroup title="Group Title">
                <Checkbox id="test_check_1">This is the test checkbox</Checkbox>
                <Checkbox id="test_check_2">This is the test checkbox</Checkbox>
                <Checkbox id="test_check_3">This is the test checkbox</Checkbox>
                <Checkbox id="test_check_4">This is the test checkbox</Checkbox>
            </CheckboxGroup>
        </div>
        `
    }))

storiesOf('Tooltips', module)
    .add('dark', () => ({
        components: {
            Tooltip: () => import('@ericmuyser/hyper-ui').then(m => m.Tooltip)
        },
        template: `
            <div class="row p-5">
                <div class="col-4 text-center">
                    <Tooltip name="Hover Me(left Position)!" position="left" :lightStyle='false'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Tooltip>
                </div>
                <div class="col-4 text-center">
                    <Tooltip name="Hover Me(Center Position)!" position="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Tooltip>
                </div>
                <div class="col-4 text-center">
                    <Tooltip name="Hover Me(Right Position)!" position="right" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Tooltip>
                </div>
            </div>
        `
    }))
    .add('light', () => ({
        components: {
            Tooltip: () => import('@ericmuyser/hyper-ui').then(m => m.Tooltip)
        },
        template: `
            <div class="row p-5">
                <div class="col-4 text-center">
                    <Tooltip name="Hover Me(left Position)!" position="left" :lightStyle='true' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Tooltip>
                </div>
                <div class="col-4 text-center">
                    <Tooltip name="Hover Me(Center Position)!" position="center" :lightStyle='true' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Tooltip>
                </div>
                <div class="col-4 text-center">
                    <Tooltip name="Hover Me(Right Position)!" position="right" :lightStyle='true' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Tooltip>
                </div>
            </div>
        `
    }))
    .add('custom content', () => ({
        components: {
            Tooltip: () => import('@ericmuyser/hyper-ui').then(m => m.Tooltip)
        },
        template: `
            <div class="row p-5">
                <div class="col-6 text-center">
                    <Tooltip name="Click Me(Custom content)!" type="click" position="left" :lightStyle='true'>
                        <p class="p-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <p class="p-0 m-0">Lipsum generator.</p>
                        <a href="#" class="btn btn-sm btn-danger mt-2">Some link</a>
                    <Tooltip/>
                </div>
                <div class="col-6 text-center">
                    <Tooltip name="Hover Me(Custom content)!" position="center" :lightStyle='true'>
                        <p class="p-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <p class="p-0 m-0">Lipsum generator.</p>
                    <Tooltip/>
                </div>
            </div>
        `
    }))

storiesOf('Tooltip Universal', module)
    .add('default', () => ({
        components: {
            TooltipUniversal: () => import('@ericmuyser/hyper-ui').then(m => m.TooltipUniversal)
        },
        template: `
            <div class="padding-50">
                <TooltipUniversal
                    title="Some epic title!"
                    text="Tooltip description goes here :) 👻👽"
                    class="margin-top-50"
                >
                    This content was wrapped around 'tooltip-universal' component tags
                </TooltipUniversal>
            </div>
        `
    }))
    .add('themes', () => ({
        components: {
            TooltipUniversal: () => import('@ericmuyser/hyper-ui').then(m => m.TooltipUniversal)
        },
        template: `
            <div class="padding-50">
                <div>
                    <TooltipUniversal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="bottom"
                    >
                        <h2>Light (by default)</h2>
                    </TooltipUniversal>
                </div>
                <div>
                    <TooltipUniversal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        theme="dark"
                        position="bottom"
                    >
                        <h2>Dark</h2>
                    </TooltipUniversal>
                </div>
            </div>
        `
    }))
    .add('positions', () => ({
        components: {
            TooltipUniversal: () => import('@ericmuyser/hyper-ui').then(m => m.TooltipUniversal)
        },
        template: `
            <div class="padding-50">
                <div>
                    <TooltipUniversal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        class="margin-top-50"
                    >
                        <h2>Top (by default)</h2>
                    </TooltipUniversal>
                </div>
                <div>
                    <TooltipUniversal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="right"
                    >
                        <h2>Right</h2>
                    </TooltipUniversal>
                </div>
                <div>
                    <TooltipUniversal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="bottom"
                    >
                        <h2>Bottom</h2>
                    </TooltipUniversal>
                </div>
                <div>
                    <TooltipUniversal
                        title="Some epic title!"
                        text="Tooltip description goes here :) 👻👽"
                        position="left"
                    >
                        <h2>Left</h2>
                    </TooltipUniversal>
                </div>
            </div>
        `
    }))
    .add('without icon', () => ({
        components: {
            TooltipUniversal: () => import('@ericmuyser/hyper-ui').then(m => m.TooltipUniversal)
        },
        template: `
            <div class="padding-50">
                <TooltipUniversal
                    title="Some epic title!"
                    text="Tooltip description goes here :) 👻👽"
                    position="bottom"
                    iconHide
                >
                    <h2>I have no questionmark icon</h2>
                </TooltipUniversal>
            </div>
        `
    }))
    .add('any content', () => ({
        components: {
            TooltipUniversal: () => import('@ericmuyser/hyper-ui').then(m => m.TooltipUniversal)
        },
        template: `
            <div class="padding-50">
                <h2>Tooltip can take any content between its tags, like the image below or other components</h2>
                <TooltipUniversal
                    title="Some epic title!"
                    text="Tooltip description goes here :) 👻👽"
                    position="bottom"
                >
                    <img
                        width="150px"
                        src="https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.1920x1080.jpg?t=1529405012"
                    />
                </TooltipUniversal>
            </div>
        `
    }))
    .add('custom tooltip', () => ({
        components: {
            TooltipUniversal: () => import('@ericmuyser/hyper-ui').then(m => m.TooltipUniversal)
        },
        template: `
            <div class="padding-50">
                <h2>You create custom tooltip with template slot</h2>
                <TooltipUniversal position="right">
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
                </TooltipUniversal>
            </div>
        `
    }))

storiesOf('Activity Chart', module)
    .add('default', () => ({
        components: {
            ActivityChart: () => import('@ericmuyser/hyper-ui').then(m => m.ActivityChart)
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <ActivityChart title="Activity Chart" :years="years" />
            </div>
        `
    }))
    .add('medium size', () => ({
        components: {
            ActivityChart: () => import('@ericmuyser/hyper-ui').then(m => m.ActivityChart)
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <ActivityChart title="Activity Chart" :years="years" size="md" />
            </div>
        `
    }))
    .add('small size', () => ({
        components: {
            ActivityChart: () => import('@ericmuyser/hyper-ui').then(m => m.ActivityChart)
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <ActivityChart title="Activity Chart" :years="years" size="sm" />
            </div>
        `
    }))
    .add('extra small size', () => ({
        components: {
            ActivityChart: () => import('@ericmuyser/hyper-ui').then(m => m.ActivityChart)
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <ActivityChart title="Activity Chart" :years="years" size="xs" />
            </div>
        `
    }))

storiesOf('Popup', module)
    .add('default', () => ({
        components: {
            Popup: () => import('@ericmuyser/hyper-ui').then(m => m.Popup),
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
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
                <Button @click="showModalHandler">Show modal</Button>
                <Popup :activated="modalActive" @close="close" ref="modal" title="Default" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <Button status="danger">Cancel</Button>
                            <Button status="success">Confirm</Button>
                        </div>
                    </template>
                </Popup>
            </div>
        `
    }))
    .add('warning', () => ({
        components: {
            Popup: () => import('@ericmuyser/hyper-ui').then(m => m.Popup),
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler() {
                this.modalActive = !this.modalActive
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!')
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is warning popup</h3>
                <Button @click="showModalHandler">Show modal</Button>
                <Popup :activated="modalActive" @close="close" ref="modal" title="Warning" type="warning" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <Button status="danger">Cancel</Button>
                            <Button status="success">Confirm</Button>
                        </div>
                    </template>
                </Popup>
            </div>
        `
    }))
    .add('danger', () => ({
        components: {
            Popup: () => import('@ericmuyser/hyper-ui').then(m => m.Popup),
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!')
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is danger popup</h3>
                <Button @click="showModalHandler">Show modal</Button>
                <Popup :activated="modalActive" @close="close" ref="modal" title="Danger" type="danger" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <Button status="danger">Cancel</Button>
                            <Button status="success">Confirm</Button>
                        </div>
                    </template>
                </Popup>
            </div>
        `
    }))
    .add('info', () => ({
        components: {
            Popup: () => import('@ericmuyser/hyper-ui').then(m => m.Popup),
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!')
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is info popup</h3>
                <Button @click="showModalHandler">Show modal</Button>
                <Popup :activated="modalActive" @close="close" ref="modal" title="Info" type="info" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.
                    <template slot="footer">
                        <div class="text-right w-100">
                            <Button status="danger">Cancel</Button>
                            <Button status="success">Confirm</Button>
                        </div>
                    </template>
                </Popup>
            </div>
        `
    }))
    .add('success', () => ({
        components: {
            Popup: () => import('@ericmuyser/hyper-ui').then(m => m.Popup),
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!')
                this.showModalHandler()
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is success popup</h3>
                <Button @click="showModalHandler">Show modal</Button>
                <Popup :activated="modalActive" @close="close" ref="modal" type="success" title="Success" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <Button status="danger">Cancel</Button>
                            <Button status="success">Confirm</Button>
                        </div>
                    </template>
                </Popup>
            </div>
        `
    }))
    .add('changelog', () => ({
        components: {
            BasicPopup: () => import('@ericmuyser/hyper-ui').then(m => m.BasicPopup),
            DottedList: () => import('@ericmuyser/hyper-ui').then(m => m.DottedList),
            HeadingBarWithSimpleColor: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBarWithSimpleColor),
            EmojiSingle: () => import('@ericmuyser/hyper-ui').then(m => m.EmojiSingle)
        },
        data() {
            return {
                pensive: 0,
                smile: 0,
                neutralFace: 0
            }
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <BasicPopup :activated="true">
                    <div class="h4" slot="header">Our Updates</div>
                    <template slot="body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida arcu quis tellus imperdiet tincidunt.
                            Sed iaculis mauris vitae eros fringilla, id congue libero mattis.
                        </p>

                        <HeadingBarWithSimpleColor colorCode="#5EA72B" textAlign="left" class="margin-bottom-15 margin-top-10">
                            <strong>This is the Title</strong>
                        </HeadingBarWithSimpleColor>
                        <DottedList>
                            <li>Donec sapien velit, vulputate</li>
                            <li>Nulla ut fermentum turpis, a fermentum enim.</li>
                            <li>Praesent feugiat erat diam, tincidunt cursus ligula pulvinar id.</li>
                        </DottedList>

                        <HeadingBarWithSimpleColor colorCode="#FADC72" textAlign="left" class="margin-bottom-15 margin-top-20">
                            <strong>Aliquam nulla mi, mattis ut nisl nec</strong>
                        </HeadingBarWithSimpleColor>
                        <DottedList>
                            <li>Praesent in mauris nec felis dignissim viverra in at diam. Mauris congue aliquet tempus.</li>
                            <li>Morbi ut consequat eros</li>
                            <li>Aenean imperdiet lobortis tristique.</li>
                        </DottedList>

                        <HeadingBarWithSimpleColor colorCode="#F75D5D" textAlign="left" class="margin-bottom-15 margin-top-20">
                            <strong>Sed vitae lobortis quam, non porta est</strong>
                        </HeadingBarWithSimpleColor>
                        <p>
                            Donec urna nulla, condimentum vel quam quis, tempus pellentesque nibh. Vivamus gravida purus
                            at nisl molestie commodo. Praesent dictum et purus in varius. Aenean imperdiet lobortis tristique.
                            Phasellus eleifend dolor non mi tempor, quis sagittis massa vehicula. Pellentesque eget enim quis
                            dui volutpat varius quis eget elit.
                        </p>
                    </template>
                    <template slot="footer">
                        <div class="d-flex align-items-center justify-content-center pt-2 pb-4 w-100">
                            <EmojiSingle emoji="pensive" class="mx-1" :count="pensive" @click="pensive += 1" />
                            <EmojiSingle emoji="neutral_face" class="mx-2" :count="neutralFace" @click="neutralFace += 1" />
                            <EmojiSingle emoji="smile" class="mx-1" :count="smile" @click="smile += 1" />
                        </div>
                        <Input placeholder="Send us your feadback" bgColor="rgba( 255, 255, 255, .1)" />
                        <small class="w-100 text-center" hidden>
                            Missed an Updates? <Button status="plain">Check out our previous change log.</Button>
                        </small>
                    </template>
                </BasicPopup>
            </div>
        </div>

        `
    }))
    .add('terms', () => ({
        components: {
            TermsPopup: () => import('@ericmuyser/hyper-ui').then(m => m.TermsPopup)
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <TermsPopup :activated="true" width="600">
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
                </TermsPopup>
            </div>
        </div>

        `
    }))
    .add('play', () => ({
        components: {
            PlayPopup: () => import('@ericmuyser/hyper-ui').then(m => m.PlayPopup)
        },
        data() {
            return {
                activated: false
            }
        },
        template: `<div class="p-4">
                        <Button @click=" activated = true ">Play Now</Button> 
                        <PlayPopup :activated="true" @close=" activated = !activated " />
                    </div>`
    }))
    .add('Add to Collection', () =>({
        components: {
            AddCollectionPopup: () => import('@ericmuyser/hyper-ui').then(m => m.AddCollectionPopup),
        },
        data() {
            return {
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
                image: 'https://via.placeholder.com/250',
                name: 'Magic Plate Armor',
                description: 'Cras in dui eget nulla vulputate finibus sed id ligula.',
            }
        },
        template: `<div class="m-4"><AddCollectionPopup :activated="true" :collections="collections" :image="image" :name="name" :description="description" /></div>`
    }))

storiesOf('Range Slider', module)
    .add('default', () => ({
        components: {
            RangeSlider: () => import('@ericmuyser/hyper-ui').then(m => m.RangeSlider)
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
                <RangeSlider :min="min" :max="max" v-model.value="value" />
                <hr />
                min - {{ min }}<br/>
                max - {{ max }}<br />
                value - {{ value }}
            </div>
         </div>
        `
    }))

const assetsList = [
    {
        name: 'some item name',
        price: {
            min: 0.99,
            max: 9.99,
            current: 2.99
        },
        count: '240.000',
            image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            min: 0.99,
            max: 9.99,
            current: 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            min: 0.99,
            max: 9.99,
            current: 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            min: 0.99,
            max: 9.99,
            current: 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            min: 0.99,
            max: 9.99,
            current: 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    },
    {
        name: 'some another item name',
        price: {
            min: 0.99,
            max: 9.99,
            current: 2.99
        },
        count: '824.000',
        image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
    }
]

storiesOf('Assets Grid', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            AssetsGrid: () => import('@ericmuyser/hyper-ui').then(m => m.AssetsGrid)
        },
        data() {
            return object('Data', {
                assetsList: assetsList
            })
        },
        template: `
            <AssetsGrid :list="assetsList" />
        `
    }), {viewport: 'desktop'})

storiesOf('Assets Overview Popup', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            AssetPopup: () => import('@ericmuyser/hyper-ui').then(m => m.AssetPopup)
        },
        data() {
            return object('Data', {
                    image: 'https://via.placeholder.com/300',
                    id: '123',
                    name: 'Asset title',
                    productName: 'Asset product name',
                    acceptOffers: true,
                    metadata: [
                            {
                                    label: "type",
                                    text: "Legendary Two Handed Sword"
                            },
                            {
                                    label: "average dps",
                                    text: "2,903.6"
                            },
                            {
                                    label: "Damage Range",
                                    text: "2193-2880"
                            },
                            {
                                    label: "Attack speed",
                                    text: "1.15"
                            },
                            {
                                    label: "Bonus 1",
                                    text: "+1379-1679 Damage, +9% Damage, +1121 strenght"
                            },
                            {
                                    label: "Bonus 2",
                                    text: "Monster kills grant +151 experiance"
                            },
                            {
                                    label: "Level Requirement",
                                    text: "70"
                            },
                            {
                                    label: "Item Durability",
                                    text: "40/41"
                            }
                    ],
                    price: {
                            min: 0.99,
                            max: 9.99,
                            current: 2.99
                    }
            })
        },
        template: `
            <div class="row m-0 p-3">
                <AssetPopup
                    :image="image"
                    :id="id"
                    :name="name"
                    :productName="productName"
                    :priceMin="price.min"
                    :priceMax="price.max"
                    :priceCurrent="price.current"
                    :acceptOffers="acceptOffers"
                    :metadata="metadata" />
            </div>
        `
    }))

storiesOf('Switch', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            Switch: () => import('@ericmuyser/hyper-ui').then(m => m.Switch)
        },
        template: `
         <div class="row m-0 p-3">
             <Switch :checked=true label="Label text" class="mr-5"/>
             <Switch :checked=true customLabel>
                Custom label
            </Switch>
         </div>
        `
    }))
    .add('changed label size', () => ({
        components: {
            Switch: () => import('@ericmuyser/hyper-ui').then(m => m.Switch)
        },
        template: `
         <div class="row m-0 p-3">
             <Switch label="Some text" labelPosition="right" labelSize="22px" />
         </div>
        `
    }))
    .add('large', () => ({
        components: {
            Switch: () => import('@ericmuyser/hyper-ui').then(m => m.Switch)
        },
        template: `
         <div class="row m-0 p-3">
             <Switch size="lg" :checked=true />
         </div>
        `
    }))

storiesOf('Assets List', module)
    .addDecorator(withKnobs)
    .add('type 1', () => ({
        components: {
            AssetsList: () => import('@ericmuyser/hyper-ui').then(m => m.AssetsList)
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
             <AssetsList :items="items" itemInRow="5" />
         </div>
        `
    }))
    .add('type 2', () => ({
        components: {
            AssetsListDetail: () => import('@ericmuyser/hyper-ui').then(m => m.AssetsListDetail)
        },
        data() {
            return object('Data', {
                items: [
                    {
                        image: 'https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de',
                        name: 'Magic Plate Armor',
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
                            name: 'Magic Chuck',
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
             <AssetsListDetail :items="items" itemInRow="4" />
         </div>
        `
    }))

storiesOf('Block', module)
    .add('default', () => ({
        components: {
            Block: () => import('@ericmuyser/hyper-ui').then(m => m.Block)
        },
        template: `
         <div class="row m-0 p-3">
             <Block title="This is block title" class="col-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vel arcu sit amet erat vestibulum volutpat.
                Ut volutpat enim vel augue luctus luctus</p>
                <p>Curabitur et molestie eros. Duis sodales ante velit,
                ut fringilla turpis dictum sit amet. Praesent quis lacus
                ac tellus vehicula commodo sit amet sit amet ex.</p>
            </Block>
         </div>
        `
    }))
    .add('simple', () => ({
        components: {
            SimpleBlock: () => import('@ericmuyser/hyper-ui').then(m => m.SimpleBlock)
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-4">
                 <SimpleBlock image="https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/od/ODPQGI4NN71N1544053040567.jpg" imgHeight="200px" hovered>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel arcu sit amet erat vestibulum volutpat.
                    Ut volutpat enim vel augue luctus luctus</p>
                </SimpleBlock>
            </div>
         </div>
        `
    }))
    .add('gradient', () => ({
        components: {
            Block: () => import('@ericmuyser/hyper-ui').then(m => m.Block)
        },
        template: `
             <div class="row m-0 p-3">
                 <Block title="This is block title" class="col-8" :bgGradient="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel arcu sit amet erat vestibulum volutpat.
                    Ut volutpat enim vel augue luctus luctus</p>
                    <p>Curabitur et molestie eros. Duis sodales ante velit,
                    ut fringilla turpis dictum sit amet. Praesent quis lacus
                    ac tellus vehicula commodo sit amet sit amet ex.</p>
                </Block>
             </div>
            `
    }))
    .add('only content bg', () => ({
        components: {
            Block: () => import('@ericmuyser/hyper-ui').then(m => m.Block)
        },
        template: `
             <div class="row m-0 p-3">
                 <Block title="This is block title" class="col-8" :bgGradient="true" :onlyContentBg="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel arcu sit amet erat vestibulum volutpat.
                    Ut volutpat enim vel augue luctus luctus</p>
                    <p>Curabitur et molestie eros. Duis sodales ante velit,
                    ut fringilla turpis dictum sit amet. Praesent quis lacus
                    ac tellus vehicula commodo sit amet sit amet ex.</p>
                </Block>
             </div>
            `
    }))

storiesOf('Modal', module)
    .add('image', () => ({
        components: {
            Modal: () => import('@ericmuyser/hyper-ui').then(m => m.Modal)
        },
        template: `
            <Modal>
                <img
                    src="http://gamechanger.co.ke/wp-content/uploads/2016/09/The-Witcher-3-Wild-Hunt-Game-of-the-Year-Edition3.jpg"
                />
            </Modal>
        `
    }))
    .add('text', () => ({
        components: {
            Modal: () => import('@ericmuyser/hyper-ui').then(m => m.Modal)
        },
        template: `
            <Modal>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn</p>
            </Modal>
        `
    }))
    .add('custom', () => ({
        components: {
            CustomModal: () => import('@ericmuyser/hyper-ui').then(m => m.CustomModal)
        },
        template: `
         <div class="row m-0 p-3">
             <div class="col-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch modal
                </button>
            </div>
            <CustomModal id="exampleModal" title="Some modal title">
                <template slot="body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id rhoncus turpis.</p>
                    <p>Aliquam nec blandit mi. Integer sed neque urna.</p>
                </template>
                <template slot="footer">
                    <a href="#" class="btn btn-sm btn-success">Some Link</a>
                </template>
            </CustomModal>
         </div>
        `
    }))

storiesOf('Dropdown', module)
    .add('default', () => ({
        components: {
            DropdownMenu: () => import('@ericmuyser/hyper-ui').then(m => m.DropdownMenu)
        },
        template: `
         <div class="row m-0 p-3">
            <DropdownMenu id="test" name="Filter by Genre" :showBg="true">
                <a href="#">RPG</a>
                <a href="#">ACTION</a>
                <a href="#">Cars</a>
            </DropdownMenu>
         </div>
        `
    }))
    .add('post dropdown', () => ({
        components: {
            DropdownMenu: () => import('@ericmuyser/hyper-ui').then(m => m.DropdownMenu)
        },
        template: `
        <div class="row m-0 p-3">
            <DropdownMenu />
        </div>
        `
    }))
    .add('custom content', () => ({
        components: {
            DropdownMenu: () => import('@ericmuyser/hyper-ui').then(m => m.DropdownMenu)
        },
        template: `
            <div class="row m-0 p-3">
                <DropdownMenu title="Dropdown">
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
                </DropdownMenu>
            </div>
        `
    }))
    .add('currency', () => ({
        components: {
            CurrencyDropdown: () => import('@ericmuyser/hyper-ui').then(m => m.CurrencyDropdown)
        },
        data() {
            return {
                currencies: [
                    {
                        code: "USD",
                        symbol: "$",
                        name: "United States Dollar",
                        country: "us"

                    },
                    {
                        code: "RUB",
                        symbol: "$",
                        name: "United States Dollar",
                        country: "ru"

                    },
                    {
                        code: "BTC",
                        symbol: "B",
                        name: "Bitcoin",
                        country: ""

                    },
                    {
                        code: "ETH",
                        symbol: "E",
                        name: "Ethereum"

                    },
                    {
                        code: "DAI",
                        symbol: "D",
                        name: "Dau"
                    }
                ],
                currency: {
                    code: "USD",
                    symbol: "$",
                    name: "United States Dollar",
                    country: "us"
                },
            }
        },
        template: `
            <div class="row m-0 p-3">
                <CurrencyDropdown :currentCurrency="currency" :currencies="currencies" />
            </div>
        `
    }))
    .add('languages', () => ({
        components: {
            LanguagesDropdown: () => import('@ericmuyser/hyper-ui').then(m => m.LanguagesDropdown)
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
                <LanguagesDropdown :currentLanguage="currentLanguage" :languages="languages" />
            </div>
        `
    }))

storiesOf('Frequently traded assets', module)
    .add('default', () => ({
        components: {
            TradedAssets: () => import('@ericmuyser/hyper-ui').then(m => m.TradedAssets),
            DropdownMenu: () => import('@ericmuyser/hyper-ui').then(m => m.DropdownMenu)
        },
        data: () => object('Data', data.TradedAssets),
        template: `
         <div class="row m-0 p-3">
             <div class="col-4">
                <TradedAssets :items="frequentlyTradedAssets" assets_url="#some_url_here">
                    <template slot="filter">
                        <DropdownMenu name="Most valuable" id="most_valuable">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </DropdownMenu>
                    </template>
                </TradedAssets>
            </div>
         </div>
        `
    }))

storiesOf('Game Plans', module)
    .add('default', () => ({
        components: {
            GamePlan: () => import('@ericmuyser/hyper-ui').then(m => m.GamePlan)
        },
        data() {
            return object('Data', {
                plans: [
                    {
                        title: "Play Now",
                        link: "#"
                    },
                    {
                        title: "3 Month Subscription",
                        price: "12.95",
                        link: ""
                    },
                    {
                        title: "1 Year Subscription",
                        price: "120.95",
                        link: ""
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-5">
                <GamePlan
                    v-for="(plan, index) in plans"
                    :key="index"
                    :plan="plan"
                />
            </div>
         </div>
         `
    }))

storiesOf('Games Grid', module)
    .addDecorator(withKnobs)
    .add('with description', () => ({
        components: {
            GamesGrid: () => import('@ericmuyser/hyper-ui').then(m => m.GamesGrid)
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <GamesGrid
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
            GamesGridSimple: () => import('@ericmuyser/hyper-ui').then(m => m.GamesGridSimple)
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <GamesGridSimple
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

const injectHBarTemp = code => `
    <div class="row">
        <div class="col-8 p-5">
            ${code}
        </div>
    </div>
`

storiesOf('Block Title', module)
    .add('default', () => ({
        components: {
            HeadingBar: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar)
        },
        template: injectHBarTemp(`
            <HeadingBar name="This is the Title" />
        `)
    }))
    .add('with background', () => ({
        components: {
            HeadingBar: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar)
        },
        template: injectHBarTemp(`
            <HeadingBar name="This is the Title" :showBackground="true" />
        `)
    }))
    .add('with arrows', () => ({
        components: {
            HeadingBar: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar)
        },
        template: injectHBarTemp(`
            <HeadingBar name="This is the Title" :showActions="true" :showArrows="true" />
        `)
    }))
    .add('with more button', () => ({
        components: {
            HeadingBar: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar)
        },
        template: injectHBarTemp(`
            <HeadingBar name="This is the Title" :showActions="true" more="#some_link"  />
        `)
    }))
    .add('with filters', () => ({
        components: {
            HeadingBar: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar),
            HeadingBarWithAdditionalAction: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBarWithAdditionalAction)
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
            <HeadingBar name="This is the Title" :showActions="true">
                <template slot="additional-action">
                    <HeadingBarWithAdditionalAction name="Reviews" icon="fas fa-trophy" @click_up="upClick"  @click_down="downClick" />
                    <HeadingBarWithAdditionalAction name="Price" icon="fas fa-dollar-sign" />
                </template>
            </HeadingBar>
        `)
    }))
    .add('with tabs', () => ({
        components: {
            HeadingBar: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBar)
        },
        template: injectHBarTemp(`
            <HeadingBar>
                <template slot="heading-tabs">
                    <a href="#">First tab</a>
                    <a href="#" class="active">Second tab</a>
                    <a href="#">Third tab</a>
                </template>
            </HeadingBar>
        `)
    }))
    .add('colored', () => ({
        components: {
            HeadingBarWithSimpleColor: () => import('@ericmuyser/hyper-ui').then(m => m.HeadingBarWithSimpleColor)
        },
        template: injectHBarTemp(`
            <HeadingBarWithSimpleColor colorCode="#f60" textAlign="center">
                <strong>This is the Title</strong>
            </HeadingBarWithSimpleColor>
        `)
    }))

storiesOf('News List', module)
    .add('default', () => ({
        components: {
            NewsListNavigation: () => import('@ericmuyser/hyper-ui').then(m => m.NewsListNavigation),
            NewsList: () => import('@ericmuyser/hyper-ui').then(m => m.NewsList),
        },
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        targetType: "product",
                        targetId: 1,
                        tags: [
                            {
                                key: "news",
                                value: "News"
                            }
                        ],
                        heading: "New class and event coming next week!",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        url: "/post/1",
                        date: "2018-07-24T04:09:00.000Z"
                    },
                    {
                        id: 2,
                        targetType: "product",
                        targetId: 1,
                        tags: [
                            {
                                key: "news",
                                value: "News"
                            }
                        ],
                        heading: "New class and event coming next week!",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        url: "/post/1",
                        date: "2016-09-24T04:09:00.000Z"
                    },
                    {
                        id: 3,
                        targetType: "product",
                        targetId: 2,
                        tags: [
                            {
                                key: "news",
                                value: "News"
                            }
                        ],
                        heading: "New class and event coming next week!",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        url: "/post/1",
                        date: "2014-03-24T04:09:00.000Z"
                    },
                    {
                        id: 4,
                        targetType: "product",
                        targetId: 3,
                        tags: [
                            {
                                key: "news",
                                value: "News"
                            }
                        ],
                        heading: "New class and event coming next week!",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                        url: "/post/1",
                        date: "2017-12-24T04:09:00.000Z"
                    }
                ]
            }
        },
        template: `
        <div class="row m-0 p-5">
            <NewsListNavigation :list="posts" />
            <NewsList :articles="posts" />
        </div>
        `
    }))
    .add('single article', () => ({
        components: {
            NewsArticle: () => import('@ericmuyser/hyper-ui').then(m => m.NewsArticle)
        },
        data() {
            return {
                article: {
                    id: 1,
                    targetType: "product",
                    targetId: 1,
                    tags: [
                        {
                            key: "news",
                            value: "News"
                        }
                    ],
                    heading: "New class and event coming next week!",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.",
                    url: "/post/1",
                    date: "2018-07-24T04:09:00.000Z"
                },
            }
        },
        template: `
            <div class="row">
                <div class="col-6">
                    <NewsArticle
                        :heading="article.heading"
                        :date="article.date"
                        :content="article.content"
                        :url="article.url"
                        itemInRow="1" />
                </div>
            </div>
        `
    }))

storiesOf('Pagination', module)
    .add('default', () => ({
        components: {
            Pagination: () => import('@ericmuyser/hyper-ui').then(m => m.Pagination)
        },
        template: `
            <div class="row m-0 p-5">
                <Pagination :pages="15" />
            </div>
        `
    }))
    .add('Limited to 5 pages', () => ({
        components: {
            Pagination: () => import('@ericmuyser/hyper-ui').then(m => m.Pagination)
        },
        template: `
            <div class="row m-0 p-5">
                <Pagination :pages="15" :pagesShow="5"/>
            </div>
        `
    }))
    .add('Debouncer', () => ({
        components: {
            Pagination: () => import('@ericmuyser/hyper-ui').then(m => m.Pagination)
        },
        template: `
            <div class="row m-0 p-5">
                <Pagination :pages="15" :debounce="1000"/>
            </div>
        `
    }))

storiesOf('Product Community', module)
    .add('post', () => ({
        components: {
            ProductCommunityPost: () => import('@ericmuyser/hyper-ui').then(m => m.ProductCommunityPost)
        },
        data: () => data.ProductCommunity,
        template: `
            <div class="row m-0 p-5">
                <div class="col-10">
                    <ProductCommunityPost
                        :id="post.id"
                        :title="post.title"
                        :rate="post.rate"
                        :commentsCount="post.commentsCount"
                        :author="post.author"
                        :contentImg="post.content.img"
                        :contentText="post.content.text"
                        :comments="post.content.comments" />
                </div>
            </div>
        `
    }))
    .add('comment', () => ({
        components: {
            ProductCommunityComment: () => import('@ericmuyser/hyper-ui').then(m => m.ProductCommunityComment)
        },
        data: () => data.ProductCommunity,
        template: `
            <div class="padding-30">
                <ProductCommunityComment
                    :rate="post.content.comments[0].rate"
                    :author="post.content.comments[0].author"
                    :date="post.content.comments[0].date"
                    :text="post.content.comments[0].text" />
            </div>
        `
    }))
    .add('reply', () => ({
        components: {
            ProductCommunityReply: () => import('@ericmuyser/hyper-ui').then(m => m.ProductCommunityReply)
        },
        template: `
            <div class="padding-30">
                <ProductCommunityReply />
            </div>
        `
    }))

storiesOf('Project Card', module)
    .add('default', () => ({
        components: {
            ProjectCard: () => import('@ericmuyser/hyper-ui').then(m => m.ProjectCard)
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
                    <ProjectCard
                        :image="project.img"
                        :description="project.description"
                        :funds="project.funds"
                        :parentImage="project.game.img"
                        :parentName="project.game.title"
                        :parentDeveloper="project.game.developer"
                        :id="project.id"
                        customClass="margin-bottom-20" />
                </div>
            </div>
        `
    }))

storiesOf('Sending Funds(not finished)', module)
    .add('default', () => ({
        components: {
            SendingFundsPopup: () => import('@ericmuyser/hyper-ui').then(m => m.SendingFundsPopup),
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button)
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive
            }
        },
        template: data.SendingFunds.template
    }))

storiesOf('User Card', module)
    .add('default', () => ({
        components: {
            UserCard: () => import('@ericmuyser/hyper-ui').then(m => m.UserCard)
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
                <UserCard
                    :user="user"
                    @updateProfile="(prop, val) => user[prop] = val"
                />
            </div>
            <div class="col-4">
                <UserCard :user="user" previewMode />
            </div>
        </div>
        `
    }))

storiesOf('Gallery', module)
    .add('screen-gallery', () => ({
        components: {
            ScreenGallery: () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBoxItem)
        },
        data() {
            return {
                items: [
                    {
                        src: 'https://cdn.vox-cdn.com/thumbor/-9ezNi6jWxByZiYsLDfoAILAJC4=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/12648875/HowFortniteWonSite.png',
                        overlay: {
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
        template: `<ScreenGallery :items="items" class="col-9"/>`
    }))

const productsCardsData = [
    {
        id: 8,
        value: "Gothic® 3",
        meta: {
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
            developerTags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
        },
        author: "Piranha Bytes",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/901191/movie480.webm?t=1490866901"],
    },
    {
        id: 9,
        value: "The Witcher® 3: Wild Hunt",
        meta: {
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
            developerTags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
        },
        author: "CD PROJEKT RED",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256658589/movie480.webm?t=1528288687"],
    },
    {
        id: 10,
        value: "Fallout 4",
        meta: {
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
            developerTags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
        },
        author: "Bethesda",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256657338/movie480.webm?t=1447378505"],
    }
]

storiesOf('Product Card', module)
    .add('basic', () => ({
        components: {
            ProductCard: () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBoxItem)
        },
        data: () => ({ products: productsCardsData }),
        template: `
            <div class="row">
                <product-card
                    v-for="(product, index) in products"
                    :id="product.id"
                    :mediumTile="product.meta.images.mediumTile"
                    :name="product.name"
                    :shortDescription="product.meta.shortDescription"
                    :developerTags="product.meta.developerTags"
                    class="col-3"
                />
            </div>
        `
    }))
    .add('dynamic', () => ({
        components: {
            ProductCardDynamic: () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBoxItem)
        },
        data: () => ({products: productsCardsData}),
        template: `
            <div class="row">
                <product-card-dynamic
                    v-for="(product, index) in products"
                    :id="product.id"
                    :name="product.name"
                    :price="product.price"
                    :mediumTile="product.meta.images.mediumTile"
                    :video="product.video"
                    :shortDescription="product.shortDescription"
                    :previewImages="product.meta.images.review"
                    :developerTags="product.meta.developerTags"
                    :key="index"
                    class="col-3"
                />
            </div>
        `
    }))
    .add('wrapper', () => ({
        components: {
            ProductsCards: () => import('@ericmuyser/hyper-ui').then(m => m.ProductsCards)
        },
        data: () => ({ products: productsCardsData }),
        template: `
            <div class="p-5">
                <h1 class="text-center text-white">Hover transitions are enabled only on bigger screens</h1>
                <ProductsCards :products="products" />
            </div>
        `
    }))

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
}

storiesOf('Curators Reviews', module)
    .add('review', () => ({
        components: {
            CuratorReview: () => import('@ericmuyser/hyper-ui').then(m => m.PromotionBoxItem)
        },
        data: () => ({review: curatorReview}),
        template: `<CuratorReview :review="review" class="col-3"/>`
    }))
    .add('reviews wrapper', () => ({
        components: {
            CuratorReviews: () => import('@ericmuyser/hyper-ui').then(m => m.CuratorReviews)
        },
        data: () => ({reviews: [curatorReview, curatorReview, curatorReview]}),
        template: `<CuratorReviews :reviews="reviews" class="col-12"/>`
    }))

storiesOf('Images Explorer', module)
    .add('default', () => ({
        components: {
            ImagesExplorer: () => import('@ericmuyser/hyper-ui').then(m => m.ImagesExplorer)
        },
        data: () => object('Data', data.ImagesExplorer),
        template: `<ImagesExplorer :images="images" />`
    }))
    .add('in modal', () => ({
        components: {
            ImagesExplorer: () => import('@ericmuyser/hyper-ui').then(m => m.ImagesExplorer),
            ModalList: () => import('@ericmuyser/hyper-ui').then(m => m.ModalList)
        },
        data: () => object('Data', data.ImagesExplorer),
        template: `
            <ModalList>
                <ImagesExplorer :images="images" />
            </ModalList>
        `
    }))

// import 'swiper/dist/css/swiper.css'
// import {swiper, swiperSlide} from 'vue-awesome-swiper'

storiesOf('Collection', module)
    .add('single item', () => ({
        components: {
            CollectionItem: () => import('@ericmuyser/hyper-ui').then(m => m.CollectionItem)
        },
        data() {
            return {
                id: 44,
                title: 'Collection name',
                user: 'John Doel',
                countNumber: 2741,
                background: 'https://via.placeholder.com/100x100',
                assets: []
            }
        },
        template: `
            <div class="col-3 p-5">
                <CollectionItem
                    :id="id"
                    :name="title"
                    :author="user"
                    :assets="assets"
                    :background="background" />
            </div>
        `
    }))
    .add('list', () => ({
        components: {
            CollectionList: () => import('@ericmuyser/hyper-ui').then(m => m.CollectionList),
            CollectionItem: () => import('@ericmuyser/hyper-ui').then(m => m.CollectionItem),
            Swiper: () => import('@ericmuyser/hyper-ui').then(m => m.Swiper),
            Slide: () => import('@ericmuyser/hyper-ui').then(m => m.Slide)
        },
        data() {
            return {
                items: [
                    {
                        name: 'Collection name',
                        meta: {
                            author: 'John Doel',
                            background: 'https://via.placeholder.com/100x100',
                            assets: []
                        },
                    },
                    {
                        name: 'Collection name',
                        meta: {
                            author: 'John Doel',
                            background: 'https://via.placeholder.com/100x100',
                            assets: []
                        },
                    },
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
                <CollectionList
                    title="Get Started"
                    :collections="items"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tellus in neque porttitor consequat." />
            </div>
        `
    }))

storiesOf('Game Series', module)
    .add('default', () => ({
        components: {
            GameSeries: () => import('@ericmuyser/hyper-ui').then(m => m.GameSeries),
            GameDescription: () => import('@ericmuyser/hyper-ui').then(m => m.GameDescription),
            GameIncludesList: () => import('@ericmuyser/hyper-ui').then(m => m.GameIncludesList)
        },
        data() {
            return {
                id: 34,
                title: 'Product title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                tags: ['Nunc', 'Praesent', 'Vestibulum'],
                images: ['https://via.placeholder.com/400x250', 'https://via.placeholder.com/400x250'],
                price: 33.49,
                list: [
                    {
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    },
                    {
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    },
                    {
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    },
                    {
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    },
                    {
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    },
                    {
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    },
                    {
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    },
                    {
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        },
                    }
                ]
            }
        },
        template: `<div class="p-5" style="width: 900px">
                    <GameSeries>
                        <GameDescription
                        :id="id"
                        :title="title"
                        :description="description"
                        :tags="tags"
                        :images="images"
                        :price="price" />
                        <GameIncludesList :list="list" :showNumber="5" />
                    </GameSeries>
                </div>`
    }))
    .add('description', () => ({
        components: {
            GameDescription: () => import('@ericmuyser/hyper-ui').then(m => m.GameDescription)
        },
        data() {
            return {
                id: 34,
                title: 'Product title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                tags: ['Nunc', 'Praesent', 'Vestibulum'],
                images: ['https://via.placeholder.com/400x250', 'https://via.placeholder.com/400x250'],
                price: 33.49,
            }
        },
        template: `<div class="p-5" style="width: 900px">
            <GameDescription
                :id="id"
                :title="title"
                :description="description"
                :tags="tags"
                :images="images"
                :price="price" />
        </div>`
    }))
    .add('includes item', () => ({
        components: {
            GameIncludesItem: () => import('@ericmuyser/hyper-ui').then(m => m.GameIncludesItem)
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
                        <GameIncludesItem
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
            GameIncludesItem: () => import('@ericmuyser/hyper-ui').then(m => m.GameIncludesItem),
            GameIncludesList: () => import('@ericmuyser/hyper-ui').then(m => m.GameIncludesList)
        },
        data() {
            return {
                list: [
                    {
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                            meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg'
                            }
                        }
                    },
                    {
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                        meta: {
                            images: {
                                mediumTile: 'https://www.licente-jocuri.ro/image/data/440-dragon-age-2-pc-cover.jpeg',
                            }
                        }
                    },
                    {
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://via.placeholder.com/300x430',
                            }
                        }
                    },
                    {
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://upload.wikimedia.org/wikipedia/ru/2/23/DAO-Awakening_cover.jpg',
                            }
                        }
                    },
                    {
                        title: 'Dragon Age: Inquisition',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://b.scdn.gr/images/sku_main_images/004815/4815361/20161114100542_dragon_age_inquisition_pc.jpeg',
                            }
                        }
                    },
                    {
                        title: 'Dragon Age II',
                        company: 'BioWare',
                        stars: 4,
                        meta: {
                            images: {
                                mediumTile: 'https://www.licente-jocuri.ro/image/data/440-dragon-age-2-pc-cover.jpeg',
                            }
                        }
                    },
                    {
                        title: 'Dragon Age Down Of the Seeker',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://via.placeholder.com/300x430',
                            }
                        }
                    },
                    {
                        title: 'Dragon Age Origins',
                        company: 'BioWare',
                        stars: 5,
                        meta: {
                            images: {
                                mediumTile: 'https://upload.wikimedia.org/wikipedia/ru/2/23/DAO-Awakening_cover.jpg'
                            }
                        }
                    }
                ]
            }
        },
        template: `<div class="p-5" style="width: 900px"><GameIncludesList :list="list" :showNumber="5" /></div>`
    }))

storiesOf('Progress Bar', module)
    .add('default', () => ({
        components: {
            ProgressBar: () => import('@ericmuyser/hyper-ui').then(m => m.ProgressBar)
        },
        template: `
            <div class="padding-50">
                <ProgressBar :percentages="74" />
            </div>
        `
    }))
    .add('vertical', () => ({
        components: {
            ProgressBar: () => import('@ericmuyser/hyper-ui').then(m => m.ProgressBar)
        },
        template: `
            <div style="height: 100px; width: 100px" class="m-4">
                <ProgressBar direction="vertical" :percentages="40" style="height: 100px" />
            </div>
        `
    }))
    .add('calculate percentages', () => ({
        components: {
            ProgressBar: () => import('@ericmuyser/hyper-ui').then(m => m.ProgressBar)
        },
        data() {
            return {
                values: { reached: 391, goal: 2490 }
            }
        },
        template: `
            <div class="padding-50">
                <h2 :style="{ color: '#fff' }">Progress bar can accept object prop and calculate percentages</h2>
                <pre :style="{ color: '#fff' }">:values="{{ values }}"</pre>
                <ProgressBar :values="values" />
            </div>
        `
    }))
    .add('show percentages', () => ({
        components: {
            ProgressBar: () => import('@ericmuyser/hyper-ui').then(m => m.ProgressBar)
        },
        template: `
            <div class="padding-50">
                <ProgressBar :percentages="41" showText />
            </div>
        `
    }))
    .add('fancy', () => ({
        components: {
            ProgressBarFancy: () => import('@ericmuyser/hyper-ui').then(m => m.ProgressBarFancy)
        },
        data() {
            return {
                percent: 90
            }
        },
        template: `<div class="position-relative p-4" style="width: 500px; height: 100px">
                        <Input v-model="percent" type="number" />
                            <hr />
                        <ProgressBarFancy :percent="percent" />
                    </div>`
    }))

storiesOf('Project Milestone', module)
    .add('default', () => ({
        components: {
            ProjectMilestone: () => import('@ericmuyser/hyper-ui').then(m => m.ProjectMilestone)
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
                <ProjectMilestone :milestone="milestone"/>
            </div>
        `
    }))

storiesOf('Community Spotlight', module)
    .add('default', () => ({
        components: {
            CommunitySpotlight: () => import('@ericmuyser/hyper-ui').then(m => m.CommunitySpotlight)
        },
        data() {
            return {
                discussions: [
                    { link: '', name: 'Title', count: 98 },
                    { link: '', name: 'Post name', count: 98 },
                    { link: '', name: 'Discussion', count: 98 }
                ]
            }
        },
        template: `
            <div class="padding-50">
                <CommunitySpotlight
                    :discussions="discussions"
                />
            </div>
        `
    }))

storiesOf('Product Review', module)
    .add('default', () => ({
        components: {
            Review: () => import('@ericmuyser/hyper-ui').then(m => m.Review)
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
                    minutesPlayed: 1938,
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
                <Review :review="review" />
            </div>
        `
    }))
    .add('form', () => ({
        components: {
            ReviewForm: () => import('@ericmuyser/hyper-ui').then(m => m.ReviewForm)
        },
        template: `<div class="p-4" style="width: 1000px;"><ReviewForm /></div>`
    }))
    .add('view review', () => ({
        components: {
            ViewReview: () => import('@ericmuyser/hyper-ui').then(m => m.ViewReview),
        },
        template: `<div class='p-5' style="width: 1000px"><ViewReview /></div>`
    }))

storiesOf('Banner', module)
    .add('image', () => ({
        components: {
            Banner: () => import('@ericmuyser/hyper-ui').then(m => m.Banner)
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

                    <Banner :slides="slides" />
            </div>`
    }))

storiesOf('Product Overview', module)
    .add('Language Support', () => ({
        components: {
            LanguageSupport: () => import('@ericmuyser/hyper-ui').then(m => m.LanguageSupport)
        },
        data() {
            return {
                languages: [
                    {
                        name: "English",
                        interface: true,
                        fullAudio: false,
                        subtitles: false,
                        code: "en-us"
                    },
                    {
                        name: "Czech",
                        interface: true,
                        fullAudio: true,
                        subtitles: false,
                        code: "cz"
                    },
                    {
                        name: "French",
                        interface: true,
                        fullAudio: true,
                        subtitles: true,
                        code: "fr"
                    },
                    {
                        name: "German",
                        interface: true,
                        fullAudio: false,
                        subtitles: false,
                        code: "de"
                    },
                    {
                        name: "Hungarian",
                        interface: true,
                        fullAudio: false,
                        subtitles: true,
                        code: "hu"
                    },
                    {
                        name: "Russian",
                        interface: true,
                        fullAudio: false,
                        subtitles: true,
                        code: "ru"
                    }
                ]
            }
        },
        template: `
            <div class="padding-50">
                <LanguageSupport
                    style="color: white"
                    :languages="languages"
                />
            </div>`
    }))
    .add('System Requirements', () => ({
        components: {
            SystemRequirements: () => import('@ericmuyser/hyper-ui').then(m => m.SystemRequirements)
        },
        data() {
            return {
                systemRequirements: [
                    {
                        os: "win",
                        system: "Windows XP/Vista/7",
                        processor: "Intel or AMD Quad-Core",
                        memory: "3 GB (Win XP), 4GB (Win Vista/Win 7)",
                        graphics: "GeForce 260 (1 GB) or Radeon HD 4850 (1 GB). Resolution 1440x900.",
                        directx: "DirectX 9.29 has to be installed.",
                        hardDrive: "25GB",
                        sound: ""
                    },
                    {
                        os: "mac",
                        system: "OS X 10.8.5 or higher",
                        processor: "Quad Core Intel",
                        memory: "8 GB RAM",
                        graphics: "GeForce GTX 675MX 1GB (on 1920x1080, medium), Radeon HD 6970M 1 GB (on 1920x1080, medium), Intel integrated graphics chipsets are not supported",
                        hardDrive: "25 GB HD space"
                    },
                    {
                        os: "linux",
                        system: "Ubuntu 14.04, Linux Mint 17, BlockHub OS",
                        processor: "Quad Core Intel",
                        memory: "4 GB RAM",
                        graphics: "GeForce GT 640 1GB (1440x900, medium)",
                        hardDrive: "25 GB HD space"
                    }
                ]
            }
        },
        template: `
            <div class="padding-50">
                <SystemRequirements
                    style="color: white"
                    :requirements="systemRequirements"
                />
            </div>`
    }))

storiesOf('Inputs', module)
    .add('default', () => ({
        components: {
            Input: () => import('@ericmuyser/hyper-ui').then(m => m.Input)
        },
        data() {
            return {
                text: ''
            }
        },
        template: `
            <div class="padding-50">
                <Input v-model="text" placeholder="Start typing"/>
                <span style="color: #fff">{{ text }}</span>
            </div>
        `
    }))
    .add('Searcher', () => ({
        components: {
            InputSearcher: () => import('@ericmuyser/hyper-ui').then(m => m.InputSearcher)
        },
        data() {
            return {
                text: ''
            }
        },
        template: `
            <div class="padding-50">
                <InputSearcher v-model="text"/>
                <span style="color: #fff">{{ text }}</span>
            </div>
        `
    }))

storiesOf('Timeline', module)
    .add('item', () => ({
        components: {
            TimelineList: () => import('@ericmuyser/hyper-ui').then(m => m.TimelineList),
            TimelineItem: () => import('@ericmuyser/hyper-ui').then(m => m.TimelineItem)
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
                    <TimelineItem :item="item" />
                </div>
            </div>
        `
    }))
    .add('list', () => ({
        components: {
            TimelineList: () => import('@ericmuyser/hyper-ui').then(m => m.TimelineList),
            TimelineItem: () => import('@ericmuyser/hyper-ui').then(m => m.TimelineItem)
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
                            <TimelineList :items="items" />
                        </div>
                    </div>`
    }))

storiesOf('Purchase block', module)
    .add('default', () => ({
        components: {
            PurchaseBlock: () => import('@ericmuyser/hyper-ui').then(m => m.PurchaseBlock)
        },
        data() {
            return {
                inWishlist: false
            }
        },
        template: `<div class="p-5" style="width: 400px">
                        <PurchaseBlock
                            :tags="['top', 'new']"
                            :price="49.99"
                            :eligibleTokens="300"
                            :isReleased="true"
                            :offersPurchases="true"
                            :inWishlist="inWishlist"
                            @addToWishlist="inWishlist = true"
                            @removeFromWishlist="inWishlist = false" />
                    </div>`
    }))
    .add('demo', () => ({
        components: {
            PurchaseBlock: () => import('@ericmuyser/hyper-ui').then(m => m.PurchaseBlock)
        },
        data() {
            return {
                inWishlist: false
            }
        },
        template: `<div class="p-5" style="width: 400px">
                        <PurchaseBlock
                        :tags="['top', 'new']"
                        :price="49.99"
                        releaseDate="8 Jun, 2018"
                        demoLink="#"
                        :offersPurchases="true"
                        :inWishlist="inWishlist"
                        @addToWishlist="inWishlist = true"
                        @removeFromWishlist="inWishlist = false"
                        />
                    </div>`
    }))
    .add('unavailable', () => ({
        components: {
            PurchaseBlock: () => import('@ericmuyser/hyper-ui').then(m => m.PurchaseBlock)
        },
        data() {
            return {
                inWishlist: false
            }
        },
        template: `<div class="p-5" style="width: 400px">
                        <PurchaseBlock
                        :tags="['new']"
                        :price="49.99"
                        :isUnavailable="true"
                        :inWishlist="inWishlist"
                        @addToWishlist="inWishlist = true"
                        @removeFromWishlist="inWishlist = false"
                        />
                        </div>`
    }))

storiesOf('Purchase Option', module)
    .add('single', () => ({
        components: {
            PurchaseOption: () => import('@ericmuyser/hyper-ui').then(m => m.PurchaseOption)
        },
        template: `
            <div class="p-4" style="width: 600px">
                <PurchaseOption
                    price="44"
                    oldPrice="55"
                    gameTag="SOME TAG"
                    title="SOME TITLE"
                    :id="4"
                    />
                    <hr />
                    <PurchaseOption
                    price="44"
                    oldPrice="55"
                    img="https://trashbox.ru/ifiles/979051_6c28be_screenshot_00/game-of-warriors-1.1.11-1.png"
                    gameTag="SOME TAG"
                    title="SOME TITLE"
                    :id="4" />
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
            PurchaseOption: () => import('@ericmuyser/hyper-ui').then(m => m.PurchaseOption),
            Block: () => import('@ericmuyser/hyper-ui').then(m => m.Block)
        },
        template: `
        <div class="p-5">
            <Block title="Purchase Options" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                <PurchaseOption v-for="(option, index) in options"
                    :key="index"
                    :price="option.price"
                    :oldPrice="option.oldPrice"
                    :gameTag="option.tag"
                    :title="option.title"
                    :id="option.id"
                    :inList="(index < options.length-1) ? true : false" />
            </Block>
        </div>
        `
    }))

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
            ParticipationTier: () => import('@ericmuyser/hyper-ui').then(m => m.ParticipationTier),
        },
        template: `
            <div class="p-5">
                <ParticipationTier :id="id" :price="price" :sold="sold" :left="left" :title="title" :tag="tag" />
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
            ParticipationTier: () => import('@ericmuyser/hyper-ui').then(m => m.ParticipationTier),
            Block: () => import('@ericmuyser/hyper-ui').then(m => m.Block)

        },
        template: `
            <div class="p-5">
                <Block title="Participation Tier" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                    <ParticipationTier v-for="(item, index) in items"
                        :key="index"
                        :id="item.id"
                        :price="item.price"
                        :sold="item.sold"
                        :left="item.left"
                        :title="item.title"
                        :tag="item.tag"
                        :inList="(index < items.length-1) ? true : false" />
                </Block>
            </div>
        `
    }))

storiesOf('Contribute', module)
    .add('form', () => ({
        components: {
            ContributeForm: () => import('@ericmuyser/hyper-ui').then(m => m.ContributeForm)
        },
        data() {
            return {
                value: 0
            }
        },
        template: `
            <div class="p-4" style="width: 400px">
                <ContributeForm v-model="value" :defaultValue="15" /> <div class="mt-4 text-white">Value - {{ value }}</div>
            </div>
        `
    }))
    .add('pledge', () => ({
        components: {
            ContributePledge: () => import('@ericmuyser/hyper-ui').then(m => m.ContributePledge)
        },
        data() {
            return {
                pledge: {
                    minPrice: 10.99,
                    name: 'BLUE-HAIRED CATS',
                    estimatedDelivery: '12/01/2018',
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
                        <ContributePledge
                            :minPrice="pledge.minPrice"
                            :title="pledge.name"
                            :description="pledge.description"
                            :includes="pledge.includes"
                            :deliveryDate="pledge.estimatedDelivery"
                            :shipsTo="pledge.shipsTo"
                            :backers="pledge.backers" />
                    </div>`
    }))

storiesOf('Cookie policy', module)
    .add('default', () => ({
        components: {
            CookiePolicy: () => import('@ericmuyser/hyper-ui').then(m => m.CookiePolicy)
        },
        template: `
            <div class="p-5 position-relative" style="height: 500px;width: 700px">
                <CookiePolicy />
            </div>
        `
    }))

storiesOf('Welcome Box', module)
    .add('default', () => ({
        components: {
            WelcomeBox: () => import('@ericmuyser/hyper-ui').then(m => m.WelcomeBox)
        },
        template: `
            <div class="p-5 position-relative" style="height: 900px;width: 700px">
                <WelcomeBox />
            </div>
        `
    }))

storiesOf('Share', module)
    .add('type 1', () => ({
        components: {
            Share: () => import('@ericmuyser/hyper-ui').then(m => m.Share)
        },
        data() {
            return {
                online: [
                    {
                        name: "Sally Hamilton",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Poole Wise",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Frye Nash",
                        img: "http://placehold.it/32x32"
                    }
                ],
                favorites: [
                    {
                        name: "Nixon Love",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Richards Langley",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Jill Medina",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Callahan Ballard",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Zamora Simmons",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Jenkins Ruiz",
                        img: "http://placehold.it/32x32"
                    },
                    {
                        name: "Kemp Christian",
                        img: "http://placehold.it/32x32"
                    }
                ]
            }
        },
        template: `<div class="p-5 position-relative" style="height: 300px;width: 300px; margin-top: 300px">
                        <Share :onlineList="online" :favoritesList="favorites" :show="true" />
                    </div>
        `
    }))

storiesOf('Stream', module)
    .add('default', () => ({
        components: {
            StreamItem: () => import('@ericmuyser/hyper-ui').then(m => m.StreamItem)
        },
        data() {
            return {
                game: "Dota II",
                userName: "GodOfDota",
                userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIOE5IdK4MWeI-iEphf-BhZh2XsXBrBn_fcsGXbFGSF-xwH8h",
                previews: "http://placehold.it/600x350",
                src: "#",
                views: 10
            }
        },
        template: `
        <div class="row p-5">
            <div class="col-5">
                <StreamItem
                    :streamGame="game"
                    :streamName="userName"
                    :streamAvatar="userAvatar"
                    :streamImg="previews"
                    :streamSrc="src"
                    :streamViews="views" />
            </div>
        </div>

        `
    }))

storiesOf('List', module)
    .add('dotted', () => ({
        components: {
            DottedList: () => import('@ericmuyser/hyper-ui').then(m => m.DottedList)
        },
        template: `
        <div class="p-5">
            <DottedList>
                <li>Some text</li>
                <li>Some text</li>
                <li>Some text</li>
            </DottedList>
        </div>`
    }))

storiesOf('Game Installer Modal', module)
    .add('default', () => ({
        components: {
            GameInstaller: () => import('@ericmuyser/hyper-ui').then(m => m.GameInstaller)
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
                <GameInstaller
                    :activated="true"
                    :win="win"
                    :mac="mac"
                    :linux="linux"
                    :name="name"
                    :img="img"
                    :filesList="filesList" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate
                    et tellus ac scelerisque. Duis vel suscipit orci, vel tristique elit.
                    Praesent sollicitudin volutpat finibus.
                </GameInstaller>
            </div>
        </div>
        `
    }))

storiesOf('Emoji', module)
    .add('picker', () => ({
        components: {
            Emoji: () => import('@ericmuyser/hyper-ui').then(m => m.Emoji)
        },
        template: `
        <div class="p-5">
            <Emoji />
        </div>`
    }))
    .add('single', () => ({
        components: {
            EmojiSingle: () => import('@ericmuyser/hyper-ui').then(m => m.EmojiSingle)
        },
        template: `
        <div class="p-5">
            <EmojiSingle count="99" />
        </div>`
    }))

storiesOf('Landing Page', module)
    .add('block title', () => ({
        components: {
            LandingBlockTitle: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBlockTitle)
        },
        template: `
        <div class="p-5">
            <LandingBlockTitle>
                Mutation Mode
            </LandingBlockTitle>
        </div>
            `
    }))
    .add('block title with shadow', () => ({
        components: {
            LandingBlockTitleShadow: () => import('@ericmuyser/hyper-ui').then(m => m.shadow)
        },
        template: `
        <div class="p-5">
            <LandingBlockTitleShadow colorShadow="#f60">
                Mutation Mode
            </LandingBlockTitleShadow>
        </div>
            `
    }))
    .add('block title with gradient', () => ({
        components: {
            LandingBlockTitleGradient: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBlockTitleGradient),
            LandingBlockTitle: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBlockTitle),
            LandingBlockTitleShadow: () => import('@ericmuyser/hyper-ui').then(m => m.shadow)
        },
        template: `
        <div class="p-5">
            <LandingBlockTitleGradient>
                <LandingBlockTitle slot="before" class="mb-1" fontSize="16" fontWeight="bold">
                    NEW
                </LandingBlockTitle>
                Mutation Mode
            </LandingBlockTitleGradient>
            <hr />
            <LandingBlockTitleGradient align="right">
                Mutation Mode
                <LandingBlockTitleShadow slot="after" class="mt-1" fontSize="16" fontWeight="bold">
                    Before title text
                </LandingBlockTitleShadow>
            </LandingBlockTitleGradient>
            <hr />
            <LandingBlockTitleGradient align="center">
                Mutation Mode
            </LandingBlockTitleGradient>
        </div>
        `
    }))
    .add('divider', () => ({
        components: {
            LandingDivider: () => import('@ericmuyser/hyper-ui').then(m => m.LandingDivider),
        },
        template: `
        <div class="p-5">
            <LandingDivider />
        </div>
        `
    }))
    .add('level', () => ({
        components: {
            BlockContentLevel: () => import('@ericmuyser/hyper-ui').then(m => m.BlockContentLevel),
        },
        template: `
        <div class="p-5">
            <BlockContentLevel :number="92" textPosition="left">
                Caster Pack 5 (2017)
            </BlockContentLevel>
            <hr />
            <BlockContentLevel size="md" :number="7" textPosition="right">
                Caster Pack 5 (2017)
            </BlockContentLevel>
            <hr />
            <BlockContentLevel size="lg" :number="1982" textPosition="right">
                Caster Pack 5 (2017)
            </BlockContentLevel>
            <hr />
        </div>
            `
    }))
    .add('feature item', () => ({
        components: {
            BlockContentWithFeatureItem: () => import('@ericmuyser/hyper-ui').then(m => m.BlockContentWithFeatureItem),
        },
        data() {
            return {
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
                <BlockContentWithFeatureItem :title="item.title" :img="item.img">
                    {{ item.text }}
                </BlockContentWithFeatureItem>
            </div>
        </div>
        `
    }))
    .add('benefactor', () => ({
        components: {
            LandingBenefactor: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBenefactor),
        },
        data() {
            return {
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
                        includesList: ['200 x Fire Lotus Belt', '200 x Golden Ornithomancer Mantle', '200 x Dragonclaw Hook', '200 x Rainmaker', '200 x Pipe of Dezun', '200 x Perceptions of the Eternal Mind',
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
        template: `
            <div class="p-5" style="width: 1000px;">
                <LandingBenefactor :items="items" />
            </div>
        `
    }))
    .add('reward list', () =>({
        components: {
            LandingRewardList: () => import('@ericmuyser/hyper-ui').then(m => m.LandingRewardList),
        },
        data() {
            return {
            }
        },
        template: `
            <div class="p-5" style="width: 1000px;">
                <LandingRewardList>
                    <template slot="list">
                        <div v-for="(item, index) in list" :key="index" class="my-1" style="font-size: 15px; opacity: .8">
                            {{ item }}
                        </div>
                    </template>
                </LandingRewardList>
            </div>
        `
    }))
    .add('page', () => ({
        components: {
            LandingBlock: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBlock),
            LandingBlockTitle: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBlockTitle),
            LandingBlockTitleShadow: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBlockTitleShadow),
            LandingBlockTitleGradient: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBlockTitleGradient),
            LandingFeatureItem: () => import('@ericmuyser/hyper-ui').then(m => m.LandingFeatureItem),
            LandingTabs: () => import('@ericmuyser/hyper-ui').then(m => m.LandingTabs),
            LandingTab: () => import('@ericmuyser/hyper-ui').then(m => m.LandingTab),
            LandingSlider: () => import('@ericmuyser/hyper-ui').then(m => m.LandingSlider),
            LandingGradientBlock: () => import('@ericmuyser/hyper-ui').then(m => m.LandingGradientBlock),
            LandingBenefactor: () => import('@ericmuyser/hyper-ui').then(m => m.LandingBenefactor),
            LandingLevel: () => import('@ericmuyser/hyper-ui').then(m => m.LandingLevel),
            LandingRewardList: () => import('@ericmuyser/hyper-ui').then(m => m.LandingRewardList),
            LandingDivider: () => import('@ericmuyser/hyper-ui').then(m => m.LandingDivider),
            LandingButton: () => import('@ericmuyser/hyper-ui').then(m => m.LandingButton),
        },
        data() {
            return {
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
                benefactorItems:[
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
                        includesList: ['200 x Fire Lotus Belt', '200 x Golden Ornithomancer Mantle', '200 x Dragonclaw Hook', '200 x Rainmaker', '200 x Pipe of Dezun', '200 x Perceptions of the Eternal Mind',
                            '200 x Kantusa the Script Sword', '200 x Shattered Greatsword', '200 x Golden Gravelmaw', '100 x Golden Grasping Bludgeon', '100 x Golden Shards of Exile', '100 x Golden Staff of Perplex',
                            '100 x Golden Huntling', '100 x Golden Severing Crest', '100 x Golden Sullen Hollow', '100 x Golden Lamb to the Slaughter', '100 x Lockjaw the Boxhound']
                    },

                    {
                        src: 'http://cdn.dota2.com/apps/dota2/images/international2017/battlepass/immortals/c_legioncommander.png?v=4054578',
                        name: 'Immortal IV'
                    }
                ],
                rewardList: [
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
                <LandingBlock
                    title="Some content block title"
                    horizontal="center"
                    bgPosition="top center"
                    minHeight="400px"
                    bgImage="https://s1.1zoom.ru/b5050/840/Magic_Castles_Mountains_506826_1920x1080.jpg">
                    <div class="col-10 text-center">
                        <LandingBlockTitle fontSize="42" color="#f8e6c7" class="text-uppercase">
                            Battle level rewards
                        </LandingBlockTitle>

                         <p>Aliquam quis magna at diam convallis congue. Vestibulum dignissim tincidunt sapien quis consequat.
                        Mauris vel metus dui. Donec vitae sagittis mauris. Nam semper pretium sapien, quis dictum odio.
                        Cras id nisl sed neque luctus ultrices ut ut elit. Maecenas suscipit ante a leo convallis ornare.
                        Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id.
                        Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.</p>
                    </div>
                    <div class="col-10 margin-top-30">
                        <LandingBlockTitleGradient align="center" size="md" fontSize="32" class="text-uppercase">
                            The 2018 immortals
                        </LandingBlockTitleGradient>

                        <LandingTabs class="margin-top-20">
                            <p class="text-center">
                                 Nunc gravida placerat erat, ac pharetra felis malesuada id.<br>
                                Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.
                            </p>
                            <LandingTab name="TREASURE I">
                                Maecenas suscipit ante a leo convallis ornare.
                                Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id.
                                Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.
                            </LandingTab>
                            <LandingTab name="TREASURE II" selected>
                                <c-landing-slider :items="slides" />
                            </LandingTab>
                            <LandingTab name="TREASURE III">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at condimentum risus.
                                Integer viverra quam in ipsum posuere lobortis. Integer rhoncus gravida ante a aliquam. In aliquet ex eu nibh pulvinar varius. Suspendisse maximus a arcu at sagittis. Etiam et mauris volutpat diam consequat accumsan vitae non nisi. Sed dignissim odio metus, sit amet ullamcorper ligula blandit et. Donec ac justo a erat lacinia venenatis id eu nisl.
                            </LandingTab>

                            <LandingBlockTitle tag="div" fontSize="17" color="#5EA72B" class="text-center my-4">
                                <div class="mb-1">TREASURE I: 1 - 10 - 22 - 34 - 46 - 80 - 220 (repeats every 30 levels)</div>
                                <div class="mb-1">TREASURE II: 1 - 98 - 112 - 132 - 152 - 230 (repeats every 30 levels)</div>
                                <div>TREASURE III: 1 - 164 - 178 - 194 - 206 - 240 (repeats every 30 levels)</div>
                            </LandingBlockTitle>

                            <LandingGradientBlock class="mt-4">
                                <LandingBlockTitle tag="div" fontSize="16" color="#fff" class="text-center">
                                    LIMITED MARKETABILITY
                                </LandingBlockTitle>
                                <p>
                                    Maecenas suscipit ante a leo convallis ornare.
                                    Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id.
                                    Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.
                                </p>
                            </LandingGradientBlock>
                        </LandingTabs>
                    </div>
                </LandingBlock>

                <LandingDivider />

                <LandingBlock
                    horizontal="center"
                    vertical="center"
                    title="Some content block title"
                    minHeight="50vh"
                    bgImage="http://dota2-i.ru/assets/images/resources/1671/1366x768-2042847-shadow-fiend-dota-2-wallpaper-hd.jpg">
                    <div class="col-12">
                        <LandingBlockTitleGradient align="center" size="md" fontSize="32" class="text-uppercase">
                            TRUST OF THE BENEFACTOR
                        </LandingBlockTitleGradient>
                        <LandingBenefactor :items="benefactorItems">

                        </LandingBenefactor>
                    </div>
                    <div class="col-3 text-right">
                        <BlockContentLevel :number="92" size="md" textPosition="left" textColor="#00662e">
                            LEVEL
                        </BlockContentLevel>
                    </div>
                    <div class="col-9">
                         <p>Aliquam quis magna at diam convallis congue. Vestibulum dignissim tincidunt sapien quis consequat.
                        Mauris vel metus dui. Donec vitae sagittis mauris. Nam semper pretium sapien, quis dictum odio.
                        Cras id nisl sed neque luctus ultrices ut ut elit. Maecenas suscipit ante a leo convallis ornare.
                        Proin efficitur ut ipsum a egestas. Nunc gravida placerat erat, ac pharetra felis malesuada id.
                        Mauris ex massa, dictum id eros quis, sodales maximus nibh. Morbi tempus erat vitae tempus euismod.</p>
                    </div>
                </LandingBlock>

                <LandingDivider />

                <LandingBlock
                    title="Some content block title"
                    horizontal="center"
                    vertical="center"
                    bgImage="https://steamcdn-a.akamaihd.net/apps/dota2/images/international2018/battlepass/bg_24.png">
                    <div class="col-10">
                        <LandingRewardList>
                            <div class="d-flex justify-content-center w-100">
                                <div class="text-center mx-3">
                                    <c-landing-button class="margin-bottom-20" width="280">
                                        Buy Battle Pass
                                    </c-landing-button>
                                    <LandingBlockTitle fontSize="13" color="#f8e6c7" class="text-uppercase">
                                        LEVEL 1  $9.99 USD
                                    </LandingBlockTitle>
                                    <LandingBlockTitle fontSize="13" color="#f8e6c7" class="text-uppercase">
                                        LEVEL 75  $36.99 USD
                                    </LandingBlockTitle>
                                </div>
                                <div class="text-center mx-3">
                                    <c-landing-button class="margin-bottom-20" width="280">
                                        Buy Levels
                                    </c-landing-button>
                                    <LandingBlockTitle fontSize="13" color="#f8e6c7" class="text-uppercase">
                                        5 LEVELS  $2.49 USD
                                    </LandingBlockTitle>
                                    <LandingBlockTitle fontSize="13" color="#f8e6c7" class="text-uppercase">
                                        11 LEVELS  $4.99 USD
                                    </LandingBlockTitle>
                                    <LandingBlockTitle fontSize="13" color="#f8e6c7" class="text-uppercase">
                                        24 LEVELS  $9.99 USD
                                    </LandingBlockTitle>
                                </div>
                            </div>
                            <template slot="list">
                                <div v-for="(item, index) in rewardList" :key="index" class="my-1" style="font-size: 15px; opacity: .8">
                                    {{ item }}
                                </div>
                            </template>
                        </LandingRewardList>
                    </div>
                </LandingBlock>
            </div>
        `
    }))

storiesOf('Token Sale Box', module)
    .add('default', () => ({
        components: {
            TokenSale: () => import('@ericmuyser/hyper-ui').then(m => m.TokenSale),
        },
        template: `
        <div class="p-5" style="width: 1200px;">
            <TokenSale
                :hardCap="18000000"
                :softCap="7500000"
                :volume="1000000000"
                :soldDollars="23455424"
                :soldTokens="243424234" />
        </div>`
    }))
    .add('type 2', () => ({
        components: {
            TokenSale2: () => import('@ericmuyser/hyper-ui').then(m => m.TokenSale2),
        },
        template: `
        <div class="p-5" style="width: 1200px;">
            <TokenSale2
                :hardCap="18000000"
                :softCap="7500000"
                :volume="1000000000"
                :soldDollar="23455424"
                :soldTokens="243424234" />
        </div>`
    }))

storiesOf('Guide', module)
    .add('default', () =>({
        components: {
            Guide: () => import('@ericmuyser/hyper-ui').then(m => m.Guide),
        },
        template: `<Guide />`
    }))

storiesOf('Video Popup', module)
    .add('default', () =>({
        components: {
            VideoPopup: () => import('@ericmuyser/hyper-ui').then(m => m.VideoPopup),
            Author: () => import('@ericmuyser/hyper-ui').then(m => m.Author)
        },
        data() {
            return {
                video:[
                    {
                        src: 'https://static.videezy.com/system/resources/previews/000/004/944/original/Magical_Tree_4K_Living_Background.mp4',
                        format: 'mp4'
                    }
                ],
                comments:[
                    {
                        text: 'Lorem ipsum dolor si',
                        author: {
                            name: 'Satoshi',
                            img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                        }
                    },
                    {
                        text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                        author: {
                            name: 'Hakato',
                            img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                        }
                    },
                    {
                        text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                        author: {
                            name: 'Daniel',
                            img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                        }
                    },
                    {
                        text: 'Mauris in enim vitae dolor porttitor maximus',
                        author: {
                            name: 'Monik',
                            img: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/103/user_avatar_tiffanyarment_artwork.png'
                        }
                    }
                ],
                showLocal: false,
                showYoutube: false,
                showTwitch: false,
                showVideo: {},
                youtube: 'A747o4LwQfM',
                twitch: 'inflameswemust'
            }
        },
        methods: {
            closeModal() {
                this.showYoutube = false;
                this.showTwitch = false;
                this.showLocal = false;
            },
            showLocalHandler() {
                this.showLocal = true
            },
            showYoutubeHandler() {
                this.showYoutube = true
            },
            showTwitchHandler() {
                this.showTwitch = true
            }
        },
        template: `<div class="p-5">
                        <Button @click="showLocalHandler" class="m-3">Show Local Video Modal</Button>
                        <Button @click="showYoutubeHandler" class="m-3">Show Youtube Video Modal</Button>
                        <Button @click="showTwitchHandler" class="m-3">Show Twitch Video Modal</Button>

                        <VideoPopup :twitch="twitch" @close="closeModal" :activated="showTwitch">
                            <template v-for="comment in comments">
                                <div class="mb-3">
                                <author :author="comment.author" class="mb-1"/>
                                {{ comment.text }}
                                </div>
                            </template>
                        </VideoPopup>

                        <VideoPopup :youtube="youtube" @close="closeModal" :activated="showYoutube">
                            <template v-for="comment in comments">
                                <div class="mb-3">
                                <author :author="comment.author" class="mb-1"/>
                                {{ comment.text }}
                                </div>
                            </template>
                        </VideoPopup>

                        <VideoPopup :video="video" @close="closeModal" :activated="showLocal">
                            <template v-for="comment in comments">
                                <div class="mb-3">
                                <author :author="comment.author" class="mb-1"/>
                                {{ comment.text }}
                                </div>
                            </template>
                        </VideoPopup>
                    </div>
        `
    }))
    .add('video list', () => ({
        components: {
            VideoPopup: () => import('@ericmuyser/hyper-ui').then(m => m.VideoPopup),
            VideoItem: () => import('@ericmuyser/hyper-ui').then(m => m.VideoItem),
            Author: () => import('@ericmuyser/hyper-ui').then(m => m.Author)
        },
        data() {
            return {
                videos:[
                    {
                        poster: 'https://i.ytimg.com/vi/4B2TgQG48Sg/maxresdefault.jpg',
                        name: 'Satoshi',
                        avatar: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg',
                        video: {
                            src: 'https://static.videezy.com/system/resources/previews/000/004/944/original/Magical_Tree_4K_Living_Background.mp4',
                            format: 'mp4'
                        },
                        comments:[
                            {
                                text: 'Lorem ipsum dolor si',
                                author: {
                                    name: 'Satoshi',
                                    img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                                }
                            },
                            {
                                text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                                author: {
                                    name: 'Hakato',
                                    img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                                }
                            },
                            {
                                text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                                author: {
                                    name: 'Daniel',
                                    img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                                }
                            },
                            {
                                text: 'Mauris in enim vitae dolor porttitor maximus',
                                author: {
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
                                author: {
                                    name: 'Satoshi',
                                    img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                                }
                            },
                            {
                                text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                                author: {
                                    name: 'Hakato',
                                    img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                                }
                            },
                            {
                                text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                                author: {
                                    name: 'Daniel',
                                    img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                                }
                            },
                            {
                                text: 'Mauris in enim vitae dolor porttitor maximus',
                                author: {
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
                                author: {
                                    name: 'Satoshi',
                                    img: 'https://banner2.kisspng.com/20180403/qtw/kisspng-computer-icons-avatar-woman-user-avatar-5ac3a1dfb11ca9.9792609515227703997255.jpg'
                                }
                            },
                            {
                                text: 'Fusce imperdiet massa sit amet odio blandit aliquam.',
                                author: {
                                    name: 'Hakato',
                                    img: 'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png'
                                }
                            },
                            {
                                text: 'Morbi dignissim mauris vitae turpis efficitur, in dapibus neque consectetur. Etiam sit amet consectetur ex.',
                                author: {
                                    name: 'Daniel',
                                    img: 'http://paquitosoftware.com/content/images/2015/07/gravatar.jpeg'
                                }
                            },
                            {
                                text: 'Mauris in enim vitae dolor porttitor maximus',
                                author: {
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
                                <VideoItem
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

storiesOf('Wallet', module)
    .add('default', () => ({
        components: {
            WalletBase: () => import('@ericmuyser/hyper-ui').then(m => m.WalletBase),
            WalletMain: () => import('@ericmuyser/hyper-ui').then(m => m.WalletMain),
            WalletTransfer: () => import('@ericmuyser/hyper-ui').then(m => m.WalletTransfer),
            WalletDeposit: () => import('@ericmuyser/hyper-ui').then(m => m.WalletDeposit),
            WalletEdit: () => import('@ericmuyser/hyper-ui').then(m => m.WalletEdit),
            WalletToken: () => import('@ericmuyser/hyper-ui').then(m => m.WalletToken),
        },
        data: () => data.WalletData,
        template: `
            <div class="row p-3 m-0 flex-wrap" style="width: 1125px">
                <div class="mx-2 mb-4">
                    <h4 class="text-white">Main screen</h4>
                    <WalletBase>
                        <WalletMain />
                    </WalletBase>
                </div>
                <div class="mx-2 mb-4">
                    <h4 class="text-white">Transfer screen</h4>
                    <WalletBase>
                        <WalletTransfer />
                    </WalletBase>
                </div>
                <div class="mx-2 mb-4">
                    <h4 class="text-white">Deposit screen</h4>
                    <WalletBase>
                        <WalletDeposit />
                    </WalletBase>
                </div>
                <div class="mx-2 mb-4">
                    <h4 class="text-white">Account Edit screen</h4>
                    <WalletBase>
                        <WalletEdit />
                    </WalletBase>
                </div>
                <div class="mx-2 mb-4">
                    <h4 class="text-white">Wallet token</h4>
                    <WalletBase>
                        <WalletToken />
                    </WalletBase>
                </div>
            </div>
        `
    }))


storiesOf('Chat', module)
    .add('base', () => ({
        components: {
            ChatBase: () => import('@ericmuyser/hyper-ui').then(m => m.ChatBase),
            ChatGroup: () => import('@ericmuyser/hyper-ui').then(m => m.ChatGroup),
            ChatPrivate: () => import('@ericmuyser/hyper-ui').then(m => m.ChatPrivate),
            ChatMessage: () => import('@ericmuyser/hyper-ui').then(m => m.ChatMessage),
            ChatUser: () => import('@ericmuyser/hyper-ui').then(m => m.ChatUser),
            ChatGroupWelcome: () => import('@ericmuyser/hyper-ui').then(m => m.ChatGroupWelcome),
            ChatGroupSidebar: () => import('@ericmuyser/hyper-ui').then(m => m.ChatGroupSidebar),
            ChatGroupNew: () => import('@ericmuyser/hyper-ui').then(m => m.ChatGroupNew),
            ChatFriendsList: () => import('@ericmuyser/hyper-ui').then(m => m.ChatFriendsList),
        },
        data() {
            return {
            }
        },
        template: `<div class="row p-3 m-0 flex-wrap" style="width: 1100px;">
                    <div class="col-12" >
                        <h3 class="text-white">Group chat "Welcome block"</h3>
                        <ChatBase style="height: 700px" :shortcuts="shortcuts">
                            <template slot="sidebar">
                                <ChatGroupSidebar />
                            </template>
                            <ChatGroup>
                                <template slot="messages">
                                    <ChatGroupWelcome />
                                </template>
                                <template slot="users">
                                    <ChatUser v-for="user in userList" :isAdmin="user.admin" :avatar="user.avatar" :name="user.name" :game="user.game" :status="user.status"/>
                                </template>
                            </ChatGroup>
                        </ChatBase>
                        <hr />
                    </div>
                    <div class="col-12" >
                        <h3 class="text-white">Group chat with messages</h3>
                        <ChatBase style="height: 700px" :shortcuts="shortcuts">
                            <template slot="sidebar">
                                <ChatGroupSidebar />
                            </template>
                            <ChatGroup :currentUser="users[2]">
                                <template slot="messages">
                                    <ChatMessage v-for="msg in messages" :text="msg.text" :time="msg.time" :user="users[msg.user]" />
                                </template>
                                <template slot="users">
                                    <ChatUser v-for="user in users" :isAdmin="user.admin" :action="true" :avatar="user.avatar" :name="user.name" :game="user.game" :status="user.status"/>
                                </template>
                            </ChatGroup>
                        </ChatBase>
                        <hr />
                    </div>
                    <div class="col-12" >
                        <h3 class="text-white">Private messages</h3>
                        <ChatBase style="height: 700px" :shortcuts="shortcuts">
                            <ChatPrivate>
                                <ChatMessage v-for="msg in messages" :text="msg.text" :time="msg.time" :user="users[msg.user]" />
                            </ChatPrivate>
                        </ChatBase>
                        <hr />
                    </div>
                    <div class="col-12" >
                        <h3 class="text-white">New group (create/join)</h3>
                        <ChatBase style="height: 700px" :shortcuts="shortcuts">
                            <ChatGroupNew />
                        </ChatBase>
                    </div>
                    <div class="col-12">
                        <h3 class="text-white">Friends list</h3>
                        <ChatFriendsList />
                        <hr />
                    </div>
                </div>`
    }))

storiesOf('Games list', module)
    .add('base', () => ({
        components: {
            GamesList: () => import('@ericmuyser/hyper-ui').then(m => m.GamesList)
        },
        data() {
            return {
                games:[
                    {
                        id: 1,
                        name: 'Game Of Thor 1',
                        subTitle: 'Legendary Edition',
                        image: 'http://hdqwalls.com/wallpapers/dark-siders-game-hd.jpg',
                        downloadContent:[
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
                        id: 2,
                        name: 'Game Of Thor 2',
                        subTitle: 'Legendary Edition',
                        image: 'http://hdqwalls.com/wallpapers/dark-siders-game-hd.jpg',
                        downloadContent:[
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
                        id: 3,
                        name: 'Game Of Thor 3',
                        subTitle: 'Legendary Edition',
                        image: 'http://hdqwalls.com/wallpapers/dark-siders-game-hd.jpg',
                        downloadContent:[
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
                ]
            }
        },
        template: `<div class="row p-3 m-0 flex-wrap" style="width: 1000px">
                    <GamesList :games="games" />
                </div>`
    }))

storiesOf('Text label', module)
    .add('default', () => ({
        components: {
            TextLabel: () => import('@ericmuyser/hyper-ui').then(m => m.TextLabel),
        },
        template: `<div class="p-3 m-0 text-white" style="width: 900px">
                    <TextLabel>Default</TextLabel>
                    <TextLabel type="white">White</TextLabel>
                    <TextLabel type="info">Info</TextLabel>
                    <TextLabel type="success">Success</TextLabel>
                    <TextLabel type="danger">Danger</TextLabel>
                    <TextLabel type="warning">Warning</TextLabel>
                    <TextLabel bgColor="#684BA5">Custom</TextLabel>
                    <hr />
                    <div class="h3 mb-3">Example</div>
                    <p><TextLabel>Lorem</TextLabel> ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Lorem ipsum <TextLabel type="success">dolor sit</TextLabel>, consectetur adipiscing elit.</p>
                    <p>Nulla euismod lorem a vehicula <TextLabel type="info">condimentum</TextLabel>.</p>
                </div>`
    }))


storiesOf('Option Block', module)
    .add('default', () => ({
        components: {
            OptionBlock: () => import('@ericmuyser/hyper-ui').then(m => m.OptionBlock),
        },
        data() {
            return {
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
                        <OptionBlock shadow
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
        components: {
            GameLibraryCard: () => import('@ericmuyser/hyper-ui').then(m => m.GameLibraryCard),
        },
        data() {
            return {
                game: {
                    id: '2',
                    images: {
                        mediumTile: 'https://kor.ill.in.ua/m/610x385/1848785.jpg'
                    },
                    name: 'Dota 2',
                }
            }
        },
        template: `
            <div class="row p-5" style="width: 1000px">
                <div class="col-4">
                    <GameLibraryCard :name="game.name" :image="game.meta.images.mediumTile" />
                </div>
            </div>
        `
    }))


storiesOf('Quick Launch', module)
    .add('default', () => ({
        components: {
            QuickLaunch: () => import('@ericmuyser/hyper-ui').then(m => m.QuickLaunch),
        },
        data() {
            return {
                game: {
                    id: '2',
                    images: {
                        mediumTile: 'https://kor.ill.in.ua/m/610x385/1848785.jpg'
                    },
                    name: 'Dota 2',
                }
            }
        },
        template: `
            <div class="row p-5" style="width: 1000px">
                <div class="col-4">
                    <QuickLaunch />
                </div>
            </div>
        `
    }))


storiesOf('Global Search', module)
    .add('default', () => ({
        components: {
            GlobalSearch: () => import('@ericmuyser/hyper-ui').then(m => m.GlobalSearch),
        },
        data() {
            return {
            }
        },
        template: `
            <div class="row p-5" style="width: 1000px">
                <div class="col-7">
                    <GlobalSearch />
                </div>
            </div>
        `
    }))
    .add('header bar', () => ({
        components: {
            SearchBar: () => import('@ericmuyser/hyper-ui').then(m => m.SearchBar),
        },
        data() {
            return {

            }
        },
        template: `
            <div class="row m-4" style="width: 350px">
                <div class="col-12">
                    <SearchBar />
                </div>
            </div>
        `
    }))


storiesOf('Giphy', module)
    .add('default', () => ({
        components: {
            Giphy: () => import('@ericmuyser/hyper-ui').then(m => m.Giphy),
        },
        data() {
            return {
                gif: ''
            }
        },
        methods: {
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
                    <Giphy class="w-100" @choose="setGif" />
                </div>
            </div>
        `
    }))


storiesOf('Table', module)
    .add('default', () => ({
        components: {
            SimpleTable: () => import('@ericmuyser/hyper-ui').then(m => m.SimpleTable),
        },
        data() {
            return {
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
                <SimpleTable>
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
                </SimpleTable>
            </div>
        `
    }))


storiesOf('Text Formatting', module)
    .add('default', () => ({
        components: {
            TextFormatting: () => import('@ericmuyser/hyper-ui').then(m => m.TextFormatting),
            BasicPopup: () => import('@ericmuyser/hyper-ui').then(m => m.BasicPopup),
        },
        template: `
            <div class="p-4" style="width: 600px">
                <BasicPopup :activated="true">
                    <template slot="body">
                        <TextFormatting />
                    </template>
                </BasicPopup>
            </div>
        `
    }))


storiesOf('Activity block', module)
    .add('default', () => ({
        components: {
            ActivityBlock: () => import('@ericmuyser/hyper-ui').then(m => m.ActivityBlock),
        },
        template: `<div style="width: 1000px;" class="p-5">
                    <ActivityBlock @play="" @install="" @help="" labelIcon="list" :percent="37" earnedAchievements="31" totalAchievements="193">
                        <template slot="label">
                            In Library
                        </template>
                        <template slot="title">
                            StarBreak is already in your BlockHub library ( Purchased 31 May, 2018 )
                        </template>
                        <template slot="description">
                            0.1 hrs last two weeks / 0.1 hrs on record
                        </template>
                    </ActivityBlock>
                </div>`
    }))


storiesOf('Metro', module)
    .add('metro-tile', () => ({
        components: {
            MetroTile: () => import('@ericmuyser/hyper-ui').then(m => m.MetroTile),
        },
        data() {
            return {
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
                    <MetroTile
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
                    </MetroTile>
                </div>
            </div>`
    }))
    .add('metro-item', () => ({
        components: {
            MetroItem: () => import('@ericmuyser/hyper-ui').then(m => m.MetroItem),
        },
        data() {
            return {
                image: 'https://cdn.images.dailystar.co.uk/dynamic/184/photos/532000/620x/Days-Gone-PS4-Release-Date-gameplay-trailers-E3-2018-news-updates-for-new-zombie-games-677269.jpg'
            }
        },
        template: `<div class="m-4">
                    <MetroItem :image="image">
                        <div class="h4 font-weight-bold">
                            Aenean blandit augue non est
                        </div>
                        <div>
                            Vestibulum mi neque, commodo et blandit id, auctor at metus. Quisque varius ut nisi a tincidunt.
                            Maecenas nibh sem, malesuada et cursus nec, sollicitudin accumsan sapien.
                        </div>
                    </MetroItem>
                    <hr />
                    <MetroItem :image="image" :fullImage="true">
                        <div class="h4 font-weight-bold">
                            Aenean blandit augue non est
                        </div>
                        <div>
                            Vestibulum mi neque, commodo et blandit id, auctor at metus. Quisque varius ut nisi a tincidunt.
                            Maecenas nibh sem, malesuada et cursus nec, sollicitudin accumsan sapien.
                        </div>
                    </MetroItem>
                    <hr />
                    <MetroItem :image="image" :fullImage="true" :shadow="true">
                        <div class="h4 font-weight-bold">
                            Aenean blandit augue non est
                        </div>
                        <div>
                            Vestibulum mi neque, commodo et blandit id, auctor at metus. Quisque varius ut nisi a tincidunt.
                            Maecenas nibh sem, malesuada et cursus nec, sollicitudin accumsan sapien.
                        </div>
                    </MetroItem>
                </div>`
    }))
    .add('metro grid', () => ({
        components: {
            MetroGrid: () => import('@ericmuyser/hyper-ui').then(m => m.MetroGrid),
            MetroItem: () => import('@ericmuyser/hyper-ui').then(m => m.MetroItem),
        },
        data() {
            return {
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
                    <MetroGrid>
                        <MetroItem v-for="item in items" :image="item.image" width="300px ">
                            <div class="h4 font-weight-bold">
                                {{ item.title }}
                            </div>
                            <div>
                                {{ item.text }}
                            </div>
                        </MetroItem>
                    </MetroGrid>
                </div>`
    }))


storiesOf('Security check', module)
    .add('default', () => ({
        components: {
            SecurityCheck: () => import('@ericmuyser/hyper-ui').then(m => m.SecurityCheck),
        },
        data() {
            return {
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
                        <SecurityCheck @sendCode="sendCode" @codeSubmit="checkCode" :codeIsSend="code" :wrongCode="err" />
                    </div>`


    }))


storiesOf('Browser UI', module)
    .add('default', () => ({
        components: {
            BrowserUI: () => import('@ericmuyser/hyper-ui').then(m => m.BrowserUI),
        },
        template: `<div style="width: 600px" class="m-4"><BrowserUI /></div>`
    }))

storiesOf('Settings', module)
    .add('default', () => ({
        components: {
            Settings: () => import('@ericmuyser/hyper-ui').then(m => m.Settings),
        },
        template: `<div class="m-4" style="width: 1000px;">
                        <Settings />
                    </div>`
    }))

storiesOf('Add friends', module)
    .add('default', () => ({
        components: {
            AddFriends: () => import('@ericmuyser/hyper-ui').then(m => m.AddFriends),
        },
        data() {
            return {
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
                        <Button class="mx-3" @click=" permission = !permission ">
                            Toggle permission
                        </Button>
                        <Button class="mx-3" @click=" connected = !connected ">
                            Toggle connected
                        </Button>
                        <hr />
                        <AddFriends :permission="permission" :connected="connected" :userFriends="userFriends" />
                    </div>`
    }))


storiesOf('Draggable video', module)
    .add('default', () => ({
        components: {
            DraggableVideo: () => import('@ericmuyser/hyper-ui').then(m => m.DraggableVideo),
        },
        template: `<div><DraggableVideo /></div>`
    }))


storiesOf('Video', module)
    .add('default', () => ({
        components: {
            Video: () => import('@ericmuyser/hyper-ui').then(m => m.Video)
        },
        data() {
            return {
                youtube: '-QEdXZWMe-M',
                twitch: 'inflameswemust',
                src: 'https://static.videezy.com/system/resources/previews/000/004/944/original/Magical_Tree_4K_Living_Background.mp4',
            }
        },
        template: `<div class="p-4">
                    <div class="row">
                        <div class="col-4">
                            <div class="h3 text-white">
                                Youtube video
                            </div>
                            <Video :youtube="youtube" height="300" />
                        </div>
                        <div class="col-4">
                            <div class="h3 text-white">
                                Twitch video
                            </div>
                            <Video :twitch="twitch" height="300" />
                        </div>
                        <div class="col-4">
                            <div class="h3 text-white">
                                Local video
                            </div>
                            <Video :src="src" height="300" />
                        </div>
                    </div>
            </div>`
    }))


storiesOf('Pricing table', module)
    .add('v1', () => ({
        components: {
            PricingTable: () => import('@ericmuyser/hyper-ui').then(m => m.PricingTableV1),
        },
        data() {
            return {
                items: [
                    {
                        title: 'Premium',
                        description: 'This is really a good deal!',
                        price: '29',
                        highline: false,
                        specs: [
                            'Some great feature',
                            'Another coll feature',
                            'And more ...',
                        ]
                    },
                    {
                        title: 'Plus',
                        description: 'This is really a good deal!',
                        price: '59',
                        highline: true,
                        specs: [
                            'Some great feature',
                            'Another coll feature',
                            'And more ...',
                        ]
                    },
                    {
                        title: 'Basic',
                        description: 'This is really a good deal!',
                        price: '39',
                        highline: false,
                        specs: [
                            'Some great feature',
                            'Another coll feature',
                            'And more ...',
                        ]
                    }
                ]
            }
        },
        template: `<div><PricingTable :items="items" /></div>`
    }))
    .add('v2', () => ({
        components: {
            PricingTable: () => import('@ericmuyser/hyper-ui').then(m => m.PricingTableV2),
        },
        data() {
            return {
                items: [
                    {
                        title: 'Premium',
                        description: 'This is really a good deal!',
                        price: '29',
                        highline: false,
                        specs: [
                            'Some great feature',
                            'Another coll feature',
                            'And more ...',
                        ]
                    },
                    {
                        title: 'Plus',
                        description: 'This is really a good deal!',
                        price: '59',
                        highline: true,
                        specs: [
                            'Some great feature',
                            'Another coll feature',
                            'And more ...',
                        ]
                    },
                    {
                        title: 'Basic',
                        description: 'This is really a good deal!',
                        price: '39',
                        highline: false,
                        specs: [
                            'Some great feature',
                            'Another coll feature',
                            'And more ...',
                        ]
                    }
                ]
            }
        },
        template: `<div><PricingTable :items="items" /></div>`
    }))

storiesOf('Pro mode', module)
    .add('button', () => ({
        components: {
            ProModeButton: () => import('@ericmuyser/hyper-ui').then(m => m.ProModeButton),
        },
        template: `<div class="p-4">
                        <ProModeButton icon="gem">
                            Go Pro
                        </ProModeButton>
                    </div>`
    }))
    .add('notice 1', () => ({
        components: {
            ProModeN1: () => import('@ericmuyser/hyper-ui').then(m => m.ProModeN1),
        },
        template: `<div class="p-4">
                        <ProModeN1>
                            Hey Eron, you're on a Basic account. Unlock more space and sharing controls!
                        </ProModeN1>
                    </div>`
    }))
    .add('notice 2', () => ({
        components: {
            ProModeN2: () => import('@ericmuyser/hyper-ui').then(m => m.ProModeN2),
        },
        template: `<div class="p-4">
                        <ProModeN2>
                            Hey Eron, you're on a Basic account. Unlock more space and sharing controls!
                        </ProModeN2>
                    </div>`
    }))


storiesOf('Contributor Box', module)
    .add('default', () => ({
        components: {
            ContributorBox: () => import('@ericmuyser/hyper-ui').then(m => m.ContributorBox),
        },
        data() {
            return {
                steps: [
                    {
                        value: true,
                        label: 'Add a headline to your profile',
                        description: 'Tell the community a bit about your self'
                    },
                    {
                        value: false,
                        label: 'Upvote 3 days in a row',
                        description: 'Come back 3 days in a row and upvote any product'
                    },
                    {
                        value: false,
                        label: 'Subscribe to the daily digest',
                        description: 'Keep up-to-date with the latest in tech'
                    },
                    {
                        value: false,
                        label: 'Upvote 11 products',
                        description: 'Explore Product Hunt and upvote 11 products'
                    },
                ]
            }
        },
        template: `<div class="p-5">
                      <ContributorBox :steps="steps" />
                  </div>`
    }))

storiesOf('Gift box', module)
    .add('default', () => ({
        components: {
            GiftBox: () => import('@ericmuyser/hyper-ui').then(m => m.GiftBox),
        },
        data() {
            return {
                status: 'Unredeemed',
                user: 'Nicola Roberts',
                date: '4 May',
                text: '<p>Massa enim ligula diam donec lectus ut ornare vitae ipsum elementum lectus in vivamus molestie .</p><p>Nulla molestie mattis arcu et ornare porta nulla ipsum sit, ultricies nam integer.</p> ',
                gift: {
                    name: 'Some gift name',
                    image: 'https://media01.gameloft.com/layout/support/revamp/assets/images/game-banner/banner_CC_Windows.jpg',
                    description: 'In eget massa a mauris ultricies finibus a nec nunc. In faucibus consectetur diam id fermentum.\n' +
                        '                    Aenean\n' +
                        '                    dapibus massa quis venenatis porta. Curabitur non tempor dolor. Proin pulvinar ipsum turpis, vel\n' +
                        '                    auctor\n' +
                        '                    elit laoreet ac. Duis consectetur sem magna.'
                }
            }
        },
        template: `<div class="p-5">
                      <GiftBox :status="status"
                            :user="user"
                            :date="date"
                            :text="text"
                            :gift="gift"
                            @accept=""
                            @decline="" />
                  </div>`
    }))

storiesOf('Profile picker', module)
    .add('default', () => ({
        components: {
            ProfilePicker: () => import('@ericmuyser/hyper-ui').then(m => m.ProfilePicker),
        },
        data(){
                return{
                    profiles: [
                    {
                            id: 1,
                            name: 'Mr. Satoshi',
                            wallet: '0x6cc5f688a315f3dc28a7781717a',
                            img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                            default: false,
                            edit: false,
                            status: 'warning'
                    },
                            {
                                    id: 2,
                                    name: 'Mr. Satoshi',
                                    wallet: '0x6cc5f688a315f3dc28a7781717a',
                                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                                    default: false,
                                    edit: false,
                                    status: 'danger'
                            },
                            {
                                    id: 3,
                                    name: 'Mr. Satoshi',
                                    wallet: '0x6cc5f688a315f3dc28a7781717a',
                                    img: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                                    default: false,
                                    edit: false,
                        status: 'success'
                            },
                ]
            }
        },
        template: `<div class="p-5">
                      <ProfilePicker :profiles="profiles" />
                  </div>`
    }))


storiesOf('Vote', module)
    .add('default', () => ({
        components: {
            Vote: () => import('@ericmuyser/hyper-ui').then(m => m.Vote),
        },
        template: `<div class="p-5">
                        <div class="position-relative" style="width:300px">
                            <Vote :votes="4" />
                        </div>
                    </div>`

    }))

storiesOf('Social connect', module)
    .add('default', () => ({
        components: {
            SocialConnect: () => import('@ericmuyser/hyper-ui').then(m => m.SocialConnect)
        },
        data() {
            return {
                    socials: [
                            {
                                    name: 'Facebook',
                                    description: 'Shares achievements to your news feed.',
                                    icon: '/img/icons/facebook.svg',
                                    connected: false
                            },
                            {
                                    name: 'Twitter',
                                    description: 'Shares achievements to your Twitter feed.',
                                    icon: '/img/icons/twitter.svg',
                                    connected: false
                            },
                            {
                                    name: 'Twitch',
                                    description: 'Lets you contribute to streamers.',
                                    icon: '/img/icons/twitch-large.png',
                                    connected: false
                            },
                            {
                                    name: 'Discord',
                                    description: 'Lets you connect to your Discord voice/chat channels.',
                                    icon: '/img/icons/discord.png',
                                    connected: false
                            },
                            {
                                    name: 'Steam',
                                    description: 'Lets you connect to your Steam account.',
                                    icon: '/img/icons/steam.png',
                                    connected: false
                            }
                    ]
            }
        },
        template: `<div class="p-5 text-white" style="width: 550px">
                        <SocialConnect
                            v-for="(item, index) in socials"
                            :key="index"
                            :class="index + 1 == socials.length ? 'margin-bottom-0' : 'margin-bottom-20'"
                            :icon="item.icon"
                            :name="item.name"
                            :description="item.description"
                            :connected="item.connected" />
                            </div>`
    }))

// storiesOf('Shortcut Grid', module)
//         .add('default', () => ({
//             components: {
//                     'c-shortcutsidebar: () => import('~/components/shortcut-sidebar')
//             },
//                 data(){
//                         return{
//                                 shortcuts: []
//                         }
//                 },
//                 template: `<div class="p-5 text-white" style="width: 550px">
//                                                 <c-shortcut-sidebar :items="shortcuts" />
//                     </div>`
//         }))


storiesOf('QR code', module)
    .add('default', () => ({
        components: {
            QrCode: () => import('@ericmuyser/hyper-ui').then(m => m.QrCode),
        },
        template: `<div class="p-5">
                        <QrCode
                            style="display: inline-block; background: #fff;"
                            :config="{
                                value: '23234234k23n4k24j',
                                imagePath: 'http://localhost:8000/static/img/logo-only.png',
                                filter: 'threshold',
                                size: 400,
                            }" />
                    </div>`
    }))


storiesOf('Curator panel', module)
    .add('claim', () => ({
        components: {
            Claim: () => import('@ericmuyser/hyper-ui').then(m => m.Claim),
        },
        data(){
            return{
                claimTypes: [
                    {
                        type: 'warning',
                        title: 'Warning claim',
                        text: 'Pellentesque id lectus et sem convallis venenatis dapibus nec est'
                    },
                    {
                        type: 'success',
                        title: 'Success claim',
                        text: 'Pellentesque id lectus et sem convallis venenatis dapibus nec est'
                    },
                    {
                        type: 'danger',
                        title: 'Danger claim',
                        text: 'Pellentesque id lectus et sem convallis venenatis dapibus nec est'
                    },
                    {
                        type: 'info',
                        title: 'Info claim',
                        text: 'Pellentesque id lectus et sem convallis venenatis dapibus nec est'
                    }
                ]
            }
        },
            template: `<div class="p-5">
                    <Claim
                        class="mb-4"
                        v-for="claim in claimTypes"
                        :title="claim.title"
                        :type="claim.type">
                            {{ claim.text }}
                    </Claim>
                </div>`
    }))
    .add('info', () => ({
        components: {
            CuratorInfo: () => import('@ericmuyser/hyper-ui').then(m => m.CuratorInfo)
        },
            template: `<div class="p-5" style="width: 350px">
                        <CuratorInfo title="Curator panel">
                            <div v-if="!editing">
                                <p>
                                    20 people have
                                    curated this idea.
                                </p>
                                <ul>
                                    <li>
                                        <strong>3</strong>
                                        Approved with 0 changes
                                    </li>
                                    <li>
                                        <strong>7</strong>
                                        Approved with at least 1 change requested
                                    </li>
                                    <li>
                                        <strong>6</strong>
                                        Disapproved with requests
                                    </li>
                                    <li>
                                        <strong>4</strong>
                                        Disapproved with 0 changes
                                    </li>
                                </ul>
                            </div>
                        </CuratorInfo>
                    </div>`
    }))


storiesOf('Clock', module)
    .add('default', () => ({
        components: {
            Clock: () => import('@ericmuyser/hyper-ui').then(m => m.Clock),
        },
        template: `<div class="p-5"><Clock /></div>`
    }))

storiesOf('Content navigation', module)
    .add('default', () => ({
        components: {
            ContentNavigation: () => import('@ericmuyser/hyper-ui').then(m => m.ContentNavigation)
        },
        template: `<div class="p-5">
                        <ContentNavigation
                            :setLimits="4">
                            <!--<div-->
                                <!--slot-scope="props"-->
                                <!--class="offers__list">-->
                                <!--<div-->
                                    <!--v-for="(item, index) in props.items"-->
                                    <!--:key="index"-->
                                    <!--class="list-item">-->
                                    <!--<div class="item-name-img">-->
                                        <!--<c-img :src="item.image" />-->
                                        <!--<h4>{{ item.name }}</h4>-->
                                    <!--</div>-->
                                    <!--<div class="item-company text-center">-->
                                        <!--{{ item.company_name }}-->
                                    <!--</div>-->
                                    <!--<div class="item-info">-->
                                        <!--<span class="userName">-->
                                            <!--{{ item.userName }}-->
                                        <!--</span>-->
                                        <!--<span class="price">-->
                                            <!--$ {{ item.price.current }}-->
                                        <!--</span>-->
                                        <!--<a-->
                                            <!--v-if="item.price.current"-->
                                            <!--href="#"-->
                                            <!--class="btn btn-success float-right">-->
                                            <!--<c-icon name="cart-plus" />-->
                                            <!--Proceed to Purchase-->
                                        <!--</a>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <template
                                slot="left-content"
                                class="text-left">
                                <strong>245345</strong> Available on the market
                            </template>
                            <template
                                slot="right-content"
                                class="text-right">
                                <strong>319</strong> On the list
                                <a
                                    href="#"
                                    class="text-white mx-2">
                                    <i class="fas fa-reply" />
                                </a>
                                <a
                                    href="#"
                                    class="text-white">
                                    <i class="fas fa-bookmark" />
                                </a>
                            </template>
                        </ContentNavigation>
                    </div>`
    }))

storiesOf('Broken page', module)
    .add('default', () => ({
        components: {
            BrokenPage: () => import('~/components/broken-page')
        },
        data() {
            return {
                isError: {
                    statusCode: 401,
                    message: 'Unauthorized'
                }
            }
        },
        template: `<BrokenPage :isError="isError" class="text-white" />`
    }))

storiesOf('Benchmark', module)
    .add('default', () => ({
        components: {
            Benchmark: () => import('@ericmuyser/hyper-ui').then(m => m.Benchmark)
        },
        data() {
            return {
                settings: {
                    client: {
                        autoUpdateSettings: function() {
                            alert('autoUpdateSettings function')
                        },
                    }
                }
            }
        },
        template: `<div class="p-5"><Benchmark :settings="settings" class="text-white" /></div>`
    }))

storiesOf('Trade offer', module)
    .add('default', () => ({
        components: {
            TradeOffer: () => import('@ericmuyser/hyper-ui').then(m => m.TradeOffer)
        },
        data(){
            return {
                offer: {
                    new: true,
                    createdAt: Date.now(),
                    contractor: {
                        name: 'Josh Doel',
                        img: ''
                    },
                    showDetails: true,
                    yourOffer: [2,3,4,5],
                    contractorOffer: [2,3,4,5],
                    assets: [
                        {
                            name: 'Asset name',
                            image: '',
                            price: {
                                current: 23.33
                            }
                        },
                        {
                            name: 'Asset name',
                            image: '',
                            price: {
                                current: 23.33
                            }
                        },
                        {
                            name: 'Asset name',
                            image: '',
                            price: {
                                current: 23.33
                            }
                        },
                        {
                            name: 'Asset name',
                            image: '',
                            price: {
                                current: 23.33
                            }
                        }
                    ]
                }
            }
        },
        template: `<div class="p-5"><TradeOffer :offer="offer" class="text-white" /></div>`
    }))

storiesOf('Receipt', module)
    .add('default', () => ({
        components: {
            SimpleTable: () => import('@ericmuyser/hyper-ui').then(m => m.SimpleTable)
        },
        template: `
        <div style="width: 80%" class="text-white p-4">
            <div class="row align-items-center margin-bottom-30 margin-top-20">
                <div class="col-12 col-md-6 text-left">
                    <div class="h2">
                        Purchase receipt
                    </div>
                    <div class="h5">
                        09092rj20902jd02j9j2d0j2
                    </div>
                </div>
                <div class="col-12 col-md-6 text-right">
                    <strong>DATE</strong><br>
                    December 23, 2018
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-12">
                    <Block
                        title="Purchase List"
                        :bgColor="false"
                        noGutter
                        bgGradient
                        onlyContentBg
                        noPadding>
                        <div class="padding-bottom-30 padding-top-15">
                            <SimpleTable stripped>
                                <thead>
                                    <tr class="text-uppercase">
                                        <th>
                                            Content
                                        </th>
                                        <th>
                                            Expiration
                                        </th>
                                        <th>
                                            Authorization
                                        </th>
                                        <th />
                                        <th>
                                            Purchased from
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src="img/logo-only.png"
                                                    class="table-img" >
                                                <div>
                                                    <strong>
                                                        Diablo III
                                                    </strong>
                                                    <br>
                                                    Blizzard Entertainment INC
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>
                                                Expires on a Date
                                            </strong>
                                            <br>
                                            July 8th 2019
                                        </td>
                                        <td>
                                            <strong>
                                                Sell
                                            </strong>
                                            <br>
                                            Yes, publisher earns 5%
                                        </td>
                                        <td>
                                            <strong>
                                                Trade
                                            </strong>
                                            <br>
                                            No
                                        </td>
                                        <td>
                                            ETH 29.05
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Diablo III
                                            </strong>
                                            <br>
                                            Blizzard Entertainment INC
                                        </td>
                                        <td>
                                            <strong>
                                                Expires on a Date
                                            </strong>
                                            <br>
                                            July 8th 2019
                                        </td>
                                        <td>
                                            <strong>
                                                Sell
                                            </strong>
                                            <br>
                                            Yes, publisher earns 5%
                                        </td>
                                        <td>
                                            <strong>
                                                Trade
                                            </strong>
                                            <br>
                                            No
                                        </td>
                                        <td>
                                            ETH 29.05
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Diablo III
                                            </strong>
                                            <br>
                                            Blizzard Entertainment INC
                                        </td>
                                        <td>
                                            <strong>
                                                Expires on a Date
                                            </strong>
                                            <br>
                                            July 8th 2019
                                        </td>
                                        <td>
                                            <strong>
                                                Sell
                                            </strong>
                                            <br>
                                            Yes, publisher earns 5%
                                        </td>
                                        <td>
                                            <strong>
                                                Trade
                                            </strong>
                                            <br>
                                            No
                                        </td>
                                        <td>
                                            ETH 29.05
                                        </td>
                                    </tr>
                                </tbody>
                            </SimpleTable>
                        </div>
                    </Block>
                </div>
                <div class="col-12">
                    <Block
                        title="Totals"
                        :bgColor="false"
                        noGutter
                        bgGradient
                        onlyContentBg
                        noPadding>
                        <div class="padding-bottom-30 padding-top-15">
                            <SimpleTable stripped>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                Subtotal
                                            </strong>
                                        </td>
                                        <td class="text-right">
                                            ETH 29.05
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                After discount
                                            </strong>
                                        </td>
                                        <td class="text-right">
                                            ETH 29.05
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                Total
                                            </strong>
                                        </td>
                                        <td class="text-right">
                                            ETH 29.05
                                        </td>
                                    </tr>
                                </tbody>
                            </SimpleTable>
                        </div>
                    </Block>
                </div>
                <div class="col-12">
                    <Block
                        title="Recipients"
                        :bgColor="false"
                        noGutter
                        bgGradient
                        onlyContentBg
                        noPadding>
                        <div class="padding-bottom-30 padding-top-15">
                            <SimpleTable stripped>
                                <thead>
                                    <tr class="text-uppercase">
                                        <th>
                                            Amount
                                        </th>
                                        <th>
                                            Paid To
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            ETH 23.66
                                        </td>
                                        <td>
                                            Hyperbridge Technology Inc
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            ETH 193.63
                                        </td>
                                        <td>
                                            Blizzard Technology Inc
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            ETH 3.04
                                        </td>
                                        <td>
                                            TAX(GST)
                                        </td>
                                    </tr>
                                </tbody>
                            </SimpleTable>
                        </div>
                    </Block>
                </div>
            </div>
        </div>
        `
    }))


storiesOf('Order', module)
    .add('default', () => ({
        components: {
            SimpleTable: () => import('@ericmuyser/hyper-ui').then(m => m.SimpleTable),
            Block: () => import('@ericmuyser/hyper-ui').then(m => m.Block),
            Button: () => import('@ericmuyser/hyper-ui').then(m => m.Button),
        },
        data: () => data.OrderData,
        template: `
            <div style="width: 80%" class="p-4 text-white">
                <div class="row">
                    <div class="col-12 mb-5">
                        <Block title="Thanks for your order!">
                            <div class="order-info">
                                <div class="order-info__number">
                                    Order #23543422234234234
                                </div>
                                <div class="order-info__date">
                                    Order date: Dec 8, 2019 3:50 PM
                                </div>
                            </div>
                            <SimpleTable class="mt-5">
                                <thead>
                                    <tr>
                                        <th v-for="(field, idx) in tableHead">
                                            {{ field.label }}
                                        </th>
                                        <th width="60"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, idx) in tableRows">
                                        <td v-for="(field, idx) in row">
                                            {{ field }}
                                        </td>
                                        <td>
                                            <Button status="second-info">
                                                Open
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </SimpleTable>
                        </Block>
                    </div>
                    <div class="col-12 col-lg-3 d-flex flex-column">
                        <div class="h5">
                            Payment Details
                        </div>
                        <div>
                            <strong>
                                Visa
                            </strong>
                            ending in 0183
                        </div>
                        <div>
                            1239********0183
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 d-flex flex-column">
                        <div class="h5">
                            Billing information
                        </div>
                        <div>
                            Eric Hansen
                        </div>
                        <div>
                            1028 Barclay St. Apt 123
                        </div>
                        <div>
                            Vancouver, British Columbia V6E 0B1 Canada
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 ml-auto">
                        <div class="h5 pt-0 mt-0">
                            Order summary
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>
                                Items
                            </span>
                            <span>
                                $99.99
                            </span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>
                                Discount
                            </span>
                            <span>
                                $19.99
                            </span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>
                                Subtotal
                            </span>
                            <span>
                                $80.00
                            </span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>
                                Tax
                            </span>
                            <span>
                                $0.00
                            </span>
                        </div>
                        <hr />
                        <div class="h3 d-flex justify-content-between">
                            <span>
                                Order Total
                            </span>
                            <span>
                                $80.00
                            </span>
                        </div>
                        <div class="w-100 mt-5">
                            <Button status="second-success" class="w-100">
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }))


storiesOf('Decentralization-meter', module)
    .add('default', () => ({
        components: {
            DecentralizationMeter: () => import('@ericmuyser/hyper-ui').then(m => m.DecentralizationMeter),
        },
        data: () => data.OrderData,
        template: `
            <div style="width: 80%" class="p-4 text-white">
                <DecentralizationMeter />
            </div>
        `
    }))


// storiesOf('Item navigator', module)
//     .add('default', () => ({
//         components: {
//             'c-navigatoritem: () => import('~/components/item-navigator/item')
//         },
//         data(){
//             return{
//                     deletingTree: null
//             }
//         },
//         template: `<div class="p-5">
//                         <c-navigator-item
//                             v-for="(item, index) in deletingTree"
//                             :key="index"
//                             class="assets-tree--delete"
//                             :index="index"
//                             :item="item"
//                             :listLength="3"
//                             hideButtons />
//                     </div>`
//     }))





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
