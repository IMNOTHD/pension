/* global Vue */
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
