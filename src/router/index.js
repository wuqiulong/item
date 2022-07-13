import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '@/views/test-login.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: test
    },
    {
      path: '/mainIndex',
      component: () => import('@/views/mainIndex.vue'),
      redirect: '/mainPage',
      children: [{
        path: '/myPage',
        component: () => import('@/components/myPage.vue')
      }, {
        path: '/qaPage',
        component: () => import('@/components/qaPage.vue')
      },
      {
        path: '/videoPage',
        component: () => import('@/components/videoPage.vue')
      },
      {
        path: '/mainPage',
        component: () => import('@/components/mainPage.vue')
      }]
    }
  ]
})

export default router
