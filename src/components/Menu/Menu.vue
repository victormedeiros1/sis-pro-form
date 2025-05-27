<template>
	<Sidebar
		class="sidebar"
		:visible="true"
		:modal="false"
		:dismissable-mask="true"
		:show-close-icon="false"
		:position="'left'"
		:style="{ width: '250px' }"
	>
		<div class="sidebar__header">
			<img class="sidebar__logo" src="@/assets/images/logo30x30.svg" alt="Logo" />
			<h1 class="sidebar__title">SisProForm</h1>
		</div>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</Sidebar>
</template>

<script setup lang="ts">
import Sidebar from 'primevue/sidebar'
</script>

<style scoped lang="scss">
.sidebar {
	width: 200px;

	&__header {
		display: flex;
		align-items: center;
		gap: var(--g-8);
	}

	&__title {
		font-size: var(--fs-14);
		font-weight: 700;
	}
}
</style>
