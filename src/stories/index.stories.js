/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import '../css/styles.scss'

//import '!style-loader!css-loader!./styles.scss'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'
import SaleBox from '../ui/components/sale-box/box.vue'
import PlanList from '../ui/components/game-plans/list.vue'
import AssetsImporter from '../ui/components/asset-importer/index.vue'
import Notification from '../ui/components/notification/index.vue'
import Tabs from '../ui/components/tab/tabs.vue'
import Tab from '../ui/components/tab/tab.vue'
import MilestonesLine from '../ui/components/milestones-line/index.vue'
import SidebarMenu from '../ui/components/sidebar-menu/index.vue'
import Buttons from '../ui/components/buttons/index.vue'
import Links from '../ui/components/links/index.vue'
import MoneyInfo from '../ui/components/money-info/index.vue'
import Checkbox from '../ui/components/checkbox/checbox.vue'
import CheckboxGroup from '../ui/components/checkbox/checbox-group.vue'
import RangeSlider from '../ui/components/range-slider/index.vue'
import Tooltips from '../ui/components/tooltips/index.vue'
import ActivityChart from '../ui/components/activity-chart/index.vue'
import PopUps from '../ui/components/popups/index.vue'


// storiesOf('Welcome', module).add('to Storybook', () => ({
//     components: {Welcome},
//     template: '<welcome :showApp="action" />',
//     methods: {action: linkTo('Button')},
// }))

// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action('clicked') },
//   }))

storiesOf('Sale Box', module)
    .add('default', () => ({
        components: {
            'c-sale-box': SaleBox
        },
        data() {
            return {
                sale_box: {
                    title: 'test'
                }
            }
        },
        template: '<div class="row"><div class="col-6"><c-sale-box :sale_box="sale_box"></c-sale-box></div></div>'
    }))


storiesOf('Plan List', module)
    .add('default', () => ({
        components: {
            'c-plan-list': PlanList
        },
        data() {
            return {
                "plans": [
                    {
                        "title": "Play Tibia Now",
                        "link": "#3"
                    },
                    {
                        "title": "1 Month Premium benefits",
                        "price": "34",
                        "link": "#4"
                    },
                    {
                        "title": "2 Month Premium benefits",
                        "price": "57",
                        "link": "#4"
                    }
                ],
            }
        },
        template: '<div class="row"><div class="col-6"><c-plan-list :items="plans" /></div></div>'
    }))

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

storiesOf('Notifications', module)
    .add('default', () => ({
        components: {
            'c-notification': Notification
        },
        data() {
            return {
                ntf_messages: [
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
                    },
                ]
            }
        },
        template: '<div class="row"><div class="col-4 pt-3"><c-notification :notifications="ntf_messages" /></div></div>'
    }))

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

storiesOf('Milestones Line', module)
    .add('default', () => ({
        components: {
            'c-milestones-line': MilestonesLine
        },
        data() {
            return {
                milestones: [
                    {
                        "status": "done",
                        "text": "m1"
                    },
                    {
                        "status": "done",
                        "text": "m2"
                    },
                    {
                        "status": "in_progress",
                        "text": "m3"
                    },
                    {
                        "status": "awaiting",
                        "text": "m4"
                    },
                    {
                        "status": "awaiting",
                        "text": "m5"
                    },
                    {
                        "status": "awaiting",
                        "text": "m6"
                    }
                ],
            }
        },
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <c-milestones-line :milestones="milestones" />
                </div>
            </div>`
    }))

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
            '<c-sidebar-menu title="Menu Big Title" icon="fab fa-angellist" :menu="menu" />' +
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
    }));

storiesOf('Buttons', module)
    .add('default', () => ({
        components: {
            'c-button': Buttons
        },
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-button text="default" @click="testFunction" type="submit" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('info', () => ({
        components: {
            'c-button': Buttons
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-button text="info" variant="info" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('success', () => ({
        components: {
            'c-button': Buttons
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-button text="success" variant="success" icon="fas fa-check" icon_position="right" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('danger', () => ({
        components: {
            'c-button': Buttons
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-button text="danger" variant="danger" icon="fas fa-exclamation-triangle" icon_position="left" c_class="mx-1" />
                </div>
            </div>`
    }));

