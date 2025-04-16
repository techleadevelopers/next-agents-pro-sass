'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function SalvarAlteracoes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        type="submit"
        className="
          bg-gradient-to-r from-primary to-accent text-white font-semibold
          px-6 py-2 rounded-md shadow-lg hover:scale-[1.03] transition-all
        "
      >
        Salvar Alterações
      </Button>
    </motion.div>
  )
}
