import { useEffect, useState } from 'react'

export type DataPoint = {
  date: string
  ia: number
  human: number
}

// Hook 1 - Gráfico Mensagens Por Período
export const useMessagesMetrics = (period: '7d' | '30d' | '90d') => {
  const [data, setData] = useState<DataPoint[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const simulatedData: DataPoint[] = Array.from({ length: period === '90d' ? 90 : period === '30d' ? 30 : 7 }).map(
      (_, index) => ({
        date: new Date(Date.now() - index * 86400000).toISOString().split('T')[0],
        ia: Math.floor(Math.random() * 100),
        human: Math.floor(Math.random() * 50),
      })
    ).reverse()

    setTimeout(() => {
      setData(simulatedData)
      setLoading(false)
    }, 500)
  }, [period])

  const iaMessages = data.reduce((acc, item) => acc + item.ia, 0)
  const humanMessages = data.reduce((acc, item) => acc + item.human, 0)
  const totalMessages = iaMessages + humanMessages

  return {
    data,
    loading,
    iaMessages,
    humanMessages,
    totalMessages,
    chartData: data,
  }
}

// Hook 2 - Performance Por Agente
interface AgentPerformanceData {
  activeAgents: number
  totalAttendances: number
  slaAverage: number
  chartData: {
    agent: string
    atendimentos: number
  }[]
  agents: {
    id: number
    name: string
    metaAchieved: number
  }[]
}

export const useAgentsPerformance = (period: '7d' | '30d' | '90d') => {
  const [data, setData] = useState<AgentPerformanceData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const simulatedData: AgentPerformanceData = {
      activeAgents: 5,
      totalAttendances: 140,
      slaAverage: 23,
      chartData: [
        { agent: 'João', atendimentos: 30 },
        { agent: 'Maria', atendimentos: 50 },
        { agent: 'Lucas', atendimentos: 40 },
      ],
      agents: [
        { id: 1, name: 'João', metaAchieved: 80 },
        { id: 2, name: 'Maria', metaAchieved: 95 },
        { id: 3, name: 'Lucas', metaAchieved: 70 },
      ],
    }

    setTimeout(() => {
      setData(simulatedData)
      setIsLoading(false)
    }, 500)
  }, [period])

  return { data: data as AgentPerformanceData, isLoading }
}
