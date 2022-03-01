import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index'
import store from '@/store/index.js'

import mavonEditor from 'mavon-editor'
import '@/assets/styles/github-markdown.min.css'
// import '@/assets/styles/katex.min.css'
// import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.css'
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
