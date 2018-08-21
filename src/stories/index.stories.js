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
            return {
            }
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
    .add('default', () =>({
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
    .add('info', () =>({
        components: {
            'c-button': Buttons
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-button text="info" variant="info" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('success', () =>({
        components: {
            'c-button': Buttons
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-button text="success" variant="success" icon="fas fa-check" icon_position="right" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('danger', () =>({
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
    .add('default', () =>({
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
    .add('info', () =>({
        components: {
            'c-link': Links
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-link href="#3" text="info" variant="info" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('success', () =>({
        components: {
            'c-link': Links
        },
        template: `<div class="row m-0 p-3">
                <div class="col-12">
                    <c-link href="#3" text="success" variant="success" icon="fas fa-check" icon_position="right" c_class="mx-1" />
                </div>
            </div>`
    }))
    .add('danger', () =>({
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
                value : true
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

// storiesOf('Range Slider', module)
//     .add('default', () => ({
//         components: {
//             'c-range-slider': RangeSlider
//         },
//         template: `
//         <div class="row m-0 p-3">
//             <c-range-slider />
//         </div>
//         `
//     }));
/* eslint-enable react/react-in-jsx-scope */
