'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface ProgressCircularProps {
  value: number // valor de 0 a 100
  label?: string
  size?: number
}

export default function ProgressCircular({
  value,
  label = 'Progresso',
  size = 120,
}: ProgressCircularProps) {
  const strokeWidth = 10
  const center = size / 2
  const radius = center - strokeWidth
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (value / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <svg
        width={size}
        height={size}
        className="drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#1e293b"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: progress }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4682b4" />
            <stop offset="100%" stopColor="#87ceeb" />
          </linearGradient>
        </defs>
      </svg>

      <div>
        <div
          className="
            text-2xl font-extrabold text-white
            [text-shadow:_0_0_6px_#00f0ff,_0_0_12px_#00b9ff,_0_0_20px_gray]
          "
        >
          {value}%
        </div>
        <div className="text-xs text-muted-foreground tracking-wide uppercase">
          {label}
        </div>
      </div>
    </motion.div>
  )
}
