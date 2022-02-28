const Layout = () => import('@/views/layout/Index.vue')

const Home = () => import('@/views/home/Index.vue')
const Work = () => import('@/views/work/Index.vue')
const Timeline = () => import('@/views/timeline/Index.vue')
const About = () => import('@/views/about/Index.vue')

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
        path: '/timeline',
        name: 'Timeline',
        component: Timeline,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      }
    ]
  }
]
