'use client'

import { FC } from 'react'
import {
  ChartContainer,
  ChartLoader,
  SectionTitle,
  DataTableCustom,
  BadgeStatus,
} from '../../packages/ui/src'

import { useRelatoriosSimulados } from '../hooks/useRelatoriosSimulados'

interface Relatorio {
  nome: string
  tipo: string
  data: string
  status: string
}

interface RelatoriosDetalhadosProps {
  period: '7d' | '30d' | '90d'
}

const mapStatusToBadge = (status: string): 'ativo' | 'inativo' | 'erro' | 'pendente' => {
  switch (status) {
    case 'Finalizado':
      return 'ativo'
    case 'Pendente':
      return 'pendente'
    case 'Erro':
      return 'erro'
    default:
      return 'inativo'
  }
}

const RelatoriosDetalhados: FC<RelatoriosDetalhadosProps> = ({ period }) => {
  const { data, loading } = useRelatoriosSimulados(period)

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-white">
        Relatórios Detalhados IA
      </h2>

      <p className="text-sm text-muted-foreground">
        Visualização estratégica dos dados gerados por período selecionado.
      </p>

      {loading ? (
        <ChartLoader />
      ) : (
        <div className="w-full space-y-6">
          <SectionTitle
            title="Relatórios Disponíveis"
            subtitle="Clique em uma linha para visualizar o relatório detalhado."
          />

          <DataTableCustom
            columns={[
              'Nome do Relatório',
              'Tipo',
              'Data de Criação',
              'Status',
            ]}
            data={data.map((item) => ({
              ...item,
              Status: (
                <BadgeStatus status={mapStatusToBadge(item.status)} />
              ),
            }))}
            onRowClick={(row: Relatorio) => {
              alert(`Relatório Selecionado: ${row.nome}`)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default RelatoriosDetalhados
