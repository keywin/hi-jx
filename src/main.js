import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index'
import store from '@/store/index.js'

import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import 'highlight.js/styles/googlecode.css'
import hljs from 'highlight.js'
hljs.highlightCode = function () { 
	//自定义highlightCode方法，将只执行一次的逻辑去掉
	let blocks = document.querySelectorAll('pre code');
	[].forEach.call(blocks, hljs.highlightBlock);
};
Vue.prototype.$hljs = hljs;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
