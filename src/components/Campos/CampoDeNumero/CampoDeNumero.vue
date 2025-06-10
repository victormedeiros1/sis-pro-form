<template>
	<div class="campo-de-numero">
		<label class="campo-de-numero__rotulo rotulo" :for="id">{{ rotulo }}</label>
		<InputText
			class="campo-de-numero__campo campo"
			:id="id"
			:label="rotulo"
			:placeholder="textoAuxiliar"
			@update:model-value="emitirTexto"
			v-model="numero"
			size="small"
		/>
	</div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'

interface Props {
	id: string
	rotulo: string
	textoAuxiliar?: string
}

defineProps<Props>()

const emitir = defineEmits<{
	(evento: 'update:numero', numero: string): void
}>()

const numero = ref('')

const emitirTexto = (): void => {
	nextTick(() => {
		emitir('update:numero', numero.value)
	})
}
</script>

<style scoped lang="scss">
.campo-de-numero {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: var(--g-8);
}
</style>
