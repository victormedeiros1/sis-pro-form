<template>
	<Container>
		<Menu />
		<RouterView />
	</Container>
</template>

<script setup lang="ts">
import Container from '@/components/Container/Container.vue'
import Menu from '@/components/Menu/Menu.vue'
</script>

<style scoped lang="scss"></style>
