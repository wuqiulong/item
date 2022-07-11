import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '@/views/test-login.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: test
    }
  ]
})

export default router
