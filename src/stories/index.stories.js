/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean, number, object} from '@storybook/addon-knobs/vue'

import '../css/styles.scss'

import * as data from './components-data'

//import '!style-loader!css-loader!./styles.scss'

import SaleBox from '../ui/components/sale-box/box.vue'
storiesOf('Sale Box', module)
    .add('default', () => ({
        components: {
            'c-sale-box': SaleBox
        },
        data() {
            let title = 'test';
            return {
                sale_box: {
                    title: title
                }
            }
        },
        template: '<div class="row"><div class="col-6 p-5"><c-sale-box :sale_box="sale_box"></c-sale-box></div></div>'
    }))

import AssetsImporter from '../ui/components/asset-importer/index.vue'
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

import Notification from '../ui/components/notification/index.vue'
storiesOf('Notifications', module)
    .add('default', () => ({
        components: {
            'c-notification' : Notification
        },
        data() {
            return {
                notif: {
                    type: 'info',
                    title: 'Info message',
                    text: 'Something is changed in our policy, please view this notification.Click to view full',
                    actionOnClose: false,
                    actionOnTextClick: true
                },
                notifs: [
                    {
                        type: 'info',
                        title: 'Info message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: true,
                        actionOnClose: false,
                        actionOnTextClick: true
                    },
                    {
                        type: 'warning',
                        title: 'Warning message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: false,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'danger',
                        title: 'Danger message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'success',
                        title: 'Success message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: '',
                        title: 'Other message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
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

import Searcher from '../ui/components/searcher';
storiesOf('Searcher', module)
    .add('default', () => ({
        components: { Searcher },
        template: `<searcher />`
    }))

import RatingStars from '../ui/components/rating-stars';
storiesOf('Rating', module)
    .add('Stars', () => ({
        components: { RatingStars },
        template: '<rating-stars :number="3.5"/>'
    }));

import Author from '../ui/components/author';
storiesOf('Author', module)
    .add('Author', () => ({
        components: { Author },
        data() {
            return {
                author: {
                    name: 'SatoSan',
                    img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'
                }
            }
        },
        template: `<author :author="author"/>`
    }))

import Tags from '../ui/components/tags';
storiesOf('Tags', module)
    .add('Tags', () => ({
        components: { Tags },
        template: `<tags :tags="['RPG', 'Open-World']"/>`
    }))

import LoadingBar from '../ui/components/loading-bar';
import LoadingLogo from '../ui/components/loading-bar/logo-loader';
storiesOf('LoadingBar', module)
    .add('LoadingBar', () => ({
        components: { LoadingBar },
        template: `<loading-bar/>`
    }))
    .add('LoadingLogo', () => ({
        components: {
            'c-loading-logo': LoadingLogo
        },
        template: `<div class="p-5" style="width:300px;background: #fff"><c-loading-logo :isLoading="true"/></div>`
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
        components: { NavigationAccount }, template: `<div class="col-2 py-3"><NavigationAccount /></div>`
    }))
    .add('asset', () => ({
        components: { NavigationAsset }, template: `<div class="col-2 py-3"><NavigationAsset /></div>`
    }))
    .add('funding', () => ({
        components: { NavigationFunding }, template: `<div class="col-2 py-3"><NavigationFunding /></div>`
    }))
    .add('help', () => ({
        components: { NavigationHelp }, template: `<div class="col-2 py-3"><NavigationHelp /></div>`
    }))
    .add('product', () => ({
        components: { NavigationProduct }, template: `<div class="col-2 py-3"><NavigationProduct /></div>`
    }))
    .add('project', () => ({
        components: { NavigationProject }, template: `<div class="col-2 py-3"><NavigationProject /></div>`
    }))
    .add('settings', () => ({
        components: { NavigationSettings }, template: `<div class="col-2 py-3"><NavigationSettings /></div>`
    }))
    .add('wallet', () => ({
        components: { NavigationWallet }, template: `<div class="col-2 py-3"><NavigationWallet /></div>`
    }))


import Card from '../ui/components/projects/card';
storiesOf('Projects', module)
    .add('card', () => ({
        components: { Card },
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
            <div class="col-4">
                <card
                    v-for="(project, index) in projects"
                    :key="index"
                    :project="project"
                />
            </div>
        `
    }))

import Tabs from '../ui/components/tab/tabs.vue'
import Tab from '../ui/components/tab/tab.vue'
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
                            <a href="#3" class="btn btn-sm btn-success float-right">Button</a>
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


import MilestonesLine from '../ui/components/milestones-line/index.vue'
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


import SidebarMenu from '../ui/components/sidebar-menu/index.vue'
import SidebarMenuLink from '../ui/components/sidebar-menu/menu_item'
storiesOf('Sidebar Menu', module)
    .add('Main title', () => ({
        components: {
            'c-sidebar-menu': SidebarMenu
        },
        data() {
            return {
                menu: [
                    {
                        url: '#3',
                        link_text: 'Link Text',
                        target: '_self',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text Blank target',
                        target: '_blank',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text with Icon',
                        target: '_self',
                        icon: 'fas fa-gem'
                    }
                ],
            }
        },
        template: '<div class="row m-0">' +
            '<div class="col-3 p-4">' +
            '<c-sidebar-menu title="Menu Big Title" icon="fab fa-angellist" :menu=menu />' +
            '</div>' +
            '</div>'
    }))
    .add('Sub title', () => ({
        components: {
            'c-sidebar-menu': SidebarMenu
        },
        data() {
            return {
                menu: [
                    {
                        url: '#3',
                        link_text: 'Link Text',
                        target: '_self',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text Blank target',
                        target: '_blank',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text with Icon',
                        target: '_self',
                        icon: 'fas fa-gem'
                    }
                ],
            }
        },
        template: `<div class="row m-0">
                <div class="col-3 p-4">
                    <c-sidebar-menu sub_title="This sub title" sub_icon="fas fa-info-circle" :menu="menu" />
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
                                 url="#333"
                                 target="_self"
                                 icon="fas fa-link"
                                 link_text="Single Link">
            </c-sidebar-menu-link>
                </div>
            </div>`
    }));;

const injectButtonTemplate = code => `
    <div class="row m-0 p-3">
        <div class="col-12">
            ${code}
        </div>
    </div>
`;

import Buttons from '../ui/components/buttons/index.vue'
storiesOf('Buttons', module)
    .add('default', () => ({
        components: { 'c-button': Buttons },
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <c-button @click="testFunction">
                default
            </c-button>
        `)
    }))
    .add('info', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="info">info</c-button>
        `)
    }))
    .add('success', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="success">success</c-button>
        `)
    }))
    .add('danger', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="danger">danger</c-button>
        `)
    }))
    .add('[options] - swap order', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="success" swap_order>success</c-button>
        `)
    }))
    .add('[options] - hide icon', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="success" icon_hide>success</c-button>
        `)
    }))
    .add('[options] - emoji', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="success">Message 👺👻👽</c-button>
        `)
    }))
    .add('[options] - custom icon', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="success" icon="anchor">success!</c-button>
        `)
    }))
    .add('[options] - button tag', () => ({
        components: { 'c-button': Buttons },
        template: injectButtonTemplate(`
            <c-button status="danger" tag="button">Im button</c-button>
        `)
    }));


import MoneyInfo from '../ui/components/money-info/index.vue'
storiesOf('Money Info', module)
    .add('default', () => ({
        components: {
            'c-money-info': MoneyInfo
        },
        template: `
        <div class="row m-0 p-3">
            <c-money-info label="Spent" percent="63" amount="555.999" goal="555.999" />
        </div>
        `
    }));

import Checkbox from '../ui/components/checkbox/checbox.vue'
import CheckboxGroup from '../ui/components/checkbox/checbox-group.vue'
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
            <c-checkbox id="test_check" label="This is the test checkbox" v-model="value" />
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
                <c-checkbox id="test_check_1" label="This is the first checkbox" v-model="value" />
                <c-checkbox id="test_check_2" label="This is the second checkbox with longer text" v-model="value" />
                <c-checkbox id="test_check_3" label="This is the checkbox" v-model="value" />
                <c-checkbox id="test_check_4" label="This is the test checkbox" v-model="value" />
            </c-checkbox-group>
        </div>
        `
    }));

