import { executeAgent } from './core/agent.executor'

export async function askAgent(agentId: string, question: string): Promise<string> {
  return executeAgent(agentId, question)
}
