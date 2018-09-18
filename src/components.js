import Vue from 'vue';

Vue.component('c-layout', () => import('@/ui/layouts/default'));
Vue.component('c-heading-bar', () => import('@/ui/components/heading-bar'));
Vue.component('c-button', () => import('@/ui/components/buttons'));
Vue.component('c-switch', () => import('@/ui/components/switch'));
Vue.component('c-icon', () => import('@/ui/components/icon'));
Vue.component('c-input', () => import('@/ui/components/inputs'));
Vue.component('c-img', () => import('@/ui/components/img'));
