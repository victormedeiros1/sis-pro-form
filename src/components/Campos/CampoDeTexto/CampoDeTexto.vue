<template>
  <div class="campo-de-texto">
    <label class="campo-de-texto__rotulo" :for="id">Título da pesquisa</label>
    <InputText class="campo-de-texto__campo" :id="id" :label="rotulo" />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    id: string
    rotulo: string
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .campo-de-texto {
    display: flex;
    flex-direction: column;
    gap: $g-8;

    &__rotulo {
      color: $dark;
      font-weight: medium;
      font-size: $fs-14;
    }
  }
</style>
