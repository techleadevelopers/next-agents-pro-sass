'use client'

import {
  SectionTitle,
  StatisticCard,
  ChartContainer,
  ChartLoader,
  TabsAnimated,
} from '../../packages/ui/src'

import { AreaClosed, LinePath } from '@visx/shape'
import { curveMonotoneX } from 'd3-shape'
import { scaleTime, scaleLinear } from '@visx/scale'
import { Group } from '@visx/group'
import { AxisBottom, AxisLeft } from '@visx/axis'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const pagamentos = [
  { date: new Date(2024, 0, 1), valor: 2500 },
  { date: new Date(2024, 1, 1), valor: 2800 },
  { date: new Date(2024, 2, 1), valor: 3100 },
  { date: new Date(2024, 3, 1), valor: 2950 },
  { date: new Date(2024, 4, 1), valor: 3200 },
]

const width = 640
const height = 240
const margin = { top: 10, right: 20, bottom: 30, left: 40 }

export default function HistoricoDePagamentos() {
  const [loading, setLoading] = useState(false)

  const xScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, width - margin.right],
        domain: [
          Math.min(...pagamentos.map((p) => p.date.getTime())),
          Math.max(...pagamentos.map((p) => p.date.getTime())),
        ],
      }),
    []
  )

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [height - margin.bottom, margin.top],
        domain: [0, Math.max(...pagamentos.map((p) => p.valor)) + 500],
      }),
    []
  )

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Histórico de Pagamentos"
        subtitle="Acompanhe os pagamentos realizados mês a mês"
      />

      <TabsAnimated
        tabs={[
          { label: 'Mensal', value: 'mensal' },
          { label: 'Anual', value: 'anual' },
        ]}
        defaultTab="mensal"
        onTabChange={(tab) => {
          setLoading(true)
          setTimeout(() => setLoading(false), 600)
        }}
      />

      <ChartContainer title="Fluxo Financeiro (R$)">
        {loading ? (
          <ChartLoader />
        ) : (
          <svg width={width} height={height}>
            <Group>
              <AxisLeft scale={yScale} top={0} left={margin.left} stroke="#87ceeb" />
              <AxisBottom scale={xScale} top={height - margin.bottom} stroke="#87ceeb" />

              <AreaClosed
                data={pagamentos}
                x={(d) => xScale(d.date)}
                y={(d) => yScale(d.valor)}
                yScale={yScale}
                stroke="none"
                fill="url(#areaGradient)"
                curve={curveMonotoneX}
              />

              <LinePath
                data={pagamentos}
                x={(d) => xScale(d.date)}
                y={(d) => yScale(d.valor)}
                stroke="#4682b4"
                strokeWidth={2}
                curve={curveMonotoneX}
              />
            </Group>

            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#87ceeb" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#87ceeb" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        )}
      </ChartContainer>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatisticCard
          label="Último Pagamento"
          value="R$ 3.200"
          description="05/04/2024"
          icon={<span className="text-green-400 font-bold text-lg">✔</span>}
          variant="success"
        />
        <StatisticCard
          label="Total 3 Meses"
          value="R$ 9.250"
          description="De fev a abr/2024"
          icon={<span className="text-accent font-bold text-lg">💰</span>}
        />
        <StatisticCard
          label="Status do Plano"
          value="Ativo"
          description="Renovação automática"
          icon={<span className="text-primary font-bold text-lg">🔁</span>}
        />
      </div>
    </div>
  )
}
