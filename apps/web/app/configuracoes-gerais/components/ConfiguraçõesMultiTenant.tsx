'use client'

import { ChartContainer } from '../../packages/ui/src'
import SalvarAlteracoes from '../components/SalvarAlterações'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ConfiguracoesMultiTenant() {
  return (
    <ChartContainer
      title="Configurações Globais"
      subtitle="Personalize o comportamento geral da sua plataforma SaaS"
      badge="Admin"
    >
      <form className="space-y-6">
        <div>
          <Label htmlFor="nome">Nome do sistema</Label>
          <Input
            id="nome"
            placeholder="Ex: NextAgent Pro"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="dominio">Domínio personalizado</Label>
          <Input
            id="dominio"
            placeholder="Ex: app.seudominio.com"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="logo">URL da logo principal</Label>
          <Input
            id="logo"
            placeholder="https://cdn.exemplo.com/logo.png"
            className="mt-1"
          />
        </div>

        <SalvarAlteracoes />
      </form>
    </ChartContainer>
  )
}
