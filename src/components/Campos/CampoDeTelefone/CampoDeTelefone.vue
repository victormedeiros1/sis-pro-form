C
<template>
	<div class="campo-de-telefone campo-container">
		<label class="campo-de-telefone__rotulo rotulo" :for="id">{{ rotulo }}</label>

		<Field :name="nome" v-slot="{ field, value, handleChange }">
			<InputMask
				class="campo-de-telefone__campo campo"
				v-bind="field"
				:id="id"
				:mask="'(99) 99999-9999'"
				:placeholder="textoAuxiliar"
				:modelValue="value"
				@update:modelValue="handleChange"
			/>
		</Field>

		<ErrorMessage class="campo-mensagem-de-erro" :name="nome" />
	</div>
</template>

<script setup lang="ts">
import InputMask from 'primevue/inputmask'
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
