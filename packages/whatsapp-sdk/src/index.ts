import { WhatsAppManager } from './core/whatsapp.manager'
import { proto, WASocket } from '@whiskeysockets/baileys'

async function bootstrap() {
  const agentId = 'agent-paulo'

  const client = await WhatsAppManager.getClient(agentId)

  client.ev.on('messages.upsert', async ({ messages, type }) => {
    console.log('Nova mensagem recebida:', JSON.stringify(messages, null, 2))
  })

  client.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update

    if (connection === 'close') {
      console.log(`Desconectado AgentID: ${agentId}`)
      await WhatsAppManager.disconnectClient(agentId)
    }

    if (connection === 'open') {
      console.log(`Conectado com sucesso AgentID: ${agentId}`)
    }
  })
}

bootstrap()
