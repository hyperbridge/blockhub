import Vue from 'vue';

Vue.component('c-layout', () => import('@/ui/layouts/default'));
Vue.component('c-heading-bar', () => import('@/ui/components/heading-bar'));
Vue.component('c-button', () => import('@/ui/components/buttons'));
Vue.component('c-switch', () => import('@/ui/components/switch'));
