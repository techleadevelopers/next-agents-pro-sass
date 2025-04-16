'use client'

import LogsDeConversas from '../components/LogsDeConversas'
import ChartContainer from '../../packages/ui/src/ChartContainer'
import ChartLoader from '../../packages/ui/src/ChartLoader'
import { useState, useEffect } from 'react'

export default function HistoricoDeConversasContainer() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <ChartContainer
      title="Logs de Conversas IA"
      subtitle="Histórico das interações com assistentes automatizados"
      badge="IA Logs"
      isLoading={loading}
    >
      {!loading && <LogsDeConversas />}
    </ChartContainer>
  )
}
