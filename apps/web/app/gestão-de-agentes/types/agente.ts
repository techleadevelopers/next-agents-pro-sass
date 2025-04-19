export type Agente = {
  id: string
  nome: string
  tipo: string
  status: 'ativo' | 'inativo'
  descricao?: string

  // 🚀 Dados operacionais do agente
  sucesso: number // % de sucesso no atendimento
  conversas: number
  tickets: number
  iaTreinada: boolean
  sessaoWhatsapp: 'ONLINE' | 'OFFLINE' | 'LOADING_QR' | 'ERRO'

  // 🧠 Configurações adicionais
  nicho?: NichoDeMercado
  nivelIA?: NivelIA
}

// ✅ Tipo para criação de novo agente (sem id e status, que são gerados automaticamente)
export type AgenteNovo = Omit<Agente, 'id' | 'status'>

// 🔍 Nichos suportados
export type NichoDeMercado =
  | 'clinica'
  | 'restaurante'
  | 'imobiliaria'
  | 'academia'
  | 'ecommerce'
  | 'servicos'

// 🔍 Níveis de IA
export type NivelIA = 'básico' | 'intermediário' | 'avançado'
