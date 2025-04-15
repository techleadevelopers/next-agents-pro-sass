import React, { useState, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/gestão-de-agentes/ui/tooltip';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/gestão-de-agentes/ui/dropdown-menu';

import { Badge } from '@/components/gestão-de-agentes/ui/badge';
import { Button } from '@/components/gestão-de-agentes/button';

interface Agente {
  id: string;
  nome: string;
  tipo: string;
  status: 'ativo' | 'inativo' | 'em configuração' | 'erro';
  historico?: string[];
  configuracoes?: string[];
}

interface ListaDeAgentesProps {
  agentes: Agente[];
  onEditar: (id: string) => void;
  onExcluir: (id: string) => void;
  onAtivarDesativar: (id: string) => void;
  onCriarNovoAgente: () => void;
}

const ListaDeAgentes = ({
  agentes,
  onEditar,
  onExcluir,
  onAtivarDesativar,
  onCriarNovoAgente
}: ListaDeAgentesProps) => {
  const [animacao, setAnimacao] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simula um carregamento inicial
    setIsLoading(true);
    setTimeout(() => {
      setAnimacao(true);
      setIsLoading(false);
    }, 500);
  }, []);

  // Renderiza o estado de carregamento
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <p className="text-lg font-medium text-gray-600">Carregando...</p>
      </div>
    );
  }

  // Renderiza em caso de erro
  if (error) {
    return (
      <div className="flex items-center justify-center h-48">
        <p className="text-lg font-medium text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div
      className={`max-w-6xl mx-auto p-6 rounded-lg ${
        animacao ? 'animate-fadeIn' : 'opacity-0'
      } transition-all duration-1000`}
    >
      <h2
        className="
          text-3xl 
          font-extrabold 
          tracking-tight 
          leading-tight 
          text-center
          border-b border-blue-400 pb-2
          bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
          animate-gradient-x
        "
      >
        Lista de Agentes IA
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-black">
          <thead>
            <tr className="bg-blue-500/5 text-left text-sm uppercase tracking-wider text-primary backdrop-blur-sm">
              <th className="px-4 py-2 border-b border-blue-400/30">Nome</th>
              <th className="px-4 py-2 border-b border-blue-400/30">Tipo</th>
              <th className="px-4 py-2 border-b border-blue-400/30">Status</th>
              <th className="px-4 py-2 border-b border-blue-400/30">Histórico</th>
              <th className="px-4 py-2 border-b border-blue-400/30">Configurações</th>
              <th className="px-4 py-2 border-b border-blue-400/30 text-center">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {agentes.map((agente) => (
              <tr
                key={agente.id}
                className={`hover:bg-blue-500/5 transition border-b border-blue-400/20 ${
                  animacao ? 'animate-slideIn' : 'opacity-0'
                }`}
              >
                <td
                  className="
                    px-4 py-2 font-medium
                    bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                  "
                >
                  {agente.nome}
                </td>

                <td
                  className="
                    px-4 py-2 capitalize font-medium 
                    bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                  "
                >
                  {agente.tipo}
                </td>

                <td className="px-4 py-2">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 animate-pulse ${
                      agente.status === 'ativo'
                        ? 'bg-green-500 shadow-green-500/50'
                        : agente.status === 'inativo'
                        ? 'bg-red-500 shadow-red-500/50'
                        : 'bg-yellow-500 shadow-yellow-500/50'
                    }`}
                  ></span>
                  <Badge
                    variant={
                      agente.status === 'ativo'
                        ? 'success'
                        : agente.status === 'inativo'
                        ? 'destructive'
                        : agente.status === 'em configuração'
                        ? 'warning'
                        : 'secondary'
                    }
                  >
                    {agente.status.toUpperCase()}
                  </Badge>
                </td>

                <td className="px-4 py-2">
                  {agente.historico?.length ? (
                    <ul>
                      {agente.historico.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="italic text-gray-500">Nenhum histórico</span>
                  )}
                </td>

                <td className="px-4 py-2">
                  {agente.configuracoes?.length ? (
                    <ul>
                      {agente.configuracoes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="italic text-gray-500">
                      Nenhuma configuração
                    </span>
                  )}
                </td>

                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            aria-label="Editar Agente"
                            variant="secondary"
                            size="sm"
                            className="
                              bg-primary/50 
                              hover:bg-accent/90 
                              text-white 
                              font-medium 
                              transition 
                              duration-200 
                              backdrop-blur-sm
                            "
                            onClick={() => onEditar(agente.id)}
                          >
                            Editar
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Editar Agente</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            aria-label="Excluir Agente"
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              try {
                                onExcluir(agente.id);
                              } catch (e) {
                                setError('Erro ao excluir o agente.');
                              }
                            }}
                          >
                            Excluir
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Excluir Agente</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            aria-label={
                              agente.status === 'ativo'
                                ? 'Desativar Agente'
                                : 'Ativar Agente'
                            }
                            variant="default"
                            size="sm"
                            className={`
                              ${
                                agente.status === 'ativo'
                                  ? 'bg-red-600 hover:bg-red-700 text-white'
                                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                              }
                              transition-all
                            `}
                            onClick={() => onAtivarDesativar(agente.id)}
                          >
                            {agente.status === 'ativo' ? 'Desativar' : 'Ativar'}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Ativar/Desativar</TooltipContent>
                      </Tooltip>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-label="Mais opções"
                            variant="ghost"
                            size="icon"
                            className="hover:bg-blue-500/10"
                          >
                            <MoreHorizontal className="w-5 h-5 text-primary" />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => console.log('Logs Agente')}
                          >
                            Visualizar Logs
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => console.log('Config Avançada')}
                          >
                            Configuração Avançada
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TooltipProvider>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center pt-6">
        <Button
          onClick={onCriarNovoAgente}
          className="
            bg-primary/50 
            hover:bg-accent/90 
            text-white 
            font-medium 
            py-2 px-6 
            rounded 
            transition 
            duration-200 
            backdrop-blur-sm
          "
        >
          Criar Novo Agente
        </Button>
      </div>
    </div>
  );
};

export default ListaDeAgentes;