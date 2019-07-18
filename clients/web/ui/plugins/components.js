import Vue from 'vue'

import Layout from '../components/front-layout'
import HeadingBar from '../components/heading-bar'
import HeadingBarColor from '../components/heading-bar/simple-colored'
import Button from '../components/buttons'
import Block from '../components/block'
import Switch from '../components/switch'
import Checkbox from '../components/checkbox'
import InfiniteContent from '../components/infinite-content'
import Icon from '../components/icon'
import Input from '../components/inputs'
import InputSearcher from '../components/inputs/searcher'
import LoadingIndicator from '../components/loading-indicator'
import Breadcrumb from '../components/breadcrumb'
import Img from '../components/img'
import Darklaunch from '../components/darklaunch'
import SimpleVote from '../components/vote/simple'
import JsonView from '../components/json-editor/json-view'
import ArrayView from '../components/json-editor/array-view'

Vue.component('c-layout', Layout)
Vue.component('c-heading-bar', HeadingBar)
Vue.component('c-heading-bar-color', HeadingBarColor)
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
Vue.component('c-simple-vote', SimpleVote)
Vue.component('c-img', Img)
Vue.component('c-darklaunch', Darklaunch)

