<template>
	<Sidebar
		class="sidebar"
		:visible="true"
		:modal="false"
		:show-close-icon="false"
		:position="'left'"
		:style="{ width: '200px' }"
	>
		<template #header>
			<div class="sidebar__cabecalho">
				<img class="sidebar__logo" src="@/assets/images/logo30x30.svg" alt="Logo" />
				<h1 class="sidebar__titulo">SisProForm</h1>
			</div>
		</template>

		<div class="sidebar__conteudo">
			<div class="secao">
				<div class="secao__titulo">PROJETOS</div>
				<ul class="secao__menu">
					<li class="secao__item">
						<router-link class="secao__link" to="/"
							><i class="pi pi-objects-column"></i>Abertos</router-link
						>
					</li>
					<li class="secao__item">
						<router-link class="secao__link" to="/">
							<i class="pi pi-th-large"></i>Fechados</router-link
						>
					</li>
				</ul>
			</div>
			<div class="secao">
				<div class="secao__titulo">ENTIDADES</div>
				<ul class="secao__menu">
					<li class="secao__item">
						<router-link class="secao__link" to="/"
							><i class="pi pi-id-card"></i>Pesquisadores</router-link
						>
					</li>
					<li class="secao__item">
						<router-link class="secao__link" to="/"
							><i class="pi pi-users"></i>Orientadores</router-link
						>
					</li>
					<li class="secao__item">
						<router-link class="secao__link" to="/"
							><i class="pi pi-user"></i>Orientandos</router-link
						>
					</li>
					<li class="secao__item">
						<router-link class="secao__link" to="/"
							><i class="pi pi-graduation-cap"></i>Instituições</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</Sidebar>
</template>

<script setup lang="ts">
import Sidebar from 'primevue/sidebar'
</script>

<style scoped lang="scss">
.sidebar {
	width: 200px;

	&__cabecalho {
		display: flex;
		align-items: center;
		gap: var(--g-8);
	}

	&__titulo {
		font-size: var(--fs-14);
		font-weight: 700;
	}

	.secao {
		margin-top: var(--m-16);
		margin-bottom: var(--m-28);

		&__titulo {
			font-size: var(--fs-12);
			color: var(--gray-500);
			font-weight: 500;
			padding: var(--p-8);
		}

		&__menu {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
		}

		&__item {
			font-size: var(--fs-14);
			font-weight: 500;
		}

		&__link {
			display: flex;
			flex-direction: row;
			align-items: center;
			color: var(--gray-500);
			text-decoration: none;
			gap: var(--g-8);
			padding: var(--p-14);

			&:hover {
				background-color: var(--gray-50);
			}
		}
	}
}
</style>
