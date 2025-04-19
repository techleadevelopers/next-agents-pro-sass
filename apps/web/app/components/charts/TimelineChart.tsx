'use client'

import { ResponsiveLine } from '@nivo/line'
import { motion } from 'framer-motion'

interface TimelineChartProps {
  data: {
    id: string
    color?: string
    data: {
      x: string | number | Date
      y: number
    }[]
  }[]
  title?: string
}

export default function TimelineChart({
  data,
  title = 'Timeline de Atividades',
}: TimelineChartProps) {
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
        <div className="h-[350px]">
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 30, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: false,
              reverse: false,
            }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Período',
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Atividades',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={{ scheme: 'category10' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            useMesh={true}
            animate={true}
            motionConfig="gentle"
          />
        </div>
      </div>
    </motion.div>
  )
}
