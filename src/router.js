/* global Vue */
import Router from 'vue-router'
import Main from '@/components/Main'
import Test from '@/components/Test'

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
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
