/* global Vue */
import Router from 'vue-router'
import Main from '@/components/Main'
import location from '@/components/HomePage/location'
import search from '@/components/HomePage/search'
import test from '@/components/HomePage/test'
import HomePage from '@/components/HomePage/HomePage'
Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/location',
      name: 'location',
      component: location
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/HomePage/:cityName',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
