import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import SaleBox from '../ui/components/sale-box/box.vue'

storiesOf('SaleBox', module)
    .add('story as a component', () => ({
        components: { SaleBox },
        data() {
            return {
                sale_box: {
                    title: 'test'
                }
            }
        },
        template: '<c-sale-box :sale_box="sale_box"></c-sale-box>'
    }));