<template>
  <div class="lista-de-campos">
    <label class="lista-de-campos__rotulo" :for="listaDeCampos[0].id">{{
      rotulo
    }}</label>
    <div
      class="lista-de-campos__grupo"
      v-for="(campo, index) in listaDeCampos"
      :key="campo.id"
    >
      <InputText
        class="campo lista-de-campos__campo"
        :id="campo.id"
        :placeholder="textoAuxiliar"
        @update:model-value="emitirCampos"
        v-model="campo.texto"
        size="small"
      />
      <Button
        v-if="index !== 0"
        @click="removerCampo(campo.id)"
        aria-label="Remover campo"
        icon="pi pi-trash"
        severity="danger"
        size="small"
        text
      />
    </div>
    <div class="lista-de-campos__rodape">
      <Button
        :label="rotuloBotao"
        icon="pi pi-plus"
        @click="adicionarCampo"
        size="small"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button'

  import { ref } from 'vue'

  interface Props {
    id: string
    rotulo: string
    rotuloBotao: string
    textoAuxiliar: string
  }

  export interface ListaDeCampos {
    id: string
    texto: string
  }

  const props = defineProps<Props>()

  const emitir = defineEmits<{
    (evento: 'update:listaDeCampos', listaDeCampos: ListaDeCampos[]): void
  }>()

  const listaDeCampos = ref<ListaDeCampos[]>([
    {
      id: `${props.id}-1`,
      texto: ''
    }
  ])

  const emitirCampos = (): void => {
    emitir('update:listaDeCampos', listaDeCampos.value)
  }

  const adicionarCampo = (): void => {
    listaDeCampos.value.push({
      id: `${props.id}-${listaDeCampos.value.length + 1}`,
      texto: ''
    })

    emitir('update:listaDeCampos', listaDeCampos.value)
  }

  const removerCampo = (id: string): void => {
    listaDeCampos.value = listaDeCampos.value.filter((campo) => campo.id !== id)

    emitir('update:listaDeCampos', listaDeCampos.value)
  }
</script>

<style scoped lang="scss">
  .lista-de-campos {
    display: flex;
    flex-direction: column;
    gap: $g-8;

    &__grupo {
      width: 100%;
      display: flex;
      gap: $g-8;
    }
  }
</style>
