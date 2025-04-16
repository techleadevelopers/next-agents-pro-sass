'use client'

import { ChartContainer } from '../../packages/ui/src'
import MeusPlanosAtuais from '../components/MeusPlanosAtuais'
import UpgradeDowngradePlano from '../components/UpgradeDowngradePlano'

export default function FinanceiroContainer() {
  return (
    <ChartContainer
      title="Gestão Financeira"
      subtitle="Gerencie seus planos, pagamentos e upgrades com total controle"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x">
          <MeusPlanosAtuais />
        </div>
        <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x">
          <UpgradeDowngradePlano />
        </div>
      </div>
    </ChartContainer>
  )
}
