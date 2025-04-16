'use client'

import { ChartContainer } from '../../packages/ui/src'
import CardTemplateIA from '../components/CardTemplateIA'

// Define os tipos aceitos pelo BadgeStatus e CardTemplateIA
type StatusType = 'ativo' | 'pendente' | 'inativo' | 'erro'

// Função utilitária para mapear qualquer string para um tipo seguro
const mapStatus = (status: string): StatusType => {
  if (status === 'ativo') return 'ativo'
  if (status === 'pendente') return 'pendente'
  if (status === 'erro') return 'erro'
  return 'inativo'
}

const mockTemplates = [
  {
    nome: 'IA Vendas Automáticas',
    categoria: 'Vendas',
    status: 'ativo',
    vendas: 182,
    crescimento: 12.5,
  },
  {
    nome: 'Suporte Inteligente',
    categoria: 'Suporte',
    status: 'pendente',
    vendas: 95,
    crescimento: 5.3,
  },
  {
    nome: 'Fluxo Abandono Carrinho',
    categoria: 'E-commerce',
    status: 'erro',
    vendas: 23,
    crescimento: -2.4,
  },
]

export default function LojaTemplatesIAContainer() {
  return (
    <ChartContainer
      title="Loja de Templates IA"
      subtitle="Explore templates inteligentes prontos para uso com automação IA"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockTemplates.map((template, index) => (
          <CardTemplateIA
            key={index}
            nome={template.nome}
            categoria={template.categoria}
            status={mapStatus(template.status)}
            vendas={template.vendas}
            crescimento={template.crescimento}
          />
        ))}
      </div>
    </ChartContainer>
  )
}
