
import { WASocket } from '@whiskeysockets/baileys'

/**
 * Interface padrão de envio de mensagem.
 */
export interface SendMessagePayload {
  agentId: string
  to: string
  message: string
}

/**
 * Interface de um Client WhatsApp registrado no Manager.
 */
export interface WhatsAppClientInstance {
  agentId: string
  client: WASocket
}
