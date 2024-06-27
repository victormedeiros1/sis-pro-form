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

        <div class="formulario__grupo">
          <AreaDeTexto
            id="objetivo-da-pesquisa"
            rotulo="Objetivo da pesquisa"
            v-model:texto="formularioCriarProjeto.objetivoDaPesquisa"
          />
        </div>

        <div class="formulario__grupo formulario__grupo--2-colunas">
          <CampoDeTexto
            id="quais-etapas-serao-realizadas"
            rotulo="Quais etapas serão realizadas?"
            texto-auxiliar="Ex: Coleta de dados, Análise dos dados, etc."
            v-model:texto="formularioCriarProjeto.quaisEtapasSeraoRealizadas"
          />
        </div>

        <div class="formulario__grupo formulario__grupo--2-colunas">
          <SelecaoUnica
            id="sua-pesquisa-envolve-dados-do-sus"
            rotulo="Sua pesquisa envolve dados do SUS?"
            :opcoes="opcoesSuaPesquisaEnvolveDadosDoSUS"
            v-model:opcaoSelecionada="
              formularioCriarProjeto.quaisEtapasSeraoRealizadas
            "
          />
        </div>
        <pre>{{ formularioCriarProjeto }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import AreaDeTexto from '@/components/Campos/AreaDeTexto/AreaDeTexto.vue'
  import CampoDeLista from '@/components/Campos/ListaDeCampos/ListaDeCampos.vue'
  import CampoDeTexto from '@/components/Campos/CampoDeTexto/CampoDeTexto.vue'
  import MultiSeletor from '@/components/Campos/MultiSeletor/MultiSeletor.vue'
  import SelecaoUnica from '@/components/Campos/SelecaoUnica/SelecaoUnica.vue'

  import { OpcoesSelecaoUnica } from '@/components/Campos/SelecaoUnica/SelecaoUnica.vue'
  import { ListaDeCampos } from '@/components/Campos/ListaDeCampos/ListaDeCampos.vue'

  import { Opcoes } from '@/types/gerais'

  import { ref } from 'vue'

  interface FormularioCriarProjeto {
    tituloDaPesquisa: string
    pesquisadoresResponsaveis: ListaDeCampos[]
    tiposDaPesquisa: Opcoes[]
    objetivoDaPesquisa: string
    quaisEtapasSeraoRealizadas: string
    suaPesquisaEnvolveDadosDoSUS: string
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

  const opcoesSuaPesquisaEnvolveDadosDoSUS = ref<OpcoesSelecaoUnica[]>([
    {
      id: 'sim',
      rotulo: 'Sim',
      valor: 'sim'
    },
    {
      id: 'nao',
      rotulo: 'Não',
      valor: 'nao'
    }
  ])

  const formularioCriarProjeto = ref<FormularioCriarProjeto>({
    tituloDaPesquisa: '',
    pesquisadoresResponsaveis: [],
    tiposDaPesquisa: [],
    objetivoDaPesquisa: '',
    quaisEtapasSeraoRealizadas: '',
    suaPesquisaEnvolveDadosDoSUS: ''
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
