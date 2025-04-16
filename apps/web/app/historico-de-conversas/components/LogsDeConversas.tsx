'use client'

import {
  ChartContainer,
  ChartLoader,
  EmptyState,
} from '../../packages/ui/src'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface LogItem {
  data: string
  usuario: string
  status: 'concluído' | 'erro' | 'processando'
  mensagem: string
}

const MOCK_LOGS: LogItem[] = [
  {
    data: '2025-04-10 14:22',
    usuario: 'Bot de Suporte',
    status: 'concluído',
    mensagem: 'Conversa finalizada com resposta IA.',
  },
  {
    data: '2025-04-09 18:44',
    usuario: 'Usuário Anônimo',
    status: 'erro',
    mensagem: 'Erro ao carregar contexto personalizado.',
  },
  {
    data: '2025-04-08 11:03',
    usuario: 'Bot de Vendas',
    status: 'processando',
    mensagem: 'Gerando sequência automatizada de resposta...',
  },
]

export default function LogsDeConversas() {
  const [loading, setLoading] = useState(true)
  const [logs, setLogs] = useState<LogItem[]>([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogs(MOCK_LOGS)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <ChartContainer
      title="Logs de Conversas IA"
      subtitle="Visualize as interações recentes com assistentes inteligentes"
    >
      {loading ? (
        <ChartLoader />
      ) : logs.length === 0 ? (
        <EmptyState
  title="Nenhum log encontrado"
  description="Ajuste os filtros ou verifique outra data."
>
  <button className="mt-2 px-3 py-1 bg-primary text-white text-xs rounded">
    Tentar novamente
  </button>
</EmptyState>
      ) : (
        <ul className="space-y-4 mt-4">
          {logs.map((log, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
             
            >
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                <span>{log.data}</span>
                <span className="uppercase">{log.usuario}</span>
              </div>

              <div className="text-sm text-white font-semibold tracking-wide">
                {log.mensagem}
              </div>

              <div className="mt-2">
                <span
                  className={`
                    text-xs font-semibold uppercase tracking-wide
                    ${
                      log.status === 'concluído'
                        ? 'text-green-400'
                        : log.status === 'erro'
                        ? 'text-red-400'
                        : 'text-yellow-400 animate-pulse'
                    }
                  `}
                >
                  {log.status}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      )}
    </ChartContainer>
  )
}
