// app/templates-de-fluxo-ia/components/BibliotecaDeTemplates.tsx
'use client'

import { FC } from 'react'
import { DataTableCustom, EmptyState } from '../../packages/ui/src'
import BadgeStatus from '../../packages/ui/src/BadgeStatus'

export interface TemplateIA {
    id: string
    nome: string
    categoria: string
    status: 'ativo' | 'pendente' | 'inativo' | 'erro'
  }
  

export interface BibliotecaDeTemplatesProps {
  templates: TemplateIA[]
}

const mapStatus = (status: string): 'ativo' | 'pendente' | 'inativo' | 'erro' => {
  if (status === 'ativo') return 'ativo'
  if (status === 'pendente') return 'pendente'
  if (status === 'erro') return 'erro'
  return 'inativo'
}

const BibliotecaDeTemplates: FC<BibliotecaDeTemplatesProps> = ({ templates }) => {
  if (!templates || templates.length === 0) {
    return <EmptyState title="Nenhum template encontrado" />
  }

  return (
    <div className="space-y-4">
      <h3 className="text-white font-bold text-lg tracking-wide">
        Biblioteca de Templates
      </h3>

      <DataTableCustom
        columns={['Nome', 'Categoria', 'Status']}
        data={templates.map((template) => ({
          Nome: template.nome,
          Categoria: template.categoria,
          Status: <BadgeStatus status={mapStatus(template.status)} />,
        }))}
        onRowClick={(row) => alert(`Template selecionado: ${row.Nome}`)}
      />
    </div>
  )
}

export default BibliotecaDeTemplates
