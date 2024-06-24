import { createRouter, createWebHistory } from 'vue-router'

import Principal from '@/pages/Principal/Principal.vue'
import FormBase from '@/components/Formularios/FormBase.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/projetos/criar',
    name: 'Criar projeto',
    component: FormBase
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
