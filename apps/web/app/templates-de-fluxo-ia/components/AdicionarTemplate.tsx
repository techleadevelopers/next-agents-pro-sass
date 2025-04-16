'use client'

import { useState } from 'react'
import {
  ProgressCircular,
  BadgeStatus,
  ButtonExport,
} from '../../packages/ui/src'

export default function AdicionarTemplate() {
  const [enviando, setEnviando] = useState(false)
  const [status, setStatus] = useState<'pendente' | 'ativo' | 'erro' | null>(null)

  const handleAdicionar = () => {
    setEnviando(true)
    setStatus('pendente')

    // Simula envio
    setTimeout(() => {
      const sucesso = Math.random() > 0.3
      setEnviando(false)
      setStatus(sucesso ? 'ativo' : 'erro')
    }, 2000)
  }

  return (
    <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x space-y-6">
      <div>
        <h2 className="text-xl font-extrabold text-white">
          Adicionar Novo Template IA
        </h2>
        <p className="text-sm text-muted-foreground">
          Crie um novo template de fluxo para automações da IA personalizada.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <ButtonExport
          onClick={handleAdicionar}
          disabled={enviando}
          className="transition-all"
        >
          {enviando ? 'Enviando...' : 'Adicionar Template'}
        </ButtonExport>

        {enviando && <ProgressCircular value={70} size={60} />}

        {status && !enviando && (
          <div className="flex items-center gap-2">
            <BadgeStatus status={status} />
            <span className="text-sm text-muted-foreground">
              {status === 'ativo'
                ? 'Template criado com sucesso!'
                : 'Falha ao criar template'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
