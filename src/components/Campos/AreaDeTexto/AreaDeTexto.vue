<template>
  <div class="area-de-texto">
    <label class="area-de-texto__rotulo" :for="id">{{ rotulo }}</label>
    <Textarea
      class="area-de-texto__campo"
      :id="id"
      :label="rotulo"
      :placeholder="textoAuxiliar"
      @update:model-value="emitirTexto"
      v-model="texto"
      size="small"
      autoResize
      :rows="4"
    />
  </div>
</template>

<script setup lang="ts">
  import Textarea from 'primevue/textarea'

  import { nextTick, ref } from 'vue'

  interface Props {
    id: string
    rotulo: string
    textoAuxiliar?: string
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
  .area-de-texto {
    display: flex;
    flex-direction: column;
    gap: $g-8;

    &__campo {
      width: 100%;
      font-size: $fs-14;
    }
  }
</style>
