<template>
	<div class="selecao-unica">
		<span :id="`${id}-rotulo`" class="selecao-unica__rotulo rotulo">{{ rotulo }}</span>

		<div class="selecao-unica__campos">
			<div v-for="opcao in opcoes" :key="opcao.id" class="selecao-unica__grupo">
				<RadioButton
					v-model="opcaoSelecionada"
					class="selecao-unica__caixa"
					:input-id="opcao.id"
					:value="opcao.valor"
					name="opcao"
					@update:model-value="emitirOpcaoSelecionada"
				/>
				<label class="rotulo selecao-unica__rotulo-opcao" :for="opcao.id">{{
					opcao.rotulo
				}}</label>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton'

import { nextTick, onMounted, ref } from 'vue'

export interface OpcoesSelecaoUnica {
	id: string
	rotulo: string
	valor: string
}

interface Props {
	id: string
	rotulo: string
	opcoes: OpcoesSelecaoUnica[]
}

const props = defineProps<Props>()

const emitir = defineEmits<{
	(evento: 'update:opcaoSelecionada', opcaoSelecionada: string): void
}>()

const opcoes = ref<OpcoesSelecaoUnica[]>([])
const opcaoSelecionada = ref<string>('')

const emitirOpcaoSelecionada = (): void => {
	nextTick(() => {
		emitir('update:opcaoSelecionada', opcaoSelecionada.value)
	})
}

onMounted(() => {
	opcoes.value = props.opcoes
})
</script>

<style scoped lang="scss">
.selecao-unica {
	display: flex;
	flex-direction: column;
	gap: $g-8;

	&__campos {
		display: flex;
		flex-direction: row;
		gap: $g-16;
	}

	&__grupo {
		cursor: pointer;
		display: flex;
		gap: $g-8;
	}

	&__rotulo-opcao {
		cursor: pointer;
	}
}
</style>
