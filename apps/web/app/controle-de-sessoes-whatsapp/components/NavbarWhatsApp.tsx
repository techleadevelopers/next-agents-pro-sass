'use client'

import React, { useState } from 'react'
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
  FileText,
  ChevronRight,
  ChevronDown,
  LayoutDashboard
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Estrutura agrupada por categoria com subitens
const menuStructure = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    label: 'Agentes IA',
    icon: Bot,
    children: [
      { label: 'Listar Agentes', href: '/gestao-de-agentes' },
      { label: 'Desempenho por Agente', href: '/metricas-avancadas' },
    ]
  },
  {
    label: 'Sessões WhatsApp',
    icon: QrCode,
    children: [
      { label: 'Status Sessão', href: '/controle-de-sessoes-whatsapp#status' },
      { label: 'Gerar QR Code', href: '/controle-de-sessoes-whatsapp#qrcode' },
      { label: 'Logs', href: '/controle-de-sessoes-whatsapp#logs' }
    ]
  },
  {
    label: 'Templates IA',
    icon: Brain,
    children: [
      { label: 'Loja de Templates', href: '/loja-templates-ia' },
      { label: 'Biblioteca Pessoal', href: '/templates-de-fluxo-ia' }
    ]
  },
  {
    label: 'Conversas IA',
    icon: MessageSquareText,
    children: [
      { label: 'Histórico', href: '/historico-de-conversas' },
      { label: 'Filtros e Logs', href: '/historico-de-conversas#filtros' }
    ]
  },
  {
    label: 'Análises & KPIs',
    icon: BarChart4,
    children: [
      { label: 'KPIs de SaaS', href: '/kpis-saas' },
      { label: 'Histórico de Pagamentos', href: '/financeiro' },
      { label: 'ROI Premium', href: '/servicos-premium/demonstracaoroi' }
    ]
  },
  {
    label: 'Administração',
    icon: Users,
    children: [
      { label: 'Usuários e Permissões', href: '/permissoes-e-usuarios' },
      { label: 'Configurações Avançadas IA', href: '/configuracoes-avancadas-ia' },
      { label: 'Configurações Gerais', href: '/configuracoes-gerais' }
    ]
  },
  {
    label: 'Relatórios',
    icon: FileText,
    href: '/relatorios'
  }
]

export default function NavbarSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label)
  }

  return (
    <aside className={cn(`
      group fixed left-0 top-0 h-screen w-64 rounded-tr-[100px] rounded-br-[100px]
      bg-gradient-to-br from-primary/30 via-background/20 to-primary/30
      border-r border-blue-400/20
      backdrop-blur-md backdrop-saturate-150
      shadow-xl z-50 overflow-y-auto transition-all duration-500
    `)}>
      <div className="flex flex-col justify-between h-full py-6">
        
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-primary font-bold text-lg tracking-wide">
            NextAgent-Pro
          </span>
        </div>

        {/* Navegação */}
        <nav className="space-y-1 px-3">
          {menuStructure.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => item.children && toggleMenu(item.label)}
                className="w-full flex items-center justify-between gap-3 text-sm font-medium
                  bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
                  border border-blue-400/20 backdrop-blur-md backdrop-saturate-150
                  rounded-lg px-4 py-2 text-primary hover:text-accent
                  transition-all duration-300 shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
                {item.children && (
                  openMenu === item.label ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                )}
              </button>

              {item.children && openMenu === item.label && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-1.5 text-sm text-blue-100 hover:text-accent transition-all duration-200"
                    >
                      → {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="flex items-center gap-2 px-4 pt-6">
          <div className="w-8 h-8 rounded-full bg-blue-400/30" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-primary">Paulo</span>
            <span className="text-xs text-blue-400">admin@nextagent</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
