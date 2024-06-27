<template>
  <div class="campo-de-texto">
    <label class="campo-de-texto__rotulo" :for="id">{{ rotulo }}</label>
    <InputText
      class="campo-de-texto__campo"
      :id="id"
      :label="rotulo"
      @update:model-value="emitirTexto"
      v-model="texto"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
  import { nextTick, ref } from 'vue'

  interface Props {
    id: string
    rotulo: string
  }

  defineProps<Props>()

  const emitir = defineEmits<{
    (evento: 'update:texto', texto: string): void
  }>()

  const texto = ref('')

  const emitirTexto = (): void => {
    nextTick(() => {
      emitir('update:texto', texto.value)
    })
  }
</script>

<style scoped lang="scss">
  .campo-de-texto {
    flex: 1;
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
