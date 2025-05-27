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
						v-model:texto="formularioCriarProjeto.tituloDaPesquisa"
						rotulo="Título da pesquisa"
						texto-auxiliar="Ex: Estudo sobre a COVID-19"
					/>
					<MultiSeletor
						id="tipos-da-pesquisa"
						v-model:opcoesSelecionadas="formularioCriarProjeto.tiposDaPesquisa"
						rotulo="Tipos da pesquisa"
						:opcoes="opcoesTiposDaPesquisa"
					/>
				</div>

				<div class="formulario__grupo">
					<CampoDeLista
						id="orientadores-responsaveis"
						v-model:listaDeCampos="formularioCriarProjeto.orientadoresResponsaveis"
						rotulo="Orientadores(as) responsáveis"
						rotuloBotao="ADICIONAR"
						textoAuxiliar="Nome completo do orientador(a) responsável"
					/>
				</div>

				<div class="formulario__grupo">
					<CampoDeLista
						id="orientandos-responsaveis"
						v-model:listaDeCampos="formularioCriarProjeto.orientandosResponsaveis"
						rotulo="Orientandos(as) responsáveis"
						rotuloBotao="ADICIONAR"
						textoAuxiliar="Nome completo do orientando(a) responsável"
					/>
				</div>

				<div class="formulario__grupo">
					<CampoDeLista
						id="pesquisadores-responsaveis"
						v-model:listaDeCampos="formularioCriarProjeto.pesquisadoresResponsaveis"
						rotulo="Pesquisadores(as) responsáveis"
						rotuloBotao="ADICIONAR"
						textoAuxiliar="Nome completo do pesquisador(a) responsável"
					/>
				</div>

				<div class="formulario__grupo">
					<AreaDeTexto
						id="objetivo-da-pesquisa"
						v-model:texto="formularioCriarProjeto.objetivoDaPesquisa"
						rotulo="Objetivo da pesquisa"
						texto-auxiliar="Descreva o objetivo da pesquisa de forma clara e objetiva"
					/>
				</div>

				<div class="formulario__grupo">
					<CampoDeTexto
						id="quais-etapas-serao-realizadas"
						v-model:texto="formularioCriarProjeto.quaisEtapasSeraoRealizadas"
						rotulo="Quais etapas serão realizadas?"
						texto-auxiliar="Ex: Coleta de dados, Análise dos dados, etc."
					/>
				</div>

				<div class="formulario__grupo">
					<SelecaoUnica
						id="sua-pesquisa-envolve-dados-do-sus"
						v-model:opcaoSelecionada="formularioCriarProjeto.suaPesquisaEnvolveDadosDoSUS"
						rotulo="Sua pesquisa envolve dados do SUS?"
						:opcoes="opcoesSuaPesquisaEnvolveDadosDoSUS"
					/>
				</div>

				<div class="formulario__grupo formulario__grupo--2-colunas">
					<CampoDeTexto
						id="cnpj-da-instituicao"
						v-model:texto="formularioCriarProjeto.cnpjDaInstituicao"
						rotulo="CNPJ da Instituição"
						texto-auxiliar="Ex: 00.000.000/0000-00"
					/>
					<CampoDeTexto
						id="inserir-nome-do-cep"
						v-model:texto="formularioCriarProjeto.inserirNomeDoCep"
						rotulo="Inserir nome do CEP"
						texto-auxiliar="Ex: Rio Grande do Norte"
					/>
				</div>

				<div class="formulario__grupo">
					<AreaDeTexto
						id="metologia-que-ira-utilizar"
						v-model:texto="formularioCriarProjeto.metodologiaQueIraUtilizar"
						rotulo="Metodologia que irá utilizar"
						texto-auxiliar="Descreva a metodologia que será utilizada em um resumo conciso"
					/>
				</div>

				<!-- // TODO: lógica dos formulários que o usuário deverá preencher -->
				<div class="formularios">
					<span class="rotulo formularios__titulo"
						>De acordo com os dados fornecidos a respeito do projeto, esses serão os
						formulários que você deverá preencher</span
					>
					<ul class="formularios__lista">
						<li class="formularios__nome">
							Declaração de Compromisso Ético de Não Início da Pesquisa
						</li>
						<li class="formularios__nome">Termo de confidencialidade</li>
						<li class="formularios__nome">Folha de identificação do pesquisador</li>
						<li class="formularios__nome">Petição para Dispensa de TCLE ou RCLE</li>
						<li class="formularios__nome">
							Termo de autorização para gravação de voz e ou Registro de Imagens (fotos e
							ou vídeos)
						</li>
					</ul>
				</div>

				<div class="formulario__rodape">
					<Button class="formulario__enviar" label="PRÓXIMO" size="small" />
				</div>
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

import Button from 'primevue/button'

import { OpcoesSelecaoUnica } from '@/components/Campos/SelecaoUnica/SelecaoUnica.vue'
import { ListaDeCampos } from '@/components/Campos/ListaDeCampos/ListaDeCampos.vue'

import { Opcoes } from '@/types/gerais'

import { ref } from 'vue'

interface FormularioCriarProjeto {
	tituloDaPesquisa: string
	orientadoresResponsaveis: ListaDeCampos[]
	orientandosResponsaveis: ListaDeCampos[]
	pesquisadoresResponsaveis: ListaDeCampos[]
	tiposDaPesquisa: Opcoes[]
	objetivoDaPesquisa: string
	quaisEtapasSeraoRealizadas: string
	suaPesquisaEnvolveDadosDoSUS: string
	cnpjDaInstituicao: string
	inserirNomeDoCep: string
	metodologiaQueIraUtilizar: string
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
	orientadoresResponsaveis: [],
	orientandosResponsaveis: [],
	pesquisadoresResponsaveis: [],
	tiposDaPesquisa: [],
	objetivoDaPesquisa: '',
	quaisEtapasSeraoRealizadas: '',
	suaPesquisaEnvolveDadosDoSUS: '',
	cnpjDaInstituicao: '',
	inserirNomeDoCep: '',
	metodologiaQueIraUtilizar: ''
})
</script>

<style scoped lang="scss">
.criar-projeto {
	.formulario {
		&__cabecalho {
			margin-bottom: var(--m-16);
		}

		&__grupo {
			&--2-colunas {
				display: flex;
				gap: var(--g-16);
			}
		}

		&__corpo {
			display: flex;
			flex-direction: column;
			gap: var(--g-16);
		}
	}

	.formularios {
		display: flex;
		flex-direction: column;
		gap: var(--g-8);

		&__lista {
			display: flex;
			flex-direction: column;
			gap: var(--g-4);
			margin: 0;
		}

		&__nome {
			color: var(--gray);
			font-size: var(--fs-14);
		}
	}
}
</style>
