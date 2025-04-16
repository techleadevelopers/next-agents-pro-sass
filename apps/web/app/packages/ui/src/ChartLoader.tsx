'use client'

import { motion } from 'framer-motion'

export default function ChartLoader() {
  return (
    <div className="flex justify-center items-center h-[300px] relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', repeat: Infinity }}
        
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
        </div>
      </motion.div>
    </div>
  )
}
