'use client'

import { Card, Text, Metric, Flex } from '@tremor/react'
import { motion } from 'framer-motion'

interface KPIChartCardProps {
  title: string
  value: string
  trend?: string
  icon?: React.ReactNode
}

export default function KPIChartCard({
  title,
  value,
  trend,
  icon,
}: KPIChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <Card
          className="
            bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
            border border-blue-600/20
            shadow-[0_0_12px_rgba(134,206,235,0.2),0_0_24px_rgba(134,206,235,0.1)]
            backdrop-blur-md backdrop-saturate-150
            animate-[hudPulse_3s_infinite]
            p-4 transition-all
            rounded-lg
          "
        >
          <Flex justifyContent="between" alignItems="center">
            <Text
              className="
                text-sm font-extrabold tracking-wide
                bg-clip-text text-transparent
                bg-gradient-to-r from-primary to-accent
              "
            >
              {title}
            </Text>

            {trend && (
              <Text className="text-xs text-green-400 animate-pulse">
                {trend}
              </Text>
            )}
          </Flex>

          <Flex justifyContent="between" alignItems="center" className="mt-4">
            <Metric
              className="
                text-3xl font-extrabold text-white
                [text-shadow:_0_0_6px_#00f0ff,_0_0_12px_#00k9ff,_0_0_20px_gray]
              "
            >
              {value}
            </Metric>

            {icon && <div className="text-primary">{icon}</div>}
          </Flex>
        </Card>
      </div>
    </motion.div>
  )
}
