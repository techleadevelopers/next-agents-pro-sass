'use client'

import { SectionTitle, TabsAnimated } from '../packages/ui/'
import { Suspense, useState } from 'react'
import dynamic from 'next/dynamic'

// Import dinâmico dos componentes (melhor para performance e SSR)
const MeusPlanosAtuais = dynamic(() => import('./components/MeusPlanosAtuais'), {
  ssr: false,
  loading: () => <p className="text-sm text-muted-foreground">Carregando planos...</p>,
})

const HistoricoDePagamentos = dynamic(() => import('./components/HistoricoDePagamentos'), {
  ssr: false,
  loading: () => <p className="text-sm text-muted-foreground">Carregando histórico...</p>,
})

export default function FinanceiroPage() {
  const [abaAtual, setAbaAtual] = useState('planos')

  return (
    <div className="space-y-8">
      <SectionTitle
        title="Painel Financeiro"
        subtitle="Gerencie suas assinaturas, pagamentos e upgrades com controle total"
        badge="Premium"
      />

      <TabsAnimated
        defaultTab="planos"
        tabs={[
          { label: 'Meus Planos', value: 'planos' },
          { label: 'Pagamentos', value: 'historico' },
        ]}
        onTabChange={(tab) => setAbaAtual(tab)}
      />

      <Suspense fallback={<div className="text-sm text-muted-foreground">Carregando conteúdo...</div>}>
        {abaAtual === 'planos' && <MeusPlanosAtuais />}
        {abaAtual === 'historico' && <HistoricoDePagamentos />}
      </Suspense>
    </div>
  )
}
