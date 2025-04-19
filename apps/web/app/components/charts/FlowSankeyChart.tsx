'use client'

import { ResponsiveSankey } from '@nivo/sankey'
import { motion } from 'framer-motion'

interface FlowSankeyChartProps {
  data: {
    nodes: { id: string }[]
    links: { source: string; target: string; value: number }[]
  }
  title?: string
}

export default function FlowSankeyChart({
  data,
  title = 'Fluxo de Automação IA',
}: FlowSankeyChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-card rounded-lg shadow border border-border p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <div className="h-[400px]">
          <ResponsiveSankey
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            align="justify"
            colors={{ scheme: 'category10' }}
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={3}
            nodeBorderWidth={1}
            nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
            linkOpacity={0.5}
            linkBlendMode="multiply"
            enableLinkGradient
            animate
            motionConfig="gentle"
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
          />
        </div>
      </div>
    </motion.div>
  )
}
