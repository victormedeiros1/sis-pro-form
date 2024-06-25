<template>
  <div class="campo-de-lista">
    <label class="campo-de-lista__rotulo" :for="id">{{ rotulo }}</label>
    <div
      class="campo-de-lista__grupo"
      v-for="(campo, index) in campos"
      :key="campo.id"
    >
      <InputText
        class="campo-de-lista__campo"
        :id="campo.id"
        :placeholder="textoAuxiliar"
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
    <div class="campo-de-lista__rodape">
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

  interface Campos {
    id: string
    texto: string
  }

  const props = defineProps<Props>()

  const campos = ref<Campos[]>([
    {
      id: `${props.id}-1`,
      texto: ''
    }
  ])

  const adicionarCampo = (): void => {
    campos.value.push({
      id: `${props.id}-${campos.value.length + 1}`,
      texto: ''
    })
  }

  const removerCampo = (id: string): void => {
    campos.value = campos.value.filter((campo) => campo.id !== id)
  }
</script>

<style scoped lang="scss">
  .campo-de-lista {
    display: flex;
    flex-direction: column;
    gap: $g-8;

    &__rotulo {
      color: $dark;
      font-weight: medium;
      font-size: $fs-14;
    }

    &__grupo {
      width: 100%;
      display: flex;
      gap: $g-8;
    }

    &__campo {
      width: 100%;
    }
  }
</style>
