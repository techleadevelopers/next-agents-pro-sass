'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { cn } from '@/lib/utils'

interface ChartContainerProps {
  title: string
  subtitle?: string
  badge?: string
  actions?: ReactNode // Botões / Filtros / Export
  isLoading?: boolean
  children: ReactNode
  className?: string
}

export default function ChartContainer({
  title,
  subtitle,
  badge,
  actions,
  isLoading = false,
  children,
  className,
}: ChartContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center justify-between mb-4">
        <SectionTitle title={title} subtitle={subtitle} badge={badge} />
        {actions && <div className="flex gap-2">{actions}</div>}
      </div>

      <div className="relative">
        {isLoading ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-opacity-30" />
          </div>
        ) : (
          children
        )}
      </div>
    </motion.div>
  )
}
