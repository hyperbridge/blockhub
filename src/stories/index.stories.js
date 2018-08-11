/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../css/styles.scss'

//import '!style-loader!css-loader!./styles.scss'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'
import SaleBox from '../ui/components/sale-box/box.vue'
import PlanList from '../ui/components/game-plans/list.vue'


storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
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



/* eslint-enable react/react-in-jsx-scope */
