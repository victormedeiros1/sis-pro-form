import { createRouter, createWebHistory } from 'vue-router'

import Principal from '@/pages/Principal/Principal.vue'
import FormularioBase from '@/components/Formularios/FormularioBase.vue'

const routes = [
	{
		path: '/',
		name: 'Principal',
		component: Principal
	},
	{
		path: '/projetos/criar',
		name: 'Criar projeto',
		component: FormularioBase
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
