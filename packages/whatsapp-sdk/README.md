## Mapeamento Geral de Funções Atuais — whatsapp-sdk

1. receive-message.service.ts

export async function handleIncomingMessage(client: WASocket, msg: proto.IWebMessageInfo, agentId: string)
Função responsável por:

Extrair o texto puro da mensagem → extrairTextoMensagem(msg)

Enviar esse texto para a IA → askAgent(agentId, question)

Responder o usuário via WhatsApp → sendTextMessage(client, remoteJid, respostaIA)

2. send-message.service.ts

export async function sendTextMessage(client: WASocket, remoteJid: string, text: string)
Função responsável por:

Enviar mensagem de texto simples de resposta

Abstrai o client.sendMessage

3. whatsapp.client.ts

export async function makeWhatsAppClient(agentId: string): Promise<WASocket>
Função responsável por:

Criar e inicializar o client WhatsApp

Gerenciar sessão MultiFileAuthState

Mostrar QRCode no terminal

Controlar reconexão automática

Escutar eventos de mensagens e passar pra: → handleIncomingMessage(...)

4. whatsapp.manager.ts


export class WhatsAppManager
Classe responsável por:

Gerenciar múltiplos clientes WhatsApp (multi-agente)

Criar novos clients com makeWhatsAppClient(agentId)

Desconectar client com disconnectClient(agentId)

Listar clients conectados com listClients()

5. whatsapp.session.ts

export class WhatsAppSessionManager
Classe responsável por:

Definir e organizar o path das sessões

Criar pastas dinamicamente

Gerar auth state da sessão (useMultiFileAuthState)

6. whatsapp.config.ts (opcional - se estiver usando NestJS)

export class WhatsAppSdkModule
Responsável por:

Registrar no NestJS os providers:

SendMessageService

ReceiveMessageService

WhatsAppManager

Resumindo:
Função	Local	Objetivo Principal
handleIncomingMessage	receive-message.service.ts	Receber, processar e responder mensagem WhatsApp
sendTextMessage	send-message.service.ts	Enviar resposta via WhatsApp
makeWhatsAppClient	whatsapp.client.ts	Criar e gerenciar client do WhatsApp
WhatsAppManager	whatsapp.manager.ts	Controlar multi-clients WhatsApp
WhatsAppSessionManager	whatsapp.session.ts	Gerenciar sessões e pastas de autenticação
WhatsAppSdkModule	whatsapp.config.ts (NestJS)	Registrar serviços para injeção de dependência

Exemplo assim:


Mensagem Recebida WhatsApp
         │
         ▼
 handleIncomingMessage()
         │
 extrairTextoMensagem()
         │
         ▼
 askAgent(agentId, question) → agents-core
         │
         ▼
Resposta Gerada IA (Base Fixa ou Ollama)
         │
         ▼
 sendTextMessage(client, remoteJid, respostaIA)
         │
         ▼
Mensagem Respondida via WhatsApp

# WhatsApp SDK — NexAgent-Pro

Módulo ultra modular e escalável para integração com WhatsApp Business API via Baileys SDK.

## Visão Geral

Este SDK foi desenvolvido para ser a camada de abstração e gerenciamento de sessões WhatsApp no projeto NexAgent-Pro.

Permite múltiplas instâncias por agente (multi-tenant), gerenciadas de forma independente.

## Características

- Multi-Sessão WhatsApp (Multi-AgentId)
- Autenticação com QRCode (MultiFileAuthState)
- Recebimento e Envio de Mensagens
- Armazenamento de Sessões Local
- Persistência de Store em JSON
- Reconexão Automática
- Design Modular: Client, Manager, Session, Config, Utils, Types
- Preparado para escalabilidade em produção
- Pronto para CI/CD Automático via GitHub Actions

## Estrutura do SDK

src/ ├── core/ │ ├── whatsapp.client.ts # Configuração do cliente WASocket │ ├── whatsapp.manager.ts # Gerenciador de múltiplas sessões │ ├── whatsapp.session.ts # Gestão de auth state │ ├── whatsapp.config.ts # Configurações globais do SDK │ ├── whatsapp.utils.ts # Funções utilitárias │ ├── whatsapp.types.ts # Tipos Globais │ ├── services/ │ ├── send-message.service.ts # Envio de mensagens │ └── receive-message.service.ts# Recebimento e tratamento de mensagens

index.ts # Bootstrap para testes locais


## Uso Básico

```typescript
import { WhatsAppManager } from './core/whatsapp.manager'

async function bootstrap() {
  const client = await WhatsAppManager.getClient('agent-paulo')

  client.ev.on('messages.upsert', async (msg) => {
    console.log('Nova mensagem recebida:', msg)
  })
}
bootstrap()


Scripts Disponíveis
Comando	Descrição
npm run dev	Rodar local em modo desenvolvimento
npm run build	Build do SDK
npm run lint	Lint do código fonte
Pipeline CI/CD
Automação completa via GitHub Actions:

Lint

Build

Testes Automatizados (futuro)

Licença
MIT License

Desenvolvido por Paulo Silas de Campos Filho — NexAgent-Pro HyperAgents IA

---
