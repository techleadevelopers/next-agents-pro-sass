'use client'

import { FC } from 'react'
import { ChartContainer, ChartLoader, SectionTitle, BadgeStatus } from '../../packages/ui/src'
import RadialChart from '../../charts/RadialChart'

interface DetalhesTemplateProps {
  nome: string
  categoria: string
  status: 'ativo' | 'pendente' | 'inativo' | 'erro'
  popularidade: number // 0 a 100
  descricao: string
}

const DetalhesTemplate: FC<DetalhesTemplateProps> = ({
  nome,
  categoria,
  status,
  popularidade,
  descricao,
}) => {
  return (
    <ChartContainer
      title="Detalhes do Template"
      subtitle="Veja o desempenho, status e popularidade do template de IA"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        {/* Card HUD com RadialChart */}
        <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 
          border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 
          p-6 rounded-lg shadow-md animate-gradient-x flex flex-col items-center space-y-4"
        >
          <h3 className="text-lg text-white font-extrabold tracking-wide text-center">
            Popularidade IA
          </h3>
          <RadialChart value={popularidade} />
        </div>

        {/* Informações do Template */}
        <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 
          border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 
          p-6 rounded-lg shadow-md animate-gradient-x space-y-4"
        >
          <h3 className="text-2xl font-extrabold text-white tracking-wide">
            {nome}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {descricao}
          </p>

          <div className="text-sm text-white flex items-center gap-2">
            <span className="font-semibold">Categoria:</span> {categoria}
          </div>

          <div className="flex items-center gap-2 text-sm text-white">
            <span className="font-semibold">Status:</span>
            <BadgeStatus status={status} />
          </div>
        </div>
      </div>
    </ChartContainer>
  )
}

export default DetalhesTemplate
