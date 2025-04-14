'use client'

import React, { useState } from 'react'
import ListaDeAgentes from '../components/ListaDeAgentes'
import CriarNovoAgente from '../components/CriarNovoAgente'
import EditarAgente from '../components/EditarAgente'
import { Agente, AgenteNovo } from '../types/agente'

const GestãoDeAgentesContainer = () => {
  const [agentes, setAgentes] = useState<Agente[]>([
    { id: '1', nome: 'Agente B2B', tipo: 'dev', status: 'ativo' },
    { id: '2', nome: 'Agente Suporte', tipo: 'suporte', status: 'inativo' }
  ])

  const [view, setView] = useState<'lista' | 'criar' | 'editar'>('lista')
  const [agenteSelecionado, setAgenteSelecionado] = useState<Agente | null>(null)

  const handleCriarAgente = (novoAgente: AgenteNovo) => {
    setAgentes((prev) => [
      ...prev,
      {
        ...novoAgente,
        id: Date.now().toString(),
        status: 'ativo'
      }
    ])
    setView('lista')
  }

  const handleEditar = (id: string) => {
    const agente = agentes.find((a) => a.id === id)
    if (agente) {
      setAgenteSelecionado(agente)
      setView('editar')
    }
  }

  const handleSalvarEdicao = (agenteEditado: Agente) => {
    setAgentes((prev) =>
      prev.map((a) => (a.id === agenteEditado.id ? agenteEditado : a))
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
          onEditar={handleEditar}
          onExcluir={handleExcluir}
          onAtivarDesativar={handleAtivarDesativar}
          onCriarNovoAgente={() => setView('criar')}
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
