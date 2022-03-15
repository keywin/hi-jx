import router from '@/router/index.js'
import store from '../store/index.js'

// const whiteList = ['/login', '/register']

export default function () {
  router.afterEach(async (to) => {
    if (!store.state.auth.isSuccessLogin && to.meta.login) {
      store.commit('SET_ISSHOW_LOGIN', true)
    }
    // 白名单可直接访问
    // if (whiteList.indexOf(to.path) !== -1) {
    //   next()
    //   return
    // }
    // next()
    // try {
    //   if (store.state.auth.token) {
    //     next()
    //   } else {
    //     next('/login')
    //   }
    // } catch (e) {
    //   next('/login')
    // }
  })
}
