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

import HeadingBar from '../ui/components/heading-bar';
storiesOf('HeadingBar', module)
    .add('HeadingBar', () => ({
        components: { HeadingBar },
        data() {
            return {
                trueVal: true
            }
        },
        template: `<heading-bar name="Heading" :showBackground="trueVal" :showArrows="trueVal"/>`
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
        components: { NavigationAccount }, template: `<NavigationAccount />`
    }))
    .add('asset', () => ({
        components: { NavigationAsset }, template: `<NavigationAsset />`
    }))
    .add('funding', () => ({
        components: { NavigationFunding }, template: `<NavigationFunding />`
    }))
    .add('help', () => ({
        components: { NavigationHelp }, template: `<NavigationHelp />`
    }))
    .add('product', () => ({
        components: { NavigationProduct }, template: `<NavigationProduct />`
    }))
    .add('project', () => ({
        components: { NavigationProject }, template: `<NavigationProject />`
    }))
    .add('settings', () => ({
        components: { NavigationSettings }, template: `<NavigationSettings />`
    }))
    .add('wallet', () => ({
        components: { NavigationWallet }, template: `<NavigationWallet />`
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

import UserCard from '../ui/components/user-card';
storiesOf('User Card', module)
    .add('user-card', () => ({
        components: { UserCard },
        data() {
            return {

            }
        },
        template: `<user-card/>`
    }))

import GameCard from '../ui/components/store/game-card';
storiesOf('Game Card', module)
    .add('game-card', () => ({
        components: { GameCard },
        template: `<game-card/>`
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


/* eslint-enable react/react-in-jsx-scope */
