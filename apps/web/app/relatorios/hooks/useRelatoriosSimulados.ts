import { useEffect, useState } from 'react'

type StatusRelatorio = 'Finalizado' | 'Pendente' | 'Erro'

interface RelatorioSimulado {
  id: string
  nome: string
  tipo: string
  data: string
  status: StatusRelatorio
}

export const useRelatoriosSimulados = (period: '7d' | '30d' | '90d') => {
  const [data, setData] = useState<RelatorioSimulado[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const dias = period === '90d' ? 90 : period === '30d' ? 30 : 7

    const tipos = ['Atendimento', 'Conversas', 'Financeiro', 'Templates']
    const status: StatusRelatorio[] = ['Finalizado', 'Pendente', 'Erro']

    const simulados: RelatorioSimulado[] = Array.from({ length: 12 }).map((_, i) => {
      const randomDaysAgo = Math.floor(Math.random() * dias)
      const date = new Date()
      date.setDate(date.getDate() - randomDaysAgo)

      return {
        id: `rel-${i + 1}`,
        nome: `Relatório ${i + 1}`,
        tipo: tipos[Math.floor(Math.random() * tipos.length)],
        status: status[Math.floor(Math.random() * status.length)],
        data: date.toLocaleDateString('pt-BR'),
      }
    })

    setTimeout(() => {
      setData(simulados)
      setLoading(false)
    }, 500)
  }, [period])

  return { data, loading }
}
