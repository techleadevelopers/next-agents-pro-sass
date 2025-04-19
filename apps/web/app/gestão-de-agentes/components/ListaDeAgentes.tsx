'use client'

import React, { useEffect, useState } from 'react'
import { FaRobot, FaDownload, FaCopy, FaPlus } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { CheckCircle, Loader2, XCircle } from 'lucide-react'
import CriarNovoAgente from './CriarNovoAgente'
import { Agente, AgenteNovo } from '../types/agente'

type Props = {
  agentes: Agente[]
  onVerDetalhes: (id: string) => void
  onExportar: (id: string) => void
  onDuplicar: (id: string) => void
  onAtivarDesativar: (id: string) => void
  onCriarNovoAgente: (agente: AgenteNovo) => void
}

export default function ListaDeAgentes({
  agentes,
  onVerDetalhes,
  onExportar,
  onDuplicar,
  onAtivarDesativar,
  onCriarNovoAgente
}: Props) {
  const [animado, setAnimado] = useState(false)
  const [showNovoAgente, setShowNovoAgente] = useState(false)

  useEffect(() => {
    setTimeout(() => setAnimado(true), 300)
  }, [])

  const getStatusIcon = (status: Agente['sessaoWhatsapp']) => {
    switch (status) {
      case 'ONLINE':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />
      case 'LOADING_QR':
        return <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
      case 'OFFLINE':
        return <XCircle className="w-4 h-4 text-gray-400" />
      case 'ERRO':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <TooltipProvider delayDuration={200}>
      <div
        className={cn(
          'w-[86em]',
          'relative',
          'right-[7em]',
          'rounded-xl p-6 shadow-md transition-all duration-700 border border-cyan-300/30',
          'bg-gradient-to-br from-blue-200/30 to-blue-200/30',
          animado ? 'animate-fadeIn' : 'opacity-0'
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl lg:text-2xl font-extrabold bg-gradient-to-r from-cyan-700 via-cyan-700/50 to-cyan-600/40 bg-clip-text text-transparent">
            Painel de HiperAgentes IA
          </h2>

          <Button
            size="sm"
            variant="default"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold"
            onClick={() => setShowNovoAgente((prev) => !prev)}
          >
            <FaPlus className="mr-2" /> Criar Novo Agente
          </Button>
        </div>

        {showNovoAgente && (
          <div className="mb-6">
            <CriarNovoAgente
              onSalvar={(novoAgente) => {
                onCriarNovoAgente(novoAgente)
                setShowNovoAgente(false)
              }}
              onCancelar={() => setShowNovoAgente(false)}
            />
          </div>
        )}

        <div className="overflow-auto rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-sm text-cyan-700/80 bg-cyan-600/10 backdrop-blur-sm">
                <th className="px-4 py-3 text-left">Nome</th>
                <th className="px-4 py-3 text-left">Tipo</th>
                <th className="px-4 py-3 text-left">Conversas</th>
                <th className="px-4 py-3 text-left">Tickets</th>
                <th className="px-4 py-3 text-left">Sucesso</th>
                <th className="px-4 py-3 text-left">IA</th>
                <th className="px-4 py-3 text-left">Sessão WhatsApp</th>
                <th className="px-4 py-3 text-center">Ações</th>
              </tr>
            </thead>

            <tbody>
              {agentes.map((agente) => (
                <tr
                  key={agente.id}
                  className="border-b border-cyan-300/20 hover:bg-cyan-100/10 transition-all"
                >
                  <td className="px-4 py-3 font-semibold text-cyan-900 flex items-center gap-2">
                    <FaRobot className="text-cyan-500" /> {agente.nome}
                  </td>
                  <td className="px-4 py-3 font-medium capitalize text-cyan-800">{agente.tipo}</td>
                  <td className="px-4 py-3">{agente.conversas}</td>
                  <td className="px-4 py-3">{agente.tickets}</td>
                  <td className="px-4 py-3">
                    <Badge
                      className={cn(
                        'text-white font-bold',
                        agente.sucesso >= 90
                          ? 'bg-emerald-500'
                          : agente.sucesso >= 70
                          ? 'bg-emerald-500'
                          : 'bg-red-500'
                      )}
                    >
                      {agente.sucesso}%
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge
                          variant="outline"
                          className={cn(
                            'px-2 text-xs cursor-default',
                            agente.iaTreinada
                              ? 'border-emerald-500 text-emerald-500'
                              : 'border-emerald-500 text-emerald-500'
                          )}
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
                  </td>
                  <td className="px-4 py-3">
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
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-1">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white min-w-[100px]"
                        onClick={() => onVerDetalhes(agente.id)}
                      >
                        Ver Detalhes
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-cyan-600 hover:text-cyan-800"
                        onClick={() => onExportar(agente.id)}
                      >
                        <FaDownload />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-cyan-600 hover:text-cyan-800"
                        onClick={() => onDuplicar(agente.id)}
                      >
                        <FaCopy />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className={cn(
                          'text-white font-semibold min-w-[100px]',
                          agente.status === 'ativo'
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-emerald-500 hover:bg-emerald-600'
                        )}
                        onClick={() => onAtivarDesativar(agente.id)}
                      >
                        {agente.status === 'ativo' ? 'Desativar' : 'Ativar'}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TooltipProvider>
  )
}
