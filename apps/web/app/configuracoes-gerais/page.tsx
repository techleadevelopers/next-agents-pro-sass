'use client'

import SectionTitle from '../packages/ui/src/SectionTitle'
import ConfiguracoesMultiTenant from './components/ConfiguraçõesMultiTenant'

export default function ConfiguracoesGeraisPage() {
  return (
    <div className="space-y-6">
      <SectionTitle
        title="Configurações Gerais"
        subtitle="Gerencie aspectos globais da plataforma como domínio, logo e nome do sistema"
      />

      <ConfiguracoesMultiTenant />
    </div>
  )
}
