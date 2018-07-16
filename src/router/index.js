import Vue from 'vue'
import Router from 'vue-router'
import VueMask from 'v-mask'
Vue.use(VueMask)
// import Creat from '@/components/creat.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => { require(['../views/CreateCard.vue'], resolve) }
    }
  ]
})
  