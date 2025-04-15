'use client'

import { Card, Metric, Text, Flex } from '@tremor/react'
import { motion } from 'framer-motion'

interface KPIChartCardProps {
  title: string
  value: string
  trend: string
  color?: string
}

export default function KPIChartCard({
  title,
  value,
  trend,
  color = 'text-primary',
}: KPIChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <Card className="p-4">
          <Flex justifyContent="between" alignItems="center">
            <Text className="text-muted-foreground">{title}</Text>
            <Text className="text-xs text-green-500">{trend}</Text>
          </Flex>
          <Metric className={`text-3xl font-bold ${color}`}>{value}</Metric>
        </Card>
      </div>
    </motion.div>
  )
}
