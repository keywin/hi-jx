import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index'
import store from '@/store/index.js'

import mavonEditor from 'mavon-editor'
import '@/assets/styles/github-markdown.min.css'

import dayjs from 'dayjs'

import Header from '@/components/Header.vue';

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(mavonEditor)

import hljs from 'highlight.js'
hljs.highlightCode = function () { 
	let blocks = document.querySelectorAll('pre code');
	[].forEach.call(blocks, hljs.highlightBlock);
};
Vue.prototype.$hljs = hljs;
Vue.prototype.$dayjs = dayjs;

Vue.component('Header', Header);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
