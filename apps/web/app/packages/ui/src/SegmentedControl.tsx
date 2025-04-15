'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SegmentedControlProps {
  options: { label: string; value: string }[]
  selected: string
  onChange: (value: string) => void
  className?: string
}

export default function SegmentedControl({
  options,
  selected,
  onChange,
  className,
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        'inline-flex relative items-center justify-center bg-background/30 border border-border rounded-lg p-1 backdrop-blur-md backdrop-saturate-150 shadow-[0_0_12px_rgba(134,206,235,0.1)]',
        className
      )}
    >
      <div className="relative w-full flex">
        {options.map((option) => {
          const isActive = selected === option.value

          return (
            <button
              key={option.value}
              onClick={() => onChange(option.value)}
              className={cn(
                'relative z-10 px-4 py-1.5 text-sm font-semibold tracking-wide transition-all duration-300',
                isActive
                  ? 'text-white'
                  : 'text-foreground hover:text-primary/80'
              )}
            >
              {option.label}
            </button>
          )
        })}

        {/* Glow Animate Background */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            left: `${options.findIndex((o) => o.value === selected) * 100 / options.length}%`,
            width: `${100 / options.length}%`,
          }}
        />
      </div>
    </div>
  )
}
