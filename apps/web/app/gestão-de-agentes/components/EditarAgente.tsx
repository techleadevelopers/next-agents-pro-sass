'use client'

import React, { useState } from 'react'
import { Agente } from '../types/agente'

type Props = {
  agente: Agente
  onSalvar: (agenteEditado: Agente) => void
  onCancelar: () => void
}

const EditarAgente = ({ agente, onSalvar, onCancelar }: Props) => {
  const [nome, setNome] = useState(agente.nome)
  const [tipoAgente, setTipoAgente] = useState(agente.tipo)
  const [descricao, setDescricao] = useState(agente.descricao || '')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onSalvar({
      ...agente,
      nome,
      tipo: tipoAgente,
      descricao,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl space-y-6 animate-fadeIn"
    >
      <h2 className="text-2xl font-bold text-green-400 mb-2 border-b border-zinc-700 pb-2">
        Editar Agente IA
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-1">
            Nome:
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do agente"
            className="w-full p-2 bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-1">
            Tipo de Agente:
          </label>
          <select
            value={tipoAgente}
            onChange={(e) => setTipoAgente(e.target.value)}
            className="w-full p-2 bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Selecione um tipo</option>
            <option value="suporte">Suporte</option>
            <option value="vendas">Vendas</option>
            <option value="dev">Dev</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-1">
            Descrição:
          </label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição do agente..."
            className="w-full p-2 bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancelar}
          className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-800 transition"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all"
        >
          Salvar Alterações
        </button>
      </div>
    </form>
  )
}

export default EditarAgente
