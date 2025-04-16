'use client'

import { FC } from 'react'
import ChartContainer from '../../packages/ui/src/ChartContainer'
import ChartLoader from '../../packages/ui/src/ChartLoader'
import StatisticCard from '../../packages/ui/src/StatisticCard'
import TabsAnimated from '../../packages/ui/src/TabsAnimated'
import LineChartPeriod from '../../charts/LineChartPeriod'
import { DataPoint } from '../../hooks/useMessagesMetrics'

import { Bot, User, MessageCircle } from 'lucide-react'

interface GraficoMensagensPorPeriodoProps {
  data: DataPoint[]
  loading: boolean
}

const GraficoMensagensPorPeriodo: FC<GraficoMensagensPorPeriodoProps> = ({
  data,
  loading,
}) => {
  // Lógica interna pode continuar com useTabControl ou period se for necessário
  // Ou simplificar se o controle vier do container
  return (
    <ChartContainer
      title="Mensagens por Período"
      subtitle="Comparativo IA x Humanas"
    >
      {loading ? (
        <ChartLoader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <StatisticCard
              label="Mensagens IA"
              value={data.reduce((acc, item) => acc + item.ia, 0)}
              variant="default"
              icon={<Bot className="w-6 h-6 text-primary" />}
            />

            <StatisticCard
              label="Mensagens Humanas"
              value={data.reduce((acc, item) => acc + item.human, 0)}
              variant="default"
              icon={<User className="w-6 h-6 text-primary" />}
            />

            <StatisticCard
              label="Total Mensagens"
              value={data.reduce(
                (acc, item) => acc + item.ia + item.human,
                0
              )}
              variant="default"
              icon={<MessageCircle className="w-6 h-6 text-primary" />}
            />
          </div>

          <div className="mt-6">
            <LineChartPeriod data={data} loading={loading} />
          </div>
        </>
      )}
    </ChartContainer>
  )
}

export default GraficoMensagensPorPeriodo
