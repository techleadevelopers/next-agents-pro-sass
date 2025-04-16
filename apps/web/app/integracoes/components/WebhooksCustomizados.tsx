'use client'

import { BadgeStatus, ChartContainer, EmptyState } from '../../packages/ui/src'

const webhooks = [
  { nome: 'Webhook Vendas', status: 'ativo' },
  { nome: 'Webhook Marketing', status: 'pendente' },
  { nome: 'Webhook Financeiro', status: 'erro' },
]

export default function WebhooksCustomizados() {
  return (
    <ChartContainer
      title="Webhooks Customizados"
      subtitle="Monitoramento e status das conexões Webhook"
    >
      <div className="space-y-3 mt-4">
        {webhooks.map((w, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 bg-gradient-to-br from-primary/10 to-accent/10
              border border-blue-400/20 rounded-md shadow-sm backdrop-blur-md"
          >
            <span className="text-white font-medium tracking-wide">{w.nome}</span>
            <BadgeStatus status={w.status as any} />
          </div>
        ))}
      </div>
    </ChartContainer>
  )
}
