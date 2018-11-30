import Vue from 'vue'

import Layout from '@/ui/layouts/default'
import HeadingBar from '@/ui/components/heading-bar'
import Button from '@/ui/components/buttons'
import Block from '@/ui/components/block'
import Switch from '@/ui/components/switch'
import Checkbox from '@/ui/components/checkbox'
import InfiniteContent from '@/ui/components/infinite-content'
import Icon from '@/ui/components/icon'
import Input from '@/ui/components/inputs'
import InputSearcher from '@/ui/components/inputs/searcher'
import LoadingIndicator from '@/ui/components/loading-indicator'
import Breadcrumb from '@/ui/components/breadcrumb'
import Img from '@/ui/components/img'
import Darklaunch from '@/ui/components/darklaunch'
import JsonView from '@/ui/components/json-editor/json-view'
import ArrayView from '@/ui/components/json-editor/array-view'

Vue.component('c-layout', Layout)
Vue.component('c-heading-bar', HeadingBar)
Vue.component('c-button', Button)
Vue.component('c-block', Block)
Vue.component('c-switch', Switch)
Vue.component('c-checkbox', Checkbox)
Vue.component('c-json-view', JsonView)
Vue.component('c-array-view', ArrayView)
Vue.component('c-infinite-content', InfiniteContent)
Vue.component('c-icon', Icon)
Vue.component('c-input', Input)
Vue.component('c-input-searcher', InputSearcher)
Vue.component('c-loading', LoadingIndicator)
Vue.component('c-breadcrumb', Breadcrumb)
Vue.component('c-img', Img)
Vue.component('c-darklaunch', Darklaunch)
