'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import KPIs from './KPIs' // já existente no projeto
import  PieChart  from './PieChart'

export default function NavbarDashboard() {
  return (
    <aside
      className={cn(`
        group fixed right-0 top-0 h-screen w-64 rounded-tl-[100px] rounded-bl-[100px]
        bg-gradient-to-br from-primary/30 via-background/20 to-primary/30
        border-l border-blue-400/20
        backdrop-blur-md backdrop-saturate-150
        shadow-xl z-50
        flex flex-col justify-between py-6 transition-all duration-600
        hover:w-[30%] w-[10%] overflow-hidden
      `)}
    >

      <div className="flex flex-col items-center gap-4 px-2">
        <span className="text-primary font-bold text-lg whitespace-nowrap hidden group-hover:block transition-opacity duration-300">
          Dashboard IA
        </span>
      </div>

      {/* Conteúdo: KPIs Financeiros IA */}
      <div className="flex flex-col justify-between flex-1 mt-8">
        <div className="space-y-4 px-2 hidden group-hover:block animate-fadeIn">
          <PieChart />
        </div>
      </div>
    </aside>
  )
}