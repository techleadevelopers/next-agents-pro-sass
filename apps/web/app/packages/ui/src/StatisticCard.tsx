'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatisticCardProps {
  icon: React.ReactNode
  value: string | number
  label: string
  description?: string
  className?: string
  variant?: 'default' | 'success' | 'danger' | 'warning' // Suporte para temas visuais
}

const variantStyles = {
  default: 'from-primary/20 via-accent/10 to-primary/20 border-blue-600/20',
  success: 'from-green-500/20 via-green-400/10 to-green-500/20 border-green-600/20',
  danger: 'from-red-500/20 via-red-400/10 to-red-500/20 border-red-600/20',
  warning: 'from-yellow-500/20 via-yellow-400/10 to-yellow-500/20 border-yellow-600/20',
}

export default function StatisticCard({
  icon,
  value,
  label,
  description,
  className,
  variant = 'default', // default para não quebrar legado
}: StatisticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div
        className={cn(`
          p-4 rounded-lg
          bg-gradient-to-br ${variantStyles[variant]}
          shadow-[0_0_12px_rgba(134,206,235,0.2),0_0_24px_rgba(134,206,235,0.1)]
          backdrop-blur-md backdrop-saturate-150
          flex items-center justify-between
          transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(134,206,235,0.25)]
        `, className)}
      >
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground tracking-wide">
            {label}
          </span>

          <span
            className="
              text-3xl font-extrabold text-white
              [text-shadow:_0_0_6px_#00f0ff,_0_0_12px_#00k9ff,_0_0_20px_gray]
            "
          >
            {value}
          </span>

          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="text-primary drop-shadow-lg">
          {icon}
        </div>
      </div>
    </motion.div>
  )
}
