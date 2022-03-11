import Vue from 'vue'
import Router from 'vue-router'

// import permission from './permission.js'

import Home from './modules/home.js'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home',
      meta: {},
    },
    ...Home,
  ]
})

// permission()
