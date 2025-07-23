<template>
	<div class="campo-de-estado-cidade">
		<div class="campo-de-estado campo-container">
			<label class="campo-de-estado__rotulo rotulo" :for="id">Estado</label>

			<Field :name="nomeEstado" v-slot="{ value, handleChange }">
				<Dropdown
					class="campo-de-estado-cidade__seletor"
					:inputId="nomeEstado"
					:options="estados"
					:optionLabel="'nome'"
					filter
					:placeholder="'Selecione um estado'"
					:modelValue="value"
					@update:modelValue="
						val => {
							handleChange(val)
							extrairCidadesDoEstadoSelecionado(val)
						}
					"
				/>
			</Field>

			<ErrorMessage class="campo-mensagem-de-erro" :name="nomeEstado" />
		</div>
		<div class="campo-de-cidade campo-container">
			<label class="campo-de-estado__rotulo rotulo" :for="id">Cidade</label>

			<Field :name="nomeCidade" v-slot="{ value, handleChange }">
				<Dropdown
					class="campo-de-estado-cidade__seletor"
					:inputId="nomeCidade"
					:options="cidades"
					filter
					:placeholder="'Selecione uma cidade'"
					:modelValue="value"
					@update:modelValue="handleChange"
					:disabled="!cidades.length"
				/>
			</Field>

			<ErrorMessage class="campo-mensagem-de-erro" :name="nomeCidade" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown'
import * as estadosCidades from '@/utils/estados-cidades.json'

interface Props {
	id: string
	nomeEstado: string
	nomeCidade: string
}

type Cidade = string

interface Estado {
	nome: string
	sigla: string
	cidades: Cidade[]
}

defineProps<Props>()

const estados = ref<Estado[]>(estadosCidades.estados)
const cidades = ref<Cidade[]>([])

const extrairCidadesDoEstadoSelecionado = (estadoSelecionado: Estado | null) => {
	cidades.value = estadoSelecionado?.cidades || []
}
</script>

<style scoped lang="scss">
.campo-de-estado-cidade {
	width: 100%;
	display: flex;
	gap: var(--g-16);

	&__seletor {
		width: 100%;
		font-size: var(--fs-14);
	}
}
</style>
