'use client'

import React, { useState } from 'react'
import { AgenteNovo, NichoDeMercado, NivelIA } from '../types/agente'

type Props = {
  onSalvar: (novoAgente: AgenteNovo) => void
  onCancelar: () => void
}

const CriarNovoAgente = ({ onSalvar, onCancelar }: Props) => {
  const [nome, setNome] = useState('')
  const [tipoAgente, setTipoAgente] = useState('')
  const [descricao, setDescricao] = useState('')
  const [nicho, setNicho] = useState<NichoDeMercado | ''>('') // corrigido
  const [nivelIA, setNivelIA] = useState<NivelIA | ''>('básico') // corrigido

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const agenteFicticio: AgenteNovo = {
      nome,
      tipo: tipoAgente,
      descricao,
      sucesso: Math.floor(Math.random() * 21) + 80, // 80-100%
      conversas: 0,
      tickets: 0,
      iaTreinada: false,
      sessaoWhatsapp: 'OFFLINE',
      nicho: nicho || undefined,
      nivelIA: nivelIA || undefined,
    }

    onSalvar(agenteFicticio)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 rounded-lg bg-gradient-to-br from-primary/20 via-accent/40 to-primary/80 border border-cyan-400/20 backdrop-blur-md backdrop-saturate-150 space-y-6 animate-fadeIn transition"
    >
      <h2 className="text-2xl font-bold text-primary mb-2 border-b border-cyan-400 pb-2">
        Criar Novo Agente IA
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do agente"
            className="w-full p-2 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 border border-cyan-400/20 text-black rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">Tipo de Agente:</label>
          <select
            value={tipoAgente}
            onChange={(e) => setTipoAgente(e.target.value)}
            className="w-full p-2 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 border border-cyan-400/20 text-black rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          >
            <option value="">Selecione um tipo</option>
            <option value="suporte">Suporte</option>
            <option value="vendas">Vendas</option>
            <option value="cobranca">Cobrança</option>
            <option value="onboarding">Onboarding</option>
            <option value="personalizado">Personalizado</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">Nicho de Mercado:</label>
          <select
            value={nicho}
            onChange={(e) => setNicho(e.target.value as NichoDeMercado)}
            className="w-full p-2 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 border border-cyan-400/20 text-black rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          >
            <option value="">Selecione o nicho</option>
            <option value="clinica">Clínica / Hospital</option>
            <option value="restaurante">Restaurante</option>
            <option value="imobiliaria">Imobiliária</option>
            <option value="academia">Academia</option>
            <option value="ecommerce">E-commerce</option>
            <option value="servicos">Serviços gerais</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">Nível da IA:</label>
          <select
            value={nivelIA}
            onChange={(e) => setNivelIA(e.target.value as NivelIA)}
            className="w-full p-2 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 border border-cyan-400/20 text-black rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          >
            <option value="básico">Básico</option>
            <option value="intermediário">Intermediário</option>
            <option value="avançado">Avançado</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição do agente..."
            className="w-full p-2 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 border border-cyan-400/20 text-black rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancelar}
          className="px-4 py-2 border border-zinc-500 text-black rounded-lg hover:bg-zinc-200 transition"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-primary/50 hover:bg-accent/90 text-white font-bold rounded-lg shadow-lg backdrop-blur-sm transition-all"
        >
          Salvar Agente
        </button>
      </div>
    </form>
  )
}

export default CriarNovoAgente
