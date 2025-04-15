'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export default function EmptyState({
  title,
  description,
  icon,
  children,
  className,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 text-accent">
        {icon || <AlertCircle className="w-12 h-12" />}
      </div>

      <h2 className="
        text-xl font-extrabold tracking-wide
        bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
      ">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-muted-foreground text-sm max-w-md">
          {description}
        </p>
      )}

      {children && <div className="mt-4">{children}</div>}
    </motion.div>
  )
}
