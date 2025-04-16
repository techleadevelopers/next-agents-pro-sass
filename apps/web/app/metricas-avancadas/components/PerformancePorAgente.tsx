'use client'

import { FC } from 'react'
import BarChartHorizontal from '../../charts/BarChartHorizontal'
import {
  SectionTitle,
  StatisticCard,
  ChartContainer,
  ChartLoader,
  ProgressCircular,
} from '../../packages/ui/src'
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

interface PerformancePorAgenteProps {
  data: {
    agent: string
    atendimentos: number
  }[]
  isLoading: boolean
}

const PerformancePorAgente: FC<PerformancePorAgenteProps> = ({
  data,
  isLoading,
}) => {
  const totalAttendances = data.reduce(
    (acc, item) => acc + item.atendimentos,
    0
  )

  return (
    <ChartContainer
      title="Performance por Agente IA"
      subtitle="Monitoramento de Resultados"
    >
      <SectionTitle
        title="Performance por Agente IA"
        subtitle="Monitoramento de Resultados"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <StatisticCard
          label="Agentes Ativos"
          value={data.length || 0}
          icon={<UserGroupIcon className="w-6 h-6" />}
          variant="success"
        />

        <StatisticCard
          label="Atendimentos Totais"
          value={totalAttendances}
          icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />}
          variant="warning"
        />

        <StatisticCard
          label="SLA Médio (s)"
          value={23} // pode vir por prop depois do backend
          icon={<ClockIcon className="w-6 h-6" />}
          variant="danger"
        />
      </div>

      {isLoading ? (
        <ChartLoader />
      ) : (
        <BarChartHorizontal
          data={data.map((item) => ({
            name: item.agent,
            value: item.atendimentos,
          }))}
        />
      )}
    </ChartContainer>
  )
}

export default PerformancePorAgente
