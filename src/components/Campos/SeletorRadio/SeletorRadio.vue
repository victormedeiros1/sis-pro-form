<template>
	<div class="selecao-radio">
		<span :id="`${id}-rotulo`" class="selecao-radio__rotulo rotulo">{{ rotulo }}</span>

		<div class="selecao-radio__campos">
			<div v-for="opcao in opcoes" :key="opcao.id" class="selecao-radio__grupo">
				<RadioButton
					v-model="opcaoSelecionada"
					class="selecao-radio__caixa"
					:input-id="opcao.id"
					:value="opcao.valor"
					name="opcao"
					@update:model-value="emitirOpcaoSelecionada"
				/>
				<label class="rotulo selecao-radio__rotulo-opcao" :for="opcao.id">{{
					opcao.rotulo
				}}</label>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton'

import { nextTick, onMounted, ref } from 'vue'

export interface OpcoesSeletorRadio {
	id: string
	rotulo: string
	valor: string
}

interface Props {
	id: string
	rotulo: string
	opcoes: OpcoesSeletorRadio[]
}

const props = defineProps<Props>()

const emitir = defineEmits<{
	(evento: 'update:opcaoSelecionada', opcaoSelecionada: string): void
}>()

const opcoes = ref<OpcoesSeletorRadio[]>([])
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
.selecao-radio {
	display: flex;
	flex-direction: column;
	gap: var(--g-8);

	&__campos {
		display: flex;
		flex-direction: row;
		gap: var(--g-16);
	}

	&__grupo {
		cursor: pointer;
		display: flex;
		gap: var(--g-8);
	}

	&__rotulo-opcao {
		cursor: pointer;
	}
}
</style>
