'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/dashboard/ui/table';

import { Badge } from '@/components/dashboard/ui/badge';
import { Button } from '@/components/dashboard/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import { FaRobot, FaDownload, FaCopy } from 'react-icons/fa';

const agentesDesempenho = [
  {
    id: 'agente-b2b',
    nome: 'Agente B2B',
    tipo: 'Dev',
    conversas: 1245,
    tickets: 137,
    sucesso: 92,
    iaTreinada: true,
    sessaoWhatsapp: 'ONLINE',
  },
  {
    id: 'agente-suporte',
    nome: 'Agente Suporte',
    tipo: 'Suporte',
    conversas: 875,
    tickets: 58,
    sucesso: 85,
    iaTreinada: false,
    sessaoWhatsapp: 'LOADING_QR',
  },
  {
    id: 'agente-marketing',
    nome: 'Agente Marketing',
    tipo: 'Campanhas',
    conversas: 489,
    tickets: 31,
    sucesso: 68,
    iaTreinada: false,
    sessaoWhatsapp: 'ERRO',
  },
  {
    id: 'agente-pdv',
    nome: 'Agente PDV',
    tipo: 'Pré-venda',
    conversas: 102,
    tickets: 19,
    sucesso: 73,
    iaTreinada: true,
    sessaoWhatsapp: 'OFFLINE',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'ONLINE':
      return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    case 'LOADING_QR':
      return <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />;
    case 'OFFLINE':
      return <XCircle className="w-4 h-4 text-gray-400" />;
    case 'ERRO':
      return <XCircle className="w-4 h-4 text-red-500" />;
    default:
      return null;
  }
};

export default function TabelaDesempenho() {
  return (
    <TooltipProvider delayDuration={200}>
      <div
        className="
          w-full overflow-x-auto rounded-lg 
          bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20
          border border-cyan-400/20 
          backdrop-blur-md backdrop-saturate-150 
          p-4 animate-fadeIn
        "
      >
        <Table>
          <TableHeader className="bg-cyan-500/5 text-primary">
            <TableRow>
              <TableHead className="text-left px-4 py-2 border-b border-cyan-400/30">Nome</TableHead>
              <TableHead className="text-left px-4 py-2 border-b border-cyan-400/30">Tipo</TableHead>
              <TableHead className="text-left px-4 py-2 border-b border-cyan-400/30">Conversas</TableHead>
              <TableHead className="text-left px-4 py-2 border-b border-cyan-400/30">Tickets</TableHead>
              <TableHead className="text-left px-4 py-2 border-b border-cyan-400/30">Sucesso</TableHead>
              <TableHead className="text-left px-4 py-2 border-b border-cyan-400/30">IA</TableHead>
              <TableHead className="text-left px-4 py-2 border-b border-cyan-400/30">Sessão WhatsApp</TableHead>
              <TableHead className="text-center px-4 py-2 border-b border-cyan-400/30">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {agentesDesempenho.map((agente, index) => (
              <TableRow
                key={index}
                className="hover:bg-cyan-500/5 transition border-b border-cyan-400/20"
              >
                <TableCell className="px-4 py-3 font-extrabold text-cyan-900 flex items-center gap-2">
                  <FaRobot className="text-cyan-500" /> {agente.nome}
                </TableCell>

                <TableCell className="px-4 py-3 capitalize font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {agente.tipo}
                </TableCell>

                <TableCell className="px-4 py-3 text-foreground">{agente.conversas}</TableCell>
                <TableCell className="px-4 py-3 text-foreground">{agente.tickets}</TableCell>

                <TableCell className="px-4 py-3">
                  <Badge
                    className={`font-bold text-white ${
                      agente.sucesso >= 90
                        ? 'bg-emerald-500'
                        : agente.sucesso >= 70
                        ? 'bg-emerald-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {agente.sucesso}%
                  </Badge>
                </TableCell>

                <TableCell className="px-4 py-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className={`px-2 text-xs cursor-default ${
                          agente.iaTreinada
                            ? 'border-emerald-500 text-emerald-500'
                            : 'border-emerald-500 text-emerald-500'
                        }`}
                      >
                        {agente.iaTreinada ? 'IA Treinada' : 'Treinamento Pendente'}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      {agente.iaTreinada
                        ? 'Este agente está com IA pronta para responder.'
                        : 'A IA deste agente ainda não foi treinada completamente.'}
                    </TooltipContent>
                  </Tooltip>
                </TableCell>

                <TableCell className="px-4 py-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 border border-cyan-200 text-xs text-cyan-800">
                        {getStatusIcon(agente.sessaoWhatsapp)}
                        {agente.sessaoWhatsapp}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Status atual da sessão WhatsApp do agente.
                    </TooltipContent>
                  </Tooltip>
                </TableCell>

                <TableCell className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-1 flex-wrap">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-primary/50 hover:bg-accent/90 text-white font-bold transition duration-200 backdrop-blur-sm min-w-[100px]"
                      onClick={() => alert(`Ver detalhes de ${agente.nome}`)}
                    >
                      Ver Detalhes
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-cyan-600 hover:text-cyan-800"
                      onClick={() => alert(`Exportar ${agente.nome}`)}
                    >
                      <FaDownload />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-cyan-600 hover:text-cyan-800"
                      onClick={() => alert(`Duplicar ${agente.nome}`)}
                    >
                      <FaCopy />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  );
}
