'use client'

import React from 'react'
import { MoreHorizontal } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/gestão-de-agentes/ui/tooltip'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/gestão-de-agentes/ui/dropdown-menu'

import { Badge } from '@/components/gestão-de-agentes/ui/badge'
import { Button } from '@/components/gestão-de-agentes/button'

interface Agente {
  id: string
  nome: string
  tipo: string
  status: 'ativo' | 'inativo' | 'em configuração' | 'erro'
}

interface ListaDeAgentesProps {
  agentes: Agente[]
  onEditar: (id: string) => void
  onExcluir: (id: string) => void
  onAtivarDesativar: (id: string) => void
  onCriarNovoAgente: () => void
}

const ListaDeAgentes = ({
  agentes,
  onEditar,
  onExcluir,
  onAtivarDesativar,
  onCriarNovoAgente
}: ListaDeAgentesProps) => {
  return (
    <div
      className="
        max-w-6xl mx-auto p-6 rounded-lg
        bg-gradient-to-br 
        from-primary/20 
        via-accent/10 
        to-primary/20
        border border-blue-400/20
        backdrop-blur-md
        backdrop-saturate-150
        space-y-6
        animate-fadeIn
        transition
      "
    >
      <h2
        className="
          text-4xl 
          font-extrabold 
          tracking-tight 
          leading-tight 
          text-center
          border-b border-blue-400 pb-2
          bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
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
              <th className="px-4 py-2 border-b border-blue-400/30 text-center">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {agentes.map((agente) => (
              <tr
                key={agente.id}
                className="hover:bg-blue-500/5 transition border-b border-blue-400/20"
              >
                <td
                  className="
                    px-4 py-3 font-extrabold
                    bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                  "
                >
                  {agente.nome}
                </td>

                <td
                  className="
                    px-4 py-3 capitalize font-extrabold 
                    bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                  "
                >
                  {agente.tipo}
                </td>

                <td className="px-4 py-3">
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

                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="
                              bg-primary/50 
                              hover:bg-accent/90 
                              text-white 
                              font-bold 
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
                            variant="destructive"
                            size="sm"
                            onClick={() => onExcluir(agente.id)}
                          >
                            Excluir
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Excluir Agente</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
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

      {/* Botão Criar Novo Agente com navegação */}
      <div className="flex justify-center pt-6">
        <Button
          onClick={onCriarNovoAgente}
          className="
            bg-primary/50 
            hover:bg-accent/90 
            text-white 
            font-bold 
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
  )
}

export default ListaDeAgentes
