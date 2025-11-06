<template>
	<Form
		:validation-schema="schema"
		@submit="onSubmit"
		class="formulario-pesquisador formulario"
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

		<div class="formulariorodape">
			<Button class="formularioenviar" label="SALVAR" type="submit" />
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
		'nome-do-pesquisador': z
			.union([z.string(), z.undefined()])
			.transform(val => val || '')
			.refine(val => val.trim().length > 0, {
				message: 'O nome do pesquisador é obrigatório.'
			}),
		'cpf-do-pesquisador': z
			.union([z.string(), z.undefined()])
			.transform(val => val || '')
			.refine(val => val.length === 14, {
				message: 'O CPF deve ter 14 caracteres.'
			}),
		'telefone-do-pesquisador': z
			.union([z.string(), z.undefined()])
			.transform(val => val || '')
			.refine(val => val.length === 15, {
				message: 'O telefone deve ter 15 caracteres.'
			}),
		'endereco-do-pesquisador': z
			.union([z.string(), z.undefined()])
			.transform(val => val || '')
			.refine(val => val.trim().length >= 5, {
				message: 'O endereço deve ter pelo menos 5 caracteres.'
			}),
		'numero-do-endereco-do-pesquisador': z
			.union([z.string(), z.undefined()])
			.transform(val => val || '')
			.refine(val => val.trim().length > 0, {
				message: 'O número do endereço é obrigatório.'
			}),
		'estado-do-pesquisador': z
			.union([z.string(), z.undefined()])
			.transform(val => val || '')
			.refine(val => val.trim().length > 0, {
				message: 'Estado é obrigatório.'
			}),
		'cidade-do-pesquisador': z
			.union([z.string(), z.undefined()])
			.transform(val => val || '')
			.refine(val => val.trim().length > 0, {
				message: 'Cidade do pesquisador é obrigatório.'
			})
	})
)

function onSubmit(values: any) {
	console.log('Formulário válido:', values)
}
</script>

<style scoped lang="scss"></style>

Funcionou, o que você fez?
