'use client'

import { useTabControl, useMessagesMetrics, useAgentsPerformance } from '../../hooks'
import { ChartContainer, ChartLoader, SectionTitle, TabsAnimated } from '../../packages/ui/src'
import GraficoMensagensPorPeriodo from '../components/GraficoMensagensPorPeriodo'
import PerformancePorAgente from '../components/PerformancePorAgente'
import TabelaKPIConversao from '../components/TabelaKPIConversao'

export default function MetricasAvancadasContainer() {
  const { tab, changeTab } = useTabControl('30d')

  const { data: mensagensData, loading: loadingMensagens } = useMessagesMetrics(tab)
  const { data: agentesData, isLoading: loadingAgentes } = useAgentsPerformance(tab)

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Métricas Avançadas"
        subtitle="Análise de performance da IA por período"
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

      <ChartContainer title="Mensagens por Período">
        <GraficoMensagensPorPeriodo
          data={mensagensData}
          loading={loadingMensagens}
        />
      </ChartContainer>

      <ChartContainer title="Performance por Agente">
        {loadingAgentes ? (
          <ChartLoader />
        ) : (
            <PerformancePorAgente
            data={agentesData?.chartData || []}
            isLoading={loadingAgentes}
          />
          
        )}
      </ChartContainer>

      <TabelaKPIConversao />
    </div>
  )
}
