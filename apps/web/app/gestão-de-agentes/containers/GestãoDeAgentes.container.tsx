'use client'

import React, { useState } from 'react'
import ListaDeAgentes from '../components/ListaDeAgentes'
import CriarNovoAgente from '../components/CriarNovoAgente'
import EditarAgente from '../components/EditarAgente'
import { Agente, AgenteNovo } from '../types/agente'

const GestãoDeAgentesContainer = () => {
  const [agentes, setAgentes] = useState<Agente[]>([
    {
      id: '1',
      nome: 'Agente B2B',
      tipo: 'dev',
      status: 'ativo',
      sucesso: 92,
      conversas: 1245,
      tickets: 137,
      iaTreinada: true,
      sessaoWhatsapp: 'ONLINE',
    },
    {
      id: '2',
      nome: 'Agente Suporte',
      tipo: 'suporte',
      status: 'inativo',
      sucesso: 85,
      conversas: 875,
      tickets: 58,
      iaTreinada: false,
      sessaoWhatsapp: 'LOADING_QR',
    },
  ])

  const [view, setView] = useState<'lista' | 'criar' | 'editar'>('lista')
  const [agenteSelecionado, setAgenteSelecionado] = useState<Agente | null>(null)

  const handleCriarAgente = (novo: AgenteNovo) => {
    const novoAgente: Agente = {
      ...novo,
      id: Date.now().toString(),
      status: 'ativo',
      sucesso: 80,
      conversas: 0,
      tickets: 0,
      iaTreinada: false,
      sessaoWhatsapp: 'OFFLINE',
    }

    setAgentes((prev) => [...prev, novoAgente])
    setView('lista')
  }

  const handleEditar = (id: string) => {
    const agente = agentes.find((a) => a.id === id)
    if (agente) {
      setAgenteSelecionado(agente)
      setView('editar')
    }
  }

  const handleSalvarEdicao = (editado: Agente) => {
    setAgentes((prev) =>
      prev.map((a) => (a.id === editado.id ? editado : a))
    )
    setView('lista')
  }

  const handleExcluir = (id: string) => {
    const confirmado = window.confirm('Deseja realmente excluir este agente?')
    if (confirmado) {
      setAgentes((prev) => prev.filter((a) => a.id !== id))
    }
  }

  const handleAtivarDesativar = (id: string) => {
    setAgentes((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: a.status === 'ativo' ? 'inativo' : 'ativo' } : a
      )
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {view === 'lista' && (
       <ListaDeAgentes
       agentes={agentes}
       onVerDetalhes={handleEditar} // ✅ nome esperado pela tipagem do componente
       onExportar={(id) => alert(`Exportar ${id}`)}
       onDuplicar={(id) => {
         const original = agentes.find((a) => a.id === id)
         if (original) {
           const clone = {
             ...original,
             id: Date.now().toString(),
             nome: `${original.nome} (Cópia)`,
           }
           setAgentes((prev) => [...prev, clone])
         }
       }}
       onAtivarDesativar={handleAtivarDesativar}
       onCriarNovoAgente={handleCriarAgente}
     />
     
      )}

      {view === 'criar' && (
        <CriarNovoAgente
          onSalvar={handleCriarAgente}
          onCancelar={() => setView('lista')}
        />
      )}

      {view === 'editar' && agenteSelecionado && (
        <EditarAgente
          agente={agenteSelecionado}
          onSalvar={handleSalvarEdicao}
          onCancelar={() => setView('lista')}
        />
      )}
    </div>
  )
}

export default GestãoDeAgentesContainer
