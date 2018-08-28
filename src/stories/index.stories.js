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

import Notification from '../ui/components/notification';
storiesOf('Notifications', module)
    .add('default', () => ({
        components: { Notification },
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
                    }
                ]
            }
        },
        template: `
            <div class="row">
                <div class="col-4 pt-3">
                    Single:
                    <notification :notification="notif"/>
                    Multiple:
                    <notification v-for="(notif, index) in notifs" :key="index" :notification="notif"/>
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
storiesOf('LoadingBar', module)
    .add('LoadingBar', () => ({
        components: { LoadingBar },
        template: `<loading-bar/>`
    }))

/* eslint-enable react/react-in-jsx-scope */
