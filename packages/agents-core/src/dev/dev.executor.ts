import { AgentKnowledgeBase } from './dev.config'
import { generateLLMResponse } from '../llm/ollama.client'

export async function executeDevAgent(question: string): Promise<string> {
  const found = AgentKnowledgeBase.find(item =>
    question.toLowerCase().includes(item.question.toLowerCase())
  )

  if (found) return found.answer

  return generateLLMResponse(question)
}
