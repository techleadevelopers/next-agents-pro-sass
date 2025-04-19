'use client'

import React from 'react'
import { Group } from '@visx/group'
import { scaleLinear, scaleTime } from '@visx/scale'
import { LinePath, Bar } from '@visx/shape'
import { AxisBottom, AxisLeft } from '@visx/axis'
import { ParentSize } from '@visx/responsive'
import { curveMonotoneX } from '@visx/curve'
import { animated, useSpring } from '@react-spring/web'

interface DataPoint {
  date: Date
  sent: number
  received: number
}

interface LineChartCustomProps {
  data: DataPoint[]
  title?: string
}

export default function LineChartCustom({ data, title = 'Mensagens IA' }: LineChartCustomProps) {
  return (
    <div className="bg-card p-4 rounded-lg shadow border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <ParentSize className="h-[300px]">
        {({ width, height }) => {
          const margin = { top: 10, right: 20, bottom: 30, left: 40 }
          const xMax = width - margin.left - margin.right
          const yMax = height - margin.top - margin.bottom

          const xScale = scaleTime({
            range: [0, xMax],
            domain: [Math.min(...data.map((d) => d.date.getTime())), Math.max(...data.map((d) => d.date.getTime()))],
          })

          const yScale = scaleLinear<number>({
            range: [yMax, 0],
            domain: [0, Math.max(...data.map((d) => Math.max(d.sent, d.received)))],
          })

          return (
            <svg width={width} height={height}>
              <Group left={margin.left} top={margin.top}>
                <LinePath
                  data={data}
                  x={(d) => xScale(d.date) ?? 0}
                  y={(d) => yScale(d.sent) ?? 0}
                  stroke="#4f46e5"
                  strokeWidth={2}
                  curve={curveMonotoneX}
                />
                <LinePath
                  data={data}
                  x={(d) => xScale(d.date) ?? 0}
                  y={(d) => yScale(d.received) ?? 0}
                  stroke="#10b981"
                  strokeWidth={2}
                  curve={curveMonotoneX}
                />
                <AxisBottom top={yMax} scale={xScale} />
                <AxisLeft scale={yScale} />
              </Group>
            </svg>
          )
        }}
      </ParentSize>
    </div>
  )
}
