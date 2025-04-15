'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  badge?: 'Live' | 'Beta' | 'New' | string
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-2">
        <h2
          className="
            text-xl font-extrabold tracking-wide
            bg-gradient-to-r from-primary to-accent
            bg-clip-text text-transparent
            group-hover:drop-shadow-[0_0_8px_rgba(134,206,235,0.35)]
            transition-all duration-300
          "
        >
          {title}
        </h2>

        {badge && (
          <span
            className={cn(
              "text-xs font-semibold px-2 py-0.5 rounded-full shadow-md animate-pulse border transition-all",
              badge === 'Live' && 'bg-green-500/20 text-green-400 border-green-400/30',
              badge === 'Beta' && 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
              badge === 'New' && 'bg-primary/20 text-primary border-primary/30',
              !['Live', 'Beta', 'New'].includes(badge) && 'bg-accent/20 text-accent border-accent/30'
            )}
          >
            {badge}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-sm text-muted-foreground tracking-tight">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
