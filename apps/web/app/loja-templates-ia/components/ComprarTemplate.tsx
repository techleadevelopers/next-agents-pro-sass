'use client'

import { useState } from 'react'
import {
  ButtonExport,
  ProgressCircular,
} from '../../packages/ui/src'

export default function ComprarTemplate() {
  const [comprando, setComprando] = useState(false)
  const [confirmado, setConfirmado] = useState(false)

  const handleComprar = () => {
    setComprando(true)
    setConfirmado(false)

    // Simula processo de compra
    setTimeout(() => {
      setComprando(false)
      setConfirmado(true)
    }, 1800)
  }

  return (
    <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-6 rounded-lg shadow-md animate-gradient-x space-y-5 transition-all duration-300">
      <h3 className="text-2xl font-extrabold text-white tracking-wide">
        Comprar Template IA
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Adquira este template inteligente para fluxos automatizados com IA. Ideal para vendas, suporte e jornadas customizadas.
      </p>

      <div className="flex items-center gap-4">
        <ButtonExport
          onClick={handleComprar}
          disabled={comprando}
          className={`transition-all ${
            comprando ? 'opacity-60 cursor-not-allowed' : ''
          }`}
          aria-disabled={comprando}
          aria-busy={comprando}
        >
          {comprando ? 'Processando...' : 'Comprar Template'}
        </ButtonExport>

        {comprando && (
  <ProgressCircular
    value={100}
    size={24}
  />
)}

        
        {confirmado && !comprando && (
          <span className="text-green-400 text-sm font-semibold animate-fade-in">
            ✅ Compra confirmada com sucesso!
          </span>
        )}
      </div>
    </div>
  )
}
