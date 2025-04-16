'use client'

import { useState } from 'react'
import {
  SegmentedControl,
  BadgeStatus,
  ButtonExport,
} from '../../packages/ui/src'

const statusOptions = ['todos', 'processando', 'concluído', 'erro']

export default function FiltrarLogs() {
  const [periodo, setPeriodo] = useState('7d')
  const [statusSelecionado, setStatusSelecionado] = useState('todos')

  return (
    <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
      border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4
      rounded-lg shadow-md animate-gradient-x space-y-4 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Período */}
          <SegmentedControl
            options={[
              { label: '7 Dias', value: '7d' },
              { label: '15 Dias', value: '15d' },
              { label: '30 Dias', value: '30d' },
            ]}
            selected={periodo}
            onChange={setPeriodo}
          />

          {/* Status IA */}
          <SegmentedControl
            options={statusOptions.map((status) => ({
              label: status.charAt(0).toUpperCase() + status.slice(1),
              value: status,
            }))}
            selected={statusSelecionado}
            onChange={setStatusSelecionado}
          />
        </div>

        {/* Exportar */}
        <ButtonExport className="self-end sm:self-auto">
          Exportar Logs
        </ButtonExport>
      </div>
    </div>
  )
}
