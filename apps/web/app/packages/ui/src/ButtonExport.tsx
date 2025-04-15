'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonExportProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

export default function ButtonExport({
  label = 'Exportar Dados',
  className,
  ...props
}: ButtonExportProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(134,206,235,0.25)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}

    >
      <Download className="w-4 h-4" />
      {label}
    </motion.button>
  )
}
