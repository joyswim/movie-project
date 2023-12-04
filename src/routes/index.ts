import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Detail from './Detail.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/detail',
          component: Detail
        }
      ]
    },
  ]
})