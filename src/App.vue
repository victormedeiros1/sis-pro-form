<template>
  <Container>
    <h1>SisProForms</h1>
    <form @submit="submitForm">
      <InputText />
    </form>
  </Container>
</template>

<script setup lang="ts">
  import Container from '@/components/Container/Container.vue'

  const submitForm = (e: Event): void => {
    e.preventDefault()
    console.log('Form submitted')
  }
</script>

<style scoped lang="scss"></style>
