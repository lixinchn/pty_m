import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Android from '@/components/Android'
import Ios from '@/components/Ios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
  ]
})
