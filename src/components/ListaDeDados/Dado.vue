<template>
	<div class="dado">
		<span class="dado__nome">{{ nome }} </span>
		<span class="dado__valor">{{ valor }} </span>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
	nome: string
	valor: any
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.dado {
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--light);
	border: 1px solid var(--gray-300);
	gap: var(--g-8);
	padding: var(--p-16);

	&__nome {
		color: var(--dark);
		font-size: var(--fs-14);
		font-weight: 700;
	}

	&__valor {
		color: var(--gray-600);
		font-weight: 400;
	}
}
</style>
