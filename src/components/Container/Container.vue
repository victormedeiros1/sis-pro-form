<template>
	<div class="container">
		<slot />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
	display: flex;
	width: 100%;
	min-height: 100vh;
	background-image: url('@/assets/images/background1920x1080.jpg');
	background-size: cover;
	background-attachment: fixed;
	padding: 0;
	margin: 0;
}
</style>
