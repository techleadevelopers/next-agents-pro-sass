import { generateLLMResponse } from '../llm/ollama.client'

/**
 * SalesChainFlow
 * Fluxo IA do agente de vendas (Sales)
 * Futuramente aqui vamos montar LangChain + Tools + Memory
 */
export async function SalesChainFlow(question: string): Promise<string> {
  // Exemplo básico - Só chama LLM local (Ollama)
  return generateLLMResponse(question)
}
