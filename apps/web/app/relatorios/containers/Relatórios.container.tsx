'use client'

import {
  TabsAnimated,
  SectionTitle,
  ChartContainer,
  ChartLoader,
} from '../../packages/ui/src'

import RelatoriosDetalhados from '../components/RelatóriosDetalhados'
import GerarRelatorio from '../components/GerarRelatório'
import { useTabControl } from '../../hooks'

export default function RelatoriosContainer() {
  const { tab, changeTab } = useTabControl('30d')

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Relatórios IA"
        subtitle="Gestão e detalhamento avançado dos dados gerados pela plataforma"
      />

      <TabsAnimated
        tabs={[
          { label: '7 dias', value: '7d' },
          { label: '30 dias', value: '30d' },
          { label: '90 dias', value: '90d' },
        ]}
        defaultTab={tab}
        onTabChange={(newTab) => changeTab(newTab as '7d' | '30d' | '90d')}
      />

      {/* Relatórios Detalhados */}
      <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x">
        <ChartContainer title="Relatórios Detalhados">
          <RelatoriosDetalhados period={tab} />
        </ChartContainer>
      </div>

      {/* Geração de Relatório */}
      <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x">
        <ChartContainer title="Gerar Novo Relatório IA">
          <GerarRelatorio />
        </ChartContainer>
      </div>
    </div>
  )
}
