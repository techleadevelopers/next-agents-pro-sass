'use client'

import React, { useState } from 'react'
import { AgenteNovo } from '../types/agente'

type Props = {
  onSalvar: (novoAgente: AgenteNovo) => void
  onCancelar: () => void
}

const CriarNovoAgente = ({ onSalvar, onCancelar }: Props) => {
  const [nome, setNome] = useState('')
  const [tipoAgente, setTipoAgente] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSalvar({ nome, tipo: tipoAgente, descricao })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        max-w-xl mx-auto p-6 rounded-lg
        bg-gradient-to-br 
        from-primary/20 
        via-accent/40 
        to-primary/80
        border border-blue-400/20
        backdrop-blur-md
        backdrop-saturate-150
        space-y-6
        animate-fadeIn
        transition
      "
    >
      <h2 className="text-2xl font-bold text-primary mb-2 border-b border-blue-400 pb-2">
        Criar Novo Agente IA
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Nome:
          </label>
          <input
  type="text"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  placeholder="Digite o nome do agente"
  className="
    w-full p-2 
    bg-gradient-to-r 
    from-primary/30 
    via-accent/40 
    to-primary/30
    border border-blue-400/20 
    text-black 
    rounded-lg 
    backdrop-blur-sm
    focus:outline-none focus:ring-2 focus:ring-blue-500 
    transition
  "
/>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Tipo de Agente:
          </label>
          <select
  value={tipoAgente}
  onChange={(e) => setTipoAgente(e.target.value)}
  className="
    w-full p-2 
    bg-gradient-to-r 
    from-primary/30 
    via-accent/40 
    to-primary/30
    border border-blue-400/20 
    text-black 
    rounded-lg 
    backdrop-blur-sm
    focus:outline-none focus:ring-2 focus:ring-blue-500 
    transition
  "
>
            <option value="">Selecione um tipo</option>
            <option value="suporte">Suporte</option>
            <option value="vendas">Vendas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Descrição:
          </label>
          <textarea
  value={descricao}
  onChange={(e) => setDescricao(e.target.value)}
  placeholder="Descrição do agente..."
  className="
    w-full p-2 
    bg-gradient-to-r 
    from-primary/30 
    via-accent/40 
    to-primary/30
    border border-blue-400/20 
    text-black 
    rounded-lg 
    backdrop-blur-sm
    focus:outline-none focus:ring-2 focus:ring-blue-500 
    transition
  "
/>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancelar}
          className="
            px-4 py-2 
            border border-zinc-500 
            text-black 
            rounded-lg 
            hover:bg-zinc-200 
            transition
          "
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="
            px-6 py-2 
            bg-primary/50 
            hover:bg-accent/90 
            text-white 
            font-bold 
            rounded-lg 
            shadow-lg 
            backdrop-blur-sm
            transition-all
          "
        >
          Salvar Agente
        </button>
      </div>
    </form>
  )
}

export default CriarNovoAgente
