<template>
  <div class="multi-seletor">
    <label class="multi-seletor__rotulo" :for="id">{{ rotulo }}</label>
    <MultiSelect
      class="multi-seletor__seletor"
      :options="opcoes"
      v-model="opcoesSelecionadas"
      optionLabel="nome"
      filter
    />
  </div>
</template>

<script setup lang="ts">
  import MultiSelect from 'primevue/multiselect'

  import { ref } from 'vue'

  export interface Opcoes {
    id: string
    nome: string
  }

  interface Props {
    id: string
    rotulo: string
    opcoes: Opcoes[]
    opcoesSelecionadas: Opcoes[]
  }

  defineProps<Props>()

  const opcoesSelecionadas = ref<Opcoes[]>([])
</script>

<style scoped lang="scss">
  .multi-seletor {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $g-8;

    &__rotulo {
      color: $dark;
      font-weight: medium;
      font-size: $fs-14;
    }

    &__seletor {
      font-size: $fs-14;
    }
  }
</style>
