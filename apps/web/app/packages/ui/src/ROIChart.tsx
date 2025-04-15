'use client'

import { ResponsiveAreaBump } from '@nivo/bump'
import { motion } from 'framer-motion'

interface ROIChartProps {
  data: {
    id: string
    data: { x: string; y: number }[]
  }[]
  title?: string
}

export default function ROIChart({ data, title = 'Crescimento de ROI' }: ROIChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-card p-4 rounded-lg shadow border border-border"
    >
      <h3 className="text-lg font-extrabold mb-2 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h3>

      <div className="h-[300px]">
        <ResponsiveAreaBump
          data={data}
          margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
          colors={{ scheme: 'category10' }}
          animate={true}
          motionConfig="gentle"
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
        />
      </div>
    </motion.div>
  )
}