import Tooltips from '../ui/components/tooltips/index.vue'
storiesOf('Tooltips', module)
    .add('dark', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row">
                <div class="col-4 text-center">
                            <c-tooltips name="Hover Me(left Position)!" position="left" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Center Position)!" position="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Right Position)!" position="right" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false' />
                </div>
            </div>
        `
    }))
    .add('light', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row">
                <div class="col-4 text-center">
                            <c-tooltips name="Hover Me(left Position)!" position="left" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='true' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Center Position)!" position="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='true' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Right Position)!" position="right" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='true' />
                </div>
            </div>
        `
    }))
    .add('custom content', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row">
                <div class="col-6 text-center">
                    <c-tooltips name="Click Me(Custom content)!" type="click" position="left" :lightStyle='true'>
                        <p class="p-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <p class="p-0 m-0">Lipsum generator.</p>
                        <a href="#3" class="btn btn-sm btn-danger mt-2">Some link</a>
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

import ActivityChart from '../ui/components/activity-chart/index.vue'
storiesOf('Activity Chart', module)
    .add('default', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" :head_months="head_months" />
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
                <c-activity-chart title="Activity Chart" :years="years" :head_months="head_months" size="md" />
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
                <c-activity-chart title="Activity Chart" :years="years" :head_months="head_months" size="sm" />
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
                <c-activity-chart title="Activity Chart" :years="years" :head_months="head_months" size="xs" />
            </div>
        `
    }))

import PopUps from '../ui/components/popups/index.vue'
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
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is dafault popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="default" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" title="Error" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
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
                console.log('PopUp was closed!!!!!!!!!')
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is warning popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="warning" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Warning" type="warning" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
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
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is danger popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="danger" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" title="Danger" type="danger" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
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
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is info popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="info" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" title="Info" type="info" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
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
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is success popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" type="success" title="Success" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))

import RangeSlider from '../ui/components/range-slider/index.vue'
storiesOf('Range Slider', module)
    .add('single range slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider label="Single slider" :min="45" />
            </div>
         </div>
        `
    }))
    .add('single step slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider label="Single step slider"
                 :min="1"
                 :max="10"
                 :step="1"
                 :gridNum="2"
                 :grid="true"/>
            </div>
         </div>
        `
    }))
    .add('double range slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider
                label="Double slider"
                :min="0"
                :from="25"
                :to="67"
                type="double" />
            </div>
         </div>
        `
    }))
    .add('double grid range slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider
                label="Double slider"
                :min="0"
                :from="25"
                :to="67"
                :grid="true"
                type="double" />
            </div>
         </div>
        `
    }))

import AssetsGrid from '../ui/components/assets-grid/index.vue'
storiesOf('Assets Grid', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-assets-grid': AssetsGrid
        },
        data() {
            return object('Data', {
                assets_list: [
                    {
                        name: 'some item name',
                        price: '1.99',
                        count: '240.000',
                        main_img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        sub_img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    },
                    {
                        name: 'some another item name',
                        price: '99.99',
                        count: '824.000',
                        main_img: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
                        sub_img: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-assets-grid :list="assets_list" />
         </div>
        `
    }));

