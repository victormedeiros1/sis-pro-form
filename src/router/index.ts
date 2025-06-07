import { createRouter, createWebHistory } from 'vue-router'

import Principal from '@/pages/Principal/Principal.vue'
import Atuais from '@/pages/Projetos/Atuais.vue'
import Encerrados from '@/pages/Projetos/Encerrados.vue'
import Pesquisadores from '@/pages/Pesquisadores/Pesquisadores.vue'
import Orientadores from '@/pages/Orientadores/Orientadores.vue'
import Orientandos from '@/pages/Orientandos/Orientandos.vue'
import Instituicoes from '@/pages/Instituicoes/Instituicoes.vue'

const routes = [
	{
		path: '/',
		name: 'Principal',
		component: Principal
	},
	{
		path: '/projetos/atuais',
		name: 'Projetos atuais',
		component: Atuais
	},
	{
		path: '/projetos/encerrados',
		name: 'Projetos encerrados',
		component: Encerrados
	},
	{
		path: '/pesquisadores',
		name: 'Pesquisadores',
		component: Pesquisadores
	},
	{
		path: '/orientadores',
		name: 'Orientadores',
		component: () => Orientadores
	},
	{
		path: '/orientandos',
		name: 'Orientandos',
		component: () => Orientandos
	},
	{
		path: '/instituicoes',
		name: 'Instituições',
		component: () => Instituicoes
	}
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
