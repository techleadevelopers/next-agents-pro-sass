'use client'

import { SectionTitle } from '../packages/ui/src'
import CardTemplateIA from './components/CardTemplateIA'

const mockTemplates = [
  {
    nome: 'Template Vendas IA',
    categoria: 'Vendas',
    status: 'ativo',
    vendas: 320,
    crescimento: 18.7,
  },
  {
    nome: 'Template Suporte IA',
    categoria: 'Atendimento',
    status: 'pendente',
    vendas: 120,
    crescimento: 9.3,
  },
]

// 🧠 Função pra garantir compatibilidade de status
const mapStatus = (status: string): 'ativo' | 'pendente' | 'inativo' | 'erro' => {
  if (status === 'ativo') return 'ativo'
  if (status === 'pendente') return 'pendente'
  if (status === 'erro') return 'erro'
  return 'inativo' // fallback default
}

export default function LojaTemplatesPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Loja de Templates IA"
        subtitle="Explore templates prontos para fluxos inteligentes com IA"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTemplates.map((template, index) => (
          <CardTemplateIA
            key={index}
            {...template}
            status={mapStatus(template.status)}
          />
        ))}
      </div>
    </div>
  )
}
