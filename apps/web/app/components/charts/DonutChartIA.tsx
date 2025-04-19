'use client'

import { ResponsivePie } from '@nivo/pie'
import { motion } from 'framer-motion'

interface DonutChartIAProps {
  data: {
    id: string
    label: string
    value: number
    color?: string
  }[]
  title?: string
}

export default function DonutChartIA({
  data,
  title = 'Status dos Agentes IA',
}: DonutChartIAProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className="bg-card p-4 rounded-lg shadow-md border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <div className="relative h-[300px]">
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
          innerRadius={0.6}
          padAngle={1}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: 'category10' }}
          borderWidth={2}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#888"
          arcLinkLabelsThickness={1.5}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
          }}
          animate={true}
          motionConfig="wobbly"
        />

        {/* Label central animada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-3xl font-bold text-primary">{total}</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
