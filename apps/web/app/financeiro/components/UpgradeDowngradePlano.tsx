'use client'

import { useState } from 'react'
import { ButtonExport, ProgressCircular } from '../../packages/ui/src'

export default function UpgradeDowngradePlano() {
  const [processando, setProcessando] = useState(false)
  const [statusPlano, setStatusPlano] = useState<'nenhum' | 'sucesso' | 'erro'>('nenhum')

  const handleUpgrade = () => {
    setProcessando(true)
    setStatusPlano('nenhum')

    setTimeout(() => {
      // Simula erro/sucesso
      const sucesso = Math.random() > 0.2
      setStatusPlano(sucesso ? 'sucesso' : 'erro')
      setProcessando(false)
    }, 1800)
  }

  return (
    <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x space-y-4 transition-all duration-300">
      <h2 className="text-2xl font-extrabold tracking-wide text-white">
        Alterar Plano
      </h2>

      <p className="text-sm text-muted-foreground">
        Faça upgrade ou downgrade do seu plano atual com total controle.
      </p>

      <div className="flex items-center gap-4">
        <ButtonExport
          onClick={handleUpgrade}
          disabled={processando}
          className={`transition-all ${processando ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          {processando ? 'Processando...' : 'Confirmar Alteração'}
        </ButtonExport>

        {processando && <ProgressCircular value={75} size={28} />}
      </div>

      {statusPlano === 'sucesso' && (
        <p className="text-green-400 text-sm font-semibold animate-fade-in">
          ✅ Plano alterado com sucesso!
        </p>
      )}

      {statusPlano === 'erro' && (
        <p className="text-red-400 text-sm font-semibold animate-fade-in">
          ❌ Erro ao alterar o plano. Tente novamente.
        </p>
      )}
    </div>
  )
}
