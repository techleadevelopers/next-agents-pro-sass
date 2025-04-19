'use client'

import { Group } from '@visx/group'
import { Arc } from '@visx/shape'
import { Text } from '@visx/text'
import { animated, useSpring } from '@react-spring/web'
import { useMemo } from 'react'

interface RadialChartProps {
  value: number // de 0 a 100
  size?: number
}

export default function RadialChart({ value, size = 220 }: RadialChartProps) {
  const center = size / 2
  const thickness = 20
  const angle = useMemo(() => (value / 100) * 2 * Math.PI, [value])

  const spring = useSpring({
    to: { endAngle: angle },
    from: { endAngle: 0 },
    config: { tension: 180, friction: 22 },
  })

  const AnimatedArc = animated(Arc)

  return (
    <svg width={size} height={size}>
      <Group top={center} left={center}>
        {/* Fundo */}
        <Arc
          innerRadius={center - thickness}
          outerRadius={center}
          startAngle={0}
          endAngle={2 * Math.PI}
          fill="rgba(255,255,255,0.05)"
        />

        {/* Animação com gradiente */}
        <AnimatedArc
          innerRadius={center - thickness}
          outerRadius={center}
          startAngle={0}
          endAngle={spring.endAngle}
          fill="url(#radialGradient)"
        />

        {/* Texto */}
        <Text
          x={0}
          y={-10}
          fontSize={28}
          fill="#fff"
          textAnchor="middle"
          className="
            font-extrabold tracking-wide
            [text-shadow:_0_0_6px_#00f0ff,_0_0_12px_#00b9ff,_0_0_20px_gray]
          "
        >
         {`${value}%`}

        </Text>
        <Text
          x={0}
          y={20}
          fontSize={12}
          fill="#87ceeb"
          textAnchor="middle"
          className="uppercase tracking-wider"
        >
          Popularidade
        </Text>
      </Group>

      {/* Gradiente */}
      <defs>
        <linearGradient id="radialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4682b4" />
          <stop offset="100%" stopColor="#87ceeb" />
        </linearGradient>
      </defs>
    </svg>
  )
}
