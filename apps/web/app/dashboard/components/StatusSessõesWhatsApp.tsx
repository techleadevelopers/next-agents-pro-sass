'use client';

import React, { useEffect, useState } from 'react';
import { BadgeStatusWhatsApp } from './BadgeStatusWhatsApp';
import { SessaoAcoesRapidas } from './SessaoAcoesRápidas';
// import { api } from '../../utils/api'; // descomente quando for usar a API real
import { Skeleton } from '@/components/ui/skeleton';

type AgentStatus = {
  agentId: string;
  nome: string;
  status: 'ONLINE' | 'OFFLINE' | 'LOADING_QR' | 'ERROR';
  uptime: string;
  ultimaMensagem: string;
};

const MOCK_SESSIONS: AgentStatus[] = [
  {
    agentId: 'agente-b2b',
    nome: 'Agente B2B',
    status: 'ONLINE',
    uptime: '4h 21min',
    ultimaMensagem: 'Olá! Como posso ajudar?',
  },
  {
    agentId: 'agente-suporte',
    nome: 'Agente Suporte',
    status: 'LOADING_QR',
    uptime: '—',
    ultimaMensagem: '—',
  },
  {
    agentId: 'agente-vendas',
    nome: 'Agente Vendas',
    status: 'OFFLINE',
    uptime: '—',
    ultimaMensagem: '—',
  },
];

export const StatusSessoesWhatsApp: React.FC = () => {
  const [statuses, setStatuses] = useState<AgentStatus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simula delay de carregamento da API
    const timeout = setTimeout(() => {
      setStatuses(MOCK_SESSIONS);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-32" />;
  }

  return (
    <div className="bg-card p-5 rounded-lg shadow border border-slate-200">
      <h2 className="text-lg font-bold mb-4">🟢 Sessões WhatsApp em Tempo Real</h2>
      <div className="space-y-4">
        {statuses.map((agent) => (
          <div
            key={agent.agentId}
            className="p-4 bg-slate-50 rounded-md border border-slate-100"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold">{agent.nome}</h3>
                <p className="text-xs text-muted-foreground">Última msg: {agent.ultimaMensagem}</p>
                <p className="text-xs text-muted-foreground">Ativo há: {agent.uptime}</p>
              </div>
              <BadgeStatusWhatsApp status={agent.status} />
            </div>

            <SessaoAcoesRapidas
              agentId={agent.agentId}
              onRecarregar={() => alert(`🔁 Recarregar sessão: ${agent.nome}`)}
              onVerQR={() => alert(`📷 Mostrar QR para: ${agent.nome}`)}
              onDiagnostico={() => alert(`🧪 Diagnóstico do agente: ${agent.nome}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
