/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../css/styles.scss'

//import '!style-loader!css-loader!./styles.scss';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import SaleBox from '../ui/components/sale-box/box.vue'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action('clicked') },
//   }))
//   .add('with JSX', () => ({
//     components: { MyButton },
//     render() {
//       return <my-button onClick={this.action}>With JSX</my-button>;
//     },
//     methods: { action: linkTo('clicked') },
//   }))
//   .add('with some emoji', () => ({
//     components: { MyButton },
//     template:
//       '<my-button @click="action"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></my-button>',
//     methods: { action: action('clicked') },
//   }));


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
    template: '<div class="row"><div class="col-4"><c-sale-box :sale_box="sale_box"></c-sale-box></div></div>'
  }));


/* eslint-enable react/react-in-jsx-scope */
