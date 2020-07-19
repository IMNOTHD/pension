import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
