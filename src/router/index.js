import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/instrumented/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Menu
    }
  ]
})
