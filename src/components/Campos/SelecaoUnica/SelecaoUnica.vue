<template>
  <div class="selecao-unica">
    <label class="selecao-unica__rotulo" :id="id">{{ rotulo }}</label>

    <div class="selecao-unica__campos">
      <div
        class="selecao-unica__grupo"
        :id="id"
        v-for="opcao in opcoes"
        :key="opcao.id"
      >
        <RadioButton
          class="selecao-unica__caixa"
          :input-id="opcao.id"
          :value="opcao.valor"
          @update:model-value="emitirOpcaoSelecionada"
          v-model="opcaoSelecionada"
          name="opcao"
        />
        <label class="selecao-unica__rotulo" :for="opcao.id">{{
          opcao.rotulo
        }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import RadioButton from 'primevue/radiobutton'

  import { nextTick, onMounted, ref } from 'vue'

  export interface OpcoesSelecaoUnica {
    id: string
    rotulo: string
    valor: string
  }

  interface Props {
    id: string
    rotulo: string
    opcoes: OpcoesSelecaoUnica[]
  }

  const props = defineProps<Props>()

  const emitir = defineEmits<{
    (evento: 'update:opcaoSelecionada', opcaoSelecionada: string): void
  }>()

  const opcoes = ref<OpcoesSelecaoUnica[]>([])
  const opcaoSelecionada = ref<string>('')

  const emitirOpcaoSelecionada = (): void => {
    nextTick(() => {
      emitir('update:opcaoSelecionada', opcaoSelecionada.value)
    })
  }

  onMounted(() => {
    opcoes.value = props.opcoes
  })
</script>

<style scoped lang="scss">
  .selecao-unica {
    display: flex;
    flex-direction: column;
    gap: $g-8;

    &__campos {
      display: flex;
      flex-direction: row;
      gap: $g-16;
    }

    &__grupo {
      display: flex;
      gap: $g-8;
    }

    &__rotulo {
      cursor: default;
      color: $dark;
      font-weight: medium;
      font-size: $fs-14;
    }
  }
</style>
