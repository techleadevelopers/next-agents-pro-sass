'use client'

import { ChartContainer } from '../../packages/ui/src'
import AdicionarTemplate from '../components/AdicionarTemplate'
import BibliotecaDeTemplates from '../components/BibliotecaDeTemplates'
import type { TemplateIA } from '../components/BibliotecaDeTemplates' // 👈 ADICIONADO

export default function TemplatesDeFluxoIAContainer() {
  const templatesFake: TemplateIA[] = [
    {
      id: '1',
      nome: 'Template IA Vendas',
      categoria: 'Vendas',
      status: 'ativo', // 👈 agora TS aceita
    },
    {
      id: '2',
      nome: 'Template IA Suporte',
      categoria: 'Suporte',
      status: 'pendente',
    },
  ]

  return (
    <ChartContainer
      title="Templates de Fluxo IA"
      subtitle="Crie, edite e gerencie fluxos inteligentes personalizados com IA"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x">
          <AdicionarTemplate />
        </div>

        <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x">
          <BibliotecaDeTemplates templates={templatesFake} />
        </div>
      </div>
    </ChartContainer>
  )
}
