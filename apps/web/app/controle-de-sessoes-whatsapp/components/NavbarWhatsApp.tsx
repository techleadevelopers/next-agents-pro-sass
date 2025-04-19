"use client";

import React, { useState } from "react";

import {
  Bot, QrCode, Brain, MessageSquareText,
  BarChart4, Users, FileText, ChevronRight,
  ChevronDown, LayoutDashboard, Building2, 
  HelpCircle, CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuStructure = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Clientes",
    icon: Building2,
    children: [
      { label: "Gestão de Tenants", href: "/gestao-de-clientes" },
      { label: "Configurações Multi-tenant", href: "/configuracoes-clientes" },
    ],
  },
  {
    label: "Agentes IA",
    icon: Bot,
    children: [
      { label: "Listar Agentes", href: "/gestao-de-agentes" },
      { label: "Desempenho por Agente", href: "/metricas-avancadas" },
      { label: "Treinamento IA", href: "/treinamento-agentes" },
    ],
  },
  {
    label: "WhatsApp",
    icon: QrCode,
    children: [
      { label: "Status Sessão", href: "/controle-de-sessoes-whatsapp#status" },
      { label: "Gerar QR Code", href: "/controle-de-sessoes-whatsapp#qrcode" },
      { label: "Logs", href: "/controle-de-sessoes-whatsapp#logs" },
    ],
  },
  {
    label: "Templates IA",
    icon: Brain,
    children: [
      { label: "Loja de Templates", href: "/loja-templates-ia" },
      { label: "Biblioteca Pessoal", href: "/templates-de-fluxo-ia" },
      { label: "Criar Template", href: "/criar-template" },
    ],
  },
  {
    label: "Conversas",
    icon: MessageSquareText,
    children: [
      { label: "Histórico", href: "/historico-de-conversas" },
      { label: "Análise de Conversas", href: "/analise-de-conversas" },
      { label: "Filtros e Logs", href: "/historico-de-conversas#filtros" },
    ],
  },
  {
    label: "Financeiro",
    icon: CreditCard,
    children: [
      { label: "Faturamento", href: "/financeiro/faturamento" },
      { label: "Planos & Assinaturas", href: "/financeiro/planos" },
      { label: "Histórico", href: "/financeiro" },
    ],
  },
  {
    label: "Analytics",
    icon: BarChart4,
    children: [
      { label: "KPIs SaaS", href: "/kpis-saas" },
      { label: "ROI Premium", href: "/servicos-premium/demonstracaoroi" },
      { label: "Métricas IA", href: "/metricas-ia" },
    ],
  },
  {
    label: "Administração",
    icon: Users,
    children: [
      { label: "Usuários e Permissões", href: "/permissoes-e-usuarios" },
      { label: "Configurações IA", href: "/configuracoes-avancadas-ia" },
      { label: "Configurações Gerais", href: "/configuracoes-gerais" },
    ],
  },
  {
    label: "Suporte",
    icon: HelpCircle,
    children: [
      { label: "Central de Ajuda", href: "/suporte" },
      { label: "Documentação API", href: "/documentacao-api" },
      { label: "Tutoriais", href: "/tutoriais" },
    ],
  },
  {
    label: "Relatórios",
    icon: FileText,
    href: "/relatorios",
  },
];

export default function NavbarSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <aside 
      className={cn(`
        fixed top-0 left-0 h-screen w-64 
        bg-gradient-to-br from-white via-cyan-700/10 to-blue-500/22 
        border-r border-white-400/30 z-50
       text-gray-800 flex flex-col
        transition-all duration-300 ease-in-out
      `)}
    >

        {/* User Profile Footer */}
        <div className="border-t border-cyan-100/30 px-4 py-4 mt-[7em] bg-white/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-cyan-200/50">
            <img
              src="https://i.pravatar.cc/100?u=nextagent"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xs leading-tight">
            <p className="font-semibold text-cyan-800">Paulo</p>
            <p className="text-cyan-600/70 text-xs">admin@nextagent</p>
          </div>
        </div>
      </div>
    

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 custom-scrollbar">
        {menuStructure.map((item) => (
          <div key={item.label} className="select-none">
            {item.href && !item.children ? (
              <button
                onClick={() => {}}
                className="w-full flex items-center px-3 py-2.5 rounded-md hover:bg-cyan-100/30 transition-all duration-200 group"
              >
                <span className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-cyan-600/80" />
                  <span className="text-sm font-medium group-hover:text-cyan-700 transition-colors">
                    {item.label}
                  </span>
                </span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => item.children && toggleMenu(item.label)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-cyan-100/30 transition-all duration-200 group"
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-cyan-600/80" />
                    <span className="text-sm font-medium group-hover:text-cyan-700 transition-colors">
                      {item.label}
                    </span>
                  </span>
                  {item.children && (
                    <span className="text-cyan-500/70">
                      {openMenu === item.label ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </span>
                  )}
                </button>

                {item.children && openMenu === item.label && (
                  <div className="mt-1 ml-4 pl-2 border-l border-cyan-100/30 space-y-1">
                    {item.children.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => {}}
                        className="block w-full text-left text-sm px-4 py-2 text-gray-700 hover:text-cyan-700 hover:bg-cyan-100/20 transition-colors rounded-md"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
        {/* Header with Logo and Branding */}
        <div className="flex items-center px-6 py-4 mb-20 border-b border-cyan-100/30 bg-white/20">
        <div className="flex items-center gap-3">
          <div className="" />
          <div className="text-lg font-bold tracking-wider text-cyan-800">
            NextAgent-Pro
          </div>
        </div>
      </div>

    </aside>
  );
}
