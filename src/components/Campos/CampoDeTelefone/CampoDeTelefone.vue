C
<template>
	<div class="campo-de-telefone">
		<label class="campo-de-telefone__rotulo rotulo" :for="id">{{ rotulo }}</label>
		<InputMask
			class="campo-de-telefone__campo campo"
			:id="id"
			:mask="'(99) 99999-9999'"
			:placeholder="textoAuxiliar"
			@update:model-value="emitirTelefone"
			v-model="telefone"
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
	(evento: 'update:telefone', telefone: string): void
}>()

const telefone = ref('')

const emitirTelefone = (): void => {
	nextTick(() => {
		emitir('update:telefone', telefone.value)
	})
}
</script>

<style scoped lang="scss">
.campo-de-telefone {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: var(--g-8);
}
</style>
