<template>
	<Container>
		<Menu />
		<div class="content">
			<div class="main">
				<slot />
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import Container from '@/components/Container/Container.vue'
import Menu from '@/components/Menu/Menu.vue'
</script>

<style scoped lang="scss">
.content {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: $p-64 $p-100;
}
</style>
