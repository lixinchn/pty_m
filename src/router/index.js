import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Android from '@/components/Android'

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
      name: About,
      component: About,
    },
    {
      path: '/android',
      name: Android,
      component: Android,
    }
  ]
})
