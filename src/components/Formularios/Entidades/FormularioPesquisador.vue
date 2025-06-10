<template>
	<div class="formulario">
		<div class="formulario__grupo">
			<CampoDeTexto
				id="nome-do-pesquisador"
				rotulo="Nome do(a) pesquisador(a) responsável"
				textoAuxiliar="Digite o nome do pesquisador"
				required
			/>
		</div>
		<div class="formulario__grupo">
			<CampoDeCPF
				id="cpf-do-pesquisador"
				rotulo="CPF"
				textoAuxiliar="Ex: 123.456.789-00"
				required
			/>
			<CampoDeTelefone
				id="telefone-do-pesquisador"
				rotulo="Telefone"
				textoAuxiliar="Ex: (11) 91234-5678"
				required
			/>
		</div>
		<div class="formulario__grupo">
			<CampoDeTexto
				id="endereco-do-pesquisador"
				rotulo="Endereço"
				textoAuxiliar="Ex: Rua dos Caiacós"
				required
			/>
			<CampoDeNumero
				id="numero-do-endereço-do-pesquisador"
				rotulo="Número"
				textoAuxiliar="Ex: 404"
				required
			/>
		</div>
		<div class="formulario__grupo">
			<CampoDeEstadoCidade
				id="estado-e-cidade-do-pesquisador"
				rotulo="Estado e cidade"
				textoAuxiliar="Selecione o estado e a cidade do pesquisador"
				required
			/>
		</div>
		<div class="formulario__rodape">
			<Button class="formulario__enviar" label="Salvar" size="small" />
		</div>
	</div>
</template>

<script setup lang="ts">
import CampoDeCPF from '@/components/Campos/CampoDeCPF/CampoDeCPF.vue'
import CampoDeEstadoCidade from '@/components/Campos/CampoDeEstadoCidade/CampoDeEstadoCidade.vue'
import CampoDeNumero from '@/components/Campos/CampoDeNumero/CampoDeNumero.vue'
import CampoDeTelefone from '@/components/Campos/CampoDeTelefone/CampoDeTelefone.vue'
import CampoDeTexto from '@/components/Campos/CampoDeTexto/CampoDeTexto.vue'
import Button from 'primevue/button'
</script>

<style scoped lang="scss"></style>
