<template>
  <Menubar class="menubar" :model="items">
    <template #start>
      <img class="menubar__logo" src="@/assets/images/logo.svg" alt="logo" />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
  import Menubar from 'primevue/menubar'

  import { ref } from 'vue'

  const items = ref([
    {
      label: 'Início',
      icon: 'pi pi-home',
    },
    {
      label: 'Projetos',
      icon: 'pi pi-th-large',
    },
  ])
</script>

<style scoped lang="scss">
  .menubar {
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid $gray-100;
    padding: $p-8 $p-16;
  }
</style>
