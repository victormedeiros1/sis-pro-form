<template>
	<div class="campo-de-estado-cidade">
		<div class="campo-de-estado">
			<label class="campo-de-estado__rotulo rotulo" :for="id">Estado</label>
			<Dropdown
				class="campo-de-estado-cidade__seletor"
				:inputId="id"
				:options="estados"
				@update:modelValue="extrairCidadesDoEstadoSelecionado"
				v-model="estadoSelecionado"
				optionLabel="nome"
				filter
				placeholder="Selecione um estado"
			/>
		</div>
		<div class="campo-de-cidade">
			<label class="campo-de-estado__rotulo rotulo" :for="id">Cidade</label>
			<Dropdown
				class="campo-de-estado-cidade__seletor"
				:inputId="id"
				:options="cidades"
				v-model="cidadeSelecionada"
				filter
				placeholder="Seleciona uma cidade"
				:disabled="!existeEstadoSelecionado"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import * as estadosCidades from '@/utils/estados-cidades.json'

import Dropdown from 'primevue/dropdown'

import { computed, nextTick, ref } from 'vue'

interface Props {
	id: string
	rotulo: string
}

type Cidade = string

interface Estado {
	nome: string
	sigla: string
	cidades: Cidade[]
}

defineProps<Props>()

const estados = ref<Estado[]>(estadosCidades.estados)
const estadoSelecionado = ref<Estado>()
const cidades = ref<Cidade[]>([])
const cidadeSelecionada = ref<Cidade>()

const existeEstadoSelecionado = computed(() => {
	return estadoSelecionado.value !== undefined
})

const extrairCidadesDoEstadoSelecionado = async (): Promise<void> => {
	await nextTick()

	if (estadoSelecionado.value !== undefined) {
		cidades.value = estadoSelecionado.value.cidades
	}
}
</script>

<style scoped lang="scss">
.campo-de-estado-cidade {
	width: 100%;
	display: flex;
	gap: var(--g-8);

	&__seletor {
		width: 100%;
		font-size: var(--fs-14);
	}

	.campo-de-estado,
	.campo-de-cidade {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--g-8);
	}
}
</style>
