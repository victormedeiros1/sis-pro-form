<template>
	<div class="campo-de-numero campo-container">
		<label class="campo-de-numero__rotulo rotulo" :for="id">{{ rotulo }}</label>

		<Field :name="nome" v-slot="{ field }">
			<InputText
				class="campo-de-numero__campo campo"
				v-bind="field"
				:id="id"
				:label="rotulo"
				:placeholder="textoAuxiliar"
				size="small"
			/>
		</Field>

		<ErrorMessage class="campo-mensagem-de-erro" :name="nome" />
	</div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { Field, ErrorMessage } from 'vee-validate'

interface Props {
	id: string
	rotulo: string
	textoAuxiliar?: string
	nome: string
}

defineProps<Props>()
</script>

<style scoped lang="scss"></style>
