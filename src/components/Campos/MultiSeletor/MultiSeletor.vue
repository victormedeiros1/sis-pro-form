<template>
  <div class="multi-seletor">
    <label class="multi-seletor__rotulo rotulo" :for="id">{{ rotulo }}</label>
    <MultiSelect
      class="multi-seletor__seletor"
      :inputId="id"
      :options="opcoes"
      @update:modelValue="emitirOpcoesSelecionadas"
      v-model="opcoesSelecionadas"
      optionLabel="nome"
      filter
      placeholder="Selecione os tipos da sua pesquisa"
    />
  </div>
</template>

<script setup lang="ts">
  import MultiSelect from 'primevue/multiselect'

  import { Opcoes } from '@/types/gerais'

  import { nextTick, ref } from 'vue'

  interface Props {
    id: string
    rotulo: string
    opcoes: Opcoes[]
    opcoesSelecionadas: Opcoes[]
  }

  defineProps<Props>()

  const emitir = defineEmits<{
    (evento: 'update:opcoesSelecionadas', opcoesSelecionadas: Opcoes[]): void
  }>()

  const opcoesSelecionadas = ref<Opcoes[]>([])

  const emitirOpcoesSelecionadas = (): void => {
    nextTick(() => {
      emitir('update:opcoesSelecionadas', opcoesSelecionadas.value)
    })
  }
</script>

<style scoped lang="scss">
  .multi-seletor {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $g-8;

    &__seletor {
      font-size: $fs-14;
    }
  }
</style>