import AssetsPopup from '../ui/components/asset-overview-popup/index.vue'
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
                    ]
                }
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-popup :asset="asset" />
         </div>
        `
    }));

import Switch from '../ui/components/switch/index.vue'
storiesOf('Switch', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch label="Some text" label_position="right" label_size="22px" />
         </div>
        `
    }))
    .add('small', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch size="sm" :value=true />
         </div>
        `
    }))
    .add('large', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch size="lg" :value=true />
         </div>
        `
    }));


import AssetsList from '../ui/components/assets-list-item/featured-list.vue'
import AssetsListDetail from '../ui/components/assets-list-item/index.vue'

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
            'c-asset-list': AssetsListDetail
        },
        data() {
            return object('Data', {
                items: [
                    {
                        img: 'https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de',
                        title: 'Magic Plate Armor',
                        price: '4.99',
                        count: '350.000'
                    },
                    {
                        img: 'https://vignette.wikia.nocookie.net/angrybirds-fiction/images/8/8b/Toons_assets_chuck_01.png/revision/latest?cb=20150120103056&path-prefix=ru',
                        title: 'Magic Chuck',
                        price: '19.99',
                        count: '50.000'
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-list :items="items" itemInRow="4" />
         </div>
        `
    }))


import Block from '../ui/components/block-1/index.vue'

storiesOf('Block', module)
    .add('default', () => ({
        components: {
            'c-block': Block
        },
        template: `
         <div class="row m-0 p-3">
             <c-block title="This is block title" bClass="col-8">
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

import CustomModal from '../ui/components/custom-modal/index'

storiesOf('Modal', module)
    .add('default', () => ({
        components: {
            'c-modal': CustomModal
        },
        template: `
         <div class="row m-0 p-3">
             <div class="col-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch modal
                </button>
            </div>
            <c-modal id="exampleModal" title="Some modal title">
                <template slot="modal_body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id rhoncus turpis.</p>
                    <p>Aliquam nec blandit mi. Integer sed neque urna.</p>
                </template>
                <template slot="modal_footer">
                    <a href="#3" class="btn btn-sm btn-success">Some Link</a>
                </template>
            </c-modal>
         </div>
        `
    }))

import Dropdown from '../ui/components/dropdown-menu/index'

storiesOf('Dropdown', module)
    .add('default', () => ({
        components: {
            'c-dropdown': Dropdown
        },
        template: `
         <div class="row m-0 p-3">
             <c-dropdown />
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
                <c-traded-assets :items="frequently_traded_assets" assets_url="#some_url_here">
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

import GamePlans from '../ui/components/game-plans/list'

storiesOf('Game Plans', module)
    .add('default', () => ({
        components: {
            'c-game-plans': GamePlans
        },
        data() {
            return object('Data', {
                plans: [
                    {
                        "title": "Play Tibia Now",
                        "link": "#3",
                        "link_text": "Play Now"
                    },
                    {
                        "title": "1 Month Premium benefits",
                        "price": "34",
                        "link": "#4",
                        "link_text": "Buy Now"
                    },
                    {
                        "title": "2 Month Premium benefits",
                        "price": "57",
                        "link": "#4",
                        "link_text": "Buy Now"
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-5">
                <c-game-plans :items="plans" />
            </div>
         </div>
         `
    }))

import GamesGrid from '../ui/components/games-grid/with-description'
import GamesGridSimple from '../ui/components/games-grid/simple'

storiesOf('Games Grid', module)
    .addDecorator(withKnobs)
    .add('with description', () => ({
        components: {
            'c-games-grid': GamesGrid
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <c-games-grid
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
            'c-games-grid-simple': GamesGridSimple
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <c-games-grid-simple
                    :itemInRow="itemInRow"
                    :items="games"
                />
            </div>
         </div>
         `
    }))

import Headers from '../ui/components/headers/basic'

storiesOf('Headers', module)
    .add('default', () => ({
        components: {
            'c-headers': Headers
        },
        template: `
            <!--<c-headers />-->
        `
    }))

import BlockHeaders from '../ui/components/heading-bar/index'
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
            <c-heading-bar name="This is the Title" showBackground="true" />
        `)
    }))
    .add('with arrows', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" showArrows="true"  />
        `)
    }))
    .add('with more button', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" more="#some_link"  />
        `)
    }))
    .add('with custom content', () => ({
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
            <c-heading-bar name="This is the Title">
                <template slot="additional-action">
                    <c-heading-bar-fields name="Reviews" icon="fas fa-trophy" @click_up="upClick"  @click_down="downClick" />
                    <c-heading-bar-fields name="Price" icon="fas fa-dollar-sign" />
                </template>
            </c-heading-bar>
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
                content_news: [
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        articles: [
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2018-07-24T04:09:00.000Z'
                            }
                        ]
                    },
                    {
                        game: {
                            title: 'Diablo I',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        articles: [
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2016-09-24T04:09:00.000Z'
                            },
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2014-03-24T04:09:00.000Z'
                            }
                        ]
                    },
                    {
                        game: {
                            title: 'Diablo II',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        articles: [
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2017-12-24T04:09:00.000Z'
                            }
                        ]
                    }
                ]
            }
        },
        template: `
        <div class="row m-0 p-5">
            <c-news-list-navigation
                :content_news="content_news"
            />
            <c-news-list-articles
                :content_news="content_news"
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
                    heading: 'New class and event coming next week!',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                    url: 'article-url',
                    date: '2018-07-24T04:09:00.000Z'
                }
            }
        },
        template: `
            <div class="row">
                <div class="col-6">
                    <c-news-article :article="article" itemInRow="1" />
                </div>
            </div>
        `
    }))
import Pagination from '../ui/components/pagination/index'

storiesOf('Pagination(not finished)', module)
    .add('default', () => ({
        components: {
            'c-pagination': Pagination
        },
        template: `
            <div class="row m-0 p-5">
                <c-pagination total_page="10" />
            </div>
        `
    }))

import ProductCommunity from '../ui/components/product-community/item'

storiesOf('Product Community', module)
    .add('post', () => ({
        components: {
            'c-post': ProductCommunity
        },
        data() {
            const authors = [
                {name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'},
                {
                    name: 'Nakatochi',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL'
                },
                {
                    name: 'SatoshiSan',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL'
                },
            ];
            const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.';
            return {
                post: {
                    title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                    date: '',
                    rate: 103,
                    comments_count: 894391,
                    status: 'starred',
                    author: authors[0],
                    content: {
                        img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                        text: placeholderText,
                        comments: [
                            {author: authors[1], text: placeholderText, rate: 319},
                            {
                                author: authors[0], text: placeholderText, rate: 932, replies: [
                                    {author: authors[1], text: placeholderText, rate: 318},
                                    {author: authors[0], text: placeholderText, rate: -49},
                                    {author: authors[1], text: placeholderText, rate: 442},
                                    {author: authors[0], text: placeholderText, rate: 1239}
                                ]
                            },
                            {author: authors[0], text: placeholderText, rate: -51}
                        ]
                    }
                }
            }
        },
        template: `
            <div class="row m-0 p-5">
                <div class="col-10">
                    <c-post :post="post" />
                </div>
            </div>
        `
    }))

// import ProductTags from '../ui/components/product-tags/index'

// storiesOf('Product Tags', module)
//     .add('default', () => ({
//         components: {
//             'c-tags-list': ProductTags
//         },
//         data() {
//             return {
//                 tags: [
//                     "adventure",
//                     "rpg",
//                     "mmorpg"
//                 ],
//             }
//         },
//         template: `
//             <div class="row m-0 p-5">
//                 <div class="col-12">
//                     <h3 class="text-white d-block">Some title or name</h3>
//                     <c-tags-list :tags="tags" />
//                 </div>
//             </div>
//         `
//     }))

