<template>
	<div class="area-de-texto">
		<label class="area-de-texto__rotulo rotulo" :for="id">{{ rotulo }}</label>
		<Textarea
			:id="id"
			v-model="texto"
			class="area-de-texto__campo campo"
			:label="rotulo"
			:placeholder="textoAuxiliar"
			size="small"
			autoResize
			:rows="4"
			@update:model-value="emitirTexto"
		/>
	</div>
</template>

<script setup lang="ts">
import Textarea from 'primevue/textarea'

import { nextTick, ref } from 'vue'

interface Props {
	id: string
	rotulo: string
	textoAuxiliar?: string
}

defineProps<Props>()

const emitir = defineEmits<{
	(evento: 'update:texto', texto: string): void
}>()

const texto = ref('')

const emitirTexto = (): void => {
	nextTick(() => {
		emitir('update:texto', texto.value)
	})
}
</script>

<style scoped lang="scss">
.area-de-texto {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: var(--g-8);
}
</style>
