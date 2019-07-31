import Vue from 'vue'

import {
    HeadingBar,
    HeadingBarWithSimpleColor,
    Button,
    Block,
    Toggle,
    Checkbox,
    InfiniteContent,
    Icon,
    Input,
    InputSearcher,
    LoadingIndicator,
    Breadcrumb,
    Img,
    Vote,
    JsonView,
    ArrayView,
    Spinner,
    Tabs,
    Tab
} from '@ericmuyser/hyper-ui'

Vue.component('HeadingBar', HeadingBar)
Vue.component('HeadingBarWithSimpleColor', HeadingBarWithSimpleColor)
Vue.component('Button', Button)
Vue.component('Block', Block)
Vue.component('Toggle', Toggle)
Vue.component('Checkbox', Checkbox)
Vue.component('JsonView', JsonView)
Vue.component('ArrayView', ArrayView)
Vue.component('InfiniteContent', InfiniteContent)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('InputSearcher', InputSearcher)
Vue.component('Loading', LoadingIndicator)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('Vote', Vote)
Vue.component('Img', Img)
Vue.component('Spinner', Spinner)
Vue.component('Tabs', Tabs)
Vue.component('Tab', Tab)

import Access from '../components/access'
import Layout from '../components/front-layout'

Vue.component('Access', Access)
Vue.component('Layout', Layout)
