'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface AccordionCustomProps {
  items: FAQItem[]
  className?: string
}

export default function AccordionCustom({ items, className }: AccordionCustomProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={cn('w-full flex flex-col gap-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="
            border border-muted/20 rounded-lg backdrop-blur-md p-4
            bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10
            shadow-[0_0_12px_rgba(134,206,235,0.1)]
            cursor-pointer
          "
          onClick={() => toggle(index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold tracking-wide text-foreground">{item.question}</h3>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
          </div>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-2 text-sm text-muted-foreground"
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
