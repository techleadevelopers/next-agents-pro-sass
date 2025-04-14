'use client'

import React from 'react'
import Link from 'next/link'
import { Bot, QrCode, ScrollText, Settings, Brain, MessageSquareText, BarChart4, Users, Settings2, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

const menuWhatsApp = [
  { label: 'Status Sessão', icon: Bot, href: '#status' },
  { label: 'Gerar QR Code', icon: QrCode, href: '#qrcode' },
  { label: 'Logs Sessão', icon: ScrollText, href: '#logs' },
  { label: 'Config Avançada', icon: Settings, href: '#' }
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
        fixed right-0 top-0 h-screen w-56
        bg-gradient-to-br from-primary/30 via-background/20 to-primary/30
        border-r border-blue-400/20
        backdrop-blur-md backdrop-saturate-150
        shadow-xl z-50 
        flex flex-col items-center py-10 space-y-8
      `)}
    >
      {/* Ícone decorativo brutal HUD */}
      <div className="flex mt-10 mb-5 items-center justify-center animate-pulse-slow">
        <Settings className="w-12 h-12 text-primary drop-shadow-lg" />
      </div>

      {/* Menu WhatsApp */}
      <nav className="flex flex-col space-y-4 w-full px-4">
        {menuWhatsApp.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 text-sm font-bold
    bg-gradient-to-br 
        from-primary/20 
        via-accent/10 
        to-primary/20
    border border-blue-400/20
    backdrop-blur-md backdrop-saturate-150
    rounded-lg px-4 py-2
    text-primary hover:text-accent
    transition-all duration-300
    shadow-sm animate-fadeIn
  "
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Divider */}
      <div className="w-full border-t border-blue-400/20 my-4" />

      {/* Menu Sistema */}
      <nav className="flex flex-col space-y-4 w-full px-4">
        {menuSistema.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 text-sm font-bold
    bg-gradient-to-br 
        from-primary/50 
        via-accent/20 
        to-primary/10
    border border-blue-400/20
    backdrop-blur-md backdrop-saturate-150
    rounded-lg px-4 py-2
    text-primary hover:text-accent
    transition-all duration-300
    shadow-sm animate-fadeIn
  "
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
