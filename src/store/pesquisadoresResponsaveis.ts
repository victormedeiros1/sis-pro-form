import { defineStore } from 'pinia'
import pesquisadoresResponsaveis from '@/database/entidades/pesquisadoresResponsaveis.json'

export const usePesquisadoreResponsaveisStore = defineStore('pesquisadoresResponsaveis', {
	state: () => ({
		pesquisadoresResponsaveis: [...pesquisadoresResponsaveis]
	})
})
