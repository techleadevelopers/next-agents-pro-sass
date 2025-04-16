'use client'

import { FC } from 'react'
import { KPIChartCard, BadgeStatus } from '../../packages/ui/src'

interface CardTemplateIAProps {
  nome: string
  categoria: string
  status: 'ativo' | 'pendente' | 'inativo' | 'erro'
  vendas: number
  crescimento: number // percentual, ex: 12.5
}

const CardTemplateIA: FC<CardTemplateIAProps> = ({
  nome,
  categoria,
  status,
  vendas,
  crescimento,
}) => {
  return (
    <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
      border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-6 rounded-lg 
      shadow-md animate-gradient-x space-y-4 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-extrabold text-white tracking-wide">{nome}</h3>
        <BadgeStatus status={status} />
      </div>

      <p className="text-sm text-muted-foreground">
        Categoria: <span className="text-white">{categoria}</span>
      </p>

      <KPIChartCard
        title="Vendas Realizadas"
        value={String(vendas)}
        trend={`+${crescimento.toFixed(1)}%`}
      />
    </div>
  )
}

export default CardTemplateIA
