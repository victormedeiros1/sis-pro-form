<template>
	<Form
		:validation-schema="schema"
		class="formulario-pesquisador formulario"
		@submit="onSubmit"
	>
		<div class="formulario__grupo">
			<CampoDeTexto
				id="nome-do-pesquisador"
				nome="nome-do-pesquisador"
				rotulo="Nome do(a) pesquisador(a) responsável"
				textoAuxiliar="Digite o nome do pesquisador"
			/>
		</div>

		<div class="formulario__grupo">
			<CampoDeCPF
				id="cpf-do-pesquisador"
				nome="cpf-do-pesquisador"
				rotulo="CPF"
				textoAuxiliar="Ex: 123.456.789-00"
			/>
			<CampoDeTelefone
				id="telefone-do-pesquisador"
				nome="telefone-do-pesquisador"
				rotulo="Telefone"
				textoAuxiliar="Ex: (11) 91234-5678"
			/>
		</div>

		<div class="formulario__grupo">
			<CampoDeTexto
				id="endereco-do-pesquisador"
				nome="endereco-do-pesquisador"
				rotulo="Endereço"
				textoAuxiliar="Ex: Rua dos Caiacós"
			/>
			<CampoDeNumero
				id="numero-do-endereço-do-pesquisador"
				nome="numero-do-endereco-do-pesquisador"
				rotulo="Número"
				textoAuxiliar="Ex: 404"
			/>
		</div>

		<div class="formulario__grupo">
			<CampoDeEstadoCidade
				id="estado-e-cidade-do-pesquisador"
				nomeEstado="estado-do-pesquisador"
				nomeCidade="cidade-do-pesquisador"
			/>
		</div>

		<div class="formulario__rodape">
			<Button class="formulario__enviar" label="SALVAR" type="submit" />
		</div>
	</Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

import CampoDeCPF from '@/components/Campos/CampoDeCPF/CampoDeCPF.vue'
import CampoDeEstadoCidade from '@/components/Campos/CampoDeEstadoCidade/CampoDeEstadoCidade.vue'
import CampoDeNumero from '@/components/Campos/CampoDeNumero/CampoDeNumero.vue'
import CampoDeTelefone from '@/components/Campos/CampoDeTelefone/CampoDeTelefone.vue'
import CampoDeTexto from '@/components/Campos/CampoDeTexto/CampoDeTexto.vue'
import Button from 'primevue/button'

const schema = toTypedSchema(
	z.object({
		'nome-do-pesquisador': z.string().nonempty('O nome do pesquisador é obrigatório.'),
		'cpf-do-pesquisador': z.string().length(14, 'O CPF deve ter 14 caracteres.'),
		'telefone-do-pesquisador': z
			.string()
			.length(15, 'O telefone deve ter 15 caracteres.'),
		'endereco-do-pesquisador': z
			.string()
			.min(5, 'O endereço deve ter pelo menos 1 caracteres.'),
		'numero-do-endereco-do-pesquisador': z
			.string()
			.nonempty('O nome do pesquisador é obrigatório.'),
		'estado-do-pesquisador': z.string().nonempty('O nome do pesquisador é obrigatório.'),
		'cidade-do-pesquisador': z.string().nonempty('O nome do pesquisador é obrigatório.')
	})
)

function onSubmit(values: any) {
	console.log('Formulário válido:', values)
}
</script>

<style scoped lang="scss"></style>
