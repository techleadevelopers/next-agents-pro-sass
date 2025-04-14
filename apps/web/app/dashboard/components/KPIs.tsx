'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card'
import { motion } from 'framer-motion'
import { HTMLMotionProps } from 'framer-motion'
import { Users, MessageCircle, CheckCircle, TrendingUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const KPIs = () => {
  const kpis = [
    { label: 'Leads Capturados', value: '354', icon: Users },
    { label: 'Conversas IA Processadas', value: '1.245', icon: MessageCircle },
    { label: 'Tickets Resolvidos', value: '137', icon: CheckCircle },
    { label: 'Taxa de Sucesso', value: '92%', icon: TrendingUp },
  ]

  return (
    <motion.div
      {...({ className: `
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 
        bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
        border border-blue-400/20
        backdrop-blur-md backdrop-saturate-150
        p-6 rounded-lg animate-fadeIn
      ` } as HTMLMotionProps<'div'>)}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      {kpis.map((kpi, index) => (
        <motion.div key={index} variants={fadeUp}>
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 30px rgba(134, 206, 235, 0.2)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              className="
                rounded-lg 
                bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
                border border-blue-400/20
                shadow-lg 
                backdrop-blur-md 
                backdrop-saturate-150
                transition
              "
            >
              <CardHeader>
                <CardTitle
                  className="
                    text-sm font-extrabold
                    bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                  "
                >
                  {kpi.label}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex items-center justify-between">
  <span
    className="
      text-3xl font-extrabold text-white 
      text-shadow:_0_0_146px_rgba(3,206,23,1.7)
    "
  >
    {kpi.value}
  </span>

  <kpi.icon className="w-5 h-5 text-primary" />
</CardContent>

            </Card>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default KPIs
