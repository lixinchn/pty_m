import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Android from '@/components/Android'
import Ios from '@/components/Ios'
import Blog from '@/components/Blog'
import BlogDetail from '@/components/BlogDetail'
import Contact from '@/components/Contact'
import Service from '@/components/Service'
import Policy from '@/components/Policy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        keepAlive: false,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/android',
      name: 'android',
      component: Android,
    },
    {
      path: '/ios',
      name: 'ios',
      component: Ios,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/blog/detail',
      name: BlogDetail,
      component: BlogDetail,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy,
    },
  ],

  scrollBehavior: (to, from, savedPosition) => {
    return {x: 0, y: 0}
  },

  mode: 'history',
})
