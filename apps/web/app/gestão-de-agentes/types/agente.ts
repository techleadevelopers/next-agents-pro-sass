export type Agente = {
  id: string
  nome: string
  tipo: string
  status: 'ativo' | 'inativo'
  descricao?: string
}

export type AgenteNovo = Omit<Agente, 'id' | 'status'>
