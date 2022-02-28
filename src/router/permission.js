import router from '@/router/index.js'
// import store from '../store/index.js'

const whiteList = ['/login', '/register']

// export default function () {
//   router.beforeEach(async (to, from, next) => {
//     // 白名单可直接访问
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//       return
//     }
//     next()
//     // try {
//     //   if (store.state.auth.token) {
//     //     next()
//     //   } else {
//     //     next('/login')
//     //   }
//     // } catch (e) {
//     //   next('/login')
//     // }
//   })
// }
