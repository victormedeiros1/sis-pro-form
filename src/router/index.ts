import { createRouter, createWebHistory } from 'vue-router'

import Principal from '@/pages/Principal/Principal.vue'
import Abertos from '@/pages/Projetos/Abertos.vue'

const routes = [
	{
		path: '/',
		name: 'Principal',
		component: Principal
	},
	{
		path: '/projetos/abertos',
		name: 'Projetos abertos',
		component: Abertos
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
