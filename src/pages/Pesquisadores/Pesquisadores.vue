<template>
	<div class="pesquisadores">
		<div class="pesquisadores__cabecalho">
			<h1>Pesquisadores responsáveis</h1>
		</div>
		<div class="pesquisadores__conteudo">
			<FormularioPesquisador />
		</div>
	</div>
</template>

<script setup lang="ts">
import FormularioPesquisador from '@/components/Formularios/Entidades/FormularioPesquisador.vue'
</script>

<style scoped lang="scss">
.pesquisadores {
	width: 100%;

	&__cabecalho {
		margin-bottom: var(--m-16);
	}
}
</style>
