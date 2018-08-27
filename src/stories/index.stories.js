/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import '../css/styles.scss'
import '../css/vendors/font-awesome/fontawesome.scss'

//import '!style-loader!css-loader!./styles.scss'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'
import SaleBox from '../ui/components/sale-box/box.vue'
import PlanList from '../ui/components/game-plans/list.vue'
import AssetsImporter from '../ui/components/asset-importer/contact-import.vue'
import Notification from '../ui/components/notification/index.vue'
import Searcher from '../ui/components/searcher';


storiesOf('Welcome', module).add('to Storybook', () => ({
    components: {Welcome},
    template: '<welcome :showApp="action" />',
    methods: {action: linkTo('Button')},
}))

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
        template: '<div class="row"><div class="col-8"><c-assets-importer /></div></div>'
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
                ]
            }
        },
        template: '<div class="row"><div class="col-4 pt-3"><c-notification :notifications="ntf_messages" /></div></div>'
    }))


storiesOf('Searcher', module)
    .add('default', () => ({
        components: {
            'c-searcher': Searcher
        },
        template: `<c-searcher />`
    }))

/* eslint-enable react/react-in-jsx-scope */
