<template>
  <div class="criar-projeto">
    <div class="formulario">
      <div class="formulario__cabecalho">
        <h1>Dados gerais do projeto</h1>
      </div>
      <div class="formulario__corpo">
        <div class="formulario__grupo">
          <CampoDeTexto
            id="titulo-da-pesquisa"
            rotulo="Título da pesquisa"
            v-model:texto="formularioCriarProjeto.tituloDaPesquisa"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CampoDeTexto from '@/components/Campos/CampoDeTexto/CampoDeTexto.vue'
  import { ref } from 'vue'

  interface FormularioCriarProjeto {
    tituloDaPesquisa: string
  }

  const formularioCriarProjeto = ref<FormularioCriarProjeto>({
    tituloDaPesquisa: ''
  })
</script>

<style scoped lang="scss">
  .criar-projeto {
    .formulario {
      &__cabecalho {
        margin-bottom: $m-16;
      }
    }
  }
</style>
