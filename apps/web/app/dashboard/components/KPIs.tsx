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
        border border-cyan-400/20
        backdrop-blur-md backdrop-saturate-150
        p-6 rounded-lg animate-fadeIn animate-gradient-x
      ` } as HTMLMotionProps<'div'>)}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      {kpis.map((kpi, index) => (
        <motion.div key={index} variants={fadeUp}>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(134,206,235,0.25)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              className="
                rounded-lg
                bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
                border border-cyan-600/20
                shadow-[0_0_12px_rgba(134,206,235,0.2),0_0_24px_rgba(134,206,235,0.1)]
                backdrop-blur-md backdrop-saturate-150
                animate-[hudPulse_3s_infinite] transition-all
              "
            >
              <CardHeader>
                <CardTitle
                  className="
                    text-sm font-extrabold
                    bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                    tracking-wide
                  "
                >
                  {kpi.label}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex items-center justify-between px-2 py-4">
                <span
                  className="
                    text-3xl font-extrabold text-white
                    [text-shadow:_0_0_6px_#00f0ff,_0_0_12px_#00k9ff,_0_0_20px_gray]
                  "
                >
                  {kpi.value}
                </span>

                <kpi.icon className="w-6 h-6 text-primary drop-shadow-md" />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default KPIs
