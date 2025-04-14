// src/core/agent.factory.ts

import { executeAgent } from '../sales/sales.executor'
import { executeSupportAgent } from '../support/support.executor'
import { executeDevAgent } from '../dev/dev.executor'

export async function askAgent(agentId: string, question: string): Promise<string> {
  switch (agentId) {
    case 'agent-sales':
      return executeAgent(question)

    case 'agent-support':
      return executeSupportAgent(question)

    case 'agent-dev':
      return executeDevAgent(question)

    default:
      return 'Agente não encontrado.'
  }
}
