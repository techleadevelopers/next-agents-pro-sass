'use client'

import { Card, Flex, Text, Metric, ProgressBar, Badge } from '@tremor/react'
import { cn } from '@/lib/utils'
import { useMessagesMetrics } from '../../hooks'

interface KPIItem {
  label: string
  value: number
  description: string
  progress: number
  status?: 'success' | 'warning' | 'error'
}

export default function TabelaKPIConversao() {
  const { iaMessages, humanMessages, totalMessages } = useMessagesMetrics('30d')

  const kpis: KPIItem[] = [
    {
      label: 'Total Mensagens',
      value: totalMessages,
      description: 'Soma IA + Human',
      progress: 100,
      status: 'success',
    },
    {
      label: 'Mensagens IA',
      value: iaMessages,
      description: 'Mensagens enviadas pela IA',
      progress: (iaMessages / totalMessages) * 100,
      status: 'success',
    },
    {
      label: 'Mensagens Humanas',
      value: humanMessages,
      description: 'Mensagens manuais',
      progress: (humanMessages / totalMessages) * 100,
      status: 'warning',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {kpis.map((item, index) => (
        <Card
          key={index}
          className={cn(
            'border border-blue-400/20 backdrop-blur-md',
            'bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10'
          )}
        >
          <Flex className="items-start justify-between">
            <div>
              <Text className="text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </Text>
              <Metric className="text-xl font-extrabold text-white">
                {item.value}
              </Metric>
            </div>
            <Badge color={item.status}>{item.description}</Badge>
          </Flex>
          <ProgressBar value={item.progress} color="blue" className="mt-2" />
        </Card>
      ))}
    </div>
  )
}
