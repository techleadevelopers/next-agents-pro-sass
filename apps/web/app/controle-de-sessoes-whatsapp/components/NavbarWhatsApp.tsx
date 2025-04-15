'use client'

import React from 'react'
import Link from 'next/link'
import {
  Bot,
  QrCode,
  ScrollText,
  Brain,
  MessageSquareText,
  BarChart4,
  Users,
  Settings2,
  FileText
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuWhatsApp = [
  { label: 'Status Sessão', icon: Bot, href: '#status' },
  { label: 'Gerar QR Code', icon: QrCode, href: '#qrcode' },
  { label: 'Logs Sessão', icon: ScrollText, href: '#logs' },
  { label: 'Config Avançada', icon: Settings2, href: '#' }
]

const menuSistema = [
  { label: 'Modelos AI', icon: Brain, href: '/templates-de-fluxo-ia' },
  { label: 'Histórico', icon: MessageSquareText, href: '/historico-de-conversas' },
  { label: 'Métricas ', icon: BarChart4, href: '/metricas-avancadas' },
  { label: 'Permissões', icon: Users, href: '/permissoes-e-usuarios' },
  { label: 'Configurações', icon: Settings2, href: '/configuracoes-gerais' },
  { label: 'Relatórios', icon: FileText, href: '/relatorios' }
]

export default function NavbarWhatsApp() {
  return (
    <aside
      className={cn(`
        group fixed left-0 top-0 h-screen w-64 rounded-tr-[100px] rounded-br-[100px]
        bg-gradient-to-br from-primary/30 via-background/20 to-primary/30
        border-r border-blue-400/20
        backdrop-blur-md backdrop-saturate-150
        shadow-xl z-50
        flex flex-col justify-between py-6 transition-all duration-500
        hover:w-64 w-[4%] overflow-hidden
      `)}
    >
      {/* Header / Logo */}
      <div className="flex flex-col items-center gap-4 px-2">
        <span className="text-primary font-bold text-lg 
         
         whitespace-nowrap hidden group-hover:block transition-opacity duration-300">
          NexAgent-Pro
        </span>
      </div>

      {/* Menus */}
      <div className="flex flex-col justify-between flex-1 mt-[90px]">
        {/* Menu WhatsApp */}
        <nav className="space-y-2 px-2">
          {menuWhatsApp.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                flex items-center gap-3 text-sm font-medium
                bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
                border border-blue-400/20 backdrop-blur-md backdrop-saturate-150
                rounded-lg px-4 py-2 text-primary hover:text-accent
                transition-all duration-300 shadow-sm animate-fadeIn
              "
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden group-hover:inline-block transition-all duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-blue-400/20 my-4 mx-2" />

        {/* Menu Sistema */}
        <nav className="space-y-2 px-2">
          {menuSistema.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                flex items-center gap-3 text-sm font-medium
                bg-gradient-to-br from-primary/50 via-accent/20 to-primary/10
                border border-blue-400/20 backdrop-blur-md backdrop-saturate-150
                rounded-lg px-4 py-2 text-primary hover:text-accent
                transition-all duration-300 shadow-sm animate-fadeIn
              "
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden group-hover:inline-block transition-all duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Footer / Usuário */}
        <div className="flex items-center gap-2 px-2 py-6 mt-auto">
          <div className="w-8 h-8 rounded-full bg-blue-400/30" />
          <div className="hidden group-hover:flex flex-col">
            <span className="text-sm font-bold text-primary">Paulo</span>
            <span className="text-xs text-blue-400">admin@nextagent</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
