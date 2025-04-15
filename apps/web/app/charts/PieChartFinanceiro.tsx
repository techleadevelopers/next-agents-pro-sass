'use client'

import { ResponsivePie } from '@nivo/pie'
import { motion } from 'framer-motion'

interface PieChartFinanceiroProps {
  data: {
    id: string
    label: string
    value: number
    color?: string
  }[]
  title?: string
}

export default function PieChartFinanceiro({
  data,
  title = 'Distribuição Financeira SaaS',
}: PieChartFinanceiroProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-card rounded-lg shadow border border-border p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        <div className="relative h-[350px]">
          <ResponsivePie
            data={data}
            margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={5}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
            arcLinkLabelsSkipAngle={12}
            arcLinkLabelsTextColor="#a1a1aa"
            arcLinkLabelsThickness={1.5}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 3]],
            }}
            animate
            motionConfig="gentle"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-3xl font-extrabold text-primary">
                R$ {total.toLocaleString()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
