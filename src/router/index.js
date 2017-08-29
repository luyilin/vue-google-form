import Vue from 'vue'
import Router from 'vue-router'
import create from '@/components/create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'create',
      component: create
    }
  ]
})
