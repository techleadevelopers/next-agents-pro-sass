import { makeWhatsAppClient } from './whatsapp.client'
import { WASocket } from '@whiskeysockets/baileys'

export class WhatsAppManager {
  private static clients: Map<string, WASocket> = new Map()

  // Cria ou retorna o client existente
  public static async getClient(agentId: string): Promise<WASocket> {
    if (this.clients.has(agentId)) {
      console.log(`Client WhatsApp já existe para AgentID: ${agentId}`)
      return this.clients.get(agentId) as WASocket
    }

    console.log(`Criando novo Client WhatsApp para AgentID: ${agentId}`)

    const client = await makeWhatsAppClient(agentId)

    this.clients.set(agentId, client)

    return client
  }

  // Desconecta o client de um agent específico
  public static async disconnectClient(agentId: string): Promise<void> {
    if (!this.clients.has(agentId)) {
      console.log(`Nenhum Client WhatsApp encontrado para AgentID: ${agentId}`)
      return
    }

    const client = this.clients.get(agentId)

    await client?.logout()

    this.clients.delete(agentId)

    console.log(`Client WhatsApp desconectado para AgentID: ${agentId}`)
  }

  // Lista todos clients conectados
  public static listClients(): string[] {
    return Array.from(this.clients.keys())
  }
}