import ProjectCard from '../ui/components/projects/card'

storiesOf('Project Card', module)
    .add('default', () => ({
        components: {
            'c-projects-card': ProjectCard
        },
        data() {
            return {
                trending_projects: [
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
            <div class="row m-0 p-5">
                <div class="col-10">
                    <c-projects-card v-for="(project, index) in trending_projects"
                                    :key="index"
                                    :project="project"
                                    customClass="margin-bottom-20"/>
                </div>
            </div>
        `
    }))


import RatingBlock from '../ui/components/rating-block/index'

storiesOf('Rating Block', module)
    .add('default', () => ({
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
        <div class="row">
            <div class="col-8">
                <c-rating-block :items="items" fullReviewsLink="#3" rateGameLink="#4" />
            </div>
        </div>
        `
    }))


import SendingFundsPopup from '../ui/components/send-funds-popup/index'
storiesOf('Sending Funds(not finished)', module)
    .add('default', () => ({
        components:{
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

import UserCard from '../ui/components/user-card/index'
storiesOf('User Card(not finished)', module)
    .add('default', () => ({
        components:{
            'c-user-card' : UserCard
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <c-user-card  />
            </div>
        </div>
        `
    }))
    .add('done', () => ({
        components:{
            'c-user-card' : UserCard
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <c-user-card status="success" :user="true"  />
            </div>
        </div>
        `
    }))

import ScreenGallery from '../ui/components/screen-gallery/gallery';
storiesOf('Gallery', module)
    .add('screen-gallery', () => ({
        components: { ScreenGallery },
        data() {
            return {
                main: 'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012',
                items: [
                    'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012',
                    'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012',
                    'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012',
                ]
            }
        },
        template: `<screen-gallery :main="main" :items="items" class="col-6"/>`
    }))

import ProductCardDynamic from '@/ui/components/store/product-card-dynamic';
import ProductCard from '@/ui/components/store/product-card';
import ProductsCards from '@/ui/components/store/products-cards';
const productsCardsData = [
    {
        id: "8",
        name: "Gothic® 3",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004036.1920x1080.jpg?t=1533039803",
            medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/39500/header.jpg?t=1533039803",
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
        author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"]
    },
    {
        id: "9",
        name: "The Witcher® 3: Wild Hunt",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.600x338.jpg?t=1529405012",
            medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/292030/header.jpg?t=1529405012",
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
        author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"]
    },
    {
        id: "10",
        name: "Fallout 4",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c6b798424a93617b4b825aea3bcd9547c0b0a5ce.1920x1080.jpg?t=1533676954",
            medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg?t=1533676954",
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
        author_tags: ["RPG","Open World","Fantasy","Action","Atmospheric","Third Person"]
    }
];
storiesOf('Product Card', module)
    .add('basic', () => ({
        components: { ProductCard },
        data: () => ({ products: productsCardsData }),
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
        components: { ProductCardDynamic },
        data: () => ({ products: productsCardsData }),
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
        components: { ProductsCards },
        data: () => ({ products: productsCardsData }),
        template: `
            <div>
                <h1 style="text-align: center;">Hover transitions are enabled only on bigger screens</h1>
                <products-cards :products="products"/>
            </div>
        `
    }))

import CuratorReview from '@/ui/components/store/curator-review';
import CuratorsReviews from '@/ui/components/store/curators-reviews';
const curatorReview = {
    author: { name: 'SatoSan', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' },
    rate: 4.5,
    game: { img: 'http://www.pixels-association.ch/wp-content/uploads/2017/11/no1.jpg' },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi arcu, viverra et efficitur luctus, tincidunt vel lacus. Morbi erat augue, posuere et sodales venenatis, tincidunt eu arcu. In sollicitudin purus quis sodales ornare. Cras tempus vestibulum elementum. Sed placerat, turpis id cursus cursus, augue enim molestie dui, elementum luctus lectus est vitae dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vehicula mi a nunc cursus, id volutpat purus commodo. Duis consequat elementum varius. Suspendisse dui enim, rhoncus a molestie at, tristique ut urna. Praesent et consectetur dui. Pellentesque ut volutpat nunc, ut viverra nulla. Duis ultricies, sem sit amet laoreet lobortis, mauris est mollis orci, non eleifend urna leo quis lectus. Vestibulum sit amet volutpat est.',
    more_reviews: [
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
        components: { CuratorReview },
        data: () => ({ review: curatorReview }),
        template: `<curator-review :review="review" class="col-3"/>`
    }))
    .add('reviews wrapper', () => ({
        components: { CuratorsReviews },
        data: () => ({ reviews: [curatorReview, curatorReview, curatorReview] }),
        template: `<curators-reviews :reviews="reviews" class="col-8"/>`
    }))

/*
     Dynamic import - test version

const navigation = storiesOf('Navigation', module);

['account', 'asset', 'funding'].forEach(component => {
    navigation.add(component, () => ({
        components: { [component]: () => import(`../ui/components/navigation/${component}`) },
        template: `<${component}/>`
    }))
});

*/


// /* eslint-enable react/react-in-jsx-scope */
