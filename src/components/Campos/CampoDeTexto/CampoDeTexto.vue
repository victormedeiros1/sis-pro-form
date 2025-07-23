<template>
	<div class="campo-de-texto campo-container">
		<label
			class="campo-de-texto__rotulo rotulo"
			:class="exibirRotuloObrigatorio"
			:for="id"
			>{{ rotulo }}</label
		>

		<Field :name="nome" v-slot="{ field, errorMessage }">
			<InputText
				class="campo-de-texto__campo campo"
				v-bind="field"
				:id="id"
				:name="nome"
				:placeholder="textoAuxiliar"
				:class="{ 'p-invalid': errorMessage }"
				size="small"
				@blur="field.onBlur"
				@input="field.onChange"
			/>
		</Field>

		<ErrorMessage class="campo-mensagem-de-erro" :name="nome" />
	</div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { Field, ErrorMessage } from 'vee-validate'
import { computed } from 'vue'

interface Props {
	id: string
	rotulo: string
	textoAuxiliar?: string
	nome: string
	required?: boolean
}
const props = defineProps<Props>()

const exibirRotuloObrigatorio = computed(() => {
	return props.required ? 'rotulo--obrigatorio' : ''
})
</script>

<style scoped lang="scss"></style>
