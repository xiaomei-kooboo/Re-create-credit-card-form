import Vue from 'vue'
import Router from 'vue-router'
// import Creat from '@/components/creat.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => { require(['@/components/CreateCard.vue'], resolve) }
    }
  ]
})
  