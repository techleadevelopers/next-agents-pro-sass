'use client'

import { PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardVideoProps {
  title: string
  thumbnail: string
  onClick: () => void
  className?: string
}

export default function CardVideo({ title, thumbnail, onClick, className }: CardVideoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative overflow-hidden rounded-lg cursor-pointer group shadow-lg',
        'bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20',
        'backdrop-blur-md backdrop-saturate-150 border border-blue-400/20',
        className
      )}
      onClick={onClick}
    >
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition" />

      <div className="absolute inset-0 flex items-center justify-center">
        <PlayCircle className="w-16 h-16 text-accent drop-shadow-xl group-hover:scale-110 transition" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <h4 className="text-sm font-extrabold text-white truncate">{title}</h4>
      </div>
    </motion.div>
  )
}
