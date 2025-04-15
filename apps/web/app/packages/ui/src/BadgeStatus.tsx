'use client'

import { cn } from '@/lib/utils'

interface BadgeStatusProps {
  status: 'ativo' | 'inativo' | 'erro' | 'pendente'
}

const statusConfig = {
  ativo: 'bg-green-500/20 text-green-400 border-green-400/40',
  inativo: 'bg-gray-500/20 text-muted-foreground border-gray-400/20',
  erro: 'bg-red-500/20 text-red-400 border-red-400/40 animate-pulse',
  pendente: 'bg-yellow-500/20 text-yellow-400 border-yellow-400/40 animate-pulse',
}

export default function BadgeStatus({ status }: BadgeStatusProps) {
  return (
    <span
      className={cn(
        'px-2 py-0.5 rounded-full text-xs font-semibold border shadow-[0_0_6px_rgba(134,206,235,0.05)] backdrop-blur-md backdrop-saturate-150 transition-all',
        statusConfig[status]
      )}
    >
      {status.toUpperCase()}
    </span>
  )
}
