/* global Vue */
import Router from 'vue-router'
import Main from '@/components/Main'
import location from '@/components/HomePage/location'

Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/location',
      name: 'location',
      component: location
    }
  ]
})
