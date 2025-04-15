"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/dashboard/ui/card'
import { Badge } from '@/components/dashboard/ui/badge'
import { motion } from 'framer-motion'
import { Banknote, Users, LineChart, DollarSign, CheckCircle, Coins, CreditCard, TrendingUp } from 'lucide-react'
import CountUp from 'react-countup'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const metrics = [
  { label: 'Setup Inicial', value: 47900, prefix: 'R$ ', icon: DollarSign, growth: 12 },
  { label: 'Parcela Mensal', value: 18900, prefix: 'R$ ', icon: Banknote, growth: 5 },
  { label: 'Resultado Total', value: 66800, prefix: 'R$ ', icon: LineChart, growth: 10 },
  { label: 'Total de Clientes', value: 29, prefix: '', icon: Users, growth: 8 },
  { label: 'Clientes Ativos', value: 27, prefix: '', icon: CheckCircle, growth: -1 },
  { label: 'ARR Anual', value: 22800, prefix: 'R$ ', icon: Coins, growth: 10 },
  { label: 'Ticket Médio', value: 2303, prefix: 'R$ ', icon: CreditCard, growth: 10 },
  { label: 'Receita Prevista', value: 19800, prefix: 'R$ ', icon: TrendingUp, growth: 10 },
]

export default function DashboardResultadosFinanceiros() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
      {metrics.map((item, index) => (
        <Card
          key={index}
          className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-blue-400/20 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md animate-gradient-x"
        >
          <CardHeader>
            <CardTitle className="text-sm font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {item.label}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-3xl font-extrabold text-white">
                <item.icon className="w-6 h-6 text-primary" />
                <CountUp start={0} end={item.value} duration={2.2} separator="." prefix={item.prefix} />
              </div>
              {item.growth !== undefined && (
                <Badge
                  variant="outline"
                  className={
                    item.growth >= 0
                      ? 'border-green-500/5 text-green-300 text-2xl [text-shadow:_0_0_0_blue,_0_0_2px_green,_0px_0px_8px_white]'
                      : 'border-red-500/5 text-red-400 text-xl [text-shadow:_0_0_2px_white,_0_0_2px_white,_0_0_2px_black]'
                  }
                >
                  {item.growth >= 0 ? `+${item.growth}%` : `${item.growth}%`}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}