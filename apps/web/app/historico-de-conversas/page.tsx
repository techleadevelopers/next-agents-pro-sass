'use client'

import TabsAnimated from '../packages/ui/src/TabsAnimated'
import SectionTitle from '../packages/ui/src/SectionTitle'
import HistoricoDeConversasContainer from './containers/HistóricoDeConversas.container'

export default function HistoricoDeConversasPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Conversas Inteligentes"
        subtitle="Acompanhe a jornada dos seus usuários com assistentes IA"
      />

<TabsAnimated
  tabs={[
    { label: 'Últimos 7 dias', value: '7d' },
    { label: 'Últimos 30 dias', value: '30d' },
    { label: 'Personalizado', value: 'custom' },
  ]}
  defaultTab="7d"
  onTabChange={(tab) => {
    console.log(`Filtro alterado para: ${tab}`)
  }}
/>


      <HistoricoDeConversasContainer />
    </div>
  )
}
