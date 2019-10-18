import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import haha from '@/components/haha'
import addHello from '@/components/views/addHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/haha',
      name: 'haha',
      component: haha
    },
    {
      path: '/addHello',
      name: 'addHello',
      component: addHello
    },
  ]
})
