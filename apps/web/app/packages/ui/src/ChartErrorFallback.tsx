'use client'

import { AlertCircle } from 'lucide-react'

export default function ChartErrorFallback({ message = "Erro ao carregar o gráfico" }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-10 text-center">
      <AlertCircle className="w-10 h-10 text-red-500 animate-pulse" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
}
