<template>
	<div class="pesquisadores">
		<div class="pesquisadores__cabecalho">
			<h1 class="pesquisadores__titulo">Pesquisadores responsáveis</h1>
			<p class="pesquisadores__descricao">
				Todos os pesquisadores responsáveis já cadastrados no sistema estão listados aqui,
				eles podem ser visualizados por outros usuários e utilizados na criação de outros
				projetos de pesquisa para facilitar no reaproveitamento dos dados. Você pode criar
				novos pesquisadores responsáveis ou atualizar os já existentes.
			</p>
			<div class="pesquisadores__busca">
				<CampoDeTexto
					id="buscaPesquisadorResponsavel"
					nome="buscaPesquisadorResponsavel"
					v-model="buscaPesquisadorResponsavel"
					texto-auxiliar="Buscar pesquisador..."
				/>
				<Button
					class="formulario__enviar"
					label="NOVO PESQUISADOR RESPONSÁVEL"
					size="small"
					icon="pi pi-plus"
				/>
			</div>
		</div>
		<div class="pesquisadores__conteudo">
			<ListaPesquisadoresResponsaveis
				:dados="storePesquisadores.pesquisadoresResponsaveis"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import CampoDeTexto from '@/components/Campos/CampoDeTexto/CampoDeTexto.vue'
import ListaPesquisadoresResponsaveis from '@/components/ListaDeDados/ListaPesquisadoresResponsaveis.vue'
import { usePesquisadoreResponsaveisStore } from '@/store/pesquisadoresResponsaveis'
import Button from 'primevue/button'
import { ref } from 'vue'

const storePesquisadores = usePesquisadoreResponsaveisStore()

const buscaPesquisadorResponsavel = ref<string>('')
</script>

<style scoped lang="scss">
.pesquisadores {
	width: 100%;

	&__titulo {
		margin-bottom: var(--m-8);
	}

	&__descricao {
		margin-bottom: var(--m-16);
	}

	&__cabecalho {
		margin-bottom: var(--m-16);
	}
}
</style>
