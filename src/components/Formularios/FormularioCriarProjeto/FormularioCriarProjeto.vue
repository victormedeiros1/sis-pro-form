<template>
  <div class="criar-projeto">
    <div class="formulario">
      <div class="formulario__cabecalho">
        <h1>Dados gerais do projeto</h1>
      </div>
      <div class="formulario__corpo">
        <div class="formulario__grupo formulario__grupo--2-colunas">
          <CampoDeTexto
            id="titulo-da-pesquisa"
            rotulo="Título da pesquisa"
            v-model:texto="formularioCriarProjeto.tituloDaPesquisa"
          />
          <MultiSeletor
            id="tipos-da-pesquisa"
            rotulo="Tipos da pesquisa"
            :opcoes="opcoesTiposDaPesquisa"
            v-model:opcoesSelecionadas="formularioCriarProjeto.tiposDaPesquisa"
          />
        </div>

        <div class="formulario__grupo">
          <CampoDeLista
            id="pesquisadores-responsaveis"
            rotulo="Pesquisadores(as) responsáveis"
            rotuloBotao="ADICIONAR"
            textoAuxiliar="Nome completo do pesquisador(a)"
            v-model:listaDeCampos="
              formularioCriarProjeto.pesquisadoresResponsaveis
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CampoDeTexto from '@/components/Campos/CampoDeTexto/CampoDeTexto.vue'
  import CampoDeLista from '@/components/Campos/ListaDeCampos/ListaDeCampos.vue'
  import MultiSeletor from '@/components/Campos/MultiSeletor/MultiSeletor.vue'

  import { ListaDeCampos } from '@/components/Campos/ListaDeCampos/ListaDeCampos.vue'
  import { Opcoes } from '@/components/Campos/MultiSeletor/MultiSeletor.vue'

  import { ref } from 'vue'

  interface FormularioCriarProjeto {
    tituloDaPesquisa: string
    pesquisadoresResponsaveis: ListaDeCampos[]
    tiposDaPesquisa: Opcoes[]
  }

  const opcoesTiposDaPesquisa = ref<Opcoes[]>([
    {
      id: 'saude',
      nome: 'Saúde'
    },
    {
      id: 'tecnologia',
      nome: 'Tecnologia'
    }
  ])

  const formularioCriarProjeto = ref<FormularioCriarProjeto>({
    tituloDaPesquisa: '',
    pesquisadoresResponsaveis: [],
    tiposDaPesquisa: []
  })
</script>

<style scoped lang="scss">
  .criar-projeto {
    .formulario {
      &__cabecalho {
        margin-bottom: $m-16;
      }

      &__grupo {
        &--2-colunas {
          display: flex;
          gap: $g-16;
        }
      }

      &__corpo {
        display: flex;
        flex-direction: column;
        gap: $g-16;
      }
    }
  }
</style>
