

## Mapeamento Geral de Funções Atuais — agents-core

1. index.ts

export async function askAgent(agentId: string, question: string): Promise<string>
Função central que o WhatsApp SDK chama para responder o usuário. → Internamente chama: executeAgent(agentId, question).

2. agent.factory.ts

export async function askAgent(agentId: string, question: string): Promise<string>
Função de roteamento. → Define qual executor será usado baseado no agentId:

agentId	Executor chamado
agent-sales	executeSalesAgent(question)
agent-support	executeSupportAgent(question)
agent-dev	executeDevAgent(question)

3. sales.executor.ts

export async function executeSalesAgent(question: string): Promise<string>
Busca a resposta em:

AgentKnowledgeBase.find(...)
→ Caso não encontre → Chama IA local:
generateLLMResponse(question)

4. support.executor.ts

export async function executeSupportAgent(question: string): Promise<string>
Mesma lógica do sales.executor.ts.

5. dev.executor.ts

export async function executeDevAgent(question: string): Promise<string>
Mesma lógica do sales.executor.ts.

6. ollama.client.ts

export async function generateLLMResponse(question: string): Promise<string>
Responsável por enviar a pergunta para o Ollama (IA Local) e retornar a resposta.

7. sales.config.ts (Base de Conhecimento Fixa)

export const AgentKnowledgeBase = [
  { question: 'horário de atendimento', answer: '...' },
  { question: 'formas de pagamento', answer: '...' },
  { question: 'vocês vendem notebook', answer: '...' },
]



Resumindo

Função	Local	Objetivo
askAgent	index.ts / agent.factory.ts	Entrada principal da IA
executeSalesAgent	sales.executor.ts	Executor específico de Vendas
executeSupportAgent	support.executor.ts	Executor específico de Suporte
executeDevAgent	dev.executor.ts	Executor específico de Dev
generateLLMResponse	ollama.client.ts	Comunicação com IA Local (Ollama)
AgentKnowledgeBase	sales.config.ts	

Base de conhecimento fixa modo vendas

Quer que eu monte agora um Diagrama de Fluxo Visual dessa arquitetura?
Exemplo brutal estilo Dev IA premium assim:

WhatsApp Message
        │
        ▼
   askAgent()
        │
        ▼
 agent.factory.ts
        │
        ├── agent-sales → executeSalesAgent()
        ├── agent-support → executeSupportAgent()
        └── agent-dev → executeDevAgent()
               │
               ▼
    Busca Base Fixa (AgentKnowledgeBase)
               │
        └─→ Se não encontrar → generateLLMResponse()
               │
               ▼
       Resposta Final (client.sendMessage)