storiesOf('Links', module)
    .add('default', () => ({
        components: {
            'c-link': Links
        },
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-link href="#3" text="default" @click="testFunction" type="submit" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('info', () => ({
        components: {
            'c-link': Links
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-link href="#3" text="info" variant="info" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('success', () => ({
        components: {
            'c-link': Links
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-link href="#3" text="success" variant="success" icon="fas fa-check" icon_position="right" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('danger', () => ({
        components: {
            'c-link': Links
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-link href="#3" text="danger" variant="danger" icon="fas fa-exclamation-triangle" icon_position="left" c_class="mx-1" />
                </div>
            </div>`
    }));

storiesOf('Money Info', module)
    .add('default', () => ({
        components: {
            'c-money-info': MoneyInfo
        },
        template: `
        <div class="row m-0 p-3">
            <c-money-info label="Spent" percent="63" amount="555.999" />
        </div>
        `
    }));

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

storiesOf('Activity Chart', module)
    .add('default', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data() {
            return {
                head_months: [
                    {
                        name: 'January',
                        short_name: 'Jan',
                        number: '1'
                    },
                    {
                        name: 'February',
                        short_name: 'Feb',
                        number: '2'
                    },
                    {
                        name: 'March',
                        short_name: 'Mar',
                        number: '3'
                    },
                    {
                        name: 'April',
                        short_name: 'Apr',
                        number: '4'
                    },
                    {
                        name: 'May',
                        short_name: 'May',
                        number: '5'
                    },
                    {
                        name: 'June',
                        short_name: 'Jun',
                        number: '6'
                    },
                    {
                        name: 'July',
                        short_name: 'Jul',
                        number: '7'
                    },
                    {
                        name: 'August',
                        short_name: 'Aug',
                        number: '8'
                    },
                    {
                        name: 'September',
                        short_name: 'Set',
                        number: '9'
                    },
                    {
                        name: 'October',
                        short_name: 'Oct',
                        number: '10'
                    },
                    {
                        name: 'November',
                        short_name: 'Nov',
                        number: '11'
                    },
                    {
                        name: 'December',
                        short_name: 'Dec',
                        number: '12'
                    }
                ],
                years: [
                    {
                        title: '2018',
                        months:[
                            {
                                percent: 31,
                                month: 'October',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'August',
                                text: '3 Updates'
                            },
                            {
                                percent: 50,
                                month: 'December',
                                text: '3 Updates'
                            },
                            {
                                percent: 42,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 85,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 94,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 83,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 54,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2019',
                        months:[
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 36,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 33,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 56,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 31,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2020',
                        months:[
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 30,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 34,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 67,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 40,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    }
                ],
            };
        },
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
        data() {
            return {
                head_months: [
                    {
                        name: 'January',
                        short_name: 'Jan',
                        number: '1'
                    },
                    {
                        name: 'February',
                        short_name: 'Feb',
                        number: '2'
                    },
                    {
                        name: 'March',
                        short_name: 'Mar',
                        number: '3'
                    },
                    {
                        name: 'April',
                        short_name: 'Apr',
                        number: '4'
                    },
                    {
                        name: 'May',
                        short_name: 'May',
                        number: '5'
                    },
                    {
                        name: 'June',
                        short_name: 'Jun',
                        number: '6'
                    },
                    {
                        name: 'July',
                        short_name: 'Jul',
                        number: '7'
                    },
                    {
                        name: 'August',
                        short_name: 'Aug',
                        number: '8'
                    },
                    {
                        name: 'September',
                        short_name: 'Set',
                        number: '9'
                    },
                    {
                        name: 'October',
                        short_name: 'Oct',
                        number: '10'
                    },
                    {
                        name: 'November',
                        short_name: 'Nov',
                        number: '11'
                    },
                    {
                        name: 'December',
                        short_name: 'Dec',
                        number: '12'
                    }
                ],
                years: [
                    {
                        title: '2018',
                        months:[
                            {
                                percent: 31,
                                month: 'October',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'August',
                                text: '3 Updates'
                            },
                            {
                                percent: 50,
                                month: 'December',
                                text: '3 Updates'
                            },
                            {
                                percent: 42,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 85,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 94,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 83,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 54,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2019',
                        months:[
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 36,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 33,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 56,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 31,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2020',
                        months:[
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 30,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 34,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 67,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 40,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    }
                ],
            };
        },
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
        data() {
            return {
                head_months: [
                    {
                        name: 'January',
                        short_name: 'Jan',
                        number: '1'
                    },
                    {
                        name: 'February',
                        short_name: 'Feb',
                        number: '2'
                    },
                    {
                        name: 'March',
                        short_name: 'Mar',
                        number: '3'
                    },
                    {
                        name: 'April',
                        short_name: 'Apr',
                        number: '4'
                    },
                    {
                        name: 'May',
                        short_name: 'May',
                        number: '5'
                    },
                    {
                        name: 'June',
                        short_name: 'Jun',
                        number: '6'
                    },
                    {
                        name: 'July',
                        short_name: 'Jul',
                        number: '7'
                    },
                    {
                        name: 'August',
                        short_name: 'Aug',
                        number: '8'
                    },
                    {
                        name: 'September',
                        short_name: 'Set',
                        number: '9'
                    },
                    {
                        name: 'October',
                        short_name: 'Oct',
                        number: '10'
                    },
                    {
                        name: 'November',
                        short_name: 'Nov',
                        number: '11'
                    },
                    {
                        name: 'December',
                        short_name: 'Dec',
                        number: '12'
                    }
                ],
                years: [
                    {
                        title: '2018',
                        months:[
                            {
                                percent: 31,
                                month: 'October',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'August',
                                text: '3 Updates'
                            },
                            {
                                percent: 50,
                                month: 'December',
                                text: '3 Updates'
                            },
                            {
                                percent: 42,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 85,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 94,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 83,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 54,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2019',
                        months:[
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 36,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 33,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 56,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 31,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2020',
                        months:[
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 30,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 34,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 67,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 40,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    }
                ],
            };
        },
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
        data() {
            return {
                head_months: [
                    {
                        name: 'January',
                        short_name: 'Jan',
                        number: '1'
                    },
                    {
                        name: 'February',
                        short_name: 'Feb',
                        number: '2'
                    },
                    {
                        name: 'March',
                        short_name: 'Mar',
                        number: '3'
                    },
                    {
                        name: 'April',
                        short_name: 'Apr',
                        number: '4'
                    },
                    {
                        name: 'May',
                        short_name: 'May',
                        number: '5'
                    },
                    {
                        name: 'June',
                        short_name: 'Jun',
                        number: '6'
                    },
                    {
                        name: 'July',
                        short_name: 'Jul',
                        number: '7'
                    },
                    {
                        name: 'August',
                        short_name: 'Aug',
                        number: '8'
                    },
                    {
                        name: 'September',
                        short_name: 'Set',
                        number: '9'
                    },
                    {
                        name: 'October',
                        short_name: 'Oct',
                        number: '10'
                    },
                    {
                        name: 'November',
                        short_name: 'Nov',
                        number: '11'
                    },
                    {
                        name: 'December',
                        short_name: 'Dec',
                        number: '12'
                    }
                ],
                years: [
                    {
                        title: '2018',
                        months:[
                            {
                                percent: 31,
                                month: 'October',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'August',
                                text: '3 Updates'
                            },
                            {
                                percent: 50,
                                month: 'December',
                                text: '3 Updates'
                            },
                            {
                                percent: 42,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 85,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 94,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 12,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 83,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 37,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 54,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2019',
                        months:[
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 36,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 33,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 56,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 31,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 66,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 78,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    },
                    {
                        title: '2020',
                        months:[
                            {
                                percent: 90,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 10,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 30,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 100,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 34,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 67,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 70,
                                month: 'July',
                                text: '3 Updates'
                            },
                            {
                                percent: 40,
                                month: 'July',
                                text: '3 Updates'
                            }
                        ],
                    }
                ],
            };
        },
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" :head_months="head_months" size="xs" />
            </div>
        `
    }))

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
        methods:{
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
        methods:{
            showModalHandler() {
                this.modalActive = !this.modalActive;
            },
            close(){
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
        methods:{
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
        methods:{
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
        methods:{
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





storiesOf('Range Slider', module)
    .add('default', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
             <c-range-slider />
         </div>
        `
    }));
// /* eslint-enable react/react-in-jsx-scope */
