import { useEffect, useState } from 'react'

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

export const useAgentsPerformance = (period: '7d' | '30d' | '90d' = '7d') => {
  const [data, setData] = useState<AgentPerformanceData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    // Simulando dados dinâmicos
    const simulatedData: AgentPerformanceData = {
      activeAgents: 5,
      totalAttendances: 140,
      slaAverage: 23,
      chartData: [
        { agent: 'João', atendimentos: 30 },
        { agent: 'Maria', atendimentos: 50 },
        { agent: 'Lucas', atendimentos: 40 },
        { agent: 'Bruna', atendimentos: 20 },
      ],
      agents: [
        { id: 1, name: 'João', metaAchieved: 80 },
        { id: 2, name: 'Maria', metaAchieved: 95 },
        { id: 3, name: 'Lucas', metaAchieved: 70 },
        { id: 4, name: 'Bruna', metaAchieved: 85 },
      ],
    }

    const timer = setTimeout(() => {
      setData(simulatedData)
      setIsLoading(false)
    }, 500) // Simula carregamento com delay

    return () => clearTimeout(timer)
  }, [period])

  return {
    data,
    isLoading,
  }
}
