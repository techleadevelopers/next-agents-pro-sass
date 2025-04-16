'use client'

import { ChartContainer, EmptyState } from '../../packages/ui/src'

export default function IntegraCRMs() {
  return (
    <ChartContainer
      title="Integrações com CRMs"
      subtitle="Visualize e gerencie as conexões com plataformas externas"
      badge="Beta"
    >
      {/* Aqui entraria um Flow Diagram futuramente (Visx Custom) */}
      <EmptyState
        title="Sem integrações conectadas"
        description="Você ainda não vinculou nenhum CRM ao sistema. Faça isso para automações mais poderosas."
      />
    </ChartContainer>
  )
}
