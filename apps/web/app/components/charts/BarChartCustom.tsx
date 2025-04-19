'use client'

import React from 'react'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { Bar } from '@visx/shape'
import { ParentSize } from '@visx/responsive'
import { animated, useSpring } from '@react-spring/web'

type Data = { label: string; value: number }

const AnimatedBar = animated(Bar)

interface BarChartCustomProps {
  data: Data[]
  title?: string
  color?: string
}

export default function BarChartCustom({
  data,
  title = 'Performance por Agente',
  color = '#6366f1',
}: BarChartCustomProps) {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <ParentSize className="h-[280px]">
        {({ width, height }) => {
          const xMax = width
          const yMax = height - 40

          const xScale = scaleBand<string>({
            range: [0, xMax],
            domain: data.map((d) => d.label),
            padding: 0.4,
          })

          const yScale = scaleLinear<number>({
            range: [yMax, 0],
            domain: [0, Math.max(...data.map((d) => d.value))],
          })

          return (
            <svg width={width} height={height}>
              <Group top={10}>
                {data.map((d, i) => {
                  const barWidth = xScale.bandwidth()
                  const barHeight = yMax - yScale(d.value)
                  const barX = xScale(d.label) ?? 0
                  const barY = yScale(d.value)

                  const springProps = useSpring({
                    from: { height: 0 },
                    to: { height: barHeight },
                    config: { tension: 180, friction: 24, clamp: true },
                    delay: i * 100,
                  })

                  return (
                    <AnimatedBar
                      key={`bar-${i}`}
                      x={barX}
                      y={barY}
                      width={barWidth}
                      height={springProps.height}
                      fill={color}
                      rx={4}
                    />
                  )
                })}
              </Group>
            </svg>
          )
        }}
      </ParentSize>
    </div>
  )
}
