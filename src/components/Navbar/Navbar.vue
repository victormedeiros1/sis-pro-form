<template>
	<Menubar class="menubar" :model="items">
		<template #start>
			<router-link to="/">
				<img
					class="menubar__logo"
					src="@/assets/images/logo30x30.svg"
					alt="Logo do SisProForm"
				/>
			</router-link>
		</template>

		<template #item="{ item }">
			<router-link :to="item.to">
				<div class="menubar__item">
					<i class="menubar__icone" :class="item.icon"></i>
					<span class="menubar__rotulo">{{ item.label }}</span>
				</div>
			</router-link>
		</template>
	</Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'

import logo30x30 from '@/assets/images/logo30x30.svg'

import { ref } from 'vue'

const items = ref([
	{
		label: 'Projetos',
		icon: 'pi pi-th-large',
		to: '/projetos/criar',
		key: '1',
		visible: true
	}
])
</script>

<style scoped lang="scss">
.menubar {
	display: flex;
	background: none;
	gap: $g-12;
	width: 100%;
	position: absolute;
	border-radius: 0;
	border: 0;
	padding: $p-8 $p-16;

	@media (width <= $sm) {
		background: $light;
		border-bottom: 1px solid $gray-200;
	}

	&__logo {
		@media (width <= $sm) {
			display: none;
		}
	}

	a {
		text-decoration: none;
	}

	&__item {
		display: flex;
		padding: $p-8 $p-12;
	}

	&__icone {
		color: $gray-700;
		margin-right: $m-8;
	}

	&__rotulo {
		font-size: $fs-14;
		color: $gray-700;
	}
}
</style>
