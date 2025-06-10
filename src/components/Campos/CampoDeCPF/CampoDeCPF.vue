<template>
	<div class="campo-de-cpf">
		<label class="campo-de-cpf__rotulo rotulo" :for="id">{{ rotulo }}</label>
		<InputMask
			class="campo-de-cpf__campo campo"
			:id="id"
			:mask="'999.999.999-99'"
			:placeholder="textoAuxiliar"
			@update:model-value="emitirCPF"
			v-model="cpf"
			size="small"
		/>
	</div>
</template>

<script setup lang="ts">
import InputMask from 'primevue/inputmask'

import { nextTick, ref } from 'vue'

interface Props {
	id: string
	rotulo: string
	textoAuxiliar?: string
}

defineProps<Props>()

const emitir = defineEmits<{
	(evento: 'update:cpf', cpf: string): void
}>()

const cpf = ref('')

const emitirCPF = (): void => {
	nextTick(() => {
		emitir('update:cpf', cpf.value)
	})
}
</script>

<style scoped lang="scss">
.campo-de-cpf {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: var(--g-8);
}
</style>
