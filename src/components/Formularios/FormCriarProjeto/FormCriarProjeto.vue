<template>
  <div class="criar-projeto">
    <div class="form">
      <div class="form__cabecalho">
        <h1>Dados gerais do projeto</h1>
      </div>
      <div class="form__corpo">
        <div class="form__grupo">
          <CampoDeTexto id="titulo-da-pesquisa" rotulo="Título da pesquisa" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CampoDeTexto from '@/components/Campos/CampoDeTexto/CampoDeTexto.vue'
</script>

<style scoped lang="scss">
  .criar-projeto {
    .form {
      &__cabecalho {
        margin-bottom: $m-16;
      }
    }
  }
</style>
