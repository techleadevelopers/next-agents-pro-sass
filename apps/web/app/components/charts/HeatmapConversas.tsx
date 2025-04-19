'use client'

import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'

interface RawHeatmapData {
  day: string
  [key: string]: string | number
}

interface HeatmapConversasProps {
  data: RawHeatmapData[]
  title?: string
}

export default function HeatmapConversas({
  data,
  title = 'Atividade IA por Horário',
}: HeatmapConversasProps) {
  const transformedData = data.map((item) => ({
    id: item.day,
    data: Object.entries(item)
      .filter(([key]) => key !== 'day')
      .map(([key, value]) => ({
        x: key,
        y: Number(value), // Aqui garante que o tipo é number
      })),
  }))

  return (
    <div className="bg-card p-4 rounded-lg shadow border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <div className="h-[350px]">
        <ResponsiveHeatMapCanvas
          data={transformedData}
          margin={{ top: 20, right: 30, bottom: 30, left: 30 }}
          colors={{ type: 'quantize', scheme: 'blues' }}
          axisTop={null}
          axisRight={null}
          axisLeft={null}
          animate={true}
          motionConfig="gentle"
        />
      </div>
    </div>
  )
}
