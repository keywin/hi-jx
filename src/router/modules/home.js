const Layout = () => import('@/views/layout/Index.vue')

const Home = () => import('@/views/home/Index.vue')
const Work = () => import('@/views/work/Index.vue')
const Link = () => import('@/views/link/Index.vue')

export default [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    meta: {
      
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/work',
        name: 'Work',
        component: Work,
      },
      {
        path: '/link',
        name: 'Link',
        component: Link,
      },
    ]
  }
]
