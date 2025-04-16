'use client'

import SectionTitle from '../packages/ui/src/SectionTitle'
import IntegracoesContainer from './containers/Integracoes.container'

export default function IntegracoesPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Integrações Inteligentes"
        subtitle="Gerencie conexões com plataformas externas, CRMs e Webhooks"
      />

      <IntegracoesContainer />
    </div>
  )
}
