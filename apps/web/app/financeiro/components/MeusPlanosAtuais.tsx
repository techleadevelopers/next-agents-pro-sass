'use client'

import { KPIChartCard, StatisticCard } from '../../packages/ui/src'
import { Sparkles, Cpu, Zap } from 'lucide-react'

export default function MeusPlanosAtuais() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-white tracking-wide">
        Meus Planos Atuais
      </h2>

      <KPIChartCard
        title="Plano Atual"
        value="Pro Plus"
        trend="+28% uso"
        icon={<Sparkles className="w-5 h-5 text-accent" />}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatisticCard
          label="Recursos Utilizados"
          value="82%"
          description="Baseado nos últimos 30 dias"
          icon={<Cpu className="w-6 h-6" />}
          variant="warning"
        />

        <StatisticCard
          label="Automação IA"
          value="12 fluxos"
          description="Inclui fluxos ativos e agendados"
          icon={<Zap className="w-6 h-6" />}
          variant="success"
        />
      </div>
    </div>
  )
}
